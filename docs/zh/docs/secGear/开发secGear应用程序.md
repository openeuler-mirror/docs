# secGear 开发指南


这里给出使用 secGear 开发一个 C 语言程序 helloworld 的例子，方便用户理解使用 secGear 开发应用程序。

## 目录结构说明

使用 secGear 开发的应用程序，遵循统一的目录结构如下：

```
├── helloworld
│   ├── CMakeLists.txt
│   ├── enclave
│   │   ├── CMakeLists.txt
│   │   ├── Enclave.config.xml
│   │   ├── Enclave.lds
│   │   ├── hello.c
│   │   ├── manifest.txt.in
│   │   └── rsa_public_key_cloud.pem
│   ├── helloworld.edl
│   └── host
│       ├── CMakeLists.txt
│       └── main.c
```

## 快速入门

1. 创建程序工作目录 helloworld，并在 helloworld 目录下新建 enclave 和 host

2. 编写 EDL（Enclave Definition Language）文件

   为了确保开发代码的一致性，secGear 提供了 secgear_urts.h 和 secgear_tstdc.edl 用于屏蔽底层 Intel SGX 和 ARM  iTrustee 之间的差异。因此，使用到 C 语言函数库时，EDL 文件默认需要导入 secgear_urts.h 和 secgear_tstdc.edl。helloworld.edl 文件参考如下：

   ```c
   enclave {
   	include "secgear_urts.h"
   	from "secgear_tstdc.edl" import *;
   	trusted {
   		public int get_string([out, size=32]char *buf);
   	};
   };
   ```

   说明：EDL 语法详细信息请参见 Intel SGX 开发指南中对应内容。

3. 编写顶层文件 CMakeLists.txt

   编写顶层文件 CMakeLists.txt，置于 helloworld 工作目录下，用于配置编译时的处理器架构、所需的 EDL 文件等信息。

   其中，EDL_FILE 是 EDL 文件，需用户指定，例子中为 helloworld.edl。DPATH 是安全侧加载动态库，配置如例子中所示。

   ```c
   cmake_minimum_required(VERSION 3.12 FATAL_ERROR)
   project(HelloWorld  C)
   set(CMAKE_C_STANDARD 99)
   set(CURRENT_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
   set(EDL_FILE helloworld.edl)
   set(LOCAL_ROOT_PATH "$ENV{CC_SDK}")
       set(SECGEAR_INSTALL_PATH /lib64/)
   if(CC_GP)
   	set(CODETYPE trustzone)
   	set(CODEGEN codegen_arm64)
   	execute_process(COMMAND uuidgen -r OUTPUT_VARIABLE UUID)
   	string(REPLACE "\n" "" UUID ${UUID})
   	add_definitions(-DPATH="/data/${UUID}.sec")
   endif()
   if(CC_SGX)
   	set(CODETYPE sgx)
   	set(CODEGEN codegen_x86_64)
   	add_definitions(-DPATH="${CMAKE_CURRENT_BINARY_DIR}/enclave/enclave.signed.so")
   endif()
   add_subdirectory(${CURRENT_ROOT_PATH}/enclave)
   add_subdirectory(${CURRENT_ROOT_PATH}/host)
   ```

   

