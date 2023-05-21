<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="panel-body"> 
		<span class="panelHeaderTitle">Other than immediate family members</span>
		<span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="16">
		<small>&nbsp;&nbsp;(Fields denoted in <span class="mandFldastrks">*</span> requires documentation for successful updates)</small></span>
		<div class="pull-right" role="group" style="display: block;">
		&nbsp;&nbsp; 
			<!-- <button type="button" class="btn btn-info"  id="btnFamilyMembersPrint" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button> -->
		</div>
		<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
		&nbsp;&nbsp;
						<button type="button"  class="btn btn-info delRow-icon1"  id="DepntDRow"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="DepntARow"><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
  				 </div>
		
			 						
	</div>
	
	
   <div class="panel-body">
<div class="row">

<div class="col-md-12" >
<div id="deptParticularsTableNewdiv"> 
	<table id="deptParticularsTableNew" class="table-striped table-bordered display no-footer dataTable" style="width:100%;border-spacing: 1px !important;border-bottom: none;" >
	</table>
	</div>
	<table class="dataTable table-bordered  display" id="deptParticularsTablefooterNew"  style="width:100%;display:none">
						
					<tbody>
					<tr>
							<td>
							<div><span class="label label-info"></span> 
							</div>
							</td> 
							<td>
							<div style="text-align: center;width: 250px;">
							<span class="">Self</span> 
							</div>
							</td>
							<td> 
 							<div style="width: 250px;text-align: center;">
							<span class="">Spouse</span> 
							</div>
							</td>
							<td>
							<div style="width: 250px;text-align: center;">
							<span class="">Total</span> 
							</div>
							</td>
					</tr>
						<tr>
							<td>
								<div style="text-align: right;width:300px" class="pull-right">
									Total Monthly Contribution&nbsp;<span class="label label-info">$</span> 
								</div>
							</td> 
							<td><input type="text" id="txtFldDepdTotMASelf"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td><input type="text" id="txtFldDepdTotMASps"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
							<td><input type="text" id="txtFldDepdTotMthContr"
								onmouseover="fipaTooltip(this);" readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></th>
						</tr>
						
						<tr>
							<td >
								<div style="text-align: right;" class="pull-right">
									Total Annual Contribution&nbsp;<span class="label label-info">$</span> 
								</div>
							</td> 
							<td><input type="text" id="txtFldDepdTotAnnlSelf"
								  readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></td>
							<td><input type="text" id="txtFldDepdTotAnnlSps"
								 readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></td>
							<!-- <td>&nbsp;</td> -->
							<td><input type="text" id="txtFldDepdTotAnnlContr"
								 readonly="true"
								class="form-control readOlyCursor numbers applyEvntUsd" /></td>
						</tr>
					</tbody>	
					
				</table>
</div>


</div>

</div>