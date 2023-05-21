<%@page import="java.util.Calendar"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 

<style>

	.inv-btn-controls{
	  padding-left:3px;
	  padding-right:3px;
	}
	
	.inv-btn-rounded{
	  -moz-border-radius: 25px;
      -webkit-border-radius: 25px;
	  border-radius: 25px;
	}

</style>

<script>
	
	window.onload = function(){
		fnFIPAInvOnLoadevnt();
	};
	
</script>

<!-- This is the FIPA Investment Core Layout upon which all the other sections will be included -->
<div style="margin:20px;">
	<div class="row">
		<div class="col-md-1 col-sm-1">
			&nbsp;
		</div>
		<div class="col-md-5 col-sm-5">&nbsp;</div>
		<div class="col-md-6 col-sm-6">
			<div style="text-align:right;">
				<span class="inv-btn-controls">
					<button type="button" class="btn btn-md btn-info inv-btn-rounded addRow-icon1" onclick="fnAddInvestmentDets('ADD');">
						<i style="padding-right:5px;" class="fa fa-plus" ></i>
						Add Investment Details
					</button>
				</span>
				<span class="inv-btn-controls">
					<button type="button" class="btn btn-md btn-info inv-btn-rounded" onclick="fnShowInvRep();">
						<i style="padding-right:5px;" class="fa fa-file-text-o" ></i>
						Investment Report
					</button>
				</span>
			</div>
		</div>
	</div>
	
	<!-- Investment Details Content Area starts here -->
	<div style="margin-top:50px;" id="divInvDetsSummaryId">
		<div class="panel-heading" role="tab"
			  style="color: #000;background-color: #EEE;border-color: #243665;font-size: 14px;padding: 13px 8px;">
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<h3 class="panel-title" style="padding-top:5px;">
						<a role="button" class="addRow-icon1" data-toggle="collapse" data-parent="#accordion" href="#newInvColSumm" style="color:#337ab7;"
						   aria-expanded="true" aria-controls="newInvColSumm" id="newInvSummHead" onclick="fnChngMode(0);" >
						   Investment Details
						</a>
					</h3>
				</div>
			</div>
		</div>
		<div id="newInvColSumm" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="newInvSummHead">
			<div class="panel-body" style="background-color:#EEE;">
				<div  style="margin:5px;padding:25px;background-color:#FFF;" id="divInvTblSummDets">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<table id="tblInvDetsSummaryId" class="dataTable table-bordered table-striped display hover" style="width: 100%">
								<thead>
									<tr>
										<td width="34%">Description</td>
										<td width="11%">Period of Inv.</td>
										<td width="10%">ROI (%)</td>
										<td width="11%">Current NAV ($)</td>
										<td width="24%">RSP Details</td>
										<td width="10%">Action</td>
									</tr>
								</thead>
								<tbody></tbody>
								<tbody id="tblInvDetsDelTBodyId" style="display: none;">
								</tbody><!-- always hide for delete rows -->
							</table>
						</div>
					</div>
				</div>
				<div  style="margin:5px;padding:25px;background-color:#FFF;" id="divInvProjctnSummDets">
					<ul id="ulInvProjtnDetsId" class="nav nav-pills fipa_common_tab" role="tablist"	data-tabs="tabs" style="height: 30px">
						<li class="active">
							<a href="#divInvProjtnPieChart" data-toggle="tab">
								<label  class="tablabel" for="PieChartTab">
									<i class="fa fa-pie-chart" title="Pie Chart"></i>
									<span style="padding-left:10px;">Pie Chart</span>
								</label>
							</a>
						</li>
						<li>
							<a href="#divInvProjtnLineChart" data-toggle="tab"> 
								<label  class="tablabel" for="LineChartTab">
									<i class="fa fa-line-chart" title="Line Chart"></i>
									<span style="padding-left:10px;">Line Chart</span>
								</label>
						</a></li>	
					</ul>
					<hr class="border"/>
					<div class="clearspace5"></div>
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="divInvProjtnPieChart">
							<div class="row">
								<div class="col-md-12 col-sm-12">
									<canvas id="invProjtnPieChart" width="900px" height="300px" style="padding-left:2px;margin-top:20px;"></canvas>
								</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="divInvProjtnLineChart">
							<div class="row">
								<div class="col-md-12 col-sm-12">
									<canvas id="invProjectnCanvasSumm" width="900px" height="300px" style="padding-left:2px;margin-top:20px;"></canvas>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="divInvDetsNotFoundId" style="text-align: center;margin-top: 100px;display:none;">
		<h2>Investment details not found!</h2>	
	</div>
