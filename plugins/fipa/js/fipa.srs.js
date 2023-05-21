/**
 * SRS
 */ 
 
/*$("#srsCancelbtn").on("click",function(){
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").removeClass("mandatoryFillFlds");
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").qtip('disable');
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").qtip('destroy',true);
	cshSRSRdlyflds(INS_MODE);  
   	getcshSRSRows(null); 
	$('#Srs_Dialog').modal('hide'); 
	cshSRSClearFlds();
});*/
$("#srssummary_li").click(function(){
	reOrderSrsVisibleRows();
	});
/*Add Row Click */
$("#SrsARow").on("click",function(){
	//if(!valcshSRSTbl())return; 
			cshSRSClearFlds();
			
			$("#txtFldDlgSRSId").val(makeid(17));
			$("#txtFldDlgSRSRefId").val(newMakeId("SRS",15))
			
			showFIPAModel('Srs_Dialog','SRS Details');  
			toggleSRSClassification($("#selDlgSRSClassify"),$("#txtFldDlgSRSPerFrom"),$("#txtFldDlgSRSPerTo"),$("#txtFldDlgSRSAge"),$("#txtFldDlgSRSPayoutPerd"));
	//		$("#Srs_Dialog").find("input[id=txtFldDlgSRSMode]").val("I");//instant save added line
			$('#Srs_Dialog').on('shown.bs.modal', function () {
//				$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#Srs_Dialog").find("input[id=selDlgSRSClassify]").focus(); 
				$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatecshSRSDetails())return;
					   	cshSRSRdlyflds(INS_MODE);  
					   	getcshSRSRows(null); 
						$('#Srs_Dialog').modal('hide'); 

						cshSRSClearFlds();
							
							
						crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
						
					
				  });  
			});
			
			
});



/*Populate Data */
function getcshSRSRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldcshSRSMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldSRSId"><input type="hidden" name="txtFldSRSRefId">';
//<!--changes done 19/06/2019 -->
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcshSRSSelect"/><label>&nbsp;</label></div>'; 

var cell2 = '<input type="hidden" name="txtFldSrsDesc" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="150"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 150px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed;
var cell3='<select name="selSrsClassify" id="selSrsClassify" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"> </select>'+
'<select name="selSrsTypeTrans" id="selSrsTypeTrans" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);"> </select>';

var cell4 = '<input type="hidden" name="txtFldSrsPerdFrom" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);"  maxlength="10"/>'+
'<input type="hidden" name="txtFldSrsPerdTo" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="10" />'+
'<input type="hidden" name="txtFldSrsPerdFromDate" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="10" />'+
'<input type="hidden" name="txtFldSrsPerdToDate" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="10"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 70px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed;

var cell5 = '<input type="hidden" name="txtFldSrsAmount" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);"  />'+
'<select name="selSrsFreq" id="selSrsFreq" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"> </select>'+
'<input type="hidden" name="txtFldSrsAgestart" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldSrsPayoutPerd" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldSrsCrtdBy"/><input type="hidden" name="txtFldSrsCrtdDate"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 70px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed;

srsTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5] ).draw( false );
var $lastRow = $("#srsTable tbody tr:last");
$lastRow.show();
var rowCount = $('#srsTable tbody tr:visible').length;	
rowCount = (rowCount == 0) ? $('#srsTable tbody tr').length : rowCount;
$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcshSRS"+$lastRow.index())
.parent().find('label').attr('for',"radcshSRS"+$lastRow.index());
 
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgSRSId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgSRSRefId").val());



var sel1 =  $("#selDlgSRSTypeTrans > option").clone();
$lastRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"]').append(sel1);
$lastRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"]').val($("#selDlgSRSTypeTrans").val());