4. 编写非安全侧代码和 CMakeLists.txt 

   4.1 编写 main.c

   编写非安全侧 main.c，置于 host目录。enclave.h 为 secGear 头文件，helloworld_u.h 为辅助代码生成工具生成的头文件。使用 cc_enclave_create 创建安全区 enclave 上下文，cc_enclave_destroy 销毁安全区上下文。
   get_string 为 EDL 文件中定义 trusted 的安全侧函数，注意这里与 EDL 中定义的 get_string 有差别，多出两个参数 context 为安全区上下文，retval 为 EDL 中get_string 的返回值。
   res 为 get_string 调用成功标志。

   ```c
   #include <stdio.h>
   #include "enclave.h"
   #include "helloworld_u.h"
   
   #define BUF_LEN 32
   
   int main()
   {
   	int  retval = 0;
   	char *path = PATH;
   	char buf[BUF_LEN];
   	cc_enclave_t *context = NULL;
   	cc_enclave_result_t res;
   	res = cc_enclave_create(path, AUTO_ENCLAVE_TYPE, 0, SECGEAR_DEBUG_FLAG, NULL, 0, &context);
   ...
   
       res = get_string(context, &retval, buf);
       if (res != CC_SUCCESS || retval != (int)CC_SUCCESS) {
   	    printf("Ecall enclave error\n");
       } else {
   	    printf("%s\n", buf);
       }
   
       if (context != NULL) {
   	    res = cc_enclave_destroy(context);
   	    ...
       }
       return res;
   }
   ```

   4.2 编写非安全侧 CMakeLists.txt

   ```c
   # 设置编译环境变量
   #set auto code prefix
   set(PREFIX helloworld)
   #set host exec name
   set(OUTPUT secgear_helloworld)
   #set host src code
   set(SOURCE_FILE ${CMAKE_CURRENT_SOURCE_DIR}/main.c)
   
   # 使用代码生成工具生成辅助代码。CODEGEN 和 CODETYPE 变量也在顶层 CMakeLists.txt 中定义。--search-path 用于指定 helloword.edl 中导入依赖的其他 EDL 文件路径    
   #set auto code
   if(CC_GP)
   	set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.c ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_args.h)
   	add_custom_command(OUTPUT ${AUTO_FILES}
   	DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
   	COMMAND ${CODEGEN} --${CODETYPE} --untrusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/gp)
   endif()
   
   if(CC_SGX)
   	set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_u.c)
   	add_custom_command(OUTPUT ${AUTO_FILES}
   	DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
   	COMMAND ${CODEGEN} --${CODETYPE} --untrusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/sgx  --search-path ${SGXSDK}/include)
   endif()
       
   # 设置编译选项和链接选项
   set(CMAKE_C_FLAGS "-fstack-protector-all -W -Wall -Werror -Wextra -Werror=array-bounds -D_FORTIFY_SOURCE=2 -O2 -ftrapv -fPIE")
   set(CMAKE_EXE_LINKER_FLAGS    "-Wl,-z,relro -Wl,-z,now -Wl,-z,noexecstack")
   
   # 编译链接引用目录
   if(CC_GP)
   	if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
   		link_directories(${SECGEAR_INSTALL_PATH})
   	endif()
   	add_executable(${OUTPUT} ${SOURCE_FILE} ${AUTO_FILES})
   	target_include_directories(${OUTPUT} PRIVATE
   					/usr/include/secGear/host_inc
   					/usr/include/secGear/host_inc/gp
   					${CMAKE_CURRENT_BINARY_DIR})
   	if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
   		target_link_directories(${OUTPUT} PRIVATE ${SECGEAR_INSTALL_PATH})
   	endif()
   	target_link_libraries(${OUTPUT} secgear)
   endif()
   if(CC_SGX)
   	if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
   		link_directories(${SECGEAR_INSTALL_PATH}  ${SGXSDK}/lib64)
   	endif()
   	set(SGX_MODE HW)
   	if(${SGX_MODE} STREQUAL HW)
   		set(Urts_Library_Name sgx_urts)
   	else()
   		set(Urts_Library_Name sgx_urts_sim)
   	endif()
   	add_executable(${OUTPUT} ${SOURCE_FILE} ${AUTO_FILES} ${LOCAL_ROOT_PATH}/src/host_src/sgx/sgx_log.c)
   	target_include_directories(${OUTPUT} PRIVATE
   						/usr/include/secGear/host_inc
   						/usr/include/secGear/host_inc/sgx
   						${CMAKE_CURRENT_BINARY_DIR})
   	if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
   		target_link_directories(${OUTPUT} PRIVATE ${SECGEAR_INSTALL_PATH}  ${SGXSDK}/lib64)
   	endif()
   	target_link_libraries(${OUTPUT} secgear ${Urts_Library_Name})
   endif()
   
   # 指定二进制安装目录
   set_target_properties(${OUTPUT} PROPERTIES SKIP_BUILD_RPATH TRUE)
   if(CC_GP)
   	install(TARGETS  ${OUTPUT}
   			RUNTIME
   			DESTINATION /vendor/bin/
   			PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ)
   endif()
   if(CC_SGX)
   	install(TARGETS  ${OUTPUT}
   			RUNTIME
   			DESTINATION ${CMAKE_BINARY_DIR}/bin/
   			PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ)
   endif()  
   ```

   

