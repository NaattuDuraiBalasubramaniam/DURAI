<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 


<div class="tabset" style="background: white;">
  <ul id="clientsearch" class="nav nav-pills fipa_common_tab" role="tablist" data-tabs="tabs" style="height: 30px">
		<li class="active"><a href="#profilsearch" data-toggle="tab">
			<label class="tablabel" for="ProSrchTab"><i class="fa fa-list-alt" title="Profile Search"></i>&nbsp;&nbsp;&nbsp;&nbsp;Profile Search</label>
			
			</a>
		</li>
    <li><a href="#profileArchive" data-toggle="tab">
    	<label class="tablabel" for="ArcProTab"><i class="fa fa-archive" title="Archive"></i>&nbsp;&nbsp;&nbsp;&nbsp;Archive</label>
    
    </a></li>
  </ul>
  
  <hr class="border"/>
  
  <div class="clearspace5"></div>
  
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="profilsearch">
    
    
          <div class="panel-body" > 
      
      	<div class="row">  
      		<div class="col-md-12">
      			<div class="col-md-4" style="width:30%">
      			
			  		<div class="input-container">
						 <label for="txtFldSrchCustName" class="control-label">Name</label>
						<input class="textfilds" id="txtFldSrchCustName" name="txtFldSrchCustName"  style="font-size: 14px;">
					</div>
      			</div>
      			
      			<div class="col-md-4" style="width:30%">
      				
      				<div class="input-container">
						 <label for="txtFldSrchCustNric" id="lblSrchNric" class="control-label">NRIC/ FIN / Passport</label>
						<input class="textfilds" id="txtFldSrchCustNric" name="txtFldSrchCustNric"  style="font-size: 14px;">
					</div>
      			</div>
      			
      			<div class="col-md-3" id="divSrchAdviser">
      				
      				<table>
      				<tr>
      				<td>
      				 <label for="selAdviserSrch"  class="control-label">Adviser: </label> 
      				</td>
      				<td>
      				<div class="input-container">
						 <select class="form-control srchtextflds textfilds"  id="selAdviserSrch" > 
								     <option value="">--SELECT--</option>
										<c:if test="${not empty ALL_ADVSTF_LIST}">
										  <c:forEach var="advstf" items="${ALL_ADVSTF_LIST}">
										  	<c:if test="${advstf[5] == 'ADVISER'}">
										  		<option value="${advstf[0]}">${advstf[1]}</option>
										  	</c:if>										    
										  </c:forEach>
										</c:if>
									</select>  
					</div>
      				</td>
      				</tr>
      				</table>
      				
      				
      			</div>
      					<button type="button"  id="btnSrchProfile" class="btn BtnFIPASRCH StylishSRCH" onclick="fipaSearch()" style="background-color: #243665;border-radius: 5px;top:0px !important;padding-left: 0px;" >
					     	 <span class="txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search</span>
					      	<!--  <span class="round"><i class="fa fa-search"></i></span> -->
					    </button> 
    

					    
      		</div>
      		
		</div>
		
		 <div class="clearfix"></div>  
		 <div class="row">
		 <div class="col-md-12">
		
		 <br>
		 
			<table id="ClientSearchTable"
				 class="dataTable table-striped table-bordered display hover" 
				style="width: 100%;display:none">
				<thead style="border: 1px solid #1D655C !important">
		
					<tr>
						<th>#</th>
						<th>Select</th>
						<th><div style="width: 160px">Client Name</div></th>
						<th>NRIC</th>
						<th>Email</th>
						<th>Contacts</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							id="imgFIPAProspect" />FIPA</th>
						<th><img src="images/menuicons/green-f.png" width="20px"
							id="imgFPMSClient" />FPMS</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							style="margin-right: -10px" id="imgBoth1" /> &nbsp;<img
							src="images/menuicons/green-f.png" width="20px" id="imgBoth2" />Both
						</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

		</div>
		 
		 </div>
		 
      
      
      	
		
      </div>
    
    
    </div>
    <div role="tabpanel" class="tab-pane fade" id="profileArchive">
    
    <jsp:include page="/jsp/fipa/profile.jsp"></jsp:include>
    
    </div>
  </div>
</div>