var sel1 =  $("#selDlgSRSClassify > option").clone();
$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').append(sel1);
/*$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val($("#selDlgSRSClassify").val());*/
var srsTranType=$("#selDlgSRSTypeTrans").val();
if(srsTranType == 'Addition')
{
	$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val('Annual Addition');
}else if(srsTranType == 'Withdrawals')
{
	$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val('Annual Withdrawals');
}
else if(srsTranType == 'Deduction')
{
	$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val('Annual Withdrawals');
}
else{
	$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val('');
}
$lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').on("change",function(){   
	toggleSRSClassification($lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]'),$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]'),$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]'));
	setSRSWithdrwDesc($lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]'),$lastRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]'));
	addSRSToRetirement($lastRow);
});


$lastRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').val($("#txtFldDlgSRSDesc").val());
$lastRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').on("change",function(){
	addSRSToRetirement($lastRow);
})
$lastRow.find("td:eq(2)").find('span').html($("#txtFldDlgSRSDesc").val()); //Proposed

var sel2 =  $("#txtFldDlgSRSFreq > option").clone();
$lastRow.find("td:eq(5)").find('select[name="selSrsFreq"]').append(sel2);
$lastRow.find("td:eq(5)").find('select[name="selSrsFreq"]').val($("#txtFldDlgSRSFreq").val()); 


$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').val($("#txtFldDlgSRSAmount").val());  
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').addClass("applyEvntUsd");  
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').on("change",function(){
	addSRSToRetirement($lastRow);
})

$lastRow.find("td:eq(5)").find('span').html("$"+$("#txtFldDlgSRSAmount").val()  +' '+  $("#txtFldDlgSRSFreq").val()); //Proposed

$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').val($("#txtFldDlgSRSPerFromDate").val());//date
$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFromDate"]').val($("#txtFldDlgSRSPerFrom").val()); //age

/*$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]'),$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]'),"To Date should greater than the From Date"));  
	 return;lastRow
});*/ 

$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').val($("#txtFldDlgSRSPerToDate").val());  //date
$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdToDate"]').val($("#txtFldDlgSRSPerTo").val()); //age
/*$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]'),$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]'),"To Date should greater than the From Date"));  
	 return;
}); */

$lastRow.find("td:eq(4)").find('span').html("Start @ "+$("#txtFldDlgSRSPerFrom").val()  +'<br>' +"End @ "+  $("#txtFldDlgSRSPerTo").val()); //Proposed

/*$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').val($("#txtFldDlgSRSAge").val());*/
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').val($("#txtFldDlgSRSPerFrom").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').on("change",function(){
	satRetAgeValidate($(this));
//	StartAgeValidate($(this),$lastRow.find("td:eq(9)").find('input:eq(0)'));
	addSRSToRetirement($lastRow);
}); 
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').addClass("applyEvntYrs");  


/*$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').val($("#txtFldDlgSRSPayoutPerd").val());*/
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').val($("#txtFldDlgSRSPerTo").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').on("change",function(){ 
//	EndAgeValidate($(this),$lastRow.find("td:eq(8)").find('input:eq(0)'));
	addSRSToRetirement($lastRow);
});
$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').addClass("applyEvntYrs");

  
applyEventHandlers();


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});

//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
});

