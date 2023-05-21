

 /**
 * Investment
 * 
 */


/* $("#investCancelbtn").on("click",function(){
	$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").removeClass("mandatoryFillFlds");
	$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").qtip('disable');
	$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").qtip('destroy',true);
	investRdlyflds(INS_MODE); 
	addInptInvstRows(null); 
	$('#Investment_Dialog').modal('hide');
	
});*/
/*$("a.addInflwOutflw").on("click",function(){ 
	
	calcTotalInvestAmts();
	if($("#InvestARow").hasClass("blinking")){
		$("#InvestARow").removeClass("blinking");
	} 
	$("#investment_li").click();	
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#InvestARow").addClass("blinking");  
	
	
});*/

var invDescriptionarr=[];
$("#popaddInvestment").on("click",function(){ 
	
	calcTotalInvestAmts();
	if($("#InvestARow").hasClass("blinking")){
		$("#InvestARow").removeClass("blinking");
	} 
	$("#investment_li").click();	
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#InvestARow").addClass("blinking");  
	
	
});

function openBackToCOB(){
	if($("#CobARow").hasClass("blinking")){
		$("#CobARow").removeClass("blinking");
	} 
	$("#assetsliab_li").click();
	$("#AssetsTab").attr('checked', true).trigger('click');
	$("#headingOne").trigger('click');
	
	/*$("#cashasstmain_li").click();	 
	$("#cashatbank_li").click();*/	 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#CobARow").addClass("blinking"); 
}
 

/*Add Row Click */
$("#InvestARow").on("click",function(){
	
	
	
	$("#invNameofChilddiv").css("display","none");
	$("#invChildYrtoterdiv").css("display","none");   
//	$("#txtFldDlgInvDesc").html("");
//	$("#txtFldDlgInvDesc").html('<option value="">--SELECT--</option>'); 
			
	investClearFlds();
	
	$("#txtFldDlgInvtmntId").val(makeid(17));
	$("#txtFldDlgInvtmntRefId").val(newMakeId("INV",15));
			
	childexist();
			
	$("#Investment_Dialog #txtFldDlgInvFABrokerName").val(DEFAULT_FA_AVALLIS);  
	activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
	enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"),false);
	disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
	enablePAR($("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon"),true);
	
	$("#selDlgInvObjInvst").val("No plans");//By Default - Aug_2019
	
	if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
		return;
			
			
//	$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
		
	showFIPAModel('Investment_Dialog','Investment Details');
			
//	$("#Investment_Dialog").find("input[id=txtFldDlgInvtmntMode]").val("I");//instant save added line
			
	$('#Investment_Dialog').on('shown.bs.modal', function () {
	
		$("#Investment_Dialog").find("select[id=selDlgInvOwnership]").focus();
		$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
			if(!validateinvestDetails())return; 
			if(!validateRegInvPlan())return; 
			investRdlyflds(INS_MODE); 
			addInptInvstRows(null); 
			$('#Investment_Dialog').modal('hide'); 
		});  
	});
			
			
});



/*Populate Data */
function addInptInvstRows(dataset){ 
	console.log("inv add -->"+new Date());
	/*var poltbl = document.getElementById("fnaInvestmentTbl");
	var poltbody = poltbl.tBodies[0];
	var poltbllen = poltbody.rows.length;

	var crow = poltbody
			.insertRow(poltbllen);*/
	
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldinvestMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldOwnInvstId"><input type="hidden"  name="txtFldOwnInvRefId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radinvestSelect"/><label>&nbsp;</label></div>'; 

/*Investment details*/

var cell2 = '<select  name="selInvOwner" class="form-control editable form-tablecolor" style="display:none"></select>'+
'<span onmouseover="fipaTooltip(this);" style="width: 60px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 	

var cell3 = '<select name="selInvType" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<span onmouseover="fipaTooltip(this);" style="width: 80px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 	


var cell4 = '<select name="txtFldInvDesc" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<input type="hidden" name="txtFldInvFa" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="60"/>'+
'<select name="txtFldInvAnnlPortfolio" class="form-control editable form-tablecolor"onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<select name="txtFldInvInstname" class="form-control editable form-tablecolor"onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<input type="hidden" name="txtFldInvEstrate" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<span onmouseover="fipaTooltip(this);" style="width: 150px; word-wrap: break-word;display: inline-block;overflow: hidden;"/></span>';//Proposed; 	



var cell5 = '<input type="hidden" name="txtFldInvAmount" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<select  name="selInvPaymethod" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<input type="hidden" name="txtFldInvUnitsAlloc" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<span onmouseover="fipaTooltip(this);"  style="width: 70px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 	

/*NAV details*/


var cell6 = '<input type="hidden" name="txtFldinvCurrNAV" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldInvDate" class="form-control editable form-tablecolor"   maxlength="10" onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldInvCurrbid" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<div class="inputnoborder" style="display:none"><a class="btn btn-default genNavicon"  style="margin-left: 3px;" onmouseover="dhtmltooltip(this,&quot;Fetch NAV&quot;);"/></a></div>'+
'<input type="hidden" name="txtFldInvRemarks" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 70px; word-wrap: break-word;display: inline-block;overflow: hidden;"/></span>';//Proposed; 	

/*Dividend details*/


var cell7 = '<input type="hidden" name="txtFldDividendAmt" class="form-control editable form-tablecolor"  disabled="true" maxlength="10" onmouseover="fipaTooltip(this);" />'+
//'<span  name="" class="form-control editable form-tablecolor "   onmouseover="fipaTooltip(this);" readonly="readonly" style="width: 145px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 
'<select  name="selInvDividendReInv" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" style="display:none" />'+
'<input type="hidden" name="txtFldInvDivPARAmt" class="form-control editable form-tablecolor"  disabled="true" maxlength="10" onmouseover="fipaTooltip(this);"/>'+
'<select  name="selInvDividendBasdOn" class="form-control editable form-tablecolor" disabled="true" onmouseover="fipaTooltip(this);" style="display:none">'+	
//'<input type="hidden" name="txtFldInvDivPARAmt" class="form-control editable form-tablecolor"  disabled="true" maxlength="10" onmouseover="fipaTooltip(this);"/>'+
'<input type="hidden" name="txtFldInvAnnlDivid" class="form-control editable form-tablecolor"  disabled="true"  onmouseover="fipaTooltip(this);" />'+
'<select  name="selInvDividPaymode" class="form-control editable form-tablecolor" disabled="true" onmouseover="fipaTooltip(this);" style="display:none">'+
'<input type="hidden" name="" class="form-control editable form-tablecolor"  disabled="true"  onmouseover="fipaTooltip(this);" />'+
'<span  onmouseover="fipaTooltip(this);"  style="width: 70px; word-wrap: break-word;display: inline-block;overflow: hidden;"/></span>';//Proposed; 	

/*Regular investment plan details*/

var cell8 = '<select  name="txtFldInvAnyRegPlan" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<input type="hidden" name="txtInvRegPlanAmout" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<select  name="selInvRegPlanFreq" class="form-control editable form-tablecolor" disabled="true" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
//'<input type="hidden" name="txtInvRegPlanAmout" class="form-control editable form-tablecolor"  disabled="true"  onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldInvRegPlanFromYrs" disabled="true" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<span  onmouseover="fipaTooltip(this);"  style="width: 100px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 


/*Inv Objective details*/

var cell9 = '<select name="selInvObjective" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" style="display:none"></select>'+
'<input type="hidden" name="selInvYrsToRet" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<select  name="txtFldInvChildname" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" style="display:none" ></select>'+
'<input type="hidden" name="txtFldInvAccPrcnt" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldDivPeriod" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<span  onmouseover="fipaTooltip(this);"  style="width: 100px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 


/*Disbursement plan details*/

var cell10 = '<select name="selBasDisburse" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);"  style="display:none" ></select>'+
'<input type="hidden" name="txtFldDisburseAmt" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldDisburseYrs" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="invCreatedBy"/><input type="hidden" name="invCreatedDate"/>'+
'<span onmouseover="fipaTooltip(this);"  style="width: 100px; word-wrap: break-word;display: inline-block;"/></span>';//Proposed; 

 
fnaInvestmentTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

var $lastRow = $("#fnaInvestmentTbl tbody tr:last");	

var rowCount = $('#fnaInvestmentTbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#fnaInvestmentTbl tbody tr').length : rowCount;

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radinvest"+$lastRow.index()).parent().find('label').attr('for',"radinvest"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgInvtmntId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgInvtmntRefId").val());

/*****Investment ownership*****/

var ownership = $("#selDlgInvOwnership > option").clone();
$lastRow.find("td:eq(2)").find('select[name="selInvOwner"]').append(ownership);
$lastRow.find("td:eq(2)").find('select[name="selInvOwner"]').val($("#selDlgInvOwnership").val());
$lastRow.find("td:eq(2)").find('select[name="selInvOwner"]').on("change",function(){
	
	
	calcTotalInvestAmts();
	calInvSumryRow();  
	newRowInvestCpfTbl($lastRow);
	
	if(!checkOwnerForPayment( $(this),$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]')))return;
	
	syncInvestTblRow($lastRow);
		
	return;
});




var ownShip=$("#selDlgInvOwnership").val();
if(ownShip != '--SELECT--')
{
	$lastRow.find("td:eq(2)").find('span').html(ownShip); //Proposed
}else 
{
	$lastRow.find("td:eq(2)").find('span').html('-'); //Proposed
}


/****Types of investment******/
var typeofInvst = $("#selDlgInvTypesOfInvst > option").clone();
$lastRow.find("td:eq(3)").find('select[name="selInvType"]').append(typeofInvst);
$lastRow.find("td:eq(3)").find('select[name="selInvType"]').val($("#selDlgInvTypesOfInvst").val()); 
$lastRow.find("td:eq(3)").find('select[name="selInvType"]').on("change",function(){
	estimateInvRate($lastRow.find("td:eq(3)").find('select[name="selInvType"]'),$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]'));
	calInvSumryRow();  
	
	syncInvestTblRow($lastRow);
		return;
});


var typInv=$("#selDlgInvTypesOfInvst").val();
if(typInv != '--SELECT--')
{
	$lastRow.find("td:eq(3)").find('span').html(typInv); //Proposed
}else 
{
	$lastRow.find("td:eq(3)").find('span').html('-'); //Proposed
}


/**********/
$lastRow.find("td:eq(4)").find('input[name="txtFldInvFa"]').val($("#txtFldDlgInvFABrokerName").val());

/*****Analysis by portfolio*****/

var analyportflo = $("#txtFldDlgAnalsByPortfolio > option").clone();
$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').append(analyportflo);
$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').val($("#txtFldDlgAnalsByPortfolio").val());
$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').on("change",function(){
	addAvallisFin($(this),$lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'));
	invcloneportflio($lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]'));  
	
	
	syncInvestTblRow($lastRow);
	return;
});
/*****Institutions*****/
var tblinvclearnavprev,tblinvclearnavid;
var invstins =  $("#txtFldDlgInvInstitution > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(2)').append(invstins);
$lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').val($("#txtFldDlgInvInstitution").val()); 
$lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').on("change",function(){
	removeTooltip($(this));
	invcloneportflio($lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]'));  
	syncInvestTblRow($lastRow);
	return;
}); 
$lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'),$lastRow);
	calInvSumryRow(); 
});


/*****Description of investment*****/

var sell =  $("#txtFldDlgInvDesc > option").clone();
$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').append(sell);
invcloneportflio($lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]'));  
$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val($("#txtFldDlgInvDesc").val()); 
$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').on("change",function(){ 
	removeTooltip($(this));
	syncInvestTblRow($lastRow);

    return;
});

$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	calcTotalInvestAmts();
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'),$lastRow);
	
});

/*****Estimated rate*****/

$lastRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val($("#txtFldDlgInvEstInvRate").val());
$lastRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').addClass("applyEvntpCent3");
$lastRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').on("change",function(){
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
		return;
});

var invDes=$("#txtFldDlgInvDesc option:selected").text();
if(invDes != '--SELECT--')
{
	$lastRow.find("td:eq(4)").find('span').html(invDes); //Proposed
}else 
{
	$lastRow.find("td:eq(4)").find('span').html('-'); //Proposed
}

/*****Amount*****/

$lastRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val($("#txtFldDlgInvAmt").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').on("change",function(){
	calcTotalInvestAmts(); 
	newRowInvestCpfTbl($lastRow);
	newRowInvestSRSTbl($lastRow);
	
	syncInvestTblRow($lastRow);
	
		return;
});

/****Payment mode******/

var invstsource =  $("#txtFldDlgInvSource > option").clone();
$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').append(invstsource); 
$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val($("#txtFldDlgInvSource").val());
$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').on("change",function(){
	
	if(!checkInvObjDets($(this),$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]'),$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'),$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]'),$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]')))
		return;

	calcTotalInvestAmts();
	if(!checkOwnerForPayment($lastRow.find("td:eq(2)").find('select[name="selInvOwner"]'), $(this)))return;
	if(!checkPaymentWithObj($lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]'),
			$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]'),
			$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'),
			$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]'),
			$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]')
			))return;
	
	calInvSumryRow(); 
	newRowInvestCpfTbl($lastRow);
	newRowInvestSRSTbl($lastRow);
	syncInvestTblRow($lastRow);
	
	return;
});

//$lastRow.find("td:eq(5)").find('span').html('$' + $("#txtFldDlgInvAmt").val()); //Proposed
//$lastRow.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed

var invSource=$("#txtFldDlgInvSource").val();
var invAmnt=(isEmpty($("#txtFldDlgInvAmt").val())) ? Number("0") : Number($("#txtFldDlgInvAmt").val());
if(invSource == '--SELECT--' && invAmnt == 0)
{
	$lastRow.find("td:eq(5)").find('span').html('-'); //Proposed
}else if(invSource == '--SELECT--' || invAmnt == 0)
{
	if(invAmnt == 0)
		{
		$lastRow.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '-'); //Proposed
		}
	else{
		$lastRow.find("td:eq(5)").find('span').html('-' +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed
	}
	
}
else{
	$lastRow.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed
}


/*****NAV DETAILS*****/
/*****Date invested******/
$lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val($("#txtFldDlgInvDateInvst").val()); 
$lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').datetimepicker(dateOptions).on("change",function(){
	removeTooltip($(this));
	 checkDateFormat($(this));    
			return;
}); 
$lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow);
	calInvSumryRow();
	syncInvestTblRow($lastRow);
});
/*****Current Bid******/
$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val($("#txtFldDlgInvCurBid").val());
$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').on("change",function(){
	currentNavcalc($lastRow); 
	calInvSumryRow(); 
	 calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	 calcTotalInvestAmts();
		return;
}); 

$lastRow.find("td:eq(6)").find('a').on("click",function(){ 
	if(!validateInvstNavDetails($lastRow))return; 
	fetchCurentNAV($lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'));
	currentNavcalc($lastRow);
	 calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	 calcTotalInvestAmts();
	 syncInvestTblRow($lastRow);
	calInvSumryRow(); 
});



/****No of units******/
$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val($("#txtFldDlgInvNoOfUnits").val());
$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').on("change",function(){
	currentNavcalc($lastRow);
	 calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	 calcTotalInvestAmts();
	calInvSumryRow(); 
	syncInvestTblRow($lastRow);
		return;
});
/****Current NAV******/
$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val($("#txtFldDlgInvNAV").val());
$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').addClass("applyEvntUsd"); 
$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').on("change",function(){   
	calInvSumryRow(); 
	 calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	 calcTotalInvestAmts();
	 syncInvestTblRow($lastRow);
		return;
});

var invNAV=(isEmpty($("#txtFldDlgInvNAV").val())) ? Number("0")  : Number($("#txtFldDlgInvNAV").val());
if(invNAV != 0)
{
	$lastRow.find("td:eq(6)").find('span').html('$'+invNAV); //Proposed
}else 
{
	$lastRow.find("td:eq(6)").find('span').html('-'); //Proposed
}




/*****Remarks*****/
$lastRow.find("td:eq(6)").find('input[name="txtFldInvRemarks"]').val($("#selDlgInvRemarks").val());


/*****DIVIDEND DETAILS*****/ 

/*****Div reinvst*****/
var divReinvst =  $("#selDlgDivdReInv > option").clone();
$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').append(divReinvst);
$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val($("#selDlgDivdReInv").val());
$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').on("change",function(){ 
	enableDividends($lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});

/**** Div Based on******/
var divbasedon =  $("#selDlgDivdBasedOn > option").clone();
$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').append(divbasedon);
$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val($("#selDlgDivdBasedOn").val());
$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').on("change",function(){
	
	enablePAR($lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV "]'),$lastRow.find("td:eq(6)").find('a'));
	enableDividends($lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));

	calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});


/****Par value******/ 
$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val($("#txtFldDlgDividendPAR").val());
$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').addClass("applyEvntUsd");

$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').on("change",function(){
	
	calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});



/*****Dividend rate*****/
$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val($("#txtFldDlgAnlDivdRate").val());
$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').addClass("applyEvntpCent");
$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').on("change",function(){  
//	syncInvestTblEditRow($lastRow);  
	
		syncInvestTblRow($lastRow);
		
		calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
		calcTotalInvestAmts();
		return;
}); 

/****Dividend Payment mode******/
var invstpaymode =  $("#selDlgDivdPaymode > option").clone();
$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').append(invstpaymode);
$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val($("#selDlgDivdPaymode").val());
$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').on("change",function(){
	 calcDividendAmount($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	 calcTotalInvestAmts();
});


/****div Amt per annum******/ 
$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val($("#selDlgDividendAmt").val());
$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').on("change",function(){ 
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});

//$lastRow.find("td:eq(7)").find('span').html('$' + $("#selDlgDividendAmt").val()); //Proposed
var divAmnt=(isEmpty($("#selDlgDividendAmt").val())) ? "-" : Number($("#selDlgDividendAmt").val());
if(divAmnt == "-"){
	$lastRow.find("td:eq(7)").find('span').html(divAmnt); //Proposed
}else{
	$lastRow.find("td:eq(7)").find('span').html('$' +divAmnt); //Proposed	
}


/*****REGULAR INVESTMENT PLAN*****/

/*****Regular Inv plan*****/

var invstplan =  $("#txtFldDlgAnyRegInvPlan > option").clone();
$lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').append(invstplan); 
$lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val($("#txtFldDlgAnyRegInvPlan").val());
$lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').on("change",function(){ 
	activeInvAmt($(this),$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]'),$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]'),$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]'));//,$lastRow.find("td:eq(25)").find('input:eq(0)') 
	syncInvestTblRow($lastRow);
		return;
	
});

/*****Investment Frequency*****/
var invstfreq =  $("#selDlgInvFreq > option").clone();
$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').append(invstfreq);
$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val($("#selDlgInvFreq").val());
$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').on("change",function(){ 
	calInvSumryRow();    
	 
		return;
});
/****RSA Amount******/
$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val($("#txtFldDlgAnyRegInvPlanAmt").val());
$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').prop("disabled",false);
$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').on("change",function(){   
	syncInvestTblRow($lastRow);
		return;
});

/****No of years regular investment******/
$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val($("#txtFldDlgNoOfYrsRegInv").val());
$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').addClass("applyEvntYrs");
$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').on("change",function(){
	if(!validatenoofyrs($lastRow))return;  
	syncInvestTblRow($lastRow);
		return;
});
var RspAmnt=(isEmpty($("#txtFldDlgAnyRegInvPlanAmt").val())) ? Number("0") : Number($("#txtFldDlgAnyRegInvPlanAmt").val());
var RegInv=(isEmpty($("#txtFldDlgNoOfYrsRegInv").val())) ? Number("0") : Number($("#txtFldDlgNoOfYrsRegInv").val());
var addboldRspAmt	 = '<span style="font-weight: bold;">'+ '$' +RspAmnt + '</span>'; 
var addboldRspFreq   = '<span style="font-weight: bold;">'+ $("#selDlgInvFreq").val() + '</span>'; 

$lastRow.find("td:eq(8)").find('span').html( addboldRspAmt + ' '  +  addboldRspFreq +  '<br>'  + 'For ' + RegInv +" Years"); //Proposed


/*** INVESTMENT OBJECTIVES*******/
/*** Investment objective*******/
var invstObj =  $("#selDlgInvObjInvst > option").clone();
$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]').append(invstObj);
$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]').val($("#selDlgInvObjInvst").val());
$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]').on("change",function(){ 
	
	 if($(this).val() == "Retirement Planning" || $(this).val() == "CPF-RP" ){
		 mandatoryFldForRetirement($(this),$lastRow,'INVEST');
	 }
	
	 if(!checkPaymentWithObj($lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]'),
				$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]'),
				$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'),
				$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]'),
				$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]')
				))return;
		
		if(!checkInvObjDets($(this),$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]'),$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'),$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]'),$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]')))
			return;

		if($lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val() == "N"){
			if($lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val() ==  "Cash"){
//				mandatoryFldForCob($(this),$lastRow,'INVEST');
			}
		}
		
		
		syncInvestTblRow($lastRow)
		
	return;
	
});

var invObj=$("#selDlgInvObjInvst").val();
if(invObj != '--SELECT--')
{
	$lastRow.find("td:eq(9)").find('span').html(invObj); //Proposed
}else 
{
	$lastRow.find("td:eq(9)").find('span').html('-'); //Proposed
}

/*****Year to retirement*****/


$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val($("#selDlgInvYrToRet").val());
$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').addClass("applyEvntYrs"); 
$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').on("change",function(){   
	syncInvestTblRow($lastRow);
		return;
});


/****Name of child******/
var Nameofchild =  $("#selDlgInvNameOfChild > option").clone();
$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').append(Nameofchild);
$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val($("#selDlgInvNameOfChild").val());
$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').on("change",function(){ 
	getChildYrtoTerEduc($(this),$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'));  
	syncInvestTblRow($lastRow);
		return;
});
/**** % Accumulation******/


$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val($("#selDlgInvPercntAcc").val());
$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').addClass("symbolprCent"); 
$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').on("change",function(){
syncInvestTblRow($lastRow);
});

/*** period of investment*******/




$lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val($("#selDlgInvDivPeriod").val());
$lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').addClass("applyEvntYrs");
$lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').on("change",function(){
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});

/*** DISBURSEMENT PLAN*******/
/*** Basis of disbursement*******/
var disburseOpt = $("#txtFldDlgBscDsbrseOf > option").clone();
$lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]').append(disburseOpt);
$lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]').val($("#txtFldDlgBscDsbrseOf").val());
$lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]').on("change",function(){
	disbursementOpts($lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]'),$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]'),$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]'));
	syncInvestTblRow($lastRow);
});

$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').val($("#txtFldDlgDsbsAmt").val()); 
$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').addClass("applyEvntUsd");
$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').on("change",function(){
	syncInvestTblRow($lastRow);
});


$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').val($("#txtFldDlgDsbsYrs").val());
$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').addClass("applyEvntYrs");
$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').on("change",function(){
	syncInvestTblRow($lastRow);
});

var dsbAmnt=(isEmpty($("#txtFldDlgDsbsAmt").val())) ? Number("0") : Number($("#txtFldDlgDsbsAmt").val());
var dsbYrs=(isEmpty($("#txtFldDlgDsbsYrs").val())) ? Number("0") : Number($("#txtFldDlgDsbsYrs").val());
//$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed
if(dsbAmnt == 0 && dsbYrs == 0)
{
	$lastRow.find("td:eq(10)").find('span').html( '-'); //Proposed
}else if(dsbAmnt == 0 || dsbYrs == 0)
{
	if(dsbAmnt == 0)
		{
		$lastRow.find("td:eq(10)").find('span').html( '-' + ' For ' + dsbYrs +" Years"); //Proposed
		}
	else{
		$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + '-' +" Years"); //Proposed
	}
	
}
else{
	$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed
}

/**********/ 

//applyEventHandlers();//april2020


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});



