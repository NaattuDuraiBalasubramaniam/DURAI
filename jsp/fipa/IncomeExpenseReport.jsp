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
			<!-- 	<li><button id="pdfPrint" class="btn btn-info">Pdf</button></li> -->
				<li><button type="button"  id="pdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li> 
			<!-- commed by vignesh on 08 06 2021 -->
					<!-- <li class="rad-dropdown"><a class="rad-menu-item" id="popcolorid" href="#"><i class="fa fa-cog"></i></a>
						<ul class="rad-dropmenu-item rad-settings">
							<li class="rad-dropmenu-header"><a href="#">Settings</a></li>
							<li class="rad-notification-item text-left">
								<div class="pull-left"><i class="fa fa-link"></i></div>
								<div class="pull-right">
									<label class="rad-chk-pin pull-right">
										<input type="checkbox" /><span></span></label>
								</div>
								<div class="rad-notification-body">
									<div class="lg-text">Change to Flat Theme</div>
									<div class="sm-text">Flattify it</div>
								</div>
							</li>
							<li id="rad-color-opts" class="rad-notification-item text-left hide">
								<div class="pull-left"><i class="fa fa-puzzle-piece"></i></div>
								<div class="pull-right">
									<div class="rad-color-swatch">
										<label class="colors rad-bg-crimson rad-option-selected">
											<input type="radio" checked name="color" value="crimson" />
										</label>
										<label class="colors rad-bg-teal">
											<input type="radio" name="color" value="teal" />
										</label>
										<label class="colors rad-bg-purple">
											<input type="radio" name="color" value="purple">
										</label>
										<label class="colors rad-bg-orange">
											<input type="radio" name="color" value="orange" />
										</label>
										<label class="colors rad-bg-twitter">
											<input type="radio" name="color" value="twitter" />
										</label>
									</div>
								</div>
								<div class="rad-notification-body">
									<div class="lg-text">Choose a color</div>
									<div class="sm-text">Make it colorful</div>
								</div>
							</li>
						</ul>
					</li> -->
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
					<span> Cash Flow Analysis </span>
						<div id="pdfContent">
				<div class="row">
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-success">
						<!-- <i class="fa fa-windows"></i>--> <i class="fa fa-money"></i>
							<span class="heading">Annual Income</span>
							<span class="value"><span id="annualIncomeId"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-primary">
							<!--<i class="fa fa-facebook"></i>--><i class="fa fa-group"></i>
							<span class="heading">Employee Contribution</span>
							<span class="value"><span id="employeeContribution"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box rad-txt-danger">
							<i class="fa fa-calendar"></i>
							<span class="heading">Annual Inflow</span>
							<span class="value"><span id="annualInflowid"></span></span>
						</div>
					</div>
					<div class="col-lg-3 col-xs-6">
						<div class="rad-info-box">
							<i class="fa fa-spinner"></i>
							<span class="heading">Net surplus/ deficit</span>
							<span class="value"><span id="netSurplusDeficitid"></span></span>
						</div>
					</div>
				</div>
				 
				 <div class="row">
				 
				<div class="col-lg-5 col-md-8">
				
				
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">Source of Income</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;">Self</th>
                    <th style="color: #ffffff;">Spouse</th>
                    <th style="color: #ffffff;">Joint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employment</td>
                    <td>Monthly Net Income(OW)</td>
                    <td id="selfEmpMonthlyNetIncId"></td>
                    <td id="spouseEmpMonthlyNetIncId"></td>
                    <td id="familyEmpMonthlyNetIncId" style="display:none;display: table-column;"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual profits/bonuses</td>
                    <td id="selfEmpProfitId"></td>
                    <td id="spouseEmpProfitId"></td>
                    <td id="familyEmpProfitId"></td>
                  </tr>
                  <tr>
                    <td>Non Employment income</td>
                    <td>Monthly income</td>
                    <td id="selfNonEmpMonIncId"></td>
                    <td id="spouseNonEmpMonIncId"></td>
                    <td id="familyNonEmpMonIncId" style="display:none;display: table-column;"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual Int., dividends, gains</td>
                    <td id="selfNonEmpDivcId"></td>
                    <td id="spouseNonEmpDivId"></td>
                    <td id="familyNonEmpDivId" style="display:none;display: table-column;"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual rental income</td>
                    <td id="selfNonEmpAnnRentalIncId"></td>
                    <td id="spouseNonEmpAnnRentalIncId"></td>
                    <td id="familyNonEmpAnnRentalIncId"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Others (annual)</td>
                    <td id="selfNonEmpOthersId"></td>
                    <td id="spousNonEmpOthersId"></td>
                    <td id="familyNonEmpOthersId" style="display:none;display: table-column;"></td>
                  </tr>
                  <tr>
                    <td>Total Annual Income</td>
                    <td></td>
                    <td id="selfTotalAnnualIncId"></td>
                    <td id="spouseTotalAnnualIncId"></td>
                    <td id="familyTotalAnnualIncId"></td>
                  </tr>
                  <tr>
                    <td>Less Employee's Contributions</td>
                    <td></td>
                    <td  id="selfEmpContributionId"></td>
                    <td  id="spouseEmpContributionId"></td>
                    <td  id="familyEmpContributionId"></td>
                  </tr>
                  <tr>
                    <td>Net Annual Inflow</td>
                    <td></td>
                    <td  id="selfNetannualInflowId"></td>
                    <td  id="spouseNetannualInflowId"></td>
                    <td  id="familyNetannualInflowId" style="display:none;display: table-column;"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
		   
		  
				<div class="col-lg-7 col-md-8">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                    <th style="color: #ffffff;">Source of Expense</th>
                    <th style="color: #ffffff;"></th>
                    <th style="color: #ffffff;">Self</th>
                    <th style="color: #ffffff;">Spouse</th>
                    <th style="color: #ffffff;">Joint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rental for lodgings</td>
                    <td></td>
                    <td id="selfRentalLodgingId"></td>
                    <td id="spouseRentalLodgingId"></td>
                    <td id="familyRentalLodgingId"></td>
                  </tr>
                  <tr>
                    <td>Utilities & communication</td>
                    <td></td>
                    <td id="selfUtilitiesId"></td>
                    <td id="spouseUtilitiesId"></td>
                    <td id="familyUtilitiesId"></td>
                  </tr>
                  <tr>
                    <td>Grocery & household needs</td>
                    <td></td>
                    <td id="selfGroceryHouseholdId"></td>
                    <td id="spouseGroceryHouseholdId"></td>
                    <td id="familyGroceryHouseholdId"></td>
                  </tr>
                  <tr>
                    <td>Eating out</td>
                    <td></td>
                    <td id="selfEatingOutId"></td>
                    <td id="spouseEatingOutId"></td>
                    <td id="familyEatingOutId"></td>
                  </tr>
                  <tr>
                    <td>Clothing & apparel</td>
                    <td></td>
                    <td id="selfClothingApparelId"></td>
                    <td id="spouseClothingApparelId"></td>
                    <td id="familyClothingApparelId"></td>
                  </tr>
                  <tr>
                    <td>Transportation</td>
                    <td></td>
                    <td id="selfTransportId"></td>
                    <td id="spouseTransportId"></td>
                    <td id="familyTransportId"></td>
                  </tr>
                  <tr>
                    <td>Medical & personal care</td>
                    <td></td>
                    <td id="selfMedicalPersonalId"></td>
                    <td id="spouseMedicalPersonalId"></td>
                    <td id="familyMedicalPersonalId"></td>
                  </tr>
                  <tr>
                    <td>Personal expenses</td>
                    <td></td>
                    <td id="selfPersonalExpId"></td>
                    <td id="spousePersonalExpId"></td>
                    <td id="familyPersonalExpId"></td>
                  </tr>
                  <tr>
                    <td>Household maintenance & conservancy</td>
                    <td></td>
                    <td id="selfHouseholdMaintId">-N/A-</td>
                    <td id="spouseHouseholdMaintId">-N/A-</td>
                    <td id="familyHouseholdMaintId"></td>
                  </tr>
				   <tr>
                    <td>Domestic Help</td>
                    <td></td>
                    <td id="selfdomesticHelpId">-N/A-</td>
                    <td id="spousedomesticHelpId">-N/A-</td>
                    <td id="familydomesticHelpId"></td>
                  </tr>
				   <tr>
                    <td>Children care, education & enhancement prog</td>
                    <td></td>
                    <td id="selfChildrenEduEnhProgId">-N/A-</td>
                    <td id="spouseChildrenEduEnhProgId">-N/A-</td>
                    <td id="familyChildrenEduEnhProgId"></td>
                  </tr>
				   <tr>
                    <td>Dependant contributions</td>
                    <td></td>
                    <td id="selfDependContriId"></td>
                    <td id="spouseDependContriId"></td>
                    <td id="familyDependContriId">-N/A-</td>
                  </tr> 
				  <tr>
                    <td>Taxes</td>
                    <td></td>
                    <td id="selfTaxesId"></td>
                    <td id="spouseTaxesId"></td>
                    <td id="familyTaxesId"></td>
                  </tr>
				   <tr>
                    <td>Entertainment</td>
                    <td></td>
                    <td id="selfEntertainmentId"></td>
                    <td id="spouseEntertainmentId"></td>
                    <td id="familyEntertainmentId"></td>
                  </tr>
				   <tr>
                    <td>Festive Spending</td>
                    <td></td>
                    <td id="selfFestSpendId"></td>
                    <td id="spouseFestSpendId"></td>
                    <td id="familyFestSpendId"></td>
                  </tr>
				  <tr>
                    <td>Vacations</td>
                    <td></td>
                    <td id="selfVacationId"></td>
                    <td id="spouseVacationId"></td>
                    <td id="familyVacationId"></td>
                  </tr>
				  <tr>
                    <td>Charity</td>
                    <td></td>
                    <td id="selfCharityId"></td>
                    <td id="spouseCharityId"></td>
                    <td id="familyCharityId"></td>
                  </tr>
				  <tr>
                    <td>Property loan repayment</td>
                    <td></td>
                    <td id="selfPropertyLoanRepaymentId"></td>
                    <td id="spousePropertyLoanRepaymentId"></td>
                    <td id="familyPropertyLoanRepaymentId"></td>
                  </tr>
				  <tr> 
					<td>Vehicle loan repayment</td>
                    <td></td>
                    <td id="selfVehicleLoanId"></td>
                    <td id="spouseVehicleLoanId"></td>
                    <td id="familyVehicleLoanId"></td>
                  </tr>
				  <tr> 
					<td>Life Insurance Premium</td>
                    <td></td>
                    <td id="selfLifeInsPremId"></td>
                    <td id="spouseLifeInsPremId"></td>
                    <td id="familyLifeInsPremId"></td>
                  </tr>
				  <tr> 
					<td>General Insurance Premium</td>
                    <td></td>
                    <td id="selfGenInsPremId"></td>
                    <td id="spouseGenInsPremId"></td>
                    <td id="familyGenInsPremId"></td>
                  </tr>
				  <tr> 
					<td>Others</td>
                    <td></td>
                    <td id="selfOthersId"></td>
                    <td id="spouseOthersId"></td>
                    <td id="familyOthersId"></td>
                  </tr>
				  <tr> 
					<td>Annual Expenses</td>
                    <td></td>
                    <td id="selfAnnualExpId"></td>
                    <td id="spouseAnnualExpId"></td>
                    <td id="familyAnnualExpId"></td>
                  </tr>
                  <tr style="display:none"> 
					<td> Net surplus/ deficit</td>
                    <td ></td>
                    <td id="totalNetSurpdeficitSelfid"></td>
                    <td id="totalNetSurpdeficitspouseId"></td>
                    <td id="totalNetSurpdeficitfamid"></td>
                  </tr>
				  <tr> 
					<td>Total Net surplus/ deficit</td>
                    <td ></td>
                    <td id=""></td>
                    <td id="totalNetSurpdeficitId"></td>
                    <td id=""></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
				
				</div>
				<div class="row">
				<div class="clearspace40"></div>
				<div id="chartpdfid">
				
				<div class="row">
				
					<div class="col-xs-12 ">
						<div class="panel panel-default">
							<div class="panel-heading">
							<div class="clearspace40"></div>
								<h3 class="panel-title">Chart Self Annual Income / Expense<ul class="rad-panel-action">
																	<!-- commed by vignesh on 08 06 2021 -->
																	<!-- <li><i class="fa fa-chevron-down"></i></li>
																	<li><i class="fa fa-rotate-right"></i></li>
																	<li><i class="fa fa-cog"></i>
																	<li><i class="fa fa-close"></i>
																	</li> -->
																</ul></h3>
							</div>
							<div class="panel-body">
								<div id="areaChart" style="height: 450px;width: 900px;"></div>
								<div style="">
								<select id="chartTypeIncomeExpense" onchange="loadDynamicChartIncExps();"> 
							                <option value="Pie">Pie Chart</option>
							                <option value="Doughnut">Doughnut chart</option>
							            </select>
								</div>
							</div>
							
						</div>
					</div>
					<!-- <div class="col-xs-12 col-md-6">
						<div class="panel panel-default" >
							<div class="panel-heading">
							<div class="clearspace40"></div>
								<h3 class="panel-title"> Change Self Annual Income / Expense<ul class="rad-panel-action">
																</ul></h3>
							</div>
							<div class="panel-body">
								<div id="areaChart2" ></div>
							</div>
										
						</div>
					</div> -->
					 
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
		cashFlowSrch(parameter_fnaId);
	}); 
	
</script>
</body>
</html>