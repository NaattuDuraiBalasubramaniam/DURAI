<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div id="accordion" class="panel-group">
	<div id="srsdiv" class="accord-content">
		
		<table class="display nowrap table table-borderless" style="margin-bottom: 0px;">
			<div class="middle-line"></div>
						<tr valign="middle">
							<td colspan="2">
								<table class="dataTable table-bordered display" width="100%" >
								<tr class="even">
										<td class="fipaFldLblText text-left" colspan="2"><b>SRS Current Balance&nbsp;</b></td>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle" width="12%" style=""></td>
										<td class="fipaFldLblText text-left" colspan="2"></td>
									</tr>
								<tr class="even">
										<td class="fipaFldLblText text-right" width="12%">Self&nbsp;</td>
										<td valign="middle" width="12%">
										<div class="fld-resp-md input-group input-group-sm">
												<span class="input-group-addon">
										               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
										       </span> 
					               					   <input type="text" name="txtFldSrsSlfOrdinary" id="txtFldSrsSlfOrdinary" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  maxlength="126" style="text-align: right;" data-hasqtip="204">
												</div>
										</td>
										<td class="fipaFldLblText text-right" width="12%">Spouse&nbsp;</td>
										<td valign="middle" width="12%" style="">
										<div class="fld-resp-md input-group input-group-sm">
												<span class="input-group-addon">
										               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
										       </span>
										       		 <input type="text" name="txtFldSrsSpsOrdinary" id="txtFldSrsSpsOrdinary" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  maxlength="126" style="text-align: right;" data-hasqtip="204">
												</div>
										</td>
										
									</tr>
									
								</table>
							</td>
						</tr>
					</table> 
		<table class="dataTable table-bordered display" width="100%" >
								<tr class="even">
										<td class="fipaFldLblText text-right" style="width: 12%;"><b>SRS Withdrawal Plan&nbsp;</b></td>
										<td valign="middle"></td>
										<!-- <td valign="middle"></td> -->
									</tr>
								
									<tr valign="middle" class="fipaFldLblText">
									 <td class="fipaFldLblText text-right" colspan="4">
										 <table class="dataTable table-bordered display" width="100%">
													<tbody>
														
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2" style="width: 30%;">Withdrawal Start Age&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																<input type="text" name="txtFldSrsWithdrawStartAge" id="txtFldSrsWithdrawStartAge" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  maxlength="3" style="text-align: right;" data-hasqtip="204">
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldSrsWithdrawStartAge" onmouseover="fipaTooltip(this);" id="txtFldSrsWithdrawStartAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Withdrawal Period&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span> 
										               					   <input type="text" name="txtFldSrsWithdrawPeriod" id="txtFldSrsWithdrawPeriod" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd" maxlength="20" style="text-align: right;" data-hasqtip="204">
																</div> -->
																
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldSrsWithdrawPeriod" onmouseover="fipaTooltip(this);" id="txtFldSrsWithdrawPeriod" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
																
																
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Withdrawal Amount&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldSrsWithdrawAmt" id="txtFldSrsWithdrawAmt" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" style="text-align: right;" maxlength="126" data-hasqtip="194">
																 </div>
															</td>
														</tr>
												   </tbody>
												</table>
									 </td>
									   <td colspan="2" style="border: 1px solid #34495E;">
									   <div>
									   <span class="panelHeaderTitle">Note:</span>
									   <ul>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;The withdrawal age is defaulted at Age 62, which is the statutory retirement age.</li>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;Withdrawal period is defaulted as 10 years <!-- to get the maximized tax savings. --></li>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;SRS Account is assumed to be closed after the withdrawal period</li>
										  
										</ul>
									   </div>
									   </td>
										<td></td>
									</tr>
								</table>
		<div class="panel-body" id="INVSUM_NORECFOUND" >   
  <span class="panelHeaderTitle">SRS</span> 
		<small>  (Investment Summary)  </small>
		<div class="clearspace10"></div>
		<span class="panelHeaderSubTitle">&nbsp;</span> 
		<div class="table-responsive">
		<div class="clearspace20"></div>
		<div class="col_md_12 text-center">
		<span class="panelHeaderSubTitle" style="color:maroon">---  NO RECORD FOUND IN INVESTMENT SECTION TO GENERATE INVESTMENT SUMMARY ---		</span> 
		</div>
		
		</div>
	</div>
	
		
		<div class="panel-body" id="divforSRSSummary" style="display:none">   
  		<span class="panelHeaderTitle"></span> 
		<span class="panelHeaderTitle"> Investments - Summary  </span>
		<div class="clearspace10"></div>
		<span class="panelHeaderSubTitle">&nbsp;</span> 
		<div class="table-responsive">
		
		<div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="..." id="invsrsbtngrp">
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-primary" href="#tabselfinvSrs" data-toggle="tab"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
	                <div class="hidden-xs">Self</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-default" href="#tabspouseinvSrs" data-toggle="tab"><i class="fa fa-user-plus" aria-hidden="true"></i>
	                <div class="hidden-xs">Spouse</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button"class="btn btn-default" href="#tabfamilyinvSrs" data-toggle="tab"><i class="fa fa-users" aria-hidden="true"></i>
	                <div class="hidden-xs">Joint/Family</div>
	            </button>
	        </div>
    	</div>
    	
    	<div class="well">
	      <div class="tab-content">
	        <div class="tab-pane fade in active" id="tabselfinvSrs" style="min-height:300px;">
	          <div id="genSRSSummarySelf"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabspouseinvSrs" style="min-height:300px;">
	          <div id="genSRSSummarySpouse"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabfamilyinvSrs" style="min-height:300px;">
	          <div id="genSRSSummaryFamily"></div> 
	        </div>
	      </div>
	    </div>
		
		
		
		
		</div>
	</div>
	
	
	
		</div>
		
		<div class="" >    


