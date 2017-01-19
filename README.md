
#Android配置环境变量
    vi .bash_profile

        export ANDROID_HOME=~/Library/Android/sdk

        export PATH=${PATH}:${ANDROID_HOME}/tools

        export PATH=${PATH}:${ANDROID_HOME}/platform-tools

    source .bash_profile 执行

    echo $ANDROID_HOME 查看配置是否生效

    android 进入android manager

        android-build-tools 23.0.1

        android6.0 sdk platform 用来编译

    ifconfig | grep 192

#初始化项目

    cnpm install -g react-native-cli@0.1.10 -g

    react-native init imoocApp

    react-native run-ios

#安装图标库

    cnpm i react-native-vector-icons@2.0.2 --save

#rn挂载二进制模块库  (模块链接)
    cnpm i rnpm -g

    rnpm link react-native-vector-icons

#模拟器控制
    cmd+1/2/3/4 控制模拟器窗口大小
    cmd+r 刷新
    cmd+q 退出
    cmd+d 菜单 -> enable hot reloading 热加载
    window -> stay in front 窗口始终置于顶层


#react组件生命周期
getDefaultProps -> getInitialState -> componentWillMount -> render -> componentDidMount ->
    state变化 shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
    外部props变化 componentWillReceiveProps -> shouldComponentUpdate -> componentDidUpdate ->render -> componentDidUpdate
    卸载Unmount componentWillUnmount -> 结束

#android打包apk
    cd android && ./gradlew assembleRelease

    cd android && ./gradlew installRelease 手机安装apk

#其他
    open . 打开当前目录
    localhost:8081/debbuger-ui 调试控制台(同时在模拟器菜单中选择debbug in chrome)
    
    android 进入android manager
    
    ifconfig查看本地ip
    
    lsof -i:8081 查看端口占用情况
    kill xxxx kill占用端口进程