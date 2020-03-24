# 设置X11 Forwarding<a name="ZH-CN_TOPIC_0229243627"></a>

切换到sshd配置目录

```
# cd ~/.ssh
```

如果该目录不存在，则创建目录后再进行切换，创建目录命令如下：

```
# mkdir ~/.ssh
```

然后在.ssh目录下编辑config文件并保存：

1.  使用vim打卡config文件

    ```
    # vim config
    ```

2.  将以下内容添加到文件末尾并保存：

    ```
    Host *
    		  ForwardAgent yes
    		  ForwardX11 yes
    ```


