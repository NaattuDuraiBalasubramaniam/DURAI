<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.net.URL"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
  <meta charset="UTF-8">
  <title>CodePen - Dashboard</title>
 <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css?ver=2201.1">
<link rel="stylesheet" type="text/css" href="plugins/fipa/css/reportstyle.css?ver=2201.1" />
<link rel="stylesheet" href="plugins/fipa/css/Chart.min.css?ver=2201.1"> 
<link rel="stylesheet" href="plugins/fipa/css/font-awesome.min.css?ver=2201.1"> 	
</head>
<body>
<section>
	<header>
		<nav class="rad-navigation">
			<div class="rad-logo-container rad-nav-min" style="background: #337ab7;">
				<img src="images/fipa_admin_logo.png" alt="FIPA Logo" style="width: 170px;height: 64px;padding: 12px 1px 1px;">
			</div>
			<a href="#" class="rad-logo-hidden"></a>
			<div class="rad-top-nav-container">
				<a href="" class="brand-icon"><i class="fa fa-recycle"></i></a>
				<ul class="pull-right links">
				<!-- <li><button id="invDetspdfPrint" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button" id="invDetspdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li>
				</ul>
			
			</div>
		</nav>
	</header>
</section>
<aside>
	<nav class="rad-sidebar rad-nav-min">
		
	</nav>
</aside>
<main>
	<section>
		<div class="rad-body-wrapper rad-nav-min">
			<div class="container-fluid">
				<header class="rad-page-title">
					<span style="text-align: center;"> Investment Details </span>
						<div id="pdfContent">
				  
				</div>
				<div class="container" style="margin-left: -2%;">
				<table id="investmentDetailsTableReport" class="dataTable table table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
				  	    
				  	    <tr>
							<th colspan="12"><div style="text-align:center;">Investmt & NAV Details</div></th> 
							<th colspan="3"><div style="">Regular Investment (RSP)</div></th> 
							<th colspan="4"><div style="">Objective</div></th> 
						</tr>
						<tr>
							<th style="color: #ffffff;" >Ownership</th>
		                    <th style="color: #ffffff;">Investmt Type</th>
		                   
		                    <th style="color: #ffffff;">Name of FA/ Broker/ Secruity house</th>
		                    <th style="color: #ffffff;">Names of Institution</th>
		                    <th style="color: #ffffff;">Description of Inv</th>
		                    <th style="color: #ffffff;">Estd.Inv.Rate (%)</th>
		                    <th style="color: #ffffff;">Amount Invested</th>
		                    <th style="color: #ffffff;">Source/Payment Method</th>
		                    <th style="color: #ffffff;">Date Invested</th>
		                    <th style="color: #ffffff;">Current Bid Pr/NAV</th>
		                    <th style="color: #ffffff;">No. of units</th>
		                    <th style="color: #ffffff;">Current NAV</th> 
		                    
		                    
		                    <th style="color:#ffffff;">Frequency</th>
		                    <th style="color:#ffffff;">Amount</th>
		                    <th style="color:#ffffff;">No.of Yrs. of RSP</th>
		                    
		                    <th style="color:#ffffff;">Period of Inv.</th>
		                    <th style="color:#ffffff;">Objective</th>
		                    <th style="color:#ffffff;">Name of child, the Inv. provided for</th>
		                    <th style="color:#ffffff;">% of accuml</th>
	                    </tr>
                    
						
					</thead>
					<tbody></tbody> 
					<tfoot>
					<tr>
					<!-- <th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th> -->
					<th colspan="11" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Total Self Current NAV</th><th><span id="InvSelfTotal" style="color: #5a5151;font-size: 16px;font-weight: 100;"></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					</tr>
					<tr>
					<!-- <th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th> -->
					<th colspan="11" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Total Spouse Current NAV</th><th><span id="InvSpouseTotal" style="color: #5a5151;font-size: 16px;font-weight: 100;"></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					</tr>
					<tr>
					<!-- <th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th> -->
					<th colspan="11" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Total Joint Current NAV</th><th><span id="InvJointTotal" style="color: #5a5151;font-size: 16px;font-weight: 100;"></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					</tr>
					</tfoot>
				</table>
				 </div>
				 </header>
			</div>
			
		</div>
	
	</section>
</main>
 
<!-- partial -->	 
    <script type="text/javascript" src="plugins/jsPDF2/reportscript.js?ver=2201.1"></script>  
    <!--  <script src="plugins/fipa/js/cpfdetails.js"></script> -->
    <script src="plugins/fipa/js/fipa.common.js?ver=2201.1"></script>
     <script type="text/javascript" src="plugins/fipa/js/Chart.min.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/hammer.min.js?ver=2201.1"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-zoom.js?ver=2201.1"></script>
    <script type="text/javascript" src="plugins/fipa/js/utils.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/moment.min.js?ver=2201.1"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-labels.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/fipa.html2pdf.js?ver=2201.1"></script> 
    <script src="plugins/jsPDF2/jspdf.debug.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/jspdf.plugin.autotable.js?ver=2201.1"  type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/html2canvas.min.js?ver=2201.1" type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/rgbcolor.js?ver=2201.1" type="text/javascript"></script>
	<script src="plugins/jsPDF2/StackBlur.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/canvg.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/d3SvgToPng.js?ver=2201.1" type="text/javascript" ></script> 

 <script>
	 jQuery(document).ready(function() {
		//hideLoader(); 
		parameter_fnaId = "<%=request.getParameter("strFNAId")%>";
		 
		investmentDetailsSrch(parameter_fnaId);
	
		 hideLoader();
	});  
	
</script>
</body>
</html>