var zNodes = [{
    id: -1,
    pId: 0,
    name: "主页",
    file: "pages/main.html",
    icon: "css/img/diy/2.png"
}, {
    id: 1,
    pId: 0,
    name: "第一部分 上一年度电力通信网运行情况",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 101,
    pId: 1,
    name: "第一章 上一年度电力通信网新建系统",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 1001,
    pId: 101,
    name: "1.1 新投运厂站和线路",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 10001,
    pId: 1001,
    file: "pages/view.html",
    message: "主要查询xxxx年 本局（省公司包含地市的）新建、退役厂站的基本情况",
    name: "1.1.1 变电站、换流站、电厂",
    icon: "css/img/diy/2.png",
    // cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7ad9%5D%5B70b9%5D%5B660e%5D%5B7ec6%5D%5B7edf%5D%5B8ba1%5D.cpt",
    // cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7ad9%5D%5B70b9%5D%5B7edf%5D%5B8ba1%5D.cpt",
    cpt1: "res/res_site.cpt",
    cpt2: "res/res_box.cpt",
    open: true
}, {
    id: 10002,
    pId: 1001,
    name: "1.1.2 线路及复合光缆",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100001,
    pId: 10002,
    name: "1.1.2.1 新增、改建线路",
    file: "#",
    icon: "css/img/diy/2.png",
    open: true
}, {
    id: 100002,
    pId: 10002,
    name: "1.1.2.2 新增、改建光缆",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B7f06%5D%5B6bb5%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B7f06%5D%5B6bb5%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）新增、改建光缆的基本情况",
    open: true
}, {
    id: 1002,
    pId: 101,
    name: "1.2 传输网络",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100017,
    pId: 1002,
    name: "1.2.1 光通信部分",

    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100010,
    pId: 100017,
    name: "1.2.1.1 新建节点及设备",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）新建节点及设备的基本情况",
    open: true
}, {
    id: 100011,
    pId: 100017,
    name: "1.2.1.2 原节点新增板卡",
    file: "http://www.baidu.com",
    icon: "css/img/diy/2.png",
    open: true
}, {
    id: 10003,
    pId: 1002,
    name: "1.2.2 电力载波通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8f7d%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B901a%5D%5B4fe1%5D%5B8f7d%5D%5B6ce2%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电力载波通信部分的基本情况",
    open: true
}, {
    id: 10004,
    pId: 1002,
    name: "1.2.3 微波通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5fae%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5fae%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）微波通信部分的基本情况",
    open: true
}, {
    id: 10005,
    pId: 1002,
    name: "1.2.4 卫星通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B536b%5D%5B661f%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B536b%5D%5B661f%5D%5B901a%5D%5B4fe1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）卫星通信部分的基本情况",
    open: true
}, {
    id: 1003,
    pId: 101,
    name: "1.3 业务网络",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 10006,
    pId: 1003,
    name: "1.3.1 保护业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B4fdd%5D%5B62a4%5D%5B4e1a%5D%5B52a1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B4fdd%5D%5B62a4%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）保护业务部分的基本情况",
    open: true
}, {
    id: 10066,
    pId: 1003,
    name: "1.3.2 安控业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7a33%5D%5B63a7%5D%5B4e1a%5D%5B52a1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7a33%5D%5B63a7%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）安控业务部分的基本情况",
    open: true
}, {
    id: 10007,
    pId: 1003,
    name: "1.3.3 电力调度数据网",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100003,
    pId: 10007,
    name: "1.3.3.1 电力调度数据网",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8c03%5D%5B5ea6%5D%5B6570%5D%5B636e%5D%5B7f51%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8c03%5D%5B5ea6%5D%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电力调度数据网部分的基本情况",
    open: true
}, {
    id: 100004,
    pId: 10007,
    name: "1.3.3.2 自动化专线",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B81ea%5D%5B52a8%5D%5B5316%5D%5B4e13%5D%5B7ebf%5D%5B4e1a%5D%5B52a1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B81ea%5D%5B52a8%5D%5B5316%5D%5B4e13%5D%5B7ebf%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）自动化专线部分的基本情况",
    open: true
}, {
    id: 10008,
    pId: 1003,
    name: "1.3.4 调度电话交换网",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100005,
    pId: 10008,
    name: "1.3.4.1 调度电话",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B7535%5D%5B8bdd%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B7535%5D%5B8bdd%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）调度电话部分的基本情况",
    open: true
}, {
    id: 100006,
    pId: 10008,
    name: "1.3.4.2 新增厂站节点",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）新增厂站节点部分的基本情况",
    open: true
}, {
    id: 10009,
    pId: 1003,
    name: "1.3.5 行政电话交换网",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 100011,
    pId: 10009,
    name: "1.3.5.1 局向调整",

    icon: "css/img/diy/2.png",
    open: true
}, {
    id: 100007,
    pId: 10009,
    name: "1.3.5.2 系统建设",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B884c%5D%5B653f%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B884c%5D%5B653f%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）新增厂站节点部分的基本情况",
    open: true
}, {
    id: 10010,
    pId: 1003,
    name: "1.3.6 电视会议系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D%5B4e0d%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D%5B4e0d%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电视会议系统部分的基本情况",
    open: true
}, {
    id: 10019,
    pId: 1003,
    name: "1.3.7 电话会议系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电话会议系统部分的基本情况",
    open: true
}, {
    id: 10017,
    pId: 1003,
    name: "1.3.8综合数据网设备",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）综合数据网设备的基本情况",
    open: true
}, {
    id: 10097,
    pId: 1003,
    name: "1.3.9综合数据网业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）合数据网业务的基本情况",
    open: true
}, {
    id: 10011,
    pId: 1003,
    name: "1.3.10 应急指挥通信系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5e94%5D%5B6025%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5e94%5D%5B6025%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）应急指挥通信系统基本情况",
    open: true
}, {
    id: 1004,
    pId: 101,
    name: "1.4 支撑网络",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 10013,
    pId: 1004,
    name: "1.4.1 电源系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B7535%5D%5B6e90%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B7535%5D%5B6e90%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电源系统基本情况",
    open: true
}, {
    id: 10014,
    pId: 1004,
    name: "1.4.2 时钟系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B65f6%5D%5B949f%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D+.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B65f6%5D%5B949f%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）时钟系统基本情况",
    open: true
}, {
    id: 10015,
    pId: 1004,
    name: "1.4.3 监控系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B76d1%5D%5B63a7%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B76d1%5D%5B63a7%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）监控系统基本情况",
    open: true
}, {
    id: 10016,
    pId: 1004,
    name: "1.4.4 网管系统",

    icon: "css/img/diy/2.png",
    open: true
}, {
    id: 100012,
    pId: 10016,
    name: "1.4.4.1 综合网管系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7efc%5D%5B5408%5D%5B7f51%5D%5B7ba1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7efc%5D%5B5408%5D%5B7f51%5D%5B7ba1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）综合网管系统基本情况",
    open: true
}, {
    id: 100013,
    pId: 10016,
    name: "1.4.4.2 专业网管系统",

    icon: "css/img/diy/2.png",
    open: true
}, {
    id: 201,
    pId: 1,
    name: "第二章 上一年度电力通信网现状",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 2001,
    pId: 201,
    name: "2.1 光缆网络现状",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B7f06%5D%5B6bb5%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B7f06%5D%5B6bb5%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）光缆网络现状的基本情况",
    open: true
}, {
    id: 2002,
    pId: 201,
    name: "2.2 传输网络现状",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 20001,
    pId: 2002,
    name: "2.2.1 光通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5149%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）光通信部分基本情况",
    open: true
}, {
    id: 20002,
    pId: 2002,
    name: "2.2.2 电力载波通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8f7d%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B901a%5D%5B4fe1%5D%5B8f7d%5D%5B6ce2%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电力载波通信部分的基本情况",
    open: true
}, {
    id: 20003,
    pId: 2002,
    name: "2.2.3 微波通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5fae%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5fae%5D%5B6ce2%5D%5B901a%5D%5B4fe1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）微波通信部分的基本情况",
    open: true
}, {
    id: 20004,
    pId: 2002,
    name: "2.2.4 卫星通信部分",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B536b%5D%5B661f%5D%5B901a%5D%5B4fe1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B536b%5D%5B661f%5D%5B901a%5D%5B4fe1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）卫星通信部分的基本情况",
    open: true
}, {
    id: 2003,
    pId: 201,
    name: "2.3 业务网络现状",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 20005,
    pId: 2003,
    name: "2.3.1 保护业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B4fdd%5D%5B62a4%5D%5B4e1a%5D%5B52a1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B4fdd%5D%5B62a4%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）保护业务部分的基本情况",
    open: true
}, {
    id: 20025,
    pId: 2003,
    name: "2.3.1 安控业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7a33%5D%5B63a7%5D%5B4e1a%5D%5B52a1%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7a33%5D%5B63a7%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）安控业务部分的基本情况",
    open: true
}, {
    id: 20006,
    pId: 2003,
    name: "2.3.2 电力调度数据网",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8c03%5D%5B5ea6%5D%5B6570%5D%5B636e%5D%5B7f51%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B529b%5D%5B8c03%5D%5B5ea6%5D%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电力调度数据网部分的基本情况",
    open: true
}, {
    id: 20007,
    pId: 2003,
    name: "2.3.3 调度电话交换网",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B7535%5D%5B8bdd%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B8c03%5D%5B5ea6%5D%5B7535%5D%5B8bdd%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）调度电话交换网的基本情况",
    open: true
}, {
    id: 20008,
    pId: 2003,
    name: "2.3.4 行政电话交换网",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B884c%5D%5B653f%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B884c%5D%5B653f%5D%5B4ea4%5D%5B6362%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）行政电话交换网的基本情况",
    open: true
}, {
    id: 20009,
    pId: 2003,
    name: "2.3.5 电视会议系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D%5B4e0d%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D%5B4e0d%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电视会议系统部分的基本情况",
    open: true
}, {
    id: 20059,
    pId: 2003,
    name: "2.3.6 电话会议系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7535%5D%5B89c6%5D%5B7535%5D%5B8bdd%5D%5B4f1a%5D%5B8bae%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D%5B5e26%5D%5B7535%5D%5B8bdd%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电话会议系统部分的基本情况",
    open: true
}, {
    id: 20010,
    pId: 2003,
    name: "2.3.7 数据通信网设备",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）综合数据网设备的基本情况",
    open: true
}, {
    id: 20060,
    pId: 2003,
    name: "2.3.8 数据通信网业务",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B6570%5D%5B636e%5D%5B7f51%5D%5B4e1a%5D%5B52a1%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）合数据网业务的基本情况",
    open: true
}, {
    id: 20011,
    pId: 2003,
    name: "2.3.9 应急指挥通信系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5e94%5D%5B6025%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B5e94%5D%5B6025%5D%5B901a%5D%5B4fe1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）应急指挥通信系统基本情况",
    open: true
}, {
    id: 2004,
    pId: 201,
    name: "2.4 支撑网络现状",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 20012,
    pId: 2004,
    name: "2.4.1 电源系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B7535%5D%5B6e90%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B7535%5D%5B6e90%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）电源系统基本情况",
    open: true
}, {
    id: 20013,
    pId: 2004,
    name: "2.4.2 时钟系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B65f6%5D%5B949f%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D+.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B65f6%5D%5B949f%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）时钟系统基本情况",
    open: true
}, {
    id: 20014,
    pId: 2004,
    name: "2.4.3 监控系统",

    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B76d1%5D%5B63a7%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B901a%5D%5B4fe1%5D%5B76d1%5D%5B63a7%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）监控系统基本情况",
    open: true
}, {
    id: 20015,
    pId: 2004,
    name: "2.4.4 网管系统",
    iconOpen: "css/img/diy/1_open.png",
    iconClose: "css/img/diy/1_close.png",
    open: true
}, {
    id: 20016,
    pId: 20015,
    name: "2.4.4.1 综合网管系统",
    icon: "css/img/diy/2.png",
    file: "pages/view.html",
    cpt1: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7efc%5D%5B5408%5D%5B7f51%5D%5B7ba1%5D%5B8bbe%5D%5B5907%5D%5B660e%5D%5B7ec6%5D.cpt",
    cpt2: "http://172.16.40.171:8075/WebReport/ReportServer?reportlet=%5B7efc%5D%5B5408%5D%5B7f51%5D%5B7ba1%5D%5B8bbe%5D%5B5907%5D%5B7edf%5D%5B8ba1%5D.cpt",
    message: "主要查询xxxx年 本局（省公司包含地市的）综合网管系统基本情况",
    open: true
}, {
    id: 20017,
    pId: 20015,
    name: "2.4.4.2 专业网管系统",
    icon: "css/img/diy/2.png",
    open: true
}
    //  {
    //     id: 301,
    //     pId: 1,
    //     name: "第三章 上一年度电力通信网运行方式分析",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 3001,
    //     pId: 301,
    //     name: "3.1 上一年度电力通信网运行概况",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 3002,
    //     pId: 301,
    //     name: "3.2 上一年度运行方式执行情况及优化工作",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 30001,
    //     pId: 3002,
    //     name: "3.2.1年度运行方式执行情况",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 30002,
    //     pId: 3002,
    //     name: "3.2.1网络优化情况/年度重点优化工作",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 2,
    //     pId: 0,
    //     name: "第三部分 总部（分部）通信网情况",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 221,
    //     pId: 2,
    //     name: "第七章 上一年度省总部（分部）通信网现状",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 22001,
    //     pId: 221,
    //     name: "7.1 光缆网络现状",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22002,
    //     pId: 221,
    //     name: "7.2 传输系统现状",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 2200001,
    //     pId: 22002,
    //     name: "7.2.1 光通信部分",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 2200002,
    //     pId: 22002,
    //     name: "7.2.2 电路载波通信部分",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 2200003,
    //     pId: 22002,
    //     name: "7.2.1 微波通信部分",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22003,
    //     pId: 221,
    //     name: "7.3 业务系统现状",
    //     iconOpen: "css/img/diy/1_open.png",
    //     iconClose: "css/img/diy/1_close.png",
    //     open:true
    // }, {
    //     id: 22003001,
    //     pId: 22003,
    //     name: "7.3.1 保护安控业务",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22003002,
    //     pId: 22003,
    //     name: "7.3.2 电路调度数据网",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22003003,
    //     pId: 22003,
    //     name: "7.3.3 调度电话交换网",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22003004,
    //     pId: 22003,
    //     name: "7.3.4 行政电话交换网",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, {
    //     id: 22003005,
    //     pId: 22003,
    //     name: "7.3.5 电视电话会议系统",
    //     
    //     icon: "css/img/diy/2.png",
    //     open:true
    // }, 


];