<div class="middle-line"></div>

<div class="clearspace20"></div>	
			
			
		<div class="table-responsive"> 
		
			<div class="col-md-3 pull-left">
			
					<img src="images/menuicons/srscash.png"  class="img-rounded" width="50" height="50"/> 
					<span class="panelHeaderTitle">SRS</span> 
			
			</div>
			
			<div class="col-md-4 pull-left">
				&nbsp;
			</div>
			
			<div class="col-md-5 pull-right">
			
			<div class="pull-right" role="group" style="display: none;">
		&nbsp;&nbsp; 
			<button type="button" class="btn btn-info"  id="" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
		</div>
		<div class="pull-right" role="group" style="display: block;">
		&nbsp;&nbsp; 
			
			<button type="button" class="btn btn-info" id="btnsrsTablePrint" style="margin-left: 0%;" >
			 						<span>&nbsp;SRS Report&nbsp;</span><i class=""></i></button> 
			
		</div>
		<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
		&nbsp;&nbsp;
						<button type="button"  class="btn btn-info delRow-icon1"  id="SrsDRow"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
  				 </div>
  				 <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="SrsERow"><i class="fa fa-edit"></i><span>&nbsp;Edit</span></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="SrsARow"><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
  				 </div>
			
	  				
			</div>
					
					
					</div>  
			<div id="SRS_APD" > 
   <div id="srsMandatoryFlds"> 		    
	  
					<!-- <table id="srsTable" class="dataTable table-bordered table-striped display hover" style="width: 100%;">
					<thead>
						<tr> 
							<th rowspan="2">#</th>  
							<th rowspan="2"><div  class="checkbox checkbox-primary text-center">
							<input type="checkbox" id="SelSrsDets" name="SelSrsDets" onclick="SelAllSRS(this)"><label for="SelSrsDets">&nbsp;</label></div></th>
							<th rowspan="2"><div style="width: 140px;">Classification</div></th>
							<th rowspan="2"><div style="width: 172px;">Description</div></th>
							<th rowspan="2"><div style="width: 80px;">Frequency</div></th>
							<th rowspan="2"><div style="width: 150px;">Amount</div></th>
							<th rowspan="2"><div style="width: 80px;">Period From</div></th>
							<th rowspan="2"><div style="width: 80px;">Period To</div></th>
							<th colspan="4"><div class="text-center">Withdrawal Details</div></th>  
						</tr>
						 <tr>
							<th><div style="width: 60px;">Start Age</div></th>
							<th><div style="width: 60px;">Payout Period</div></th>
			</tr>
					</thead>
					<tbody></tbody> 
				</table> --> 
				
				<table id="srsTable" class="dataTable table-bordered table-striped display hover" style="width: 100%;">
					<thead>
						<tr> 
										<th>#</th> 
										<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelSrsDets" name="SelSrsDets" onclick="SelAllSRS(this)"><label for="SelSrsDets">&nbsp;</label></div></th>
										<th><div style="width:300px;">Description</div></th> 
										<th><div style="width:250px;">Type Of Transaction</div></th> 
										<th><div style="width:250px;">Transaction Period</div></th>
										<th><div style="width:250px;">Transaction Amount</div></th>
						</tr>
					</thead>
					<tbody></tbody> 
				</table>
		
				</div>
				</div>
				</div>
		
		</div>
		 <!-- SRS Modal  -->
