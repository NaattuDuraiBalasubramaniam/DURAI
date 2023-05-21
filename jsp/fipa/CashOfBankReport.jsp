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
				<!-- <li><button id="btnCABpdfPrint" class="btn btn-info">Pdf</button></li> -->
				<li><button type="button"  id="btnCABpdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li> 	 
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
					<span style="text-align: center;"> Cash Of Bank </span>
					<div class="clearspace40"></div>
					
					<div id="CABCurrentRegularAmountChart">
				  <div class="row">
					<div class="col-lg-2 col-xs-2">
						
					</div>
					<div class="col-lg-3 col-xs-3">
						 <div class="rad-info-box rad-txt-success">
						  <i class="fa fa-money"></i>
							<span class="heading">Current Balance</span>
							<span class="value"><span id="TotalCABCurrentBalanceId"></span></span>
						</div>
					</div>
					<div class="col-lg-2 col-xs-2">
						
					</div>
					<div class="col-lg-3 col-xs-3">
						 <div class="rad-info-box rad-txt-primary">
							<i class="fa fa-credit-card"></i>
							<span class="heading">Regular Deposit</span>
							<span class="value"><span id="TotalCABRegularDepositId"></span></span>
						</div>
					</div>
					<div class="col-lg-2 col-xs-2">
						
					</div>
					</div>
					<div class="">
				<div class="clearspace40"></div>
				<div id="chartpdfid" style=" margin-left: 2%;">
				
				 <div class="row">
					
					<div class="col-lg-1 col-xs-1 col-md-1">
						 
					</div> 
					
					<div class="col-lg-10 col-xs-10 col-md-10">
					
					<div class="panel panel-default">
						<div id="chartid">
							<div class="panel-heading">
								<h3 class="panel-title">Bar Chart  </h3>
							</div>
							<div class="panel-body">
							
						 	<div id="cabnodatafount" class="cabnodatafount" style="display: none;color: red;margin-left: 25rem;font-size: 25px;" >
			              					   No Data Found
			                </div>
			                 
						    <div id="totalcurrentregulardetailsCAB" ></div>
						    
							</div>
							</div>
						</div>
						 
					</div>
					
					  <div class="col-lg-1 col-xs-1 col-md-1">
						 
					</div>  
					 
				</div>
				 
				</div>
				</div>
				
				
				</div>
				
						<div id="pdfContent">
				  
				       </div>
				
				
				<div class="">    <!-- class="panel panel-default" -->
				<table id="cashOfBanksTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
				  	    
				  	    <tr>
							<th colspan="12"><div style="text-align:center;">List of Bank Accounts</div></th>  
						</tr>
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 70px;">Main Acc.holder name</div></th>
							<th><div style="width: 110px;">Sup. Acc.holder name</div></th>
							<th><div style="width: 80px;">Relationship</div></th>
							<th><div style="width: 80px;">Ownership type</div></th>
							<th><div style="width: 110px;">Name of bank</div></th> 
							<th><div style="width: 80px;">Bank Acc No.</div></th>
							<th ><div style="width:100px;">Type of Account</div></th>
							
							<th><div style="width: 80px;">Current Balance</div></th>
							<th><div style="width: 110px;">Regular Deposit if any</div></th> 
							<th><div style="width: 80px;">Frequency of Deposit</div></th>
							<th ><div style="width:100px;">Objective</div></th>
							
			            </tr>  
			 
						
					</thead>
					<tbody></tbody> 
				</table>
				<div class="clearspace40"></div>
				<div class="clearspace40"></div>
				</div>
				 
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
		//cashFlowSrch(parameter_fnaId);
		cashOfBankReportSrch(parameter_fnaId);
		 hideLoader();
	});  
	
</script>
</body>
</html>