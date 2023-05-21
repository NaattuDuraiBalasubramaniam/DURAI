 
/**
 * CPF Additions & Deduction Script
 */ 

$("#brsAmtCPFLifeBtn").on("click",function(){
	//if(!validateNavDetails())return;   
	fetchCurentBRSAmt($("#cpfLifeBrsamt")); 
});
	


function fetchCurentBRSAmt(curAmt){
	
	showLoader(); 
	var parameter = "DBCALLFOR=FETCH_BRS";
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CURRENT_BRS"]){ 
	 				var brsamtval=tabdets["CURRENT_BRS"];  
	 				curAmt.val(brsamtval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_BRS"]){ 
	 				var brsval=tabdets["NO_BRS"];  
	 				curAmt.val(brsval);			
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}

	$("#frsAmtCPFLifeBtn").on("click",function(){
	//if(!validateNavDetails())return;   
	fetchCurentFRSAmt($("#cpfLifeFrsamt")); 
});

function fetchCurentFRSAmt(curAmt){
	
	showLoader(); 
	var parameter = "DBCALLFOR=FETCH_FRS";
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CURRENT_FRS"]){ 
	 				var frsamtval=tabdets["CURRENT_FRS"];  
	 				curAmt.val(frsamtval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_FRS"]){ 
	 				var frsval=tabdets["NO_FRS"];  
	 				curAmt.val(frsval);	
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}

	$("#ersAmtCPFLifeBtn").on("click",function(){
	//if(!validateNavDetails())return;   
	fetchCurentERSAmt($("#cpfLifeErsamt")); 
});
function fetchCurentERSAmt(curAmt){
	
	showLoader(); 
	var parameter = "DBCALLFOR=FETCH_ERS";
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CURRENT_ERS"]){ 
	 				var ersamtval=tabdets["CURRENT_ERS"];  
	 				curAmt.val(ersamtval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_ERS"]){ 
	 				var ersval=tabdets["NO_ERS"];  
	 				curAmt.val(ersval);	
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}
$("#cpfCancelbtn").on("click",function(){
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").removeClass("mandatoryFillFlds");
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").qtip('disable');
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").qtip('destroy',true);
	adctRdlyflds(INS_MODE);  
   	getCADRows(null); 
	$('#cpfAddDed_Dialog').modal('hide'); 
});

/*Add Row Click */
$("#CpfADARow").on("click",function(){
	//if(!valadctTbl())return; 
			adctClearFlds();
			
			$("#txtFldDlgCADPkid").val(makeid(17));
			showFIPAModel('cpfAddDed_Dialog','CPF Additions & Deduction Details');   
			  $("#lifeplannamediv").addClass("hidden");
			  $("#lifepolicynodiv").addClass("hidden");
//			$("#cpfAddDed_Dialog").find("input[id=txtFldDlgCADMode]").val("I");//instant save added line
			$('#cpfAddDed_Dialog').on('shown.bs.modal', function () {
//				$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
				$("#cpfAddDed_Dialog").find("select[id=txtFldDlgCADApplicant]").focus();
				$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateadctDetails())return;
					   	adctRdlyflds(INS_MODE);  
					   	getCADRows(null); 
						$('#cpfAddDed_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getCADRows(dataset){  
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCADMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="cdPkid"><input type="hidden"  name="txtFldCADRefId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radadctSelect"/><label>&nbsp;</label></div>'; 
 
var cell2 ='<select name="txtFldCADApplicant" id="txtFldCADApplicant" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor" style="display:none"> </select>'+
'<select name="selCdApplicantType" id="selCdApplicantType"  onmouseover="fipaTooltip(this);" class="form-control editable form-tablecolor" style="display:none"> </select>'+
'<input type="hidden" name="txtFldCADDescription" id="txtFldCADDescription" class="form-control editable form-tablecolor"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 150px; word-wrap: break-word;display: inline-block;"/></span>';

var cell3 ='<select name="selCADType" id="selCADType" onmouseover="fipaTooltip(this);" class="form-control editable form-tablecolor"> </select>'+
'<input type="hidden" name="txtLifeCpfPlanName" id="txtLifeCpfPlanName"  />'+
'<input type="hidden" name="txtLifeCpfPolNo" id="txtLifeCpfPolNo"  /><div id="spanplanname" class="blueStrong"></div><div id="spanpolno" class="blueStrong"></div>'+
'<input type="hidden" name="txtFldCADYrstoRetOrTer"  />'+
'<input type="hidden" name="txtFldCADChildName"  />';

var cell4 = '<select name="selCADTypesOfTrans" id="selCADTypesOfTrans" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor" style="display:none">> </select>'+
'<input type="hidden" name="txtCADCpfAcctype" id="txtCADCpfAcctype"  />'+
'<select  name="selCADCpfAcctype" id="selCADCpfAcctype" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor" style="display:none">></select>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 150px; word-wrap: break-word;display: inline-block;"/></span>';

var cell5 = '<input type="hidden" name="txtFldCADPerFrom" maxlength="10"  id="txtFldCADPerFrom" onmouseover="fipaTooltip(this);" class="form-control editable form-tablecolor" maxlength="10"/>'+
'<input type="hidden" name="txtFldCADAgeFrom" class="form-control editable form-tablecolor"/>'+
'<input type="hidden" name="txtFldCADPerTo" maxlength="10" id="txtFldCADPerTo" onmouseover="fipaTooltip(this);" class="form-control editable form-tablecolor" maxlength="10"/>'+
'<input type="hidden" name="txtFldCADAgeTo" class="form-control editable form-tablecolor"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 150px; word-wrap: break-word;display: inline-block;"/></span>';
  
var cell6 ='<input type="hidden" name="txtFldCADAmt" id="txtFldCADAmt" onmouseover="fipaTooltip(this);" class="form-control editable form-tablecolor"/>'+
'<select name="selCADPayTerm" id="selCADPayTerm" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor" style="display:none"> </select>'+
'<select name="selCADRetrAccAge" id="selCADRetrAccAge" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor" style="display:none"> </select>'+
'<input type="hidden" name="txtFldCADCrtdBy"/><input type="hidden" name="txtFldCADCrtdDate"/>'+
'<input type="hidden" name="txtFldCADIncreRate"  id="txtFldCADIncreRate" class="form-control editable form-tablecolor"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 150px; word-wrap: break-word;display: inline-block;"/></span>';
  
/*var cell11 ='<select name="selCADRetrAccAge" id="selCADRetrAccAge" onmouseover="fipaTooltip(this);"  class="form-control editable form-tablecolor"> </select>'+
'<input type="hidden" name="txtFldCADCrtdBy"/><input type="hidden" name="txtFldCADCrtdDate"/>';*/
 

cpfAccAddDedTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );


var $lastRow = $("#cpfAccAddDedTable tbody tr:last");	
var rowCount = $('#cpfAccAddDedTable tbody tr:visible').length;
rowCount = (rowCount == 0 ) ? $('#cpfAccAddDedTable tbody tr').length : rowCount;
$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radadct"+$lastRow.index())
.parent().find('label').attr('for',"radadct"+$lastRow.index());


$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgCADPkid").val());

$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val($("#txtFldDlgCADAgeFrom").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]'),"To Date should greater than the From Date")); 
}); 
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val($("#txtFldDlgCADPerTo").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]'),"To Date should greater than the From Date")); 
});
$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val($("#txtFldDlgCADAgeTo").val());

$lastRow.find("td:eq(5)").find('span').html("Start @ "+$("#txtFldDlgCADAgeFrom").val()  +'<br>' +"End @ "+  $("#txtFldDlgCADAgeTo").val()); //Proposed



var sel1 = $("#txtFldDlgCADApplicant > option").clone();
$lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').append(sel1);
$lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').val($("#txtFldDlgCADApplicant").val());
$lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').on("change",function(){
	 changeOnCADType($(this));
//	 reverseCpfSync($lastRow);
});
 


var seltype = $("#selDlgCADApplicantType > option").clone();
$lastRow.find("td:eq(2)").find('select[name="selCdApplicantType"]').append(seltype);
$lastRow.find("td:eq(2)").find('select[name="selCdApplicantType"]').val($("#selDlgCADApplicantType").val());
$lastRow.find("td:eq(2)").find('select[name="selCdApplicantType"]').on("change",function(){
//	reverseCpfSync($lastRow);	
});
 

$lastRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val($("#txtFldDlgCADDescription").val());
$lastRow.find("td:eq(2)").find('span').html($("#txtFldDlgCADDescription").val()  +'<br>' +  $("#txtFldDlgCADApplicant").val() + '<br>'  +  $("#selDlgCADApplicantType").val()); //Proposed

var sel2 = $("#selDlgCADType > option").clone();
$lastRow.find("td:eq(3)").find('select[name="selCADType"]').append(sel2);
$lastRow.find("td:eq(3)").find('select[name="selCADType"]').val($("#selDlgCADType").val());


if($lastRow.find("td:eq(3)").find('select[name="selCADType"]').val() == "Withdrawal after Retirement"){
	$lastRow.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val($('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val());
}else if($lastRow.find("td:eq(3)").find('select[name="selCADType"]').val() == "Withdrawal for Education"){
	$lastRow.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val($('#cpfAddDed_Dialog #selDlgCpfYrToRet').val());
	$lastRow.find("td:eq(3)").find('input[name="txtFldCADChildName"]').val($('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val());
}

var sel3 = $("#selDlgCADTypesOfTrans > option").clone();
$lastRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]').append(sel3);
$lastRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]').val($("#selDlgCADTypesOfTrans").val()); 


var cpfacctypes = $("#selDlgCADCpfAcctype > option").clone();
$lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').append(cpfacctypes);
$lastRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val($("select#selDlgCADCpfAcctype option:selected").val());
$lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').val($("select#selDlgCADCpfAcctype").val());
$lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').on("change",function(){
//	reverseCpfSync($lastRow);	
});
$lastRow.find("td:eq(4)").find('span').html($("#selDlgCADTypesOfTrans").val()  +'<br>' +  $("select#selDlgCADCpfAcctype option:selected").text()); //Proposed
	
/*$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val($("#txtFldDlgCADAgeFrom").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]'),"To Date should greater than the From Date")); 
}); 
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val($("#txtFldDlgCADPerTo").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]'),"To Date should greater than the From Date")); 
});
$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val($("#txtFldDlgCADAgeTo").val());

$lastRow.find("td:eq(5)").find('span').html("Start @ "+$("#txtFldDlgCADAgeFrom").val()  +'<br>' +"End @ "+  $("#txtFldDlgCADAgeTo").val()); //Proposed

*/

$lastRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val($("#txtFldDlgCADAmt").val()); 
$lastRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').on("change",function(){
//	reverseCpfSync($lastRow);	
});

var sel4 = $("#selDlgCADPayTerm > option").clone();
$lastRow.find("td:eq(6)").find('select[name="selCADPayTerm"]').append(sel4);
$lastRow.find("td:eq(6)").find('select[name="selCADPayTerm"]').val($("#selDlgCADPayTerm").val()); 

var sel5 = $("#selDlgCADRetrAccAge > option").clone();
$lastRow.find("td:eq(6)").find('select[name="selCADRetrAccAge"]').append(sel5);
$lastRow.find("td:eq(6)").find('select[name="selCADRetrAccAge"]').val($("#selDlgCADRetrAccAge").val()); 

$lastRow.find("td:eq(6)").find('input[name="txtFldCADIncreRate"]').val($("#txtFldDlgCADIncRate").val());
var payTerm=$("#selDlgCADPayTerm option:selected").text();
$lastRow.find("td:eq(6)").find('span').html("$"+$("#txtFldDlgCADAmt").val()  +'' +  (payTerm == ("--SELECT--")? "-" : payTerm) +'<br>' +$("#txtFldDlgCADIncRate").val()+"% increment"); //Proposed

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
	crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
});