5. 编写安全侧代码、CMakeLists.txt 和配置文件，放在 enclave 目录

   5.1 编写安全侧代码 hello.c

   编写安全侧代码 hello.c，置于 enclave 目录。其中，helloworld_t.h 为辅助代码生成工具，通过 EDL 文件生成的安全侧头文件。

   ```c
   #include <stdio.h>
   #include <string.h>
   #include "helloworld_t.h"
   
   #define TA_HELLO_WORLD        "secGear hello world!"
   #define BUF_MAX 32
   int get_string(char *buf)
   {
   	strncpy(buf, TA_HELLO_WORLD, strlen(TA_HELLO_WORLD) + 1);
   	return 0;
   }
   ```

   5.2 编写安全侧 CMakeLists.txt

   ```
   #set auto code prefix
   set(PREFIX helloworld)
   
   #set sign key
   set(PEM Enclave_private.pem)
   
   #set sign tool
   set(SIGN_TOOL ${LOCAL_ROOT_PATH}/tools/sign_tool/sign_tool.sh)
   
   #set enclave src code
   set(SOURCE_FILES ${CMAKE_CURRENT_SOURCE_DIR}/hello.c)
   
   #set log level
   set(PRINT_LEVEL 3)
   add_definitions(-DPRINT_LEVEL=${PRINT_LEVEL})
   
   # WHITE_LIS_X 设置 itrustee 白名单，只有这些路径的主机二进制文件可以调用此安全映像，并且最多可以配置 8 个列表路径。WHITE_LIST_OWNER 设置用户，此用户将应用于所有白名单路径。DEVICEPEM 公钥由itrustee 使用，并用于通过动态生成的 aes 密钥加密安全侧的安全动态库。
   if(CC_GP)
       #set signed output
       set(OUTPUT ${UUID}.sec)
       #set itrustee device key
       set(DEVICEPEM ${CMAKE_CURRENT_SOURCE_DIR}/rsa_public_key_cloud.pem)
       #set whilelist. default: /vendor/bin/teec_hello
       set(WHITE_LIST_0 /vendor/bin/helloworld)
       set(WHITE_LIST_OWNER root)
       set(WHITE_LIST_1 /vendor/bin/secgear_helloworld)
       set(WHITELIST WHITE_LIST_0 WHITE_LIST_1)
   
       set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.c ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_args.h)
       add_custom_command(OUTPUT ${AUTO_FILES}
       DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
       COMMAND ${CODEGEN} --${CODETYPE} --trusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/gp)
   endif()
   
   # SGX 安全侧动态库签名
   if(CC_SGX)
       set(OUTPUT enclave.signed.so)
       set(AUTO_FILES  ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.h ${CMAKE_CURRENT_BINARY_DIR}/${PREFIX}_t.c)
       add_custom_command(OUTPUT ${AUTO_FILES}
       DEPENDS ${CURRENT_ROOT_PATH}/${EDL_FILE}
       COMMAND ${CODEGEN} --${CODETYPE} --trusted ${CURRENT_ROOT_PATH}/${EDL_FILE} --search-path ${LOCAL_ROOT_PATH}/inc/host_inc/sgx --search-path ${SGXSDK}/include)
   endif()
   
   # 设置编译选项
   set(COMMON_C_FLAGS "-W -Wall -Werror  -fno-short-enums  -fno-omit-frame-pointer -fstack-protector \
   	-Wstack-protector --param ssp-buffer-size=4 -frecord-gcc-switches -Wextra -nostdinc -nodefaultlibs \
   	-fno-peephole -fno-peephole2 -Wno-main -Wno-error=unused-parameter \
           -Wno-error=unused-but-set-variable -Wno-error=format-truncation=")
   
   set(COMMON_C_LINK_FLAGS "-Wl,-z,now -Wl,-z,relro -Wl,-z,noexecstack -Wl,-nostdlib -nodefaultlibs -nostartfiles")
   
   # itrustee 需生成 manifest.txt。指定 itrustee 编译选项和头文件、链接文件的搜索路径
   if(CC_GP)
       configure_file("${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt.in" "${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt")
   
       set(CMAKE_C_FLAGS "${COMMON_C_FLAGS}  -march=armv8-a ")
       set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS}  -s -fPIC")
       set(CMAKE_SHARED_LINKER_FLAGS  "${COMMON_C_LINK_FLAGS} -Wl,-s")
       
       set(ITRUSTEE_TEEDIR ${iTrusteeSDK}/)
       set(ITRUSTEE_LIBC ${iTrusteeSDK}/thirdparty/open_source/musl/libc)
   
       if(${CMAKE_VERSION} VERSION_LESS "3.13.0")
           link_directories(${CMAKE_BINARY_DIR}/lib/)
       endif()
   
       add_library(${PREFIX} SHARED ${SOURCE_FILES} ${AUTO_FILES})
   
       target_include_directories( ${PREFIX} PRIVATE
   	${CMAKE_CURRENT_BINARY_DIR}
   	${LOCAL_ROOT_PATH}/inc/host_inc
   	${LOCAL_ROOT_PATH}/inc/host_inc/gp
   	${LOCAL_ROOT_PATH}/inc/enclave_inc
   	${LOCAL_ROOT_PATH}/inc/enclave_inc/gp
   	${ITRUSTEE_TEEDIR}/include/TA
   	${ITRUSTEE_TEEDIR}/include/TA/huawei_ext
   	${ITRUSTEE_LIBC}/arch/aarch64
   	${ITRUSTEE_LIBC}/
   	${ITRUSTEE_LIBC}/arch/arm/bits
   	${ITRUSTEE_LIBC}/arch/generic
   	${ITRUSTEE_LIBC}/arch/arm
   	${LOCAL_ROOT_PATH}/inc/enclave_inc/gp/itrustee)
   
       if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0")
           target_link_directories(${PREFIX} PRIVATE
   	        ${CMAKE_BINARY_DIR}/lib/)
       endif()
   
       foreach(WHITE_LIST ${WHITELIST})
   	    add_definitions(-D${WHITE_LIST}="${${WHITE_LIST}}")
       endforeach(WHITE_LIST)
       add_definitions(-DWHITE_LIST_OWNER="${WHITE_LIST_OWNER}")
   
       target_link_libraries(${PREFIX} -lsecgear_tee)
   
       add_custom_command(TARGET ${PREFIX}
   	      POST_BUILD
                 COMMAND bash ${SIGN_TOOL} -d sign -x trustzone -i ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/lib${PREFIX}.so -m ${CMAKE_CURRENT_SOURCE_DIR}/manifest.txt 
   	      		-e ${DEVICEPEM} -o ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/${OUTPUT})
   
       install(FILES ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/${OUTPUT}  
           DESTINATION /data
           PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ GROUP_READ GROUP_EXECUTE  WORLD_READ  WORLD_EXECUTE)
   
   endif()
   
   if(CC_SGX)
       set(SGX_DIR ${SGXSDK})
       set(CMAKE_C_FLAGS "${COMMON_C_FLAGS} -m64 -fvisibility=hidden")
       set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS}  -s")
       set(LINK_LIBRARY_PATH ${SGX_DIR}/lib64)
   
       if(CC_SIM)
           set(Trts_Library_Name sgx_trts_sim)
           set(Service_Library_Name sgx_tservice_sim)
       else()
           set(Trts_Library_Name sgx_trts)
           set(Service_Library_Name sgx_tservice)
       endif()
   
       set(Crypto_Library_Name sgx_tcrypto)
   
       set(CMAKE_SHARED_LINKER_FLAGS  "${COMMON_C_LINK_FLAGS} -Wl,-z,defs -Wl,-pie -Bstatic -Bsymbolic -eenclave_entry \
   	-Wl,--export-dynamic -Wl,--defsym,__ImageBase=0 -Wl,--gc-sections -Wl,--version-script=${CMAKE_CURRENT_SOURCE_DIR}/Enclave.lds")
   
       if(${CMAKE_VERSION} VERSION_LESS "3.13.0") 
           link_directories(${LINK_LIBRARY_PATH})
       endif()
   
       add_library(${PREFIX}  SHARED ${SOURCE_FILES} ${AUTO_FILES})
   
       target_include_directories(${PREFIX} PRIVATE
   	    ${CMAKE_CURRENT_BINARY_DIR}
   	    ${SGX_DIR}/include/tlibc
   	    ${SGX_DIR}/include/libcxx
   	    ${SGX_DIR}/include
   	    ${LOCAL_ROOT_PATH}/inc/host_inc
   	    ${LOCAL_ROOT_PATH}/inc/host_inc/sgx)
       
       if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.13.0") 
           target_link_directories(${PREFIX} PRIVATE
   	        ${LINK_LIBRARY_PATH})
       endif()
   
       target_link_libraries(${PREFIX}  -Wl,--whole-archive ${Trts_Library_Name} -Wl,--no-whole-archive 
       		-Wl,--start-group -lsgx_tstdc -lsgx_tcxx -l${Crypto_Library_Name} -l${Service_Library_Name}   -Wl,--end-group)
       add_custom_command(TARGET ${PREFIX} 
       POST_BUILD
       COMMAND umask 0177
       COMMAND openssl genrsa -3 -out ${PEM} 3072
       COMMAND bash ${SIGN_TOOL} -d sign -x sgx -i ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/lib${PREFIX}.so -k ${PEM} -o ${OUTPUT} -c ${CMAKE_CURRENT_SOURCE_DIR}/Enclave.config.xml)
   endif()
   
   set_target_properties(${PREFIX} PROPERTIES SKIP_BUILD_RPATH TRUE)  
   ```

   

