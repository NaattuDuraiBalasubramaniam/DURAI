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
  
 <link rel="stylesheet" href="plugins/fipa/css/commonstyles.css?ver=2201.1">
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
				<li><button id="btnCPFpdfPrint" class="btn btn-info">Pdf</button></li>
					 
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
					 
					<span> CPF Analysis - Before Retirement</span>
					<div class="clearspace40"></div>
						<div id="pdfContent">
				  
				</div>
					
					
				<div class="col-md-12">
				<div class="clearspace20" ></div>
				<div class="col-md-6" >
				<span>Ordinary</span>
				<table id="CpfOrdinaryBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	    
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Contribution</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				
				<div class="col-md-6">
				<span>Special</span>
				 <table id="CpfSpecialBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	    
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Contribution</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				</div>
				
					
					
				<div class="col-md-12">
				<div class="clearspace20" ></div>
				<div class="col-md-6" >
				<span>Medisave</span>
				 <table id="CpfMedisaveBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	  
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Contribution</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				
				<div class="col-md-6" >
				</div>
				</div>
				
				<div class="clearspace20" ></div>
				
				<div class="col-md-12">   
				<div class="clearspace40" ></div>
				<div class="col-md-6" ></div>
				<div class="col-md-6" ></div>
				</div>
				<span> CPF Analysis - After Retirement</span>
						<div id="pdfContent">
				  
				</div>
				<div class="col-md-12">
				<div class="col-md-6" >
				<span>Retirement</span>
				<table id="CpfARRetirementBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	    
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				
				<div class="col-md-6" >
				<span>Ordinary</span>
				<table id="CpfAROrdinaryBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	   
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							 
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				</div>
				
				
				
				<div class="col-md-12">
				<div class="clearspace20" ></div>
				<div class="col-md-6" >
				<span>Special</span>
				<table id="CpfARSpecialBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>

						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				
				<div class="col-md-6" >
				<span>Medisave</span>
				<table id="CpfARMedisaveBalanceTablereport" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%;font-size: 13px;">
					<thead>
				  	    
						<tr>
						    <th><div>#</div></th> 
							<th><div style="width: 20px;">Age</div></th>
							<th><div style="width: 60px;">Begining Balance</div></th>
							<th><div style="width: 80px;">Annl. Addition</div></th>
							<th><div style="width: 80px;">Annl. Deduction</div></th> 
							<th><div style="width: 80px;">End Balance</div></th>
							
			            </tr>  
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				<div class="clearspace40" ></div>
				<div class="clearspace40" ></div>
				</div>
				
				<div class="col-md-12">   
				<div class="clearspace40" ></div>
				<div class="col-md-6" ></div>
				<div class="col-md-6" ></div>
				</div>
				
				<div class="col-md-12">   
				<div class="clearspace40" ></div>
				<div class="col-md-6" ></div>
				<div class="col-md-6" ></div>
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
		CPFFlowSrch(parameter_fnaId);
		//cashAtBankSrch(parameter_fnaId);
		// hideLoader();
	});  
	
</script>
</body>
</html>