if(dataset != null){
	/*calcagein55();
	calcageinJuly2020();*/
	
	 rowCount = $('#cpfAccAddDedTable tbody tr').length;	
	 $lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		var txtFldCADDescription;
		var txtFldCADApplicant;
		var selCdApplicantType;
		var selCADType;
		var selCADTypesOfTrans;
		var selCADCpfAcctype;
		var txtFldCADAgeFrom;
		var txtFldCADAgeTo;
		var txtFldCADIncrement;
		var selCADPayTerm;
		var txtFldCADAmt;
		
		switch(data){
		
		case "cdPkid": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "cdRefId": 
			$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
			if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");
			//this line is added for Life Insurance Sync
			$lastRow.attr("rowrefid",col);}
			
			break;
			
		case "cdDescription":  
			$lastRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(col); 
			txtFldCADDescription=col;
			break;
			
			
		case "cdApplicant": 
			/*selectNullvalChk($lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]'),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]'),col);
			txtFldCADApplicant=col;
			break;
			
		case "cdApplicantType":  
			/*selectNullvalChk($lastRow.find("td:eq(3)"),col); */
			selectNullvalChkBySelectName($lastRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),col);
			selCdApplicantType=col;
			break;
			
		
		 
		case "cdDeductionType": 
			/*selectNullvalChk($lastRow.find("td:eq(4)"),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(3)").find('select[name="selCADType"]'),col);
			selCADType=col;
			break;
			
		case "yrsToRetOrTer":  
			$lastRow.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val(col); 
			break;
			
		case "cpfChildName":  
			$lastRow.find("td:eq(3)").find('input[name="txtFldCADChildName"]').val(col); 
			break;
		 
		case "lifePlanName": 
			$lastRow.find("td:eq(3)").find('input[name="txtLifeCpfPlanName"]').val(col); 
			
			var type_ = $lastRow.find("td:eq(3)").find('select[name="selCADType"]').val();
			
			if("Life Insurance" == type_){
				$lastRow.find("td:eq(3)").find('div[id="spanplanname"]').text(isEmpty(col) ? "": "Plan Name : "+col);	
			}else if("Loan Repayment" == type_){
				$lastRow.find("td:eq(3)").find('div[id="spanplanname"]').text(isEmpty(col) ? "": "Property : "+col);
			}
			break;
			
		case "lifePolNo": 
			$lastRow.find("td:eq(3)").find('input[name="txtLifeCpfPolNo"]').val(col); 
			$lastRow.find("td:eq(3)").find('div[id="spanpolno"]').text(isEmpty(col) ? "": "Policy No : "+col);   
			break;
			
		case "cdType": 
			/*selectNullvalChk($lastRow.find("td:eq(5)"),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),col);
			selCADTypesOfTrans=col;
			break;
			
		
			
		case "masterCpfAcctype":
			/*selectNullvalChk($lastRow.find("td:eq(6)"),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),col);
			var cols;
			var value=$("#selDlgCADCpfAcctype option[value='"+col+"']").text();
			if(value=="--SELECT--"){
				cols="";
			}else{
				cols=value;
			}
			$lastRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(cols); 
			selCADCpfAcctype=col;
			break;
		
		case "periodFrom": 
			$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(col); 
			break;
		
		case "periodTo": 
			$lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(col); 
			break;
			
			
		case "ageFrom": 
			$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(col); 
			txtFldCADAgeFrom=col;
			break;
		
		case "ageTo": 
			$lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(col); 
			txtFldCADAgeTo=col;
			break;
			
		case "cdDeductionAmt":
			$lastRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(col); 
			txtFldCADAmt=col;
			break;
			
		case "cdPaymentTerm":
			/*selectNullvalChk($lastRow.find("td:eq(10)"),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),col);
			selCADPayTerm=col;
			break;
			
		case "cdIncrement":
			$lastRow.find("td:eq(6)").find('input[name="txtFldCADIncreRate"]').val(col); 
			txtFldCADIncrement=col;
			break;
			
		case "cdTransReference":
			/*selectNullvalChk($lastRow.find("td:eq(11)"),col);*/
			selectNullvalChkBySelectName($lastRow.find("td:eq(6)").find('select[name="selCADRetrAccAge"]'),col);
			break;
				 
		case "cdCrtdBy": 
			$lastRow.find("td:eq(6)").find('input[name="txtFldCADCrtdBy"]').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "cdCrtdDate":
			$lastRow.find("td:eq(6)").find('input[name="txtFldCADCrtdDate"]').val(col);
			infoDetsArr.push(col);
			break;
			
		case "cdModBy":
			infoDetsArr.push(col);
			break;
			
		case "cdModDate":
			infoDetsArr.push(col);
			break;	
		}			 
		 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + txtFldCADDescription + '</span>';
		 $lastRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  + '<br>' + txtFldCADApplicant  + '<br>' + selCdApplicantType); //Proposed
			
		 /*var addboldtagselCADType = '<span style="font-weight: bold;">' + selCADType + '</span>';
		 $lastRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed	*/
		
		/* var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + selCADCpfAcctype + '</span>';
		 $lastRow.find("td:eq(4)").find('span').html(addboldtagselCADCpfAcctype  + '<br>' + selCADTypesOfTrans  ); //Proposed*/
		var accType= $lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"] option:selected').text();
		
		 var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' +accType + '</span>';
	
		 $lastRow.find("td:eq(4)").find('span').html(addboldtagselCADCpfAcctype  + '<br>' + selCADTypesOfTrans  ); //Proposed
		
		var addboldtagtxtFldCADAgeFrom = '<span style="font-weight: bold;">'+"Start @ "+ txtFldCADAgeFrom +'</span>';
		var addboldtagtxtFldCADAgeTo = '<span style="font-weight: bold;">'+"End @ "+ txtFldCADAgeTo +'</span>';
		/* $lastRow.find("td:eq(5)").find('span').html("Start @ "+txtFldCADAgeFrom  + '<br>'  +"End @ "+ txtFldCADAgeTo  ); //Proposed*/
		 $lastRow.find("td:eq(5)").find('span').html(addboldtagtxtFldCADAgeFrom  + '<br>'  + addboldtagtxtFldCADAgeTo  ); //Proposed
	
		 var payTerm= $lastRow.find("td:eq(6)").find('select[name="selCADPayTerm"] option:selected').text();
		 var addboldtagtxtFldCADAmt = '<span style="font-weight: bold;">'+"$ "+ txtFldCADAmt + " "+ (payTerm == ("--SELECT--")? "-" : payTerm) +'</span>';
		 $lastRow.find("td:eq(6)").find('span').html(addboldtagtxtFldCADAmt + '<br>' + txtFldCADIncrement+"% Increment"); //Proposed
		
		
	}
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
}
  /*
//instant save added line
if(dataset == null){
	instantCpfDedAddSave($lastRow,INS_MODE);		
}
//

$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}

//DHTML SELECT ALL
function SelAllcpfAccAddDed(obj){
	
	if($(obj).is(":checked")){
		
		$('#cpfAccAddDedTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#CpfADDRow").attr("disabled",false);
		$('#cpfAccAddDedTable tbody tr').addClass("selected");
		
		var $rowCount = $('#cpfAccAddDedTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#CpfADERow").attr("disabled",true);
			$("#CpfADDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#CpfADERow").attr("disabled",false);
			$("#CpfADDRow").attr("disabled",false);
		}else if($rowCount > 1){
		/*	$("#CpfADERow").attr("disabled",true);*/
			$("#CpfADDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#cpfAccAddDedTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#cpfAccAddDedTable tbody tr').removeClass("selected");
		
		/*$("#CpfADERow").attr("disabled",true);
		$("#CpfADDRow").attr("disabled",true);*/
		
	}
}


/*Edit Row Click */
$("#CpfADERow").on("click",function(){
	CpfADVRow();
});


/*View Row Click */
function CpfADVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#cpfAccAddDedTable tbody tr').length;	
	var $lastRow = $("#cpfAccAddDedTable tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view"); 
		return;
	} 
	
	
	/*$("#cpfAccAddDedTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	
	$("#cpfAccAddDedTable tbody").find('input[name="radadctSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#cpfAccAddDedTable tbody").find('input[name="radadctSelect"]').each(function(){ //Checkbox selection
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
	 
				 	adctRdlyflds($mode);
					adctfilldlgval($row);  
					
					setCPFObjectives($("#selDlgCADType").val());
					
					showFIPAModel('cpfAddDed_Dialog','CPF Additions & Deduction Details');  
					$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					$('#cpfAddDed_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#cpfAddDed_Dialog").find("select[id=txtFldDlgCADApplicant]").focus();
						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateadctDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			adctfilldomval($RowId,$row); 
					     		}  
//					     		reverseCpfSync($row);
//					     		instantCpfDedAddSave($row,UPD_MODE); //instant save added line
								$('#cpfAddDed_Dialog').modal('hide'); 
								adctClearFlds();
								crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
							
						});
						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
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
$("#CpfADDRow").on("click",function(){ 
	datatableDeleteRow('cpfAccAddDedTable',cpfAccAddDedTable,'SelcpfAccAddDed','CpfADERow','CpfADDRow');   
/*//	DHTML CRUD ICONS
	var rc = cpfAccAddDedTable.row().count();
	if(rc ==0){
		$("#SelcpfAccAddDed").prop("checked",false);
		crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
	}
//	DHTML CRUD ICONS
*/});

/*Clear Fields */
function adctClearFlds(){
	/*$("#cpfAddDed_Dialog").find("input[type=text]").val("");
	$("#cpfAddDed_Dialog").find("textarea").val("");
	$("#cpfAddDed_Dialog").find("select").val("");*/
	$("#cpfAddDed_Dialog").find("input,textarea,select").val('').end();
}