if(dataset != null){

	rowCount = $('#srsTable tbody tr').length;	
		$lastRow.find("td:first").find('span').text(rowCount); 
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
		for(var data in dataset){
			var col = dataset[data];
			var selSrsClassify;
			var txtFldSrsDesc;
			var selSrsFreq;
			var txtFldSrsAmount;
			var txtFldSrsPerdFrom;
			var txtFldSrsPerdTo;
			var selSrsTypeTrans;
			switch(data){
			
				case "srsId": 
					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
					break;
					
				case "srsRefId": 
					
					$lastRow.find("td:eq(0)").find('input:eq(2)').val(isEmpty(col) ? newMakeId("SRS",15) : col); 
					break;
					
				case "srsClassfy": 
					/*selectNullvalChk($lastRow.find("td:eq(2)"),col);*/
					selectNullvalChkBySelectName($lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]'),col);
					selSrsClassify=col;
					break;
				
				case "srsTranType": 
					selectNullvalChkBySelectName($lastRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"]'),col);
					selSrsTypeTrans=col;
					break;


				case "srsDesc": 
					$lastRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').val(col); 
					txtFldSrsDesc=col;
					break;
				 
				case "srsFreq": 
					/*selectNullvalChk($lastRow.find("td:eq(4)"),col); */
					selectNullvalChkBySelectName($lastRow.find("td:eq(5)").find('select[name="selSrsFreq"]'),col);
					selSrsFreq=col;
					break;
				 
				case "srsAmount": 
					$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').val(col);
					txtFldSrsAmount=col;
					break;
				 
				 
				case "srsPerdFrom": 
					$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').val(col);  
					break;
				 
					
				case "srsPerdTo": 
					$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').val(col); 
					break;
				 
			    case "srsPerdFromDate": 
					$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFromDate"]').val(col);
					txtFldSrsPerdFrom=col;
					break; 
					
					
				case "srsPerdToDate": 
					$lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdToDate"]').val(col);
					 txtFldSrsPerdTo=col;
					break; 
					
					
				case "srsAgestart": 
					$lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').val(col);
					break;
				 
				case "srsPayoutPerd": 
					$lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').val(col);
					break;
				 
				 
				case "srsCrtdBy": 
					$lastRow.find("td:eq(5)").find('input[name="txtFldSrsCrtdBy"]').val(col);
					break;
				 
				 
				case "srsCrtdDate": 
					$lastRow.find("td:eq(5)").find('input[name="txtFldSrsCrtdDate"]').val(col);
					break; 
					
					 
				case "srsModBy": 
					infoDetsArr.push(col);
					break;
				 
				 
				case "srsModDate": 
					infoDetsArr.push(col);
					break; 
					 
			}			 
			 
		 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + txtFldSrsDesc + '</span>';
		 $lastRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription); //Proposed
			
		 var typeOfTran= $lastRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"] option:selected').text();
		 var addboldtagselSRSTran = '<span style="font-weight: bold;">' +typeOfTran + '</span>';
		 $lastRow.find("td:eq(3)").find('span').html(addboldtagselSRSTran); //Proposed
	
		 var addboldtagtxtFldSRSAgeFrom = '<span style="font-weight: bold;">'+"Start @ "+ txtFldSrsPerdFrom +'</span>';
		 var addboldtagtxtFldSRSAgeTo = '<span style="font-weight: bold;">'+"End @ "+ txtFldSrsPerdTo +'</span>';
		 $lastRow.find("td:eq(4)").find('span').html(addboldtagtxtFldSRSAgeFrom  + '<br>'  + addboldtagtxtFldSRSAgeTo  ); //Proposed
	
		 var addboldtagtxtFldSRSTransAmt = '<span style="font-weight: bold;">' + '$'+txtFldSrsAmount +' '+selSrsFreq+ '</span>';
		 $lastRow.find("td:eq(5)").find('span').html(addboldtagtxtFldSRSTransAmt); //Proposed
			
			
		}
	}else{
		//	DHTML CRUD ICONS
		crudicons(null,'srsTable','SelSrsDets','SrsERow','SrsDRow');
		
		
		
	}


	addSRSToRetirement($lastRow);
	
	
	toggleSRSClassification($lastRow.find("td:eq(2)").find('select:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'));

}

