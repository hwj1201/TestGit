var zTree;
var demoIframe;
var setting = {
    view: {
        dblClickExpand: false,
        showLine: true,
        selectedMulti: false
    },
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: ""
        }
    },
    callback: {
        beforeClick: function(treeId, treeNode) {
            var zTree = $.fn.zTree.getZTreeObj("tree");
            if (treeNode.isParent) {
                zTree.expandNode(treeNode);
                return false;
            } else {
                //click 事件
                if (treeNode.name == "主页") {
                    demoIframe.attr("src", treeNode.file);
                } else {
                    toPage(treeNode);
                }
                return true;
            }
        }
    }
};

$(document).ready(function() {
    var t = $("#tree");
    t = $.fn.zTree.init(t, setting, zNodes);
    demoIframe = $("#mainIframe");
    var zTree = $.fn.zTree.getZTreeObj("tree");
    zTree.selectNode(zTree.getNodeByParam("id", -1));

    $('.rightPanel').width($(window).width() - 420);
});


var selectYear;

function toPage(treeNode) {
    var selectObj = window.frames["mainIframe"].document.getElementById('year_select');
    if (null != selectObj) {
        var index = selectObj.selectedIndex; // 选中索引
        selectYear = selectObj.options[index].text; // 选中文本
    }

    var flag = 2;
    if (treeNode.name.indexOf("1.") > -1) { flag = 1; }
    var msg = treeNode.message.replace('xxxx', selectYear);
    var title = treeNode.name;
    var cpt1 = basePath + treeNode.cpt1;
    var cpt2 = basePath + treeNode.cpt2;
    var srcurl = treeNode.file + "?title=" + title + "&msg=" + msg + "&year=" + selectYear + "&flag=" + flag + "&cpt1=" + cpt1 + "&cpt2=" + cpt2 + "&unitId=" + unitId;
    demoIframe.attr("src", srcurl);
}


function toStartView() {
    var zTree = $.fn.zTree.getZTreeObj("tree");
    zTree.selectNode(zTree.getNodeByParam("id", 10001));
    toPage(zTree.getNodeByParam("id", 10001));
}


function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    } //isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}