/*Disabled/Readonly Fields */
function adctRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#cpfAddDed_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#cpfAddDed_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateadctDetails(){
	 
	 
	/*if(!(validateFocusFlds('cpfAddDed_Dialog','txtFldDlgCADApplicant', CAD_APPLICANT))) return;
	if(!(validateFocusFlds('cpfAddDed_Dialog','selDlgCADTypesOfTrans', CAD_TRANSTYPE))) return;
	if(!(validateFocusFlds('cpfAddDed_Dialog','selDlgCADCpfAcctype', CAD_ACCTYPE))) return;
		*/ 
	
	  return true; 
}
function valadctTbl(){  
	var $RowCount = cpfAccAddDedTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#cpfAccAddDedTable tbody tr").each(function(){
			var $lastRow=$(this);
			
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), CAD_APPLICANT,SCREEN_CPFADDDED))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(5)").find('select:eq(0)'), CAD_TRANSTYPE,SCREEN_CPFADDDED))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('select:eq(0)'), CAD_ACCTYPE,SCREEN_CPFADDDED))){valid=false;return false;};
		 
		});
	} */ 
	 return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function adctfilldlgval($lastRow){
	  
//	  $('#cpfAddDed_Dialog #txtFldDlgCADMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#cpfAddDed_Dialog #txtFldDlgCADPkid').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());

 	  $('#cpfAddDed_Dialog #txtFldDlgCADDescription').val( $lastRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val());

	  $('#cpfAddDed_Dialog #txtFldDlgCADApplicant').val( $lastRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').val());
	 
	  $('#cpfAddDed_Dialog #selDlgCADApplicantType').val($lastRow.find("td:eq(2)").find('select[name="selCdApplicantType"]').val()); 
	 
	  $('#cpfAddDed_Dialog #selDlgCADType').val($lastRow.find("td:eq(3)").find('select[name="selCADType"]').val()); 
	  
	  if($lastRow.find("td:eq(3)").find('select[name="selCADType"]').val() == "Withdrawal after Retirement"){
			$('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val($lastRow.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val());
		}else if($lastRow.find("td:eq(3)").find('select[name="selCADType"]').val() == "Withdrawal for Education"){
			$('#cpfAddDed_Dialog #selDlgCpfYrToRet').val($lastRow.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val());
		}
	  
	 
	  $('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val($lastRow.find("td:eq(3)").find('input[name="txtFldCADChildName"]').val()); 
	  
	  $('#cpfAddDed_Dialog #selDlgCADTypesOfTrans').val($lastRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]').val()); 
	  $('#cpfAddDed_Dialog #selDlgCADCpfAcctype').val($lastRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').val());  

	  $('#cpfAddDed_Dialog #txtFldDlgCADPerFrom').val($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADPerTo').val($lastRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val());

	  $('#cpfAddDed_Dialog #txtFldDlgCADIncRate').val($lastRow.find("td:eq(6)").find('input[name="txtFldCADIncreRate"]').val());

	  $('#cpfAddDed_Dialog #txtFldDlgCADAmt').val($lastRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val());
	  $('#cpfAddDed_Dialog #selDlgCADPayTerm').val($lastRow.find("td:eq(6)").find('select[name="selCADPayTerm"]').val());
	  $('#cpfAddDed_Dialog #selDlgCADRetrAccAge').val($lastRow.find("td:eq(6)").find('select[name="selCADRetrAccAge"]').val()); 
	  
	  $('#cpfAddDed_Dialog #txtFldDlgCADCrtdBy').val($lastRow.find("td:eq(6)").find('input[name="txtFldCADCrtdBy"]').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADCrtdDate').val($lastRow.find("td:eq(6)").find('input[name="txtFldCADCrtdDate"]').val());
	  
	  $('#cpfAddDed_Dialog #txtFldDlgCADAgeFrom').val($lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADAgeTo').val($lastRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val());

	  

	  $("#lifepolicynospan").text("");
	  $("#lifeplannamespan").text("");
	  if(!isEmpty($lastRow.find("td:eq(3)").find('input[name="txtLifeCpfPlanName"]').val())){
		  $("#lifeplannamediv").removeClass("hidden");
		  $("#lifepolicynodiv").removeClass("hidden");
		  $("#lifepolicynospan").text($lastRow.find("td:eq(3)").find('input[name="txtLifeCpfPolNo"]').val());
		  $("#lifeplannamespan").text($lastRow.find("td:eq(3)").find('input[name="txtLifeCpfPlanName"]').val());
	  }else{
		  $("#lifeplannamediv").addClass("hidden");
		  $("#lifepolicynodiv").addClass("hidden");
	  }
}

/* Filling Table Fields*/
function adctfilldomval($RowId,$row){
	$row.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val($("#txtFldDlgCADDescription").val());  
	
	$row.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').val($("#txtFldDlgCADApplicant").val());  
	$row.find("td:eq(2)").find('select[name="selCdApplicantType"]').val($("#selDlgCADApplicantType").val());
	
	
	$row.find("td:eq(2)").find('span').html($("#txtFldDlgCADDescription").val()  +'<br>' +  $("#txtFldDlgCADApplicant").val() + '<br>'  +  $("#selDlgCADApplicantType").val()); //Proposed


	if($("#selDlgCADType").val() == "Withdrawal after Retirement"){
		$row.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val($('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val());
	}else if($("#selDlgCADType").val() == "Withdrawal for Education"){
		$row.find("td:eq(3)").find('input[name="txtFldCADYrstoRetOrTer"]').val($('#cpfAddDed_Dialog #selDlgCpfYrToRet').val());
	}
	   
	$row.find("td:eq(3)").find('input[name="txtFldCADChildName"]').val($('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val()); 
	
	$row.find("td:eq(3)").find('select[name="selCADType"]').val($("#selDlgCADType").val()); 
	$row.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]').val($("#selDlgCADTypesOfTrans").val()); 
 	$row.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').val($("#selDlgCADCpfAcctype").val()); 

	$row.find("td:eq(4)").find('span').html( $("select#selDlgCADCpfAcctype option:selected").text() +'<br>' + $("#selDlgCADTypesOfTrans").val() ); //Proposed

	$row.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val($("#txtFldDlgCADPerFrom").val()); 
	$row.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val($("#txtFldDlgCADPerTo").val()); 
	
	$row.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val($('#cpfAddDed_Dialog #txtFldDlgCADAgeFrom').val());
	$row.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val($('#cpfAddDed_Dialog #txtFldDlgCADAgeTo').val());
	$row.find("td:eq(5)").find('span').html("Start @ "+$('#cpfAddDed_Dialog #txtFldDlgCADAgeFrom').val()  +'<br>' +"End @ "+  $('#cpfAddDed_Dialog #txtFldDlgCADAgeTo').val()); //Proposed

	$row.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val($("#txtFldDlgCADAmt").val()); 
	$row.find("td:eq(6)").find('select[name="selCADPayTerm"]').val($("#selDlgCADPayTerm").val());
	$row.find("td:eq(6)").find('select[name="selCADRetrAccAge"]').val($("#selDlgCADRetrAccAge").val());  
	$row.find("td:eq(6)").find('input[name="txtFldCADIncreRate"]').val($("#txtFldDlgCADIncRate").val()); 
	
	var payTerm=$("#selDlgCADPayTerm option:selected").text()
	$row.find("td:eq(6)").find('span').html("$"+$("#txtFldDlgCADAmt").val()  +' ' +  (payTerm == ("--SELECT--")? "-" : payTerm) +'<br>' +$("#txtFldDlgCADIncRate").val()+"% increment"); //Proposed

//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
}
/*###########################################################################################################################################################*/


//instant save added line
$("#cpfAddDed_Dialog").find("input,select,textarea").on("change",function(){
	$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});



$("#txtFldDlgCADApplicant").on("change",function(){
	 changeOnCADType($(this));
});


function changeOnCADType(elmid){
	var $elmVal=$(elmid).val();
	if(!isEmpty($elmVal)){ 
		 var selectedIndex=$("#txtFldDlgCADApplicant option").index($("#txtFldDlgCADApplicant option:selected"));
	if(selectedIndex == 1){
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("Self");
	}else if(selectedIndex == 2){
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("Spouse");
	}else {
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("");
	} 
	}else{
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("");
	}
}

$("#txtFldDlgCADPerFrom").change(function(){
	checkDateFormat($(this))
	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});

/*$("#txtFldDlgCADPerFrom").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgCADPerTo").change(function(){    
	checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
}); 

/*$("#txtFldDlgCADPerTo").change(function(){    
 checkDateFormat($(this));
}); */
 
$('#CADPerTopicker').change(function(){  
   	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});
  
$('#CADPerFrmpicker').change(function(){   
   	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});
   
function reverseCpfSync($row){
	
	//Retirement Data 
	var $rowref=$row.find("td:eq(0)").find("input.rowrefid");
	var $rowrefval=$rowref.val(); 
	
		if(isValidObject($rowref)){ 
	
	var syncOn=$rowrefval.substring(0,3); 
	 var ownership=$row.find("td:eq(3)").find('select:eq(0)').val();
	 
	 var cpfacc;
	 var paymentmtd=$row.find("td:eq(6)").find('input:eq(0)').val(); 
	 if(paymentmtd == "Ordinary"){cpfacc="CPFOA";}
	 else if(paymentmtd == "Special"){cpfacc="CPFSA";}
	 else if(paymentmtd == "Medisave"){cpfacc="CPFMA";}
	 else if(paymentmtd == "Retirement"){cpfacc="CPFRA";}
	 else {cpfacc="";}
	 
	
	 var amtinv=Number($row.find("td:eq(9)").find('input:eq(0)').val()); 
	
	if(syncOn == "INV"){
		$("#fnaInvestmentTbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){ 
			if($rowrefval == $(this).val()){ 
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Investment Screen !"); 
			 $(this).closest("tr").find("td:eq(5)").find('select[name="selInvPaymethod"]').val(cpfacc);//Payment method
			 $(this).closest("tr").find("td:eq(2)").find('select[name="selInvOwner"]').val(ownership); //ownership
			 $(this).closest("tr").find("td:eq(5)").find('input[name="txtFldInvAmount"]').val(amtinv);//amount invested 
			 //Retirement table change
			 var $rowref=$(this).find("td:eq(0)").find("input.rowrefid");
		 		if(isValidObject($rowref)){ 
//			 			syncInvestTblEditRow($row);
			 		
		 		}
			}
		});
	}
	 
	
	if(syncOn == "PRO"){
		$("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){  
			
			if($rowrefval == $(this).val()){
				 
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Property Ownership Screen !");
			var exits=Number($(this).closest("tr").find("td:eq(9)").find('input:eq(0)').val());
			
			if(ownership =="Self"){
				 if(!isEmpty(exits)){
					 $(this).closest("tr").find("td:eq(11)").find('input:eq(0)').val(exits+amtinv);//amount invested  
				 }else{
					 $(this).closest("tr").find("td:eq(11)").find('input:eq(0)').val(amtinv);//amount invested
				 }
			}
			
			if(ownership =="Spouse"){
				 if(!isEmpty(exits)){
					 $(this).closest("tr").find("td:eq(13)").find('input:eq(0)').val(exits+amtinv);//amount invested 
				 }else{
					 $(this).closest("tr").find("td:eq(13)").find('input:eq(0)').val(amtinv);//amount invested
				 }
			} 
			 $(this).closest("tr").find("td:eq(4)").find('select:eq(0)').val(ownership); //ownership 
			 
			 //Retirement table change 
			 var $rowref=$(this).find("td:eq(0)").find("input.rowrefid");
		 		if(isValidObject($rowref)){ 
//		 			syncPropTblEditRow($row);
		 		}else{
		 			syncPropTblRow();
		 		}
		 		
			}
		});
	}
	
	
		}
		
		if(isValidObject($("#lipPremiumsrc").attr("rowrefid"))){
		//Life Insurance reverse sync
		var premsrcrowref=$("#lipPremiumsrc").attr("rowrefid").length;
		if(premsrcrowref >0){
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Life Insurance Screen !");
			$("#lipPremiumsrc").val(cpfacc);
			$("#lipSa").val(amtinv);
			$("#lipOwner").val(ownership); 
			
			 //Retirement table change
			 var $rowref=$("#sellipCoveragetype").attr("rowrefid").length;
			 if($rowref > 0){	
				 SyncLifeToRetEdit();
		 	 }	
		}
	 }
}

 



function getCPFContribution(dob,monthlywage) {
	
	var contirb = [0,0,0,0,0];
	var employeecont = "",employercontrib="";


	if (!(isEmpty(dob))) {
		
		showLoader();
		
		var parameter = "DBCALLFOR=GET_CPF_CONTRIB&strdob="+ dob+"&monthlywage="+monthlywage ;
		
		$.ajax({
			type : "POST",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : false,
			cache:false,
			success : function(data,statusText) {	

				var retval = data;

				hideLoader();

				for ( var val in retval) {

					var tabdets = retval[val];

					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}

					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}
				 
					
					contirb[0] = isNaN(Number(tabdets["cpfEmployeeContrib"]))?"0":Number(tabdets["cpfEmployeeContrib"]);
					contirb[1] = isNaN(Number(tabdets["cpfEmployerContrib"]))?"0":Number(tabdets["cpfEmployerContrib"]);
					contirb[2] = isNaN(Number(tabdets["cpfMonthlyLimit"]))?"0":Number(tabdets["cpfMonthlyLimit"]);
					contirb[3] = isNaN(Number(tabdets["cpfAnnualLimit"]))?"0":Number(tabdets["cpfAnnualLimit"]);
					contirb[4] = isNaN(Number(tabdets["cpfAddlAmt"]))?"0":Number(tabdets["cpfAddlAmt"]);


				}
			
				
			},
 
			error : function(request, status, error) {
				applyErrorToastrAlert("Please Contact System Administrator!");
				hideLoader();				
			}
		});
	}
	
	
	return contirb;
	
}


$("#btnCPFContrib").on("click",function(){
	calcCPFContribution();
});

function calcCPFContribution(){

	var selfdob = $("#dfSelfDob").val();
	var slfow = $("#incsrcSelfEmpMonthly").val();;
	var slfOW_data=$("#incsrcSelfEmpMonthly").val();//self OW from Exp fd flow
	slfOW_data = Number(isEmpty(slfOW_data) ? "0" : slfOW_data);
	
	var slfaw = $("#incsrcSelfEmpAddlwage").val();
	var slfAW_data=Number(isEmpty(slfaw) ? "0" : slfaw);
	
	if(!isEmpty(selfdob) && !isEmpty(slfow)){
		
		var arr = getCPFContribution(selfdob,slfOW_data);
		
		var ee = arr[0];
		var er = arr[1];
		var ml = arr[2];
		var al = arr[3];
		var addl = arr[4];
		
		slfAW_data = (addl > slfAW_data ? slfAW_data : addl);
		ml =  slfOW_data > ml ? ml : slfOW_data;
		
		var selftotcontrib = ( Number( ml ) * 12 ) + Number( slfAW_data );
		
		$("input[name=ccEmpleContrbSelf]").val(isNaN(Number(roundNumber(ee * selftotcontrib)))?"0":Number(roundNumber(ee * selftotcontrib)));
		$("input[name=ccEmplrContrbSelf]").val(isNaN(Number(roundNumber(er * selftotcontrib)))?"0":Number(roundNumber(er * selftotcontrib))); 
		
		
	}
	
	
//	if(!isValidObject(ee)){ee="";}
//	if(!isValidObject(er)){er="";}
	
	
	var spsdob = $("#dfSpsDob").val();
	var spsow = $("#incsrcSpsEmpMonthly").val();
	//var spsOW_data=Number($("#incsrcSpsEmpMonthly").val()) * 12;//spouse OW from Exp fd flow
	var spsOW_data=$("#incsrcSpsEmpMonthly").val();
	spsOW_data=Number(isEmpty(spsOW_data) ? "0" : spsOW_data);
	var spsaw = $("#incsrcSpsEmpAddlwage").val();
	var spsAW_data=Number(isEmpty(spsaw) ? "0" : spsaw);
	if(!isEmpty(spsdob) && !isEmpty(spsow)){
		
		var arr1 = getCPFContribution(spsdob,spsOW_data);
		
		
		var ee1 = arr1[0];
		var er1 = arr1[1];
		var ml1 = arr1[2];
		var al1 = arr1[3];
		var addl1 = arr1[4];
		
	    if(!isValidObject(ee1)){ee1="";}
		if(!isValidObject(er1)){er1="";}
		if(!isValidObject(ml1)){er1="";}
		if(!isValidObject(al1)){er1="";}
		if(!isValidObject(addl1)){addl1="";}
		
		
		spsAW_data = (addl1 > spsAW_data ? spsAW_data : addl1);
		ml1 =  spsOW_data > ml1 ? ml1 : spsOW_data;
		
		var spsftotcontrib = ( Number( ml1 ) * 12 ) + Number( spsAW_data );
		
		
		$("input[name=ccEmpleContrbSps]").val(isNaN(Number(roundNumber(ee1 * spsftotcontrib )))?"0":Number(roundNumber(ee1 * spsftotcontrib )));
		$("input[name=ccEmplrContrbSps]").val(isNaN(Number(roundNumber(er1 * spsftotcontrib )))?"0":Number(roundNumber(er1 * spsftotcontrib ))); 
		 
		
		
	}
	
	callSumOfCpfMth();
	

}


var cpf_proj_oa1,cpf_proj_sa1,cpf_proj_ma1;
var cpf_proj_ra1,cpf_proj_oa2,cpf_proj_sa2,cpf_proj_ma2;

$("#btnCPFProjection").on("click",function(){

	setTimeout(function(){
		showLoader();
	}, 200);
	
	var fnaId = $("#fnaId").val();
	

	 $('#cpfProjection_Dlg').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:false
	});	
	
	
	
	if ($.fn.DataTable.isDataTable( '#cpf_proj_oa1,#cpf_proj_sa1,#cpf_proj_ma1,#cpf_proj_ra1,#cpf_proj_oa2,#cpf_proj_sa2,#cpf_proj_ma2') ) {
		cpf_proj_oa1.destroy();
		cpf_proj_sa1.destroy();
		cpf_proj_ma1.destroy();
		cpf_proj_ra1.destroy();
		
		cpf_proj_oa2.destroy();
		cpf_proj_sa2.destroy();
		cpf_proj_ma2.destroy();
	}
	
	var oa_ds=[],sa_ds=[],ma_ds=[];
	var ra_ds=[],oar_ds=[],sar_ds=[],mar_ds=[];
	var before_retr_data = [],after_retr_data=[];
	
	
	var cpf_oa_header=[
	                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
	                {"data":"SELF_OA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                ];
	
	var cpf_sa_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_SA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	var cpf_ma_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_MA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	var cpf_ra_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_RA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	$('#cpfProjection_Dlg').on('shown.bs.modal', function() {
//		setTimeout(function(){
//			hideLoader();
//		}, 300);
	});
	var parameter = "DBCALLFOR=GET_CPF_PROJECTION&strFnaId="+ fnaId ;
//	alert("Please wait... CPF Projection is generating...");
//	console.log(parameter);
//	var ajax_succ=false;
	
	$.ajax({
		type : "POST",
		url : servletName,
		data : parameter,
		dataType : "json",
		async : false,
		cache:false,
		success : function(data,statusText) {	
			
			
			 $('#cpfProjection_Dlg').modal("show");
			 
			 
			var retval = data;

//			hideLoader();

			for ( var val in retval) {

				var tabdets = retval[val];


				if (tabdets["SESSION_EXPIRY"]) {
					window.location = BASE_URL + SESSION_EXP_JSP;
					return;
				}

				if (tabdets["DB_ERROR"]) {
					window.location = BASE_URL + DB_EXP_JSP;
					return;
				}
				
				var age = Number(tabdets["SELF_AGE"]);
				
				
//				console.log(tabdets["FNA_ID"] + " <=> " + age );
				
				if( age <= 54){
					oa_ds.push(tabdets);
					sa_ds.push(tabdets);
					ma_ds.push(tabdets);
					
					
					
					before_retr_data.push({"AGE":age,
											"OA":tabdets["SELF_OA_BAL"],
											"OA_END":tabdets["SELF_OA_ENDBAL"],
											"SA":tabdets["SELF_SA_BAL"],
											"SA_END":tabdets["SELF_SA_ENDBAL"],
											"MA":tabdets["SELF_MA_BAL"],
											"MA_END":tabdets["SELF_MA_ENDBAL"]
										});
				}
				
				if(age > 54){
					ra_ds.push(tabdets);
					oar_ds.push(tabdets);
					sar_ds.push(tabdets);
					mar_ds.push(tabdets);
					
					after_retr_data.push({"AGE":age,
						"OA":tabdets["SELF_OA_BAL"],
						"OA_END":tabdets["SELF_OA_ENDBAL"],
						"SA":tabdets["SELF_SA_BAL"],
						"SA_END":tabdets["SELF_SA_ENDBAL"],
						"MA":tabdets["SELF_MA_BAL"],
						"MA_END":tabdets["SELF_MA_ENDBAL"]
					});
				}
				
				

			}
			
				
			
			cpf_proj_oa1=$('#cpf_proj_oa1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_oa"> ip>flt>', 
			    columns: cpf_oa_header,  
		        data:oa_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_oa").html('<h3><center>Ordinary</center></h3>');
			
			
			cpf_proj_sa1=$('#cpf_proj_sa1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_sa"> ip>flt>',  
			    columns: cpf_sa_header,  
		        data:sa_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_sa").html('<h3><center>Special</center></h3>');
			
			cpf_proj_ma1=$('#cpf_proj_ma1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ma"> ip>flt>',  
			    columns: cpf_ma_header,  
		        data:ma_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();
			$("div.header_ma").html('<h3><center>Medisave</center></h3>');
			
			
			cpf_proj_ra1=$('#cpf_proj_ra1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ra"> ip>flt>', 
			    columns: cpf_ra_header,  
		        data:ra_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [4],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_ra").html('<h3><center>Retirement</center></h3>');
			
			cpf_proj_oa2=$('#cpf_proj_oa2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_oa2"> ip>flt>', 
			    columns: cpf_oa_header,  
		        data:oar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_oa2").html('<h3><center>Ordinary</center></h3>');
			
			
			cpf_proj_sa2=$('#cpf_proj_sa2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_sa2"> ip>flt>',  
			    columns: cpf_sa_header,  
		        data:sar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_sa2").html('<h3><center>Special</center></h3>');
			
			cpf_proj_ma2=$('#cpf_proj_ma2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ma2"> ip>flt>',  
			    columns: cpf_ma_header,  
		        data:mar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();
			$("div.header_ma2").html('<h3><center>Medisave</center></h3>');
			
			
			

			 c3.generate({
				
			    bindto: '#before_retire_chart',
			   
			    title: {
			        show: false,
			        text: 'CPF Projection Analysis - Before Retirement',
			        position: 'top-center',  
			        padding: { top: 20, right: 20, bottom: 40, left: 50}
			      },
			    grid: {
			        x: { show: true },
			        y: { show: true }
			    },
			    zoom: {
			        enabled: true
			    },
			    legend: {
			        position: 'right'
			    },
			    
			    
			    
			    data: {
			    	json: before_retr_data,
			    	keys :{x: 'AGE',value: ['OA','OA_END','SA','SA_END','MA','MA_END']},
			    	type : "bar",
			    	types : {"OA_END" : "area","SA_END":"line","MA_END":"spline"},
			    	colors: {
			    			 "OA" : function(d) { return d.value < 0 ? 'red' : '#F9A12EFF'; },
			    			 "OA_END": function(d) { return d.value < 0 ? 'red' : '#00B1D2FF'; } ,
			    			 "SA" : function(d) { return d.value < 0 ? 'red' : '#078282FF'; },
			    			 "SA_END": function(d) { return d.value < 0 ? 'red' : '#FDD20EFF'; },
			    			 "MA" : function(d) { return d.value < 0 ? 'red' : '#28334AFF'; },
			    			 "MA_END": function(d) { return d.value < 0 ? 'red' : '#79C000FF'; }
			    			 },
			    	labels: false,
			    	names: {
					      'OA': 'Ordinary A/c - Opening Balance',
					      'SA': 'Special A/c - Opening Balance',
					      'MA': 'Medisave A/c -  Opening Balance',
					      
					      'OA_END': 'Ordinary A/c - Closing Balance',
					      'SA_END': 'Special A/c - Closing Balance',
					      'MA_END': 'Medisave A/c - Closing Balance'
					    },
					 order: null 
			    	
			    },
			    axis: {
			    	 x: { label: 'Age'},
			    	 y : {
			    		 label: 'Amount',
			             tick: {
			                 format: d3.format("$,")
			             },
			             show: true
			         }
			    },
			    tooltip: {
			        format: {
			            title: function (d) { return 'Available CPF balance at the Age of ' + d; },
			            value: function (value, ratio, id) {
			                var format =  d3.format('$,');
			                return format(value);
			            }
			        }
			    },
			    size: {
			        height: 500,
			        width:850
			    }
			    
			});
			 
			 
			 c3.generate({
					
				    bindto: '#after_retire_chart',
				   
				    title: {
				        show: false,
				        text: 'CPF Projection Analysis - After Retirement',
				        position: 'top-center',  
				        padding: { top: 20, right: 20, bottom: 40, left: 50}
				      },
				    grid: {
				        x: { show: true },
				        y: { show: true }
				    },
				    zoom: {
				        enabled: true
				    },
				    legend: {
				        position: 'right'
				    },
				    
				    
				    
				    data: {
				    	json: after_retr_data,
				    	keys :{x: 'AGE',value: ['OA','OA_END','SA','SA_END','MA','MA_END']},
				    	type : "bar",
				    	types : {"OA_END" : "area","SA_END":"line","MA_END":"spline"},
				    	colors: {
				    			 "OA" : function(d) { return d.value < 0 ? 'red' : '#F9A12EFF'; },
				    			 "OA_END": function(d) { return d.value < 0 ? 'red' : '#00B1D2FF'; } ,
				    			 "SA" : function(d) { return d.value < 0 ? 'red' : '#078282FF'; },
				    			 "SA_END": function(d) { return d.value < 0 ? 'red' : '#FDD20EFF'; },
				    			 "MA" : function(d) { return d.value < 0 ? 'red' : '#28334AFF'; },
				    			 "MA_END": function(d) { return d.value < 0 ? 'red' : '#79C000FF'; }
				    			 },
				    	labels: false,
				    	names: {
						      'OA': 'Ordinary A/c - Opening Balance',
						      'SA': 'Special A/c - Opening Balance',
						      'MA': 'Medisave A/c -  Opening Balance',
						      
						      'OA_END': 'Ordinary A/c - Closing Balance',
						      'SA_END': 'Special A/c - Closing Balance',
						      'MA_END': 'Medisave A/c - Closing Balance'
						    },
						 order: null 
				    	
				    },
				    axis: {
				    	 x: { label: 'Age'},
				    	 y : {
				    		 label: 'Amount',
				             tick: {
				                 format: d3.format("$,")
				             },
				             show: true
				         }
				    },
				    tooltip: {
				        format: {
				            title: function (d) { return 'Available CPF balance at the Age of ' + d; },
				            value: function (value, ratio, id) {
				                var format =  d3.format('$,');
				                return format(value);
				            }
				        }
				    },
				    size: {
				        height: 500,
				        width:850
				    }
				    
				});
			 
			
				 c3.generate({
			 
			    bindto: '#after_retire_charts',
			   
			    title: {
			        show: false,
			        text: 'CPF Projection Analysis - After Retirement',
			        position: 'top-center',  
			        padding: { top: 20, right: 20, bottom: 40, left: 50}
			      },
			    grid: {
			        x: { show: true },
			        y: { show: true }
			    },
			    zoom: {
			        enabled: true
			    },
			    legend: {
			        position: 'right'
			    },
			    
			    
			    
			    data: {
			    	json: after_retr_data,
			    	keys :{x: 'AGE',value: ['OA','OA_END','SA','SA_END','MA','MA_END']},
			    	type : "bar",
			    	types : {"OA_END" : "area","SA_END":"line","MA_END":"spline"},
			    	colors: {
			    			 "OA" : function(d) { return d.value < 0 ? 'red' : '#F9A12EFF'; },
			    			 "OA_END": function(d) { return d.value < 0 ? 'red' : '#00B1D2FF'; } ,
			    			 "SA" : function(d) { return d.value < 0 ? 'red' : '#078282FF'; },
			    			 "SA_END": function(d) { return d.value < 0 ? 'red' : '#FDD20EFF'; },
			    			 "MA" : function(d) { return d.value < 0 ? 'red' : '#28334AFF'; },
			    			 "MA_END": function(d) { return d.value < 0 ? 'red' : '#79C000FF'; }
			    			 },
			    	labels: false,
			    	names: {
					      'OA': 'Ordinary A/c - Opening Balance',
					      'SA': 'Special A/c - Opening Balance',
					      'MA': 'Medisave A/c -  Opening Balance',
					      
					      'OA_END': 'Ordinary A/c - Closing Balance',
					      'SA_END': 'Special A/c - Closing Balance',
					      'MA_END': 'Medisave A/c - Closing Balance'
					    },
					 order: null 
			    	
			    },
			    axis: {
			    	 x: { label: 'Age'},
			    	 y : {
			    		 label: 'Amount',
			             tick: {
			                 format: d3.format("$,")
			             },
			             show: true
			         }
			    },
			    tooltip: {
			        format: {
			            title: function (d) { return 'Available CPF balance at the Age of ' + d; },
			            value: function (value, ratio, id) {
			                var format =  d3.format('$,');
			                return format(value);
			            }
			        }
			    },
			    size: {
			        height: 500,
			        width:850
			    }
			    
			});
			
			
			 setTimeout(function(){
					hideLoader();
				}, 150);
			 
		
			
		},

		error : function(request, status, error) {
			applyErrorToastrAlert("Please Contact System Administrator!");
//			hideLoader();		
			
			setTimeout(function(){
				hideLoader();
			}, 150);
		}
	});
	
		
	
	
	
	
	

	
	
	
	
	
});



$("#selDlgCADType").on("change",function(){

	var thisval = $(this).val();	
	setCPFObjectives(thisval);
	
});



function setCPFObjectives(thisval){
	$("#col_cpf_prcnt_ret").addClass("hidden");
	$("#col_cpf_child_name").addClass("hidden");
	
	if(thisval == "Withdrawal after Retirement"){
		$("#col_cpf_prcnt_ret").removeClass("hidden");
		$("#col_cpf_child_name").addClass("hidden");
	}
	
	if(thisval == "Withdrawal for Education"){
		$("#col_cpf_prcnt_ret").addClass("hidden");
		$("#col_cpf_child_name").removeClass("hidden");
		
	}
	
}



$("#selDlgCPFNameOfChild").on("change",function(){
	getChildYrtoTerEduc($(this),$("#selDlgCpfYrToRet"));
});

$("#selDlgCADType,#selDlgCpfYrToRet").on("change",function(){
	yrtoretirementChkCPF($("#selDlgCpfYrToRet"));
});

function yrtoretirementChkCPF(elmid){
	var yrtoretirement=elmid.val(); 
	var oriretyr=$("#retYrstoret").val();
//	console.log("yrtoretirement->"+yrtoretirement+",oriretyr->"+oriretyr)
	if(!isEmpty(yrtoretirement) && !isEmpty($("#selDlgCADType").val())){
	if($("#selDlgCADType").val() == "Withdrawal after Retirement"){
		if(oriretyr < yrtoretirement){  
			$("#alertRetyrMsgCPF").removeClass("hidden"); 
//			$("#selDlgInvYrToRet").val(oriretyr);
		}else{
			$("#alertRetyrMsgCPF").addClass("hidden"); 
		}
	}else{
		$("#alertRetyrMsgCPF").addClass("hidden"); 
	}
	}else{
		$("#alertRetyrMsgCPF").addClass("hidden"); 
	}
	
	return true;
}

$( document ).ready(function() {
	$('#btn_print_pdf').click(function () {
    
		/*pdfOperation('','','','','','Before_Retirement','After_Retirement','cpf_proj_oa1','cpf_proj_sa1','cpf_proj_ma1','cpf_proj_ra1','cpf_proj_oa2','cpf_proj_sa2','cpf_proj_ma2');*/
	      $('#sectncontent').css('height', '100%');
	      $('.DTFC_LeftWrapper').css('display','none');
	      $('.DTFC_RightWrapper').css('display','none');
		  $('#cpf_proj_oa1').removeClass("dataTables_scroll");
		  $('#cpf_proj_oa1').removeClass("dataTables_wrapper");
		  
		  $('#cpf_proj_ra1').removeClass("dataTables_scroll");
		  $('#cpf_proj_ra1').removeClass("dataTables_wrapper");
		  
		  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
		 
		  $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		  
		   var cpf_proj_oa1_divHeight =  $("#cpf_proj_oa1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_oa1_div').css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
		  
		   var cpf_proj_sa1_divHeight =  $("#cpf_proj_sa1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_sa1_div').css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
		   
		   var cpf_proj_ma1_divHeight =  $("#cpf_proj_ma1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ma1_div').css('min-height', (cpf_proj_ma1_divHeight*3)+'px');

		   var cpf_proj_ra1_divHeight =  $("#cpf_proj_ra1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ra1_div').css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
		   
		   var cpf_proj_oa2_divHeight =  $("#cpf_proj_oa2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_oa2_div').css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_sa2_divHeight =  $("#cpf_proj_sa2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_sa2_div').css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_ma2_divHeight =  $("#cpf_proj_ma2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ma2_div').css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
		   
		   
		  $('#cpf_proj_oa1').attr('border', '1');                                               
		  $('#cpf_proj_sa1').attr('border', '1');   
	      $('#cpf_proj_ma1').attr('border', '1');     
	      
	     
	      
	      $('#cpf_proj_ra1').attr('border', '1');    
	      $('#cpf_proj_oa2').attr('border', '1');    
	      $('#cpf_proj_sa2').attr('border', '1');    
	      $('#cpf_proj_ma2').attr('border', '1');   
	      
	     
	     
	      $('.nav-tabs > .active').next('li').find('a').trigger('click');
	      $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
	     
	      
	    
	      
	      $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	      $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		
		  $('.dataTables_scrollBody').css('max-height','none');
		  $(".c3-line").css("fill","none");
		  
		  
	        var mywindow = window.open('', '', '');
		    mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>Before_Retirement</u></h3>");
		    mywindow.document.write($("#Before_Retirement").html());
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>After_Retirement</u></h3>");
		    mywindow.document.write($("#After_Retirement").html());
		    mywindow.document.write('</body></html>');
		    mywindow.document.close();
		    mywindow.print();
		    
		    $("#cpf_proj_oa1").css('border','');
		    $("#cpf_proj_sa1").css('border','');
		    $("#cpf_proj_ma1").css('border','');
		    
		    $('#cpf_proj_ra1').attr('border', '');    
		    $('#cpf_proj_oa2').attr('border', '');    
		    $('#cpf_proj_sa2').attr('border', '');    
		    $('#cpf_proj_ma2').attr('border', '');  
		    
		       $('#cpf_proj_oa1_div').css('min-height', (cpf_proj_oa1_divHeight)+'px');
			  
			   $('#cpf_proj_sa1_div').css('min-height', (cpf_proj_sa1_divHeight)+'px');
			   
			   $('#cpf_proj_ma1_div').css('min-height', (cpf_proj_ma1_divHeight)+'px');

			   $('#cpf_proj_ra1_div').css('min-height', (cpf_proj_ra1_divHeight)+'px');
			   
			   $('#cpf_proj_oa2_div').css('min-height', (cpf_proj_oa2_divHeight)+'px');
			   
			   $('#cpf_proj_sa2_div').css('min-height', (cpf_proj_sa2_divHeight)+'px');
			   
			   $('#cpf_proj_ma2_div').css('min-height', (cpf_proj_ma2_divHeight)+'px');
		    
		    $('.DTFC_LeftWrapper').css('display','block');
		    $('.DTFC_RightWrapper').css('display','block');
			$('#cpf_proj_oa1').addClass("dataTables_scroll");
			$('#cpf_proj_oa1').addClass("dataTables_wrapper");
			$('#cpf_proj_ra1').addClass("dataTables_scroll");
			$('#cpf_proj_ra1').addClass("dataTables_wrapper");
    	    $('#sectncontent').css('height', '73vh'); 
    
   
				/*var borderColor="#1D655C"; var backgroundColor="#243665";  
				var mywindow = window.open('', '', '');
			    mywindow.document.write('<html><head><title>CPF Projection analysis report</title></head>');
			    mywindow.document.write("<body style='border:solid 2px "+borderColor+"'>");
			    mywindow.document.write("<div style='background-color: "+backgroundColor+";height: 77px;position: fixed; width: 100%;left:0;visibility: visible;'></div>");
			    mywindow.document.write('</body></html>');
			    mywindow.document.close();
			    mywindow.print();	*/
			  
			  
			    
	});
	
	/*function pdfOperation(htmlPge1,htmlPge2,htmlPge3,htmlPge4,htmlPge5,htmlPge6,htmlPge7,cpf_proj_oa1,cpf_proj_sa1,cpf_proj_ma1,cpf_proj_ra1,cpf_proj_oa2,cpf_proj_sa2,cpf_proj_ma2){
		
		
		  $('#sectncontent').css('height', '100%');
	      $('.DTFC_LeftWrapper').css('display','none');
	      $('.DTFC_RightWrapper').css('display','none');
	  	  $("#"+cpf_proj_oa1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_oa1).removeClass("dataTables_wrapper");
		  
		  $("#"+cpf_proj_ra1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_ra1).removeClass("dataTables_wrapper");
		  
		  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
		 
		  $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		  
		   var cpf_proj_oa1_divHeight =  $("#"+cpf_proj_oa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
		   
		   var cpf_proj_sa1_divHeight =  $("#"+cpf_proj_sa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
		   
		   var cpf_proj_ma1_divHeight =  $("#"+cpf_proj_ma1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight*3)+'px');
		   
		   var cpf_proj_ra1_divHeight =  $("#"+cpf_proj_ra1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
		   
		   var cpf_proj_oa2_divHeight =  $("#"+cpf_proj_oa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_sa2_divHeight =  $("#"+cpf_proj_sa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_ma2_divHeight =  $("#"+cpf_proj_ma2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
		   
		  
		  $("#"+cpf_proj_oa1).attr('border', '1');                                               
		  $("#"+cpf_proj_sa1).attr('border', '1');   
	      $("#"+cpf_proj_ma1 ).attr('border', '1');     
	      
	     
	              
	      $("#"+cpf_proj_ra1).attr('border', '1');    
	      $("#"+cpf_proj_oa2).attr('border', '1');    
	      $("#"+cpf_proj_sa2).attr('border', '1');    
	      $("#"+cpf_proj_ma2).attr('border', '1');   
	      
	     
	     
	      $('.nav-tabs > .active').next('li').find('a').trigger('click');
	      $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
	     
	      
	    
	      
	      $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	      $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		
		  $('.dataTables_scrollBody').css('max-height','none');
		  $(".c3-line").css("fill","none");
		  
		  
	        var mywindow = window.open('', '', '');
		    mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>Before_Retirement</u></h3>");
		    mywindow.document.write($("#"+htmlPge1).html());
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>After_Retirement</u></h3>");
		    mywindow.document.write($("#"+htmlPge2).html());
		    mywindow.document.write($("#"+htmlPge3).html());
		    mywindow.document.write($("#"+htmlPge4).html());
		    mywindow.document.write($("#"+htmlPge5).html());
		    mywindow.document.write($("#"+htmlPge6).html());
		    mywindow.document.write($("#"+htmlPge7).html());
		    mywindow.document.write('</body></html>');
		    mywindow.document.close();
		    mywindow.print();
		    
		    $("#"+cpf_proj_oa1).css('border','');
		    $("#"+cpf_proj_sa1).css('border','');
		    $("#"+cpf_proj_ma1).css('border','');
		    
		    $("#"+cpf_proj_ra1).attr('border', '');    
		    $("#"+cpf_proj_oa2).attr('border', '');    
		    $("#"+cpf_proj_sa2).attr('border', '');    
		    $("#"+cpf_proj_ma2).attr('border', '');  
		    
		       $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight)+'px');
			  
			   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight)+'px');
			   
			   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight)+'px');

			   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight)+'px');
			   
			   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight)+'px');
			   
			   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight)+'px');
			   
			   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight)+'px');
		    
		    $('.DTFC_LeftWrapper').css('display','block');
		    $('.DTFC_RightWrapper').css('display','block');
			$("#"+cpf_proj_oa1).addClass("dataTables_scroll");
			$("#"+cpf_proj_oa1).addClass("dataTables_wrapper");
			$("#"+cpf_proj_ra1).addClass("dataTables_scroll");
			$("#"+cpf_proj_ra1).addClass("dataTables_wrapper");
   	    $('#sectncontent').css('height', '73vh'); 
	}*/
});



//vignesh 23022021  //common component pdf

$("#btnCpfBalancePrint").click(function (){ 
	 
	var divIdcpfBalAnnulDiv ='cpfBalAnnulDiv';  //div id
	var pl ="portrait";  // landscape     portrait
	var fileSave ="CPF_BAL_ANUL_";
	var tabIdcpfAccAddDedTable ="cpfAccAddDedTable";  //table id 
	var pdfTitle ="CPF Account - Additions & Deductions of funds into CPF a/c";  // table title name
	var screentittle ="";  //screen title
	//var colheaderarray =["#","Name Of Account Holder *","Applicant Type","Description of Transaction","Type of transaction *","Type of CPF Account *","Age From","Age To","Amount ($)","Frequency of Transaction","Amount to be transferred  from OA to RA"]; //thead array          
	
	var screentittlefootername = "Central Provident Fund";

	//table  //  CPF Account - Additions & Deductions of funds into CPF a/c (header)
	var columnscpfBalAnnulDiv =[];
	
	$("#cpfAccAddDedTable thead tr:first th").each(function(i){
		if(i==1)return;
		var hdrText=$(this).find(">div").find('div').text();
		columnscpfBalAnnulDiv.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnscpfBalAnnulDivAry =[]; //non group header we should follow this
	columnscpfBalAnnulDivAry.push(columnscpfBalAnnulDiv);
	
	var jsonObject = 
	    [{"key":"Image","value":divIdcpfBalAnnulDiv,"Title":screentittle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""} ,
	     {"key":"Table","value":tabIdcpfAccAddDedTable,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":columnscpfBalAnnulDivAry,"pdfaddnewPage":"yes"} 
         ];
	
	var jsonObj = 
	    [{
				portraitlandscape: pl, 
				fileSave:fileSave 
	    }]
		
	var JsonData={"jsobj":jsonObj} // convert jsonObjecy
	var jsonArray=[];
	jsonArray.push(JSON.stringify(JsonData));// convert jsonArray
	var objArrayfilename = JSON.parse(jsonArray); // parse jsonArray to variable(objArray)
	 
	 showLoader();	
	 setTimeout(function(){
		 h2pcompfun(jsonObject,objArrayfilename); //function to start print pdf
	 },100);
	 
});



//092021 - move this method to navigation.js 
function openBackToProperty(){ 

	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	}
	$("#property_li").click();	 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0);
		}, 100); 
	}
	
	 
}

	$( document ).ready(function() {
	$('#btCPFpdfPrint').click(function () {
	 showLoader(); 
	$("#beforeRetrmntTab").trigger("click");
	 $("#pdfshowhide").removeClass("hide").addClass("show");
	var divBeforeRetriment ="before_retire_chart";
	var divAfterRetriment ="after_retire_charts";
	$(".c3-line").css("fill","none");
	
	var pl ="landscape";  // landscape     portrait
	var fileSave ="CPFProjectionsAnalysis";
	var screentittlefootername = "CPF Analysis";
	
	var tblIdCpfOrdinaryBalanceTablereport ="cpf_proj_oa1";  
	var tblIdCpfSpecialBalanceTablereport ="cpf_proj_sa1";
	var tblIdCpfMedisaveBalanceTablereport ="cpf_proj_ma1";
	var chartcpfAnalyBfreRet="before_retire_chart";
	var chartTitlecpfAnalyBfreRet="CPF Projection Analysis - Before Retirement";
	var tdlIdCpfARRetirementBalanceTablereport ="cpf_proj_ra1";
	var tblIdCpfAROrdinaryBalanceTablereport ="cpf_proj_oa2";
	var tblIdCpfARSpecialBalanceTablereport ="cpf_proj_sa2";
	var tblIdCpfARMedisaveBalanceTablereport ="cpf_proj_ma2";
	//$("#afterRetrmntTab").trigger("click"); 
	var chartcpfAnalyAftrRet="after_retire_chart";
	var chartTitlecpfAnalyAftrRet="CPF Projection Analysis - After Retirement";
	
	var rl = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r2 = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r3 = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r4 = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r5 = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r6 = $('#cpf_proj_oa1 tbody tr:visible').length;
	var r7 = $('#cpf_proj_oa1 tbody tr:visible').length;
	/*console.log(rl,r2,r3,r4,r5,r6,r7);
		if(rl <= 1 && r2 <= 1 && r3 <= 1 && r4 <= 1 && r5 <= 1 && r6 <= 1 && r7 <= 1) {
			hideLoader();
			alert("No data to export")
			return false;
		}*/
		
	let dataTables = [tblIdCpfOrdinaryBalanceTablereport, tblIdCpfSpecialBalanceTablereport, tblIdCpfMedisaveBalanceTablereport, tdlIdCpfARRetirementBalanceTablereport, tblIdCpfAROrdinaryBalanceTablereport, tblIdCpfARSpecialBalanceTablereport, tblIdCpfARMedisaveBalanceTablereport];

    for (let dataTable of dataTables) {
        drawdatatablepaging(dataTable);
    }
	
	var pdfTitleone ="Ordinary"; //  
	var pdfTitletwo ="Special";
	var pdfTitlethree ="Medisave";
	var pdfTitlefour ="Retirement";
	var pdfTitlefive ="Ordinary";
	var pdfTitlesix ="Special";
	var pdfTitleseven ="Medisave";
	
//1
	var columnsCpfOrdinaryBalanceTablereport =[];
	$("#cpf_proj_oa1 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfOrdinaryBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfOrdinaryBalanceTablereportAry =[];  
	columnsCpfOrdinaryBalanceTablereportAry.push(columnsCpfOrdinaryBalanceTablereport);
	
//2
    var columnsCpfSpecialBalanceTablereport =[];
	$("#cpf_proj_sa1 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfSpecialBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfSpecialBalanceTablereportAry =[];  
	columnsCpfSpecialBalanceTablereportAry.push(columnsCpfSpecialBalanceTablereport);

//3
    var columnsCpfMedisaveBalanceTablereport =[];
	$("#cpf_proj_ma1 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfMedisaveBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfMedisaveBalanceTablereportAry =[];  
	columnsCpfMedisaveBalanceTablereportAry.push(columnsCpfMedisaveBalanceTablereport);
	
//4
    var columnsCpfARRetirementBalanceTablereport =[];
	$("#cpf_proj_ra1 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARRetirementBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARRetirementBalanceTablereportAry =[];  
	columnsCpfARRetirementBalanceTablereportAry.push(columnsCpfARRetirementBalanceTablereport);
	
//5
    var columnsCpfAROrdinaryBalanceTablereport =[];
	$("#cpf_proj_oa2 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfAROrdinaryBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfAROrdinaryBalanceTablereportAry =[];  
	columnsCpfAROrdinaryBalanceTablereportAry.push(columnsCpfAROrdinaryBalanceTablereport);
	
//6
    var columnsCpfARSpecialBalanceTablereport =[];
	$("#cpf_proj_sa2 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARSpecialBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARSpecialBalanceTablereportAry =[];  
	columnsCpfARSpecialBalanceTablereportAry.push(columnsCpfARSpecialBalanceTablereport);
	
//7
    var columnsCpfARMedisaveBalanceTablereport =[];
	$("#cpf_proj_ma2 thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARMedisaveBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARMedisaveBalanceTablereportAry =[];  
	columnsCpfARMedisaveBalanceTablereportAry.push(columnsCpfARMedisaveBalanceTablereport);
	
	
	var jsonObject = 
	    [{"key":"Table","value":tblIdCpfOrdinaryBalanceTablereport,"Title":pdfTitleone,"TitleFooter":screentittlefootername,"header":columnsCpfOrdinaryBalanceTablereportAry,"pdfaddnewPage":""},
	     {"key":"Table","value":tblIdCpfSpecialBalanceTablereport,"Title":pdfTitletwo,"TitleFooter":screentittlefootername,"header":columnsCpfSpecialBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfMedisaveBalanceTablereport,"Title":pdfTitlethree,"TitleFooter":screentittlefootername,"header":columnsCpfMedisaveBalanceTablereportAry,"pdfaddnewPage":"yes"},
		 {"key":"Image","value":divBeforeRetriment,"Title":chartTitlecpfAnalyBfreRet,"TitleFooter":screentittlefootername,"header":"test","pdfaddnewPage":"yes"},
		// {"key":"Image","value":chartcpfAnalyBfreRet,"Title":chartTitlecpfAnalyBfreRet,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
		 {"key":"Table","value":tdlIdCpfARRetirementBalanceTablereport,"Title":pdfTitlefour,"TitleFooter":screentittlefootername,"header":columnsCpfARRetirementBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfAROrdinaryBalanceTablereport,"Title":pdfTitlefive,"TitleFooter":screentittlefootername,"header":columnsCpfAROrdinaryBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfARSpecialBalanceTablereport,"Title":pdfTitlesix,"TitleFooter":screentittlefootername,"header":columnsCpfARSpecialBalanceTablereportAry,"pdfaddnewPage":"yes"},
		 {"key":"Table","value":tblIdCpfARMedisaveBalanceTablereport,"Title":pdfTitleseven,"TitleFooter":screentittlefootername,"header":columnsCpfARMedisaveBalanceTablereportAry,"pdfaddnewPage":"yes"},
 		// {"key":"Image","value":chartcpfAnalyAftrRet,"Title":chartTitlecpfAnalyAftrRet,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},         
        {"key":"Image","value":divAfterRetriment,"Title":chartTitlecpfAnalyAftrRet,"TitleFooter":screentittlefootername,"header":"test","pdfaddnewPage":"yes"}
];
	
	var jsonObj = 
	    [{
				portraitlandscape: pl, 
				fileSave:fileSave 
	    }]
		
	var JsonData={"jsobj":jsonObj} // convert jsonObjecy
	var jsonArray=[];
	jsonArray.push(JSON.stringify(JsonData));// convert jsonArray
	var objArrayfilename = JSON.parse(jsonArray); // parse jsonArray to variable(objArray)
	 
	// showLoader();	
	 setTimeout(function(){
		 h2pcompfun(jsonObject,objArrayfilename); //function to start print pdf
		 /*$.when(h2pcompfun(jsonObject,objArrayfilename)).then(test());*/
		 //$("#pdfshowhide").addClass("hide").removeClass("show");
		 test();
	 },200);

	/* setTimeout(function(){
		 h2pcompfun(jsonObject,objArrayfilename); //function to start print pdf
	 },100);*/
	 hideLoader();
			  
			  
		});	  
		function drawdatatablepaging(tableid){

    /*$('#'+tableid).DataTable( {
            "paging":   false,
            "ordering": false,
            "info":     false,
            "searching":false                 
        });*/

}  
	});

	function test(){
		setTimeout(function(){
			$("#pdfshowhide").addClass("hide").removeClass("show");
			},5000);
	}
	
	function calcagein55(){
		var dob=$('#dfSelfDob').val();
		var dsplit = dob.split("/");
		var inThreeYears=new Date(dsplit[2],dsplit[1]-1,dsplit[0]);
		/*var inThreeYears = new Date($('#dfSelfDob').val());*/
    	 inThreeYears.setFullYear (inThreeYears.getFullYear() + 55 );
		var ageAftr55= inThreeYears.toLocaleDateString('en-IN',{day:"2-digit",month:"2-digit",year:"numeric"});
		var yearOn55 = ageAftr55.split('/');
		$("#cpfLifeYear").val(yearOn55[2]);
		//$("#txtFldAgein55Year").val(ageaftr55);
		//getdob($("#txtFldAgein55Year"), $('#txtFldAgein55Year'),false);
	
	}
	
	$("#cpfLifeProptocpf").on("change",function(){
	activeeRasaving ($(this),$("#cpfLifeRasavings"));
	});


	function activeeRasaving(elmid,rasaving) {
	var option = elmid.val();
	
	if (option == "Y") {  
		rasaving.prop("disabled", false);
	}else {  
		rasaving.prop("disabled", true);
		$("#cpfLifeRasavings option:contains('--SELECT--')").attr("selected", true);
	}
		
	return true;
}
function calcageinJuly2020(){
	
	if(!isEmpty($("#txtFldAgeinJuly2020Year").val()) && !isEmpty($("#dfSelfDob").val())){
		var birth_date = $("#dfSelfDob").val();
		var match = /(\d+)\/(\d+)\/(\d+)/.exec(birth_date)
		var dfSelfDob = new Date(match[3], match[2], match[1]);
		/*var dfSelfDob = new Date($('#dfSelfDob').val());*/
		var inJuly2020Date= new Date('01/07/2020');
		var inJuly2020age = Math.floor((inJuly2020Date-dfSelfDob) / (365.25 * 24 * 60 * 60 * 1000));
		$("#txtFldAgeinJuly2020Year").val(inJuly2020age);
		//getdob($("#txtFldAgein55Year"), $('#txtFldAgein55Year'),false);
		if(inJuly2020age >= 65){
			//$("#txtFldRssPayOutAge").val(90);
			$("#txtFldRssPayOutAge").val("");
		}else if(inJuly2020age <= 64){
			//$("#txtFldRssPayOutAge").val(95);
			$("#txtFldRssPayOutAge").val("");
		}
	}
		
	}
	
	/*$("#payAmtCPFLifeBtn").on("click",function(){
	fetchPayoutAmtCPFLife($("#payAmtCPFLife")); 
	});*/
	


/*function fetchPayoutAmtCPFLife(payoutAmt){
	
	showLoader(); 
	parameter = "DBCALLFOR=FETCH_CPFLIFE_PAYOUT";
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CPFLIFE_PAYOUT"]){ 
	 				var payamtval=tabdets["CPFLIFE_PAYOUT"];  
	 				payoutAmt.val(payamtval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_PAYOUT"]){ 
	 				var payamtval=tabdets["NO_PAYOUT"];  
	 				payoutAmt.val(payamtval);			
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}*/



$("#payAmtCPFLifeBtn").on("click",function(){
	ajaxCalRetirementCpflifeGvtScheme($("#cpfLifePlan"),$("#cpfLifePayoutamt"));
});
	
function ajaxCalRetirementCpflifeGvtScheme(cpftype,cpfpayout){ 
	var pleged = (isEmpty($("#cpfLifeProptocpf").val())? "N" :$("#cpfLifeProptocpf").val());
	var topRABRS = (isEmpty($("#cpfLifeRasavings").val())? "N" :$("#cpfLifeRasavings").val());
	
	var RetAge=Number($("#retYrstoret").val());//Retirement age 
	var cpfType =  isEmpty(cpftype.val()) ? "SP" : cpftype.val();//plan code 
	var strFNAID = $("#fnaId").val();
	
	
	
	setTimeout(function(){
		
		 $.ajax({
			type:"GET",
			url:servletName,
			async:false,
			data:{
				"DBCALLFOR":"RETIREMENT_CPF_LIFE_PAYOUT",  
				"txtFldRetAge"				:RetAge,
				"txtFldPlanCode"			:cpfType,
				"txtFldPlegedvalue"			:pleged,
				"txtFldTopRABrsvalue"		:topRABRS,
				"txtFldFNAID":strFNAID
			},
			success: function(result){ 
		 		var jsnRslt=JSON.parse(result); 
		 		$.each(jsnRslt,function(i,obj){
		 			
		 			/*if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
		 				window.location = BASE_URL + SESSION_EXP_JSP; 
		 				return;
		  			}*/
 
					if (obj.SESSION_EXPIRY=="DB_ERROR") {
						window.location = BASE_URL + DB_EXP_JSP; 
						return;
					}
					
					$.each(obj,function(i,val){  
						 if(i == "RET_CPF_LIFE_RES"){   
							 $.each(val, function(contkey, contvalue) { 
								 var prem=contvalue["LIFEPREM"];
								 var payout=contvalue["LIFEPAYOUT"];
								 var ra=contvalue["FROM_RA"]; 
								/* cpfprem.val(prem);
								 fdtransfer.val(ra);*/
								 cpfpayout.val(payout);
								 
							 });
							 
							 
							
						 }
						 if(i == "RET_CPF_LIFE_NORES"){
							 	/*cpfprem.val("");
								fdtransfer.val("");*/
								cpfpayout.val("");
						 }
							  
							
						 return; 
							  
					});
					
					
				});
				 hideLoader(); 
				
			}
		});
		
	}, 2000);
	
//	if (!isEmpty(cpfType)) { 
//		showLoader();  
////		setTimeout(function() {
 
////		}, 1000);
//		 
//	} else{
//		cpfprem.val("");
//		cpfpayout.val("");
//		fdtransfer.val("");
//	}
//addCPFToRetirement();
}

$("#cpf_li").click(function(){
	reOrderCpfVisibleRows();
	if(isEmpty($("#cpfLifeBrsamt").val())){
		var Age=$('#dfSelfAge').val();
		if(Age < 55){
		fetchCurentBRSAmt($("#cpfLifeBrsamt")); 	
		}
	}
	if(isEmpty($("#cpfLifeFrsamt").val())){
		var Age=$('#dfSelfAge').val();
		if(Age < 55){
		fetchCurentFRSAmt($("#cpfLifeFrsamt")); 
		}
	}
	if(isEmpty($("#cpfLifeErsamt").val())){
		var Age=$('#dfSelfAge').val();
		if(Age < 55){
		fetchCurentERSAmt($("#cpfLifeErsamt")); 
		}
	}
	if(isEmpty($("#cpfLifeYear").val())){
		 calcagein55();
	}
	if(isEmpty($("#cpfLifePayoutamt").val())){
		 clientAgeCalc();
	}
	if($("#cpfLifePlan").val() === ""){
		$("#cpfLifePlan").val("SP"); 
	}
	calcageinJuly2020();
	if(isEmpty($("#txtFldCareShieldYear").val())){
		 calcagein30();
	}
	if(isEmpty($("#txtFldCareShieldAnnlPrem").val() || $("#txtFldCareShieldPayout").val())){
		 careshieldAnnlCalc();
	}
	if(isEmpty($("#txtFldCareShieldPremIncRate").val())){
		$("#txtFldCareShieldPremIncRate").val("2"); 
	}
	if(isEmpty($("#txtFldCareShieldPayIncRate").val())){
		$("#txtFldCareShieldPayIncRate").val("2"); 
	}
	if(isEmpty($("#txtFldEldershieldAge").val())){
		$("#txtFldEldershieldAge").val($("#dfSelfAge").val()); 
	}
	if(isEmpty($("#txtFldElderShieldGender").val())){
		if($("#dfSelfGender").val() === "M"){
		$("#txtFldElderShieldGender").val("M"); 
		}
		else if($("#dfSelfGender").val() === "F"){
		$("#txtFldElderShieldGender").val("F"); 
		}
	}
	remainingNoPayment();
	if(isEmpty($("#txtFldMediShieldaAge").val())){
		var nextbirth = getAge($("#dfSelfDob"));		 
		$("#txtFldMediShieldaAge").val(nextbirth);
	}
	if(isEmpty($("#txtFldDepntProtectCurrAge").val())){
		$("#txtFldDepntProtectCurrAge").val($("#dfSelfAge").val()); 
	}
	if(isEmpty($("#txtFldHouseProtectTerm").val())){
		 remainingPremiumTerm();
	}
	if(isEmpty($("#txtFldHouseProtectPremiumEnds").val())){
		 AgePremiumPeriodEnds();
	}
	if(!isEmpty($("#txtFldHouseProtectYear").val())){
		if($("#txtFldHouseProtectYear").val() === "Y"){
			$("#houseProtectPremium,#houseProtectCovPeriodAge").show();
			$("#houseProtectAmount,#houseProtectAge,#houseProtectCoverage,#houseProtectTerm,#houseProtectPremiumEnds").hide();
		}else{
			$("#houseProtectPremium,#houseProtectCovPeriodAge").hide();
			$("#houseProtectAmount,#houseProtectAge,#houseProtectCoverage,#houseProtectTerm,#houseProtectPremiumEnds").show();		
		}
	}
	/*if(isEmpty($("#txtFldElderShieldPremPayment").val())){
		ajaxEldershieldRemainingPremiumPayment($("#txtFldElderShieldPremPayment"));
	}*/
	 
});

$("#mediShieldAnnlPremBtn").on("click",function(){
	ajaxMedishieldCurrentAnnlPremium($("#txtFldMediShieldAnnlPrem"),"");
	});
	
function getAge(dateString) {
	
	    var dateStr=dateString.val();
		var dsplit = dateStr.split("/");
		var dob=new Date(dsplit[2],dsplit[1]-1,dsplit[0]);
		
/*var dateStr=dateString.val();
var dob = new Date(dateStr);*/
var today = new Date();
/*var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
return age;*/
var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) 
    {
        age--;
    }
    return age;
}
function remainingNoPayment(){
		ajaxEldershieldRemainingPremiumPayment($("#txtFldElderShieldPremPayment"));
	}
function calcagein30(){
		var dob=$('#dfSelfDob').val();
		var dsplit = dob.split("/");
		var birthyear=new Date(dsplit[2],dsplit[1]-1,dsplit[0]);
		/*var birthyear = new Date($('#dfSelfDob').val());*/
    	 birthyear.setFullYear (birthyear.getFullYear() + 30 );
		var ageAftr30= birthyear.toLocaleDateString('en-IN',{day:"2-digit",month:"2-digit",year:"numeric"});
		var yearOn55 = ageAftr30.split('/');
		$("#txtFldCareShieldYear").val(yearOn55[2]);
	}
	

	
$("#cpfLifeRasavings").on("change",function(){
	if($(this).val() === "Y"){
		/*alert("Amount above the BRS amount found in the Retirement Account at age 55 will be deducted from RA and to be cashed into the client’s Retirement projection as a lump sum income")*/
	}
});
	
function clientAgeCalc(){
		var dfSelfAge =$('#dfSelfAge').val();
		if(dfSelfAge < 55){
			ajaxCalRetirementCpflifeGvtScheme($("#cpfLifePlan"),$("#cpfLifePayoutamt"));
			//addCPFToRetirement();
		}else if(dfSelfAge >= 55){
			$("#cpfLifePayoutamt").val("");
		}
}

function careshieldAnnlCalc(){
		var dfSelfAge =$('#dfSelfAge').val();
		if(dfSelfAge <= 29){
			ajaxCalCareshieldCpf($("#txtFldCareShieldAnnlPrem"),$("#txtFldCareShieldPayout"));
		}else if(dfSelfAge >= 30){
			var AnnlPrem = (isEmpty($("#txtFldCareShieldAnnlPrem").val())? "0" :$("#txtFldCareShieldAnnlPrem").val());
			var Payout = (isEmpty($("#txtFldCareShieldPayout").val())? "0" :$("#txtFldCareShieldPayout").val());
			$("#txtFldCareShieldAnnlPrem").val(AnnlPrem);
			$("#txtFldCareShieldPayout").val(Payout);
		}
}

$("#cpfLifeCalcBtn").click(function(){
  var url = "https://www.cpf.gov.sg/eSvc/Web/Schemes/LifeEstimator/LifeEstimator";
 window.open(url, '_blank');
	});
	
	
$("#cpfLifePayoutamt").on("change",function(){
	addCPFToRetirement();
});
/*function addCPFToRetirement(){	
		getincassrtRows(null,"N");	
		var	$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
		var desc =$("#cpfLifePlan option:selected").text();
		var amount = $("#cpfLifePayoutamt").val();
		var fromage = "65";
		var toage = "";
		
		$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val();
			if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
		
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]'),"CPF Life"); 
		
		$tblRETRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val((isEmpty(desc)? "CPF Life Plan" :desc));
		
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
	
	
	reOrderVisibleRows("IncAssRetPlgtbl");
}*/

function addCPFToRetirement(){	
		
		var $rowref  = "CPFLIFE"; 
		var desc =$("#cpfLifePlan option:selected").text();
		var amount = $("#cpfLifePayoutamt").val();
		var fromage = "65";
		var gender=$("#dfSelfGender").val();	
		var ageBasedOn=(gender=="M")? "SELF":"SPOUSE";	 
		var toage = (gender=="M")? ($("#retSelfProjage").val()):($("#retSpsProjage").val());
		 if(!isEmpty(toage) ){
			 var rowexist = chkRPIncAssetRowExist($rowref);
	
			var $tblRETRow = null; 
			if(rowexist == null){
				getincassrtRows(null,"N");	
				var	$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblRETRow = rowexist;
			}
			
			$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
				
			  selectNullvalChkBySelectName($tblRETRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]'),"CPF Life"); 
		console.log("desc----------->"+desc);
		$tblRETRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val((isEmpty(desc)? "CPF Life Plan" :"CPF Life Plan-"+desc));
		
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(4)").find('select[name=selIncAssFreq]'),"REGULAR"); 
		
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val(roundNumber( amount ) ); 	
		
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val("0"); 
			
		$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val(Number("0"));   
	  
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),"SELF");
	 
		$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val(fromage);
	 
		$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val(toage).prop("disabled",true);
		selectNullvalChkBySelectName($tblRETRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),ageBasedOn); 
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
	 		applyEventHandlers();
			 applyToastrAlert("CPF Life data will be flow back to Income and assets available for Retirement Section in Retirement Planning Screen!");
	} else{
		deleteAllRetPlanByRefId($rowref);
 }
	//reOrderVisibleRows("IncAssRetPlgtbl");
	return true;
}
$("#cpfRetSchSingPassBtn").click(function(){
  var url = "https://www.singpass.gov.sg/home/ui/login";
 window.open(url, '_blank');
	});
	

$("#cpfCareShieldLifeBtn").click(function(){
  var url = "https://www.careshieldlife.gov.sg/check-my-premium.html";
 window.open(url, '_blank');
	});
	
	
$("#cpfHouseProtSchBtn").click(function(){
  var url = "https://www.cpf.gov.sg/eSvc/Web/Schemes/HomeProtectionSchemePremium/HomeProtectionSchemePremiumLanding";
 window.open(url, '_blank');
	});
	
	
		
$("#txtFldRssPayOutAmt").on("change",function(){
		addCPFRetSumSchemeToRetirement();
});

function addCPFRetSumSchemeToRetirement(){	
		
		var $rowref  = "CPFRETIRESUMSCHEME"; 
		var desc = "Retirement Sum Scheme";
		var amount =(isEmpty($("#txtFldRssPayOutAmt").val())? "0" :$("#txtFldRssPayOutAmt").val());
		var fromage = "65";
		var toage = $("#txtFldRssPayOutAge").val();
		var gender=$("#dfSelfGender").val();	 
		var ageBasedOn=(gender=="M")? "SELF":"SPOUSE";	 
		
		 if(!isEmpty(toage) ){
			 var rowexist = chkRPIncAssetRowExist($rowref);
	
			var $tblRETRow = null; 
			if(rowexist == null){
				getincassrtRows(null,"N");	
				var	$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblRETRow = rowexist;
			}
			
			$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
				
				/*$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val();
			if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}*/
		
			selectNullvalChkBySelectName($tblRETRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]'),"CPF Retirement Sum Scheme"); 
			console.log("desc----------->"+desc);
			$tblRETRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val(desc);
			 
			selectNullvalChkBySelectName($tblRETRow.find("td:eq(4)").find('select[name=selIncAssFreq]'),"REGULAR"); 
			
			$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val(roundNumber( amount ) ); 	
			
			$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val("0"); 
				
			$tblRETRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val(Number("0"));   
		  
			selectNullvalChkBySelectName($tblRETRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),"SELF");
		 
			$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val(fromage);
		 
			$tblRETRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val(toage).prop("disabled",true);
			selectNullvalChkBySelectName($tblRETRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),ageBasedOn); 
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
			 applyEventHandlers();
			 applyToastrAlert("Retirement Sum Scheme data will be flow back to Income and assets available for Retirement Section in Retirement Planning Screen!");

	} else{
		deleteAllRetPlanByRefId($rowref);
 }
	//reOrderVisibleRows("IncAssRetPlgtbl");
	return true;
}




function ajaxCalCareshieldCpf(cpfpremium,cpfpayout){ 
	var CareShiledAge=Number($("#txtFldCareShieldYear").val());//Retirement age 
	var strFNAID = $("#fnaId").val();
	
	
	
	setTimeout(function(){
		
		 $.ajax({
			type:"GET",
			url:servletName,
			async:false,
			data:{
				"DBCALLFOR":"CARESHIELD_PREMIUM_PAYOUT",  
				"txtFldCareShieldYear":CareShiledAge,
				"txtFldFNAID":strFNAID
			},
			success: function(result){ 
		 		var jsnRslt=JSON.parse(result); 
		 		$.each(jsnRslt,function(i,obj){
		 			
		 			
 
					if (obj.SESSION_EXPIRY=="DB_ERROR") {
						window.location = BASE_URL + DB_EXP_JSP; 
						return;
					}
					
					$.each(obj,function(i,val){  
						 if(i == "CPF_CARESHIELD"){   
							 $.each(val, function(contkey, contvalue) { 
								 var prem=contvalue["CARESHIELDPREM"];
								 var payout=contvalue["CARESHIELDPAYOUT"];
							if(!isEmpty(cpfpayout)){
								cpfpayout.val(payout);
							}
							if(!isEmpty(cpfpremium)){
								cpfpremium.val(prem);
							}	 
								 
							 });
							 
							 
							
						 }
						 if(i == "CPF_CARESHIELD_NORES"){
								cpfpayout.val("");
								 cpfpremium.val("");
						 }
							  
							
						 return; 
							  
					});
					
					
				});
				 hideLoader(); 
				
			}
		});
		
	}, 2000);
	
}
$("#careShieldAnnlPremBtn").click(function(){
  ajaxCalCareshieldCpf($("#txtFldCareShieldAnnlPrem"),"");
	});
	
$("#careShieldPayoutBtn").click(function(){
  ajaxCalCareshieldCpf("",$("#txtFldCareShieldPayout"));
	});
$("#elderShieldAnnlPremBtn").click(function(){
  ajaxEldershieldCurrentAnnlPremium($("#txtFldElderShieldAnnlPrem"));
	});

$("#txtFldElderShieldAnnlPrem").on("change",function(){
		SyncEldershieldToCpfTbl();
});

$("#txtFldMediShieldAnnlPrem").on("change",function(){
	SyncMedishieldToCpfTbl();
});

$("#depntProtectAnnlPremBtn").click(function(){
  ajaxDepntCurrentAnnlPremium($("#txtFldDepntProtectAnnlPrem"));
	});

$("#txtFldDepntProtectAnnlPrem").on("change",function(){
	SyncDependantToCpfTbl();
});

$("#depntProtectSumAssuredBtn").click(function(){
 ajaxDepntCurrentSumAssured($("#txtFldDepntProtectSumAssured"));
	});
	
	
$("#txtFldHouseProtectYear").on("change",function(){
		if($(this).val() === "Y"){
			$("#houseProtectPremium,#houseProtectCovPeriodAge").show();
			$("#houseProtectAmount,#houseProtectAge,#houseProtectCoverage,#houseProtectTerm,#houseProtectPremiumEnds").hide();
		}else{
			$("#houseProtectPremium,#houseProtectCovPeriodAge").hide();
			$("#houseProtectAmount,#houseProtectAge,#houseProtectCoverage,#houseProtectTerm,#houseProtectPremiumEnds").show();		
		}
});	

function  remainingPremiumTerm(){
var covPeriod=$("#txtFldHouseProtectCoverage").val();
covPeriod = isEmpty(covPeriod) ? Number(0) : Number(covPeriod);
var currentAge=$("#dfSelfAge").val();
var entryAge=$("#txtFldHouseProtectAge").val();
entryAge = isEmpty(entryAge) ? Number(0) : Number(entryAge);
var premiumTerm=[covPeriod-(currentAge-entryAge)*0.9]
premiumTerm = isEmpty(premiumTerm) ? Number(0) : Number(premiumTerm);
 $("#txtFldHouseProtectTerm").val(premiumTerm);
}
function  AgePremiumPeriodEnds(){
var currentAge=$("#dfSelfAge").val();
var remainingPremiumTerm =$("#txtFldHouseProtectTerm").val();
remainingPremiumTerm = isEmpty(remainingPremiumTerm) ? Number(0) : Number(remainingPremiumTerm);
var premiumEnds=(Number(currentAge)+Number(remainingPremiumTerm));
premiumEnds = isEmpty(premiumEnds) ? Number(0) : Number(premiumEnds);
 $("#txtFldHouseProtectPremiumEnds").val(Math.round(premiumEnds));
}

function ajaxDepntCurrentAnnlPremium(curPremium){
	
	showLoader(); 
	var currentAge=$("#dfSelfAge").val();
	var parameter = "DBCALLFOR=FETCH_CURRENT_PREMIUM&strAge="+currentAge;
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CURRENT_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["CURRENT_PREMIUM"];  
	 				curPremium.val(currentpremiumval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["NO_PREMIUM"];  
	 				curPremium.val(currentpremiumval);			
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}

function ajaxDepntCurrentSumAssured(curSumAssured){
	
	showLoader(); 
	var currentAge=$("#dfSelfAge").val();
	var parameter = "DBCALLFOR=FETCH_CURRENT_SUMASSURED&strAge="+currentAge;
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["CURRENT_SUMASSURED"]){ 
	 				var currentSumAssuredval=tabdets["CURRENT_SUMASSURED"];  
	 				curSumAssured.val(currentSumAssuredval);
	 				
				} 
	 			
	 			if(tabdets["NO_SUMASSURED"]){ 
	 				var currentSumAssuredval=tabdets["NO_SUMASSURED"];  
	 				curSumAssured.val(currentSumAssuredval);			
				} 
	 		}
		}); 
	
	return true;
}

function ajaxMedishieldCurrentAnnlPremium(curPremium){
	
	showLoader(); 
	var currentNextBirthdayAge=$("#txtFldMediShieldaAge").val();
	var parameter = "DBCALLFOR=FETCH_MEDISHIELD_CURRENT_PREMIUM&strAge="+currentNextBirthdayAge;
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["MEDISHIELD_CURRENT_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["MEDISHIELD_CURRENT_PREMIUM"];  
	 				curPremium.val(currentpremiumval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_MEDISHIELD_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["NO_MEDISHIELD_PREMIUM"];  
	 				curPremium.val(currentpremiumval);			
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}
function ajaxEldershieldCurrentAnnlPremium(curPremium){
	
	showLoader(); 
	var currentAge=$("#dfSelfAge").val();
	var planType=$("#txtFldElderShieldPlan").val();
	var parameter = "DBCALLFOR=FETCH_ELDERSHIELD_ANNUAL_PREMIUM&strAge="+currentAge+"&strPlanType=" + planType;
		
				
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["ELDERSHIELD_CURRENT_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["ELDERSHIELD_CURRENT_PREMIUM"];  
	 				curPremium.val(currentpremiumval);
				
	 				
				} 
	 			
	 			if(tabdets["NO_ELDERSHIELD_PREMIUM"]){ 
	 				var currentpremiumval=tabdets["NO_ELDERSHIELD_PREMIUM"];  
	 				curPremium.val(currentpremiumval);			
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}

function ajaxEldershieldRemainingPremiumPayment(curPremium){
	
	showLoader(); 
	var currentAge=$("#dfSelfAge").val();
	var planType=$("#txtFldElderShieldPlan").val();
	var parameter = "DBCALLFOR=FETCH_ELDERSHIELD_REMAINING_PREMIUM&strAge="+currentAge+"&strPlanType=" + planType;
		
				
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
	 		for ( var val in retval) { 
	 			var tabdets = retval[val];

	 			if (tabdets["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}
	 			if (tabdets["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			} 

	 			if(tabdets["ELDERSHIELD_REMAINING_PREMIUM"]){ 
	 				var remainingpremiumval=tabdets["ELDERSHIELD_REMAINING_PREMIUM"];  
	 				curPremium.val(Number(remainingpremiumval)+Number(currentAge));
				} 
	 			
	 			if(tabdets["NO_ELDERSHIELD_PREMIUM"]){ 
	 				var remainingpremiumval=tabdets["NO_ELDERSHIELD_PREMIUM"];  
	 				curPremium.val(remainingpremiumval);		
				} 
	 			
	 			
	 		}
		}); 
	
	return true;
}


$("#txtFldHouseProtectAmount").on("change",function(){
	SyncHouseToCpfTbl();
});	
//Sync from House Plan to CPF
function SyncHouseToCpfTbl(){ 
	
	var $rowref  = "HOUSEPROTECT"; 
	var insuredBfr=$("#txtFldHouseProtectYear").val(); 
	var description="House Protection Scheme";
	var accountHolder=$("#dfSelfName").val();
	var gender=$("#dfSelfGender").val();	
	var applicationType	=(gender=="M")? "Self":"Spouse";
	/*var applicationType="Self";*/
	var transactionTag="Deduction from HPS to OA";
	var typesCPFAcc="Ordinary";
	var transactionType="Deduction";
	var annualAmt=$("#txtFldHouseProtectAmount").val();
	//annualAmt = isEmpty(annualAmt) ? Number(0) : Number(annualAmt);
	var freqTransaction="ANNUALLY";
	var incRate="";
	var ageStart="18";
	//var ageEnd=$("#txtFldHouseProtectPremiumEnds").val();
	var ageEnd="75";

	 
	 if(!isEmpty(annualAmt) && (insuredBfr == 'N') && !isEmpty(ageEnd)){ 
			
			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			 
			 if(applicationType == "Self"){
			$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");
			 }else  if(applicationType == "Spouse"){
			$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
			 }else{
			$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
			 } 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),applicationType);
			$tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);
		     var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		     var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		     $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  applicationType); //Proposed

			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]'),transactionTag); 
		/*	var addboldtagselCADType = '<span style="font-weight: bold;">' + transactionTag + '</span>';
		    $tblCpfRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed*/
			
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),transactionType); 
			 $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(typesCPFAcc);  
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),typesCPFAcc=='Ordinary'? "CPFACC000001":"");
			 var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + typesCPFAcc + '</span>';
			 $tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + transactionType ); //Proposed
			
			
					 
			/* $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(ageStart);*/
 			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(ageEnd);
			 $tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+ageStart  +'<br>' +"End @ "+  ageEnd); //Proposed
			
			 $tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(roundNumber(annualAmt)); 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),freqTransaction== 'ANNUALLY'? "1"  : "");
		 	 var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + annualAmt +' '+ freqTransaction+ '</span>';
			 var incRate=0; 
			 $tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			 applyEventHandlers();
			 applyToastrAlert("Annual Premium to be fetched into the CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			// mandatoryFldForCpf($tblCpfRow,null,'LIFE');	  
	
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}

function SyncDependantToCpfTbl(){ 
	
	var $rowref  = "DEPENDANTPROTECT"; 
	var description="Dependant Protection Scheme";
	var accountHolder=$("#dfSelfName").val();
	var gender=$("#dfSelfGender").val();	
	var applicationType	=(gender=="M")? "Self":"Spouse";
	/*var applicationType="Self";*/
	var transactionTag="Deduction from DPS to OA";
	var typesCPFAcc="Ordinary";
	var transactionType="Deduction";
	var annualAmt=$("#txtFldDepntProtectAnnlPrem").val();
	//annualAmt = isEmpty(annualAmt) ? Number(0) : Number(annualAmt);
	var freqTransaction="ANNUALLY";
	var incRate="";
	var ageStart="16";
	var ageEnd="60";
	

	 
	 if(!isEmpty(annualAmt)){ 
			
			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			 
			 if(applicationType == "Self"){
			 	$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");
			 }else  if(applicationType == "Spouse"){
				$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
			 }else{
				$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
			 } 
			 
			
		
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),applicationType);   
			 $tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);
			 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		     var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		     $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  applicationType); //Proposed


			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]'),transactionTag); 
			/*var addboldtagselCADType = '<span style="font-weight: bold;">' + transactionTag + '</span>';
		    $tblCpfRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed*/
		
			
	 		 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),transactionType);
			 $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(typesCPFAcc);  
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),typesCPFAcc=='Ordinary'? "CPFACC000001":"");
		 	 var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + typesCPFAcc + '</span>';
			 $tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + transactionType ); //Proposed
			
			
					 
			 /*$tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(ageStart);*/
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(ageEnd);
			 $tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+ageStart  +'<br>' +"End @ "+  ageEnd); //Proposed
		
			
		 	 $tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(roundNumber(annualAmt)); 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),freqTransaction== 'ANNUALLY'? "1"  : "");
		 	var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + annualAmt +' '+ freqTransaction+ '</span>';
			var incRate=0; 
			$tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			 applyEventHandlers();
			 applyToastrAlert("Annual Premium to be fetched into the CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			// mandatoryFldForCpf($tblCpfRow,null,'LIFE');	  
	
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}

