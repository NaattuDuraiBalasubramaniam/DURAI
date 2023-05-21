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
				<!-- <li><button id="lifeInsTablepdfPrint" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button"  id="lifeInsTablepdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li>  
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
					<span style="text-align: center;"> FIPA Life Insurance Details </span>
					<div class="clearspace40"></div>
						<div id="pdfContent">
				  
				</div>
				
				<div class="">
				<table id="lifeInsTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
				  	    
				  	   <!--  <tr>
							<th colspan="17"><div style="text-align:center;">List of Life Insurance Plans</div></th>  
						</tr> -->
						<tr>
                    <th class="text-center"><div>#</div></th>
                    <th class="text-center">
                      <div style="width: 50px">Owner</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 100px">Life Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 100px">Company</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 100px">Policy Name</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 100px">Policy No.</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 50px">Plan Type</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 100px">Inception Date</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 50px">Sum Assured</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 50px">Death Benefit</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">DD Early Stage</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">DD Advanced Stage</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 50px">Disability Benefit</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">Premium</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">Freq. of Payment</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 75px">Premium Source</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">Cash Value</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 50px">Maturity Value
					</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 60px">Maturity Date</div>
                    </th>
                     <th class="text-center">
                      <div style="width: 60px">Policy Status</div>
                    </th>
                    <th class="text-center">
                      <div style="width: 50px">Remarks</div>
                    </th>
                     
                  </tr>  
			 
						
					</thead>
					<tbody></tbody> 
					<tfoot>
					<tr><th style="color: #5a5151;" ></th>
					<th colspan="2" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Self Sub Total</th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th><span id="LifeSelfSumTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeSelfPremTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeSelfCashTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th><span id="LifeSelfMaturityTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th></tr>
					
					<tr><th style="color: #5a5151;" ></th>
					<th colspan="2" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Spouse Sub Total</th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th><span id="LifeSpouseSumTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeSpousePremTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeSpouseCashTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th><span id="LifeSpouseMaturityTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th></tr>
					
					<tr><th style="color: #5a5151;" ></th>
					<th colspan="2" style="color: #5a5151;font-size: 16px;font-weight: 100;" >Joint Sub Total</th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th><span id="LifeJointSumTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeJointPremTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th>
					<th style="color: #5a5151;font-size: 16px;font-weight: 100;" ></th>
					<th><span id="LifeJointCashTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th><span id="LifeJointMaturityTotal" style="color: #5a5151;font-size: 17px;font-weight: 100;" ></span></th>
					<th style="color: #5a5151;" ></th><th style="color: #5a5151;" ></th></tr>
					</tfoot>
				</table>
				
				<div class="clearspace40"></div>
				<div class="clearspace40"></div>
				
				 </div>
				 <span style="text-align: center;"> FPMS Life Insurance Details </span>
				 <div class="clearspace40"></div>
				 <div class="">
				<table id="lifeInsFPMSTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
					<tr>
	                    <th class="text-center"><div>#</div></th>
	                    <th class="text-center">
	                      <div style="width: 70px">Application</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 300px">Plan Name</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 200px">Principal</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 60px">Proposer</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 100px">Life Assured</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 100px">Policy  No.</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 60px">Coverage  Benefits</div>
	                    </th>
	                    <th class="text-center">
	                      <div style="width: 60px">Policy Status</div>
	                    </th>
	                     <th class="text-center">
	                      <div style="width: 60px">Sum Assured</div>
	                    </th>
	                     <th class="text-center">
	                      <div style="width: 60px">Annual Premium</div>
	                    </th>
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
		lifeInsuranceSrch(parameter_fnaId);
		parameter_custId = "<%=request.getParameter("strCustId")%>";
		FPMSlifeInsuranceSrch(parameter_fnaId,parameter_custId);
		hideLoader();
	});  
	
</script>
</body>
</html>