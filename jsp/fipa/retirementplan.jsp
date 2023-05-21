 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 <%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
 
 
<div id="accordion" >
	<div id="retireplandiv">   
	<div class="panel-body">  
	<span class="panelHeaderTitle">Retirement Details</span>&nbsp; <a class="btn btn-default addinfoicon" id="mandatoryRetFlds" ></a>
	
   	  <div class="row"> 
      <div class=" col-md-12">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-4 col-sm-3 col-xs-3">
		
		
		<div class="btnStyle"> 
					    <button type="button" id="btnRPCFAnalysis" class="btn BtnFIPASRCH StylishSRCH floatbtn rp-cf-btn-float"  
					    style="position: fixed;top: 136px;">
					      <span class="txt">RP CF Analysis</span>
					      <span class="round"><i class="fa fa-bar-chart"></i></span>
					    </button> 
			    	</div>
		
		</div>
		 <div class="col-md-1 col-sm-3 col-xs-3 text-center">
           <label class="control-label">SELF</label>
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-center">
           <label class="control-label">SPOUSE</label>
         </div> 
         <div class="col-md-1 col-sm-3 col-xs-3 text-center">
           <label class="control-label">FAMILY</label>
         </div> 
       </div> 
      </div>    
      </div> 
   </div> 
	  
	     <div id="RET_APD2"> 
   <div id="retMandatoryFlds"> 
   		<div class="form-group">  
	<div class="row">
	 <div class="clearspace10"></div> 
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
		<div class="fipaFldLblText mandFldastrks" id="focusfmIntage">Intended
								retirement age<span class="mandFldastrks">*</span></div>
		</div>
		 <div class="col-md-2 col-sm-3 col-xs-3">
		 <div class=" input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSelfAge"
							id="retSelfAge" class="form-control numbers clsfipaClient applyEvntYrs" onmouseover="fipaTooltip(this);"
							onchange="calcRtrmntPln(this);">
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
          
         </div> 
        <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSpsAge"
							id="retSpsAge" class="form-control numbers clsfipaSpouse applyEvntYrs" onmouseover="fipaTooltip(this);"
							onchange="calcRtrmntPln(this);">
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
          <!--  &nbsp;  -->
           <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text"  name="" id="" class="form-control numbers clsfipaReadonly  applyEvntYrs"   >
							<!--  <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span> -->
							</div>
       </div> 
      </div>  
      </div>
       
      <div class="form-group">  
      <div class="row">
		<div class="col-md-4 col-sm-4 col-xs-4 text-right">
		<div class="fipaFldLblText mandFldastrks"  id="focusfmRdAge">Retirement
								age based on<span class="mandFldastrks">*</span></div>
		</div>
		 <div class="col-md-4 col-sm-6 col-xs-6"> 
		 <select class="form-control fld-resp"
							id="retAgeBasedon" style="margin-left: 0px;width: 300px;" onmouseover="fipaTooltip(this);"
							name="retAgeBasedon" onchange="calcRtrmntPln(this);">
								<option value="">--SELECT--</option>
								<option value="Self">Self</option>
								<option value="Spouse">Spouse</option>
						</select> 
         </div> 
         
         <div class="col-md-2 col-sm-2 col-xs-2">
          <!--  &nbsp;  -->
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text"  name="" id="" class="form-control numbers clsfipaReadonly applyEvntYrs" >
							 <!-- <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span> -->
							</div>
       </div> 
      </div>   
      		</div>
      		
      		<div class="form-group">  
      <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
			<div class="fipaFldLblText "  id="focusfmyrstord" style="text-align: right;font-weight: bold;">Yr to retirement
			 </div> 
		</div>
		 <div class="col-md-4 col-sm-6 col-xs-6">
		 <div class="input-group input-group-sm fld-resp"  >  
					            <input type="text" readonly="true" name="retYrstoret"  id="retYrstoret" onmouseover="fipaTooltip(this);" style="margin-left: 0px;width: 260px;" class="form-control numbers readOlyCursor applyEvntYrs" >
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
          
         </div> 
        
         <div class="col-md-2 col-sm-2 col-xs-2">
           
           <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text"  name="" id="" class="form-control numbers clsfipaReadonly applyEvntYrs">
							 <!-- <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span> -->
							</div>
       </div> 
      </div>
      </div> 
      <div class="form-group">  
      <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks"  id="focusfmcoyrs"  style="text-align: right">Coordinated retirement age
				<span class="mandFldastrks">*</span></div>
						 </div>
		 <div class="col-md-2 col-sm-3 col-xs-3">
		 <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSelfCoordinateage" onmouseover="fipaTooltip(this);"
							id="retSelfCoordinateage" class="form-control numbers clsfipaClient applyEvntYrs"
							 />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
         <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSpsCoordinateage" onmouseover="fipaTooltip(this);"
							id="retSpsCoordinateage" class="form-control numbers clsfipaSpouse applyEvntYrs"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
          <div class="col-md-2 col-sm-2 col-xs-2">
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text"  name="" id="" class="form-control numbers clsfipaReadonly applyEvntYrs">
							 <!-- <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span> -->
							</div>
       </div> 
      </div> 
      </div>
      <div class="form-group">  
       <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks" id="focusfmprojlife"   style="text-align: right">Projected
								life expectancy (Age)<span class="mandFldastrks">*</span></div>
		 </div>
		 <div class="col-md-2 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
					       <input type="text" name="retSelfProjage" onmouseover="fipaTooltip(this);"
							id="retSelfProjage" class="form-control numbers clsfipaClient applyEvntYrs" 
							onchange="calcRtrmntPln(this);" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
         <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsProjage" onmouseover="fipaTooltip(this);"
							id="retSpsProjage" class="form-control numbers clsfipaSpouse applyEvntYrs" 
							onchange="calcRtrmntPln(this);" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
          <div class="col-md-2 col-sm-2 col-xs-2">
        
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text"  name="" id="" class="form-control numbers clsfipaReadonly applyEvntYrs">
							</div>
       </div> 
      </div> 
      		</div>
      		
      	<div class="form-group">  
      		<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks" id="focusfmprojlvyrs"  style="text-align: right">
								Projected Living years in retirement<span class="mandFldastrks">*</span></div>
					</div>
		 
		 <div class="col-md-2 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSelfLivyrs" id="retSelfLivyrs" onmouseover="fipaTooltip(this);"
							class="form-control numbers applyEvntYrs"  >
							 <span class="input-group-addon" >
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
        <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsLivyrs" onmouseover="fipaTooltip(this);"
							id="retSpsLivyrs" class="form-control numbers clsfipaSpouse applyEvntYrs"  >
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
           <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retFamLivyrs" id="retFamLivyrs" onmouseover="fipaTooltip(this);"
							class="form-control numbers clsfipaFamily applyEvntYrs"  >
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
       </div> 
       </div>
       </div>
			
			<div class="form-group">  
			<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText"  id="focusfmroi"  style="text-align: right">
								<span class="mandFldastrks">Projected ROI after retirement*
								</span><a class="btn btn-default addinfoicon" id="popretSelfProjroi" ></a></div>
						
					</div>
		 
		<div class="col-md-2 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSelfProjroi" onmouseover="fipaTooltip(this);"
							id="retSelfProjroi" class="form-control numbers clsfipaClient applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
         </div> 
       <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsProjroi" onmouseover="fipaTooltip(this);"
							id="retSpsProjroi" class="form-control numbers clsfipaSpouse applyEvntpCent"
						 />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
         </div> 
        <div class="col-md-2 col-sm-2 col-xs-2">
           <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retFamProjroi" onmouseover="fipaTooltip(this);"
							id="retFamProjroi" class="form-control numbers clsfipaFamily applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
       </div> 
      </div>
      </div>
      
      
      
        </div> 
	  </div>
	  
		
	 
	  <div class="row">
	  <hr class="border"/>
	  </div> 
	   
	    <span class="headerlabel">  
				Retirement Needs <sup><span class="panelHeaderSubTitle">Living Needs during retirement(today's cost)</span></sup>
	</span>
	 	
	<div class="form-group">  
			<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				
						
		 </div>
		 
		<div class="col-md-2 col-sm-3 col-xs-3 text-center">
		<div class="input-group input-group-sm fld-resp-sm text-center"> 
			 <label class="control-label">SELF</label>			
		 </div>
        </div> 
       <div class="col-md-2 col-sm-3 col-xs-3 text-center">
       <div class="input-group input-group-sm fld-resp-sm text-center"> 
          <label class="control-label">SPOUSE</label>
         </div> 
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2 text-center">
         <div class="input-group input-group-sm fld-resp-sm text-center"> 
          <label class="control-label">FAMILY</label>
       </div> 
       </div>
      </div>
      
      <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div  id=""  ><label class="control-label">Annual Amount Needed($)</label></div>
		 </div>
		 
		<div class="col-md-2 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retSelfAnnlexpdamt" onmouseover="fipaTooltip(this);"
							id="retSelfAnnlexpdamt" 
							class="form-control numbers clsfipaClient applyEvntUsd"  />
							
					       </div>
        </div> 
       <div class="col-md-2 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retSpsAnnlexpdamt" onmouseover="fipaTooltip(this);"
							id="retSpsAnnlexpdamt" class="form-control numbers clsfipaSpouse applyEvntUsd" />
							</div>
         </div> 
        <div class="col-md-2 col-sm-2 col-xs-2">
           <div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retFamAnnlexpdamt" onmouseover="fipaTooltip(this);"
							id="retFamAnnlexpdamt" class="form-control numbers clsfipaFamily applyEvntUsd" />
							</div>
       </div> 
      </div>
      </div>
	  
	  <div class="row">
	  <hr class="border"/>
	  </div> 
	  
	  
	  <div class="panel-body">
	  
		   <div class="btnStyle" style="float:right;margin-left: 10px;">
								 <button type="button" id="btnColpAllRtrmnt" style="border-radius: 5px; background-color: #ddd; display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="1" aria-describedby="qtip-1">
						      			<span class="txt" style="color: #243665;">Collapse All</span>
						      			<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-minus"></i></span>
						    	</button>   
		   </div>
		  <div class="btnStyle" style="float:right;">
								<button type="button" id="btnExpAllRtrmnt" style="border-radius: 5px; background-color: #ddd; display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="0" aria-describedby="qtip-0">
									<span class="txt" style="color: #243665;">Expand All</span>
									<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-plus"></i></span>
								</button>   
		 </div>
		 <div class="container" style="margin-top: -20px;">
			 <ul class="breadcrumb wizard">
				<li class="completed"><a href="javascript:void(0);">Financial Info</a></li>
				<li class="completed"><a href="javascript:void(0);">Retirement Planning</a></li>
				<li class=""><a href="javascript:void(0);"id="test2" style="width: 255px;display:none"></a></li>
			</ul>
  		 </div>
			 <div class="clearspace40"></div>
			 
		<div class="panel-group" role="tablist" aria-multiselectable="true">
			 <div class="panel panel-default">
		            <div class="panel-headings" data-toggle="collapse" data-parent="#accordion" href="#collapseOthrPayRtrmt" aria-expanded="true" aria-controls="collapseOthrPayRtrmt" role="tab" id="headingOthrPayRtmnt" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOthrPayRtrmt" aria-expanded="true" aria-controls="collapseOthrPayRtrmt">
								   Other payment to be made during retirement
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
					<div id="collapseOthrPayRtrmt" class="panel-collapses collapse" role="tabpanel" aria-labelledby="headingOthrPayRtmnt">
						<div class="panel-body">
							
	  <div class="row">
	  		<div class="col-md-7"> </div>
				<div class="col-md-5">
					<div class="table-responsive">
					
					<div class="pull-right" role="group" style="display: none;">
		&nbsp;&nbsp; 
			<button type="button" class="btn btn-info"  id="" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
		</div>
		<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
		&nbsp;&nbsp;
						<button type="button"  class="btn btn-info delRow-icon1"  id="DOthRet"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
  				 </div>
  				 <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="EOthRet"><i class="fa fa-edit"></i><span>&nbsp;Edit</span></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="AOthRet"><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
  				 </div>
  				 
						
					</div>	 
				</div>	  
	  </div>
	  
	  <div class="row">
	  		<div class="col-md-12">
				<table id="OthRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th style="width:20px"><div style="width:20px">#</div></th>
						<th style="width:29px"><div class="checkbox checkbox-primary text-center" style="width:29px"><input type="checkbox" id="SelOthRetPlgtbl" name="SelOthRetPlgtbl" onclick="SelAllOthRetPlgtbl(this)"><label for="SelOthRetPlgtbl" >&nbsp;</label></div></th>
						<th style="width:225px"><div style="width:225px">Description</div></th>
						<!-- <th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th> -->
						<th style="width:243px"><div style="width:243px">Annual Expenditure</div></th>
						<!-- <th><div style="width:50px">Escalation<br/><small>(%)</small></div></th> -->
						<!-- <th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th> -->
						<!-- <th><div style="width:50px">Age Payment Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Payment Ends<br/><small>(yrs)</small></div></th> -->
						<th style="width:225px"><div style="width:225px">Age at Payment</div></th>
						<th style="width:225px"><div style="width:225px">Remarks</div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  </table>
			  </div>
	  
	  
	  </div> 
							
							
						</div>
					</div>
			</div>
			
			
			 <div class="panel panel-default">
		            <div class="panel-headings" data-toggle="collapse" data-parent="#accordion" href="#collapseIncAsstRtrmt" aria-expanded="true" aria-controls="collapseIncAsstRtrmt" role="tab" id="headingIncAsstRtmnt" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseIncAsstRtrmt" aria-expanded="true" aria-controls="collapseIncAsstRtrmt">
								  Income and assets available during retirement
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapseIncAsstRtrmt" class="panel-collapses collapse" role="tabpanel" aria-labelledby="headingIncAsstRtmnt">
					<div class="panel-body">
					   <!--  <div class="row">
					  		<hr class="border"/>
					  	</div> --> 
					    <div class="row">
					 		<div class="col-md-9"> 
								&nbsp; <a class="btn btn-default addinfoicon" id="fetchfromotherscreen" ></a>
					 			 
							</div> 
							<div class="col-md-3">
								<div class="table-responsive">
								
								<div class="pull-right" role="group" style="display: none;">
		&nbsp;&nbsp; 
			<button type="button" class="btn btn-info"  id="" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
		</div>
		<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
		&nbsp;&nbsp;
						<button type="button"  class="btn btn-info delRow-icon1"  id="DIncAssRet"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
  				 </div>
  				 <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="EIncAssRet"><i class="fa fa-edit"></i><span>&nbsp;Edit</span></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="AIncAssRet"><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
  				 </div>
  				 
									 
								</div> 
							</div>
						</div>
						<div class="row">
						<div class="col-md-12">
							<table id="IncAssRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
								 <thead> 
									<tr>
									<th style="width:20px"><div style="width:20px">#</div></th>
									<th style="width:29px"><div  class="checkbox checkbox-primary text-center" style="width:29px"><input type="checkbox" id="SelIncAssRetPlgtbl" name="SelIncAssRetPlgtbl" onclick="SelAllIncAssRetPlgtbl(this)"><label for="SelIncAssRetPlgtbl">&nbsp;</label></div></th>
									<th style="width:249px"><div style="width:249px">Description</div></th>
									<th style="width:221px"><div style="width:221px">Classification</div></th>
									<th style="width:223px"><div style="width:223px">Annual Income Amount</div></th>
									<th style="width:225px"><div style="width:225px">Age at Payment</div></th>
									<!-- <th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th> -->
									<!-- <th><div style="width:100px">Amount of Income<br/><small>($)</small></div></th>
									<th><div style="width:50px">Escalation Rate<br/><small>(%)</small></div></th>
									<th><div style="width:50px">ROI<br/><small>(%)</small></div></th>
									<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
									<th><div style="width:50px">Age Income Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
									<th><div style="width:50px">Age Income Ends<br/><small>(yrs)</small></div></th> -->
									</tr>
								</thead>
								<tbody></tbody>
						   </table>
					  	</div>
						</div>
					</div>
		 </div>
			</div>
			
		</div>
	</div>

	  
	<!--   <div class="row">
	  		 <div class="col-md-7"><span class="panelHeaderTitle">Other payment to be made during retirement</span> </div>
			<div class="col-md-5">
				<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group"> 
							<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DOthRet" disabled="true"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
							<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AOthRet"></button>
							<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EOthRet" disabled="true"></button>
	  				 </div>
				</div>	 
			</div>	  
	  </div>
	  
	  <div class="row">
	  		<div class="col-md-12">
				<table id="OthRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th>#</th>
						<th><div class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelOthRetPlgtbl" name="SelOthRetPlgtbl" onclick="SelAllOthRetPlgtbl(this)"><label for="SelOthRetPlgtbl" >&nbsp;</label></div></th>
						<th><div style="width:150px">Types of payment<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Annual<br/>Expenditure<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Payment Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Payment Ends<br/><small>(yrs)</small></div></th>
						<th><div style="width:150px">Remarks</div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  </table>
			  </div>
	  
	  
	  </div> -->
	    
	 
			
		<div class="row" style="display:none">
	  		<hr class="border"/>
	  	</div> 
	  	
	  	<div class="row" style="display:none">
	  		<div class="col-md-7"><span class="panelHeaderTitle">Income to be received during retirement</span> </div>
			<div class="col-md-5">
				<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group"> 
							<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncRet" disabled="true"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
							<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AIncRet"></button>
							<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EIncRet" disabled="true"></button>
	  				</div>				 
				</div> 
			</div>
	  	</div>
		
		<div class="row" style="display:none">
			<div class="col-md-12">
				<table id="IncRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%" >
					 <thead> 
						<tr>
						<th>#</th><!--changes done 19/06/2019 -->
						<!-- <th>Select</th> -->
						<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelIncRetPlgtbl" name="SelIncRetPlgtbl" onclick="SelAllIncRetPlgtbl(this)"><label for="SelIncRetPlgtbl">&nbsp;</label></div></th>
						<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:140px">Description</div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Amount of Income<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation Rate<br/><small>(%)</small></div></th>
						<th><div style="width:50px">ROI<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Ends<br/><small>(yrs)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  	</table>
			  </div>		
		</div>
		
		<!-- <div class="row">
	  		<hr class="border"/>
	  	</div> 
			  <div class="row">
		 		<div class="col-md-9"> 
					<span class="panelHeaderTitle">Income and assets available for retirement
					</span>&nbsp; <a class="btn btn-default addinfoicon" id="fetchfromotherscreen" ></a>
		 			 
				</div> 
				<div class="col-md-3">
					<div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group"> 
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncAssRet" disabled="true"></button>
				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AIncAssRet"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EIncAssRet" disabled="true"></button>
  				 </div>
				 
				</div> 
				</div>
				</div>
				<div class="row">
				<div class="col-md-12">
				<table id="IncAssRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th>#</th>
						<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelIncAssRetPlgtbl" name="SelIncAssRetPlgtbl" onclick="SelAllIncAssRetPlgtbl(this)"><label for="SelIncAssRetPlgtbl">&nbsp;</label></div></th>
						<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:140px">Description</div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Amount of Income<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation Rate<br/><small>(%)</small></div></th>
						<th><div style="width:50px">ROI<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Ends<br/><small>(yrs)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  </table>
			  </div>
			  	  
			  
			 
		</div> -->
		
		<!-- </fieldset> -->
  </div>
</div>
      </div>
      
   
	
 
	

	
 
<div class="form-group hidden">  
			<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText"   style="text-align: right;font-weight: bold;"> 
				Selected Retirement Sum (SdRS)
				<a class="btn btn-default addinfoicon" id="popretSdRs" ></a>
				</div> 
					</div>
		 
		 <div class="col-md-2 col-sm-3 col-xs-3">
		 
		 <select name="retSelfSDRSAmt" id="retSelfSDRSAmt" class="form-control fld-resp-mm">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select> 
             

         </div> 
       <div class="col-md-2 col-sm-3 col-xs-3">
       <select name="retSpsSDRSAmt" id="retSpsSDRSAmt" class="form-control fld-resp-mm clsfipaSpouse">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select>
             
         
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         &nbsp;
         <select name="retFamSDRSAmt" id="retFamSDRSAmt" class="form-control fld-resp-mm clsfipaFamily hidden">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select>
         
       </div> 
      </div>
      </div>
      
<!-- This table is to show annual amount -->
<div class="modal fade" id="divInvDisbrsmntId" style="display: none;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document" style="width:900px;">
    <div class="modal-content">
	  <div class="modal-header" style="padding: 10px;">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">
        	Disbursement after retirement details
        </h4>
      </div>
	  <div class="modal-body" style="padding: 5px; text-align: center;height: 400px; overflow-y:auto;">
	  	<div style="width:95%;margin-top:10px;margin-bottom:10px;font-size: 14pt;">
	  		During retirement, client would have accumulated 
	  		<span id="spnPVForRetFundId" style="font-weight:bold;">$324,809.50</span> 
	  		using <span id="spnPVForRetDescId" style="font-weight:bold;">Avallis (PAM - API 3)</span> 
	  		account and amount can be disbursed for 
	  		<span id="spnPVForRetPeriodId" style="font-weight:bold;">22 years</span> 
	  		with an annual amount of <span id="spnPVForRetAnnAmtId" style="font-weight:bold;">$21,415.36.</span>
	  	</div>
	  	<table class="dataTable table-bordered table-striped display hover" style="width:95%;">
	  		<thead>
	  			<tr>
	  				<th style="width:10%;">Year</th>
	  				<th style="width:22.5%;">Principal ($)</th>
	  				<th style="width:22.5%;">Annual Amount ($)</th>
	  				<th style="width:22.5%;">Interest ($)</th>
	  				<th style="width:22.5%;">Future Value ($)</th>
	  			</tr>
	  		</thead>
	  		<tbody id="tBodyDisByYearId"></tbody>
	  	</table>
	  </div>
	  <div class="modal-footer" style="padding: 10px;">  
        <div class="btnStyle" style="padding-bottom:15px;">
		  <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
			<span class="txt">Close</span>
			<span class="round"><i class="fa fa-times"></i></span>
		  </button>
		</div>
      </div>
	</div>
  </div>
</div>