function SyncMedishieldToCpfTbl(){ 
	
	var $rowref  = "MEDISHIELDLIFE"; 
	var description="MediShield Life";
	var accountHolder=$("#dfSelfName").val();
	var gender=$("#dfSelfGender").val();	
	var applicationType	=(gender=="Self")? "Self":"Spouse";
	/*var applicationType="Self";*/
	var transactionTag="Deduction from MSL to MA";
	var typesCPFAcc="Medisave";
	var transactionType="Deduction";
	var annualAmt=$("#txtFldMediShieldAnnlPrem").val();
	//annualAmt = isEmpty(annualAmt) ? Number(0) : Number(annualAmt);
	var freqTransaction="ANNUALLY";
	var incRate="";
	//var ageStart=$("#txtFldMediShieldaAge").val();
	var ageStart="0";
	var ageEnd="";
	

	 
	 if(!isEmpty(annualAmt) && !isEmpty(ageStart)){ 
			
			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			 
			 if(applicationType == "Self"){
				 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");
			 }else  if(applicationType == "Spouse"){
			 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
			 }else{
			 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
			 } 
		 	 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),applicationType); 
			 $tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);
	 		 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		     var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		     $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  applicationType); //Proposed
  
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]'),transactionTag); 
			/*var addboldtagselCADType = '<span style="font-weight: bold;">' + transactionTag + '</span>';
		    $tblCpfRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed*/
			
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),transactionType);
		 	 $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(typesCPFAcc);  
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),typesCPFAcc=='Medisave'? "CPFACC000003":"");
			var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + typesCPFAcc + '</span>';
			$tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + transactionType ); //Proposed
			
					 
			/* $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(ageStart);*/
		 	 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(ageEnd);
		 	 $tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+ageStart  +'<br>' +"End @ "+  ageEnd); //Proposed
			
			 $tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(roundNumber(annualAmt)); 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),freqTransaction== 'ANNUALLY'? "1"  : "");
		    var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + annualAmt +' '+ freqTransaction+ '</span>';
			var incRate=0; 
			$tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			
			 applyEventHandlers();
			 applyToastrAlert("Annual Premium to be fetched into the CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			// mandatoryFldForCpf($tblCpfRow,null,'LIFE');	  
	
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}
function SyncEldershieldToCpfTbl(){ 
	
	var $rowref  = "ELDERSHIELD"; 
	var description="ElderShield";
	var accountHolder=$("#dfSelfName").val();
	var gender=$("#dfSelfGender").val();	
	var applicationType	=(gender=="Self")? "Self":"Spouse";	
	/*var applicationType="Self";*/
	var transactionTag="Deduction from ES to MA";
	var typesCPFAcc="Medisave";
	var transactionType="Deduction";
	var annualAmt=$("#txtFldElderShieldAnnlPrem").val();
	//annualAmt = isEmpty(annualAmt) ? Number(0) : Number(annualAmt);
	var freqTransaction="ANNUALLY";
	var incRate="";
	//var ageStart=$("#dfSelfAge").val();
	var ageStart="40";
	var ageEnd="65";
	

	 
	 if(!isEmpty(annualAmt)){ 
			
			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			 
			 if(applicationType == "Self"){
				$tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");
			 }else  if(applicationType == "Spouse"){
				 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
			 }else{
				 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
			 } 
			 
			
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),applicationType);  
			 $tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);
			 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		     var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		     $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  applicationType); //Proposed

 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]'),transactionTag); 
			/*var addboldtagselCADType = '<span style="font-weight: bold;">' + transactionTag + '</span>';
		    $tblCpfRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed*/

			selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),transactionType); 
		    $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(typesCPFAcc);  
			selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),typesCPFAcc=='Medisave'? "CPFACC000003":"");
			var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + typesCPFAcc + '</span>';
			$tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + transactionType ); //Proposed
				
			 /*$tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(ageStart);*/	
		 	 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val();	
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(ageEnd);
			$tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+ageStart  +'<br>' +"End @ "+  ageEnd); //Proposed
		
		
			
		 	 $tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(roundNumber(annualAmt)); 
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),freqTransaction== 'ANNUALLY'? "1"  : "");
			var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + annualAmt +' '+ freqTransaction+ '</span>';
			var incRate=0; 
			$tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			 applyEventHandlers();
			 applyToastrAlert("Annual Premium to be fetched into the CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			// mandatoryFldForCpf($tblCpfRow,null,'LIFE');	  
	
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}