</div>


<!-- This div is added by John 2204.1 for designing modal investment dialog box 09032022-->
<div class="modal fade" id="divInvDetsId" style="display: none;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document" style="width:900px;">
    <div class="modal-content">
	  <div class="modal-header" style="padding: 10px;">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
	  <div class="modal-body" style="padding: 5px;">
	  	<div class="tabset" style="background: white;">
			<ul class="nav nav-pills" role="tablist"	data-tabs="tabs" style="height: 30px">
				<li class="active" id="lnkInvBasicDets">
					<a href="#divInvBasicDets" data-toggle="tab">
						<label class="tablabel" id="Clientdtlstablbl">
							<i class="fa fa-dollar (alias)" title="Client Details" style="padding-right:5px;"></i>Basic Details
						</label>
					</a>
				</li>
				<li id="lnkInvRSPDets">
					<a href="#divInvRSPDets" data-toggle="tab" id=""> 
						<label class="tablabel">
							<i class="fa fa-line-chart" title="Spouse Details" style="padding-right:5px;"></i>RSP
						</label>
					</a>
				</li>
				<li id="lnkInvNAVDets">
					<a href="#divInvNAVDets" data-toggle="tab" id="" class=""> 
						<label class="tablabel">
							<i class="fa fa-arrow-up" title="Children Details" style="padding-right:5px;"></i>NAV Details
						</label>
					</a>
				</li>
				<li id="lnkInvDividendDets">
					<a href="#divInvDividendDets" data-toggle="tab" id=""> 
						<label class="tablabel">
							<i class="fa fa-money" title="Dependent Details" style="padding-right:5px;"></i>Dividend Details
						</label>
					</a>
				</li>
				<li id="lnkInvObjsDets">
					<a href="#divInvObjsDets" data-toggle="tab" id=""> 
						<label class="tablabel">
							<i class="fa fa-bullseye" title="Dependent Details" style="padding-right:5px;"></i>Objective(s)
						</label>
					</a>
				</li>
			</ul>
		
			<hr class="border" style="margin-bottom:0px;"/>
		
			<div class="tab-content" style="height:280px;">
				<div role="tabpanel" class="fade in tab-pane active" id="divInvBasicDets">
					<div style="padding:20px;">
						<div class="row" style="padding-left:20px;">
							<div class="col-md-4">
								<label for="selInvOwnershipDlg" class="control-label mandFldastrks">
									Ownership *
								</label>
								<select name="selInvOwnershipDlg" id="selInvOwnershipDlg" class="form-control" style="width:80%;" >
									<option value="">--SELECT--</option>
									<c:forEach var="ownership" items="${OWNERSHIP_LIST}">
										<option value="${ownership}">${ownership}</option>
									</c:forEach>
								</select>
							</div>
							<div class="col-md-4">
								<label class="control-label" for="txtFldInvAmtDlg">Amount Invested ($)</label>
								<div class="input-group input-group-sm"  style="width:80%;" > 
									<div class="input-group-addon"   >
										<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
									</div>
									<input type="text" maxlength="15" name="txtFldInvAmtDlg" id="txtFldInvAmtDlg" onmouseover="fipaTooltip(this);" 
									class="form-control numbers" onkeypress="return fnValidateNum(event,this,15,2);" />
								</div>
							</div>
							<div class="col-md-4">
								<label for="selPaymentMethodDlg" class="control-label mandFldastrks">
									Payment Method
								</label>
								<select name="selPaymentMethodDlg" id="selPaymentMethodDlg" onchange="fnInvAccountNo();" class="form-control" style="width:80%;" >
									<option value="">--SELECT--</option>
									<c:forEach var="paymntMthd" items="${INV_PAYMENT_METHOD_LIST}">
										<option value="${paymntMthd}">${paymntMthd}</option>
									</c:forEach>
								</select>
							</div>
						</div>
						<div class="row" style="padding-left:20px;padding-top:20px;">
							<div class="col-md-4">
								<label for="selPFAnalysisDlg" class="control-label">
									Analysis by Portfolio
								</label>
								<select name="selPFAnalysisDlg" id="selPFAnalysisDlg" onchange="fnChkAnalysisByPF(this);" class="form-control" style="width:80%;" >
									<option value="">--SELECT--</option>
									<option value="Y">Yes</option>
									<option value="N">No</option>
								</select>
							</div>
							<div class="col-md-4">
								<label for="selInvTypeDlg" class="control-label mandFldastrks">
									Type of Investment *
								</label>
								<select name="selInvTypeDlg" id="selInvTypeDlg" class="form-control" onchange="fnSetEstRoI(this,'');" style="width:80%;" >
									<option value="">--SELECT--</option>
									<c:forEach var="typesofinvst" items="${INV_TYPEOFINVST_LIST}">
										<option value="${typesofinvst}">${typesofinvst}</option>
									</c:forEach>
								</select>
							</div>
							<div class="col-md-4">
								<label class="control-label" for="txtFldEstRoIDlg">Estimated ROI (%)</label>
								<div class="input-group input-group-sm"  style="width:80%;" > 
									<input type="text" maxlength="5" name="txtFldEstRoIDlg" id="txtFldEstRoIDlg" onchange="fnCalcFV('');" onmouseover="fipaTooltip(this);" 
									class="form-control numbers" onkeypress="return fnValidateNum(event,this,3,2);" />
									<div class="input-group-addon"   >
										<span style="font-size:8pt;" class="fa fa-percent" ></span>  
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="padding-left:20px;padding-top:20px;">
							<div class="col-md-4">
								<div class="row">
									<div class="col-md-10 col-sm-10">
										<label for="selInvInstituteNameDlg" class="control-label mandFldastrks">
										Name of the Institution
									</label>
									<select name="selInvInstituteNameDlg" id="selInvInstituteNameDlg" class="form-control" onchange="fnLoadFundDets(this);" style="width:99%;" >
										<option value="">--SELECT--</option>
										<c:forEach var="invfundmagrlist" items="${INV_FUNDMGR_LIST}">
										    <option value="${invfundmagrlist[0]}">${invfundmagrlist[0]} - ${invfundmagrlist[1]}</option> 
										</c:forEach>
									</select>
									<input type="text" name="txtFldInvInstituteNameDlg" id="txtFldInvInstituteNameDlg" placeholder="Type Institute Name" onmouseover="fipaTooltip(this);" 
										class="form-control" style="width:99%;display:none;text-align:left !important;" />
									</div>
									<div class="col-md-2 col-sm-2" title="Click here to switch to over-write or select combo box." style="margin-top:24px;padding-left:0px;">
										<a href="javascript:void(0);" id="lnkInvInstituteNameDlg" onclick="fnSwitchInvField(this,'INSTITUTE');" style="border-radius:25%;" class="btn btn-sm btn-primary btn-rounded btn-outline">
										  <i class="fa fa-retweet"></i>
										</a>
										<input type="hidden" name="hdnFldInvIsCustomInstituteDlg" id="hdnFldInvIsCustomInstituteDlg" value="N" />
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="row">
									<div class="col-md-10 col-sm-10">
										<label for="selInvDescDlg" class="control-label mandFldastrks">
											Description of Investment
										</label>
										<select name="selInvDescDlg" id="selInvDescDlg" class="form-control" onchange="fnInvAccountNo();" style="width:99%;" >
											<option value="">--SELECT--</option>
										</select>
										<input type="text" name="txtFldInvDescDlg" id="txtFldInvDescDlg" placeholder="Type Investment Name" onmouseover="fipaTooltip(this);" 
											class="form-control" style="width:99%;display:none;text-align:left !important;" />
									</div>
									<div class="col-md-2 col-sm-2" title="Click here to switch to over-write or select combo box." style="margin-top:24px;padding-left:0px;">
										<a href="javascript:void(0);" id="lnkInvDescDlg" onclick="fnSwitchInvField(this,'INVESTMENT');" style="border-radius:25%;" class="btn btn-sm btn-primary btn-rounded btn-outline">
										  <i class="fa fa-retweet"></i>
										</a>
										<input type="hidden" name="hdnFldInvIsCustomDescriptnDlg" id="hdnFldInvIsCustomDescriptnDlg" value="N" />
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<label for="txtFldInvAccNoDlg" class="control-label">
									Investment Account Number
								</label>
								<input type="text" name="txtFldInvAccNoDlg" id="txtFldInvAccNoDlg" onmouseover="fipaTooltip(this);" 
								class="form-control" style="width:80%;text-align:left !important;" />
							</div>
						</div>
					</div>
				</div>
		
				<div role="tabpanel" class="tab-pane fade" id="divInvRSPDets">
					<div style="padding:20px;">
						<div class="row" style="padding-left:20px;">
							<div class="col-md-4">
								<div id="divSelRSPExists">
									<label for="selRSPExistsDlg" class="control-label">
										Any Regular Investment Plan
									</label>
									<select name="selRSPExistsDlg" id="selRSPExistsDlg" onchange="fnChkForRSPInv(this);" class="form-control" style="width:80%;" >
										<option value="">--SELECT--</option>
										<option value="Y">Yes</option>
										<option value="N">No</option>
									</select>
								</div>
							</div>
							<div class="col-md-4">
								<div id="divTxtFldRSPAmtDlg">
									<label class="control-label" for="txtFldRSPAmtDlg">RSP Amount ($)</label>
									<div class="input-group input-group-sm"  style="width:80%;" > 
										<div class="input-group-addon"   >
											<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
										</div>
										<input type="text" disabled name="txtFldRSPAmtDlg" id="txtFldRSPAmtDlg" 
										onchange="fnCalcFV('');" onmouseover="fipaTooltip(this);" 
										class="form-control numbers" maxlength="15" 
										onkeypress="return fnValidateNum(event,this,15,2);" />
									</div>
								</div>
							</div>
							<div class="col-md-4">
								&nbsp;
							</div>
						</div>
						<div class="row" style="padding-left:20px;padding-top:20px;">
							<div class="col-md-4">
								<div id="divSelInvFreqDlg">
									<label for="selInvFreqDlg" class="control-label">
										Frequency
									</label>
									<select disabled name="selInvFreqDlg" id="selInvFreqDlg" onchange="fnCalcFV('');" class="form-control" style="width:80%;" >
										<option value="">--SELECT--</option>
										<c:forEach var="payment" items="${LI_PAYMENTS_LIST}">
											<option value="${payment}">${payment}</option>
										</c:forEach>
									</select>
								</div>
							</div>
							<div class="col-md-4">
								<div id="divTxtFldRSPYrsDlg">
									<label class="control-label" for="txtFldRSPYrsDlg">Years of RSP Investment (Yrs)</label>
									<input disabled type="text" name="txtFldRSPYrsDlg" id="txtFldRSPYrsDlg" 
										onchange="fnValidtPriodsOfInv('');" onmouseover="fipaTooltip(this);" 
										class="form-control numbers" style="width:80%;" maxlength="2"
										onkeypress="return fnValidateNum(event,this,2,0);" />
								</div>
							</div>
							<div class="col-md-4">
								&nbsp;
							</div>
						</div>
					</div>
				</div>
		
				<div role="tabpanel" class="tab-pane fade" id="divInvNAVDets">
					<div style="padding:20px;">
						<div class="row" style="padding-left:20px;">
							<div class="col-md-4">
								<label class="control-label" for="txtFldInvDateDlg">Date Invested</label>
								<div class="input-group input-group-sm date"  id="divDateInvstdId" style="width:80%;" > 
								    <input type="text" name="txtFldInvDateDlg" id="txtFldInvDateDlg" maxlength="10"
										   onmouseover="fipaTooltip(this);" class="form-control" />
								    <div class="input-group-addon"   >
										<span class="glyphicon glyphicon-calendar" ></span>  
								    </div>
								</div>
							</div>
							<div class="col-md-4">
								<label class="control-label" for="txtFldNAVPriceDlg">Last NAV Price ($)</label>
								<div class="input-group input-group-sm" style="width:80%;" >
									<input type="text" name="txtFldNAVPriceDlg" id="txtFldNAVPriceDlg" onchange="fnCalcCurrNAV('');" 
									 onmouseover="fipaTooltip(this);" class="form-control numbers" maxlength="15" 
									 onkeypress="return fnValidateNum(event,this,15,4);" />
								    <div class="input-group-addon"  >
										<span class="glyphicon glyphicon-circle-arrow-down" 
										style="cursor:pointer;" onclick="fnGetLatestNAVPrice('');"></span>  
								    </div>
								</div>
							</div>
							<div class="col-md-4">
								&nbsp;
							</div>
						</div>
						<div class="row" style="padding-left:20px;padding-top:20px;">
							<div class="col-md-4">
								<label class="control-label" for="txtFldUnitsDlg">Number of Units</label>
								<div class="input-group input-group-sm"  style="width:80%;" > 
									<div class="input-group-addon"   >
										<span style="font-size:8pt;" class="glyphicon glyphicon-sound-7-1" ></span>  
									</div>
									<input type="text" name="txtFldUnitsDlg" id="txtFldUnitsDlg" 
									onchange="fnCalcCurrNAV('');" onmouseover="fipaTooltip(this);" 
									class="form-control numbers" maxlength="15"
									onkeypress="return fnValidateNum(event,this,15,4);" />
								</div>
							</div>
							<div class="col-md-4">
								<label class="control-label" for="txtFldCurrPFNavDlg">Current NAV ($)</label>
								<div class="input-group input-group-sm"  style="width:80%;" > 
									<div class="input-group-addon"   >
										<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
									</div>
									<input type="text" name="txtFldCurrPFNavDlg" 
									id="txtFldCurrPFNavDlg" onchange="fnCalcFV('');" 
									onmouseover="fipaTooltip(this);" class="form-control numbers"
									maxlength="15" onkeypress="return fnValidateNum(event,this,15,4);" />
								</div>
							</div>
							<div class="col-md-4">
								&nbsp;
							</div>
						</div>
					</div>
				</div>
		
				<div role="tabpanel" class="tab-pane fade" id="divInvDividendDets">
					<div style="padding:20px;">
						<div class="row" style="padding-left:20px;">
							<div class="col-md-4">
								<label for="selIsDividendReinvDlg" class="control-label">
									Dividend Reinvested
								</label>
								<select name="selIsDividendReinvDlg" id="selIsDividendReinvDlg" onchange="fnChkDividendReinv(this);" class="form-control" style="width:80%;" >
									<option value="">--SELECT--</option>
									<option value="Y" selected>Yes</option>
									<option value="N">No</option>
								</select>
							</div>
							<div class="col-md-4">
								<div id="divDivdntBasedOnIdDlg">
									<label for="selDividendBasedOnDlg" class="control-label">
										Dividend Based On
									</label>
									<select disabled name="selDividendBasedOnDlg" id="selDividendBasedOnDlg" onchange="fnValidateDivBasedOn(this,'');" class="form-control" style="width:80%;" >
										<option value="">--SELECT--</option>
										<option value="PAR">PAR</option>
										<option value="NAV">NAV</option>
									</select>
								</div>
							</div>
							<div class="col-md-4">
								<div id="divPARValIdDlg">
									<label class="control-label" for="txtFldPARValDlg">PAR Value ($)</label>
									<div class="input-group input-group-sm"  style="width:80%;" > 
										<div class="input-group-addon"   >
											<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
										</div>
										<input disabled type="text" name="txtFldPARValDlg" 
										id="txtFldPARValDlg" onchange="fnCalcDivPerAnnum('')" 
										onmouseover="fipaTooltip(this);" class="form-control numbers" 
										maxlength="15" onkeypress="return fnValidateNum(event,this,15,2);" />
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="padding-left:20px;padding-top:20px;">
							<div class="col-md-4">
								<div id="divDivdntRateIdDlg">
									<label class="control-label" for="txtFldDividendRateDlg">Dividend Rate (%)</label>
									<div class="input-group input-group-sm"  style="width:80%;" > 
										<input disabled type="text" name="txtFldDividendRateDlg" 
										id="txtFldDividendRateDlg" onchange="fnCalcDivPerAnnum('')" 
										onmouseover="fipaTooltip(this);" class="form-control numbers" 
										maxlength="15" onkeypress="return fnValidateNum(event,this,15,2);" />
										<div class="input-group-addon">
											<span style="font-size:8pt;" class="fa fa-percent" ></span>  
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div id="divDivdntPayModeIdDlg">
									<label for="selDivPaymentModeDlg" class="control-label">
										Dividend Payment Mode
									</label>
									<select disabled name="selDivPaymentModeDlg" id="selDivPaymentModeDlg" class="form-control" style="width:80%;" >
										<option value="">--SELECT--</option>
										<c:forEach var="payment" items="${LI_PAYMENTS_LIST}">
											<option value="${payment}">${payment}</option>
										</c:forEach>
									</select>
								</div>
							</div>
							<div class="col-md-4">
								<div id="divAnnulAmtIdDlg">
									<label class="control-label" for="txtFldAnnualDivAmtDlg">Dividend Amount Per Annum ($)</label>
									<div class="input-group input-group-sm"  style="width:80%;" > 
										<div class="input-group-addon"   >
											<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
										</div>
										<input disabled type="text" name="txtFldAnnualDivAmtDlg" 
										id="txtFldAnnualDivAmtDlg" onmouseover="fipaTooltip(this);" 
										class="form-control numbers" maxlength="15" 
										onkeypress="return fnValidateNum(event,this,15,2);" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" class="tab-pane fade" id="divInvObjsDets">
					<div style="padding-left:20px;padding-top:10px;">
						<div class="row">
							<div class="col-md-4">
								<div class="btnStyle">
								  <button type="button"  class="btn BtnFIPASRCH StylishSRCH" onclick="fnAddInvObjDets('');" >
									<span class="txt">Add Investment Objective</span>
									<span class="round"><i class="fa fa-plus"></i></span>
								  </button>
								</div>
							</div>
							<div class="col-md-4">&nbsp;</div>
							<div class="col-md-4">
								<label class="control-label mandFldastrks" for="txtFldInvPeriodDlg">Period of Investment (Yrs)</label>
								<input type="text" name="txtFldInvPeriodDlg" id="txtFldInvPeriodDlg" 
									   onchange="fnValidtPriodsOfInv('');fnCalcFV('');" 
									   onmouseover="fipaTooltip(this);" maxlength="2" 
									   class="form-control numbers" style="width:60%;"
									   onkeypress="return fnValidateNum(event,this,2,0);" />
							</div>
						</div>
					</div>
					<div style="padding-left:20px;padding-top:20px;overflow-y:auto;height:200px;">
						<table id="tblInvObjDetsDlgId" class="table table-hover table-striped" style="width: 99%">
							<tbody>
								
							</tbody>
							<!-- This is for delete rows -->
							<tbody id="tblDelInvObjId" style="display:none;">
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	  </div>
	  <div class="modal-footer" style="padding: 10px;">  
        <div class="btnStyle" style="padding-bottom:15px;">
		  <button type="button" id="btnAddInvDetsId"  class="btn BtnFIPASRCH StylishSRCH" onclick="fnSetInvDets();" >
		    <span class="txt">Add</span>
		    <span class="round"><i class="fa fa-plus"></i></span>
		  </button>
		  <button type="button" style="display:none" class="btn BtnFIPASRCH StylishSRCH" 
		  onclick="fnUpdInvDets();" id="btnUpdInvDetsId" >
		    <span class="txt">Update</span>
		    <span class="round"><i class="fa fa-refresh"></i></span>
		  </button>
		  <button type="button"  class="btn BtnFIPACAN StylishCAN" onclick="fnCloseInvDets();"  data-dismiss="modal">
			<span class="txt">Close</span>
			<span class="round"><i class="fa fa-times"></i></span>
		  </button>
		</div>
      </div>
	</div>
  </div>
  <input type="hidden" id="hdnFldInvObjIndexDlg" />
  <input type="hidden" id="hdnFldInvDetsModeDlg" />
