
$(document).ready(function () {
    $('#view_title_p').append(' <p><span>' + getUrlParam("title") + '</span></p>');
    $('#view_message_p').append(' <p><span>' + getUrlParam("msg") + '</span></p>');
    
    var url1 = getUrlParamByUrl("cpt1") + "&year=" + getUrlParam("year") + "&flag=" + getUrlParam("flag")+"&unitId="+getUrlParam("unitId");
    var url2 = getUrlParamByUrl("cpt2") + "&year=" + getUrlParam("year") + "&flag=" + getUrlParam("flag")+"&unitId="+getUrlParam("unitId");

    $('#tab1').append(' <iframe id="tab1Frame" name="tab1Frame" FRAMEBORDER=0 SCROLLING=AUTO width=100% height=100% SRC=' + url1 + '></iframe>');
    $('#tab2').append(' <iframe id="tab2Frame" name="tab2Frame" FRAMEBORDER=0 SCROLLING=AUTO width=100% height=100% SRC=' + url2 + '></iframe>')

    var allli = $(".tab_menu ul li");
    allli.click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $(this).index();
        $('.tab_box div').eq(index).show().siblings().hide();
    });
});


function genteratorUrl(){

}


function getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}

//获取url格式的参数
function getUrlParamByUrl(key) {
    var result;
    var url = window.location.search;
    var paramArray = url.split("&");
    for (var i = 0; i < paramArray.length; i++) {
        if (paramArray[i].indexOf(key) > -1) {
            result = paramArray[i].substring(paramArray[i].indexOf("=") + 1, paramArray[i].length);
        }
    }
    return result;
}