$("#txtFldCareShieldClaim").on("change",function(){
	if($(this).val() === "N"){
		SyncCareshieldToCpfTbl();
	}
});
function SyncCareshieldToCpfTbl(){ 
	var description="CareShield Life";
	var gender=$("#dfSelfGender").val();
	var $rowref  = "CARESHIELDLIFE"; 
	var claim=$("#txtFldCareShieldClaim").val();
	var description="CareShield";
	var accountHolder=$("#dfSelfName").val();
	
	/*var applicationType="Self";*/
	var applicationType	=(gender=="M")? "Self":"Spouse";
	var transactionTag="Deduction from ES to MA";
	var typesCPFAcc="Medisave";
	var transactionType="Deduction";
	var annualAmt=$("#txtFldCareShieldAnnlPrem").val();
	//annualAmt = isEmpty(annualAmt) ? Number(0) : Number(annualAmt);
	var freqTransaction="ANNUALLY";
	var incRate=$("#txtFldCareShieldPremIncRate").val();
	var ageStart="30";
	var ageEnd="67";
	

	 
	 if(!isEmpty(annualAmt) && (claim == 'N') ){ 
			
			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			 
			 if(applicationType == "Self"){
				   $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");
			 }else  if(applicationType == "Spouse"){
				 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
			 }else{
				 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
			 } 
			 
			
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]'),applicationType);  
		     $tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);
		 	 var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		     var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		     $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  applicationType); //Proposed

			 
		    selectNullvalChkBySelectName($tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]'),transactionTag);
 			/*var addboldtagselCADType = '<span style="font-weight: bold;">' + transactionTag + '</span>';
		    $tblCpfRow.find("td:eq(3)").find('span').html(addboldtagselCADType); //Proposed*/
	
			
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]'),transactionType);
			 $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(typesCPFAcc);  
			 selectNullvalChkBySelectName($tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]'),typesCPFAcc=='Medisave'? "CPFACC000003":"");
			var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + typesCPFAcc + '</span>';
			$tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + transactionType ); //Proposed
		
		
			/* $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(ageStart);*/	
		 	 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val();
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val();	
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(ageStart);
			 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(ageEnd);			
			 $tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+ageStart  +'<br>' +"End @ "+  ageEnd); //Proposed


		 	$tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(roundNumber(annualAmt)); 
			selectNullvalChkBySelectName($tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]'),freqTransaction== 'ANNUALLY'? "1"  : "");
		    var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + annualAmt +' '+ freqTransaction+ '</span>';
			var incRate=0; 
			$tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			 applyEventHandlers();
			 applyToastrAlert("Annual Premium to be fetched into the CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			// mandatoryFldForCpf($tblCpfRow,null,'LIFE');	  
	
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}


