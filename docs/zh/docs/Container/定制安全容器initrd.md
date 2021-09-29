## Kata initrd的生成过程

可参考kata_integration中make initrd流程，大致分为以下几步：

1. 创建rootfs相关目录
2. 将kata-agent重命名为init并放在rootfs根目录下
3. 从编译环境中拷贝kata-agent所需二进制（如mount、umount）到rootfs usr/bin目录下
4. 从编译环境中拷贝以上二进制（包含kata-agent）所需动态链接库到rootfs lib目录下
5. 从编译环境中拷贝内核驱动模块ko文件到rootfs中内核驱动模块目录下
6. 进入rootfs并执行以下命令生成initrd.img

```
( find . | cpio -H newc -o | gzip -9 ) > ./kata-containers-initrd.img
```

## initrd定制参考脚本

```sh
script_dir="$(dirname $(readlink -f $0))"
rpmlist=${script_dir}/make-initrd-rpm.list

BUILD_PATH="./build"
IMAGE_NAME=${IMAGE_NAME:-kata-containers-initrd.img}
AGENT_INIT=${AGENT_INIT:-yes}
ROOTFS_DIR=${ROOTFS_DIR:-/tmp/kataAgent-rootfs}

# create a temp dir to store rootfs
rm -rf ${ROOTFS_DIR}
mkdir -p ${ROOTFS_DIR}/lib \
	  ${ROOTFS_DIR}/lib64 \
	  ${ROOTFS_DIR}/lib/modules

mkdir -m 0755 -p ${ROOTFS_DIR}/dev \
	  ${ROOTFS_DIR}/sys \
	  ${ROOTFS_DIR}/sbin \
	  ${ROOTFS_DIR}/bin \
      ${ROOTFS_DIR}/tmp \
	  ${ROOTFS_DIR}/proc
 
if [ ! -f "${BUILD_PATH}/kata-agent" ];then
	echo "kata-agent doesn't exist!"
	exit 1
fi

# kata-agent
cp ${BUILD_PATH}/kata-agent ${ROOTFS_DIR}/init

# busybox
cp /sbin/busybox ${ROOTFS_DIR}/sbin/

# cp run request files in initrd
cat $rpmlist | while read rpm
do
    if [ "${rpm:0:1}" != "#" ]; then
        rpm -ql $rpm > /dev/null 2>&1
        if [ $? -ne 0 ]; then
            continue
        fi
        array=($(rpm -ql $rpm| grep -v "share" | grep -v ".build-id"))
        for file in ${array[@]};
        do
            source=$file
            dts_file=${ROOTFS_DIR}$file
            dts_folder=${dts_file%/*}
            if [ ! -d "$dts_folder" ];then
                mkdir -p $dts_folder
            fi
            cp -r -f -d $source $dts_folder
        done
    fi
done

#create symlinks to busybox
BUSYBOX_BINARIES=(/bin/sh /bin/mount /bin/umount /bin/ls /bin/ps /bin/file /bin/ldd /bin/tar /bin/hwclock /sbin/modprobe /sbin/depmod /bin/ip /bin/modinfo /bin/insmod /bin/rmmod)
for bin in ${BUSYBOX_BINARIES[@]}
do
 	mkdir -p ${ROOTFS_DIR}/`dirname ${bin}`
 	ln -sf /sbin/busybox ${ROOTFS_DIR}/${bin}
done

LDD_BINARIES=(/init /sbin/busybox)
for bin in ${LDD_BINARIES[@]}
 do
     ldd ${ROOTFS_DIR}${bin} | while read line
     do
 	    arr=(${line// / })

 	    for lib in ${arr[@]}
 	    do
 			echo $lib
 		    if [ "${lib:0:1}" = "/" ]; then
 			    dir=${ROOTFS_DIR}`dirname $lib`
 			    mkdir -p "${dir}"
 			    cp -f $lib $dir
 		    fi
 	    done
     done
 done

(cd ${ROOTFS_DIR} && find . | cpio -H newc -o | gzip -9 ) > ${BUILD_PATH}/${IMAGE_NAME}
```