//DHTML SELECT ALL
function SelAllSRS(obj){
	
	if($(obj).is(":checked")){
		
		$('#srsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#SrsDRow").attr("disabled",false);
		$('#srsTable tbody tr').addClass("selected");
		
		var $rowCount = $('#srsTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#SrsERow").attr("disabled",true);
			$("#SrsDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#SrsERow").attr("disabled",false);
			$("#SrsDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#SrsERow").attr("disabled",true);*/
			$("#SrsDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#srsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#srsTable tbody tr').removeClass("selected");
		
		/*$("#SrsERow").attr("disabled",true);
		$("#SrsDRow").attr("disabled",true);*/
		
	}
	


}
 
/*Edit Row Click */
$("#SrsERow").on("click",function(){ 
	SrsVRow(); 
});


/*View Row Click */
function SrsVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#srsTable tbody tr').length;	
	var $lastRow = $("#srsTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#srsTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
	     	 
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode); 
				 
				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				}); 
				
				 	cshSRSRdlyflds($mode);
					cshSRSfilldlgval($row); 
					showFIPAModel('Srs_Dialog','SRS Details');  
					$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#Srs_Dialog').on('shown.bs.modal', function () {
					//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
		
//						$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#Srs_Dialog").find("input[id=selDlgSRSClassify]").focus();//Aravindh
						$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatecshSRSDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cshSRSfilldomval($RowId,$row); 
					     		}  
					     	//	instantCashSRSSave($row,UPD_MODE); //instant save added line
					     		toggleSRSClassification($row.find("td:eq(2)").find('select:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(7)").find('input:eq(0)'),$row.find("td:eq(8)").find('input:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'));
					     		addSRSToRetirement($row);
								$('#Srs_Dialog').modal('hide'); 
								cshSRSClearFlds();
								
								crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
							
						});
						
						$("#Srs_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
						});
					});
					 
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#SrsDRow").on("click",function(){ 
	
	/*$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $row.find("td:first").find('input:eq(0)').val(); 
			var $rowref = $row.find("td:first").find('input:eq(2)').val();
			
//			if($mode == "I" || $mode == "U"){
				deleteAllRetPlanByRefId($rowref);
//			}
		}
	});*/
	datatableDeleteRow('srsTable',srsTable,'SelSrsDets','SrsERow','SrsDRow'); 
	
	
});

/*Clear Fields */
function cshSRSClearFlds(){
	$("#Srs_Dialog").find("input[type=text]").val("");
	$("#Srs_Dialog").find("textarea").val("");
	$("#Srs_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function cshSRSRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#Srs_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#Srs_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatecshSRSDetails(){
	 
	/*if(!(validateFocusFlds('Srs_Dialog','selDlgSRSClassify',SRS_CLASSFY))) return; 
	if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSDesc',SRS_DESC))) return;
	if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSFreq',SRS_FREQ))) return;
	
	if($("#selDlgSRSClassify").val() == "Annual Addition"){
		if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSPerFrom',SRS_PERFROM))) return;
		if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSPerTo',SRS_PERTO))) return;
	}*/
	
	
	  return true; 
}

function valcshSRSTbl(){ 
//	var $lastRow = $("#srsTable tbody tr:last");	
	var $RowCount = srsTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#srsTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), SRS_CLASSFY,SCREEN_SRS))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), SRS_DESC,SCREEN_SRS))) {valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), SRS_FREQ,SCREEN_SRS))){valid=false;return false;};
		if($lastRow.find("td:eq(2)").find('select:eq(0)').val() == "Annual Addition"){
			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('input:eq(0)'), SRS_PERTO,SCREEN_SRS))){valid=false;return false;};
		} 
		});
	} */ 
	 return valid;
}



/*Mandatory Fields Tooltip*/ 
$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});




