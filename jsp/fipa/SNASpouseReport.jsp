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
				<!-- <li><button id="pdfPrintSNASpouse" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button"  id="pdfPrintSNASpouse" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li> 
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
		<div class="rad-body-wrapper rad-nav-min" id="print">
			<div class="container-fluid">
				<header class="rad-page-title">
					 <span style="text-align:center;"> Survival Needs Analysis - Spouse </span>
					<span> 1. Estate Needs </span>
						<div id="snaSpspdfContent">
				 
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
                    <td id="inflationRatespouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Investment Rate (family)</td>
                    <td id="invstRateFamilySpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Effective Rate</td>
                    <td id="effRateSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <th></th>
                    <th>Capital Needs for</th>
                    <th id="">Ann fin. needs</th>
                    <th id="">Commuted Amt Needed</th>
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Personal</td>
                    <td id="personalSpouse1"></td>
                    <td id="personalSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="spdspouse1"></td>
                    <td id="spdspouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td  id="childSpouse1"></td>
                    <td  id="childSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td  id="familySpouse1"></td>
                    <td  id="familySpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dependants</td>
                    <td  id="depenantspouse1"></td>
                    <td  id="depenantspouse2"></td>
                  </tr>
                  <tr>    <!-- style="color: #ffffff; background:#0b5f0d" -->
                    <td></td>
                    <td>Total Capital Needs</td>
                    <td  id="totCapNeeds1"></td>
                    <td  id="totCapNeeds2"></td>
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
                    <td id="overdraftSpouse1"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Short Term Loans</td>
                    <td id="shortTermLoanSpouse1"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Credit Card Loans</td>
                    <td id="creditcardLoans"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Taxes</td>
                    <td id="taxesspouse1"></td>
                    <td id=""></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Last Expenses</td>
                    <td id="lastExpSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vehicle Loan</td>
                    <td id="vehLoanSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Mortgage Loan</td>
                    <td id="mortageLoanSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Other Liabilities</td>
                    <td id="otherLiabSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children Education Funds</td>
                    <td id="childEduFundSpouse"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td style="color:black">Total Immediate Cash Needs</td>
                    <td id="totImmCashNeedsspouse"></td>
                    <td id=""></td>
                  </tr>
				   <tr >  <!-- style="color: #ffffff; background:#0b5f0d" -->
                    <td></td>
                    <td>Total Estate Needs [A+B]</td>
                    <td id=""></td>
                    <td id="totalEstNeedSpouse"></td>
                  </tr>
				   
                </tbody>
              </table>
            </div>
          </div>
          </div>
          
          <!-- <div class="col-md-12">
				<div class="col-md-6" > </div>
				<div class="col-md-6" > </div>
		  </div>
           <div class="row">
           <div class="col-lg-6 col-md-8"></div>
           <div class="col-lg-6 col-md-8"></div>
           </div> -->
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
                    <td id="cashassetspouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Bonds</td>
                    <td id="bondspouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Unit trusts, Investment Linked and Other Funds</td>
                    <td id="unittrustspouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Stocks and Shares</td>
                    <td id="stockSpouse"></td>
                    <td id=""></td>
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Other Investments</td>
                    <td id="othInvSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>SRS</td>
                    <td id="srsSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Life Insurance</td>
                    <td  id="lifeInsSpouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>CPF</td>
                    <td  id="cpfSpouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vehicles</td>
                    <td  id="vechilespouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Property Investments</td>
                    <td  id="propInvSpouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Other Assets</td>
                    <td  id="OtherAsstspouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Total Current Assets</td>
                    <td  id="totCurrentAsstSpouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Commuted Income available</td>
                    <td  id="cmmIncAvailSpouse"></td>
                    <td  id=""></td>
                  </tr>
                  <tr>    <!-- style="color: #ffffff; background:#0b5f0d" -->
                    <td></td>
                    <td>Total Surplus or Deficit (-) [2-1]</td>
                    <td  id=""></td>
                    <td  id="totSurDefSpouse"></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
		   
		  
				<div class="col-lg-6 col-md-8">
             
          </div>
          </div>
				
				</div>
				
				<div id="snaSpouseDisInNeeds">
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
                    <td id="perDisIncSpouse1"></td>
                    <td id="perDisIncSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="spoDisIncSpouse1"></td>
                    <td id="spoDisIncSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td id="childDisIncSpouse1"></td>
                    <td id="childDisIncSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td id="familyDisIncSpouse1"></td>
                    <td id="familyDisIncSpouse2"></td>
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Dependents</td>
                    <td id="depDisIncSpouse1"></td>
                    <td id="depDisIncSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual medical expenses to provide</td>
                    <td id=""></td>
                    <td id="annlMedExpDisIncSpouse1"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Commuted Income Needed on Disability</td>
                    <td  id=""></td>
                    <td  id="commIncNeedDisIncSpouse1"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted value of other income to be received in event of TPD</td>
                    <td  id=""></td>
                    <td  id="commValOthrDisIncSpouse1"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted value of Annual Total & Permanent Disability Income (TPD) </td>
                    <td  id=""></td>
                    <td  id="commValAnnlTotDisIncSpouse1"></td>
                  </tr>
                  <tr>
                  <td></td>
                  <td colspan="2"><table style="border: 1px solid black;margin-left:137px; width:63%">
  <tr style="border: 1px solid black">
    <th style="border: 1px solid black">Disability Benefits available-</th>
    <th style="border: 1px solid black">Commuted Benefits</th> 
  </tr>
  <tr>
  <td style="border: 1px solid black">TPD</td>
  <td style="border: 1px solid black" id="tpdSpouse"></td>
  </tr>
  <tr>
  <td style="border: 1px solid black">Income Disability</td>
  <td style="border: 1px solid black" id="IncDisSpouse" ></td>
  </tr>
  </table></td>
  <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Net Disability Income Needs Surplus or Deficit (-) </td>
                    <td  id=""></td>
                    <td  id="netDisIncSurDefSpouse"></td>
                  </tr>
                 
          
                </tbody>
              </table>
              
            </div>
          </div>
		   </div>
		 
		  <div id='snaSpouseMajrMedNeeds'>
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
                <tbody>
                  <tr>
                    <td></td>
                    <td>Personal</td>
                    <td id="cisPersonalSpouse1"></td>
                    <td id="cisPersonalSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Spouse</td>
                    <td id="cisSpouse1"></td>
                    <td id="cisSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Children</td>
                    <td id="cischildSpouse1"></td>
                    <td id="cischildSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Family</td>
                    <td id="cisfamilySpouse1"></td>
                    <td id="cisfamilySpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dependents</td>
                    <td id="cisDepSpouse1"></td>
                    <td id="cisDepSpouse2"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Lump sum medical cost for major illness</td>
                    <td id="lumpsumMedCostIllSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Commuted annual med expenses for major illness</td>
                    <td id="commAnnlMedExpSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr style="color: #ffffff; background:#0b5f0d">
                    <td></td>
                    <td>Total Major Medical Needs</td>
                    <td id="totMedExpSpouse"></td>
                    <td id=""></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Dreaded Disease - Early stage coverage</td>
                    <td id="disElryCovSpouse"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td>Dreaded Disease - Adv stage coverage</td>
                    <td id="disAdvCovSpouse"></td>
                    <td id=""></td>
                  </tr>
				   <tr>
                    <td></td>
                    <td style="color:black">Net Dreaded Disease cover needs Surplus or Deficits (-) early stage </td>
                    <td id=""></td>
                    <td id="netDisCovSurDefSpouse"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="color:black">Net Dreaded Disease cover needs Surplus or Deficits (-) adv stage </td>
                    <td id=""></td>
                    <td id="netdisCovSurDefAdvSpouse"></td>
                  </tr>
				   
                </tbody>
              </table>
              
            
            </div>
          </div>
          </div>
          
          </header>
          
            <!-- <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                   <th style="color:#fff;">Notes</th>
                  </tr>
                </thead>
                </table>
          
            </div> -->
          
         
          
          <!-- <div class="col-md-12">
				<div class="col-md-6" > </div>
				<div class="col-md-6" > </div>
		  </div>
           <div class="row">
           <div class="col-lg-6 col-md-8"></div>
           <div class="col-lg-6 col-md-8"></div>
           
           </div> -->
                  
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
		//cashFlowSrch(parameter_fnaId);
		SnaSpouseSrch(parameter_fnaId);
	}); 
	
	 
	
</script>
</body>
</html>