6. 编写配置文件

   针对使用 Intel SGX 的 x86_64 处理器架构，请编写 Enclave.config.xml 和 Enclave.lds 文件，置于安全侧 enclave 目录。文件的具体配置格式请参见 SGX 官方文档。

   Enclave.config.xml 参考：

   ```c
   <EnclaveConfiguration>
     <ProdID>0</ProdID>
     <ISVSVN>0</ISVSVN>
     <StackMaxSize>0x40000</StackMaxSize>
     <HeapMaxSize>0x100000</HeapMaxSize>
     <TCSNum>10</TCSNum>
     <TCSPolicy>1</TCSPolicy>
     <!-- Recommend changing 'DisableDebug' to 1 to make the enclave undebuggable for enclave release -->
     <DisableDebug>0</DisableDebug>
     <MiscSelect>0</MiscSelect>
     <MiscMask>0xFFFFFFFF</MiscMask>
   </EnclaveConfiguration>
   ```

   Enclave.lds 参考：

   ```c
   enclave.so
   {
       global:
           g_global_data_sim;
           g_global_data;
           enclave_entry;
           g_peak_heap_used;
       local:
           *;
   };
   ```

   将设备公钥文件 rsa_public_key_cloud.pem 复制到 enclave 目录。此处的设备公钥用于使用临时生成的 aes 密钥对安全区动态库进行加密。

   说明：rsa_public_key_cloud.pem 文件下载路径：https://gitee.com/openeuler/secGear/blob/master/examples/helloworld/enclave/rsa_public_key_cloud.pem

   

7. 编译程序

   SGX 版本编译命令如下，编译后将生成可执行程序 secgear_helloworld

   ```shell
   cmake -DCMAKE_BUILD_TYPE=debug -DCC_SGX=ON -DSGXSDK="PATH"  ./ && make
   ```

   

8. 执行程序

   ```c
   $ ./secgear_helloworld
   Create secgear enclave
   secgear hello world!
   ```