/* Filling Model Fields*/
function cshSRSfilldlgval($lastRow){
	  
	//$('#Srs_Dialog #txtFldDlgSRSMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	var srspkid = $lastRow.find("td:eq(0)").find('input:eq(1)').val();
	srspkid = isEmpty(srspkid) ? makeid(17) :srspkid;
	
	var srsfkid = $lastRow.find("td:eq(0)").find('input:eq(2)').val();
	srsfkid = isEmpty(srsfkid) ? newMakeId("SRS",15) : srsfkid;
	
	  $('#Srs_Dialog #txtFldDlgSRSId').val(srspkid);
	  $('#Srs_Dialog #txtFldDlgSRSRefId').val(srsfkid);
	  $('#Srs_Dialog #selDlgSRSClassify').val($lastRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val());
	  $('#Srs_Dialog #selDlgSRSTypeTrans').val($lastRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSDesc').val($lastRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSFreq').val($lastRow.find("td:eq(5)").find('select[name="selSrsFreq"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSAmount').val($lastRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerFrom').val($lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFromDate"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerTo').val($lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdToDate"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerFromDate').val($lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerToDate').val($lastRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSAge').val($lastRow.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSPayoutPerd').val($lastRow.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSCrtdBy').val($lastRow.find("td:eq(5)").find('input[name="txtFldSrsCrtdBy"]').val());
	  $('#Srs_Dialog #txtFldDlgSRSCrtdDate').val($lastRow.find("td:eq(5)").find('input[name="txtFldSrsCrtdDate"]').val());
	  
	  
	 
}

/* Filling Table Fields*/
function cshSRSfilldomval($RowId,$row){
	
	$row.find("td:eq(0)").find('input:eq(1)').val( $('#txtFldDlgSRSId').val());
	$row.find("td:eq(0)").find('input:eq(2)').val($('#txtFldDlgSRSRefId').val());
	
	$row.find("td:eq(3)").find('select[name="selSrsClassify"]').val($("#selDlgSRSClassify").val()); 
	
	
	$row.find("td:eq(3)").find('select[name="selSrsTypeTrans"]').val($("#selDlgSRSTypeTrans").val()); 
	var typeOfTran= $row.find("td:eq(3)").find('select[name="selSrsTypeTrans"] option:selected').text();
	var addboldtagselSRSTran = '<span style="font-weight: bold;">' +typeOfTran + '</span>';
	$row.find("td:eq(3)").find('span').html(addboldtagselSRSTran); //Proposed

	$row.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').val($("#txtFldDlgSRSDesc").val());
	var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + $("#txtFldDlgSRSDesc").val() + '</span>';
	$row.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription); //Proposed


	$row.find("td:eq(5)").find('select[name="selSrsFreq"]').val($("#txtFldDlgSRSFreq").val());  
	$row.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').val($("#txtFldDlgSRSAmount").val());
 	var addboldtagtxtFldSRSTransAmt = '<span style="font-weight: bold;">' + '$'+$("#txtFldDlgSRSAmount").val() +' '+$("#txtFldDlgSRSFreq").val()+ '</span>';
	$row.find("td:eq(5)").find('span').html(addboldtagtxtFldSRSTransAmt); //Proposed	 

	$row.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').val($("#txtFldDlgSRSPerFromDate").val());  
	$row.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').val($("#txtFldDlgSRSPerToDate").val());  
	$row.find("td:eq(4)").find('input[name="txtFldSrsPerdFromDate"]').val($("#txtFldDlgSRSPerFrom").val());  
	$row.find("td:eq(4)").find('input[name="txtFldSrsPerdToDate"]').val($("#txtFldDlgSRSPerTo").val());  
	$row.find("td:eq(4)").find('span').html("Start @ "+$('#txtFldDlgSRSPerFrom').val()  +'<br>' +"End @ "+  $('#txtFldDlgSRSPerTo').val()); //Proposed


	$row.find("td:eq(5)").find('input[name="txtFldSrsAgestart"]').val($("#txtFldDlgSRSAge").val());  
	$row.find("td:eq(5)").find('input[name="txtFldSrsPayoutPerd"]').val($("#txtFldDlgSRSPayoutPerd").val());  
	$row.find("td:eq(5)").find('input[name="txtFldSrsCrtdBy"]').val($('#txtFldDlgSRSCrtdBy').val()) ;
	$row.find("td:eq(5)").find('input[name="txtFldSrsCrtdDate"]').val($('#txtFldDlgSRSCrtdDate').val())  ;
	
	
	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line 
	
	
}



//instant save added line
$("#Srs_Dialog").find("input,select,textarea").on("change",function(){
	$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

$("#selDlgSRSClassify").on("change",function(){
	
	setSRSWithdrwDesc($("#selDlgSRSClassify"),$("#txtFldDlgSRSDesc"));
	
	toggleSRSClassification($("#selDlgSRSClassify"),$("#txtFldDlgSRSPerFrom"),$("#txtFldDlgSRSPerTo"),$("#txtFldDlgSRSAge"),$("#txtFldDlgSRSPayoutPerd"));
	
});




/*Check Start Age via End Age validations*/
$("#txtFldDlgSRSAge").on("change",function(){ 
	satRetAgeValidate($(this));
//	StartAgeValidate($(this),$("#txtFldDlgSRSPayoutPerd"));
});


function satRetAgeValidate(elmId){
	var age = Number(elmId.val());
	var curassmpt = Number($("#caSRSSatRetAge").val());

	if(isEmpty(curassmpt)){
		curassmpt=Number(62);
	}
	
	if(!isEmpty(age)){
		if(age < curassmpt){
			applyErrorToastrAlert("Age should be greater "+curassmpt+" (Saturated Retirement Age)",elmId);
			elmId.val("");
			return false;
		} 
	}
}
 
/**/


/*$("#txtFldDlgSRSPerFrom").change(function(){ 
	
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgSRSPerFrom','txtFldDlgSRSPerTo',"Period To Date should greater than the Period From Date")); 
});*/
/*
$("#txtFldDlgSRSPerFrom").change(function(){
	 checkDateFormat($(this));
});*/
/*$("#txtFldDlgSRSPerFrom").change(function(){ 
	alert("onchange");
	var srsPerFromDate = $("#txtFldDlgSRSPerFrom").val();
	alert("srsPerFromDate---"+srsPerFromDate);
	var startYear=getdobtoage(srsPerFromDate, true);
	alert("startYear---"+startYear);
	$("#txtFldDlgSRSPerFromDate").val(srsPerFromDate); 
	$("#txtFldDlgSRSPerFrom").val(startYear);  
});*/

/*$("#txtFldDlgSRSPerFrom").on("change",function(){
	var srsPerFromDate = $("#txtFldDlgSRSPerFrom").val();
	//var startYear=getdobtoage(srsPerFromDate, true);
	getdob(this, $('#txtFldDlgSRSPerFrom'), true);
	$("#txtFldDlgSRSPerFromDate").val(srsPerFromDate); 
	//$("#txtFldDlgSRSPerFrom").val(startYear);  
	
});*/

$("#txtFldDlgSRSPerFrom").on("change",function(){
	var srsPerFromAge = $("#txtFldDlgSRSPerFrom").val();
	var startDate=calstartDate(srsPerFromAge);
	$("#txtFldDlgSRSPerFromDate").val(startDate); 
	
});

function calstartDate(age){
	    var startAge=age;
		var dob=$('#dfSelfDob').val();
		var dsplit = dob.split("/");
		var startYears=new Date(dsplit[2],dsplit[1]-1,dsplit[0]);
    	 startYears.setFullYear(startYears.getFullYear() + parseInt(startAge) );
		var startYear= startYears.toLocaleDateString('en-IN',{day:"2-digit",month:"2-digit",year:"numeric"});
	return startYear;
	}
	
/*$("#txtFldDlgSRSPerTo").on("change",function(){
	var srsPerToDate = $("#txtFldDlgSRSPerTo").val();
	//var endYear=getdobtoage(srsPerToDate, true);
	getdob(this, $('#txtFldDlgSRSPerTo'), true);
	$("#txtFldDlgSRSPerToDate").val(srsPerToDate); 
	//$("#txtFldDlgSRSPerTo").val(endYear);  
	
});*/
$("#txtFldDlgSRSPerTo").on("change",function(){
	var srsPerToAge = $("#txtFldDlgSRSPerTo").val();
	var endDate=calendDate(srsPerToAge);
	$("#txtFldDlgSRSPerToDate").val(endDate); 
	
});
function calendDate(age){
	    var endAge=age;
		var dob=$('#dfSelfDob').val();
		var dsplit = dob.split("/");
		var endYears=new Date(dsplit[2],dsplit[1]-1,dsplit[0]);
    	 endYears.setFullYear(endYears.getFullYear() + parseInt(endAge) );
		var endYear= endYears.toLocaleDateString('en-IN',{day:"2-digit",month:"2-digit",year:"numeric"});
	return endYear;
	}
	
/*$("#txtFldDlgSRSPerTo").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgSRSPerFrom','txtFldDlgSRSPerTo',"Period To Date should greater than the Period From Date"));
});*/ 
/*
$("#txtFldDlgSRSPerTo").change(function(){    
	checkDateFormat($(this));
}); */


function setSRSWithdrwDesc(classfyId,descId){
//	if(classfyId.val() == "Annual Withdrawals"){	 
		if(!chkForWithdrawal(classfyId)){
			return;
		}else{
			if(classfyId.val() == "Annual Withdrawals"){
				descId.val("Cash Out");
			}else{
				descId.val("");
			}
		}
			
		
//	}else{ 
//		descId.val("");
//	}
}

function toggleSRSClassification(classfyId,perFrm,perTo,age,payoutage){

	if(classfyId.val() == "Annual Withdrawals"){
		$("span#classificationSpan").text("Annual Withdrawals");
		$("#srsAnnualAddition").addClass("hidden");
		$("#srsAnnualWithdrawals").removeClass("hidden"); 
		perFrm.prop("readonly",true).val("");
		perTo.prop("readonly",true).val("");
		age.prop("readonly",false);
		payoutage.prop("readonly",false); 
	}else{ 
		$("span#classificationSpan").text("Annual Addition");
		$("#srsAnnualAddition").removeClass("hidden"); 
		$("#srsAnnualWithdrawals").addClass("hidden");
		perFrm.prop("readonly",false);
		perTo.prop("readonly",false);
		age.prop("readonly",true).val("");
		payoutage.prop("readonly",true).val(""); 
	}
	
}


function chkForWithdrawal(elmid){
	/*
	var cls = elmid.val();
	var flg=true;
	
	
	var count = srsTable.row().count();
	var withdrawcnt = 0;
	
	if(count >0) {
		$("#srsTable tbody tr").each(function(){
			var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			if(mode_r != "D"){
				var classfication = $(this).find("td:eq(2)").find("select:eq(0)").val();
				if(classfication == "Annual Withdrawals" ){
					withdrawcnt++;
				}
			}
			
			
		});
	}
	if(withdrawcnt > 0 && cls == "Annual Withdrawals" ){
		applyErrorToastrAlert("There is Annual Withdrawal record exist already, cannot record it again",elmid);
		elmid.val("");
		return false;
	}*/
	 
	return true;
}

function addSRSToRetirement(lastrow){
	
	
	
	var $rowref		=lastrow.find("td:eq(0)").find("input:eq(2)").val();
	
	
	var srsclass = lastrow.find("td:eq(2)").find('select:eq(0)').val();
	
	if(srsclass == "Annual Withdrawals"){
		
		var rowexist = chkRPIncAssetRowExist($rowref);
		
		var $tblRETRow = null; 
		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
		}else{
			$tblRETRow = rowexist;
		}
		
		
		
		
		var classify = lastrow.find("td:eq(2)").find('select:eq(0)').val();
		var desc = lastrow.find("td:eq(3)").find('input:eq(0)').val();
		var amount = lastrow.find("td:eq(5)").find('input:eq(0)').val();
		var fromage = lastrow.find("td:eq(8)").find('input:eq(0)').val();
		var payoutperd = lastrow.find("td:eq(9)").find('input:eq(0)').val();
		
		var srssatury = $("#caSRSSatRetAge").val();
		srssatury = isEmpty(srssatury) ? "62" : srssatury;
		
		
		fromage = isEmpty(fromage) ? srssatury : fromage;
		payoutperd = isEmpty(payoutperd) ? "1" : payoutperd;
		
		var toage = Number(fromage) + Number(payoutperd) - 1;
		
		$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
		
		
		
			if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
		
		//$tblRETRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]').val("SRS/"+classify);
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]'),"SRS/ Annual Withdrawal"); 
		 console.log("desc----------->"+desc);
		$tblRETRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val(desc);
		 
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(4)").find('select[name=selIncAssFreq]'),"REGULAR"); 
		
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val(roundNumber( amount ) ); 	
		
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val("0"); 
			
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val(Number("0"));   
	  
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),"SELF");
	 
		$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val(fromage);
	 
		$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val(toage).prop("disabled",true);
		
		var Freq=$tblRETRow.find("td:eq(4)").find('select[name=selIncAssFreq]').val();
		var amtInc=$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val();
		var eslRate=$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val();
		var roi=$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val();
		
		$tblRETRow.find("td:eq(4)").find('span').html("$" + amtInc + " " + Freq + '<br>' + eslRate + "% Escalation" +'<br>'+ roi +"% ROI" ); //Proposed
		
		 var agestarts=$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val();

			var ageends=$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val(); 
			if(Freq == 'SINGLE'){
				$tblRETRow.find("td:eq(5)").find('span').html("Start @ " + agestarts + '<br>'); //Proposed
			}else if(Freq == 'REGULAR'){
				$tblRETRow.find("td:eq(5)").find('span').html("Start @ " + agestarts + '<br>' + "End @ " + ageends); //Proposed
			}
	}else{
		
		deleteAllRetPlanByRefId($rowref);
	}
	
	reOrderVisibleRows("IncAssRetPlgtbl");
	
	
	
	
}