<div class="modal fade" id="Srs_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1300" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="srsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
         
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
		<div class="col-md-6"> 
		 <div class="form-group">
      <fieldset  id="srsdetails"><legend class="customFIPAStyle">SRS Details</legend>
       
         <div class="form-group">
			<div class="row" >
				<div class="col-md-6 col-sm-6 col-xs-6 "> 
		                <label for="txtFldDlgSRSDesc" class="control-label mandFldastrks pull-right text-right">
					  Description<span class="mandFldastrks">*</span></label>
		             </div> 
		           <div class="col-md-6 col-sm-6 col-xs-6"> 
					 <input  type="text" id="txtFldDlgSRSDesc" name="txtFldDlgSRSDesc"  
					 class="form-control fld-resp-md"  maxlength="150" />
		            </div> 
		           </div>
      </div>
      
	<div class="form-group" style="display:none">
	   <div class="row" >
	     <div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="selDlgSRSClassify" class="control-label mandFldastrks pull-right text-right">
			  Type of Transaction<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-5 col-sm-5 col-xs-5"> 
			 <select class="form-control" id="selDlgSRSClassify" name="selDlgSRSClassify"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty SRS_CLASSIFICATION_LIST}">
						<c:forEach var="srsclassify" items="${SRS_CLASSIFICATION_LIST}">
							<option value="${srsclassify}">${srsclassify}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
    <div class="form-group">
	   <div class="row" >
	     <div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="selDlgSRSTypeTrans" class="control-label mandFldastrks pull-right text-right">
			  Type of Transaction<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-5 col-sm-5 col-xs-5"> 
			 <select class="form-control" id="selDlgSRSTypeTrans" name="selDlgSRSTypeTrans"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty SRS_TRANSACTION_TYPE_LIST}">
						<c:forEach var="srstranstype" items="${SRS_TRANSACTION_TYPE_LIST}">
							<option value="${srstranstype}">${srstranstype}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
       
      
    
       
       
      
      </fieldset>
      </div>
      </div>
      
      <!-- Second div -->
      <div class="col-md-6"> 
       <div class="form-group">
      <fieldset  id="classfydetails"><legend class="customFIPAStyle">
      	<span id="classificationSpan">Annual Addition</span></legend>
       
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgSRSAmount" class="control-label pull-right text-right">
             Annual Amount </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
				<div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon"> 
               <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
               <input type="text" id="txtFldDlgSRSAmount" name="txtFldDlgSRSAmount"
                class="form-control numbers applyEvntUsd26"  maxlength="126">  
               </div>
            </div> 
            </div>
      </div>
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
                <label for="txtFldDlgSRSFreq" class="control-label mandFldastrks pull-right text-right">
			  Frequency of Transaction<span class="mandFldastrks">*</span></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
			 <select class="form-control fld-resp-sm" id="txtFldDlgSRSFreq" name="txtFldDlgSRSFreq">
					<option value="">--SELECT--</option>
					<c:if test="${not empty SRS_FREQUENCY_LIST}">
						<c:forEach var="frequency" items="${SRS_FREQUENCY_LIST}">
							<option value="${frequency}">${frequency}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div>
      
      <div id="srsAnnualAddition">
      <!-- <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSRSPerFrom">Period From
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="SRSPerFrmpicker">
							<input type="text"  id="txtFldDlgSRSPerFrom" name="txtFldDlgSRSPerFrom"  class="form-control"  maxlength="10" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div> 
				</div> 
            </div> 
            </div>
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgSRSPerTo">Period To
             <span class="mandFldastrks">*</span>
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="SRSPerTopicker">
							<input type="text" id="txtFldDlgSRSPerTo" name="txtFldDlgSRSPerTo"
							  class="form-control" 	 maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
             </div> 
				</div> 
            </div> 
            </div>  -->
            <div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="txtFldDlgSRSPerFrom">Age at Payment Period
			</label>	
	</div> 
        <div class="col-md-1">
 			<div class="input-group input-group-sm fld-resp-sm " id=""> 
				 <input type="text" name="txtFldDlgSRSPerFrom" id="txtFldDlgSRSPerFrom" class="form-control" maxlength="10"> 
				 <input type="hidden" name="txtFldDlgSRSPerFromDate" id="txtFldDlgSRSPerFromDate" class="form-control" maxlength="10"> 
					<div class="input-group-addon"> 
                  <span class="glyphicon addYearSign" id="symbolYrs"></span> <!-- <span class="glyphicon glyphicon-calendar"></span> -->
                   </div>
				</div>
					
 		</div>
 		<div class="col-md-2 ">
			<label class="control-label pull-right text-right" for="txtFldDlgSRSPerTo">to</label>	
		</div> 
		<div class="col-md-1"> 
				<div class="input-group input-group-sm fld-resp-sm " id=""> 
				<input type="text" name="txtFldDlgSRSPerTo" id="txtFldDlgSRSPerTo" class="form-control" maxlength="10">  
				<input type="hidden" name="txtFldDlgSRSPerToDate" id="txtFldDlgSRSPerToDate" class="form-control" maxlength="10"> 
					<div class="input-group-addon"> 
               <span class="glyphicon addYearSign" id="symbolYrs"></span><!-- <span class="glyphicon glyphicon-calendar"></span> -->
                </div>
					</div>
		 </div>
		</div>
      </div>
           </div> 
           
           
           <div id="srsAnnualWithdrawals" class="hidden">
      <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgSRSAge">Age</label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-sm">
				 <input type="text" name="txtFldDlgSRSAge" 	id="txtFldDlgSRSAge" 
				                      class="form-control numbers applyEvntYrs"  />
								<div class="input-group-addon">
									<span id="symbolYrs"></span>
								</div>
							</div>
				</div> 
            </div> 
            </div>
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="control-label pull-right text-right" for="txtFldDlgSRSPayoutPerd">
             		Payout Period</label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-sm">
				 <input type="text" name="txtFldDlgSRSPayoutPerd" id="txtFldDlgSRSPayoutPerd" 
				         class="form-control numbers applyEvntYrs"  />
								<div class="input-group-addon">
									<span id="symbolYrs"></span>
								</div>
							</div>
				</div> 
            </div> 
            </div>
           </div> 
            

    
            <div class="form-group">
	          	<input type="hidden" name="txtFldDlgSRSCrtdBy" 	 id="txtFldDlgSRSCrtdBy" /> 
				<input type="hidden" name="txtFldDlgSRSCrtdDate" id="txtFldDlgSRSCrtdDate" />
				<input type="hidden" name="txtFldDlgSRSId" 		 id="txtFldDlgSRSId"/> 
				<input type="hidden" name="txtFldDlgSRSRefId" 	 id="txtFldDlgSRSRefId"/>
				<input type="hidden" name="txtFldDlgSRSMode" 	 id="txtFldDlgSRSMode"/>  
            </div>  
            </fieldset>
            </div>
            
       
      </div>
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					     <!-- <button type="button" id="srsCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
					    </div>
		   
      </div>
    </div>
  </div>
</div> 