<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="nariis.pi3000.framework.data.DataTable"%>
<%@page import="nariis.pi3000.framework.data.DataAccessService"%>
<%@page import="nariis.pi3000.businessmodel.businessentity.BusinessUser"%>
<%@page import="nariis.pi3000.portal.framework.*,nariis.pi3000.framework.utility.*" language="java" contentType="text/html; charset=UTF-8" pageEncoding="utf-8"%>
<%
	if(session == null){
		out.print("<script>alert('用户未登录，请登录后再试！');</script>");
		return;
	}
	Object _user = session.getAttribute("currentUser");
	if(_user == null){
		out.print("<script>alert('用户未登录，请登录后再试！');</script>");
		return;
	}

    DataAccessService dataAccessService = new DataAccessService();
  
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/";

	BusinessUser user =(BusinessUser)_user;
	
	String unitSql = "select e.lsdw from mw_sys.mwt_is_user u left join mw_sys.mwt_pd_emps e on e.sysuserid = u.user_id where u.user_id = '"+user.getId()+"'";
	DataTable dataTable = dataAccessService.executeQuery(unitSql);
	String unitId = dataTable.getRows().size()>0 ? (String) dataTable.getRow(0).getValue("LSDW") : "";
	String param = request.getParameter("param");
    basePath = basePath.replace("7001","7004") ;
    basePath = basePath + "WebReport/ReportServer?reportlet=";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>年度方式</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="css/zTreeStyle.css" type="text/css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript" src="js/jquery.ztree.core.js"></script>
    <script type="text/javascript">
        var basePath = "<%=basePath%>";
        var unitId = "<%=unitId%>";
    </script>
    <script type="text/javascript" src="js/data.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</head>

<body>
    <div class="outerContainer" id="outerContainer">
        <div class="leftPanel">
            <ul id="tree" class="ztree" style="width:390px;height:99%; overflow:auto;"></ul>
        </div>
        <div class="vsplitbar"></div>
        <div class="rightPanel">
            <iframe id="mainIframe" name="mainIframe" frameborder="0" scrolling="auto" width="100%" height="100%" SRC="pages/main.html"></iframe>
        </div>
    </div>
</body>

</html>