//DHTML CRUD ICONS
$lastRow.click(function(){
	toggleSingleRow($lastRow);
	crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
});

	if(dataset != null){
		
		
		rowCount = $('#fnaInvestmentTbl tbody tr').length;
		$lastRow.find("td:first").find('span').text(rowCount); 
	
		if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
				$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
		}
				
		var infoDetsArr = new Array();
		var investDes="";
		for(var data in dataset){
			var col = dataset[data];
			var txtFldRspAmt;//Proposed
			var txtFldRspFrequency;//Proposed
			var txtFldYrsRegInvest;//Proposed
			var txtFldDisAnnlAmt;//Proposed
			var txtFldYrsOfDis;//Proposed
			var txtFldAmtInv;
			var txtFldAnnlDivAmt;
			var txtFldPayMthd;
			var txtFldOwner;
			var txtFldInvTyp;
			var textFldInvObj;
			var txtFldcurrNav;
			switch(data){
			
			case "owninvstId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
			
			case "invReferenceId": 
				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);
				if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");} 
				break;
				
			case "invOwner": 
				//selectNullvalChk($lastRow.find("td:eq(2)"),col); 
				selectNullvalChkBySelectName($lastRow.find("td:eq(2)").find('select[name="selInvOwner"]'),col);
				txtFldOwner=col;
				break;
				
			case "invType": 
				//selectNullvalChk($lastRow.find("td:eq(3)"),col);
				selectNullvalChkBySelectName($lastRow.find("td:eq(3)").find('select[name="selInvType"]'),col); 
				txtFldInvTyp=col;
				break;
			 
			case "invFa": 
				$lastRow.find("td:eq(4)").find('input[name="txtFldInvFa"]').val(col); 
				break;
			 
			case "invAnlysByPtflio": 
				/*selectNullvalChk($lastRow.find("td:eq(5)"),col);*/
				$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').val(col);
//				$lastRow.find("td:eq(5)").find('select:eq(0)').trigger("change");
				break;
			
				
			case "invInstname":  
				/*selectNullvalChk($lastRow.find("td:eq(6)"),col);*/
				$lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').val(col);
//				invcloneportflio($lastRow.find("td:eq(6)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'));  
//				$lastRow.find("td:eq(7)").find("select:eq(0)").val(investDes);
				break; 
				
			case "invDesc":		
				investDes=col;
				$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val(col);
			//	selectNullvalChk($lastRow.find("td:eq(4)").find("select:eq(0)"),col);
				/*selectNullvalChk($lastRow.find("td:eq(7)"),col);*/
				invDescriptionarr.push(""+col+"");
				break;
				
				
			case "invEstrate": 
				$lastRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val(col); 
				break;
			
			case "invAmount": 
				$lastRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val(col); 
				txtFldAmtInv=col;
				break;
				
			case "invPaymethod":
				$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val(col); 
				txtFldPayMthd=col;
			//	selectNullvalChk($lastRow.find("td:eq(10)"),col); 		
				break;
				
				/*NAV details*/
				
			case "invDate":
				$lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val(col); 
				break;  
				
				
			case "invCurrbid":
				$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val(col); 
				break;
					
			case "invUnitsalloc":
				$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val(col); 
				break;
				
			case "invCurrentNAV":
				$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val(col); 
				txtFldcurrNav=col;
				break;
				
			case "invRemarks":
				$lastRow.find("td:eq(6)").find('input[name="txtFldInvRemarks"]').val(col); 
				break;
				
				/*Dividend fields*/
			case "invDividendReInv":
				$lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val(col); 
				//selectNullvalChk($lastRow.find("td:eq(16)"),col); 		
				break;
				
			case "invDividendBasdOn":
				$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val(col); 
				//selectNullvalChk($lastRow.find("td:eq(17)"),col); 		
				break;
				
			case "invDivPARAmt":
				$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val(col); 
				break; 
				
			case "invAnnlDividPrct":
				$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val(col); 
				break;
				
			case "invDividPaymode":
				$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val(col); 
				break; 
				
			case "invDividendAmt":
				$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val(col); 
				txtFldAnnlDivAmt=col;
				break; 	
				/*Regular plan*/
			case "invAnyregplan":
				$lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val(col); 
				/*selectNullvalChk($lastRow.find("td:eq(22)"),col); 	*/	
				break;
				
			case "invRegplanFreq":
				$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val(col); 
				/*selectNullvalChk($lastRow.find("td:eq(23)"),col); 	*/
				 txtFldRspFrequency=col;//Proposed
				
				break;
				
			case "invRegplanAmount":
				$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val(col); 
				 txtFldRspAmt=col;//Proposed
				break;
				
	
			case "invRegplanFromyrs":
				$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val(col); 
				 txtFldYrsRegInvest=col;//Proposed
				break;
				
				/*Investment objective*/
			case "invObjective":
				$lastRow.find("td:eq(9)").find('select[name="selInvObjective"]').val(col);
				textFldInvObj=col;
				//selectNullvalChk($lastRow.find("td:eq(26)"),col); 	 
				break;
				
			case "invYrstoret": 
				$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val(col);
				console.log("invYrstoret--->"+col);
				break;
				
			case "invChildname":
				$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val(col);
				/*selectNullvalChk($lastRow.find("td:eq(28)"),col); 	*/	
				break;
				
			case "invAccprcnt":
				$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val(col); 
				break;
				
			case "invDivPeriod":
				$lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val(col); 
				break;
				
			case "invBasisOfDisbursement":
				$lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]').val(col);
				/*selectNullvalChk($lastRow.find("td:eq(31)"),col); */	
				break;
				
			case "invDisburseAmount":
				$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').val(col); 
				 txtFldDisAnnlAmt=col;//Proposed
				break;
				
			case "invDisburseYears":
				$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').val(col); 
				 txtFldYrsOfDis=col;//Proposed
				break;
					
			case "invCreatedBy": 
				$lastRow.find("td:eq(10)").find('input[name="invCreatedBy"]').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "invCreatedDate":
				$lastRow.find("td:eq(10)").find('input[name="invCreatedDate"]').val(col);
				infoDetsArr.push(col);
				break;
				
			case "invModifiedBy":
				infoDetsArr.push(col);
				break;
				
			case "invModifiedDate":
				infoDetsArr.push(col);
				break;	
				
		
				
			}		
			
		}
		
		
		invcloneportflio($lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]'));
		//selectNullvalChk($lastRow.find("td:eq(4)").find('select:eq(0)'),investDes);
		$lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val(investDes);
		
		//$lastRow.find("td:eq(5)").find('span').html('$' +txtFldAmtInv); //Proposed
		//$lastRow.find("td:eq(5)").find('span').html(txtFldPayMthd +  '<br>'  + '$' + txtFldAmtInv); //Proposed
		var owner=txtFldOwner;
		if(owner != '--SELECT--')
		{
			$lastRow.find("td:eq(2)").find('span').html(owner); //Proposed
		}else 
		{
			$lastRow.find("td:eq(2)").find('span').html('-'); //Proposed
		}
		
		var invType=txtFldInvTyp;
		if(invType != '--SELECT--')
		{
			$lastRow.find("td:eq(3)").find('span').html(invType); //Proposed
		}else 
		{
			$lastRow.find("td:eq(3)").find('span').html('-'); //Proposed
		}
		
		var invDes=investDes;//$("#txtFldDlgInvDesc option:selected").text();
		if(invDes != '--SELECT--')
		{
			//$lastRow.find("td:eq(4)").find('span').html(invDes); //Proposed
			$lastRow.find("td:eq(4)").find('span').html($lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"] option:selected').text()); //Proposed
		}else 
		{
			$lastRow.find("td:eq(4)").find('span').html('-'); //Proposed
		}
		
		var invSource=txtFldPayMthd;
		var invAmnt=(isEmpty(txtFldAmtInv)) ? Number("0") : Number(txtFldAmtInv);
		if(invSource == '--SELECT--' && invAmnt == 0)
		{
			$lastRow.find("td:eq(5)").find('span').html('-'); //Proposed
		}else if(invSource == '--SELECT--' || invAmnt == 0)
		{
			if(invAmnt == 0)
				{
				$lastRow.find("td:eq(5)").find('span').html(invSource +  '<br>'  + '-'); //Proposed
				}
			else{
				$lastRow.find("td:eq(5)").find('span').html('-' +  '<br>'  + '$' +invAmnt); //Proposed
			}
			
		}
		else{
			$lastRow.find("td:eq(5)").find('span').html(invSource +  '<br>'  + '$' +invAmnt); //Proposed
		}
		
		var invNAV=(isEmpty(txtFldcurrNav)) ? Number("0")  : Number(txtFldcurrNav);
		if(invNAV != 0)
		{
			$lastRow.find("td:eq(6)").find('span').html('$'+invNAV); //Proposed
		}else 
		{
			$lastRow.find("td:eq(6)").find('span').html('-'); //Proposed
		}
		
		var divAmnt=(isEmpty(txtFldAnnlDivAmt)) ? "-" : Number(txtFldAnnlDivAmt);
		if(divAmnt == "-"){
			$lastRow.find("td:eq(7)").find('span').html(divAmnt); //Proposed
		}else{
			$lastRow.find("td:eq(7)").find('span').html('$' +divAmnt); //Proposed	
		}
		
		//$lastRow.find("td:eq(7)").find('span').html('$' +txtFldAnnlDivAmt); //Proposed
		
		var RspAmt=(isEmpty(txtFldRspAmt)) ? Number("0") : Number(txtFldRspAmt);
		var RegInvest=(isEmpty(txtFldYrsRegInvest)) ? Number("0") : Number(txtFldYrsRegInvest);
		var addboldRspAmt	 = '<span style="font-weight: bold;">'+ '$'+ RspAmt + '</span>'; 
		var addboldRspFreq   = '<span style="font-weight: bold;">'+ txtFldRspFrequency + '</span>'; 

		$lastRow.find("td:eq(8)").find('span').html(addboldRspAmt + ' '  +  addboldRspFreq +  '<br>'  + 'For ' + RegInvest +" Years"); //Proposed
		
		var invObj=textFldInvObj;
		if(invObj != '--SELECT--')
		{
			$lastRow.find("td:eq(9)").find('span').html(invObj); //Proposed
		}else 
		{
			$lastRow.find("td:eq(9)").find('span').html('-'); //Proposed
		}
		
		var dsbAmnt=(isEmpty(txtFldDisAnnlAmt)) ? Number("0") : Number(txtFldDisAnnlAmt);
		var dsbYrs=(isEmpty(txtFldYrsOfDis)) ? Number("0") : Number(txtFldYrsOfDis);
		//$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed

		if(dsbAmnt == 0 && dsbYrs == 0)
		{
			$lastRow.find("td:eq(10)").find('span').html( '-'); //Proposed
		}else if(dsbAmnt == 0 || dsbYrs == 0)
		{
			if(dsbAmnt == 0)
				{
				$lastRow.find("td:eq(10)").find('span').html( '-' + ' For ' + dsbYrs +" Years"); //Proposed
				}
			else{
				$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + '-' +" Years"); //Proposed
			}
			
		}
		else{
			$lastRow.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed
		}
		
		//$lastRow.find("td:eq(10)").find('span').html('$'+txtFldDisAnnlAmt + ' '  +  ' For ' + txtFldYrsOfDis +" Years"); //Proposed

	}else{
		
//		DHTML CRUD ICONS
		crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
		
	
		syncInvestTblRow($lastRow);
		
		calcTotalInvestAmts(); 
		
		var tempPayMeth = $lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val();
		
		if(  tempPayMeth == "CPFOA" || tempPayMeth  == "CPFSA" || 	tempPayMeth  == "CPFMA" || tempPayMeth  == "CPFRA"){
			newRowInvestCpfTbl($lastRow); 
		}
		
		if(tempPayMeth == "SRS"){
			newRowInvestSRSTbl($lastRow);	
		}
		
	}
	
    
	enableDividends($lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
	disbursementOpts($lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]'),$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]'),$lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]'));
	enablePAR($lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'),$lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]'),$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$lastRow.find("td:eq(6)").find('a')); 
	invpaymentmtd($lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]'),$lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]'));
	calInvSumryRow();
	activeInvAmt($lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]'),$lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]'),$lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]'),$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]'));//,$lastRow.find("td:eq(25)").find('input:eq(0)')
	if(!checkInvObjDets($lastRow.find("td:eq(9)").find('select[name="selInvObjective"]'),$lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]'),$lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]'),$lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]'),$lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]')))
		return;
	
}


/*Mandatory Fields Tooltip*/ 
$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

//DHTML SELECT ALL
function SelAllSelfnaInvestment(obj){
	
	if($(obj).is(":checked")){
		
		$('#fnaInvestmentTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#InvestDRow").attr("disabled",false);
		$('#fnaInvestmentTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaInvestmentTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#InvestERow").attr("disabled",true);
			$("#InvestDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#InvestERow").attr("disabled",false);
			$("#InvestDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#InvestERow").attr("disabled",true);*/
			$("#InvestDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaInvestmentTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaInvestmentTbl tbody tr').removeClass("selected");
		
		/*$("#InvestERow").attr("disabled",true);
		$("#InvestDRow").attr("disabled",true);*/
		
	}
	
}
/*Edit Row Click */
$("#InvestERow").on("click",function(){ 
	InvestVRow(); 
});


/*View Row Click */
function InvestVRow(){

	activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
	var isOneRowSelected=0;
	var $rowCount = $('#fnaInvestmentTbl tbody tr').length;	
//	var $lastRow = $("#fnaInvestmentTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	
	/*$("#fnaInvestmentTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	
	$("#fnaInvestmentTbl tbody").find('input[name="radinvestSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaInvestmentTbl tbody").find('input[name="radinvestSelect"]').each(function(){ //Checkbox selection
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
				 
				 	investRdlyflds($mode);
				 	investfilldlgval($row);
//					checkInvObjDetsRem($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"));
					yrtoretirementChk($("#selDlgInvYrToRet"));
					activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
					invpaymentmtd($("#txtFldDlgInvSource"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"));
					enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
					enablePAR($("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon"));
					disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
					if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
						return;
						
					showFIPAModel('Investment_Dialog','Investment Details');
					
					$("#Investment_Dialog").find("select[id=selDlgInvOwnership]").focus();
					
					$('#Investment_Dialog').on('shown.bs.modal', function () {
					
						$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
									
							 if(!validateinvestDetails())return; 
							 if(!validateRegInvPlan())return
							
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			investfilldomval($RowId,$row); 
					     		}  
							 
							 syncInvestTblRow($row);
						 		
//						 		checkInvObjDetsRem($row.find("td:eq(26)").find('select:eq(0)'),$row.find("td:eq(28)").find('select:eq(0)'),$row.find("td:eq(27)").find('input:eq(0)'));
						 		
//						 	 	newRowInvestCpfEditTbl($row);//CODRU
						 		newRowInvestCpfTbl($row);
						 		newRowInvestSRSTbl($row);
						 		
							 	calcTotalInvestAmts(); 
							 	enableDividends($row.find("td:eq(7)").find('select[name="selInvDividendReInv"] '),$row.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$row.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$row.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]'),$row.find("td:eq(7)").find('select[name="selInvDividPaymode"]'),$row.find("td:eq(7)").find('input[name="txtFldDividendAmt"]'));
							 	enablePAR($row.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]'),$row.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]'),$row.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]'),$row.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]'),$row.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]'),$row.find("td:eq(6)").find('a'));
							 	disbursementOpts($row.find("td:eq(10)").find('select[name="selBasDisburse"]'),$row.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]'),$row.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]'));
							 	calInvSumryRow();  
							 	
								$('#Investment_Dialog').modal('hide'); 
								investClearFlds();
								
								crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
							
						});
						
						$("#Investment_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
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
$("#InvestDRow").on("click",function(){ 
	var flg=true;
	var rowCount = fnaInvestmentTbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#fnaInvestmentTbl tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
	} 
	if(flg){
		
		$("#confirmationalertmsgdiv #confalertimg").html("");
		
		$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
		});
		
		
		
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){ 
				$('#fnaInvestmentTbl tbody').find('input[type=checkbox]').each(function(){
					if($(this).is(":checked")){  
						
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
						var invPKId = $(this).parents("tr").find("td:first").find('input:eq(1)').val();
						
						var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference 
						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid"); 
//						if(isValidObject(refId) && refFlg){  
					 
//							if(!isEmpty(refId.val())){
							   
								var message=false;
								 
								/*$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//										IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
										
									}
								});*/
								
								deleteAllRetPlanByRefId(refId.val());
								deleteAllRetPlanByRefId("DIVI"+refId.val());
								  
								/*$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//									 	cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
									 	
									}
								});*/
								
								deleteAllCPFByRefId(refId.val());
								deleteAllCPFByRefId("DIVI"+refId.val());
								 
								/*$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//										srsTable.row($(this).closest("tr")).remove().draw();
										
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												srsTable.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
										
									}
								});	*/
								
								deleteAllSRSByRefId(refId.val());
								deleteAllSRSByRefId("DIVI"+refId.val());
								 
							 $("#fnaInvestmentTbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
										 if(refId.val() == $(this).val()){
											 
											if(message){
												applyErrorToastrAlert("There is row exists in other sections, will also be deleted");
											}
											
//										 fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
											
											if( mode == "I"){
												if(isEmpty(invPKId)){
													fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
													reOrderInvestmentVisibleRows("fnaInvestmentTbl");
												}else{
													$(this).closest("tr").hide();
													$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
													reOrderInvestmentVisibleRows("fnaInvestmentTbl");
												}
											}
											
									}
										 
								});
							 
//							}else{
//								
//								if( mode == "I"){
//									if(isEmpty(invPKId)){
//										fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
//									}else{
//										$(this).closest("tr").hide();
//										$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
//									}
//								}
//								
//							}
//						}else{
//							
//							if( mode == "I"){
//								if(isEmpty(invPKId)){
//									fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
//								}else{
//									$(this).closest("tr").hide();
//									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
//								}
//							}
//						} 
						
						$(this).attr("checked",false); 
					}
				}); 
				
				//reOrderVisibleRows("fnaInvestmentTbl");
				reOrderInvestmentVisibleRows("fnaInvestmentTbl");
				//reOrderVisibleRows("IncAssRetPlgtbl"); 
				reOrderIncAsstVisibleRows("IncAssRetPlgtbl"); 
				reOrderVisibleRows("cpfAccAddDedTable");
				reOrderVisibleRows("srsTable");
				
				
			/*$('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
					
					var oldval = $(this).val();
					var bankrowindex= $(this).closest("tr").index();
					var newval = "INV_"+bankrowindex;
					
					
					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					
					$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
				     	   if(oldval == $(this).val()){
				     		   $(this).val(newval);
				     	   }
				        });
					
					$(this).val(newval);
				});*/


				calInvSumryRow(); 
				calcTotalInvestAmts();
				
			
				$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
		
}


//	DHTML CRUD ICONS
	var rc = fnaInvestmentTbl.row().count();
	if(rc ==0){
		$("#SelfnaInvestment").prop("checked",false);
		crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
	}
//	DHTML CRUD ICONS

});

/*Clear Fields */
function investClearFlds(){
	$("#Investment_Dialog").find("input[type=text]").val("");
	$("#Investment_Dialog").find("textarea").val("");
	$("#Investment_Dialog").find("select").val("");
	$("#Investment_Dialog #txtFldDlgInvDesc option").remove(0);
	$('#Investment_Dialog #txtFldDlgInvDesc').append( '<option value="">--SELECT--</option>' ); 
}

/*Disabled/Readonly Fields */
function investRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#Investment_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#Investment_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateinvestDetails(){
	 
	/*if(!(validateFocusFlds('Investment_Dialog','selDlgInvOwnership', IPINVST_OWNNAME))) return;
	if(!(validateFocusFlds('Investment_Dialog','selDlgInvTypesOfInvst',IPINVST_TYPE))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDateInvst', IPINST_DATEINV))) return; */
	
	  return true; 
}
 

/*Mandatory Fields Tooltip*/ 
$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  