/*Auto Complete*/
$("#Srs_Dialog #txtFldDlgSRSDesc").on("change",function(){
	
	var array=[];
	/*var planName=$('#lipPlanname').val();
	var descriptionInvestment=$('#txtFldDlgInvDesc').val();*/
	
	/*array.push(""+planName+"");
	array.push(""+descriptionInvestment+"");*/
	
	for(var i= 0; i<=lifePlanNamearr.length;i++)
			  { 
				if(lifePlanNamearr[i] !== undefined && lifePlanNamearr[i] != ''){
					array.push(""+lifePlanNamearr[i]+"");
				} 
				  
			  } 
	for(var i= 0; i<=propertyDescriptionarr.length;i++)
			  { 
				if(propertyDescriptionarr[i] !== undefined && propertyDescriptionarr[i] != ''){
							array.push(""+propertyDescriptionarr[i]+"");
						} 		  
		
			  }  
	
	 var autocomplete = $('#Srs_Dialog #txtFldDlgSRSDesc').typeahead(); 
	autocomplete.data('typeahead').source = array;

}); 

$("#txtFldDlgSRSPerFrom").on("change",function(){
	if(!srsEndAgeValidate($('#txtFldDlgSRSPerFrom'),$('#txtFldDlgSRSPerTo')))return;
});

