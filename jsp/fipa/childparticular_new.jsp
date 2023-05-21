 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  

<div id="childsection">

<div class="panel-body"> 
		<span class="panelHeaderTitle"> Childrens Particulars</span>
		<span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="16">
		<small>&nbsp;&nbsp;(Fields denoted in <span class="mandFldastrks">*</span> requires documentation for successful updates)</small></span>
		<div class="btn-group pull-right" role="group" style="display: block;">
		&nbsp;&nbsp;
			<!-- <button type="button" class="btn btn-info "  id="btnChildParticularsPrint" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button> -->
			<button type="button" class="btn btn-info" id="btnChildEducationPrint" style="margin-left: 0%;" >
			 						<span>&nbsp;Child Report&nbsp;</span><i class=""></i></button>
		</div>
			<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">&nbsp;&nbsp;
					    <button type="button" class="btn btn-info  delRow-icon1" id="DNewChldPt"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
						</div>
					   <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
						&nbsp;&nbsp; 
						<button type="button" class="btn btn-info addRow-icon1" id="ANewChldPt" ><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
						</div>
						
		
			 						
	</div>
	  
   <div class="panel-body">
<div class="row">
<div class="col-md-12" >
<div id="childParticularsTableNewdiv">  
	<table id="childParticularsTableNew" class="table-striped table-bordered display no-footer dataTable" style="width:100%;border-spacing: 1px !important;border-bottom: none;" >
	</table>
	</div>
</div>

</div>
       
</div>
</div>