/*Auto Complete*/
$("#cpfAddDed_Dialog #txtFldDlgCADDescription").on("change",function(){
	
	var array=[];
	/*var planName=$('#lipPlanname').val();*/
	/*var descriptionInvestment=$('#txtFldDlgInvDesc').val();*/
	/*var descriptionPropOwn=$('#txtFldDlgPropOwnCpfDesc').val();*/
	var cpfGvtScheme="CPF Life";
	var retGvtScheme="Retirement Sum Scheme";
	var careGvtScheme="CareShield Life";
	var elderGvtScheme="ElderShield";
	var mediGvtScheme="MediShield Life";
	var depGvtScheme="Dependants Protection Scheme";
	var houseGvtScheme="House Protection Scheme";
	
	for(var i= 0; i<=invDescriptionarr.length;i++)
			  { 
				 if(invDescriptionarr[i] !== undefined && invDescriptionarr[i] != ''){
					array.push(""+invDescriptionarr[i]+"");
				} 
			  }  
	
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
	array.push(""+cpfGvtScheme+"");
	array.push(""+retGvtScheme+"");
	array.push(""+careGvtScheme+"");
	array.push(""+elderGvtScheme+"");
	array.push(""+mediGvtScheme+"");
	array.push(""+depGvtScheme+"");
	array.push(""+houseGvtScheme+"");

	 var autocomplete = $('#cpfAddDed_Dialog #txtFldDlgCADDescription').typeahead(); 
	autocomplete.data('typeahead').source = array;

}); 