</div>

<!-- This Div added for selecting investment objective, added by John 2204.1 09032022 -->
<div class="modal fade" id="divInvObjDetsDlgId" style="display: none;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document" style="width:740px;">
    <div class="modal-content">
	  <div class="modal-header" style="padding: 10px;">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
	  <div class="modal-body" style="padding: 5px;">
	  	<div style="height:300px;">
	  		<div class="row" style="padding-left:20px;padding-top:10px;">
				<div class="col-md-6">
					<div id="divSelInvObj">
						<label for="selInvObjDlg" class="control-label">
							Investment Objective
						</label>
						<select name="selInvObjDlg" id="selInvObjDlg" onchange="fnSelInvObjDets(this);" class="form-control" style="width:80%;" >
							<option value="">--SELECT--</option>
							<c:forEach var="typesofinvst" items="${INV_OBJOFINS_LIST}">
								<option value="${typesofinvst}">${typesofinvst}</option>
							</c:forEach>
						</select>
						<input type="hidden" id="hdnFldInvObjMode" />
					</div>
				</div>
				<div class="col-md-6">
					<div id="divTxtFldAccumltnPerc">
						<label class="control-label" for="txtFldAccumltnPercDlg">Allocation (%)</label>
						<div class="input-group input-group-sm"  style="width:80%;" > 
							<input type="text" name="txtFldAccumltnPercDlg" id="txtFldAccumltnPercDlg" 
								onmouseover="fipaTooltip(this);" class="form-control numbers" 
								maxlength="5" onkeypress="return fnValidateNum(event,this,3,2)" />
							<div class="input-group-addon"   >
								<span style="font-size:8pt;" class="fa fa-percent" ></span>  
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="padding-left:20px;padding-top:20px;">
				<div class="col-md-6">
					<div id="divTxtFldYrsToRetOrTer">
						<label class="control-label" id="lblFldYrsToRetOrTerDlg" for="txtFldYrsToRetOrTerDlg">Years to Retirement / Tertiary</label>
						<input type="text" maxlength="2" name="txtFldYrsToRetOrTerDlg" 
						id="txtFldYrsToRetOrTerDlg" onmouseover="fipaTooltip(this);" 
						onkeypress="return fnValidateNum(event,this,2,0);"
						class="form-control numbers" style="width:80%;" />
					</div>
				</div>
				<div class="col-md-6">
					<div id="divSelChildName">
						<label for="selChildNameDlg" class="control-label">
							Name of Child
						</label>
						<select name="selChildNameDlg" id="selChildNameDlg" class="form-control" style="width:80%;" >
							<option value="">--SELECT--</option>
						</select>
						<span id="spnChildNameDlg" style="font-size:10pt;font-weight:bold;color:red;font-style:italics;">
							Children name not found!
						</span>
					</div>
				</div>
			</div>
			<div class="row" style="padding-left:20px;padding-top:20px;">
				<div class="col-md-6">
					<div id="divDisbursmentByDlg" style="display:none;">
						<label for="selDisbursmentByDlg" class="control-label">
							Disbursement By
						</label>
						<select name="selDisbursmentByDlg" id="selDisbursmentByDlg" class="form-control" onchange="fnSetDisbrsmntBy(this);" style="width:80%;" >
							<option value="">--SELECT--</option>
							<option value="SINGLE">Single</option>
							<optgroup label="Regular">
								<option value="YEARS">No. of Years</option>
								<option value="AMOUNT">Amount</option>
							</optgroup>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div id="divDisWithdrawYear" style="display:none;">
						<label class="control-label" for="txtFldDisWithdrawYearDlg">Withdrawal Year</label>
						<select class="form-control" name="txtFldDisWithdrawYearDlg" id="txtFldDisWithdrawYearDlg">
							<option value="">--SELECT--</option>
							<%
								int year = Calendar.getInstance().get(Calendar.YEAR);
								for(int yr=year; yr<year+40; yr++){
									%> <option value="<%=yr%>"><%=yr%></option> <%
								}//end of for
							%>
							
						</select>
					</div>
					<div id="divYrsOfDisbrsmnt" style="display:none;">
						<label class="control-label" for="txtFldYrsOfDisbrsmntDlg">Years of Disbursement</label>
						<input type="text" maxlength="2" onchange="" name="txtFldYrsOfDisbrsmntDlg" 
						id="txtFldYrsOfDisbrsmntDlg" onmouseover="fipaTooltip(this);" 
						onkeypress="return fnValidateNum(event,this,2,0);"
						class="form-control numbers" style="width:80%;" />
					</div>
					<div id="divDisAnnualAmt" style="display:none;">
						<label class="control-label" for="txtFldDisAnnualAmtDlg">Annual Amount ($)</label>
						<div class="input-group input-group-sm"  style="width:80%;" > 
							<div class="input-group-addon"   >
								<span style="font-size:8pt;" class="glyphicon glyphicon-usd" ></span>  
							</div>
							<input type="text" onchange="" name="txtFldDisAnnualAmtDlg" 
							id="txtFldDisAnnualAmtDlg" onmouseover="fipaTooltip(this);" 
							class="form-control numbers" maxlength="15" 
							onkeypress="return fnValidateNum(event,this,15,2);" />
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="padding-left:35px;padding-top:20px;display:none;" id="divDisbrsmntByResTxt">
				<span id="spnDisbrsmntByResTxt" style="font-size:12pt;font-weight:bold;color:rgb(54, 162, 235);">
					
				</span>
			</div>
	  	</div>
	  </div>
	  <div class="modal-footer" style="padding: 10px;">  
        <div class="btnStyle" style="padding-bottom:15px;">
		  <button type="button" id="btnAddInvObjDetsId" class="btn BtnFIPASRCH StylishSRCH" onclick="fnAddInvObjToTblDets();" >
		    <span class="txt">Add</span>
		    <span class="round"><i class="fa fa-plus"></i></span>
		  </button>
		   <button type="button" id="btnUpdInvObjDetsId" class="btn BtnFIPASRCH StylishSRCH" 
		   onclick="fnUpdInvObjToTblDets();" style="display:none;" >
		    <span class="txt">Update</span>
		    <span class="round"><i class="fa fa-refresh"></i></span>
		  </button>
		  <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
			<span class="txt">Close</span>
			<span class="round"><i class="fa fa-times"></i></span>
		  </button>
		</div>
      </div>
	</div>
  </div>