/* Filling Model Fields*/
function investfilldlgval($lastRow){
//	  $('#Investment_Dialog #txtFldDlgInvtmntMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#Investment_Dialog #txtFldDlgInvtmntId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#Investment_Dialog #txtFldDlgInvtmntRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#Investment_Dialog #selDlgInvOwnership').val($lastRow.find("td:eq(2)").find('select[name="selInvOwner"]').val());
	  $('#Investment_Dialog #selDlgInvTypesOfInvst').val($lastRow.find("td:eq(3)").find('select[name="selInvType"]').val());
	  $('#Investment_Dialog #txtFldDlgInvFABrokerName').val($lastRow.find("td:eq(4)").find('input[name="txtFldInvFa"]').val());
	  $('#Investment_Dialog #txtFldDlgAnalsByPortfolio').val($lastRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').val());
	  addAvallisFin($('#Investment_Dialog #txtFldDlgAnalsByPortfolio'),$('#Investment_Dialog #txtFldDlgInvInstitution'));
	  $('#Investment_Dialog #txtFldDlgInvInstitution').val($lastRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').val());
	  

	  /**/
	  
	  invcloneportflio($('#Investment_Dialog #txtFldDlgInvInstitution'),$('#Investment_Dialog #txtFldDlgAnalsByPortfolio'),$('#Investment_Dialog #txtFldDlgInvDesc'));  
		
	   /**/
		 
	  
	  $('#Investment_Dialog #txtFldDlgInvDesc').val($lastRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val()); 
	  $('#Investment_Dialog #txtFldDlgInvEstInvRate').val($lastRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val());
	  $('#Investment_Dialog #txtFldDlgInvAmt').val($lastRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val());
	  $('#Investment_Dialog #txtFldDlgInvSource').val($lastRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val());
	  
	  $('#Investment_Dialog #txtFldDlgInvDateInvst').val($lastRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val());
	  $('#Investment_Dialog #txtFldDlgInvCurBid').val($lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val());
	  $('#Investment_Dialog #txtFldDlgInvNoOfUnits').val($lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val());
	  $('#Investment_Dialog #txtFldDlgInvNAV').val($lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val());
	  $('#Investment_Dialog #selDlgInvRemarks').val($lastRow.find("td:eq(6)").find('input[name="txtFldInvRemarks"]').val());
	  
	  $('#Investment_Dialog #selDlgDivdReInv').val($lastRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val());
	  $('#Investment_Dialog #selDlgDivdBasedOn').val($lastRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val());
	  $('#Investment_Dialog #txtFldDlgDividendPAR').val($lastRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val());
	  $('#Investment_Dialog #txtFldDlgAnlDivdRate').val($lastRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val());
	  $('#Investment_Dialog #selDlgDivdPaymode').val($lastRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val());
	  $('#Investment_Dialog #selDlgDividendAmt').val($lastRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val());
	  

	  $('#Investment_Dialog #txtFldDlgAnyRegInvPlan').val($lastRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val());
	  $('#Investment_Dialog #selDlgInvFreq').val($lastRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val());
	  $('#Investment_Dialog #txtFldDlgAnyRegInvPlanAmt').val($lastRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val()); 
	  $('#Investment_Dialog #txtFldDlgNoOfYrsRegInv').val($lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val());
	  
	  
	  $('#Investment_Dialog #selDlgInvObjInvst').val($lastRow.find("td:eq(9)").find('select[name="selInvObjective"]').val());
	  $('#Investment_Dialog #selDlgInvYrToRet').val($lastRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val());
	  $('#Investment_Dialog #selDlgInvNameOfChild').val($lastRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val());
	  $('#Investment_Dialog #selDlgInvPercntAcc').val($lastRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val());
	  $('#Investment_Dialog #selDlgInvDivPeriod').val($lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val());
	  
	 
	 	  
	  $('#Investment_Dialog #txtFldDlgBscDsbrseOf').val($lastRow.find("td:eq(10)").find('select[name="selBasDisburse"]').val());
	  $('#Investment_Dialog #txtFldDlgDsbsAmt').val($lastRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').val());
	  $('#Investment_Dialog #txtFldDlgDsbsYrs').val($lastRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').val()); 
	  $('#Investment_Dialog #txtFldDlgInvtmntCrtdBy').val($lastRow.find("td:eq(10)").find('input[name="invCreatedBy"]').val());
	  $('#Investment_Dialog #txtFldDlgInvtmntCrtdDate').val($lastRow.find("td:eq(10)").find('input[name="invCreatedDate"]').val());
	
}

/* Filling Table Fields*/
function investfilldomval($RowId,$row){
	
	
	$row.find("td:eq(0)").find('input:eq(1)').val($('#Investment_Dialog #txtFldDlgInvtmntId').val())  ;
	$row.find("td:eq(0)").find('input:eq(2)').val($('#Investment_Dialog #txtFldDlgInvtmntRefId').val())  ;

	
	$row.find("td:eq(2)").find('select[name="selInvOwner"]').val($("#selDlgInvOwnership").val()); 
	var ownShip=$("#selDlgInvOwnership").val();
	if(ownShip != '--SELECT--')
	{
		$row.find("td:eq(2)").find('span').html(ownShip); //Proposed
	}else 
	{
		$row.find("td:eq(2)").find('span').html('-'); //Proposed
	}
	
	$row.find("td:eq(3)").find('select[name="selInvType"]').val($("#selDlgInvTypesOfInvst").val());
	
	var typInv=$("#selDlgInvTypesOfInvst").val();
	if(typInv != '--SELECT--')
	{
		$row.find("td:eq(3)").find('span').html(typInv); //Proposed
	}else 
	{
		$row.find("td:eq(3)").find('span').html('-'); //Proposed
	}

	
	$row.find("td:eq(4)").find('input[name="txtFldInvFa"]').val($("#txtFldDlgInvFABrokerName").val()); 
	$row.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').val($("#txtFldDlgAnalsByPortfolio").val()); 
	addAvallisFin($row.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"] '),$row.find("td:eq(4)").find('select[name="txtFldInvInstname"]'));
	$row.find("td:eq(4)").find('select[name="txtFldInvInstname"] ').val($("#txtFldDlgInvInstitution").val()); 
	
	invcloneportflio($row.find("td:eq(4)").find('select[name="txtFldInvInstname"] '),$row.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]'),$row.find("td:eq(4)").find('select[name="txtFldInvDesc"]'));  

	$row.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val($("#txtFldDlgInvDesc").val()); 
	$row.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val($("#txtFldDlgInvEstInvRate").val()); 
	
	
	var invDes=$("#txtFldDlgInvDesc option:selected").text();
	if(invDes != '--SELECT--')
	{
		$row.find("td:eq(4)").find('span').html(invDes); //Proposed
	}else 
	{
		$row.find("td:eq(4)").find('span').html('-'); //Proposed
	}

	
	$row.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val($("#txtFldDlgInvAmt").val()); 
	$row.find("td:eq(5)").find('select[name="selInvPaymethod"]').val($("#txtFldDlgInvSource").val());
	
	//$row.find("td:eq(5)").find('span').html('$' +$("#txtFldDlgInvAmt").val()); //Proposed
//	$row.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed

	var invSource=$("#txtFldDlgInvSource").val();
	var invAmnt=(isEmpty($("#txtFldDlgInvAmt").val())) ? Number("0") : Number($("#txtFldDlgInvAmt").val());
	if(invSource == '--SELECT--' && invAmnt == 0)
	{
		$row.find("td:eq(5)").find('span').html('-'); //Proposed
	}else if(invSource == '--SELECT--' || invAmnt == 0)
	{
		if(invAmnt == 0)
			{
			$row.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '-'); //Proposed
			}
		else{
			$row.find("td:eq(5)").find('span').html('-' +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed
		}
		
	}
	else{
		$row.find("td:eq(5)").find('span').html($("#txtFldDlgInvSource").val() +  '<br>'  + '$' +$("#txtFldDlgInvAmt").val()); //Proposed
	}
	
	
	$row.find("td:eq(6)").find('input[name="txtFldInvDate"]').val($("#txtFldDlgInvDateInvst").val()); 
	$row.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val($("#txtFldDlgInvCurBid").val());
	$row.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val($("#txtFldDlgInvNoOfUnits").val()); 
	$row.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val($("#txtFldDlgInvNAV").val());
	
	var invNAV=(isEmpty($("#txtFldDlgInvNAV").val())) ? Number("0")  : Number($("#txtFldDlgInvNAV").val());
	if(invNAV != 0)
	{
		$row.find("td:eq(6)").find('span').html('$'+invNAV); //Proposed
	}else 
	{
		$row.find("td:eq(6)").find('span').html('-'); //Proposed
	}

	
	$row.find("td:eq(6)").find('input[name="txtFldInvRemarks"]').val($("#selDlgInvRemarks").val());  

	$row.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val($("#selDlgDivdReInv").val());  
	$row.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val($("#selDlgDivdBasedOn").val());
	$row.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val($("#txtFldDlgDividendPAR").val());
	$row.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val($("#txtFldDlgAnlDivdRate").val()); 
	$row.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val($("#selDlgDivdPaymode").val());  
	$row.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val($("#selDlgDividendAmt").val()); 
	
	//$row.find("td:eq(7)").find('input:eq(0)').val($("#selDlgDividendAmt").val()); 
	var divAmnt=(isEmpty($("#selDlgDividendAmt").val())) ? "-" : Number($("#selDlgDividendAmt").val());
	if(divAmnt == "-"){
		$row.find("td:eq(7)").find('span').html(divAmnt); //Proposed
	}else{
		$row.find("td:eq(7)").find('span').html('$' +divAmnt); //Proposed	
	}
	
	
	$row.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val($("#txtFldDlgAnyRegInvPlan").val()); 
	$row.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val($("#selDlgInvFreq").val()); 
	$row.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val($("#txtFldDlgAnyRegInvPlanAmt").val()); 
	$row.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val($("#txtFldDlgNoOfYrsRegInv").val()); 
	
	
	var RspAmt=(isEmpty($("#txtFldDlgAnyRegInvPlanAmt").val())) ? Number("0") : Number($("#txtFldDlgAnyRegInvPlanAmt").val());
	var RegInv=(isEmpty($("#txtFldDlgNoOfYrsRegInv").val())) ? Number("0") : Number($("#txtFldDlgNoOfYrsRegInv").val());
	var addboldRspAmt	 = '<span style="font-weight: bold;">'+ '$' + RspAmt + '</span>'; 
	var addboldRspFreq   = '<span style="font-weight: bold;">'+ $("#selDlgInvFreq").val() + '</span>'; 

	$row.find("td:eq(8)").find('span').html( addboldRspAmt + ' '  +  addboldRspFreq +  '<br>'  + 'For ' + RegInv +" Years"); //Proposed

	
	$row.find("td:eq(9)").find('select[name="selInvObjective"]').val($("#selDlgInvObjInvst").val()); 
	$row.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val($("#selDlgInvYrToRet").val()); 
	$row.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val($("#selDlgInvNameOfChild").val()); 
	$row.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val($("#selDlgInvPercntAcc").val()); 
	$row.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val($("#selDlgInvDivPeriod").val());
	
	var InvObj=$("#selDlgInvObjInvst").val();
	if(InvObj != '--SELECT--')
	{
		$row.find("td:eq(9)").find('span').html(InvObj); //Proposed
	}else 
	{
		$row.find("td:eq(9)").find('span').html('-'); //Proposed
	}
	   
	$row.find("td:eq(10)").find('select[name="selBasDisburse"]').val($("#txtFldDlgBscDsbrseOf").val()); 
	$row.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').val($("#txtFldDlgDsbsAmt").val()); 
	$row.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').val($("#txtFldDlgDsbsYrs").val()); 
	
	$row.find("td:eq(10)").find('input[name="invCreatedBy"]').val($('#txtFldDlgInvtmntCrtdBy').val());
	$row.find("td:eq(10)").find('input[name="invCreatedDate"]').val($('#txtFldDlgInvtmntCrtdDate').val());

//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line
	var dsbAmnt=(isEmpty($("#txtFldDlgDsbsAmt").val())) ? Number("0") : Number($("#txtFldDlgDsbsAmt").val());
	var dsbYrs=(isEmpty($("#txtFldDlgDsbsYrs").val())) ? Number("0") : Number($("#txtFldDlgDsbsYrs").val());
	//$row.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed
	if(dsbAmnt == 0 && dsbYrs == 0)
	{
		$row.find("td:eq(10)").find('span').html( '-'); //Proposed
	}else if(dsbAmnt == 0 || dsbYrs == 0)
	{
		if(dsbAmnt == 0)
			{
			$row.find("td:eq(10)").find('span').html( '-' + ' For ' + dsbYrs +" Years"); //Proposed
			}
		else{
			$row.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + '-' +" Years"); //Proposed
		}
		
	}
	else{
		$row.find("td:eq(10)").find('span').html( '$'+ dsbAmnt   + ' For ' + dsbYrs +" Years"); //Proposed
	}
	
	//$row.find("td:eq(10)").find('span').html( '$'+ $("#txtFldDlgDsbsAmt").val()   + ' For ' + $("#txtFldDlgDsbsYrs").val() +" Years"); //Proposed

}





/*###########################################################################################################################################################*/


$("#txtFldDlgInvCurBid,#txtFldDlgInvNoOfUnits").on("change",function(){
	currentNavcalc(null);
});
$("#txtFldDlgNoOfYrsRegInv,#selDlgInvDivPeriod").on("change",function(){//,#txtFldDlgTotNoOfYrsStayInv
	if(!validatenoofyrs(null))return;
});

function currentNavcalc($lastRow){
	var curbidprice=(isEmpty($("#txtFldDlgInvCurBid").val())) ? Number(0) : Number($("#txtFldDlgInvCurBid").val()); 
	var noofunits=(isEmpty($("#txtFldDlgInvNoOfUnits").val())) ? Number(0) : Number($("#txtFldDlgInvNoOfUnits").val());
		  
	var currentNav=curbidprice*noofunits;
	$("#txtFldDlgInvNAV").val(roundNumber(currentNav));
	
	
	if($lastRow){
		var curbidpricerow=(isEmpty($lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val())) ? Number(0) : Number($lastRow.find("td:eq(6)").find('input[name="txtFldInvCurrbid"]').val()); 
		var noofunitsrow=(isEmpty($lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val())) ? Number(0) : Number($lastRow.find("td:eq(5)").find('input[name="txtFldInvUnitsAlloc"]').val());
			  
		var currentNavrow=curbidpricerow*noofunitsrow;
		$lastRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val(roundNumber(currentNavrow));
	} 
}


function validatenoofyrs($lastRow){
	
	var rspyrs=$("#txtFldDlgNoOfYrsRegInv").val(); 
	
	var perdofinvobj = $("#selDlgInvDivPeriod");
	var perdofinv=perdofinvobj.val();
	
	
	if($lastRow){
		rspyrs=$lastRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val(); 
		perdofinvobj = $lastRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]'); 
		perdofinv=perdofinvobj.val();
	}
		    
	if(!isEmpty(rspyrs) ){
		if(!isEmpty(perdofinv)){
		if(Number(perdofinv) < Number(rspyrs)){
			applyErrorToastrAlert("Period of Investment should be greater than No.of Yrs of Regular Investment",perdofinvobj);
			
//			showErrorTip($("#txtFldDlgNoOfYrsRegInv"),"'No. of Yrs of Regular Investment' field should not exceed the 'Period of Investment' field");
			
			perdofinvobj.val("");
			return false;
		}
		}
	}
	
	/*if($lastRow){
		
		var noofyrsrow=$lastRow.find("td:eq(25)").find('input:eq(0)').val(); 
		var totnoyrsrow=$lastRow.find("td:eq(30)").find('input:eq(0)').val();
		
		if(!isEmpty(noofyrsrow) ){
			if(!isEmpty(totnoyrsrow)){
			if(Number(totnoyrsrow) < Number(noofyrsrow)){
				applyErrorToastrAlert("Total number of years to stay invested should be greater than Number of years of regular investment",$lastRow.find("td:eq(30)").find('input:eq(0)'));
				$lastRow.find("td:eq(30)").find('input:eq(0)').val("");
				return false;
			}
			}
		}
	}*/ 
	
	return true;
}



function UpdInvstmntChildName(existingName,newchildname){
 
	
	var table = document.getElementById("fnaInvestmentTbl"); 
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	var editFlag = 0;
	 
	
	var Insrnceindex = fnaInvestmentTbl.row().count();
	 
 
		if(Insrnceindex>0){
	for(var editrow=0;editrow<rowCount;editrow++){ 
			 var editCurRow = tbody.rows[editrow];   
			 if( existingName == editCurRow.cells[9].childNodes[1].value ){  
				 var RowId=editCurRow.rowIndex; 
				 table.rows[RowId].cells[9].childNodes[1].value = newchildname;  
			 } 
		}
	}
		return true;	
}


  
function activeInvAmt(elmid,freq,amt,noofyrs) {//,stayinv removed from screens
	var option = elmid.val();
	
	if (option == "Y") {  
		amt.prop("disabled", false);
		freq.prop("disabled", false);
		noofyrs.prop("disabled", false);
	}else {  
		amt.prop("disabled", true);
		amt.val("");
		freq.prop("disabled", true);
		freq.val("");
		noofyrs.prop("disabled", true);
		noofyrs.val("");
	}
		
	return true;
}
 
	
$("#txtFldDlgAnyRegInvPlan").on("change",function(){
	activeInvAmt($(this),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv") 
});

	
$("#selDlgInvObjInvst").on("change",function(){
	
	if($(this).val() == "Retirement Planning" || $(this).val() == "CPF-RP"){
//		 if(!validationRetirementScreen())return; 
		 mandatoryFldForRetirement($(this),null,'INVEST');
	 }

//	if(!checkPaymentInvObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
	
	if(!checkPaymentWithObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst"),$("#selDlgInvYrToRet"),$("#selDlgInvNameOfChild"),$("#selDlgInvPercntAcc"))){
		return;
	} 
	if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
		return;
		
	
	
	
	 
	
	
});

$("#txtFldDlgInvSource").on("change",function(){
	 
	
	invpaymentmtd($(this),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"));
	if(!checkOwnerForPayment( $("#selDlgInvOwnership"),$("#txtFldDlgInvSource")))return;
//	if(!checkPaymentInvObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
	if(!checkPaymentWithObj(
			$("#txtFldDlgInvSource"),
			$("#selDlgInvObjInvst"),
			$("#selDlgInvYrToRet"),
			$("#selDlgInvNameOfChild"),
			$("#selDlgInvPercntAcc")
			))return;
	if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
		return;
	
});

$("#selDlgInvOwnership").on("change",function(){
	if(!checkOwnerForPayment( $("#selDlgInvOwnership"),$("#txtFldDlgInvSource")))return;
});



function  checkOwnerForPayment(owner,source){
	var ownership = owner.val();
	var paymentmeth = source.val();
	if(!(ownership==null) && !(paymentmeth == null)){
	if(!isEmpty(ownership) && !isEmpty(paymentmeth) ){
	if( ownership  == "Joint" && (paymentmeth.toUpperCase() != "CASH")){
		applyErrorToastrAlert("Joint ownership will not accept any CPFOA, CPFSA or SRS as investment source", '');
		source.val("");
		return false;
	  }
	}
	}
	return true;
}

function  checkPaymentWithObj(paymtdobject,obj,yrstoret,childname,accmprcnt){
	var paymtd = paymtdobject.val();
	var objv = obj.val();
	 
	if(!isEmpty(paymtd) && !isEmpty(objv) ){
		if((isSRSRelated(paymtd) || isCPFRelated(paymtd) ) && (objv == "Education Planning")){
	//		applyErrorToastrAlert("Education planning is not applicable for CPF related payment methods", '');
			showErrorTip(obj,"Education planning is not applicable for CPF related payment methods");
			obj.val("No plans");
			if(!checkInvObjDets(obj,childname,yrstoret,accmprcnt,paymtdobject))
				return;
			return false;
		  }
	
		if(( !isCPFRelated(paymtd)) && (objv == "CPF-RP")){
//		applyErrorToastrAlert("Education planning is not applicable for CPF related payment methods", '');
		showErrorTip(obj,"CPF - Retirement planning is applicable to CPF related payment methods");
		
		obj.val("No plans");
		if(!checkInvObjDets(obj,childname,yrstoret,accmprcnt,paymtdobject))
			return;
		return false;
	  }
	}
	
	
	return true;
}


function checkPaymentInvObj(source,invobj){
	var paymentmeth = source.val();
	var invobjective = invobj.val();
//	if(!(paymentmeth==null) && !(invobjective == null)){
if(!isEmpty(paymentmeth) && !isEmpty(invobjective) ){

	paymentmeth = paymentmeth.toUpperCase();
	invobjective = invobjective.toUpperCase();
	
	if( !isEmpty(paymentmeth) && !(paymentmeth == "CASH")  
			&& (invobjective == "Education Planning")){
		applyErrorToastrAlert("For CPF related investment, Education Planning will not available", '');
		invobj.val("");
		return false;
	}
}
	
//}
	return true;
}

function checkInvObjDets(elmid,child,ret,percnt,payment){
	$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html("");
	
	var invobj = elmid.val(); 
	
	if(!(isEmpty(invobj))){ 
			if(invobj == "Education Planning"){
				
				
				
				$("#invNameofChilddiv").css("display","block");
				$("#invChildYrtoterdiv").css("display","block");
				$("#invPerOfAccmldiv").css("display","block");  
				$("#divInvPerd").css("display","block");   
				
				$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html(" Years to Tertiary&nbsp;<a class='btn btn-default addinfoicon' id='popAselDlgInvYrToRet'></a>");
				showPopOver('popAselDlgInvYrToRet',RET_TEREDU);
				
//				ret.val("");
				ret.prop("disabled",false); 
				child.prop("disabled",false);
				percnt.prop("disabled",false);
				
				
				 
				
				
			}else if(invobj == "Retirement Planning" || invobj == "CPF-RP"){ 
				
				$("#invNameofChilddiv").css("display","none");
				$("#invChildYrtoterdiv").css("display","block"); 
				$("#invPerOfAccmldiv").css("display","block");
				$("#divInvPerd").css("display","block");
				
				$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html("Yr To Retirement&nbsp;<a class='btn btn-default addinfoicon' id='popBselDlgInvYrToRet'></a>");   
				showPopOver('popBselDlgInvYrToRet',RET_YRSTOTER);
				
				child.val("");
				if(isEmpty(ret.val())){ 
					ret.val($("#retYrstoret").val()) ; }
				
				ret.prop("disabled",false); 
				child.prop("disabled",true);
				percnt.prop("disabled",false);
				
			}else if(invobj == "No plans"){
				
				$("#invNameofChilddiv").css("display","none");
				$("#invChildYrtoterdiv").css("display","none"); 
				$("#invPerOfAccmldiv").css("display","none");
				$("#divInvPerd").css("display","block");
				
				child.val("");
				ret.val("");
				
				ret.prop("disabled",true);  
				child.prop("disabled",true);
				percnt.prop("disabled",true);
			}
			
		}else{
			
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","none"); 
			$("#invPerOfAccmldiv").css("display","none");
			$("#divInvPerd").css("display","block");  
			
			child.val("");
			ret.val("");
			
			ret.prop("disabled",true);  
			child.prop("disabled",true);
			percnt.prop("disabled",true);
			
		} 
	return true; 
}

/*function checkInvObjDetsRem(elmid,child,ret){
	var invobj = elmid.val(); 
	if(!(isEmpty(invobj))){ 
		if(invobj == "Education Planning"){
			$("#invNameofChilddiv").css("display","block");
			$("#invChildYrtoterdiv").css("display","block"); 
			$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").text("Yrs in Tertiary Education");
			ret.prop("disabled",false);
			child.prop("disabled",false);
		}else if(invobj == "Retirement Planning"){  
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","block"); 
			$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").text("Yr to Retirement");   
			 
		//	ret.prop("disabled",true); 
			child.prop("disabled",true);
		}else if(invobj == "No plans"){ 
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","none"); 
			ret.prop("disabled",true);  
			child.prop("disabled",true);
		}  
	}else{ 
		$("#invNameofChilddiv").css("display","none");
		$("#invChildYrtoterdiv").css("display","none"); 
		ret.prop("disabled",true);  
		child.prop("disabled",true);
	} 
return true;

}*/
 
function validateRegInvPlan(){
	
	/*if($("#txtFldDlgAnyRegInvPlan").val() == "Y"){  
		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgAnyRegInvPlanAmt', IPINVST_AMT))) return;
		if(!(validateFocusFlds('Investment_Dialog','selDlgInvFreq',IPINVST_FREQ))) return;
		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgNoOfYrsRegInv', IPINST_NOOFYRS))) return;
//		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgTotNoOfYrsStayInv', IPINST_YRSTOSTAY))) return;
	}*/
	return true;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgAnyRegInvPlanAmt,#selDlgInvFreq,#txtFldDlgNoOfYrsRegInv,#txtFldDlgTotNoOfYrsStayInv").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});


function calInvSumryRow(){
	 
	 var $rowCount = fnaInvestmentTbl.rows().count();			
//	 var $lastRow = $("#fnaInvestmentTbl tbody tr:last");  
	 
	 /* Self*/
	 var slfBdCashCur=0,slfBdCpfOACur=0,slfBdCpfSACur=0,slfBdCpfRACur=0,slfBdSrsCur=0,slfBdTotCur=0;//Bonds Current
	 var slfBdCashReg=0,slfBdCpfOAReg=0,slfBdCpfSAReg=0,slfBdCpfRAReg=0,slfBdSrsReg=0,slfBdTotReg=0;//Bonds Regular
	 
	 var slfDivCashCur=0,slfDivCpfOACur=0,slfDivCpfSACur=0,slfDivCpfRACur=0,slfDivSrsCur=0,slfDivTotCur=0;//Dividend Current
	 var slfDivCashReg=0,slfDivCpfOAReg=0,slfDivCpfSAReg=0,slfDivCpfRAReg=0,slfDivSrsReg=0,slfDivTotReg=0;//Dividend Regular
	 
	 var slfILPCashCur=0,slfILPCpfOACur=0,slfILPCpfSACur=0,slfILPCpfRACur=0,slfILPSrsCur=0,slfILPTotCur=0;//ILP Current
	 var slfILPCashReg=0,slfILPCpfOAReg=0,slfILPCpfSAReg=0,slfILPCpfRAReg=0,slfILPSrsReg=0,slfILPTotReg=0;//ILP Regular
	
	 var slfShCashCur=0,slfShCpfOACur=0,slfShCpfSACur=0,slfShCpfRACur=0,slfShSrsCur=0,slfShTotCur=0;//Shares Current
	 var slfShCashReg=0,slfShCpfOAReg=0,slfShCpfSAReg=0,slfShCpfRAReg=0,slfShSrsReg=0,slfShTotReg=0;//Shares Regular
	
	 var slfStckCashCur=0,slfStckCpfOACur=0,slfStckCpfSACur=0,slfStckCpfRACur=0,slfStckSrsCur=0,slfStckTotCur=0;//Shares Current
	 var slfStckCashReg=0,slfStckCpfOAReg=0,slfStckCpfSAReg=0,slfStckCpfRAReg=0,slfStckSrsReg=0,slfStckTotReg=0;//Shares Regular
	
	 var slfUTCashCur=0,slfUTCpfOACur=0,slfUTCpfSACur=0,slfUTCpfRACur=0,slfUTSrsCur=0,slfUTTotCur=0;//UT Current
	 var slfUTCashReg=0,slfUTCpfOAReg=0,slfUTCpfSAReg=0,slfUTCpfRAReg=0,slfUTSrsReg=0,slfUTTotReg=0;//UT Regular
	 
	 var slfOthCashCur=0,slfOthCpfOACur=0,slfOthCpfSACur=0,slfOthCpfRACur=0,slfOthSrsCur=0,slfOthTotCur=0;//Others Current
	 var slfOthCashReg=0,slfOthCpfOAReg=0,slfOthCpfSAReg=0,slfOthCpfRAReg=0,slfOthSrsReg=0,slfOthTotReg=0;//Others Regular
	 /* */
	 
	 /* Spouse*/
	 var spsBdCashCur=0,spsBdCpfOACur=0,spsBdCpfSACur=0,spsBdCpfRACur=0,spsBdSrsCur=0,spsBdTotCur=0;//Bonds Current
	 var spsBdCashReg=0,spsBdCpfOAReg=0,spsBdCpfSAReg=0,spsBdCpfRAReg=0,spsBdSrsReg=0,spsBdTotReg=0;//Bonds Regular
	 
	 var spsDivCashCur=0,spsDivCpfOACur=0,spsDivCpfSACur=0,spsDivCpfRACur=0,spsDivSrsCur=0,spsDivTotCur=0;//Dividend Current
	 var spsDivCashReg=0,spsDivCpfOAReg=0,spsDivCpfSAReg=0,spsDivCpfRAReg=0,spsDivSrsReg=0,spsDivTotReg=0;//Dividend Regular
	 
	 var spsILPCashCur=0,spsILPCpfOACur=0,spsILPCpfSACur=0,spsILPCpfRACur=0,spsILPSrsCur=0,spsILPTotCur=0;//ILP Current
	 var spsILPCashReg=0,spsILPCpfOAReg=0,spsILPCpfSAReg=0,spsILPCpfRAReg=0,spsILPSrsReg=0,spsILPTotReg=0;//ILP Regular
 
	 var spsShCashCur=0,spsShCpfOACur=0,spsShCpfSACur=0,spsShCpfRACur=0,spsShSrsCur=0,spsShTotCur=0;//Shares Current
	 var spsShCashReg=0,spsShCpfOAReg=0,spsShCpfSAReg=0,spsShCpfRAReg=0,spsShSrsReg=0,spsShTotReg=0;//Shares Regular
	
	 var spsStckCashCur=0,spsStckCpfOACur=0,spsStckCpfSACur=0,spsStckCpfRACur=0,spsStckSrsCur=0,spsStckTotCur=0;//Shares Current
	 var spsStckCashReg=0,spsStckCpfOAReg=0,spsStckCpfSAReg=0,spsStckCpfRAReg=0,spsStckSrsReg=0,spsStckTotReg=0;//Shares Regular
	
	 var spsUTCashCur=0,spsUTCpfOACur=0,spsUTCpfSACur=0,spsUTCpfRACur=0,spsUTSrsCur=0,spsUTTotCur=0;//UT Current
	 var spsUTCashReg=0,spsUTCpfOAReg=0,spsUTCpfSAReg=0,spsUTCpfRAReg=0,spsUTSrsReg=0,spsUTTotReg=0;//UT Regular
	 
	 var spsOthCashCur=0,spsOthCpfOACur=0,spsOthCpfSACur=0,spsOthCpfRACur=0,spsOthSrsCur=0,spsOthTotCur=0;//Others Current
	 var spsOthCashReg=0,spsOthCpfOAReg=0,spsOthCpfSAReg=0,spsOthCpfRAReg=0,spsOthSrsReg=0,spsOthTotReg=0;//Others Regular
	 /* */
	 
	 /* Joint*/
	 
	 var jntBdCashCur=0,jntBdCpfOACur=0,jntBdCpfSACur=0,jntBdCpfRACur=0,jntBdSrsCur=0,jntBdTotCur=0;//Bonds Current
	 var jntBdCashReg=0,jntBdCpfOAReg=0,jntBdCpfSAReg=0,jntBdCpfRAReg=0,jntBdSrsReg=0,jntBdTotReg=0;//Bonds Regular
	 
	 var jntDivCashCur=0,jntDivCpfOACur=0,jntDivCpfSACur=0,jntDivCpfRACur=0,jntDivSrsCur=0,jntDivTotCur=0;//Dividend Current
	 var jntDivCashReg=0,jntDivCpfOAReg=0,jntDivCpfSAReg=0,jntDivCpfRAReg=0,jntDivSrsReg=0,jntDivTotReg=0;//Dividend Regular
	 
	 var jntILPCashCur=0,jntILPCpfOACur=0,jntILPCpfSACur=0,jntILPCpfRACur=0,jntILPSrsCur=0,jntILPTotCur=0;//ILP Current
	 var jntILPCashReg=0,jntILPCpfOAReg=0,jntILPCpfSAReg=0,jntILPCpfRAReg=0,jntILPSrsReg=0,jntILPTotReg=0;//ILP Regular
	 
	 var jntShCashCur=0,jntShCpfOACur=0,jntShCpfSACur=0,jntShCpfRACur=0,jntShSrsCur=0,jntShTotCur=0;//Shares Current
	 var jntShCashReg=0,jntShCpfOAReg=0,jntShCpfSAReg=0,jntShCpfRAReg=0,jntShSrsReg=0,jntShTotReg=0;//Shares Regular

	 var jntStckCashCur=0,jntStckCpfOACur=0,jntStckCpfSACur=0,jntStckCpfRACur=0,jntStckSrsCur=0,jntStckTotCur=0;//Shares Current
	 var jntStckCashReg=0,jntStckCpfOAReg=0,jntStckCpfSAReg=0,jntStckCpfRAReg=0,jntStckSrsReg=0,jntStckTotReg=0;//Shares Regular

	 var jntUTCashCur=0,jntUTCpfOACur=0,jntUTCpfSACur=0,jntUTCpfRACur=0,jntUTSrsCur=0,jntUTTotCur=0;//UT Current
	 var jntUTCashReg=0,jntUTCpfOAReg=0,jntUTCpfSAReg=0,jntUTCpfRAReg=0,jntUTSrsReg=0,jntUTTotReg=0;//UT Regular
	 
	 var jntOthCashCur=0,jntOthCpfOACur=0,jntOthCpfSACur=0,jntOthCpfRACur=0,jntOthSrsCur=0,jntOthTotCur=0;//Others Current
	 var jntOthCashReg=0,jntOthCpfOAReg=0,jntOthCpfSAReg=0,jntOthCpfRAReg=0,jntOthSrsReg=0,jntOthTotReg=0;//Others Regular
	 
	 /*Inv Summary */
	 var $selfdiv = $("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]");
	 var $spousediv = $("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]");
	 var $jointdiv = $("#divforInvestmentSummary").find("div[id=genInvestSummaryFamily]");
	  
	 
	 /*Cpf Summary*/ 
	 var $cpfselfdiv = $("#divforCpfSummary").find("div[id=genCpfSummarySelf]");
	 var $cpfspousediv = $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]");
	 var $cpfjointdiv = $("#divforCpfSummary").find("div[id=genCpfSummaryFamily]"); 
	 /*SRS Summary*/  
	 var $srsselfdiv = $("#divforSRSSummary").find("div[id=genSRSSummarySelf]");
	 var $srsspousediv = $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]");
	 var $srsjointdiv = $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]");
	 
	 
	 var $mergeSlfdiv = $("div#generateItSelf").html();
	 var $mergeSpsdiv = $("div#generateItSpouse").html();
	 var $mergeFamdiv = $("div#generateItFamily").html();
	 

	 $spousediv.html(""); 
	 $jointdiv.html(""); 
	 $selfdiv.html("");
	 
	 $cpfselfdiv.html("");
	 $cpfspousediv.html("");
	 $cpfjointdiv.html("");
	 
	 $srsselfdiv.html("");
	 $srsspousediv.html("");
	 $srsjointdiv.html("");
	 
	 
	 var $catg="",$paymentMode="",$reinvest="",$mode="";
//	 $("#divforInvestmentSummary").css("display","none");
	 $("#divforInvestmentSummary").find("input").val("").attr("readonly","true"); 
	 $("#divforCpfSummary").css("display","none");
	 $("#divforCpfSummary").find("input").val(""); 
	 $("#divforSRSSummary").css("display","none");
	 $("#divforSRSSummary").find("input").val("");
	 $("#INVSUM_NORECFOUND").css("display","block");
	 
	  
	 
	 
 if($rowCount >0){
	
	
	 
 $("#fnaInvestmentTbl tbody tr").each(function(count,value){
	 
	 $mode=$(this).find("td:eq(0)").find("input:eq(0)").val();
	 
	 if($mode != "D"){
		 
	 }
	 
	 var $ownership=$(this).find("td:eq(2)").find('select[name="selInvOwner"]').val();
	 $catg=$(this).find("td:eq(3)").find('select[name="selInvType"]').val(); 
	 $paymentMode=$(this).find("td:eq(5)").find('select[name="selInvPaymethod"]').val();
	 var $currnav = $(this).find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val();
	 $reinvest 	=$(this).find("td:eq(7)").find('select[name="selInvDividendReInv"]').val();
	 
	 var $divfreq = $(this).find("td:eq(7)").find('select[name="selInvDividPaymode"]').val();
	 var $divamount = $(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val();
	 
	 var $rspexist = $(this).find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val();	 
	 var $rspfreq= $(this).find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val();
	 var $rspamount= $(this).find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val();
	 var $rspyrs= $(this).find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val();

	 var TopUpAmt=0; 

	 if(!isEmpty($rspfreq)){
		 
		 TopUpAmt = getFrequencyDigit($rspfreq, 0)

		
	}
 	
//	 && ($reinvest=="N")
	if(!isEmpty($paymentMode) && $mode != "D"){
		
		 $("#divforInvestmentSummary").css("display","block");   

		if($ownership == "Self"){
			
			$selfdiv.html($mergeSlfdiv); 
			$selfdiv.find("input[id=txtFldISOwnership]").val("SELF");

			
			 if($catg=='Bonds'){  
				 
				   if($paymentMode == 'Cash'){
					   slfBdCashCur +=Number($currnav);   
					   slfBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfBdCpfOACur +=Number($currnav);   
					   slfBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfBdCpfSACur +=Number($currnav);   
					   slfBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfBdCpfRACur +=Number($currnav);   
					   slfBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfBdSrsCur +=Number($currnav);   
					   slfBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfBdTotCur=slfBdCashCur+slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur;
				   slfBdTotReg=slfBdCashReg+slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg;
				   
				 	
			   }
			 
			  $("#txtFldISSelfbondsCurCash").val(roundNumber(slfBdCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfbondsCurCash").val(currencyFormat(slfBdCashCur)); 
			   
			   $("#txtFldISSelfbondsCurCpfoa").val(roundNumber(slfBdCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfoa").val(currencyFormat(slfBdCpfOACur)); 
			   
			   $("#txtFldISSelfbondsCurCpfsa").val(roundNumber(slfBdCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfsa").val(currencyFormat(slfBdCpfSACur)); 
			   
			   $("#txtFldISSelfbondsCurCpfra").val(roundNumber(slfBdCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfra").val(currencyFormat(slfBdCpfRACur));
			   
			   $("#txtFldISSelfbondsCursrs").val(roundNumber(slfBdSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCursrs").val(currencyFormat(slfBdSrsCur));
			   
			   $("#txtFldISSelfbondsCurTot").val(roundNumber(slfBdTotCur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdTotCur));
			   
			   $("#txtFldISSelfbondsRegCash").val(roundNumber(slfBdCashReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCash").val(currencyFormat(slfBdCashReg));
			   
			   $("#txtFldISSelfbondsRegCpfoa").val(roundNumber(slfBdCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfoa").val(currencyFormat(slfBdCpfOAReg));
			   
			   $("#txtFldISSelfbondsRegCpfsa").val(roundNumber(slfBdCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfsa").val(currencyFormat(slfBdCpfSAReg));
			   
			   $("#txtFldISSelfbondsRegCpfra").val(roundNumber(slfBdCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfra").val(currencyFormat(slfBdCpfRAReg));
			   
			   $("#txtFldISSelfbondsRegsrs").val(roundNumber(slfBdSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegsrs").val(currencyFormat(slfBdSrsReg));
			   
			   $("#txtFldISSelfbondsRegTot").val(roundNumber(slfBdTotReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdTotReg));
		
			 
			 if(!isEmpty($catg) && $reinvest == "N"){ 
				 
				   if($paymentMode == 'Cash'){
//					   slfDivCashCur +=Number($currnav);   
					   slfDivCashReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
//					   slfDivCpfOACur +=Number($currnav);   
					   slfDivCpfOAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
//					   slfDivCpfSACur +=Number($currnav);   
					   slfDivCpfSAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
//					   slfDivCpfRACur +=Number($currnav);   
					   slfDivCpfRAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'SRS'){
//					   slfDivSrsCur +=Number($currnav);   
					   slfDivSrsReg +=Number($divamount); 
		     	   } 
				   
//				   slfDivTotCur=slfDivCashCur+slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur;
				   slfDivTotReg=slfDivCashReg+slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg;
				   
			   } 
			 
			 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){ 
				 
				   if($paymentMode == 'Cash'){
					   slfDivCashCur +=Number($currnav);   
//					   slfDivCashReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfDivCpfOACur +=Number($currnav);   
//					   slfDivCpfOAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfDivCpfSACur +=Number($currnav);   
//					   slfDivCpfSAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfDivCpfRACur +=Number($currnav);   
//					   slfDivCpfRAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfDivSrsCur +=Number($currnav);   
//					   slfDivSrsReg +=Number($divamount); 
		     	   } 
				   
				   slfDivTotCur=slfDivCashCur+slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur;
//				   slfDivTotReg=slfDivCashReg+slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg;
				   
			   }
			 

			   $("#txtFldISSelfdivCurCash").val(roundNumber(slfDivCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfdivCurCash").val(currencyFormat(slfDivCashCur)); 
			   
			   $("#txtFldISSelfdivCurCpfoa").val(roundNumber(slfDivCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfoa").val(currencyFormat(slfDivCpfOACur)); 
			   
			   $("#txtFldISSelfdivCurCpfsa").val(roundNumber(slfDivCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfsa").val(currencyFormat(slfDivCpfSACur)); 
			   
			   
			   $("#txtFldISSelfdivCurCpfra").val(roundNumber(slfDivCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfra").val(currencyFormat(slfDivCpfRACur)); 
			   
			   $("#txtFldISSelfdivCursrs").val(roundNumber(slfDivSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfdivCursrs").val(currencyFormat(slfDivSrsCur)); 
			   
			   $("#txtFldISSelfdivCurTot").val(roundNumber(slfDivTotCur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurTot").val(currencyFormat(slfDivTotCur)); 
			   
			   $("#txtFldISSelfdivRegCash").val(roundNumber(slfDivCashReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCash").val(currencyFormat(slfDivCashReg)); 
			   
			   $("#txtFldISSelfdivRegCpfoa").val(roundNumber(slfDivCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfoa").val(currencyFormat(slfDivCpfOAReg)); 
			   
			   $("#txtFldISSelfdivRegCpfsa").val(roundNumber(slfDivCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfsa").val(currencyFormat(slfDivCpfSAReg));
			   
			   $("#txtFldISSelfdivRegCpfra").val(roundNumber(slfDivCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfra").val(currencyFormat(slfDivCpfRAReg));
			   
			   $("#txtFldISSelfdivRegsrs").val(roundNumber(slfDivSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegsrs").val(currencyFormat(slfDivSrsReg));
			   
			   $("#txtFldISSelfdivRegTot").val(roundNumber(slfDivTotReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegTot").val(currencyFormat(slfDivTotReg));
			   
			   
			   if($catg=='ILP'){  
				   if($paymentMode == 'Cash'){
					   slfILPCashCur +=Number($currnav);   
					   slfILPCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfILPCpfOACur +=Number($currnav);   
					   slfILPCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfILPCpfSACur +=Number($currnav);   
					   slfILPCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfILPCpfRACur +=Number($currnav);   
					   slfILPCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfILPSrsCur +=Number($currnav);   
					   slfILPSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfILPTotCur=slfILPCashCur+slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur;
				   slfILPTotReg=slfILPCashReg+slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg; 
			   } 
			 
			  
			   $("#txtFldISSelfilpCurCash").val(roundNumber(slfILPCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfilpCurCash").val(currencyFormat(slfILPCashCur)); 
			   
			   $("#txtFldISSelfilpCurCpfoa").val(roundNumber(slfILPCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfoa").val(currencyFormat(slfILPCpfOACur)); 
			   
			   $("#txtFldISSelfilpCurCpfsa").val(roundNumber(slfILPCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfsa").val(currencyFormat(slfILPCpfSACur)); 
			   
			   $("#txtFldISSelfilpCurCpfra").val(roundNumber(slfILPCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfra").val(currencyFormat(slfILPCpfRACur)); 
			   
			   $("#txtFldISSelfilpCursrs").val(roundNumber(slfILPSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfilpCursrs").val(currencyFormat(slfILPSrsCur)); 
			   
			   $("#txtFldISSelfilpCurTot").val(roundNumber(slfILPTotCur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurTot").val(currencyFormat(slfILPTotCur)); 
			   
			   $("#txtFldISSelfilpRegCash").val(roundNumber(slfILPCashReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCash").val(currencyFormat(slfILPCashReg)); 
			   
			   $("#txtFldISSelfilpRegCpfoa").val(roundNumber(slfILPCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCpfoa").val(currencyFormat(slfILPCpfOAReg)); 
			   
			   $("#txtFldISSelfilpRegCpfsa").val(roundNumber(slfILPCpfSAReg)).attr("readonly","true");
			   $("txtFldISSelfilpRegCpfsa").val(currencyFormat(slfILPCpfSAReg)); 
			   
			   $("#txtFldISSelfilpRegCpfra").val(roundNumber(slfILPCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCpfra").val(currencyFormat(slfILPCpfRAReg)); 
			   
			   $("#txtFldISSelfilpRegsrs").val(roundNumber(slfILPSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegsrs").val(currencyFormat(slfILPSrsReg)); 
			   
			   $("#txtFldISSelfilpRegTot").val(roundNumber(slfILPTotReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegTot").val(currencyFormat(slfILPTotReg));
			   
			   if($catg=='Shares'){  
				   if($paymentMode == 'Cash'){
					   slfShCashCur +=Number($currnav);   
					   slfShCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfShCpfOACur +=Number($currnav);   
					   slfShCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfShCpfSACur +=Number($currnav);   
					   slfShCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfShCpfRACur +=Number($currnav);   
					   slfShCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfShSrsCur +=Number($currnav);   
					   slfShSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfShTotCur=slfShCashCur+slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur;
				   slfShTotReg=slfShCashReg+slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg;
				   
				   
			   } 
			 
			   $("#txtFldISSelfsharesCurCash").val(roundNumber(slfShCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfsharesCurCash").val(currencyFormat(slfShCashCur)); 
			   
			   $("#txtFldISSelfsharesCurCpfoa").val(roundNumber(slfShCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfoa").val(currencyFormat(slfShCpfOACur)); 
			   
			   $("#txtFldISSelfsharesCurCpfsa").val(roundNumber(slfShCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfsa").val(currencyFormat(slfShCpfSACur)); 
			   
			   $("#txtFldISSelfsharesCurCpfra").val(roundNumber(slfShCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfra").val(currencyFormat(slfShCpfRACur)); 
			   
			   $("#txtFldISSelfsharesCursrs").val(roundNumber(slfShSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCursrs").val(currencyFormat(slfShSrsCur)); 
			   
			   $("#txtFldISSelfsharesCurTot").val(roundNumber(slfShTotCur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurTot").val(currencyFormat(slfShTotCur)); 
			   
			   $("#txtFldISSelfsharesRegCash").val(roundNumber(slfShCashReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCash").val(currencyFormat(slfShCashReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfoa").val(roundNumber(slfShCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfoa").val(currencyFormat(slfShCpfOAReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfsa").val(roundNumber(slfShCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfsa").val(currencyFormat(slfShCpfSAReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfra").val(roundNumber(slfShCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfra").val(currencyFormat(slfShCpfRAReg)); 
			   
			   $("#txtFldISSelfsharesRegsrs").val(roundNumber(slfShSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegsrs").val(currencyFormat(slfShSrsReg)); 
			   
			   $("#txtFldISSelfsharesRegTot").val(roundNumber(slfShTotReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegTot").val(currencyFormat(slfShTotReg)); 

			   if($catg=='Stocks'){  
				   if($paymentMode == 'Cash'){
					   slfStckCashCur +=Number($currnav);   
					   slfStckCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfStckCpfOACur +=Number($currnav);   
					   slfStckCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfStckCpfSACur +=Number($currnav);   
					   slfStckCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfStckCpfRACur +=Number($currnav);   
					   slfStckCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfStckSrsCur +=Number($currnav);   
					   slfStckSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfStckTotCur=slfStckCashCur+slfStckCpfOACur+slfStckCpfSACur+slfStckCpfRACur+slfStckSrsCur;
				   slfStckTotReg=slfStckCashReg+slfStckCpfOAReg+slfStckCpfSAReg+slfStckCpfRAReg+slfStckSrsReg;
				   
				   
			   } 
			 
			   $("#txtFldISSelfstocksCurCash").val(roundNumber(slfStckCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfstocksCurCash").val(currencyFormat(slfStckCashCur)); 
			   
			   $("#txtFldISSelfstocksCurCpfoa").val(roundNumber(slfStckCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfoa").val(currencyFormat(slfStckCpfOACur)); 
			   
			   $("#txtFldISSelfstocksCurCpfsa").val(roundNumber(slfStckCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfsa").val(currencyFormat(slfStckCpfSACur)); 
			   
			   $("#txtFldISSelfstocksCurCpfra").val(roundNumber(slfStckCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfra").val(currencyFormat(slfStckCpfRACur)); 
			   
			   $("#txtFldISSelfstocksCursrs").val(roundNumber(slfStckSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCursrs").val(currencyFormat(slfStckSrsCur)); 
			   
			   $("#txtFldISSelfstocksCurTot").val(roundNumber(slfStckTotCur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurTot").val(currencyFormat(slfStckTotCur)); 
			   
			   $("#txtFldISSelfstocksRegCash").val(roundNumber(slfStckCashReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCash").val(currencyFormat(slfStckCashReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfoa").val(roundNumber(slfStckCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfoa").val(currencyFormat(slfStckCpfOAReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfsa").val(roundNumber(slfStckCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfsa").val(currencyFormat(slfStckCpfSAReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfra").val(roundNumber(slfStckCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfra").val(currencyFormat(slfStckCpfRAReg)); 
			   
			   $("#txtFldISSelfstocksRegsrs").val(roundNumber(slfStckSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegsrs").val(currencyFormat(slfStckSrsReg)); 
			   
			   $("#txtFldISSelfstocksRegTot").val(roundNumber(slfStckTotReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegTot").val(currencyFormat(slfStckTotReg)); 
			   
			 /*Set Self-UTs Values*/
			 if($catg=='UT'){  
				 
				   if($paymentMode == 'Cash'){
//					   =Number($(this).find("td:eq(14)").find("input:eq(0)").val() * $(this).find("td:eq(15)").find("input:eq(0)").val());
					   slfUTCashCur +=Number($currnav);  //current nav
					   slfUTCashReg +=Number($rspamount * TopUpAmt); //RSA Amount * Topupamt(Freq)
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfUTCpfOACur +=Number($currnav);   
					   slfUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfUTCpfSACur +=Number($currnav);   
					   slfUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfUTCpfRACur +=Number($currnav);   
					   slfUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfUTSrsCur +=Number($currnav);   
					   slfUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfUTTotCur=slfUTCashCur+slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur;
				   slfUTTotReg=slfUTCashReg+slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg;
				   
				 
			   } 
			 
			  $("#txtFldISSelfutsCurCash").val(roundNumber(slfUTCashCur)).attr("readonly","true"); 
			  $("#txtFldISSelfutsCurCash").val(currencyFormat(slfUTCashCur));
			  
			   $("#txtFldISSelfutsCurCpfoa").val(roundNumber(slfUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfoa").val(currencyFormat(slfUTCpfOACur));
			   
			   $("#txtFldISSelfutsCurCpfsa").val(roundNumber(slfUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfsa").val(currencyFormat(slfUTCpfSACur));
			   
			   $("#txtFldISSelfutsCurCpfra").val(roundNumber(slfUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfra").val(currencyFormat(slfUTCpfRACur));
			   
			   $("#txtFldISSelfutsCursrs").val(roundNumber(slfUTSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfutsCursrs").val(currencyFormat(slfUTSrsCur));
			   
			   $("#txtFldISSelfutsCurTot").val(roundNumber(slfUTTotCur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurTot").val(currencyFormat(slfUTTotCur));
			
			   $("#txtFldISSelfutsRegCash").val(roundNumber(slfUTCashReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCash").val(currencyFormat(slfUTCashReg));
			   
			   $("#txtFldISSelfutsRegCpfoa").val(roundNumber(slfUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfoa").val(currencyFormat(slfUTCpfOAReg));
			   
			   $("#txtFldISSelfutsRegCpfsa").val(roundNumber(slfUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfsa").val(currencyFormat(slfUTCpfSAReg));
			   
			   $("#txtFldISSelfutsRegCpfra").val(roundNumber(slfUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfra").val(currencyFormat(slfUTCpfRAReg));
			   
			   $("#txtFldISSelfutsRegsrs").val(roundNumber(slfUTSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegsrs").val(currencyFormat(slfUTSrsReg));
			   
			   $("#txtFldISSelfutsRegTot").val(roundNumber(slfUTTotReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegTot").val(currencyFormat(slfUTTotReg)); 
			 
				 if($catg=='Others'){  
					 
					   if($paymentMode == 'Cash'){
//						   =Number($(this).find("td:eq(14)").find("input:eq(0)").val() * $(this).find("td:eq(15)").find("input:eq(0)").val());
						   slfOthCashCur +=Number($currnav);  //current nav
						   slfOthCashReg +=Number($rspamount * TopUpAmt); //RSA Amount * Topupamt(Freq)
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   slfOthCpfOACur +=Number($currnav);   
						   slfOthCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   slfOthCpfSACur +=Number($currnav);   
						   slfOthCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   slfOthCpfRACur +=Number($currnav);   
						   slfOthCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   slfOthSrsCur +=Number($currnav);   
						   slfOthSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   slfOthTotCur=slfOthCashCur+slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur;
					   slfOthTotReg=slfOthCashReg+slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg;
					   
					 
				   } 
				 
				  $("#txtFldISSelfothersCurCash").val(roundNumber(slfOthCashCur)).attr("readonly","true"); 
				  $("#txtFldISSelfothersCurCash").val(currencyFormat(slfOthCashCur));
				  
				   $("#txtFldISSelfothersCurCpfoa").val(roundNumber(slfOthCpfOACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfoa").val(currencyFormat(slfOthCpfOACur));
				   
				   $("#txtFldISSelfothersCurCpfsa").val(roundNumber(slfOthCpfSACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfsa").val(currencyFormat(slfOthCpfSACur));
				   
				   $("#txtFldISSelfothersCurCpfra").val(roundNumber(slfOthCpfRACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfra").val(currencyFormat(slfOthCpfRACur));
				   
				   $("#txtFldISSelfothersCursrs").val(roundNumber(slfOthSrsCur)).attr("readonly","true");
				   $("#txtFldISSelfothersCursrs").val(currencyFormat(slfOthSrsCur));
				   
				   $("#txtFldISSelfothersCurTot").val(roundNumber(slfOthTotCur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurTot").val(currencyFormat(slfOthTotCur));
				
				   $("#txtFldISSelfothersRegCash").val(roundNumber(slfOthCashReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCash").val(currencyFormat(slfOthCashReg));
				   
				   $("#txtFldISSelfothersRegCpfoa").val(roundNumber(slfOthCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfoa").val(currencyFormat(slfOthCpfOAReg));
				   
				   $("#txtFldISSelfothersRegCpfsa").val(roundNumber(slfOthCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfsa").val(currencyFormat(slfOthCpfSAReg));
				   
				   $("#txtFldISSelfothersRegCpfra").val(roundNumber(slfOthCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfra").val(currencyFormat(slfOthCpfRAReg));
				   
				   $("#txtFldISSelfothersRegsrs").val(roundNumber(slfOthSrsReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegsrs").val(currencyFormat(slfOthSrsReg));
				   
				   $("#txtFldISSelfothersRegTot").val(roundNumber(slfOthTotReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegTot").val(currencyFormat(slfOthTotReg)); 
				 
			   
			   /*Total - Horizontal */
			   
			   var slfOthCashCurTot =slfBdCashCur+slfDivCashCur+slfILPCashCur+slfShCashCur+slfStckCashCur+slfUTCashCur+slfOthCashCur;
			   var slfOthCashRegTot =slfBdCashReg+slfDivCashReg+slfILPCashReg+slfShCashReg+slfStckCashReg+slfUTCashReg+slfOthCashReg;
			   
			   var slfOthCpfOACurTot =slfBdCpfOACur+slfDivCpfOACur+slfILPCpfOACur+slfShCpfOACur+slfStckCpfOACur+slfUTCpfOACur+slfOthCpfOACur;
			   var slfOthCpfOARegTot =slfBdCpfOAReg+slfDivCpfOAReg+slfILPCpfOAReg+slfShCpfOAReg+slfStckCpfOAReg+slfUTCpfOAReg+slfOthCpfOAReg;
			   
			   var slfOthCpfSACurTot =slfBdCpfSACur+slfDivCpfSACur+slfILPCpfSACur+slfShCpfSACur+slfStckCpfSACur+slfUTCpfSACur+slfOthCpfSACur;
			   var slfOthCpfSARegTot =slfBdCpfSAReg+slfDivCpfSAReg+slfILPCpfSAReg+slfShCpfSAReg+slfStckCpfSAReg+slfUTCpfSAReg+slfOthCpfSAReg;
			   
			   var slfOthCpfRACurTot =slfBdCpfRACur+slfDivCpfRACur+slfILPCpfRACur+slfShCpfRACur+slfStckCpfRACur+slfUTCpfRACur+slfOthCpfRACur;
			   var slfOthCpfRARegTot =slfBdCpfRAReg+slfDivCpfRAReg+slfILPCpfRAReg+slfShCpfRAReg+slfStckCpfRAReg+slfUTCpfRAReg+slfOthCpfRAReg;
			   
			   var slfOthSrsCurTot =slfBdSrsCur+slfDivSrsCur+slfILPSrsCur+slfShSrsCur+slfStckSrsCur+slfUTSrsCur+slfOthSrsCur;
			   var slfOthSrsRegTot =slfBdSrsReg+slfDivSrsReg+slfILPSrsReg+slfShSrsReg+slfStckSrsReg+slfUTSrsReg+slfOthSrsReg;
			   
			   /*Total - Verticle */
			   var slfOthTotCurVTot =slfOthCashCur+slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur;
			   var slfOthTotRegVTot=slfOthCashReg+slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg;
			
			   $("#txtFldISSelftotCurCash").val(roundNumber(slfOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISSelftotCurCash").val(currencyFormat(slfOthCashCurTot));
			   
			   $("#txtFldISSelftotCurCpfoa").val(roundNumber(slfOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfoa").val(currencyFormat(slfOthCpfOACurTot));
			   
			   $("#txtFldISSelftotCurCpfsa").val(roundNumber(slfOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfsa").val(currencyFormat(slfOthCpfSACurTot));
			   
			   $("#txtFldISSelftotCurCpfra").val(roundNumber(slfOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfra").val(currencyFormat(slfOthCpfRACurTot));
			   
			   $("#txtFldISSelftotCursrs").val(roundNumber(slfOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCursrs").val(currencyFormat(slfOthSrsCurTot));
			   
			   $("#txtFldISSelftotCurTot").val(roundNumber(slfOthTotCurVTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurTot").val(currencyFormat(slfOthTotCurVTot));
			   
			   $("#txtFldISSelftotRegCash").val(roundNumber(slfOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCash").val(currencyFormat(slfOthCashRegTot));
			   
			   $("#txtFldISSelftotRegCpfoa").val(roundNumber(slfOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfoa").val(currencyFormat(slfOthCpfOARegTot));
			   
			   $("#txtFldISSelftotRegCpfsa").val(roundNumber(slfOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfsa").val(currencyFormat(slfOthCpfSARegTot));
			   
			   $("#txtFldISSelftotRegCpfra").val(roundNumber(slfOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfra").val(currencyFormat(slfOthCpfRARegTot));
			   
			   $("#txtFldISSelftotRegsrs").val(roundNumber(slfOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegsrs").val(currencyFormat(slfOthSrsRegTot));
			   
			   $("#txtFldISSelftotRegTot").val(roundNumber(slfOthTotRegVTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegTot").val(currencyFormat(slfOthTotRegVTot));
			 
			 $selfdiv.find("div#generateItSelf").css("display","block");
			
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");
				 
				 $cpfselfdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]").clone());
			 
				 $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr").each(function(){ 
					 $(this).find('th:eq(1)').remove(); 
				 });
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:even").each(function(){ 
						$(this).addClass("even");
						if($(this).hasClass("even")){ 
							 $(this).find('td:eq(2)').remove(); 
						}
				  });
				  
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:odd").each(function(){ 
						$(this).addClass("odd");
						if($(this).hasClass("odd")){ 
							 $(this).find('td:eq(1)').remove(); 
						}
				  });
				  
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsCurTot").val(roundNumber(slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur)).attr("readonly","true");
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsRegTot").val(roundNumber(slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg)).attr("readonly","true");
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpCurTot").val(roundNumber(slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur)).attr("readonly","true");
			  
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpRegTot").val(roundNumber(slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg)).attr("readonly","true");
			
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesCurTot").val(roundNumber(slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesRegTot").val(roundNumber(slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsCurTot").val(roundNumber(slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsRegTot").val(roundNumber(slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivCurTot").val(roundNumber(slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(roundNumber(slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotCurTot").val(roundNumber(slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotRegTot").val(roundNumber(slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg)).attr("readonly","true");
				
			 }
			  /*SRS Summary*/
			 if($paymentMode == 'Cash' || $paymentMode == 'SRS'){
				
				 $("#divforSRSSummary").css("display","block");  
				 $srsselfdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]").clone());
				 $("#INVSUM_NORECFOUND").css("display","none");
				 
				 
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  });  
			  
				  
				  
			  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsCurTot").val(roundNumber(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsRegTot").val(roundNumber(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpCurTot").val(roundNumber(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpRegTot").val(roundNumber(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesCurTot").val(roundNumber(slfShCashCur+slfShSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCashCur+slfShSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesRegTot").val(roundNumber(slfShCashReg+slfShSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCashReg+slfShSrsReg)).attr("readonly","true");
					 
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsCurTot").val(roundNumber(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsRegTot").val(roundNumber(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivCurTot").val(roundNumber(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivRegTot").val(roundNumber(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotCurTot").val(roundNumber(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotCurTot").val(currencyFormat(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotRegTot").val(roundNumber(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
					
			 }
			 
		 }else if($ownership == "Spouse"){
			 $spousediv.html($mergeSpsdiv); 
			 $spousediv.find("input[id=txtFldISOwnership]").val("SPOUSE");
			 
			 if($catg=='Bonds'){  
				   if($paymentMode == 'Cash'){
					   spsBdCashCur +=Number($currnav);   
					   spsBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsBdCpfOACur +=Number($currnav);   
					   spsBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsBdCpfSACur +=Number($currnav);   
					   spsBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsBdCpfRACur +=Number($currnav);   
					   spsBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsBdSrsCur +=Number($currnav);   
					   spsBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsBdTotCur=spsBdCashCur+spsBdCpfOACur+spsBdCpfSACur+spsBdCpfRACur+spsBdSrsCur;
				   spsBdTotReg=spsBdCashReg+spsBdCpfOAReg+spsBdCpfSAReg+spsBdCpfRAReg+spsBdSrsReg;
				   
				 
			   } 
				  $("#txtFldISSpsbondsCurCash").val(roundNumber(spsBdCashCur)).attr("readonly","true"); 
				  $("#txtFldISSpsbondsCurCash").val(currencyFormat(spsBdCashCur));
				   $("#txtFldISSpsbondsCurCpfoa").val(roundNumber(spsBdCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfoa").val(currencyFormat(spsBdCpfOACur));
				   $("#txtFldISSpsbondsCurCpfsa").val(roundNumber(spsBdCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfsa").val(currencyFormat(spsBdCpfSACur));
				   $("#txtFldISSpsbondsCurCpfra").val(roundNumber(spsBdCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfra").val(currencyFormat(spsBdCpfRACur));
				   $("#txtFldISSpsbondsCursrs").val(roundNumber(spsBdSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCursrs").val(currencyFormat(spsBdSrsCur));
				   $("#txtFldISSpsbondsCurTot").val(roundNumber(spsBdTotCur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurTot").val(currencyFormat(spsBdTotCur));
				
				   $("#txtFldISSpsbondsRegCash").val(roundNumber(spsBdCashReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCash").val(currencyFormat(spsBdCashReg));
				   $("#txtFldISSpsbondsRegCpfoa").val(roundNumber(spsBdCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfoa").val(currencyFormat(spsBdCpfOAReg));
				   $("#txtFldISSpsbondsRegCpfsa").val(roundNumber(spsBdCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfsa").val(currencyFormat(spsBdCpfSAReg));
				   $("#txtFldISSpsbondsRegCpfra").val(roundNumber(spsBdCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfra").val(currencyFormat(spsBdCpfRAReg));
				   $("#txtFldISSpsbondsRegsrs").val(roundNumber(spsBdSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegsrs").val(currencyFormat(spsBdSrsReg));
				   $("#txtFldISSpsbondsRegTot").val(roundNumber(spsBdTotReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegTot").val(currencyFormat(spsBdTotReg));
				   
				 /*Set Spouse-Dividend Values*/
				 if(!isEmpty($catg) && $reinvest == "N"){  
					   if($paymentMode == 'Cash'){
//						   spsDivCashCur +=Number($currnav);   
						   spsDivCashReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
//						   spsDivCpfOACur +=Number($currnav);   
						   spsDivCpfOAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
//						   spsDivCpfSACur +=Number($currnav);   
						   spsDivCpfSAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
//						   spsDivCpfRACur +=Number($currnav);   
						   spsDivCpfRAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'SRS'){
//						   spsDivSrsCur +=Number($currnav);   
						   spsDivSrsReg +=Number($divamount); 
			     	   } 
					   
//					   spsDivTotCur=spsDivCashCur+spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur;
					   spsDivTotReg=spsDivCashReg+spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg;
					   
				   } 
				 
				 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){  
					   if($paymentMode == 'Cash'){
						   spsDivCashCur +=Number($currnav);   
//						   spsDivCashReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsDivCpfOACur +=Number($currnav);   
//						   spsDivCpfOAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val()); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsDivCpfSACur +=Number($currnav);   
//						   spsDivCpfSAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsDivCpfRACur +=Number($currnav);   
//						   spsDivCpfRAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsDivSrsCur +=Number($currnav);   
//						   spsDivSrsReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   
					   spsDivTotCur=spsDivCashCur+spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur;
//					   spsDivTotReg=spsDivCashReg+spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg;
					   
				   } 

				   $("#txtFldISSpsdivCurCash").val(roundNumber(spsDivCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsdivCurCash").val(currencyFormat(spsDivCashCur));
				   $("#txtFldISSpsdivCurCpfoa").val(roundNumber(spsDivCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfoa").val(currencyFormat(spsDivCpfOACur));
				   $("#txtFldISSpsdivCurCpfsa").val(roundNumber(spsDivCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfsa").val(currencyFormat(spsDivCpfSACur));
				   $("#txtFldISSpsdivCurCpfra").val(roundNumber(spsDivCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfra").val(currencyFormat(spsDivCpfRACur));
				   $("#txtFldISSpsdivCursrs").val(roundNumber(spsDivSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsdivCursrs").val(currencyFormat(spsDivSrsCur));
				   $("#txtFldISSpsdivCurTot").val(roundNumber(spsDivTotCur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurTot").val(currencyFormat(spsDivTotCur));
				
				   $("#txtFldISSpsdivRegCash").val(roundNumber(spsDivCashReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCash").val(currencyFormat(spsDivCashReg));
				   $("#txtFldISSpsdivRegCpfoa").val(roundNumber(spsDivCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfoa").val(currencyFormat(spsDivCpfOAReg));
				   $("#txtFldISSpsdivRegCpfsa").val(roundNumber(spsDivCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfsa").val(currencyFormat(spsDivCpfSAReg));
				   $("#txtFldISSpsdivRegCpfra").val(roundNumber(spsDivCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfra").val(currencyFormat(spsDivCpfRAReg));
				   $("#txtFldISSpsdivRegsrs").val(roundNumber(spsDivSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegsrs").val(currencyFormat(spsDivSrsReg));
				   $("#txtFldISSpsdivRegTot").val(roundNumber(spsDivTotReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegTot").val(currencyFormat(spsDivTotReg));
			 
				   
				   if($catg=='ILP'){  
					   if($paymentMode == 'Cash'){
						   spsILPCashCur +=Number($currnav);   
						   spsILPCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsILPCpfOACur +=Number($currnav);   
						   spsILPCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsILPCpfSACur +=Number($currnav);   
						   spsILPCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsILPCpfRACur +=Number($currnav);   
						   spsILPCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsILPSrsCur +=Number($currnav);   
						   spsILPSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsILPTotCur=spsILPCashCur+spsILPCpfOACur+spsILPCpfSACur+spsILPCpfRACur+spsILPSrsCur;
					   spsILPTotReg=spsILPCashReg+spsILPCpfOAReg+spsILPCpfSAReg+spsILPCpfRAReg+spsILPSrsReg;
					 
				   } 
				  
				   $("#txtFldISSpsilpCurCash").val(roundNumber(spsILPCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsilpCurCash").val(currencyFormat(spsILPCashCur));
				   $("#txtFldISSpsilpCurCpfoa").val(roundNumber(spsILPCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfoa").val(currencyFormat(spsILPCpfOACur));
				   $("#txtFldISSpsilpCurCpfsa").val(roundNumber(spsILPCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfsa").val(currencyFormat(spsILPCpfSACur));
				   $("#txtFldISSpsilpCurCpfra").val(roundNumber(spsILPCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfra").val(currencyFormat(spsILPCpfRACur));
				   $("#txtFldISSpsilpCursrs").val(roundNumber(spsILPSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsilpCursrs").val(currencyFormat(spsILPSrsCur));
				   $("#txtFldISSpsilpCurTot").val(roundNumber(spsILPTotCur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurTot").val(currencyFormat(spsILPTotCur));
				
				   $("#txtFldISSpsilpRegCash").val(roundNumber(spsILPCashReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCash").val(currencyFormat(spsILPCashReg));
				   $("#txtFldISSpsilpRegCpfoa").val(roundNumber(spsILPCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfoa").val(currencyFormat(spsILPCpfOAReg));
				   $("#txtFldISSpsilpRegCpfsa").val(roundNumber(spsILPCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfsa").val(currencyFormat(spsILPCpfSAReg));
				   $("#txtFldISSpsilpRegCpfra").val(roundNumber(spsILPCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfra").val(currencyFormat(spsILPCpfRAReg));
				   $("#txtFldISSpsilpRegsrs").val(roundNumber(spsILPSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegsrs").val(currencyFormat(spsILPSrsReg));
				   $("#txtFldISSpsilpRegTot").val(roundNumber(spsILPTotReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegTot").val(currencyFormat(spsILPTotReg));
				   
				 /*Set Spouse-Stocks Values*/
				 if($catg=='Shares'){  
					   if($paymentMode == 'Cash'){
						   spsShCashCur +=Number($currnav);   
						   spsShCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsShCpfOACur +=Number($currnav);   
						   spsShCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsShCpfSACur +=Number($currnav);   
						   spsShCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsShCpfRACur +=Number($currnav);   
						   spsShCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsShSrsCur +=Number($currnav);   
						   spsShSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsShTotCur=spsShCashCur+spsShCpfOACur+spsShCpfSACur+spsShCpfRACur+spsShSrsCur;
					   spsShTotReg=spsShCashReg+spsShCpfOAReg+spsShCpfSAReg+spsShCpfRAReg+spsShSrsReg;
					
				   } 
				   
				   $("#txtFldISSpssharesCurCash").val(roundNumber(spsShCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpssharesCurCash").val(currencyFormat(spsShCashCur));
				   $("#txtFldISSpssharesCurCpfoa").val(roundNumber(spsShCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfoa").val(currencyFormat(spsShCpfOACur));
				   $("#txtFldISSpssharesCurCpfsa").val(roundNumber(spsShCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfsa").val(currencyFormat(spsShCpfSACur));
				   $("#txtFldISSpssharesCurCpfra").val(roundNumber(spsShCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfra").val(currencyFormat(spsShCpfRACur));
				   $("#txtFldISSpssharesCursrs").val(roundNumber(spsShSrsCur)).attr("readonly","true");
				   $("#txtFldISSpssharesCursrs").val(currencyFormat(spsShSrsCur));
				   $("#txtFldISSpssharesCurTot").val(roundNumber(spsShTotCur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurTot").val(currencyFormat(spsShTotCur));
				
				   $("#txtFldISSpssharesRegCash").val(roundNumber(spsShCashReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCash").val(currencyFormat(spsShCashReg));
				   $("#txtFldISSpssharesRegCpfoa").val(roundNumber(spsShCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfoa").val(currencyFormat(spsShCpfOAReg));
				   $("#txtFldISSpssharesRegCpfsa").val(roundNumber(spsShCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfsa").val(currencyFormat(spsShCpfSAReg));
				   $("#txtFldISSpssharesRegCpfra").val(roundNumber(spsShCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfra").val(currencyFormat(spsShCpfRAReg));
				   $("#txtFldISSpssharesRegsrs").val(roundNumber(spsShSrsReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegsrs").val(currencyFormat(spsShSrsReg));
				   $("#txtFldISSpssharesRegTot").val(roundNumber(spsShTotReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegTot").val(currencyFormat(spsShTotReg));

				   if($catg=='Stocks'){  
					   if($paymentMode == 'Cash'){
						   spsStckCashCur +=Number($currnav);   
						   spsStckCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsStckCpfOACur +=Number($currnav);   
						   spsStckCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsStckCpfSACur +=Number($currnav);   
						   spsStckCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsStckCpfRACur +=Number($currnav);   
						   spsStckCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsStckSrsCur +=Number($currnav);   
						   spsStckSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsStckTotCur=spsStckCashCur+spsStckCpfOACur+spsStckCpfSACur+spsStckCpfRACur+spsStckSrsCur;
					   spsStckTotReg=spsStckCashReg+spsStckCpfOAReg+spsStckCpfSAReg+spsStckCpfRAReg+spsStckSrsReg;
					
				   } 
				   
				   $("#txtFldISSpsstocksCurCash").val(roundNumber(spsStckCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsstocksCurCash").val(currencyFormat(spsStckCashCur));
				   $("#txtFldISSpsstocksCurCpfoa").val(roundNumber(spsStckCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfoa").val(currencyFormat(spsStckCpfOACur));
				   $("#txtFldISSpsstocksCurCpfsa").val(roundNumber(spsStckCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfsa").val(currencyFormat(spsStckCpfSACur));
				   $("#txtFldISSpsstocksCurCpfra").val(roundNumber(spsStckCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfra").val(currencyFormat(spsStckCpfRACur));
				   $("#txtFldISSpsstocksCursrs").val(roundNumber(spsStckSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCursrs").val(currencyFormat(spsStckSrsCur));
				   $("#txtFldISSpsstocksCurTot").val(roundNumber(spsStckTotCur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurTot").val(currencyFormat(spsStckTotCur));
				
				   $("#txtFldISSpsstocksRegCash").val(roundNumber(spsStckCashReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCash").val(currencyFormat(spsStckCashReg));
				   $("#txtFldISSpsstocksRegCpfoa").val(roundNumber(spsStckCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfoa").val(currencyFormat(spsStckCpfOAReg));
				   $("#txtFldISSpsstocksRegCpfsa").val(roundNumber(spsStckCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfsa").val(currencyFormat(spsStckCpfSAReg));
				   $("#txtFldISSpsstocksRegCpfra").val(roundNumber(spsStckCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfra").val(currencyFormat(spsStckCpfRAReg));
				   $("#txtFldISSpsstocksRegsrs").val(roundNumber(spsStckSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegsrs").val(currencyFormat(spsStckSrsReg));
				   $("#txtFldISSpsstocksRegTot").val(roundNumber(spsStckTotReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegTot").val(currencyFormat(spsStckTotReg));

				   
			 /*Set Spouse-UTs Values*/
			 if($catg=='UT'){  
				   if($paymentMode == 'Cash'){
					   spsUTCashCur +=Number($currnav);   
					   spsUTCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsUTCpfOACur +=Number($currnav);   
					   spsUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsUTCpfSACur +=Number($currnav);   
					   spsUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsUTCpfRACur +=Number($currnav);   
					   spsUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsUTSrsCur +=Number($currnav);   
					   spsUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsUTTotCur=spsUTCashCur+spsUTCpfOACur+spsUTCpfSACur+spsUTCpfRACur+spsUTSrsCur;
				   spsUTTotReg=spsUTCashReg+spsUTCpfOAReg+spsUTCpfSAReg+spsUTCpfRAReg+spsUTSrsReg;
				
			   } 
			 
			   
			   $("#txtFldISSpsutsCurCash").val(roundNumber(spsUTCashCur)).attr("readonly","true"); 
			   $("#txtFldISSpsutsCurCash").val(currencyFormat(spsUTCashCur));
			   $("#txtFldISSpsutsCurCpfoa").val(roundNumber(spsUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfoa").val(currencyFormat(spsUTCpfOACur));
			   $("#txtFldISSpsutsCurCpfsa").val(roundNumber(spsUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfsa").val(currencyFormat(spsUTCpfSACur));
			   $("#txtFldISSpsutsCurCpfra").val(roundNumber(spsUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfra").val(currencyFormat(spsUTCpfRACur));
			   $("#txtFldISSpsutsCursrs").val(roundNumber(spsUTSrsCur)).attr("readonly","true");
			   $("#txtFldISSpsutsCursrs").val(currencyFormat(spsUTSrsCur));
			   $("#txtFldISSpsutsCurTot").val(roundNumber(spsUTTotCur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurTot").val(currencyFormat(spsUTTotCur));
			
			   $("#txtFldISSpsutsRegCash").val(roundNumber(spsUTCashReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCash").val(currencyFormat(spsUTCashReg));
			   $("#txtFldISSpsutsRegCpfoa").val(roundNumber(spsUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfoa").val(currencyFormat(spsUTCpfOAReg));
			   $("#txtFldISSpsutsRegCpfsa").val(roundNumber(spsUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfsa").val(currencyFormat(spsUTCpfSAReg));
			   $("#txtFldISSpsutsRegCpfra").val(roundNumber(spsUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfra").val(currencyFormat(spsUTCpfRAReg));
			   $("#txtFldISSpsutsRegsrs").val(roundNumber(spsUTSrsReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegsrs").val(currencyFormat(spsUTSrsReg));
			   $("#txtFldISSpsutsRegTot").val(roundNumber(spsUTTotReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegTot").val(currencyFormat(spsUTTotReg));
			
			   if($catg=='Others'){  
				   if($paymentMode == 'Cash'){
					   spsOthCashCur +=Number($currnav);   
					   spsOthCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsOthCpfOACur +=Number($currnav);   
					   spsOthCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsOthCpfSACur +=Number($currnav);   
					   spsOthCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsOthCpfRACur +=Number($currnav);   
					   spsOthCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsOthSrsCur +=Number($currnav);   
					   spsOthSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsOthTotCur=spsOthCashCur+spsOthCpfOACur+spsOthCpfSACur+spsOthCpfRACur+spsOthSrsCur;
				   spsOthTotReg=spsOthCashReg+spsOthCpfOAReg+spsOthCpfSAReg+spsOthCpfRAReg+spsOthSrsReg;
				
			   } 
			 
			   
			   $("#txtFldISSpsothersCurCash").val(roundNumber(spsOthCashCur)).attr("readonly","true"); 
			   $("#txtFldISSpsothersCurCash").val(currencyFormat(spsOthCashCur));
			   $("#txtFldISSpsothersCurCpfoa").val(roundNumber(spsOthCpfOACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfoa").val(currencyFormat(spsOthCpfOACur));
			   $("#txtFldISSpsothersCurCpfsa").val(roundNumber(spsOthCpfSACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfsa").val(currencyFormat(spsOthCpfSACur));
			   $("#txtFldISSpsothersCurCpfra").val(roundNumber(spsOthCpfRACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfra").val(currencyFormat(spsOthCpfRACur));
			   $("#txtFldISSpsothersCursrs").val(roundNumber(spsOthSrsCur)).attr("readonly","true");
			   $("#txtFldISSpsothersCursrs").val(currencyFormat(spsOthSrsCur));
			   $("#txtFldISSpsothersCurTot").val(roundNumber(spsOthTotCur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurTot").val(currencyFormat(spsOthTotCur));
			
			   $("#txtFldISSpsothersRegCash").val(roundNumber(spsOthCashReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCash").val(currencyFormat(spsOthCashReg));
			   $("#txtFldISSpsothersRegCpfoa").val(roundNumber(spsOthCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfoa").val(currencyFormat(spsOthCpfOAReg));
			   $("#txtFldISSpsothersRegCpfsa").val(roundNumber(spsOthCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfsa").val(currencyFormat(spsOthCpfSAReg));
			   $("#txtFldISSpsothersRegCpfra").val(roundNumber(spsOthCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfra").val(currencyFormat(spsOthCpfRAReg));
			   $("#txtFldISSpsothersRegsrs").val(roundNumber(spsOthSrsReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegsrs").val(currencyFormat(spsOthSrsReg));
			   $("#txtFldISSpsothersRegTot").val(roundNumber(spsOthTotReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegTot").val(currencyFormat(spsOthTotReg));
			    
			
			 
			 /*Set Spouse-ILPs Values*/
						   
			 
			 /*Set Spouse-Bonds Values*/
			 

			   /*Total - Horizontal */
			   
			   var spsOthCashCurTot =spsBdCashCur+spsDivCashCur+spsILPCashCur+spsShCashCur+spsStckCashCur+spsUTCashCur+spsOthCashCur;
			   var spsOthCashRegTot =spsBdCashReg+spsDivCashReg+spsILPCashReg+spsShCashReg+spsStckCashReg+spsUTCashReg+spsOthCashReg;
			   
			   var spsOthCpfOACurTot =spsBdCpfOACur+spsDivCpfOACur+spsILPCpfOACur+spsShCpfOACur+spsStckCpfOACur+spsUTCpfOACur+spsOthCpfOACur
			   var spsOthCpfOARegTot =spsBdCpfOAReg+spsDivCpfOAReg+spsILPCpfOAReg+spsShCpfOAReg+spsStckCpfOAReg+spsUTCpfOAReg+spsOthCpfOAReg;
			   
			   var spsOthCpfSACurTot =spsBdCpfSACur+spsDivCpfSACur+spsILPCpfSACur+spsShCpfSACur+spsStckCpfSACur+spsUTCpfSACur+spsOthCpfSACur;
			   var spsOthCpfSARegTot =spsBdCpfSAReg+spsDivCpfSAReg+spsILPCpfSAReg+spsShCpfSAReg+spsStckCpfSAReg+spsUTCpfSAReg+spsOthCpfSAReg;
			   
			   var spsOthCpfRACurTot =spsBdCpfRACur+spsDivCpfRACur+spsILPCpfRACur+spsShCpfRACur+spsStckCpfRACur+spsUTCpfRACur+spsOthCpfRACur;
			   var spsOthCpfRARegTot =spsBdCpfRAReg+spsDivCpfRAReg+spsILPCpfRAReg+spsShCpfRAReg+spsStckCpfRAReg+spsUTCpfRAReg+spsOthCpfRAReg;
			   
			   var spsOthSrsCurTot =spsBdSrsCur+spsDivSrsCur+spsILPSrsCur+spsShSrsCur+spsStckSrsCur+spsUTSrsCur+spsOthSrsCur;
			   var spsOthSrsRegTot =spsBdSrsReg+spsDivSrsReg+spsILPSrsReg+spsShSrsReg+spsStckSrsReg+spsUTSrsReg+spsOthSrsReg;
			   
			   /*Total - Verticle */
			   var spsOthTotCurVert = spsOthCashCurTot + spsOthCpfOACurTot + spsOthCpfSACurTot + spsOthCpfRACurTot + spsOthSrsCurTot;
			   var spsOthTotRegVert = spsOthCashRegTot + spsOthCpfOARegTot + spsOthCpfSARegTot + spsOthCpfRARegTot + spsOthSrsRegTot;

			   $("#txtFldISSpstotCurCash").val(roundNumber(spsOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISSpstotCurCash").val(currencyFormat(spsOthCashCurTot));
			   
			   $("#txtFldISSpstotCurCpfoa").val(roundNumber(spsOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfoa").val(currencyFormat(spsOthCpfOACurTot));
			   
			   $("#txtFldISSpstotCurCpfsa").val(roundNumber(spsOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfsa").val(currencyFormat(spsOthCpfSACurTot));
			   
			   $("#txtFldISSpstotCurCpfra").val(roundNumber(spsOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfra").val(currencyFormat(spsOthCpfRACurTot));
			   
			   $("#txtFldISSpstotCursrs").val(roundNumber(spsOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCursrs").val(currencyFormat(spsOthSrsCurTot));
			   
			   $("#txtFldISSpstotCurTot").val(roundNumber(spsOthTotCurVert)).attr("readonly","true");
			   $("#txtFldISSpstotCurTot").val(currencyFormat(spsOthTotCurVert));
			
			   $("#txtFldISSpstotRegCash").val(roundNumber(spsOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCash").val(currencyFormat(spsOthCashRegTot));
			   
			   $("#txtFldISSpstotRegCpfoa").val(roundNumber(spsOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfoa").val(currencyFormat(spsOthCpfOARegTot));
			   
			   $("#txtFldISSpstotRegCpfsa").val(roundNumber(spsOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfsa").val(currencyFormat(spsOthCpfSARegTot));
			   
			   $("#txtFldISSpstotRegCpfra").val(roundNumber(spsOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfra").val(currencyFormat(spsOthCpfRARegTot));
			   
			   $("#txtFldISSpstotRegsrs").val(roundNumber(spsOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegsrs").val(currencyFormat(spsOthSrsRegTot));
			   
			   $("#txtFldISSpstotRegTot").val(roundNumber(spsOthTotRegVert)).attr("readonly","true");
			   $("#txtFldISSpstotRegTot").val(currencyFormat(spsOthTotRegVert));
			   
			   $spousediv.find("div#generateItSpouse").css("display","block"); 
			 
			 
			 /*Cpf Summary*/
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");    
				 
				 $cpfspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					
				 
				 /*Cpf Summary*/
				 $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr").each(function(){ 
					 $(this).find('th:eq(1)').remove(); 
				 });
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:even").each(function(){ 
						$(this).addClass("even");
						if($(this).hasClass("even")){ 
							 $(this).find('td:eq(2)').remove(); 
						}
				  });
				  
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:odd").each(function(){ 
						$(this).addClass("odd");
						if($(this).hasClass("odd")){ 
							 $(this).find('td:eq(1)').remove(); 
						}
				  });

			   

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(spsBdCpfOACur+spsBdCpfSACur+spsBdCpfRACur+spsBdSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(spsBdCpfOAReg+spsBdCpfSAReg+spsBdCpfRAReg+spsBdSrsReg)).attr("readonly","true");

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfdivCurTot").val(currencyFormat(spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfdivRegTot").val(currencyFormat(spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg)).attr("readonly","true");

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfilpCurTot").val(currencyFormat(spsILPCpfOACur+spsILPCpfSACur+spsILPCpfRACur+spsILPSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfilpRegTot").val(currencyFormat(spsILPCpfOAReg+spsILPCpfSAReg+spsILPCpfRAReg+spsILPSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(spsShCpfOACur+spsShCpfSACur+spsShCpfRACur+spsShSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(spsShCpfOAReg+spsShCpfSAReg+spsShCpfRAReg+spsShSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(spsStckCpfOACur+spsStckCpfSACur+spsStckCpfRACur+spsStckSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(spsStckCpfOAReg+spsStckCpfSAReg+spsStckCpfRAReg+spsStckSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfutsCurTot").val(currencyFormat(spsUTCpfOACur+spsUTCpfSACur+spsUTCpfRACur+spsUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfutsRegTot").val(currencyFormat(spsUTCpfOAReg+spsUTCpfSAReg+spsUTCpfRAReg+spsUTSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelftotCurTot").val(currencyFormat(spsOthCpfOACur+spsOthCpfSACur+spsOthCpfRACur+spsOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelftotRegTot").val(currencyFormat(spsOthCpfOAReg+spsOthCpfSAReg+spsOthCpfRAReg+spsOthSrsReg)).attr("readonly","true");
			 
		  }
			  /*SRS Summary*/
			  if($paymentMode == 'Cash' || $paymentMode == 'SRS'){ 
				  $("#divforSRSSummary").css("display","block");  
				  $srsspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					 $("#INVSUM_NORECFOUND").css("display","none");
					
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  }); 
					 
					 

			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(spsBdCashCur+spsBdSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(spsBdCashReg+spsBdSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfdivCurTot").val(currencyFormat(spsDivCashCur+spsDivSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfdivRegTot").val(currencyFormat(spsDivCashReg+spsDivSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfilpCurTot").val(currencyFormat(spsILPCashCur+spsILPSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfilpRegTot").val(currencyFormat(spsILPCashReg+spsILPSrsReg)).attr("readonly","true");
			
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(spsShCashCur+spsShSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(spsShCashReg+spsShSrsReg)).attr("readonly","true");
			
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(spsStckCashCur+spsStckSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfstocksfRegTot").val(currencyFormat(spsStckCashReg+spsStckSrsReg)).attr("readonly","true");
			
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfutsCurTot").val(currencyFormat(spsUTCashCur+spsUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfutsRegTot").val(roundNumber(spsUTCashReg+spsUTSrsReg)).attr("readonly","true");
				  
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelftotCurTot").val(currencyFormat(spsOthCashCur+spsOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelftotRegTot").val(currencyFormat(spsOthCashReg+spsOthSrsReg)).attr("readonly","true");
				 
			  }
				  
		 }else if($ownership == "Joint"){
			 $jointdiv.html($mergeFamdiv); 
			 $jointdiv.find("input[id=txtFldISOwnership]").val("JOINT/FAMILY");
			 

			 if($catg=='Bonds'){
				 
				   if($paymentMode == 'Cash'){
					   jntBdCashCur +=Number($currnav);   
					   jntBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntBdCpfOACur +=Number($currnav);   
					   jntBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntBdCpfSACur +=Number($currnav);   
					   jntBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntBdCpfRACur +=Number($currnav);   
					   jntBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntBdSrsCur +=Number($currnav);   
					   jntBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntBdTotCur=jntBdCashCur+jntBdCpfOACur+jntBdCpfSACur+jntBdCpfRACur+jntBdSrsCur;
				   jntBdTotReg=jntBdCashReg+jntBdCpfOAReg+jntBdCpfSAReg+jntBdCpfRAReg+jntBdSrsReg;
				   
				   
			   } 
				 
				   $("#txtFldISFambondsCurCash").val(roundNumber(jntBdCashCur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCash").val(currencyFormat(jntBdCashCur));
				   
				   $("#txtFldISFambondsCurCpfoa").val(roundNumber(jntBdCpfOACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfoa").val(currencyFormat(jntBdCpfOACur));
				   
				   $("#txtFldISFambondsCurCpfsa").val(roundNumber(jntBdCpfSACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfsa").val(currencyFormat(jntBdCpfSACur));
				   
				   $("#txtFldISFambondsCurCpfra").val(roundNumber(jntBdCpfRACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfra").val(currencyFormat(jntBdCpfRACur));
				   
				   $("#txtFldISFambondsCursrs").val(roundNumber(jntBdSrsCur)).attr("readonly","true");
				   $("#txtFldISFambondsCursrs").val(currencyFormat(jntBdSrsCur));
				   
				   $("#txtFldISFambondsCurTot").val(roundNumber(jntBdTotCur)).attr("readonly","true");
				   $("#txtFldISFambondsCurTot").val(currencyFormat(jntBdTotCur));
				
				   $("#txtFldISFambondsRegCash").val(roundNumber(jntBdCashReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCash").val(currencyFormat(jntBdCashReg));
				   
				   $("#txtFldISFambondsRegCpfoa").val(roundNumber(jntBdCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfoa").val(currencyFormat(jntBdCpfOAReg));
				   
				   $("#txtFldISFambondsRegCpfsa").val(roundNumber(jntBdCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfsa").val(currencyFormat(jntBdCpfSAReg));
				   
				   $("#txtFldISFambondsRegCpfra").val(roundNumber(jntBdCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfra").val(currencyFormat(jntBdCpfRAReg));
				   
				   $("#txtFldISFambondsRegsrs").val(roundNumber(jntBdSrsReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegsrs").val(currencyFormat(jntBdSrsReg));
				   
				   $("#txtFldISFambondsRegTot").val(roundNumber(jntBdTotReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegTot").val(currencyFormat(jntBdTotReg));
				 
				 /*Set Joint-Dividend Values*/
				 if(!isEmpty($catg) && $reinvest == "N"){  
					   if($paymentMode == 'Cash'){
//						   jntDivCashCur +=Number($currnav);   
						   jntDivCashReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
//						   jntDivCpfOACur +=Number($currnav);   
						   jntDivCpfOAReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() ); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
//						   jntDivCpfSACur +=Number($currnav);   
						   jntDivCpfSAReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
//						   jntDivCpfRACur +=Number($currnav);   
						   jntDivCpfRAReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
//						   jntDivSrsCur +=Number($currnav);   
						   jntDivSrsReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val()); 
			     	   } 
					   
//					   jntDivTotCur=jntDivCashCur+jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur;
					   jntDivTotReg=jntDivCashReg+jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg;
					
					   
				   }
				 
				 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){  
					   if($paymentMode == 'Cash'){
						   jntDivCashCur +=Number($currnav);   
//						   jntDivCashReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntDivCpfOACur +=Number($currnav);   
//						   jntDivCpfOAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntDivCpfSACur +=Number($currnav);   
//						   jntDivCpfSAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntDivCpfRACur +=Number($currnav);   
//						   jntDivCpfRAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntDivSrsCur +=Number($currnav);   
//						   jntDivSrsReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val()); 
			     	   } 
					   
					   jntDivTotCur=jntDivCashCur+jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur;
//					   jntDivTotReg=jntDivCashReg+jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamdivCurCash").val(roundNumber(jntDivCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamdivCurCash").val(currencyFormat(jntDivCashCur));
				   $("#txtFldISFamdivCurCpfoa").val(roundNumber(jntDivCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfoa").val(currencyFormat(jntDivCpfOACur));
				   $("#txtFldISFamdivCurCpfsa").val(roundNumber(jntDivCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfsa").val(currencyFormat(jntDivCpfSACur));
				   $("#txtFldISFamdivCurCpfra").val(roundNumber(jntDivCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfra").val(currencyFormat(jntDivCpfRACur));
				   $("#txtFldISFamdivCursrs").val(roundNumber(jntDivSrsCur)).attr("readonly","true");
				   $("#txtFldISFamdivCursrs").val(currencyFormat(jntDivSrsCur));
				   $("#txtFldISFamdivCurTot").val(roundNumber(jntDivTotCur)).attr("readonly","true");
				   $("#txtFldISFamdivCurTot").val(currencyFormat(jntDivTotCur));
				
				   $("#txtFldISFamdivRegCash").val(roundNumber(jntDivCashReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCash").val(currencyFormat(jntDivCashReg));
				   $("#txtFldISFamdivRegCpfoa").val(roundNumber(jntDivCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfoa").val(currencyFormat(jntDivCpfOAReg));
				   $("#txtFldISFamdivRegCpfsa").val(roundNumber(jntDivCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfsa").val(currencyFormat(jntDivCpfSAReg));
				   $("#txtFldISFamdivRegCpfra").val(roundNumber(jntDivCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfra").val(currencyFormat(jntDivCpfRAReg));
				   $("#txtFldISFamdivRegsrs").val(roundNumber(jntDivSrsReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegsrs").val(currencyFormat(jntDivSrsReg));
				   $("#txtFldISFamdivRegTot").val(roundNumber(jntDivTotReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegTot").val(currencyFormat(jntDivTotReg));

				   if($catg=='ILP'){  
					   if($paymentMode == 'Cash'){
						   jntILPCashCur +=Number($currnav);   
						   jntILPCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntILPCpfOACur +=Number($currnav);   
						   jntILPCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntILPCpfSACur +=Number($currnav);   
						   jntILPCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntILPCpfRACur +=Number($currnav);   
						   jntILPCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntILPSrsCur +=Number($currnav);   
						   jntILPSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntILPTotCur=jntILPCashCur+jntILPCpfOACur+jntILPCpfSACur+jntILPCpfRACur+jntILPSrsCur;
					   jntILPTotReg=jntILPCashReg+jntILPCpfOAReg+jntILPCpfSAReg+jntILPCpfRAReg+jntILPSrsReg;
					   
					
					   
				   } 
				 
				   $("#txtFldISFamilpCurCash").val(roundNumber(jntILPCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamilpCurCash").val(currencyFormat(jntILPCashCur));
				   $("#txtFldISFamilpCurCpfoa").val(roundNumber(jntILPCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfoa").val(currencyFormat(jntILPCpfOACur));
				   $("#txtFldISFamilpCurCpfsa").val(roundNumber(jntILPCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfsa").val(currencyFormat(jntILPCpfSACur));
				   $("#txtFldISFamilpCurCpfra").val(roundNumber(jntILPCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfra").val(currencyFormat(jntILPCpfRACur));
				   $("#txtFldISFamilpCursrs").val(roundNumber(jntILPSrsCur)).attr("readonly","true");
				   $("#txtFldISFamilpCursrs").val(currencyFormat(jntILPSrsCur));
				   $("#txtFldISFamilpCurTot").val(roundNumber(jntILPTotCur)).attr("readonly","true");
				   $("#txtFldISFamilpCurTot").val(currencyFormat(jntILPTotCur));
				
				   $("#txtFldISFamilpRegCash").val(roundNumber(jntILPCashReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCash").val(currencyFormat(jntILPCashReg));
				   $("#txtFldISFamilpRegCpfoa").val(roundNumber(jntILPCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfoa").val(currencyFormat(jntILPCpfOAReg));
				   $("#txtFldISFamilpRegCpfsa").val(roundNumber(jntILPCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfsa").val(currencyFormat(jntILPCpfSAReg));
				   $("#txtFldISFamilpRegCpfra").val(roundNumber(jntILPCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfra").val(currencyFormat(jntILPCpfRAReg));
				   $("#txtFldISFamilpRegsrs").val(roundNumber(jntILPSrsReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegsrs").val(currencyFormat(jntILPSrsReg));
				   $("#txtFldISFamilpRegTot").val(roundNumber(jntILPTotReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegTot").val(currencyFormat(jntILPTotReg));
				   
				   if($catg=='Shares'){  
					   if($paymentMode == 'Cash'){
						   jntShCashCur +=Number($currnav);   
						   jntShCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntShCpfOACur +=Number($currnav);   
						   jntShCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntShCpfSACur +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val());   
						   jntShCpfSAReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntShCpfRACur +=Number($currnav);   
						   jntShCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntShSrsCur +=Number($currnav);   
						   jntShSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntShTotCur=jntShCashCur+jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur;
					   jntShTotReg=jntShCashReg+jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamsharesCurCash").val(roundNumber(jntShCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamsharesCurCash").val(currencyFormat(jntShCashCur));
				   $("#txtFldISFamsharesCurCpfoa").val(roundNumber(jntShCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfoa").val(currencyFormat(jntShCpfOACur));
				   $("#txtFldISFamsharesCurCpfsa").val(roundNumber(jntShCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfsa").val(currencyFormat(jntShCpfSACur));
				   $("#txtFldISFamsharesCurCpfra").val(roundNumber(jntShCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfra").val(currencyFormat(jntShCpfRACur));
				   $("#txtFldISFamsharesCursrs").val(roundNumber(jntShSrsCur)).attr("readonly","true");
				   $("#txtFldISFamsharesCursrs").val(currencyFormat(jntShSrsCur));
				   $("#txtFldISFamsharesCurTot").val(roundNumber(jntShTotCur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurTot").val(currencyFormat(jntShTotCur));
				
				   $("#txtFldISFamsharesRegCash").val(roundNumber(jntShCashReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCash").val(currencyFormat(jntShCashReg));
				   $("#txtFldISFamsharesRegCpfoa").val(roundNumber(jntShCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfoa").val(currencyFormat(jntShCpfOAReg));
				   $("#txtFldISFamsharesRegCpfsa").val(roundNumber(jntShCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfsa").val(currencyFormat(jntShCpfSAReg));
				   $("#txtFldISFamsharesRegCpfra").val(roundNumber(jntShCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfra").val(currencyFormat(jntShCpfRAReg));
				   $("#txtFldISFamsharesRegsrs").val(roundNumber(jntShSrsReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegsrs").val(currencyFormat(jntShSrsReg));
				   $("#txtFldISFamsharesRegTot").val(roundNumber(jntShTotReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegTot").val(currencyFormat(jntShTotReg));
				
				 if($catg=='Stocks'){  
					   if($paymentMode == 'Cash'){
						   jntStckCashCur +=Number($currnav);   
						   jntStckCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntStckCpfOACur +=Number($currnav);   
						   jntStckCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntStckCpfSACur +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val());   
						   jntStckCpfSAReg +=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val() * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntStckCpfRACur +=Number($currnav);   
						   jntStckCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntStckSrsCur +=Number($currnav);   
						   jntStckSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntStckTotCur=jntStckCashCur+jntStckCpfOACur+jntStckCpfSACur+jntStckCpfRACur+jntStckSrsCur;
					   jntStckTotReg=jntStckCashReg+jntStckCpfOAReg+jntStckCpfSAReg+jntStckCpfRAReg+jntStckSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamstocksCurCash").val(roundNumber(jntStckCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamstocksCurCash").val(currencyFormat(jntStckCashCur));
				   $("#txtFldISFamstocksCurCpfoa").val(roundNumber(jntStckCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfoa").val(currencyFormat(jntStckCpfOACur));
				   $("#txtFldISFamstocksCurCpfsa").val(roundNumber(jntStckCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfsa").val(currencyFormat(jntStckCpfSACur));
				   $("#txtFldISFamstocksCurCpfra").val(roundNumber(jntStckCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfra").val(currencyFormat(jntStckCpfRACur));
				   $("#txtFldISFamstocksCursrs").val(roundNumber(jntStckSrsCur)).attr("readonly","true");
				   $("#txtFldISFamstocksCursrs").val(currencyFormat(jntStckSrsCur));
				   $("#txtFldISFamstocksCurTot").val(roundNumber(jntStckTotCur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurTot").val(currencyFormat(jntStckTotCur));
				
				   $("#txtFldISFamstocksRegCash").val(roundNumber(jntStckCashReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCash").val(currencyFormat(jntStckCashReg));
				   $("#txtFldISFamstocksRegCpfoa").val(roundNumber(jntStckCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfoa").val(currencyFormat(jntStckCpfOAReg));
				   $("#txtFldISFamstocksRegCpfsa").val(roundNumber(jntStckCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfsa").val(currencyFormat(jntStckCpfSAReg));
				   $("#txtFldISFamstocksRegCpfra").val(roundNumber(jntStckCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfra").val(currencyFormat(jntStckCpfRAReg));
				   $("#txtFldISFamstocksRegsrs").val(roundNumber(jntStckSrsReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegsrs").val(currencyFormat(jntStckSrsReg));
				   $("#txtFldISFamstocksRegTot").val(roundNumber(jntStckTotReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegTot").val(currencyFormat(jntStckTotReg));
				
			 
			 /*Set Joint-UTs Values*/
			 if($catg=='UT'){  
				   if($paymentMode == 'Cash'){
					   jntUTCashCur +=Number($currnav);   
					   jntUTCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntUTCpfOACur +=Number($currnav);   
					   jntUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntUTCpfSACur +=Number($currnav);   
					   jntUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntUTCpfRACur +=Number($currnav);   
					   jntUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntUTSrsCur +=Number($currnav);   
					   jntUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntUTTotCur=jntUTCashCur+jntUTCpfOACur+jntUTCpfSACur+jntUTCpfRACur+jntUTSrsCur;
				   jntUTTotReg=jntUTCashReg+jntUTCpfOAReg+jntUTCpfSAReg+jntUTCpfRAReg+jntUTSrsReg;
		
			   } 
			 
			   
			   $("#txtFldISFamutsCurCash").val(roundNumber(jntUTCashCur)).attr("readonly","true"); 
			   $("#txtFldISFamutsCurCash").val(currencyFormat(jntUTCashCur));
			   $("#txtFldISFamutsCurCpfoa").val(roundNumber(jntUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfoa").val(currencyFormat(jntUTCpfOACur));
			   $("#txtFldISFamutsCurCpfsa").val(roundNumber(jntUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfsa").val(currencyFormat(jntUTCpfSACur));
			   $("#txtFldISFamutsCurCpfra").val(roundNumber(jntUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfra").val(currencyFormat(jntUTCpfRACur));
			   $("#txtFldISFamutsCursrs").val(roundNumber(jntUTSrsCur)).attr("readonly","true");
			   $("#txtFldISFamutsCursrs").val(currencyFormat(jntUTSrsCur));
			   $("#txtFldISFamutsCurTot").val(roundNumber(jntUTTotCur)).attr("readonly","true");
			   $("#txtFldISFamutsCurTot").val(currencyFormat(jntUTTotCur));
			
			   $("#txtFldISFamutsRegCash").val(roundNumber(jntUTCashReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCash").val(currencyFormat(jntUTCashReg));
			   $("#txtFldISFamutsRegCpfoa").val(roundNumber(jntUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfoa").val(currencyFormat(jntUTCpfOAReg));
			   $("#txtFldISFamutsRegCpfsa").val(roundNumber(jntUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfsa").val(currencyFormat(jntUTCpfSAReg));
			   $("#txtFldISFamutsRegCpfra").val(roundNumber(jntUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfra").val(currencyFormat(jntUTCpfRAReg));
			   $("#txtFldISFamutsRegsrs").val(roundNumber(jntUTSrsReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegsrs").val(currencyFormat(jntUTSrsReg));
			   $("#txtFldISFamutsRegTot").val(roundNumber(jntUTTotReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegTot").val(currencyFormat(jntUTTotReg));
			   
			   if($catg=='Others'){  
				   if($paymentMode == 'Cash'){
					   jntOthCashCur +=Number($currnav);   
					   jntOthCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntOthCpfOACur +=Number($currnav);   
					   jntOthCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntOthCpfSACur +=Number($currnav);   
					   jntOthCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntOthCpfRACur +=Number($currnav);   
					   jntOthCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntOthSrsCur +=Number($currnav);   
					   jntOthSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntOthTotCur=jntOthCashCur+jntOthCpfOACur+jntOthCpfSACur+jntOthCpfRACur+jntOthSrsCur;
				   jntOthTotReg=jntOthCashReg+jntOthCpfOAReg+jntOthCpfSAReg+jntOthCpfRAReg+jntOthSrsReg;
		
			   } 
			 
			   
			   $("#txtFldISFamothersCurCash").val(roundNumber(jntOthCashCur)).attr("readonly","true"); 
			   $("#txtFldISFamothersCurCash").val(currencyFormat(jntOthCashCur));
			   $("#txtFldISFamothersCurCpfoa").val(roundNumber(jntOthCpfOACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfoa").val(currencyFormat(jntOthCpfOACur));
			   $("#txtFldISFamothersCurCpfsa").val(roundNumber(jntOthCpfSACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfsa").val(currencyFormat(jntOthCpfSACur));
			   $("#txtFldISFamothersCurCpfra").val(roundNumber(jntOthCpfRACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfra").val(currencyFormat(jntOthCpfRACur));
			   $("#txtFldISFamothersCursrs").val(roundNumber(jntOthSrsCur)).attr("readonly","true");
			   $("#txtFldISFamothersCursrs").val(currencyFormat(jntOthSrsCur));
			   $("#txtFldISFamothersCurTot").val(roundNumber(jntOthTotCur)).attr("readonly","true");
			   $("#txtFldISFamothersCurTot").val(currencyFormat(jntOthTotCur));
			
			   $("#txtFldISFamothersRegCash").val(roundNumber(jntOthCashReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCash").val(currencyFormat(jntOthCashReg));
			   $("#txtFldISFamothersRegCpfoa").val(roundNumber(jntOthCpfOAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfoa").val(currencyFormat(jntOthCpfOAReg));
			   $("#txtFldISFamothersRegCpfsa").val(roundNumber(jntOthCpfSAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfsa").val(currencyFormat(jntOthCpfSAReg));
			   $("#txtFldISFamothersRegCpfra").val(roundNumber(jntOthCpfRAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfra").val(currencyFormat(jntOthCpfRAReg));
			   $("#txtFldISFamothersRegsrs").val(roundNumber(jntOthSrsReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegsrs").val(currencyFormat(jntOthSrsReg));
			   $("#txtFldISFamothersRegTot").val(roundNumber(jntOthTotReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegTot").val(currencyFormat(jntOthTotReg));
		
			 
			 /*Set Joint-ILPs Values*/
			  
			 /*Set Joint-Bonds Values*/
			 
						

			   /*Total - Horizontal */
			   
			   var jntOthCashCurTot =jntBdCashCur+jntDivCashCur+jntILPCashCur+jntShCashCur+jntStckCashCur+jntUTCashCur+jntOthCashCur;
			   var jntOthCashRegTot =jntBdCashReg+jntDivCashReg+jntILPCashReg+jntShCashReg+jntStckCashReg+jntUTCashReg+jntOthCashReg;
			   
			   var jntOthCpfOACurTot =jntBdCpfOACur+jntDivCpfOACur+jntILPCpfOACur+jntShCpfOACur+jntStckCpfOACur+jntUTCpfOACur+jntOthCpfOACur;
			   var jntOthCpfOARegTot =jntBdCpfOAReg+jntDivCpfOAReg+jntILPCpfOAReg+jntShCpfOAReg+jntStckCpfOAReg+jntUTCpfOAReg+jntOthCpfOAReg;
			   
			   var jntOthCpfSACurTot =jntBdCpfSACur+jntDivCpfSACur+jntILPCpfSACur+jntShCpfSACur+jntStckCpfSACur+jntUTCpfSACur+jntOthCpfSACur;
			   var jntOthCpfSARegTot =jntBdCpfSAReg+jntDivCpfSAReg+jntILPCpfSAReg+jntShCpfSAReg+jntStckCpfSAReg+jntUTCpfSAReg+jntOthCpfSAReg;
			   
			   var jntOthCpfRACurTot =jntBdCpfRACur+jntDivCpfRACur+jntILPCpfRACur+jntShCpfRACur+jntStckCpfRACur+jntUTCpfRACur+jntOthCpfRACur;
			   var jntOthCpfRARegTot =jntBdCpfRAReg+jntDivCpfRAReg+jntILPCpfRAReg+jntShCpfRAReg+jntStckCpfRAReg+jntUTCpfRAReg+jntOthCpfRAReg;
			   
			   var jntOthSrsCurTot =jntBdSrsCur+jntDivSrsCur+jntILPSrsCur+jntShSrsCur+jntStckSrsCur+jntUTSrsCur+jntOthSrsCur;
			   var jntOthSrsRegTot =jntBdSrsReg+jntDivSrsReg+jntILPSrsReg+jntShSrsReg+jntStckSrsReg+jntUTSrsReg+jntOthSrsReg;
			   
			   /*Total - Verticle */
			   var jntOthTotCurVert = jntOthCashCurTot+jntOthCpfOACurTot+jntOthCpfSACurTot+jntOthCpfRACurTot+jntOthSrsCurTot;
			   var jntOthTotRegVert = jntOthCashRegTot+jntOthCpfOARegTot+jntOthCpfSARegTot+jntOthCpfRARegTot+jntOthSrsRegTot;
			   
			   $("#txtFldISFamtotCurCash").val(roundNumber(jntOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISFamtotCurCash").val(currencyFormat(jntOthCashCurTot));
			   
			   $("#txtFldISFamtotCurCpfoa").val(roundNumber(jntOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfoa").val(currencyFormat(jntOthCpfOACurTot));
			   
			   $("#txtFldISFamtotCurCpfsa").val(roundNumber(jntOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfsa").val(currencyFormat(jntOthCpfSACurTot));
			   
			   $("#txtFldISFamtotCurCpfra").val(roundNumber(jntOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfra").val(currencyFormat(jntOthCpfRACurTot));
			   
			   $("#txtFldISFamtotCursrs").val(roundNumber(jntOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCursrs").val(currencyFormat(jntOthSrsCurTot));
			   
			   $("#txtFldISFamtotCurTot").val(roundNumber(jntOthTotCurVert)).attr("readonly","true");
			   $("#txtFldISFamtotCurTot").val(currencyFormat(jntOthTotCurVert));
			
			   $("#txtFldISFamtotRegCash").val(roundNumber(jntOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCash").val(currencyFormat(jntOthCashRegTot));
			   
			   $("#txtFldISFamtotRegCpfoa").val(roundNumber(jntOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfoa").val(currencyFormat(jntOthCpfOARegTot));
			   
			   $("#txtFldISFamtotRegCpfsa").val(roundNumber(jntOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfsa").val(currencyFormat(jntOthCpfSARegTot));
			   
			   $("#txtFldISFamtotRegCpfra").val(roundNumber(jntOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfra").val(currencyFormat(jntOthCpfRARegTot));
			   
			   $("#txtFldISFamtotRegsrs").val(roundNumber(jntOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegsrs").val(currencyFormat(jntOthSrsRegTot));
			   
			   $("#txtFldISFamtotRegTot").val(roundNumber(jntOthTotRegVert)).attr("readonly","true");
			   $("#txtFldISFamtotRegTot").val(currencyFormat(jntOthTotRegVert));
			
			 $jointdiv.find("div#generateItFamily").css("display","block");
		 
		
			 
			 /*Cpf Summary*/
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");    
				 $cpfspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					
				 
				 $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr").each(function(){ 
				 $(this).find('th:eq(1)').remove(); 
			 });
			  $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						 $(this).find('td:eq(2)').remove(); 
					}
			  });
			  
			  $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						 $(this).find('td:eq(1)').remove(); 
					}
			  });
				  
			   
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(jntBdCpfOACur+jntBdCpfSACur+jntBdCpfRACur+jntBdSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(jntBdCpfOAReg+jntBdCpfSAReg+jntBdCpfRAReg+jntBdSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfdivCurTot").val(currencyFormat(jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfdivRegTot").val(currencyFormat(jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg)).attr("readonly","true");
				  
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfilpCurTot").val(currencyFormat(jntILPCpfOACur+jntILPCpfSACur+jntILPCpfRACur+jntILPSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfilpRegTot").val(currencyFormat(jntILPCpfOAReg+jntILPCpfSAReg+jntILPCpfRAReg+jntILPSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg)).attr("readonly","true");

				  
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfutsCurTot").val(currencyFormat(jntUTCpfOACur+jntUTCpfSACur+jntUTCpfRACur+jntUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfutsRegTot").val(currencyFormat(jntUTCpfOAReg+jntUTCpfSAReg+jntUTCpfRAReg+jntUTSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelftotCurTot").val(currencyFormat(jntOthCpfOACur+jntOthCpfSACur+jntOthCpfRACur+jntOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelftotRegTot").val(currencyFormat(jntOthCpfOAReg+jntOthCpfSAReg+jntOthCpfRAReg+jntOthSrsReg)).attr("readonly","true");
		 }
			  
			  /*SRS Summary*/
			  if($paymentMode == 'Cash' || $paymentMode == 'SRS'){  
				  
				  $("#divforSRSSummary").css("display","block");  
					 $srsjointdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummaryFamily]").clone());
					  
					 $("#INVSUM_NORECFOUND").css("display","none");
					 

					 
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  }); 

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCashCur+slfShSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCashReg+slfShSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(slfStckCashCur+slfStckSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(slfStckCashReg+slfStckSrsReg)).attr("readonly","true");

				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelftotCurTot").val(currencyFormat(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
				  
				  
				  
			  }
			  
		 } 
		}
	 });
  
 }
 
 applyEventHandlers();
	 return true;
}
  

$("#txtFldDlgInvInstitution").on("change",function(){ 
	invcloneportflio($("#txtFldDlgInvInstitution"),$("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"));
});   
$("#txtFldDlgAnalsByPortfolio").on("change",function(){
	addAvallisFin($(this),$("#txtFldDlgInvInstitution"));
	invcloneportflio($("#txtFldDlgInvInstitution"),$("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"));
});

function invcloneportflio(inselmid,porelmid,chgeid){ 
	chgeid.html("");
//	if(!isEmpty(chgeid.val())){
	chgeid.html('<option value="">--SELECT--</option>'); 
//	}
	//Portfolio
	if(porelmid.val() == "Y"){
		
		var apT1="<optgroup label='------Portfolio Category------'></optgroup>"; 
		chgeid.append(apT1);  
		$("#selhidPortfolio optgroup>option").each(function(i){   
			var portflio = $(this).val();  
			 if(!isEmpty(portflio)){
		  		 var clonevar=$(this).clone();  
		  		chgeid.find('optgroup[label="------Portfolio Category------"]').append(clonevar); 
			 } 
		});  
		if(chgeid.find(' optgroup[label="------Fund Name List------"]').length > 0){
			chgeid.find('optgroup[label="------Fund Name List------"]').remove(0);
		}
	}else{   
		
		if(chgeid.find('optgroup[label="------Portfolio Category------"]').length > 0){
			chgeid.find('optgroup[label="------Portfolio Category------"]').remove(0);
		}
		if(chgeid.find(' optgroup[label="------Fund Name List------"]').length > 0){
			chgeid.find('optgroup[label="------Fund Name List------"]').remove(0);
		}
		
		if(!isEmpty(inselmid.val())){ 
			var apT2="<optgroup label='------Fund Name List------'></optgroup>"; 
			var fdCode=inselmid;  
			chgeid.append(apT2);  
			$("#selhidFundName optgroup>option").each(function(i){   
				var fdnamesplit = $(this).val().split("^");  
			  	 if(!isEmpty($(this).val())){
			  		 var clonevar=$(this).clone(); 
			  		 if(fdnamesplit[0] == fdCode.val()){   
			  			clonevar.val(fdnamesplit[1]) 
			  			chgeid.find('optgroup[label="------Fund Name List------"]').append(clonevar);
			  		 }
			  	 } 
			});
		}
		
	}
	
	 return true;
}

/****************************Synronization with Investment To Retirement Planning **************************************************/
function syncInvestTblRow($tblInvRow){
	
//	var owner=$("#selDlgInvOwnership").val().toUpperCase(); 
	
	
	var invpkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
 	var invrefkey = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();
// 	var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
 	var ownership 	= $tblInvRow.find("td:eq(2)").find('select[name="selInvOwner"]').val().toUpperCase();//ownership 
 	
	var selfretage = $("#retSelfAge").val();
	var selfprojage = $("#retSelfProjage").val();
	 var basedon=$("#retAgeBasedon").val().toUpperCase();
	 var yrstoret=$("#retYrstoret").val();
	 
	 var spsretage = $("#retSpsAge").val();
	 var spsprojage = $("#retSpsProjage").val();
	 
	 var selfAge = $("#dfSelfAge").val();
	 var spsAge = $("#dfSpsAge").val();
	 var ageIncomeStart = 0,ageIncomeEnd=0;
	
 	var intretslfage= 0;
 	var totAge = 0;
 	
 
 	
	
	var fundmgr 	= $tblInvRow.find("td:eq(4)").find('select[name="txtFldInvAnnlPortfolio"]').find("option:selected").text(); 
	var fund 	= $tblInvRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]').find("option:selected").text(); 
	
	var estrate	=$tblInvRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val();  
	var amtinvested	=$tblInvRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val();//amount invested	 
	var paymentmtd	=$tblInvRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val();//Payment method	 
	var dateinvested =$tblInvRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val(); 
	 var currnav =$tblInvRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val(); 
	 
	var reinvest 	=$tblInvRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val(); 
	var reinvestbased 	=$tblInvRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val();
	var reinvestPAR 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val();
	var reinvestdivrate 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val();
	var reinvestdivfreq 	=$tblInvRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val();
	var reinvestdivamt 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val();
	
	var rspflag		=$tblInvRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val();
	var rspfreq		=$tblInvRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val();//regular frequency 
	var rspinvamt	=$tblInvRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val();//investment amount 29092021
	var rspyrs	=$tblInvRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val();//investment amount 
	
	var objofinv	=$tblInvRow.find("td:eq(9)").find('select[name="selInvObjective"]').val();//objective of investment 
	var yrofret		=$tblInvRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val();//year of retirement  
	yrofret = isEmpty(yrofret)?0:yrofret;
	var nameofchd	=$tblInvRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val();//name of child 
	var accumlation	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val(); 
	var perdofinv	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val(); 
	perdofinv = isEmpty(perdofinv) ? 0 : perdofinv;
	
	 var disimbursebase	=$tblInvRow.find("td:eq(10)").find('select[name="selBasDisburse"]').val();
	 var disimburseamt	=$tblInvRow.find("td:eq(10)").find('input[name="txtFldDisburseAmt"]').val();
	 var disimburseyr	=$tblInvRow.find("td:eq(10)").find('input[name="txtFldDisburseYrs"]').val();
	 
	 var savingdepositrate = $("#caSavingDeprate").val();
	

	 
		if(ownership == "SELF"){
	 		intretslfage= isEmpty(selfretage)? 0 :Number(selfretage); 
	 		totAge=isEmpty(selfprojage)? 0 :Number(selfprojage);
	 		
	 		ageIncomeStart = selfAge;		
	 		ageIncomeEnd =  Number(selfAge) + (isEmpty(perdofinv) ? Numbere(0) : Number(perdofinv));
	 		
	 	}else if(ownership == "SPOUSE"){
	 		intretslfage= isEmpty(spsretage)? 0 :Number(spsretage); 
	 		totAge=isEmpty(spsprojage)? 0 :Number(spsprojage);
	 		
	 		ageIncomeStart = spsAge;		
	 		ageIncomeEnd = Number(spsAge) + (isEmpty(perdofinv) ? Numbere(0) : Number(perdofinv));
	 		
	 	} 
//		|| (objofinv == "CPF-RP")
	 if((objofinv == "Retirement Planning" ) && !(ownership == "JOINT") && paymentmtd.toUpperCase() == "CASH"){
				
				var rowRefID = invrefkey ;//"INV_"+$tblInvRow.index();
				
				var rowexist = chkRPIncAssetRowExist(rowRefID);
				var rowexistDivi = chkRPIncAssetRowExist("DIVI"+rowRefID);
				
				var $tblRetRow = null;
				var $tblRetRowDivi = null;
						
				if(rowexist == null){
					getincassrtRows(null,"N");
					$tblRetRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
				}else{
					$tblRetRow = rowexist;
				}
				
				
//				for cash type investment, dividend row not requied
//				if(reinvest == "N" && rowexistDivi == null){					
//					getincassrtRows(null);
//					$tblRetRowDivi = $("#IncAssRetPlgtbl tbody tr:last"); 
//					$tblRetRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
//					$tblRetRowDivi =  chkRPIncAssetRowExist("DIVI"+rowRefID);
//					
//				}else if(reinvest == "N" && rowexistDivi != null){
//					$tblRetRowDivi = rowexistDivi;
//				}
			 
				//Reference ID  
				$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
				$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
				
				
				
				if(!isEmpty(invpkid)){//invpkid.indexOf("AS_") == 0
					if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
						$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
						$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
					}
					
//					if(reinvest == "N" ){
//						$tblRetRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
//						$tblRetRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
//					}		
						
				}
				
				//Amount Invested
				var accPrt=isEmpty(accumlation)? 0 :Number(accumlation)/100;
				var amountcal=isEmpty(amtinvested)? 0 :Number(amtinvested);
				
				var incomeamount = 0, disincomeamt= 0 ,rspincomeamt = 0;//,rspyrs=0
				var ageupto = Number(perdofinv);
				
				
//				if(reinvest == "N" && $tblRetRowDivi!= null){
//					 
////					if( paymentmtd == "CPFOA" ||  paymentmtd == "CPFMA" ||  paymentmtd == "CPFSA" ||  paymentmtd == "CPFRA"){
////						 $tblRetRowDivi.find("td:eq(2)").find('input:eq(0)').val("CPF-RP - Dividend");
////					}else{
//						
//							$tblRetRowDivi.find("td:eq(2)").find('input:eq(0)').val("Investment - Dividend");	
//						
//						
////					}
//					 
//						
//					 $tblRetRowDivi.find("td:eq(3)").find('input:eq(0)').val((isEmpty(fund))?"":fund);
//					 
//					 $tblRetRowDivi.find("td:eq(4)").find('select:eq(0)').val("REGULAR"); 
//					 
//					 var incomeamountdiv = 0;
//				 	
//					 var n=0,i=0,pv=0;
//						
//						if(isEmpty(objofinv)){
//							n = Number(perdofinv) + Number (yrstoret);
//				 		}else if (objofinv == "Retirement Planning" ||  objofinv == "CPF-RP" || objofinv == "Education Planning"){
////				 			||  objofinv == "CPF-RP" || objofinv == "Education Planning" - the above 2 condition never met because its parent loop having alredy filter
//							 n = Number(isEmpty(perdofinv) ? 0 : perdofinv)
//						}
//						
//						i = isEmpty(estrate)? 0 :Number(estrate)/100;
//						pv = Number(reinvestdivamt);			
//						
//						
//						incomeamountdiv  = FVCalculation(i, n,0, -1*(pv), 1);
//						incomeamountdiv = incomeamountdiv * accPrt;
//					 
//					 $tblRetRowDivi.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamountdiv)));
//					 
//					 
//					 var rate = isEmpty(estrate)? 0 :Number(estrate);
//					 $tblRetRowDivi.find("td:eq(6)").find('input:eq(0)').val(rate); 
//					 
//					 $tblRetRowDivi.find("td:eq(7)").find('input:eq(0)').val(); 
//					 
//					 $tblRetRowDivi.find("td:eq(8)").find('select:eq(0)').val(isEmpty(ownership)? basedon :ownership);//Need to check 
//					 
//					 
//					 $tblRetRowDivi.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
//					 
//					 var eage = isEmpty(perdofinv) ? 0 : perdofinv;		 
//					 $tblRetRowDivi.find("td:eq(10)").find('input:eq(0)').val( Number(intretslfage) + Number(eage) );//Age Ends
//					 
//					 
//				 }
				
				/*if(reinvest == "Y" ){
					
					var n=0,i=0,pv=0;
					
					if(isEmpty(objofinv)){
						n = Number(perdofinv) + Number (yrstoret);
			 		}else if (objofinv == "Retirement Planning" || objofinv == "Education Planning"){
						 n = Number(perdofinv);
					}
					
					i = isEmpty(estrate)? 0 :Number(estrate)/100;
					pv = Number(currnav);	
					
					
					incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
		 			incomeamount = incomeamount * accPrt;
		 			
		 			$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("SINGLE");
		 			//pro living age
		 			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val("").prop("disabled",true);//Age Ends
					
				}else if(reinvest == "N"){
					
					var n=0,i=0,pv=0;
					
					if(isEmpty(objofinv)){
						n = Number(perdofinv) + Number (yrstoret);
			 		}else if (objofinv == "Retirement Planning" || objofinv == "Education Planning"){
						 n = Number(perdofinv);
					}
					
					i = isEmpty(estrate)? 0 :Number(estrate)/100;
					pv = Number(currnav);			
					
//					console.log(i+","+ n+","+pv);
					
					incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
		 			incomeamount = incomeamount * accPrt;
		 			
		 			$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("REGULAR");
		 			//pro living age
		 			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage) + Number(ageupto) );//Age Ends
					
					
				}*/
			 	
			 	
			 	
			 	if(rspflag == "Y"){
			 		
			 		console.log("if block rspflag--->",rspflag)
			 		var rsp_freq = getFrequencyDigit(rspfreq);
					 
			 		 console.log("rspinvamt--->",rspinvamt)
					 console.log("rsp_freq--->",rsp_freq)
					 
					 rspyrs = isEmpty(rspyrs)?0:rspyrs;
					 var i = isEmpty(estrate)? 0 :Number(estrate)/100;	
					 var n = rspyrs;
					 var pv = -1 * currnav;
					 var pmt = -1 * Number(rspinvamt) * rsp_freq;			 
					 
					 console.log("rspyrs--->",rspyrs)
					 console.log("i--->",i)
					 console.log("n--->",n)
					 console.log("pv-->",pv)
					  console.log("pmt-->",pmt)
					  
					 var rspfv = FVCalculation(i, n,pmt, pv,  1);
					
					 
					 i = isEmpty(estrate)? 0 :Number(estrate)/100;	
					 perdofinv = isEmpty(perdofinv)?0:perdofinv;
					 n = perdofinv - rspyrs;					 
					 
					 console.log("rspfv--->",rspfv)
					 console.log("i--->",i)
					 console.log("perdofinv--->",perdofinv)
				     console.log("perdofinv--->",perdofinv)
					 console.log("n--->",n)
					 
					 incomeamount = FVCalculation(i, n,0, -1 * rspfv,  1);
					 
					  console.log("incomeamount--->",incomeamount)
					 /*perdofinv = isEmpty(perdofinv)?0:perdofinv;
					 
					 
						var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
			 			var n = rspyrs < perdofinv ? rspyrs : perdofinv; // addyearsToDate(dateinvested, yrofret);
			 			var pmt = Number(rspinvamt);
//			 			var pv = currnav;
					 
					 var pvannlincome = FVCalculation(i, n,pmt, 0,  1);
					 pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);
					 
					rspincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
//					dec 2019
					*/
			 	}
			 	
//			 	console.log(incomeamount +","+rspincomeamt +","+disincomeamt);
//			 	if( paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA"){
//			 	if( paymentmtd != "CPFOA" ||  paymentmtd != "CPFMA" ||  paymentmtd != "CPFSA" ||  paymentmtd != "CPFRA"){
//			 		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("CPF-RP Investment");//Classification	
//			 	}else{
	
				if(fund != '--SELECT--'){
					console.log("fund----------->"+fund);
					$tblRetRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val(fund);//Classification	
				}else{
					$tblRetRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val('-');//Classification
				}
			 	
				$tblRetRow.find("td:eq(3)").find('select[name=txtFldIncAssClsfy]').val("Investment");//Classification
//			 	}
				//$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(fund);	
			//	$tblRetRow.find("td:eq(2)").find('input[name=txtFldIncAssDesc]').val(fund);	
				selectNullvalChkBySelectName($tblRetRow.find("td:eq(4)").find('select[name=selIncAssFreq]'),"SINGLE");
				
				if(rspflag != "Y"){
					
					var i = isEmpty(estrate)? 0 :Number(estrate)/100;
					var n = perdofinv; 			
					var pv = Number(currnav);
					
					var yrofretTmp = yrofret;
					
					if(Number(yrofretTmp)> Number(perdofinv)){
						n = perdofinv;
						incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
						
//						for remaining years
						incomeamount =  FVCalculation(i, (yrofretTmp - n), 0, (-1*incomeamount), 1);
					}else{
						incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);						
					} 						
				}
				
				
				incomeamount = ( Number(incomeamount) ) * accPrt;
				
				console.log("incomeamount-------->"+incomeamount)
				
				$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); //Age Inc starts

	            $tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)  );
				console.log("disimbursebase------>"+disimbursebase)
				
				if(!isEmpty(disimbursebase)){
//			 		incomeamount = amountcal * accPrt;
//			 	}else{
			 		
			 		$tblRetRow.find("td:eq(3)").find('input[name=txtFldIncAsstSubClsfy]').val("DISIMBURSEMENT");
			 		if(disimbursebase == "Years"){
			 			
			 			var n = Number(disimburseyr);
			 			var i = isEmpty(savingdepositrate)? 0 :Number(savingdepositrate)/100;
			 			var pv = Number(incomeamount);
			 			
			 			console.log(n,i,pv);
			 			disincomeamt  = PMTCalculation(i, n, -1*(pv),0, 1);
//			 			disincomeamt = disincomeamt * accPrt;
			 			console.log(disincomeamt);
//			 			intretslfage
			 			
			 			
			 			incomeamount=disincomeamt;
			 			
			 			ageupto= Number(disimburseyr) + (isEmpty(intretslfage) ? Number("0") : Number(intretslfage));
			 			
			 			//Retirement self age
					
						$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); //Age Inc starts
		 
						$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val((isEmpty(ageupto)) ? Number("0") : Number(ageupto)  );

//						$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); //Age Inc starts
				 
	//					$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(ageupto)) ? Number("0") : Number(ageupto)  );
			 			
			 		}else{
			 			
			 			var i = isEmpty(savingdepositrate)? 0 :Number(savingdepositrate)/100;	
			 			 
//			 			var nextdate = addyearsToDate(dateinvested, yrofret); 				
//			 			var n = getYears(dateinvested, nextdate);
			 			var pmt = Number(disimburseamt);
			 			var pv = Number(incomeamount);
					
					console.log(i,pmt,pv);
			 			
			 			var nper = NPERCalculation(i, pmt, -1 * pv, 0, 1);
//			 			 var pvannlincome = FVCalculation(i, n,pmt, (pv),  1);
//			 			 pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);
//			 			 
//			 			disincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
//			 			disincomeamt = disincomeamt * accPrt;
			 			console.log(nper)
			 			
			 			ageupto= (isEmpty(intretslfage)) ? Number("0") : Number(intretslfage) + (isEmpty(nper) ? Number("0") : Number(Math.round(nper)));
			 			console.log(ageupto)
			 			
					console.log(disimburseamt);
					
			 			//Retirement self age
		//				$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); //Age Inc starts
				 
			//			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(ageupto)) ? Number("0") : Number(ageupto)  );
						
						$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); //Age Inc starts
		 
						$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val((isEmpty(ageupto)) ? Number("0") : Number(ageupto)  );

						
						incomeamount=disimburseamt;
			 			
			 		}
			 		
//			 		$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("REGULAR");
//			 		$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage) + Number(ageupto) );//Age Ends
			 		
			 		
			 	//	selectNullvalChk($tblRetRow.find("td:eq(4)"),"REGULAR");
			 		selectNullvalChkBySelectName($tblRetRow.find("td:eq(4)").find('select[name=selIncAssFreq]'),"REGULAR");
					
			 	}
				
				
			 	$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val(Math.round(incomeamount));
			 	
			 	if(!isEmpty(disimbursebase)){
//			 		incomeamount = ( Number(disincomeamt) + Number(rspincomeamt) ) * accPrt;
//			 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(incomeamount));
			 	}
			 	
				//escalation rate
				$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val(estrate);  
			
				//roi
				$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val();  
				//selectNullvalChk($tblRetRow.find("td:eq(8)"),isEmpty(ownership)? basedon :ownership);
				selectNullvalChkBySelectName($tblRetRow.find("td:eq(5)").find('select[name=selIncAssAgeBsOn]'),isEmpty(ownership)? basedon :ownership);

				var Freq=$tblRetRow.find("td:eq(4)").find('select[name=selIncAssFreq]').val();
				var amtInc=$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssAmtofInc]').val();
				var eslRate=$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssEslrate]').val();
				var esclRate=(isEmpty(eslRate)) ? Number("0") : Number(eslRate);
				var roi=$tblRetRow.find("td:eq(4)").find('input[name=txtFldIncAssRoi]').val();
				$tblRetRow.find("td:eq(4)").find('span').html("$" + amtInc + " " + Freq + '<br>' + esclRate + "% Escalation" +'<br>'+ '-' ); //Proposed
				
				 var agestarts=$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePaySts]').val();

					var ageends=$tblRetRow.find("td:eq(5)").find('input[name=txtFldIncAssAgePayends]').val(); 
					
					if(Freq == 'SINGLE'){
						$tblRetRow.find("td:eq(5)").find('span').html("Start @ " + agestarts + '<br>'); //Proposed
					}else if(Freq == 'REGULAR'){
						$tblRetRow.find("td:eq(5)").find('span').html("Start @ " + agestarts + '<br>' + "End @ " + ageends); //Proposed
					}
		  
				applyToastrAlert("Investment data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen");
			
				
			
	 }else{
		 
		 
		 $('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
				
				var invrefid = $(this).val();
				
				$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		   
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
						
		     		 
		     	   }
		        });
				
				
				/*$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
		     	   }
		        });
				
				$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(invrefid == $(this).val()){
			     		  $(this).closest("tr").hide();
			     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
			     	   }
			        });*/
				
				
			});
			
	 }
	return true;
}

/****************************End of Synronization with Investment To Retirement Planning **************************************************/



/**************************** Total Calculated Value from Investment To Expected Inflow Outflow(Investment/divident) ***********************/
function calcTotalInvestAmts(){  
	
	 var sumslfcash=0,sumspscash=0,sumfamcash=0;
	 var $fnaInvestmentTbl = fnaInvestmentTbl.rows().count();
var ownership = "" , mode = "";
 
	 if($fnaInvestmentTbl >0){
		 
		 $("#fnaInvestmentTbl tbody tr").each(function(i,row){
			 
			 ownership=$(this).find("td:eq(2)").find('select:eq(0)').val();			 
			 mode=$(this).find("td:eq(0)").find('input:eq(0)').val(); 
			 
			 var CurNavAmt	=Number($(this).find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val()); //Current NAV 
			 var annlDivd=Number($(this).find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val())/100; //Annual Dividend
			 var dividPaymode=$(this).find("td:eq(7)").find('select[name="selInvDividPaymode"]').val();//Dividend payment mode
			 var reinvest=$(this).find("td:eq(7)").find('select[name="selInvDividendReInv"]').val();//re-investment
			 var divdBasedOn=$(this).find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val();//divident based on 
			 var dividendAmt=Number($(this).find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val()); //divident amount 
			 var paymtd=$(this).find("td:eq(5)").find('select[name="selInvPaymethod"]').val(); //Payment method 
			 var TopUpAmt=getFrequencyDigit(divdBasedOn); 
			
			 if(reinvest == "N" && paymtd=="Cash" && mode != "D"){
			 
			 
			 var amount = 0;
			 
			 /*if(divdBasedOn == "PAR"){
				 amount= dividendAmt;
			 }else{
				 amount= dividendAmt;//CurNavAmt * annlDivd * TopUpAmt;
			 }*/
			 
			 amount= dividendAmt;
			 
			 if(!isEmpty(amount)){if(ownership =="Self"){sumslfcash +=Number(amount);}}
			 if(!isEmpty(amount)){if(ownership =="Spouse"){sumspscash +=Number(amount);}}
			 if(!isEmpty(amount)){if(ownership =="Joint"){sumfamcash +=Number(amount);}}
		
			 }
			 
		 });
	 }

		$("#incsrcSelfNempDivdamt").val(roundNumber(sumslfcash));
		
		$("#incsrcSpsNempDivdamt").val(roundNumber(sumspscash)); 
		
		$("#incsrcJointNempDivdamt").val(roundNumber(sumfamcash));
		
		applyToastrAlert("Investment Income,dividends, gains is calculated and updated in Cash Flow Statement");
		

	 
	 

	 
	
	 calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);
	 calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);
	 calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);
	 
	 return true;
}

function newRowInvestCpfTbl($tblInvRow){
	
	
	var tempPayMeth = $tblInvRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val().toUpperCase(); 
	var rowRefID = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();//"INV_"+$tblInvRow.index();
	
	if( isCPFRelated(tempPayMeth) ){//tempPayMeth == "CPFOA" || tempPayMeth  == "CPFSA" || 	tempPayMeth  == "CPFMA" || tempPayMeth  == "CPFRA"
		
		var reinvest 	= $tblInvRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val(); 
		$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		
		
		deleteAllSRSByRefId(rowRefID);
		deleteAllSRSByRefId("DIVI"+rowRefID);
		
		var rowexist = chkCPFRowExist(rowRefID);
		var rowexistDivi = chkCPFRowExist("DIVI"+rowRefID);
		
		var $tblCpfRow = null;
		var $tblCpfRowDivi = null;
				
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last");
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			$tblCpfRow =  chkCPFRowExist(rowRefID);//$("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		
		if(reinvest == "N" && rowexistDivi == null){
			//getCADRows(null);
			$tblCpfRowDivi = $("#cpfAccAddDedTable tbody tr:last"); 
			$tblCpfRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
			$tblCpfRowDivi =  chkCPFRowExist("DIVI"+rowRefID);//$("#cpfAccAddDedTable tbody tr:last"); 
		}else if(reinvest == "N" && rowexistDivi != null){
			$tblCpfRowDivi = rowexistDivi;
		}

		
		var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
		if(!isEmpty(pkid)){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
			
			if(reinvest == "N" && isEmpty($tblCpfRowDivi.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		

		var ownership 	= $tblInvRow.find("td:eq(2)").find('select[name="selInvOwner"]').val();//ownership 
		
		var fmobj =$tblInvRow.find("td:eq(4)").find('select[name="txtFldInvInstname"]'); 
		var fundobj =$tblInvRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]');	 
		var fundmanager = fmobj.find("option:selected").text();
		var fund = fundobj.find("option:selected").text();
		
		
		var estrate	=$tblInvRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val();	 
		var amtinvested	=$tblInvRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val();//amount invested	
		var paymentmtd	=$tblInvRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val();//Payment method	
		var dateinvested =$tblInvRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val();
		 var currnav =$tblInvRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val();
		
		
		var reinvestbased 	=$tblInvRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val(); 
		var reinvestPAR 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val(); 
		var reinvestdivrate 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val();
		var reinvestdivfreq 	=$tblInvRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val();
		var reinvestdivamt 	=$tblInvRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val();
		
		var rspflag		=$tblInvRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val();
		var rspfreq		=$tblInvRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val();//regular frequency 
		var rspinvamt	=$tblInvRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val();//investment amount 
		var rspyrs	=$tblInvRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val();//investment amount 
		
		var objofinv	=$tblInvRow.find("td:eq(9)").find('select[name="selInvObjective"]').val();//objective of investment 
		var yrofret		=$tblInvRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val();//year of retirement 
		var nameofchd	=$tblInvRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val();//name of child 
		var accumlation	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val(); 
		var perdofinv	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val(); 
		
		var selfAge = $("#dfSelfAge").val();
		var description="Investment";
//		if(reinvest == "N"){
		if(!isEmpty(paymentmtd)){ 
			
				if ( isCPFRelated ( paymentmtd )){//== "CPFOA" || paymentmtd == "CPFSA" || paymentmtd == "CPFMA" || paymentmtd == "CPFRA"
					  
					var cprarr = getCPFAccDets(paymentmtd);
					var cpfacc=cprarr[0],ccid=cprarr[1];
				 
			 
				 
				 
				 if(ownership == "Self"){
					/* $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");//Name of account*/
					 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(1)').prop("selected","selected");//Name of account
				 }else  if(ownership == "Spouse"){
					 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(2)').prop("selected","selected");
				 }else{
					 $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"]').find('option:eq(0)').prop("selected","selected");
				 } 
				 
				/* $tblCpfRow.find("td:eq(3)").find('select:eq(0)').val(ownership); //Applicant Type*/
 				$tblCpfRow.find("td:eq(2)").find('select[name="selCdApplicantType"]').val(ownership); //Applicant Type	
			
			   $tblCpfRow.find("td:eq(2)").find('input[name="txtFldCADDescription"]').val(description);//description 
				var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + description + '</span>';
		        var applicant= $tblCpfRow.find("td:eq(2)").find('select[name="txtFldCADApplicant"] option:selected').text();
		        $tblCpfRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription  +'<br>' + applicant + '<br>'  +  ownership); //Proposed

				/* $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccid);//Type of CPF Account */
				 $tblCpfRow.find("td:eq(4)").find('input[name="txtCADCpfAcctype"]').val(ccid);//Type of CPF Account 
				/* $tblCpfRow.find("td:eq(6)").find('select:eq(0)').val(ccid);*/
				  $tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"]').val(ccid);
	
					 
				 if(reinvest == "N"){
					 
					 if(ownership == "Self"){
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");//Name of account
					 }else  if(ownership == "Spouse"){
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
					 }else{
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
					 } 
					 
					 $tblCpfRowDivi.find("td:eq(3)").find('select:eq(0)').val(ownership); //Applicant Type
	
					 $tblCpfRowDivi.find("td:eq(6)").find('input:eq(0)').val(ccid);//Type of CPF Account 
					 $tblCpfRowDivi.find("td:eq(6)").find('select:eq(0)').val(ccid);
					 
	//				 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(0)').val(dateinvested);//Period From
	//				 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(1)').val(selfAge);
					 
				 }
				 
				 var incomeamount = 0,rspincomeamt = 0;
				 var enddate = "";
				 var typeofdesc = "";
				 var typeoftrans="Addition";
				 var remaininginvyrs = 0;
				
				 
				 if(objofinv == "Retirement Planning" ||objofinv == "CPF-RP" || objofinv == "No plans"){
					 					 
					 if(reinvest == "N"){
						 
							var n = Number(perdofinv);
					 		var i = isEmpty(estrate)? 0 :Number(estrate)/100;
					 		var pv = Number(reinvestdivamt);
								
//							incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
					 		incomeamount = pv;
							
							typeofdesc = "Investment - Dividends";
														
							$tblCpfRowDivi.find("td:eq(5)").find('select:eq(0)').val(typeoftrans); //Types of Transaction
							$tblCpfRowDivi.find("td:eq(4)").find('select:eq(0)').val(typeofdesc); //Description of Investment
							 
							 
							var endage="";
							 if(!isEmpty(perdofinv)){
								 enddate = addyearsToDate(dateinvested, perdofinv);
								 endage = Number(selfAge)+Number(perdofinv);
							 }
							 
							 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(0)').val(dateinvested);//Period From
							 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(1)').val(selfAge);
							 
							 $tblCpfRowDivi.find("td:eq(8)").find('input:eq(0)').val(enddate);//Period To		 
							 $tblCpfRowDivi.find("td:eq(8)").find('input:eq(1)').val(endage);//Period To
							 
							 $tblCpfRowDivi.find("td:eq(9)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
							 
							 $tblCpfRowDivi.find("td:eq(10)").find('select:eq(0)').val(1); //Frequency of Transaction
							 
							 $tblCpfRowDivi.find("td:eq(11)").find('select:eq(0)').val(""); //Amt to be transferred
							 
					}
						 
					 
					 if(rspflag == "Y"){
						 
						 
						 var rsp_freq = getFrequencyDigit(rspfreq);
						 
						 rspyrs = isEmpty(rspyrs)?0:rspyrs;
						 perdofinv = isEmpty(perdofinv)?0:perdofinv;
						 remaininginvyrs =  perdofinv - rspyrs ;//rspyrs < perdofinv ? perdofinv - rspyrs : perdofinv;
						 
							var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
				 			var n = rspyrs; // addyearsToDate(dateinvested, yrofret); 			
				 			var pmt = -1 * Number(rspinvamt) * Number(rsp_freq);
				 			var pv = -1 * Number(currnav);
						 
	//			 			var pvannlincome = FVCalculation(i, n,(pmt), 0, 1);
	//			 			pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);	 			 
	//			 			rspincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
				 			
				 			rspincomeamt = FVCalculation(i, n, pmt,  pv,  1);
				 			 
				 			if(remaininginvyrs >0 ){
				 				rspincomeamt =  FVCalculation(i, remaininginvyrs, 0, (-1*rspincomeamt), 1);
				 			}
				 			
				 			incomeamount = rspincomeamt;
				 			
//				 			i = isEmpty(estrate)? 0 :Number(estrate)/100;	
//							 perdofinv = remaininginvyrs;//isEmpty(perdofinv)?0:perdofinv;
//							 n = perdofinv - rspyrs;
//							 
//							 
//							 incomeamount = FVCalculation(i, n,0, -1 * rspincomeamt,  1);
							 
//				 			incomeamount = Number(incomeamount) + Number(rspincomeamt);
						 
					 }
					 
					 
					 if(rspflag != "Y"){
						 
						 	var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
				 			var n = perdofinv; // addyearsToDate(dateinvested, yrofret); 			
				 			var pv = Number(currnav);
				 			incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
				 			
//				 			console.log("current NAV for "+n+", FV="+incomeamount);
						 
					 }
					 
					 
					 typeofdesc = "Investment";
					 
					/* $tblCpfRow.find("td:eq(5)").find('select:eq(0)').val(typeoftrans); //Types of Transaction */
					 $tblCpfRow.find("td:eq(4)").find('select[name="selCADTypesOfTrans"]').val(typeoftrans); //Types of Transaction 
					 $tblCpfRow.find("td:eq(3)").find('select[name="selCADType"]').val(typeofdesc); //Description of Investment 
					  var acctype= $tblCpfRow.find("td:eq(4)").find('select[name="selCADCpfAcctype"] option:selected').text();
					  var addboldtagselCADCpfAcctype = '<span style="font-weight: bold;">' + acctype + '</span>';
					  $tblCpfRow.find("td:eq(4)").find('span').html( addboldtagselCADCpfAcctype +'<br>' + typeoftrans ); //Proposed
			
					var endage="";
					 if(!isEmpty(perdofinv)){
						 enddate = addyearsToDate(dateinvested, perdofinv);
						 endage = Number(selfAge)+Number(perdofinv);
					 }
					 
					 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerFrom"]').val(enddate);//Period From 
					 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeFrom"]').val(endage); 
					 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADPerTo"]').val(enddate);//Period To		 
					 $tblCpfRow.find("td:eq(5)").find('input[name="txtFldCADAgeTo"]').val(endage);//Period To 
					 $tblCpfRow.find("td:eq(5)").find('span').html("Start @ "+endage  +'<br>' +"End @ "+  endage); //Proposed
			
					 $tblCpfRow.find("td:eq(6)").find('input[name="txtFldCADAmt"]').val(Math.round(Number(incomeamount)));//Amount
					 
					 $tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"]').val(-1); //Frequency of Transaction 
					 
					 $tblCpfRow.find("td:eq(6)").find('select[name="selCADRetrAccAge"]').val(""); //Amt to be transferred 
					var freqTransaction=$tblCpfRow.find("td:eq(6)").find('select[name="selCADPayTerm"] option:selected').text(); 
				    var addboldtagselCADAmt = '<span style="font-weight: bold;">'+"$ " + Math.round(Number(incomeamount)) +' '+ freqTransaction+ '</span>';
					var incRate=0; 
					$tblCpfRow.find("td:eq(6)").find('span').html(addboldtagselCADAmt  +'<br>' + incRate+"% increment"); //Proposed
			
//					 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
					
					 applyToastrAlert("Investment data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen !");
					 mandatoryFldForCpf($tblCpfRow,$tblInvRow,'INVEST'); 
				 }
			}  
		}
	}else{
		
		
		 $('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
				
				var invrefid = $(this).val();
				
				/*$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		   
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
						
		     		 
		     	   }
		        });*/
				
				deleteAllCPFByRefId(invrefid);
				
				/*$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
		     	   }
		        });*/
				
				/*$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(invrefid == $(this).val()){
			     		  $(this).closest("tr").hide();
			     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
			     	   }
			        });*/
				
				
			});
		
	}
  
	
	 
	return true;
}


function newRowInvestSRSTbl($tblInvRow){ 
	
//	var $tblInvRow=$("#fnaInvestmentTbl tbody tr:last");  ????????
	var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
	var rowRefID = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();//"INV_"+$tblInvRow.index();
	
	var ownership 	=$tblInvRow.find("td:eq(2)").find('select[name="selInvOwner"]').val();//ownership 
	
	var description	=$tblInvRow.find("td:eq(4)").find('select[name="txtFldInvDesc"]').val();//description 
	var estrate		=$tblInvRow.find("td:eq(4)").find('input[name="txtFldInvEstrate"]').val();//escalation rate 
		 
	var amtinvested	 =$tblInvRow.find("td:eq(5)").find('input[name="txtFldInvAmount"]').val();//amount invested	
	var paymentmtd	 =$tblInvRow.find("td:eq(5)").find('select[name="selInvPaymethod"]').val();//Payment method	
	var dateinvested =$tblInvRow.find("td:eq(6)").find('input[name="txtFldInvDate"]').val();//date invested 
	var currnav 	 =$tblInvRow.find("td:eq(6)").find('input[name="txtFldinvCurrNAV"]').val();//current NAV  
	
	var reinvest 		 =$tblInvRow.find("td:eq(7)").find('select[name="selInvDividendReInv"]').val(); 
	var reinvestbased 	 =$tblInvRow.find("td:eq(7)").find('select[name="selInvDividendBasdOn"]').val(); 
	var reinvestPAR 	 =$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvDivPARAmt"]').val();  
	var reinvestdivrate  =$tblInvRow.find("td:eq(7)").find('input[name="txtFldInvAnnlDivid"]').val(); 
	var reinvestdivfreq  =$tblInvRow.find("td:eq(7)").find('select[name="selInvDividPaymode"]').val(); 
	var reinvestdivamt 	 =$tblInvRow.find("td:eq(7)").find('input[name="txtFldDividendAmt"]').val(); 
	
	var rspflag		=$tblInvRow.find("td:eq(8)").find('select[name="txtFldInvAnyRegPlan"]').val();  
	var rspfreq		=$tblInvRow.find("td:eq(8)").find('select[name="selInvRegPlanFreq"]').val();//regular frequency 
	var rspinvamt	=$tblInvRow.find("td:eq(8)").find('input[name="txtInvRegPlanAmout"]').val();//investment amount 
	var rspyrs		=$tblInvRow.find("td:eq(8)").find('input[name="txtFldInvRegPlanFromYrs"]').val();//investment yrs 
	
	var objofinv	=$tblInvRow.find("td:eq(9)").find('select[name="selInvObjective"]').val();//objective of investment  
	var yrofret		=$tblInvRow.find("td:eq(9)").find('input[name="selInvYrsToRet"]').val();//year of retirement  
	var nameofchd	=$tblInvRow.find("td:eq(9)").find('select[name="txtFldInvChildname"]').val();//name of child 
	var accumlation	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldInvAccPrcnt"]').val(); 
	var perdofinv	=$tblInvRow.find("td:eq(9)").find('input[name="txtFldDivPeriod"]').val(); 
	
 
	$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
	
	 
	if(!isEmpty(paymentmtd)){ 
		
		if(paymentmtd == "SRS"){
			
			deleteAllCPFByRefId(rowRefID);
			deleteAllCPFByRefId("DIVI"+rowRefID);
			
			 if(reinvest == "N"){
				 
//				 var rowRefID = "INV_"+$tblInvRow.index()+"NOT_RI"; //NOT_RI = Not Reinvested
					
					var rowexistDivi = chkSRSRowExist("DIVI"+rowRefID);
					var $tblSrsRowDivi = null;
							
					if(rowexistDivi == null){
						//getcshSRSRows(null);
						$tblSrsRowDivi =  $("#srsTable tbody tr:last"); 
					}else{
						$tblSrsRowDivi = rowexistDivi;
					}

//					$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
				 
//				var n = Number(perdofinv);
//		 		var i = isEmpty(estrate)? 0 :Number(estrate)/100;
//		 		var pv = Number(currnav);
					
//				$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);				
				incomeamount  =  reinvestdivamt;// FVCalculation(i, n,0, -1*(pv), 1); 
				
				typeofdesc = "Investment - Dividends";
				
				if(pkid.indexOf("AS_") == 0){
					if(isEmpty($tblSrsRowDivi.find("td:eq(0)").find('input:eq(1)').val())){
						$tblSrsRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
					}
				}	
				
				$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
				
				$tblSrsRowDivi.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
				 
				$tblSrsRowDivi.find("td:eq(3)").find('input:eq(0)').val(typeofdesc + (isEmpty(description)? "" : "["+description+"]")); //Description of Investment
				 
				$tblSrsRowDivi.find("td:eq(4)").find('select:eq(0)').val("ANNUAL"); 
				 
				$tblSrsRowDivi.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
				 
				$tblSrsRowDivi.find("td:eq(6)").find('input:eq(0)').val(dateinvested);//Period From
				 			
				 if(!isEmpty(perdofinv)){
					 enddate = addyearsToDate(dateinvested, perdofinv); 
				 }	 
				 
				 $tblSrsRowDivi.find("td:eq(7)").find('input:eq(0)').val(enddate);//Period To	
				
		}
			
			var rowexist = chkSRSRowExist(rowRefID);
			var $tblSrsRow = null;
					
			if(rowexist == null){
				getcshSRSRows(null);
				$tblSrsRow =  $("#srsTable tbody tr:last"); 
			}else{
				
				$tblSrsRow = rowexist;
			}
			 
			$tblSrsRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			
			
			if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblSrsRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblSrsRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
			}	
		 
		 var incomeamount = 0,rspincomeamt = 0;
		 var enddate = "";
		 var typeofdesc = "Investment";
		 var remaininginvyrs=0;
		 
		 
		 if(rspflag == "Y"){
			 
			 var rsp_freq = getFrequencyDigit(rspfreq);			 
			 rspyrs = isEmpty(rspyrs)?0:rspyrs;
			 perdofinv = isEmpty(perdofinv)?0:perdofinv;
			 remaininginvyrs =  perdofinv - rspyrs ;//rspyrs < perdofinv ? perdofinv - rspyrs : perdofinv;
			 
				var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
	 			var n = rspyrs; // addyearsToDate(dateinvested, yrofret); 			
	 			var pmt = -1 * Number(rspinvamt) * rsp_freq;
	 			var pv = -1 * Number(currnav);
	 			
	 			rspincomeamt = FVCalculation(i, n, pmt,  pv,  1);
	 			
//	 			console.log("for rspp yrs "+n+", FV="+rspincomeamt);
	 			if(remaininginvyrs >0 ){
	 				rspincomeamt =  FVCalculation(i, remaininginvyrs, 0, (-1*rspincomeamt), 1);
	 				incomeamount  = rspincomeamt;
	 			}else{
	 				
	 				i = isEmpty(estrate)? 0 :Number(estrate)/100;	
					 perdofinv = isEmpty(perdofinv)?0:perdofinv;
					 n = perdofinv - rspyrs;
					 
					 
					 incomeamount = FVCalculation(i, n,0, -1 * rspincomeamt,  1);
	 			}
		 }
		 
		 
		 if(rspflag != "Y"){
			 
			 var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
			 var n = perdofinv; 	
			 var pv = Number(currnav);
			 incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
			 typeofdesc = "Investment";
			 
		 }
		 
		// $tblSrsRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
	    $tblSrsRow.find("td:eq(5)").find('input[name="txtFldSrsAmount"]').val(Math.round(Number(incomeamount)));//Amount 	 
	
		// $tblSrsRow.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
		$tblSrsRow.find("td:eq(3)").find('select[name="selSrsClassify"]').val("Annual Addition"); //Classification 
	    $tblSrsRow.find("td:eq(3)").find('select[name="selSrsTypeTrans"]').val("Addition");  
	   
		// $tblSrsRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 
		 $tblSrsRow.find("td:eq(5)").find('select[name="selSrsFreq"]').val("SINGLE");
	    var addboldtagtxtFldAmt = '<span style="font-weight: bold;">'+"$"+ ( Math.round(Number(incomeamount))) +" "+"SINGLE"+ '</span>';	
		 $tblSrsRow.find("td:eq(5)").find('span').html(addboldtagtxtFldAmt); //Proposed
		
		
		
		 if(!isEmpty(perdofinv)){
			// enddate =  dateinvested;//addyearsToDate(dateinvested, 0); 
			 enddate = addyearsToDate(dateinvested, perdofinv); 
		 }	 
		//var endyear=getdobtoage(enddate, true);
		 var endyear=getdobLife(enddate, true); 
		 //$tblSrsRow.find("td:eq(6)").find('input:eq(0)').val(enddate);//Period From
		$tblSrsRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFrom"]').val(enddate);//Period From	 
		$tblSrsRow.find("td:eq(4)").find('input[name="txtFldSrsPerdFromDate"]').val(endyear);//Period From	 
		
		// $tblSrsRow.find("td:eq(7)").find('input:eq(0)').val(enddate);//Period To	
		$tblSrsRow.find("td:eq(4)").find('input[name="txtFldSrsPerdTo"]').val(enddate);//Period To	
		$tblSrsRow.find("td:eq(4)").find('input[name="txtFldSrsPerdToDate"]').val(endyear);//Period To	 
		
		 var addboldtagtxtFldSRSAgeFrom = '<span style="font-weight: bold;">'+"Start @ "+ endyear +'</span>';
		 var addboldtagtxtFldSRSAgeTo = '<span style="font-weight: bold;">'+"End @ "+ endyear +'</span>';
        $tblSrsRow.find("td:eq(4)").find('span').html(addboldtagtxtFldSRSAgeFrom+'<br>' +addboldtagtxtFldSRSAgeTo); //Proposed

		// $tblSrsRow.find("td:eq(3)").find('input:eq(0)').val(typeofdesc + (isEmpty(description)? "" : "["+description+"]")); //Description of Investment	   
		 $tblSrsRow.find("td:eq(2)").find('input[name="txtFldSrsDesc"]').val(typeofdesc + (isEmpty(description)? "" : "["+description+"]")); //Description of Investment
 		var addboldtagtxtFldCADDescription = '<span style="font-weight: bold;">' + typeofdesc + (isEmpty(description)? "" : "["+description+"]") + '</span>';	    
 		$tblSrsRow.find("td:eq(2)").find('span').html(addboldtagtxtFldCADDescription); //Proposed

		 applyToastrAlert("Investment data will be reflected to SRS Screen !");
		 
		 mandatoryFldForSRS($tblSrsRow,$tblInvRow,'INVEST'); 
		  
	}  
 } 
	 
	return true;
}
/**************************** Clear Current NAV on Focus and Onchange Description of Investment***********************/
var invclearnavprev,invclearnavid;
$("#txtFldDlgInvDesc,#txtFldDlgInvDateInvst,#txtFldDlgInvInstitution").on("focus",function(){ 
	invclearnavid=$(this).attr("id");
	invclearnavprev=$(this).val();
}).change(function(){
	clearCurrentBidPriceAlert($(this),invclearnavid,invclearnavprev,$("#txtFldDlgInvCurBid"),null);
});


function clearCurrentBidPriceAlert(elmid,invclearnavid,invclearnavprev,curbidprcid,row){
	if(!isEmpty(elmid.val())){ 
		if(!isEmpty(curbidprcid.val())){
			$("#confirmationalertmsgdiv #confalertimg").html(""); 
			$("#confirmationalertmsgdiv #confalertmsg").html("Do you want to clear Current Bid Price");
			$('#confirmationalertmsgdiv').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
						curbidprcid.val("");   
						currentNavcalc(row);
						$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
						$("#"+invclearnavid).val(invclearnavprev);
					  	currentNavcalc(row);
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			}
		}	
}
 
/**************************** Fetch Current NAV From DB***********************/
$("a#genNavicon").on("click",function(){
	if(!validateNavDetails())return;   
	fetchCurentNAV($("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"),$("#txtFldDlgInvDateInvst"),$("#txtFldDlgInvCurBid")); 
});

function fetchCurentNAV(port,desc,date,curbid){
	var portofolioExist = port.val();
 
	if(portofolioExist == "N" || portofolioExist == ""){ 

	var fundcode  =desc.val();
	var dateInvest=date.val();
	showLoader(); 
	parameter = "DBCALLFOR=FETCH_NAV&strFundCode="+fundcode+"&strDateInvest="+dateInvest;
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

	 			if(tabdets["CURRENT_NAV"]){ 
	 				var navval=tabdets["CURRENT_NAV"];  
	 				curbid.val(navval);
	 				currentNavcalc(null);
				} 
	 			
	 			if(tabdets["NO_NAV"]){ 
	 				var navval=tabdets["NO_NAV"];  
	 				curbid.val(navval);
	 				currentNavcalc(null);
	 				
				} 
	 			
	 			
	 		}
		}); 
	}else{
		applyErrorToastrAlert(NONAV_CALCULATED);
	}
	return true;
}
 

/**************************** Child Name based Year to Teritary Education Validation***********************/

$("#selDlgInvNameOfChild").on("change",function(){
	getChildYrtoTerEduc($(this),$("#selDlgInvYrToRet"));
});

function getChildYrtoTerEduc(curElm,chgElm){
	if(!isEmpty(curElm.val())){ 
		var rowCount = chldpartTbl.rows().count();	 
		if(rowCount >0){ 
			$('#childParticularsTable tbody').find('tr').each(function(){
				var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
				if(childname == curElm.val()){
					chgElm.val($(this).find("td:eq(7)").find("input:eq(0)").val());
				}
			}); 
		}
	}
}

/***************************************Mandatory Validation*************************************************/
 
function validateNavDetails(){
	
	
	 
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvInstitution', IPINVST_INSNAME))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDesc', IPINVST_FUNDCODE))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDateInvst',IPINST_DATEINV))) return; 
	
	  return true; 
}

function validateInvstNavDetails($lastRow){ 
	 
	 
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('select:eq(0)'),  IPINVST_INSNAME,SCREEN_INVESTMENT))) return;
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('select:eq(0)'), IPINVST_FUNDCODE,SCREEN_INVESTMENT))) return;  
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(11)").find('input:eq(0)'), IPINST_DATEINV,SCREEN_INVESTMENT))) return;   
	
  return true; 
}
 
/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgInvInstitution,#txtFldDlgInvDesc,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

/**************************** Payment Method Validation***********************/
 

	$("#txtFldDlgAnalsByPortfolio").on("change",function(){
	 invportfolioChk($(this));
	});
	
	$("#selDlgInvObjInvst,#selDlgInvYrToRet").on("change",function(){
		yrtoretirementChk($("#selDlgInvYrToRet"));
	});

	$("#selDlgInvTypesOfInvst").on("change",function(){
		estimateInvRate($(this),$("#txtFldDlgInvEstInvRate"));
	});


	$("#selDlgDivdBasedOn").on("change",function(){ 
		enablePAR($(this),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon")); 
		enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
			
	});

	$("#selDlgDivdReInv").on("change",function(){ 
		enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
	});
	 
	$("#txtFldDlgInvCurBid,#txtFldDlgInvNoOfUnits,#selDlgDivdPaymode,#selDlgDivdBasedOn,#selDlgDivdReInv,#txtFldDlgDividendPAR,#txtFldDlgInvNAV").on("change",function(){
		
		calcDividendAmount($("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDivdBasedOn"),$("#selDlgDivdReInv"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvNAV"),$("#selDlgDividendAmt"));
	}); 

	  
	
function invpaymentmtd(elmid,changeid,chgeid2){
	var invpaycash=elmid.val(); 
	if(invpaycash == 'Cash'){  //-Dividend enabling
//		$("#invAnlDivid").css("display","block"); 
//		changeid.prop("readonly",false);
//		chgeid2.prop("disabled",false);
	} else{
//		$("#invAnlDivid").css("display","none"); 
//		changeid.prop("readonly",true);
//		changeid.val("");
//		chgeid2.prop("disabled",true);
//		chgeid2.val("");
	}
	
	return true;
}

/****************************Analysis By Portfolio validation***********************/

function invportfolioChk(elmid){
	if(elmid.val() == 'Y'){  
		$("#currentnavdiv").find("label[id=currentnavlabelchange]").text("Current Portfolio NAV");
	}else{
		$("#currentnavdiv").find("label[id=currentnavlabelchange]").text("Current NAV");
	}
}


/****************************Objective based Year to retirement validation***********************/


  
function yrtoretirementChk(elmid){
	var yrtoretirement=isEmpty(elmid.val()) ? 0 :  Number(elmid.val()); 
	var oriretyr=Number($("#retYrstoret").val());
	if(!isEmpty(yrtoretirement) && !isEmpty($("#selDlgInvObjInvst").val())){
	if($("#selDlgInvObjInvst").val() == "Retirement Planning" || $("#selDlgInvObjInvst").val() == "CPF-RP"){
		if(oriretyr < yrtoretirement){  
			$("#alertRetyrMsg").removeClass("hidden"); 
//			$("#selDlgInvYrToRet").val(oriretyr);
		}else{
			$("#alertRetyrMsg").addClass("hidden"); 
		}
	}else{
		$("#alertRetyrMsg").addClass("hidden"); 
	}
	}else{
		$("#alertRetyrMsg").addClass("hidden"); 
	}
	
	return true;
}

function estimateInvRate(typeofinv,estRate){
	 var invType=typeofinv.val(); 
		if(invType == "Bonds"){
			estRate.val($("#caBonds").val()); 
		}else if(invType == "ILP" || invType == "UT"){
			estRate.val($("#caUtilp").val()); 
		}else if(invType == "Stocks"){
			estRate.val($("#caShares").val()); 
		}else if(invType == "Dividend"){
			estRate.val(""); 
		}else if(invType == "Others"){
			estRate.val($("#caOthinv").val()); 
		}else{
			estRate.val(""); 
		} 
		
}
 

function enablePAR(elmId,enableID,curbid,units,nav,navicon){
	if(elmId.val() == "PAR"){ 
		enableID.prop("disabled",false);  
		
//		curbid.prop("disabled",true);
//		curbid.val("");
//		units.prop("disabled",true);
//		units.val("");
//		nav.prop("disabled",true);
//		nav.val("");
//		navicon.css("visibility","hidden");
	}else{ 
		enableID.prop("disabled",true);  
		enableID.val("");
//		curbid.prop("disabled",false); 
//		units.prop("disabled",false); 
//		nav.prop("disabled",false); 
//		navicon.css("visibility","visible");
	}
//	if(flag){
//		if(enableID.attr("disabled"))enableID.val("");
//		if(enableID.attr("disabled"))curbid.val("");
//		if(enableID.attr("disabled"))units.val("");
//		if(enableID.attr("disabled"))nav.val("");
//	}
}


function enableDividends(reinv,basedOn,par,divprct,paymode,divAmt){
 
 
		if(reinv.val() == "N"){

			basedOn.prop("disabled",false);
			
//			par.prop("disabled",false);
			divprct.prop("disabled",false); 
			paymode.prop("disabled",false); 
			divAmt.prop("disabled",false); 
			
//			curbid.prop("disabled",true);
//			units.prop("disabled",true);
//			navicon.css("visibility","hidden");
		}else{


			basedOn.prop("disabled",true);
			basedOn.val("");
			par.prop("disabled",true);
			par.val("");
			divprct.prop("disabled",true);
			divprct.val("");
			paymode.prop("disabled",true);
			paymode.val("");
			divAmt.prop("disabled",true);
			divAmt.val("");
//			
//			curbid.prop("disabled",false);
//			units.prop("disabled",false);
//			navicon.css("visibility","visible");
		}
	 
//		if(flag){
//			basedOn.val("");
//			par.val("");
//			divprct.val("");
//			paymode.val("");
//			divAmt.val(""); 
//		}
}


$("#txtFldDlgBscDsbrseOf").on("change",function(){
	disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
});

function disbursementOpts(disburseOpt,dsbsAmt,dsbsYrs){
	if(disburseOpt.val() == "Years"){
		//$("#disburseAmtdiv").addClass("hidden");
		//$("#disburseYrdiv").removeClass("hidden");  
		dsbsAmt.val(""); 
		dsbsYrs.prop("readonly",false);
		dsbsAmt.prop("readonly",true);
		dsbsYrs.prop("disabled",false);
		dsbsAmt.prop("disabled",true);
	}else if(disburseOpt.val() == "Amount"){
		//$("#disburseAmtdiv").removeClass("hidden");
		//$("#disburseYrdiv").addClass("hidden"); 
		dsbsYrs.val(""); 
		dsbsYrs.prop("readonly",true);
		dsbsAmt.prop("readonly",false);
		dsbsYrs.prop("disabled",true);
		dsbsAmt.prop("disabled",false);
	}else{
		//$("#disburseAmtdiv").addClass("hidden");
		//$("#disburseYrdiv").addClass("hidden");
		dsbsAmt.prop("readonly",true);
		dsbsYrs.prop("readonly",true);
		dsbsYrs.prop("disabled",true);
		dsbsAmt.prop("disabled",true);
		dsbsAmt.val("");
		dsbsYrs.val(""); 
	}
	
}


function calcDividendAmount(divprct,paymode,basedOn,reInvest,par,nav,divAmt){
	
	
	var dividPercnt = (isEmpty(divprct.val())) ? 0 : Number(divprct.val())/100; 
	var dividPaymode = paymode.val();
	var dividBasedOn = basedOn.val();
	var dividReInvest = reInvest.val();
	var dividPAR = (isEmpty(par.val())) ? 0 : Number(par.val());
	var dividNAV = (isEmpty(nav.val())) ? 0 : Number(nav.val()); 
	var resultant=0;
	var TopUpAmt=1;
	
	 if(!isEmpty(dividPaymode)){
		
		 
		 TopUpAmt  = getFrequencyDigit(dividPaymode,1);
	 }
	 
	 
	if(!isEmpty(dividReInvest)){
		if(dividReInvest == "N"){
			if(dividBasedOn == "PAR"){
				resultant= dividPercnt * dividPAR / TopUpAmt * TopUpAmt;
			}else if(dividBasedOn == "NAV"){
				resultant= dividPercnt * dividNAV / TopUpAmt * TopUpAmt;
				par.val("");
			}
			
		} 
	}
	
	divAmt.val(roundNumber(resultant)); 
	
}

function addAvallisFin(crtElm,chgeElmId){
//	Avallis portfolio is Yes
	
	if(chgeElmId.find('option:eq(1)').val() == "AFPL"){
		chgeElmId.find('option:eq(1)').remove();
	}
	
	if(crtElm.val() == "Y"){
		//Name of Institution
		chgeElmId.find('option:eq(0)').after("<option value='AFPL'>Avallis Financial Pte Ltd</option>");
	}
}






//common component pdf
$("#btninputinvstsectionPrint").click(function (){ 
	
	
	var rl = fnaInvestmentTbl.row().count();
	
//	var rl = $('#fnaInvestmentTbl tbody tr:visible').length;
	if(rl == 0) {
		alert("No data to export");
		return false;
	}
	
	var pl ="landscape";  // landscape     portrait
	var fileSave ="INVESTMENT_"; 
	var fnaInvestmentTblId ="fnaInvestmentTbl";  //table id
	var pdfTitle =""; // table title name
	//var colheaderarray =["#","Investment Details (Ownership*)","Investment Details (Types*)","Investment Details (Name of FA/Broker/Secruity house)","Investment Details (Analysis By Portfolio)","Investment Details (Name of Institution)","Investment Details (Description)","Investment Details (Estd. rate($))","Investment Details (Amount Invested($))","Investment Details (Payment Method)","NAV Details (Date Invested (DD/MM/YYYY))","NAV Details (Last NAV price($))","NAV Details (No. of units)","NAV Details (Current NAV($))","NAV Details (Remarks)","Dividend Details (Re-Invested)","Dividend Details (Based on)","Dividend Details (PAR value($))","Dividend Details (Dividend Rate(%))","Dividend Details (Payment Mode)","Dividend Details (Amount/Annum.($))","Regular Investment Plan (Any RSP?)","Regular Investment Plan (Frequency)","Regular Investment Plan (Amount)","Regular Investment Plan (No of yrs of RSP (Yrs))","Investment Objectives (Obj.of Investment)","Investment Objectives (Yrs in Ter. Edu./ Yrs.to Retirement(yrs))","Investment Objectives (Name of child)","Investment Objectives (Accumulation (%))","Investment Objectives (Period of Investment (yrs))","Disbursement plan (Basis of Disbursement)","Disbursement plan (Amount ($))","Disbursement plan (Yrs. of Disbursement (yrs))"];                  

//	 var colheaderarray =["#","Ownership*","Types*","Name of FA/Broker/Secruity house","Analysis By Portfolio","Name of Institution","Description","Estd. rate($)","Amount Invested($)","Payment Method","Date Invested (DD/MM/YYYY)","Last NAV price($)","No. of units","Current NAV($)","Remarks","Re-Invested","Based on","PAR value($)","Dividend Rate(%)","Payment Mode","Amount/Annum.($)","Any RSP?","Frequency","Amount","No of yrs of RSP (Yrs)","Obj.of Investment","Yrs in Ter. Edu./ Yrs.to Retirement(yrs)","Name of child","Accumulation (%)","Period of Investment (yrs)","Basis of Disbursement","Amount ($)","Yrs. of Disbursement (yrs)"];
	 
	var screentittlefootername = "Investments";
	
	var colheaderarray  = [
	    [
	        {content: 'Investment Details', colSpan: 10, styles: {halign: 'center'}}, 
	        {content: 'NAV Details', colSpan: 5, styles: {halign: 'center'}},
	        {content: 'Dividend Details', colSpan: 6, styles: {halign: 'center'}},
	        {content: 'Regular Investment Plan', colSpan: 4, styles: {halign: 'center'}},
	        {content: 'Investment Objectives', colSpan: 5, styles: {halign: 'center'}},
	        {content: 'Disbursement plan', colSpan: 3, styles: {halign: 'center'}}
	    ],
	    ["#","Ownership","Types","Name of FA/Broker/Secruity house","Analysis By P.F","Name of Institution","Description","Estd. rate($)","Amount Invested($)","Payment Method","Date Invested","Last NAV price($)","No.of units","Current NAV($)","Remarks","Re-Invested","Based on","PAR value($)","Dividend Rate(%)","Payment Mode","Amount/Annum.($)","Any RSP?","Frequency","Amount","No of RSP (Yrs)","Obj.of Investment","Yrs in Ter. Edu","Name of child","Accumulation (%)","Period of Investment (yrs)","Basis of Disbursement","Amount ($)","Yrs. of Disbursement (yrs)"],
	];
	
	// ["#","Ownership*","Types*","Name of FA/Broker/Secruity house","Analysis By Portfolio","Name of Institution","Description","Estd. rate($)","Amount Invested($)","Payment Method","Date Invested (DD/MM/YYYY)","Last NAV price($)","No. of units","Current NAV($)","Remarks","Re-Invested","Based on","PAR value($)","Dividend Rate(%)","Payment Mode","Amount/Annum.($)","Any RSP?","Frequency","Amount","No of yrs of RSP (Yrs)","Obj.of Investment","Yrs in Ter. Edu./ Yrs.to Retirement(yrs)","Name of child","Accumulation (%)","Period of Investment (yrs)","Basis of Disbursement","Amount ($)","Yrs. of Disbursement (yrs)"],
	
	//group header we should not use this array
//	var colheaderarrayAry =[]; // don't format new array , directly pass the value
//colheaderarrayAry.push(colheaderarray);	
	var jsonObject = 
	    [{"key":"Table","value":fnaInvestmentTblId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":colheaderarray,"pdfaddnewPage":""} 
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
	// geninvstsectionTblPDF();
	 },100);
	 
});

	
