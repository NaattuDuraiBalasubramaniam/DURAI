<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  


<div id="clientsection">
    <div class="panel-body"> 
		<span class="panelHeaderTitle"> Client Particulars	</span>
		
		<span class="fipaFldLblText">
   	<img src="images/menuicons/canvas.png" width="15" class="info"/>
   	<small>&nbsp;(Fields denoted in <span class="mandFldastrks">*</span>  requires documentation for successful updates)</small></span> 
  <span class="panelHeaderTitle">  <input type="text" name="updlstdate" id="updlstdate" class="txtlastupdated" readonly="true"/ style="outline: none;"> </span>
  
		<span class="pull-right" style="margin-right: 10px"> 
			<button type="button" class="btn btn-info "  id="btnClientParticularsPrint" style="display:none"><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
	 <button type="button" class="btn btn-info" id="btnSNASelfPrint" style="margin-left: 0%;" >
			 						<span>&nbsp;SNA Self Report&nbsp;</span><i class=""></i></button>
		</span>
	</div>
	
   	
  
  <div class="pull-right">
  <span class="">
		<a class="btn btn-default addfpmsclient hidden" id="FpmsClntARow"  data-hasqtip="14" aria-describedby="qtip-14"><span>Verify Client Info FPMS vs FIPA</span></a> 
</span>
  </div>
  
      <div class="panel-body" >    
      <div class="row vertical-divider">  
	<div class="col-md-6">

   <fieldset class="fieldsetClsborder" id="clientinformation">
    	<!-- <legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientInfo.png" height="30" width="30"></span> Client Information</legend> -->
    <div class="panel-heading" style="background-color: #1D655C;">
	  <span class="custompanelHeaderTitle"><small> Client Information</small></span>  
    </div>
    <div class="clearspace20"></div>
	<div class="form-group">
	<div class="row"><!--changes done 19/06/2019 -->
	<div class="col-md-6 col-sm-6 col-xs-6">
            <label for="dfSelfName" class="control-label  mandFldastrks pull-right text-right">Name
            <small>(As per NRIC)</small>
      <span class="mandFldastrks">*</span></label>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6"> 
                <input type="hidden" name="fpmsCustid" id="fpmsCustid"/>
                  <input id="dfSelfName" class="form-control clsfipaClient" name="dfSelfName"
                       class="form-control"  type="text" maxlength="75"  onmouseover="fipaTooltip(this);"
                            autofocus onchange="loadSlfSpsName();"/> 
            </div>
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6">
            <label for="advstfId" class="control-label  mandFldastrks pull-right text-right">Servicing Adviser
                    <span class="mandFldastrks">*</span></label>
             </div>
           <div class="col-md-6 col-sm-6 col-xs-6">
               <select class="form-control readOlyCursor"  id="advstfId" name="advstfId" 
                     onchange="setAdvMgrId(this);"   > 
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  	<c:if test="${advstf[5] == 'ADVISER'}">
										  		<option value="${advstf[0]}">${advstf[1]}</option>
										  	</c:if>										    
										  </c:forEach>
										</c:if>
									</select>
									<select style="display:none" id="selAdvMgrHidden">
									 <option value="">--SELECT--</option>
									<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  <c:if test="${advstf[5] == 'ADVISER' }">
										  	<option value="${advstf[2]}">${advstf[3]}</option>
										  </c:if>
										   </c:forEach>
										</c:if>
									</select>
            </div>
            </div>
      </div>
                       
                 
                
                
                	<div class="form-group required">
               		<div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
				 					<label class="control-label  mandFldastrks pull-right text-right" for="mgrId">Manager
				 					 <span class="mandFldastrks">*</span></label>
				 				</div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
				 				<select class="form-control readOlyCursor" id="mgrId" name="mgrId"  >
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  <c:if test="${advstf[5] == 'ADVISER'}">
										  	<option value="${advstf[2]}">${advstf[3]}</option>
										  </c:if>
										   </c:forEach>
										</c:if>
									</select>		
												
				 			</div>
				 </div>
                  
                </div>  
                 
                <div class="form-group required" >
                 <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfDob"> Date of Birth
            <small>(DD/MM/YYYY)</small>
                   <span class="mandFldastrks">*</span> </label>
                </div>
                  <div class="col-md-4 col-sm-4 col-xs-4" >
                  <div class="input-group input-group-sm fld-resp-mm date"  id="dobSlfpicker" > 
                  <input type='text' class="form-control clsfipaClient" id="dfSelfDob"   
 						name="dfSelfDob"  
 					  maxlength="10"  >  
                  <div class="input-group-addon" > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
