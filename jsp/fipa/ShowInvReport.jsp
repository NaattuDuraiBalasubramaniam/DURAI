<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.net.URL"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>FIPA - Investment Report</title>
  <meta charset="UTF-8">
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
				<a href="" class="brand-icon">
					<i class="fa fa-recycle"></i>
				</a>
				<ul class="pull-right links">
					<li>
						<button type="button" onclick="fnGenInvDesRpt();" class="btn btn-info" 
								style="width: 130px;background-color: #243665; 
								border-color: #243665;">
							<span>&nbsp;PDF&nbsp;</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</section>
<aside>
	<nav class="rad-sidebar rad-nav-min"></nav>
</aside>
<main>
	<section>
		<div class="rad-body-wrapper rad-nav-min">
			<div class="container-fluid">
				<header class="rad-page-title">
					<span style="text-align: center;"> Investment Details </span>
						<div id="pdfContent"></div>
						<div id="divSelfInvDetsRptId" class="container" style="margin-left: -2%;margin-top:50px;display:none;">
						<table id="tblSelfInvDetsRptId" class="dataTable table table-bordered table-striped display hover" style="width: 100%;min-width:100%">
							<thead>
								<tr>
									<th colspan="5" style="color: #ffffff;width:100%;text-align:left;padding-left:50px;" >Ownership: Self</th>
			                    </tr>
								<tr>
									<th style="color: #ffffff;width:16%;" >Basic Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Details</th>
				                    <th style="color: #ffffff;width:16%;">NAV Details</th>
				                    <th style="color: #ffffff;width:16%;">RSP Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Objective(s)</th>
			                    </tr>
							</thead>
							<tbody></tbody> 
							<tfoot>
								<tr id="trSumofCurrNAVSelfId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Current NAV
									</td>
									<td id="tdSumofCurrNAVSelfId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr id="trSumofCurrInvSelfId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Investment Amount
									</td>
									<td id="tdSumofCurrInvSelfId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tfoot>
						</table>
					</div>
					
					<div id="divSpsInvDetsRptId" class="container" style="margin-left: -2%;margin-top:50px;display:none;">
						<table id="tblSpsInvDetsRptId" class="dataTable table table-bordered table-striped display hover" style="width: 100%;min-width:100%">
							<thead>
								<tr>
									<th colspan="5" style="color: #ffffff;width:100%;text-align:left;padding-left:50px;" >Ownership: Spouse</th>
			                    </tr>
								<tr>
									<th style="color: #ffffff;width:16%;" >Basic Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Details</th>
				                    <th style="color: #ffffff;width:16%;">NAV Details</th>
				                    <th style="color: #ffffff;width:16%;">RSP Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Objective(s)</th>
			                    </tr>
							</thead>
							<tbody></tbody> 
							<tfoot>
								<tr id="trSumofCurrNAVSpsId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Current NAV
									</td>
									<td id="tdSumofCurrNAVSpsId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr id="trSumofCurrInvSpsId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Investment Amount
									</td>
									<td id="tdSumofCurrInvSpsId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tfoot>
						</table>
					</div>
					
					<div id="divJntInvDetsRptId" class="container" style="margin-left: -2%;margin-top:50px;display:none;">
						<table id="tblJntInvDetsRptId" class="dataTable table table-bordered table-striped display hover" style="width: 100%;min-width:100%">
							<thead>
								<tr>
									<th colspan="5" style="color: #ffffff;width:100%;text-align:left;padding-left:50px;" >Ownership: Joint</th>
			                    </tr>
								<tr>
									<th style="color: #ffffff;width:16%;" >Basic Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Details</th>
				                    <th style="color: #ffffff;width:16%;">NAV Details</th>
				                    <th style="color: #ffffff;width:16%;">RSP Details</th>
				                    <th style="color: #ffffff;width:26%;">Investment Objective(s)</th>
			                    </tr>
							</thead>
							<tbody></tbody> 
							<tfoot>
								<tr id="trSumofCurrNAVJntId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Current NAV
									</td>
									<td id="tdSumofCurrNAVJntId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr id="trSumofCurrInvJntId" style="display: none;">
									<td colspan="2" style="text-align: right;font-weight: bold;">
										Sum of Investment Amount
									</td>
									<td id="tdSumofCurrInvJntId">&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
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
<script src="plugins/fipa/js/fipa.investment_new.js?ver=2201.1"></script>  <!-- added by John 13122022 for FIPA Investments --> 
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
		 
		parameter_fnaId = "<%=request.getParameter("strFNAId")%>";
		fnGetInvDetsForRpt(parameter_fnaId);
		hideLoader();
		
	});  
</script>
</body>
</html>
