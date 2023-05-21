<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.net.URL"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Avallis</title>
  <meta charset="UTF-8">
  <title> </title>
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
				<!-- <li><button id="srspdfPrint" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button"  id="srspdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li> 	 
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
					<!-- <span>Income and Expenses</br>(Cash Flow Analysis)</span> -->
					<span style="margin-left: 45%;"> SRS Projection Report </span>
					<div class="clearspace40"></div>
						<div id="pdfSRSContentCardChart">
				  <div class="row">
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-success">
						  <i class="fa fa-money"></i>
						  
							<span class="heading">Opening Balance</span>
							<span class="value"><span id="totalSRSopenbalId"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-primary">
							<i class="fa fa-credit-card"></i>
							<span class="heading">Annual Addition</span>
							<span class="value"><span id="totalSRSannladdId"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-danger">
							<!-- <i class="fa fa-calendar"></i> -->
							<i class="fa fa-credit-card-alt"></i>
							<span class="heading">Annual Withdrawals</span>
							<span class="value"><span id="totalSRSannlwithdrawId"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box">
							<i class="fa fa-balance-scale"></i>
							<span class="heading">Closing Balance</span>
							<span class="value"><span id="totalSRScloseingbalId"></span></span>
						</div>
					</div>
					
					<div class="row">
				<div class="clearspace40"></div>
				<div id="chartpdfid" style=" margin-left: 2%;">
				
				<div class="row">
					
					<div class="col-xs-12 col-md-6">
					
					<div class="panel panel-default" style="display: none;">
						<div id="chartid">
							<div class="panel-heading">
								<h3 class="panel-title">Bar Chart SRS (Investment Summary) </h3>
							</div>
							<div class="panel-body">
								<div id="barChartSRS" ></div>
							</div>
							</div>
						</div>
						 
					</div>
					
					  <div class="col-xs-12 col-md-6">
						<div class="panel panel-default" style="display: none;">
							<div class="panel-heading">
							<div class="clearspace40"></div>
								<h3 class="panel-title">Pie Chart SRS (Investment Summary)<ul class="rad-panel-action">
																	 
																</ul></h3>
							</div>
							<div class="panel-body">
								<div id="pieChartSRS" ></div>
							</div>
						</div>
					</div>  
					 
				</div>
				
				 <div class="row">
					
					<div class="col-xs-12 col-md-11">
					
					<div class="panel panel-default">
						<div id="chartid">
							<div class="panel-heading">
								<h3 class="panel-title">Bar Chart  </h3>
							</div>
							<div class="panel-body">
							
						 	<div id="srsnodatafount" class="selfnodatafount" style="display: none;color: red;margin-left: 25rem;font-size: 25px;" >
			              					   No Data Found
			                 </div>
			                 
								<div id="barChartopenclosebalSRS" ></div>
							</div>
							</div>
						</div>
						 
					</div>
					
					  <div class="col-xs-12 col-md-1">
						 
					</div>  
					 
				</div>
				 
				</div>
				</div>
				
				</div>
				</div>
				
				<div class="">   <!-- panel panel-default -->
				<table id="SRSProjectionTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
				  	     
						<tr>
						    <th><div >#</div></th> 
							<th><div >Age</div></th>
							<th><div >Opening Balance</div></th>
							<th><div >Annual Addition</div></th>
							<th><div >Annual Withdrawals</div></th>
							<th><div >Closing Balance</div></th> 
			            </tr>  

					</thead>
					<tbody></tbody> 
				</table>
				</div>
				
				<div class="clearspace40"></div>
				<div class="clearspace40"></div>
				<div class="clearspace40"></div>
				 
				 
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
		SRSRepotSrch(parameter_fnaId); 
		
		// hideLoader();
	});  
	
</script>
</body>
</html>