$("#txtFldDlgCADAgeFrom").on("change",function(){
	if(!cpfEndAgeValidate($('#txtFldDlgCADAgeFrom'),$('#txtFldDlgCADAgeTo')))return;
});

$("#txtFldDlgCADAgeTo").on("change",function(){
	if(!cpfEndAgeValidate($('#txtFldDlgCADAgeFrom'),$(this)))return;
});

function cpfEndAgeValidate(startAgeid,elmId){
 
 
	var totAge=Number($("#txtFldDlgCADAgeTo").val());  
	
	var startAge=Number(startAgeid.val());
	
	if(isEmpty(startAge)){
		if(!isEmpty(elmId.val())){
			applyErrorToastrAlert(AGE_PAYMENT_STARTS,startAgeid);
			elmId.val("");
			return false;
		}
	}
	  
 
	if(!isEmpty(elmId.val())){
		if(elmId.val() <  startAge){
			applyToastrAlert("Age Payment Ends should not be Less than Age Payment Start Age ("+startAge+") ",elmId);
			elmId.val("");
			return false;
		}else
		if( elmId.val() > totAge){
			applyToastrAlert("Age Payment Ends should not be Greater than Projected life expectancy(Age)(Self) ("+totAge+")",elmId);
			elmId.val("");
			return false;
		}
	}
	return true;
} 

var accr11 = document.querySelectorAll(".panel-headingscpf");
var cont11 = document.querySelectorAll(".panel-collapsescpf");


accr11.forEach(x => {
	

x.addEventListener("click",function(){
var li22 = document.getElementById("cpfbreadcrumb");
setTimeout(function(){
	

var count = 0,test = "";
cont11.forEach(x => {
if(x.classList.contains("in")){
count++;
}
});

if(count > 1 || count < 1){
li22.style.display = "none";
}else{
li22.style.display = "block";
cont11.forEach(x => {
if(x.classList.contains("in")){
	li22.innerHTML = x.previousElementSibling.querySelector("a").innerText;
//li.getAttribute = (x.previousElementSibling.getAttribute);
}


})
}

},1000)

})


})