$("#txtFldDlgSRSPerTo").on("change",function(){
	if(!srsEndAgeValidate($('#txtFldDlgSRSPerFrom'),$(this)))return;
});

function srsEndAgeValidate(startAgeid,elmId){
 
 
	var totAge=Number($("#txtFldDlgSRSPerTo").val());  
	
	var startAge=Number(startAgeid.val());
	
	if(isEmpty(startAge)){
		if(!isEmpty(elmId.val())){
			applyErrorToastrAlert(AGE_PAYMENT_STARTS,startAgeid);
			elmId.val("");
			$("#txtFldDlgSRSPerToDate").val(""); 
			return false;
		}
	}
	  
 
	if(!isEmpty(elmId.val())){
		if(elmId.val() <  startAge){
			applyToastrAlert("Age Payment Ends should not be Less than Age Payment Start Age ("+startAge+") ",elmId);
			elmId.val("");
			$("#txtFldDlgSRSPerToDate").val(""); 
			return false;
		}else
		if( elmId.val() > totAge){
			applyToastrAlert("Age Payment Ends should not be Greater than Projected life expectancy(Age)(Self) ("+totAge+")",elmId);
			elmId.val("");
			$("#txtFldDlgSRSPerToDate").val(""); 
			return false;
		}
	}
	return true;
} 
