		<div class="panel-body">
		<div class="row">  
	
	<div class="col-md-12" >

			<table id="ProfileSearchTable" class="dataTable table-striped table-bordered display" style="width:100%" >
				<thead>
					<tr>
						<th>#</th>
						<th>Select</th>
						<th>Date Created<br><span class="label label-info">DD/MM/YYYY HH:MM:SS</span></th>
						<th>Analysis</th>
						<th><div style="width:60px">Application Types</div></th>
						<th><div style="width:60px">Applicant</div></th>
						<!-- <th style="display:none"><div style="width:100px;">Replacement</div></th> -->
						<th><div style="width:80px">Remarks</div></th>
						<th>Status</th>
						<th>Approval</th>
					</tr>
					 
					
				</thead>
				<tbody>
				</tbody>	
	 </table>
	</div>
	</div>
	</div> 



<div id="profileDialog" title="Application Types" class="hidden">
	<div class="panel-body" id="profileDialogContent">
		<div class="form-group">		
			<label class="">Please indicate your application types?&nbsp;<span class="mandFldastrks">*</span></label><br/>
			<label class="fipaFldLblText"><input type="radio" name="fnaType" id="fnaType" value="SIMPLIFIED"  />Simplified</label><br/> 
			<label class="fipaFldLblText"><input type="radio" name="fnaType" id="fnaType" value="FULLFACT"  />Full Fact</label><br/>
		</div>	
		
		<div class="form-group">
			<label class="">Would you like to map the existing data over to your next review?&nbsp;<span class="mandFldastrks">*</span></label><br/>
			<label class="fipaFldLblText"><input type="radio" name="radAppDataReview" id="radAppDataReview" value="Y"  />Yes</label><br/>
			<label class="fipaFldLblText"><input type="radio" name="radAppDataReview" id="radAppDataReview" value="N" checked />No</label><br/>
		</div>	
	</div> 
</div>


            
  
<!--   Thulasy 16.07.2019 -->
<div class="modal fade"  id="CantCreateNewProfDialog" style="display: none;" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content"> 
      <div class="modal-body" style="text-align: center;">
       <fieldset class="fieldsetClsborder" >
		<!-- col1 -->
		<div class="col-md-12 ">    
		  	<h4 class="text-center">
           		The Selected Profile is not latest!<br>Cannot edit this profile.<br> 
       		</h4>
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
					    </button></div>
		   
      </div>
      </div>
      </div>
      </div>          
            
 