<!--  				   onblur="CheckDob(this);"     -->
                  </div>
                </div> 
 					</div>
			</div>
			</div> 
			
			<div class="form-group"> 
                  <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                    <label class="control-label pull-right text-right" for="dfSelfAge">Age</label> 
                    </div>
                       <div class="col-md-4 col-sm-4 col-xs-4">
                       <div class="input-group input-group-sm fld-resp-sm">
				 <input id="dfSelfAge" name="dfSelfAge"  
				 class="form-control readOlyCursor clearfipaClient applyEvntYrs"
				  type="text" onchange="calcRtrmntPln(this);"   readonly="true"/> 
					<div class="input-group-addon" > 
 					 <span id="symbolYrs"></span> </div>
				  </div>
            	</div>
                </div>
                </div>
			
			 <div class="form-group required">
			   <div class="row">
                   <div class="col-md-6 col-sm-6 col-xs-6">
                   <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfNationality">Nationality 
                   <span class="mandFldastrks">*</span>  </label>
                   </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                     <select class="form-control clsfipaClient" id="dfSelfNationality" 
                    name="dfSelfNationality"   >
                    						<option value="">--SELECT--</option>
				 						<option value="Singaporean">Singaporean</option>
				 							<c:if test="${not empty NATIONALITY}">
										  <c:forEach var="nationality" items="${NATIONALITY}">
										    <option value="${nationality}">${nationality}</option>
										  </c:forEach>
										</c:if>
									</select>   
                </div>
                </div>
                
                 
                
                 <div class="form-group required"> 
                    <div class="row"> 
                        <div class="col-md-6 col-sm-6 col-xs-6 ">
                        <div> 
					 <label class="control-label pull-right text-right">
                       <!--  <span class="mandFldastrks">*</span>   -->
                        </label>
                        </div>  
                         <div> 
                         <label class="control-label pull-right text-right"> 
                  <select class="form-control" id="dfSelfIdtype" name="dfSelfIdtype" onchange="focusId(this,dfSelfNric)"    >
<!--                    -->
									<option value="NRIC">NRIC</option>
									<option value="FIN">FIN No.</option>
									<option value="PASSPORT">Passport No.</option>
									</select> </label>
					 </div> 
					 
									</div>   
								 
				  <div class="col-md-3 col-sm-3 col-xs-3"> 
				  	 <input id="dfSelfNric" name="dfSelfNric"  class="form-control clsfipaClient" type="text" 
				  	 maxlength="20"
				  	 onmouseover="fipaTooltip(this);" 
				  	 onchange="loadSlfSpsName();" />
