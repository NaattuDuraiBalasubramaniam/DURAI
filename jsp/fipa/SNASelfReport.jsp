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
			<div class="rad-logo-container rad-nav-min rad-logo-container-height" style="background: #337ab7;">
				<img src="images/fipa_admin_logo.png" alt="FIPA Logo" style="width: 170px;height: 64px;padding: 12px 1px 1px;">
			</div>
			<a href="#" class="rad-logo-hidden"></a>
			<div class="rad-top-nav-container">
				<a href="" class="brand-icon"><i class="fa fa-recycle"></i></a>
				<ul class="pull-right links">
				<li><button type="button"  id="pdfPrintSNASelf" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li>
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
				<span style="text-align:center;"> Survival Needs Analysis - Self </span>	 
					<span> 1. Estate Needs </span>
						<div id="pdfContent">
				 
				 <div class="row">
				 
				<div class="col-lg-6 col-md-8">
				
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">A </th>
                    <th style="color: #ffffff;">Capital Needs at Death</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;"></th>
                     
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Inflation Rate</td>
                    <td id="inflationRate"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Investment Rate (family)</td>
                    <td id="investmentRate"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Effective Rate</td>
                    <td id="effectiveRate"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Capital Needs for</td>
                    <td id="annFinNeeds">Ann fin. needs</td>
                    <td id="comAmtNeeds">Commuted Amt Needed</td>
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Personal</td>
                    <td id="pesonal1">-N/A-</td>
                    <td id="pesonal2">-N/A-</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="spouse1">0</td>
                    <td id="spouse2">0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td  id="children1"></td>
                    <td  id="children2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td  id="family1"></td>
                    <td  id="family2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dependants</td>
                    <td  id="dependant1"></td>
                    <td  id="dependant2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Total Capital Needs</td>
                    <td  id="totalCapNeeds1"></td>
                    <td  id="totalCapNeeds2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
		   
		  
				<div class="col-lg-6 col-md-8">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">B</th>
                    <th style="color: #ffffff;">Immediate Cash Needs at Death</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Overdrafts</td>
                    <td id="overdrafts"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Short Term Loans</td>
                    <td id="shortTermLoans"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Credit Card Loans</td>
                    <td id="creditCardLoans"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Taxes</td>
                    <td id="taxes"></td>
                    <td id=""></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Last Expenses</td>
                    <td id="lastExp"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vehicle Loan</td>
                    <td id="vehicleLoan"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Mortgage Loan</td>
                    <td id="mortageLoan"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Other Liabilities</td>
                    <td id="otherLiab"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children Education Funds</td>
                    <td id="childEduFnds"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td>Total Immediate Cash Needs</td>
                    <td id="totalImmCashNeeds"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td>Total Estate Needs [A+B]</td>
                    <td id=""></td>
                    <td id="totalEstNeeds"></td>
                  </tr>
				   
                </tbody>
              </table>
            </div>
          </div>
          </div>
          
          <div class="col-md-12">
				<div class="col-md-6" > </div>
				<div class="col-md-6" > </div>
		  </div>
           <div class="row">
           <div class="col-lg-6 col-md-8"></div>
           <div class="col-lg-6 col-md-8"></div>
           </div>
          <div class="row">
				 
				<div class="col-lg-6 col-md-8">
				
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">C </th>
                    <th style="color: #ffffff;"> Available Assets</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;"></th>
                     
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Cash Assets</td>
                    <td id="cashAssets"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Bonds</td>
                    <td id="bondSelf"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Unit trusts, Investment Linked and Other Funds</td>
                    <td id="unitsInvFunds"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Stocks and Shares</td>
                    <td id="stocksShares"></td>
                    <td id=""></td>
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Other Investments</td>
                    <td id="otherInv"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>SRS</td>
                    <td id="invSrs"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Life Insurance</td>
                    <td  id="totDeathBenef"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>CPF</td>
                    <td  id="totCpf"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vehicles</td>
                    <td  id="totVehMrkt"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Property Investments</td>
                    <td  id="proInv"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Other Assets</td>
                    <td  id="otherAsset"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Total Current Assets</td>
                    <td  id="totalCurrentAsst"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted Income available</td>
                    <td  id="cummIncAvailble"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Total Surplus or Deficit (-) [2-1]</td>
                    <td  id=""></td>
                    <td  id="totSurplusDeficit"></td>
                  </tr>
                  
                </tbody>
              </table>
              
            </div>
            </div>
            <div class="col-lg-6 col-md-8">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">2. </th>
                    <th style="color: #ffffff;">Disability Income Needs</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;"></th>
                     
                  </tr>
                  </thead>
                  <tr>
                   <th></th>
                <th>Needs for</th>
                <th>Ann fin. needs</th>
                <th>Commuted Amt Needed</th>
                </tr>
                 <tbody>
                 <tr>
                    <td></td>
                    <td>Personal</td>
                    <td id="personalDisNeeds1"></td>
                    <td id="personalDisNeeds2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="spouseDidNeeds1"></td>
                    <td id="spouseDidNeeds2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td id="childDisNeeds1"></td>
                    <td id="childDisNeeds2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td id="familyDisNeeds1"></td>
                    <td id="familyDisNeeds2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dependents</td>
                    <td id="depnDisNeeds1"></td>
                    <td id="depnDisNeeds2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual medical expenses to provide</td>
                    <td ></td>
                    <td id="annlMedExpProv"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted Income Needed on Disability</td>
                    <td id=""></td>
                    <td id="comIncNeedDisblty"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted value of other income to be received in event of TPD</td>
                    <td id=""></td>
                    <td id="comValOthIncRecEvnTPD"></td>
                  </tr>
                   <tr>
                    <td></td>
                    <td>Commuted value of Annual Total & Permanent Disability Income (TPD)</td>
                    <td id=""></td>
                    <td id="commValAnnlPermntDisInc"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2"><table style="border: 1px solid black;margin-left:137px; width:62%">
  <tr style="border: 1px solid black">
    <th style="border: 1px solid black">Disability Benefits available-</th>
    <th style="border: 1px solid black">Commuted Benefits</th> 
  </tr>
  <tr>
  <td style="border: 1px solid black">TPD</td>
  <td style="border: 1px solid black" id="tpd"></td>
  </tr>
  <tr>
  <td style="border: 1px solid black">Disability Income</td>
  <td style="border: 1px solid black" id="disability"></td>
  </tr>
  <tr>
  <td style="border: 1px solid black">Long Term Disability</td>
  <td style="border: 1px solid black" id="longdisability"></td>
  </tr>
  </table></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                   <td></td>
                    <td>Net Disability Income Needs Surplus or Deficit (-)</td>
                    <td id=""></td>
                    <td id="netDisIncNeedsSurDef"></td>
                  </tr>
                  </tbody>
                  
                  </table>
                  </div>
                  
                  
                 
          </div>
          <div class="col-lg-6 col-md-8">
          <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">3.</th>
                    <th style="color: #ffffff;">Major Medical Needs</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;"></th>
                  </tr>
                </thead>
                <tr>
                   <th></th>
                <th>Needs for</th>
                <th>Ann fin. needs</th>
                <th>Commuted Amt Needed</th>
                </tr>
                <tr>
                    <td></td>
                    <td>Personal</td>
                    <td id="personalMajrMed1"></td>
                    <td id="personalMajrMed2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="spouseMajrMed1"></td>
                    <td id="spouseMajrMed2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td id="childMjrMed1"></td>
                    <td id="childMjrMed2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td id="famMjrMed1"></td>
                    <td id="famMjrMed2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dependents</td>
                    <td id="depMjrMed1"></td>
                    <td id="depMjrMed2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Lump sum medical cost for major illness</td>
                    <td id="lumpsum"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted annual med expenses for major illness</td>
                    <td id="comAnnlMedExpMajIllns"></td>
                    <td id=""></td>
                  </tr>
                  <tr>  <!-- style="color: #ffffff; background:#0b5f0d" -->
                    <td></td>
                    <td>Total Major Medical Needs</td>
                    <td id="totMajrMedNeeds"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dreaded Disease - Early stage coverage</td>
                    <td id="disEarlyStageCov"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td>Dreaded Disease - Adv stage coverage</td>
                    <td id="disAdvStageCov"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Net Dreaded Disease cover needs Surplus or Deficits (-) early stage </td>
                    <td id=""></td>
                    <td id="netDisCovNeedSurpDefEarlystag"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Net Dreaded Disease cover needs Surplus or Deficits (-) adv stage </td>
                    <td id=""></td>
                    <td id="netDisCovNeedSurpDefAdvstag"></td>
                  </tr>
                </table>
                </div>
		   </div>
		   
		  
				<div class="col-lg-6 col-md-8">
             
          </div>
          </div>
				
				</div>
				<!-- <div class="row">
				<div class="clearspace40"></div>
				<div id="chartpdfid">
				
				<div class="row">
				
					<div class="col-xs-12 col-md-6">
						<div class="panel panel-default">
							<div class="panel-heading">
							<div class="clearspace40"></div>
								<h3 class="panel-title">Pie Chart Self Annual Income / Expense<ul class="rad-panel-action">
																	 
																</ul></h3>
							</div>
							<div class="panel-body">
								<div id="areaChart" ></div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-md-6">
						<div class="panel panel-default">
							<div class="panel-heading">
							<div class="clearspace40"></div>
								<h3 class="panel-title">Donut Chart Self Annual Income / Expense<ul class="rad-panel-action">
																	 
																</ul></h3>
							</div>
							<div class="panel-body">
								<div id="areaChart2" ></div>
							</div>

						</div>
					</div>
					 
				</div>
				
			 
				<div class="row">
					 
					<div class="col-md-6 col-lg-6">
						<div class="panel panel-default">
						<div id="chartid">
							<div class="panel-heading">
								<h3 class="panel-title">Bar Chart Self Income </h3>
							</div>
							<div class="panel-body">
								<div id="barChart2" ></div>
							</div>
							</div>
						</div>
					</div> 
					<div class="col-md-12 col-lg-6">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">Bar Chart Self Expense </h3>
							</div>
							<div class="panel-body">
								<div id="barChart" ></div>
							</div>
						</div>
					</div>
					 <input type="hidden" name="fId" id="fId" class="formHiddenIds"/>
				</div>
				</div>
				</div> -->
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
		hideLoader(); 
		parameter_fnaId = "<%=request.getParameter("strFNAId")%>";
		parameter_elderShield = "<%=request.getParameter("P_ELDERSHIELD")%>";
		SnaSelfSrch(parameter_fnaId,parameter_elderShield);
	}); 
	
</script>
</body>
</html>