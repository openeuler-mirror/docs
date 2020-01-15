# daemon运行目录配置<a name="ZH-CN_TOPIC_0184808197"></a>

用户需要明白重新指定各种运行目录和文件（包括--graph、--exec-root等），可能会存在目录冲突，或文件属性变换，对应用的正常使用造成影响。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>用户指定的目录或文件应为docker专用，避免冲突导致的文件属性变化带来安全问题。  

-   以--graph为例，当我们使用/new/path/作为daemon新的Root Dir时，如果/new/path/下已经存在文件，且目录或文件名与docker需要使用的目录或文件名冲突（例如： containers、hooks、tmp等目录）时，docker可能会更新原有目录或文件的属性，包括属主、权限等为自己的属主和权限。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>从docker-17.05开始，--graph参数被标记为Deprecated，用新的参数--data-root替代。  

