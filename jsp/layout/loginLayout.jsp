<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv='cache-control' content='no-cache'>
	<meta http-equiv='expires' content='-1'>
	<meta http-equiv='pragma' content='no-cache'>
  
  <title><tiles:insertAttribute name="title" ignore="true" /></title>
  
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css?ver=2201.1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.min.css?ver=2201.1">
  <link rel="stylesheet" href="plugins/fipa/css/fipa.min.css?ver=2201.1">
  <link rel="stylesheet" href="plugins/fipa/css/skins/_all-skins.min.css?ver=2201.1">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css?ver=2201.1">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  
  <link rel="stylesheet" type="text/css" href="plugins/fipa/css/loginstyle.css?ver=2201.1" />
  <link rel="stylesheet" type="text/css" href="plugins/fipa/css/button-styles.css?ver=2201.1" />
  
  
</head>
<body class="" style="border: 1px solid #029978;margin: 3px;">
<%
response.setHeader("Cache-Control", "no-cache"); 
response.setHeader("Pragma", "no-cache"); 
response.setDateHeader("Expires", -1);
%>


<div class="wrapper">
	<tiles:insertAttribute name="body"/>  
</div>

<!-- jQuery 3 -->
<script src="plugins/jquery/jquery.js?ver=2201.1"></script>
<!-- jQuery UI v1.12.1-->
<script src="plugins/jquery-ui/jquery-ui.js?ver=2201.1"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.7 -->
<script src="plugins/bootstrap/js/bootstrap.min.js?ver=2201.1"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js?ver=2201.1"></script>
<!-- Slimscroll -->
<script src="plugins/jquery-slimscroll/jquery.slimscroll.min.js?ver=2201.1"></script>
<!-- FastClick -->
<script src="plugins/fastclick/fastclick.js?ver=2201.1"></script>
<script src="plugins/fipa/js/fipalayout.js?ver=2201.1"></script>

<script src="plugins/fipa/js/fipa.login.js?ver=2201.1"></script> 

<script type="text/javascript">

window.moveTo(0,0);
window.resizeTo(screen.width+2,screen.height+30)
window.moveTo(0,0);
window.offscreenBuffering=true;

 $(document).ready(function () {
	
	 document.addEventListener('invalid', (function () {
	    	return function (e) {e.preventDefault();};
		})(), true);

	 
		
		$(".main-wrapper").position({my: "center",at: "center",of: window});
		$('#loginmsgdiv').delay(3000).fadeOut('blind');

		$('#txtFldUserId').focus();

		$('input[name="txtFldUserId"],input[name="txtFldUserPassword"]').on("change",function(){
			$(this).removeClass("errvalidation")
			.addClass('textfilds');
			$(this).popover('hide');
		});		
	    
    
});

</script>
</body>
</html>