</div>

<div class="modal fade"  id="divInvCondMsgId" style="display: none;z-index:1070" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
	<div class="modal-dialog alertModelContent modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-header">  
				<h4 class="modal-title" id="headInvTitleId"></h4>
			</div>
			<div class="modal-body" style="text-align: center;">
				<div id="confalertimg" style="display: inline;"></div>
				<div id="divInvMsgId"  style="display: inline-block;"></div> 
			</div>
			<div class="modal-footer">  
				<div class="btnStyle">
					<button type="button" onclick="fnDelInvDetsRow();"  class="btn BtnFIPASRCH StylishSRCH" >
						<span class="txt">Ok</span>
						<span class="round"><i class="fa fa-check"></i></span>
					</button>
					<button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					  <span class="txt">Cancel</span>
					  <span class="round"><i class="fa fa-times"></i></span>
					</button>
				</div>
			</div>
      </div>
    </div>
</div>


<div class="modal fade"  id="divInvObjCondMsgId" style="display: none;z-index:1070" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
	<div class="modal-dialog alertModelContent modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-header">  
				<h4 class="modal-title" id="headInvObjTitleId"></h4>
			</div>
			<div class="modal-body" style="text-align: center;">
				<div id="confalertimg" style="display: inline;"></div>
				<div id="divInvObjMsgId"  style="display: inline-block;"></div> 
			</div>
			<div class="modal-footer">  
				<div class="btnStyle">
					<button type="button" onclick="fnDelInvObjDetsRow();"  class="btn BtnFIPASRCH StylishSRCH" >
						<span class="txt">Ok</span>
						<span class="round"><i class="fa fa-check"></i></span>
					</button>
					<button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					  <span class="txt">Cancel</span>
					  <span class="round"><i class="fa fa-times"></i></span>
					</button>
				</div>
			</div>
      </div>
    </div>
</div>

<select  id="hdnFundMgrList" class="form-control" style="display:none;" >
	<c:forEach var="invfundmagrlist" items="${INV_FUNDMGR_LIST}">
	    <option value="${invfundmagrlist[0]}">${invfundmagrlist[0]} - ${invfundmagrlist[1]}</option> 
	</c:forEach>
</select>

<input type="hidden" id="hdnFldInvDetsRowIndex" />
<input type="hidden" id="hdnFldInvObjDetsRowIndex" />