<!-- onchange="validateNRIC(this,dfSelfIdtype,dfSelfNric);loadSlfSpsName();" -->
				  </div>  
                </div>
                </div>
                
                
                
                 <div class="form-group">
                  <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                    <label class="control-label pull-right text-right" for="dfSelfGender">Gender</label>
                    </div>
                     <div class="col-md-3 col-sm-3 col-xs-3">
                  <select class="form-control clsfipaClient" id="dfSelfGender" name="dfSelfGender"  >
				 						<option value="">--SELECT--</option>
										
										    <option value="M">Male</option>
											<option value="F">Female</option>
									</select>
									</div>
                </div>
                </div>
                
                
                
                
                  <div class="form-group">  
                   <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                 <label class="control-label pull-right text-right" for="dfSelfMartsts">Martial Status  </label>
                 </div>
                       <div class="col-md-3 col-sm-3 col-xs-3">
				  <select class="form-control clsfipaClient" id="dfSelfMartsts" name="dfSelfMartsts" >
								     <option value="">--SELECT--</option>
										<c:if test="${not empty MARITALSTATUS_LIST}">
										  <c:forEach var="martialstatus" items="${MARITALSTATUS_LIST}">
										    <option value="${martialstatus}">${martialstatus}</option>
										  </c:forEach>
										</c:if>
									</select>
									</div>
									</div>
                </div> 
                
                <div class="form-group">  
                <div class="row">
                     <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label pull-right text-right" for="dfSelfSrcFd">Source of Fund </label>
				</div>
				  <div class="col-md-4 col-sm-4 col-xs-4">
                 <select class="form-control clsfipaClient" id="dfSelfSrcFd" name="dfSelfSrcFd"  >
	 						<option value="">--SELECT--</option>
	 						 <option value="EARNINC">Earned&nbsp;Income</option>
	 						 <option value="INVINC">Investment&nbsp;Income</option>
	 						 <option value="PERSSAVE">Personal&nbsp;Savings</option>
	 						 <option value="CPFSAVE">CPF&nbsp;Savings</option> 
				 	 </select>
                </div>
                </div>
                </div>
                <div class="form-group">  
                <div class="row">
                   <div class="col-md-6 col-sm-6 col-xs-6">
                  <label class="control-label pull-right text-right" for="dfSelfSmoking">Smoking </label>
                  </div>
                     <div class="col-md-2 col-sm-2 col-xs-2">
				<select class="form-control clsfipaClient" id="dfSelfSmoking" name="dfSelfSmoking" >
				 						<option value="">--SELECT--</option>
				 						 <option value="N">No</option>
				 						 <option value="Y">Yes</option> 
				 				</select>
                </div>
                </div>
                
                </div>
                 <br/>
   				 <br/>
   				 <br/>
     </fieldset> 
    
    <br/>
    
    <fieldset class="fieldsetClsborder" id="clientaddress">
    	<!-- <legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ContactInfo.png" height="30" width="30"></span>Contact Information</legend> -->
    	           <div class="panel-heading" style="background-color: #1D655C;">
	 			 	<span class="custompanelHeaderTitle"><small> Contact Information</small></span>  
   				  </div>
   				 <div class="clearspace20"></div>    
                <div class="form-group">  
                 <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                  <label class="control-label pull-right text-right" for="dfSelfMobile">Mobile</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSelfMobile" name="dfSelfMobile"  class="form-control clsfipaClient"  
				 type="text" size="15" maxlength="60"   onmouseover="fipaTooltip(this);" />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                 <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                    <label class="control-label pull-right text-right" for="dfSelfHome">Home </label>
				</div>
				      <div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSelfHome" name="dfSelfHome"  class="form-control clsfipaClient"  
				 type="text"  maxlength="60"  />
                </div>
                </div>
                </div>
                
                
                
                <div class="form-group">  
                <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label pull-right text-right" for="dfSelfFax">Fax   </label>
				</div>
				      <div class="col-md-4 col-sm-4 col-xs-4">
                 <input id="dfSelfFax" name="dfSelfFax"   class="form-control clsfipaClient" 
                  type="text"  maxlength="60" />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                <label class="control-label pull-right text-right" for="dfSelfOffice">Office   </label>
				</div>
				      <div class="col-md-4 col-sm-4 col-xs-4">
                 <input id="dfSelfOffice" name="dfSelfOffice"   class="form-control clsfipaClient" 
                  type="text"  maxlength="60" />
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6"> 
                    <label class="control-label pull-right text-right" for="dfSelfPersemail">Email&nbsp;<small>(P)</small></label>
				</div>
				       <div class="col-md-6 col-sm-6 col-xs-6"> 
				       <div class="input-group input-group-sm">
				       
				<input type='text'  id="dfSelfPersemail" name="dfSelfPersemail" class="form-control clsfipaClient" 
				maxlength="60" onblur="EmailCheck(dfSelfPersemail)" onmouseover="fipaTooltip(this);" />
                 <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"  ></span> </div>
                 </div>
                </div>
                </div>
                </div>
                
                  <div class="form-group">  
                <div class="row">
                       <div class="col-md-6 col-sm-6 col-xs-6"> 
                    <label class="control-label pull-right text-right" for="dfSelfOffemail">Email&nbsp;<small>(O)</small></label>
				</div>
				       <div class="col-md-6 col-sm-6 col-xs-6"> 
				       <div class="input-group input-group-sm">
				       
				<input type='text'  id="dfSelfOffemail" name="dfSelfOffemail" class="form-control clsfipaClient" 
				maxlength="60" onblur="EmailCheck(dfSelfOffemail)" onmouseover="fipaTooltip(this);"  />
                 <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"  ></span> </div>
                 </div>
                </div>
                </div>
                </div>
      </fieldset>          
                 
	</div> 
	

	<div class="col-md-6">
		
		<fieldset class="fieldsetClsborder" id="clientRegaddress">
    	<!-- <legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientAddr.png" height="30" width="30"></span>Residential Address</legend> -->
	  		<div class="panel-heading" style="background-color: #1D655C;">
			  <span class="custompanelHeaderTitle"><small>Residential Address</small></span>  
		    </div>
		    <div class="clearspace20"></div> 
	  			<!-- <div class="form-group">   
                    <label class="control-label mandFldastrks" for="txtFldDfSlfResidential" > 
                    Registered Residential Address <span class="mandFldastrks">*</span> </label>
                </div> -->
                
                <div class="form-group">  
                 <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfHomeaddr">Address1 </label>
                    </div>
                     <div class="col-md-8 col-sm-8 col-xs-8">
				<input id="dfSelfHomeaddr" name="dfSelfHomeaddr"  class="form-control clsfipaClient"  
				type="text" maxlength="450"  onmouseover="fipaTooltip(this);" 
				onchange="chkSpsReg(this,'dfSpsHomeaddr','dfSpsMailaddr');chgRegAddr1(this,'dfSelfMailaddr','dfSelfRegmailaddrSame');" />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">
                 <div class="row">
                  <div class="col-md-4 col-sm-4 col-xs-4">
                 <label class="control-label pull-right text-right" for="dfSelfHomeaddr2">Address2 </label>
                 </div>
                   <div class="col-md-8 col-sm-8 col-xs-8">
				<input id="dfSelfHomeaddr2" name="dfSelfHomeaddr2"  class="form-control clsfipaClient" 
				 type="text" maxlength="150"  onmouseover="fipaTooltip(this);" 
				 onchange="chgRegAddr1(this,'dfSelfMailaddr2','dfSelfRegmailaddrSame');chkSpsReg(this,'dfSpsHomeaddr2','dfSpsMailaddr2');"   />
                </div>
                </div>
                </div>
                
                
                <div class="form-group">
                 <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                   <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfHomepostal">Postal Code</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
				<input id="dfSelfHomepostal" name="dfSelfHomepostal"  class="form-control clsfipaClient"
				 type="text" maxlength="20"   onmouseover="fipaTooltip(this);" 
				 onchange="chgRegAddr1(this,'dfSelfMailpostal','dfSelfRegmailaddrSame');chkSpsReg(this,'dfSpsHomepostalcode','dfSpsMailpostal')"  />
                </div>
                </div>
                </div>
                
                <div class="form-group">
                 <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfHomecntry">Country </label>
                    </div>
                       <div class="col-md-4 col-sm-4 col-xs-4">
				  <select class="form-control clsfipaClient" id="dfSelfHomecntry" name="dfSelfHomecntry"
				 onchange="chgRegAddr1(this,'dfSelfMailcntry','dfSelfRegmailaddrSame');chkSpsReg(this,'dfSpsHomecntry','dfSpsMailcntry')"  >
				 						<option value="">--SELECT--</option>
				 						<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
					 </select>   
					 <div id="Selfcntry" data-input-name="country" onchange="chgRegAddr1(this,'dfSelfMailcntry','dfSelfRegmailaddrSame');chkSpsReg(this,'dfSpsHomecntry','dfSpsMailcntry')"></div> 
					 </div>
				 </div>
                </div>
                
    </fieldset>
    
    <br/>
    
     <fieldset class="fieldsetClsborder">
    	<!-- <legend class="customFIPAStyle" id="clientmailaddress"><span><img alt="" src="images/menuicons/ClientMail.png" height="30" width="30"></span>Mailing Address</legend> -->
    	    <div class="panel-heading" style="background-color: #1D655C;">
			  <span class="custompanelHeaderTitle"><small>Mailing Address</small></span>  
		    </div>
		    <div class="clearspace20"></div>       
                <div class="form-group">  
                <div class="row"> 
               <!--  <div class="col-md-4 col-sm-4 col-xs-4">
                <label class="control-label " for="">Mailing Address</label> 
                </div>  -->
                <div class="col-md-8 col-sm-8 col-xs-8">
                <div class="checkbox checkbox-primary">
                        <input id="dfSelfRegmailaddrSame" name="dfSelfRegmailaddrSame" onclick="setChkBoxValue(this)" type="checkbox">
                        <label for="dfSelfRegmailaddrSame" class="control-label">Different from registered residential address</label>
                    </div> 
               </div>
               </div>
                </div>
                
                
                
                
                <!-- <div class="form-group">  
                     <label class="control-label mandFldastrks" for="">Mailing Address<span class="mandFldastrks">*</span></label>
                </div>  -->
                <div class="form-group">  
                <div class="row"> 
                 <div class="col-md-4 col-sm-4 col-xs-4">
                   <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfMailaddr">Address1</label>
                   </div>
                <div class="col-md-8 col-sm-8 col-xs-8">
				<input class="form-control readOlyCursor clearfipaClient"   id="dfSelfMailaddr" name="dfSelfMailaddr"	   maxlength="450"   onmouseover="fipaTooltip(this);"    readonly="true"/>
                </div>
                </div>
                </div>
                
                
                 <div class="form-group">  
                <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                  <label class="control-label pull-right text-right" for="dfSelfMailaddr2">Address2</label>
				</div>
				  <div class="col-md-8 col-sm-8 col-xs-8">
				<input class="form-control readOlyCursor clearfipaClient"   id="dfSelfMailaddr2" name="dfSelfMailaddr2" 
				  maxlength="450"   onmouseover="fipaTooltip(this);"    readonly="true"/>
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                 <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfMailpostal">Postal Code</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
				<input class="form-control readOlyCursor clearfipaClient" 
				  id="dfSelfMailpostal" name="dfSelfMailpostal"
				   maxlength="20"    readonly="true"/>
                </div>
                </div>
                </div>
                
                <div class="form-group">  
                <div class="row"> 
                <div class="col-md-4 col-sm-4 col-xs-4">
                  <label class="control-label  mandFldastrks pull-right text-right" for="dfSelfMailcntry">Country</label>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-4">
                <select class="form-control disabledCursor clearfipaClient" id="dfSelfMailcntry"
                 name="dfSelfMailcntry" 
                  disabled="true" >
				 						<option value="">--SELECT--</option>
				 						<option value="SINGAPORE">SINGAPORE</option>
				 						<c:if test="${not empty COUNTRIES}">
										  <c:forEach var="country" items="${COUNTRIES}"> 
										    <option value="${country}">${country}</option> 
										  </c:forEach>
										</c:if>
									</select>
                </div>
                </div>
                </div>
                
                
                <div class="form-group">  
                <div class="row"> 
               <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label text-right text-right" for="dfSelfAddrreason">Reason for different Mailing Address</label>
				</div>
			<div class="col-md-8 col-sm-8 col-xs-8">
				<select class="form-control disabledCursor clearfipaClient" id="dfSelfAddrreason" name="dfSelfAddrreason"   disabled="true" >
				 						<option value="">--SELECT--</option>
				 						 <option value="RS1">This is my office address</option>
				 						 <option value="RS2">This is the address of the rented apartment that I am staying in</option>
				 						 <option value="RS3">This is the address of my other property</option>
				 						 <option value="RS4">I am currently staying with my friend or fiance or fiancee or spouse</option>
				 						 <option value="RS5">I am currently working or studying overseas</option>
				 						 <option value="RS6">This is my parent's/child's/sibling's/spouse's address</option>
				 				</select>
                </div>
                </div>
                </div>
                
          </fieldset>   
         
        <br/>  
          
        <fieldset class="fieldsetClsborder">
    	<!-- <legend class="customFIPAStyle"><span><img alt="" src="images/menuicons/ClientEmp.png" height="30" width="30"></span>Employment Info</legend> -->
    	    <div class="panel-heading" style="background-color: #1D655C;">
			  <span class="custompanelHeaderTitle"><small>Employment Info</small></span>  
		    </div>
		    <div class="clearspace20"></div>
    			  <div class="form-group"> 
                 <div class="row">
                       <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label pull-right text-right" for="dfSelfEmpsts">Employment Status </label>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
				<select class="form-control clsfipaClient" id="dfSelfEmpsts" name="dfSelfEmpsts"  >
				 						<option value="">--SELECT--</option>
				 						<c:if test="${not empty EMPLOYMENT_STATUS}">
										  <c:forEach var="empsts" items="${EMPLOYMENT_STATUS}">
										    <option value="${empsts}">${empsts}</option>
										  </c:forEach>
										</c:if>								  		
									</select>
									</div>
									</div>
                </div>
                
                
                 <div class="form-group">  
                  <div class="row">
                       <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label pull-right text-right" for="dfSelfOccpn">Occupation </label>
                    </div>
                   <div class="col-md-8 col-sm-8 col-xs-8">
                    <input id="dfSelfOccpn" name="dfSelfOccpn" class="form-control clsfipaClient"
                     type="text" maxlength="60"  />
				</div>
				</div>
				 </div>
				 
				 
				 
               
                <div class="form-group">   
                  <div class="row">
                     <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label pull-right text-right" for="dfSelfCompname">Employer </label>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8">
				<input id="dfSelfCompname" name="dfSelfCompname" class="form-control clsfipaClient"
				 type="text" maxlength="60"   />
                </div>
                </div>
                </div>
                
                 <div class="form-group"> 
                 <div class="row">
                       <div class="col-md-4 col-sm-4 col-xs-4">
                    <label class="control-label pull-right text-right" for="dfSelfempcat">Employment category </label>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
				<select class="form-control clsfipaClient" id="dfSelfempcat" name="dfSelfempcat"  > 
				<option value="">--SELECT--</option>
				 						<c:if test="${not empty EMPLOYEE_CATEGRY}">
										  <c:forEach var="empcat" items="${EMPLOYEE_CATEGRY}">
										    <option value="${empcat}">${empcat}</option>
										  </c:forEach>
										</c:if>								  		
									</select>
									</div>
									</div>
                </div>
                
                
                  <div class="form-group">  
                <div class="row">
                     <div class="col-md-4 col-sm-4 col-xs-4">
                 <label class="control-label pull-right text-right" for="dfSelfAnnlincome">Estd Monthly Income
 					<a class="btn btn-default addinfoicon" id="popdfSelfAnnlincome"></a></label>
				</div>
				      <div class="col-md-6 col-sm-6 col-xs-6">
				       <div class="input-group input-group-sm">
				       <div class="input-group-addon">
				       <span class="glyphicon" id="symbolUsd"></span> 
				       </div>
                <input type="text" name="dfSelfAnnlincome"  id="dfSelfAnnlincome"
                 onmouseover="fipaTooltip(this);"
                 class="form-control numbers clsfipaClient applyEvntUsd"  
                   onchange="prtclrMnthInc(this,'Self')"/>
                
                </div>
                
                </div>
                
                </div>
                </div>
    	
    	
    	
    	<div class="row hidden" >  
		<div class="fipaFldLblText">
		Remarks</div> 
		<textarea name="dfRemarks" id="dfRemarks" class="form-control" style="width: 97%;" rows="5" maxlength="300">
		</textarea>
	  </div>	
	  <br/>
	  <br/>
	  
    	</fieldset>  
	</div>

   </div> 
  
 </div>
</div>
