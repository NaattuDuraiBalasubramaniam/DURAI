var indexArr = [];
var fvProjtnChart = null;
var glblIndex = '';
var glblRowObj = null;
var glblIORowObj = null;

/*
This function is added by John
for adding investment details 
prototype.
Author - John 2204.1
Date - 09032022 1021
 */
function fnAddInvestmentDets(strCallFor){
	
	fnResetInvDets();
	fnLoadInvDatePicker('divDateInvstdId');
	showFIPAModel('divInvDetsId','Investment Details');
	
	if(strCallFor == 'ADD'){
		
		document.getElementById('btnAddInvDetsId').style.display = '';
		document.getElementById('btnUpdInvDetsId').style.display = 'none';
		
	}else if(strCallFor == 'UPDATE'){
		
		document.getElementById('btnAddInvDetsId').style.display = 'none';
		document.getElementById('btnUpdInvDetsId').style.display = '';
		
	}//end of if
	
}//end of fnAddInvestmentDets

/* 
This function is used to 
hide the investment modal dialog.
Author - John 2204.1,
Date - 09032022 1031
*/
function fnSetInvDets(){
	
	//validating all the mandatory fields
	if(!fnValidateInvMandFields('')) return false;
	$('#divInvDetsId').modal('hide');
	
	fnAddInvDetsRow(null);
	
	fnChkInvExist(document.getElementById('tblInvDetsSummaryId').tBodies[0]);
	
}//end of fnSetInvDets

/*
This function is added by John
for adding investment objective 
details prototype.
Author - John 2204.1
Date - 09032022 1623
 */
function fnAddInvObjDets(){
	
	glblIndex = document.getElementById('hdnFldInvObjIndexDlg').value;
	
	fnResetInvObjDets();
	
	var payMthdObj = document.getElementById('selPaymentMethodDlg');
	
	if(!validateMandatoryFlds(payMthdObj,'Please select payment method before adding.')){
		fnFocusInvDlgTab('BASIC')
		return false;
	};
	
	var optn0 = new Option("--SELECT--","");
	var optn1 = new Option("Retirement Planning","Retirement Planning");
	var optn2 = new Option("Education Planning","Education Planning");
	var optn3 = new Option("No plans","No plans");
	var optn4 = new Option("CPF-RP","CPF-RP");
	
	var selInvObj = document.getElementById('selInvObjDlg');
	selInvObj.innerHTML = '';
	
	selInvObj.options[0] = optn0;
	
	switch(payMthdObj.value){
		
		case 'Cash' : 
			
			selInvObj.options[1] = optn1;
			selInvObj.options[2] = optn2;
			selInvObj.options[3] = optn3;
		
		break;
		
		case 'CPFOA' : 
			
			selInvObj.options[1] = optn1;
			selInvObj.options[2] = optn3;
			selInvObj.options[3] = optn4;
		
		break;
		
		case 'CPFSA' : 
			
			selInvObj.options[1] = optn1;
			selInvObj.options[2] = optn3;
			selInvObj.options[3] = optn4;
		
		break;
		
		case 'SRS' : 
			
			selInvObj.options[1] = optn1;
			selInvObj.options[2] = optn3;
			
		break;
		
	}//end of switch
	
	fnLoadChildNames();
	
	showFIPAModel('divInvObjDetsDlgId','Investment Objective Details');
	
	document.getElementById('btnAddInvObjDetsId').style.display = '';
	document.getElementById('btnUpdInvObjDetsId').style.display = 'none';
	
}//end of fnAddInvObjDets
 
/* 
This function is used to 
hide the investment modal dialog.
Author - John 2204.1,
Date - 09032022 1622
*/
function fnAddInvObjToTblDets(){
	
	var selInvObjDlg  = document.getElementById('selInvObjDlg');
	var childDivObj   = document.getElementById('selChildNameDlg');
	var percAccDivObj = document.getElementById('txtFldAccumltnPercDlg');
	var yrsToDivObj   = document.getElementById('txtFldYrsToRetOrTerDlg');
	
	var selDisbursmentByDlg = document.getElementById('selDisbursmentByDlg');
	var txtFldDisWithdrawYearDlg = document.getElementById('txtFldDisWithdrawYearDlg');
	var txtFldYrsOfDisbrsmntDlg = document.getElementById('txtFldYrsOfDisbrsmntDlg');
	var txtFldDisAnnualAmtDlg = document.getElementById('txtFldDisAnnualAmtDlg');
		
	if(!validateMandatoryFlds(selInvObjDlg,'Please select investment objective before adding.')){
		return false;
	}//end of if
	
	if(!validateMandatoryFlds(percAccDivObj,'Please key in allocation percentage before adding.')){
		return false;
	}//end of if
	
	if(selInvObjDlg.value == 'Retirement Planning'){
		
		if(!validateMandatoryFlds(yrsToDivObj,'Please key in years to retirement before adding.')){
			return false;
		}//end of if
		
	}else if(selInvObjDlg.value == 'Education Planning'){
		
		if(!validateMandatoryFlds(yrsToDivObj,'Please key in years to tertiary before adding.')){
			return false;
		}//end of if
		
		if(!validateMandatoryFlds(childDivObj,'Please select child name before adding.')){
			return false;
		}//end of if
		
	}//end of if
	
	if(!validateMandatoryFlds(selDisbursmentByDlg,'Please select disbursement by before adding.')){
		return false;
	}//end of if
		
		
	if(selDisbursmentByDlg.value == 'SINGLE'){
		
		if(!validateMandatoryFlds(txtFldDisWithdrawYearDlg,'Please select withdrawal year before adding.')){
			return false;
		}//end of if
		
	}else if(selDisbursmentByDlg.value == 'YEARS'){
		
		if(!validateMandatoryFlds(txtFldYrsOfDisbrsmntDlg,'Please key in years of disbursement before adding.')){
			return false;
		}//end of if
		
	}else if(selDisbursmentByDlg.value == 'AMOUNT'){
		
		if(!validateMandatoryFlds(txtFldDisAnnualAmtDlg,'Please key in annual amount before adding.')){
			return false;
		}//end of if
		
	}//end of if
	
	var invObjTblObj = document.getElementById('tblInvObjDetsDlgId').tBodies[0];
	
	var invObjVal = selInvObjDlg.value;
	
	if(!fnCkhForInvObjDupl(invObjTblObj,invObjVal))return false;
	
	var invObjRowObj = invObjTblObj.insertRow(invObjTblObj.rows.length);
	
	var childNameVal = invObjVal == 'Education Planning' ? ' ('+childDivObj.value+')' : '';
	var lblYrsToVal  = invObjVal == 'Education Planning' ? 'Years to Tertiary' : 
				 	   invObjVal == 'Retirement Planning' ? 'Years to Retirement' : 
				 	   invObjVal == 'CPF-RP' ? 'Years to Retirement' : '';
	
	var cell0 = invObjRowObj.insertCell(0);
		cell0.innerHTML = '';
		
		cell0.innerHTML += '<td width="40%">';
		cell0.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Investment Objective</label>';
		cell0.innerHTML += '  <p style="font-size:13pt;">'+invObjVal+childNameVal+'</p>';
		cell0.innerHTML += '  <span style="font-size:8pt;color:rgb(54, 162, 235);"></span>';
		cell0.innerHTML += '</td>';
	
	var cell1 = invObjRowObj.insertCell(1);
		cell1.innerHTML = '';
		
		cell1.innerHTML += '<td width="20%">';
		cell1.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Allocation (%)</label>';
		cell1.innerHTML += '  <p style="font-size:13pt;">'+percAccDivObj.value+'</p>';
		cell1.innerHTML += '</td>';
	
	var cell2 = invObjRowObj.insertCell(2);
		cell2.innerHTML = '';
	
		cell2.innerHTML += '<td width="20%">';
		cell2.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">'+lblYrsToVal+'</label>';
		cell2.innerHTML += '  <p style="font-size:13pt;">'+yrsToDivObj.value+'</p>';
		cell2.innerHTML += '</td>';
	
	var cell3 = invObjRowObj.insertCell(3);
		cell3.innerHTML = '';
		
		cell3.innerHTML += '<td width="20%">';
		cell3.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Action</label><br>';
		cell3.innerHTML += '  <a href="javascript:void(0);" onclick="fnEditInvObjDets(this);" >Edit</a> | ';
		cell3.innerHTML += '  <a href="javascript:void(0);" onclick="fnInvObjDelConf(this);">Remove</a>';
		cell3.innerHTML += '  <input type="hidden" name="selInvstObjDlg'+glblIndex+'" value="'+invObjVal+'" />';
		cell3.innerHTML += '  <input type="hidden" name="txtFldAccumltnPercDlg'+glblIndex+'" value="'+percAccDivObj.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="txtFldYrsToRetOrTerDlg'+glblIndex+'" value="'+yrsToDivObj.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="selChildNameDlg'+glblIndex+'" value="'+childDivObj.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="selDisbursmentByDlg'+glblIndex+'" value="'+selDisbursmentByDlg.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="txtFldDisWithdrawYearDlg'+glblIndex+'" value="'+txtFldDisWithdrawYearDlg.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="txtFldYrsOfDisbrsmntDlg'+glblIndex+'" value="'+txtFldYrsOfDisbrsmntDlg.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="txtFldDisAnnualAmtDlg'+glblIndex+'" value="'+txtFldDisAnnualAmtDlg.value+'" />';
		cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedByDlg'+glblIndex+'" value="" />';
		cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedDtDlg'+glblIndex+'" value="" />';
		cell3.innerHTML += '  <input type="hidden" name="priFldInvObjectiveIdDlg'+glblIndex+'" value="" />';
		cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjModeDlg'+glblIndex+'" value="I" />';
		cell3.innerHTML += '</td>';
	
	$('#divInvObjDetsDlgId').modal('hide'); 
	
}//end of fnAddInvObjToTblDets

/*
This function is used to 
show details based on the 
disbrusment type
Author - John 2204.1,
Date - 10032022 1426
 */
 
 function fnShowDisbrsmntType(selObj){
	
	var yrsFldDivObj = document.getElementById('divYrsOfDisbrsmntId');
	var amtFldDivObj = document.getElementById('divDisbrsmntAmtId');
	
	var yrsFldTblObj = document.getElementById('divYrsOfDisbrsmntTblId');
	var amtFldTblObj = document.getElementById('divDisbrsmntAmtTblId');
	
	var yrsFldObj = document.getElementById('txtFldYrsOfDisbrsmntDlg');
	var amtFldObj = document.getElementById('txtFldDisbrsmntAmt');
	
	if(selObj.value == 'YEARS'){
		
		yrsFldDivObj.style.display = '';
		amtFldDivObj.style.display = 'none';
		
		yrsFldTblObj.style.display = '';
		amtFldTblObj.style.display = 'none';
		
		amtFldObj.value = '';
		
	}else if(selObj.value == 'AMOUNT'){
		
		yrsFldDivObj.style.display = 'none';
		amtFldDivObj.style.display = '';
		
		yrsFldTblObj.style.display = 'none';
		amtFldTblObj.style.display = '';
		
		yrsFldObj.value = '';
		
	}//end of if
	
}//end of fnShowDisbrsmntType


/*
This function is used to validate
the dividend controls based on the 
dividend reinvestment selection.
Author - John 2204.1,
Date - 10032022 1457
 */
 function fnChkDividendReinv(selObj){
	
	var selBasedOnObj = document.getElementById('selDividendBasedOnDlg');
	var numParValObj  = document.getElementById('txtFldPARValDlg');
	var numDivRateObj = document.getElementById('txtFldDividendRateDlg');
	var selPayModeObj = document.getElementById('selDivPaymentModeDlg');
	var numAnnlDivObj = document.getElementById('txtFldAnnualDivAmtDlg');
	
	if(selObj.value == 'N'){
		
		selBasedOnObj.disabled = false;
		numParValObj.disabled = false;
		numDivRateObj.disabled = false;
		selPayModeObj.disabled = false;
		numAnnlDivObj.disabled = false;
		selBasedOnObj.focus();
		
	}else {
		
		selBasedOnObj.disabled = true;
		numParValObj.disabled = true;
		numDivRateObj.disabled = true;
		selPayModeObj.disabled = true;
		numAnnlDivObj.disabled = true;
		
		selBasedOnObj.value = '';
		numParValObj.value  = '';
		numDivRateObj.value = '';
		selPayModeObj.value = '';
		numAnnlDivObj.value = '';
		
	}//end of if
	
	fnValidateDivBasedOn(selBasedOnObj);
}//end of fnChkDividendReinv


/*
This function is used to validate
Investment Objective fields based 
on the selected inv. objective.
Author - John 2204.1,
Date - 10032022 1511
 */
 function fnSelInvObjDets(selObj){
	
	var childTxtObj   = document.getElementById('selChildNameDlg');
	
	var childDivObj   = document.getElementById('divSelChildName');
	var percAccDivObj = document.getElementById('divTxtFldAccumltnPerc');
	var yrsToDivObj   = document.getElementById('divTxtFldYrsToRetOrTer');
	var disbrmntByObj = document.getElementById('divDisbursmentByDlg');
	var yrs2TerOrRet  = document.getElementById('lblFldYrsToRetOrTerDlg');
	
	
	if(selObj.value == ''){
		
		fnResetInvObjDets();
		
	}else if(selObj.value == 'Education Planning'){
		
		childDivObj.style.display = '';
		percAccDivObj.style.display = '';
		yrsToDivObj.style.display = '';
		disbrmntByObj.style.display = '';
		yrs2TerOrRet.innerHTML = 'Years to Tertiary';
		
	}else if(selObj.value == 'No plans'){
		
		childDivObj.style.display = 'none';
		percAccDivObj.style.display = '';
		yrsToDivObj.style.display = 'none';
		disbrmntByObj.style.display = '';
		
	}else if(selObj.value == 'Retirement Planning'){
		
		childDivObj.style.display = 'none';
		childTxtObj.value = '';
		
		percAccDivObj.style.display = '';
		yrsToDivObj.style.display = '';
		disbrmntByObj.style.display = '';
		yrs2TerOrRet.innerHTML = 'Years to Retirement';
		mandatoryFldForRetirement(selObj,null,'INVESTMENT');
		
		document.getElementById('txtFldYrsToRetOrTerDlg').value = 
		document.getElementById('retYrstoret').value;
		
	}//end of if
	
}//end of fnSelInvObjDets

/*
This function is used to 
reset the inv. objective
details in the dialog box.
Author - John 2204.1,
Date - 10032022 1516
 */
function fnResetInvObjDets(){
	
	var divChildDivObj   = document.getElementById('divSelChildName');
	var divPercAccDivObj = document.getElementById('divTxtFldAccumltnPerc');
	var divYrsToDivObj   = document.getElementById('divTxtFldYrsToRetOrTer');
	var divDisbrmntByObj = document.getElementById('divDisbursmentByDlg');
	
	var invObj  	  = document.getElementById('selInvObjDlg');
	var childDivObj   = document.getElementById('selChildNameDlg');
	var percAccDivObj = document.getElementById('txtFldAccumltnPercDlg');
	var yrsToDivObj   = document.getElementById('txtFldYrsToRetOrTerDlg');
	var disbrmntByObj = document.getElementById('selDisbursmentByDlg');
	
	divChildDivObj.style.display = 'none';
	divPercAccDivObj.style.display = 'none';
	divYrsToDivObj.style.display = 'none';
	divDisbrmntByObj.style.display = 'none';
	
	invObj.value = '';
	childDivObj.value = '';
	percAccDivObj.value = '';
	yrsToDivObj.value = '';
	disbrmntByObj.value = '';
	
	fnSetDisbrsmntBy(disbrmntByObj);
		
}//end of fnResetInvObjDets

/*
This function is used to 
calculate the current NAV.
Author - John 2204.1
Date - 10032022 1540
 */
 function fnCalcCurrNAV(){
	
	var numNAVPriceObj  = document.getElementById('txtFldNAVPriceDlg');
	var numNoOfUnitsObj = document.getElementById('txtFldUnitsDlg');
	var numCurrNAVObj   = document.getElementById('txtFldCurrPFNavDlg');
	
	if(!isEmpty(numNAVPriceObj.value) && !isEmpty(numNoOfUnitsObj.value)){
		numCurrNAVObj.value = roundNumber(parseFloat(numNAVPriceObj.value)*parseFloat(numNoOfUnitsObj.value));
	}//end of if
	
}//end of fnCalcCurrNAV

/*
This function is used to 
validate RSP based on input.
Author - John 2204.1,
Date - 10032022 1553
 */
function fnChkForRSPInv(selObj){
	
	var txtFldRSPAmtObj = document.getElementById('txtFldRSPAmtDlg');
	var selInvDescObj   = document.getElementById('selInvFreqDlg');
	var txtFldRSPYrsObj = document.getElementById('txtFldRSPYrsDlg');
	
	if(selObj.value == 'Y'){
		
		txtFldRSPAmtObj.disabled = false;
		selInvDescObj.disabled = false;
		txtFldRSPYrsObj.disabled = false;
		txtFldRSPAmtObj.focus();
		
	}else {
		
		txtFldRSPAmtObj.disabled = true;
		selInvDescObj.disabled = true;
		txtFldRSPYrsObj.disabled = true;
		
		txtFldRSPAmtObj.value = '';
		selInvDescObj.value = '';
		txtFldRSPYrsObj.value = '';
		
	}//end of if
	
}//end of fnChkForRSPInv

/*
This function is used to 
project the future value 
of the investments.
Author - John 2204.1,
Date - 10032022 1715
 */
function fnLoadInvObjProjtn(chartId, yearArr, fvArr){
	
	fnDestroyExistChart(chartId);
	
	var ctx = document.getElementById(chartId).getContext("2d");
	
	window.chartColors = {
		red: 'rgb(255, 99, 132)',
		orange: 'rgb(255, 159, 64)',
		yellow: 'rgb(255, 205, 86)',
		green: 'rgb(75, 192, 192)',
		blue: 'rgb(54, 162, 235)',
		purple: 'rgb(153, 102, 255)',
		grey: 'rgb(231,233,237)'
	};
	
	var config = {
	  type: 'line',
	  data: {
	    labels: yearArr,
	    datasets: [{
	      label: "Future Value",
	      borderColor: window.chartColors.green,
	      data: fvArr,
	      fill: false,
		  cubicInterpolationMode: 'monotone'
	    }]
	  },
	  options: {
		responsive: false,
	    tooltips: {
			mode: 'label',
			callbacks: {
            label: function(t, d) {
               var xLabel = d.datasets[t.datasetIndex].label;
               var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
               return xLabel + ': ' + yLabel;
            }
         }
		},
	    hover: {mode: 'nearest',intersect: true},
	    scales: {
	      xAxes: [{display: true,scaleLabel: {display: true,labelString: 'Year'}}],
	      yAxes: [{
         ticks: {
           callback: function(value) {
             return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
           }
         }
       }]
	    },
	    legend: {display: false}
	  }
	};
	
	new Chart(ctx, config);
	
}//end of fnLoadInvObjProjtn


/*
This function is used to 
switch fields between combo
and text field
Author - John 2204.1,
Date - 21/03/2022 0935
*/
function fnSwitchInvField(lnkObj, strFieldType){
	
	var hdnCurrStsObj = lnkObj.parentElement.children[1];
	
	if(strFieldType == 'INSTITUTE'){
		
		var selInvInsObj = document.getElementById('selInvInstituteNameDlg');
		var txtInvInsObj = document.getElementById('txtFldInvInstituteNameDlg');
		
		if(hdnCurrStsObj.value == 'N'){
			
			selInvInsObj.style.display = 'none';
			txtInvInsObj.style.display = '';
			selInvInsObj.value = '';
			hdnCurrStsObj.value = 'Y';
			
		}else if(hdnCurrStsObj.value == 'Y'){
			
			selInvInsObj.style.display = '';
			txtInvInsObj.style.display = 'none';
			txtInvInsObj.value = '';
			hdnCurrStsObj.value = 'N';
			
		}//end of if
		
	}else if(strFieldType == 'INVESTMENT'){
		
		var selInvInsObj = document.getElementById('selInvDescDlg');
		var txtInvInsObj = document.getElementById('txtFldInvDescDlg');
		
		if(hdnCurrStsObj.value == 'N'){
			
			selInvInsObj.style.display = 'none';
			txtInvInsObj.style.display = '';
			selInvInsObj.value = '';
			hdnCurrStsObj.value = 'Y';
			
		}else if(hdnCurrStsObj.value == 'Y'){
			
			selInvInsObj.style.display = '';
			txtInvInsObj.style.display = 'none';
			txtInvInsObj.value = '';
			hdnCurrStsObj.value = 'N';
			
		}//end of if
		
	}//end of if
	
}//end of fnSwitchInvField


/*
This function is used to 
set the RoI for the selected
type of investments.
Author - John 2204.1,
Date - 21/03/2022 1013
 */
 function fnSetEstRoI(selObj,index){
	
	var estRoIObj = document.getElementById('txtFldEstRoIDlg');
	
	switch(selObj.value){
		
		case 'Bonds':
		estRoIObj.value = document.getElementById('caBonds').value;
		break;
		
		case 'Dividend':
		estRoIObj.value = '';
		break;
		
		case 'ILP':
		estRoIObj.value = document.getElementById('caUtilp').value;
		break;
		
		case 'Stocks':
		estRoIObj.value = document.getElementById('caShares').value;
		break;
		
		case 'UT':
		estRoIObj.value = document.getElementById('caUtilp').value;
		break;
		
		case 'Others':
		estRoIObj.value = document.getElementById('caOthinv').value;
		break;
		
		default:
		estRoIObj.value = '';
		break;
		
	}//end of switch
	
}//end of fnSetEstRoI

/*
This function is used to 
set the Investment Acc. No.
for the selected Investment if 
available from AVIS system.
Author - John 2204.1,
Date - 21/03/2022 1022
 */
 function fnSetInvAccNo(selObj){
	
	var invAccNoObj = document.getElementById('txtFldInvAccNoDlg');
	
	if(selObj.value == 'AIM-AIM'){
		
		invAccNoObj.value = 'ASI000000008-001';
		invAccNoObj.readOnly = true;
		invAccNoObj.style.backgroundColor = '#CCC;';
		
	}else if(selObj.value == 'PAM-GPS 3'){
		
		invAccNoObj.value = 'AS2000000124-001';
		invAccNoObj.readOnly = true;
		invAccNoObj.style.backgroundColor = '#CCC;';
		
	}else if(selObj.value == 'PAM-API 3'){
		
		invAccNoObj.value = 'AJI000000227-002';
		invAccNoObj.readOnly = true;
		invAccNoObj.style.backgroundColor = '#CCC;';
		
	}else{
		
		invAccNoObj.value = '';
		invAccNoObj.readOnly = false;
		invAccNoObj.style.backgroundColor = '#FFF;';
		
	}//end of if
	
}//end of fnSetInvAccNo


/*
This function is used to 
show the field based on the 
selected disbursment type
 */
function fnSetDisbrsmntBy(disbrsmntByObj){
	
	var divWdYearObj  = document.getElementById('divDisWithdrawYear');
	var divNoOfYrsObj = document.getElementById('divYrsOfDisbrsmnt');
	var divAnnAmtObj  = document.getElementById('divDisAnnualAmt');
	
	var wdYearObj  = document.getElementById('txtFldDisWithdrawYearDlg');
	var noOfYrsObj = document.getElementById('txtFldYrsOfDisbrsmntDlg');
	var annAmtObj  = document.getElementById('txtFldDisAnnualAmtDlg');
	
	wdYearObj.value = '';
	noOfYrsObj.value = '';
	annAmtObj.value = '';
	
	document.getElementById('divDisbrsmntByResTxt').style.display = 'none';
	document.getElementById('spnDisbrsmntByResTxt').innerHTML = '';
	
	switch(disbrsmntByObj.value){
		
		case 'SINGLE':
		divWdYearObj.style.display = '';
		divNoOfYrsObj.style.display = 'none';
		divAnnAmtObj.style.display = 'none';
		wdYearObj.focus();
		break;
		
		case 'YEARS':
		divWdYearObj.style.display = 'none';
		divNoOfYrsObj.style.display = '';
		divAnnAmtObj.style.display = 'none';
		
			if(retAgeBasedon.value == 'Self'){
				noOfYrsObj.value = document.getElementById('retSelfLivyrs').value;
			}else if(retAgeBasedon.value == 'Spouse'){
				noOfYrsObj.value = document.getElementById('retSpsLivyrs').value;
			}//end of if
		
		noOfYrsObj.focus();
		break;
		
		case 'AMOUNT':
		divWdYearObj.style.display = 'none';
		divNoOfYrsObj.style.display = 'none';
		divAnnAmtObj.style.display = '';
		annAmtObj.focus();
		break;
		
		case '':
		divWdYearObj.style.display = 'none';
		divNoOfYrsObj.style.display = 'none';
		divAnnAmtObj.style.display = 'none';
		break;
		
	}//end of switch
	
}//end of fnSetDisbrsmntBy

/*
This function is used to 
show the disbursment result 
based on the selected
disbursment by.
Author - John 2204.1,
Date - 21/03/2022 1115
 */
function fnDisbrsmntRes(txtObj,disbrsmntBy){
	
	var spnResTxtObj = document.getElementById('spnDisbrsmntByResTxt');
	var divResTxtObj = document.getElementById('divDisbrsmntByResTxt');
	
	if(disbrsmntBy == 'SINGLE'){
		
		spnResTxtObj.innerHTML = 'On the withdrawal year of ('+txtObj.value+') the final amount would be $220,000,000.00';
		divResTxtObj.style.display = '';
		
	}else if(disbrsmntBy == 'YEARS'){
		
		spnResTxtObj.innerHTML = 'For no. of years ('+txtObj.value+') the annual amount would be $176,000.00';
		divResTxtObj.style.display = '';
		
	}else if(disbrsmntBy == 'AMOUNT'){
		
		spnResTxtObj.innerHTML = 'For Annual amount ('+txtObj.value+') the no. of years would be 17.6 years';
		divResTxtObj.style.display = '';
		
	}else{
		
		spnResTxtObj.innerHTML = '';
		divResTxtObj.style.display = 'none';
		
	}//end of if
	
}//end of fnDisbrsmntRes


/**
This function is used to 
set the values based on the 
selected value from 
analysis by portfolio combo-box
Author - John 2204.1,
Date - 23032022 1255
 */
function fnChkAnalysisByPF(selObj){
	
	var invDescObj = document.getElementById('selInvDescDlg');
	
	invDescObj.options.length = 1;
	
	var selInsObj = document.getElementById('selInvInstituteNameDlg');
		selInsObj.options.length = 0;
	
	if(selObj.value == 'Y'){
		
		selInsObj.options[0] = new Option('Avallis Financial Pte Ltd','AFPL');
		fnLoadPFDets(invDescObj);
		
	}else{
		
		selInsObj.options[0] = new Option('--SELECT--','');
		fnLoadFundMgrDets(selInsObj);
		
	}//end of if
	
}//end of fnChkAnalysisByPF

/**
This function is used to load the 
portfolio categ of the investments
from master.
Author - John 2204.1,
Date - 23032022 1457
 */
function fnLoadPFDets(invDescObj){
	
	var hdnSelPFCategLst = document.getElementById('selhidPortfolio');
	
	for(var pf=0; pf<hdnSelPFCategLst.options.length; pf++ ){
		
		invDescObj.options[invDescObj.options.length] = new Option(hdnSelPFCategLst[pf].text,hdnSelPFCategLst[pf].value);
		
	}//end of for
		
}//end of fnLoadPFDets

/**
This function is used to 
load the fund details.
Author - John 2204.1,
Date - 23032022 1458
 */
function fnLoadFundDets(fmObj){
	
	var strFMCode  = fmObj.value;
	var invDescObj = document.getElementById('selInvDescDlg');
	
	invDescObj.options.length = 1;
	
	if(!isEmpty(strFMCode)){
		
		var invDescParams = "DBCALLFOR=LOAD_FUND_DETS&strFMCode="+strFMCode;
		
		showLoader(); 
		ajaxCallInv(invDescParams,servletName,function(Data){ 
			
			var retval = Data;  
			
			hideLoader(); 
			
	 		for ( var val in retval) { 
		
	 			var jsnRes = retval[val];

	 			if (jsnRes["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}//end of if
	 			
	 			if (jsnRes["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			}//end of if

				invDescObj.options[invDescObj.options.length] = new Option(jsnRes['strFundName'],jsnRes['strFundCode']);
	 			
	 		}//end of if
	 		
		}); 
		
	}//end of if
	
}//end of fnLoadFundDets




function fnAddInvDets(invDataset){
	
	var invDivObj = $('#divInvDetsContentAreaId');
	var invDetsContentHTML = '';
	var indexLen  = parseInt(invDivObj.children().length);
	
	if(indexLen <=0)indexArr = [];
	
	
	var invDivLen = indexArr.includes(indexLen) ? Math.max.apply(Math, indexArr)+1 : indexLen;
	indexArr.push(invDivLen);
	
	var selInvOwnership 	       = 'selInvOwnership'+invDivLen;
	var txtFldInvAmt		       = 'txtFldInvAmt'+invDivLen;
	var selPaymentMethod 	       = 'selPaymentMethod'+invDivLen;
	var selPFAnalysis		       = 'selPFAnalysis'+invDivLen;
	var selInvType		 	       = 'selInvType'+invDivLen;
	var txtFldEstRoI               = 'txtFldEstRoI'+invDivLen;
	var selInvInstituteName        = 'selInvInstituteName'+invDivLen;
	var txtFldInvInstituteName     = 'txtFldInvInstituteName'+invDivLen;
	var selInvDesc 			       = 'selInvDesc'+invDivLen;
	var txtFldInvDesc 	           = 'txtFldInvDesc'+invDivLen;
	var txtFldInvAccNo 	           = 'txtFldInvAccNo'+invDivLen;
	var selRSPExists 		       = 'selRSPExists'+invDivLen;
	var txtFldRSPAmt 		       = 'txtFldRSPAmt'+invDivLen;
	var selInvFreq 			       = 'selInvFreq'+invDivLen;
	var txtFldRSPYrs 		       = 'txtFldRSPYrs'+invDivLen;
	var txtFldInvDate 		       = 'txtFldInvDate'+invDivLen;
	var txtFldNAVPrice 	           = 'txtFldNAVPrice'+invDivLen;
	var txtFldUnits 		       = 'txtFldUnits'+invDivLen;
	var txtFldCurrPFNav 	       = 'txtFldCurrPFNav'+invDivLen;
	var selIsDividendReinv 	       = 'selIsDividendReinv'+invDivLen;
	var selDividendBasedOn 	       = 'selDividendBasedOn'+invDivLen;
	var txtFldPARVal 		       = 'txtFldPARVal'+invDivLen;
	var txtFldDividendRate 	       = 'txtFldDividendRate'+invDivLen;
	var selDivPaymentMode 	       = 'selDivPaymentMode'+invDivLen;
	var txtFldAnnualDivAmt 	   	   = 'txtFldAnnualDivAmt'+invDivLen;
	var txtFldInvPeriod 	   	   = 'txtFldInvPeriod'+invDivLen;
	var invProjectnCanvas	   	   = 'invProjectnCanvas'+invDivLen;
	var tblInvObjDetsDlgId     	   = 'tblInvObjDetsDlgId'+invDivLen;
	var hdnFldInvDetsMode    	   = 'hdnFldInvDetsMode'+invDivLen;
	var priFldInvFnaInvestmentId   = 'priFldInvFnaInvestmentId'+invDivLen;
	var hdnFldInvCreatedBy     	   = 'hdnFldInvCreatedBy'+invDivLen;
	var hdnFldInvCreatedDt     	   = 'hdnFldInvCreatedDt'+invDivLen;
	var hdnFldInvIsCustomInstitute = 'hdnFldInvIsCustomInstitute'+invDivLen;
	var hdnFldInvIsCustomDescriptn = 'hdnFldInvIsCustomDescriptn'+invDivLen;
	var divDateInvstdId            = 'divDateInvstdId'+invDivLen;

	var popTxtShowInvDetsInfoId = 'popTxtShowInvDetsInfoId'+invDivLen;
	
	invDetsContentHTML += ' <div class="panel-group"  role="tablist" aria-multiselectable="true" id="divInvDetsContentId'+invDivLen+'">  ';
	invDetsContentHTML += ' 	<div class="panel panel-default">  ';
	invDetsContentHTML += ' 		<div class="panel-heading" role="tab"  ';
	invDetsContentHTML += ' 			  style="color: #000;background-color: #EEE;border-color: #243665;font-size: 14px;padding: 13px 8px;">  ';
	invDetsContentHTML += ' 			<div class="row">  ';
	invDetsContentHTML += ' 				<div class="col-md-10 col-sm-10">  ';
	invDetsContentHTML += ' 					<span style="font-size:9pt;">  ';
	invDetsContentHTML += ' 						Investment Details <a class="btn btn-default addinfoicon" style="padding-left:5px;" id="'+popTxtShowInvDetsInfoId+'"></a> ';
	invDetsContentHTML += ' 					</span><br>  ';
	invDetsContentHTML += ' 					<h3 class="panel-title" style="padding-top:5px;">  ';
	invDetsContentHTML += ' 						<a role="button" class="addRow-icon1" data-toggle="collapse" data-parent="#accordion" href="#newInvCol'+invDivLen+'" style="color:#337ab7;"  ';
	invDetsContentHTML += ' 						   aria-expanded="true" aria-controls="newInvCol'+invDivLen+'" id="newInvHead'+invDivLen+'" onclick="fnChngMode('+invDivLen+');" >  ';
	invDetsContentHTML += ' 						   Investment Details '+(invDivLen+1);
	invDetsContentHTML += ' 						</a>  ';
	invDetsContentHTML += ' 					</h3>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 				<div class="col-md-2 col-sm-2">  ';
	invDetsContentHTML += ' 					<span style="font-size:9pt;">  ';
	invDetsContentHTML += ' 						Action  ';
	invDetsContentHTML += ' 					</span><br>  ';
	invDetsContentHTML += ' 					<a href="javascript:void(0);" onclick="fnDelFIPAInvDets('+invDivLen+');" style="font-size:16px;">Delete</a>  ';
	invDetsContentHTML += ' 					<input type="hidden" name="hdnFldInvDetsIndex" id="hdnFldInvDetsIndex'+invDivLen+'" value="'+invDivLen+'" />  ';
	invDetsContentHTML += ' 					<input type="hidden" name="hdnFldInvDetsMode" id="'+hdnFldInvDetsMode+'" value="I" />  ';
	invDetsContentHTML += ' 					<input type="hidden" name="priFldInvFnaInvestmentId" id="'+priFldInvFnaInvestmentId+'" value="" />  ';
	invDetsContentHTML += ' 					<input type="hidden" name="hdnFldInvCreatedBy" id="'+hdnFldInvCreatedBy+'" value="" />  ';
	invDetsContentHTML += ' 					<input type="hidden" name="hdnFldInvCreatedDt" id="'+hdnFldInvCreatedDt+'" value="" />  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 			</div>  ';
	invDetsContentHTML += ' 		</div>  ';
	invDetsContentHTML += ' 		<div id="newInvCol'+invDivLen+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="newInvHead'+invDivLen+'">  ';
	invDetsContentHTML += ' 			<div class="panel-body" style="background-color:#EEE;">  ';
	invDetsContentHTML += ' 				<div style="margin:5px;padding:25px;background-color:#FFF;" id="divInvBasicDetsId">  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-12 col-sm-12">  ';
	invDetsContentHTML += ' 							<h4 style="font-weight:bold;">Basic Details</h4>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selInvOwnership" class="control-label mandFldastrks">  ';
	invDetsContentHTML += ' 								Ownership *  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selInvOwnership" id="'+selInvOwnership+'" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldInvAmt">Amount Invested ($)</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldInvAmt" id="'+txtFldInvAmt+'" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 								class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selPaymentMethod" class="control-label mandFldastrks">  ';
	invDetsContentHTML += ' 								Payment Method  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selPaymentMethod" id="'+selPaymentMethod+'" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selPFAnalysis" class="control-label">  ';
	invDetsContentHTML += ' 								Analysis by Portfolio  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selPFAnalysis" id="'+selPFAnalysis+'" onchange="fnChkAnalysisByPF(this,'+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								<option value="Y">Yes</option>  ';
	invDetsContentHTML += ' 								<option value="N">No</option>  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row" style="margin-top:20px;">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selInvType" class="control-label mandFldastrks">  ';
	invDetsContentHTML += ' 								Type of Investment *  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selInvType" id="'+selInvType+'" onchange="fnSetEstRoI(this,'+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldEstRoI">Estimated RoI (%)</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldEstRoI" id="'+txtFldEstRoI+'" onchange="fnUpdInvstmntProjDets(this,\'ROI\','+invDivLen+');fnCalcFV('+invDivLen+');" mouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 								class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div class="row">  ';
	invDetsContentHTML += ' 								<div class="col-md-10 col-sm-10">  ';
	invDetsContentHTML += ' 									<label for="selInvInstituteName" class="control-label mandFldastrks">  ';
	invDetsContentHTML += ' 									Name of the Institution  ';
	invDetsContentHTML += ' 								</label>  ';
	invDetsContentHTML += ' 								<select name="selInvInstituteName" id="'+selInvInstituteName+'" onchange="fnLoadFundDets(this,'+invDivLen+');" class="form-control" onchange="fnLoadFundDets(this);" style="width:99%;" >  ';
	invDetsContentHTML += ' 									<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 									  ';
	invDetsContentHTML += ' 								</select>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldInvInstituteName" id="'+txtFldInvInstituteName+'" placeholder="Type Institute Name" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control" style="width:99%;display:none;text-align:left !important;" />  ';
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 								<div class="col-md-2 col-sm-2" title="Click here to switch to over-write or select combo box." style="margin-top:24px;padding-left:0px;">  ';
	invDetsContentHTML += ' 									<a href="javascript:void(0);" onclick="fnSwitchInvField(this,\'INSTITUTE\');" style="border-radius:25%;" class="btn btn-sm btn-primary btn-rounded btn-outline">  ';
	invDetsContentHTML += ' 									  <i class="fa fa-retweet"></i>  ';
	invDetsContentHTML += ' 									</a>  ';
	invDetsContentHTML += ' 									<input type="hidden" name="hdnFldInvIsCustomInstitute" id="'+hdnFldInvIsCustomInstitute+'" value="N" />  ';
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div class="row">  ';
	invDetsContentHTML += ' 								<div class="col-md-10 col-sm-10">  ';
	invDetsContentHTML += ' 									<label for="selInvDesc" class="control-label mandFldastrks">  ';
	invDetsContentHTML += ' 										Description of Investment  ';
	invDetsContentHTML += ' 									</label>  ';
	invDetsContentHTML += ' 									<select name="selInvDesc" id="'+selInvDesc+'" class="form-control" onchange="fnSetInvAccNo(this);" style="width:99%;" >  ';
	invDetsContentHTML += ' 										<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 									</select>  ';
	invDetsContentHTML += ' 									<input type="text" name="txtFldInvDesc" id="'+txtFldInvDesc+'" placeholder="Type Investment Name" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 										class="form-control" style="width:99%;display:none;text-align:left !important;" />  ';
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 								<div class="col-md-2 col-sm-2" title="Click here to switch to over-write or select combo box." style="margin-top:24px;padding-left:0px;">  ';
	invDetsContentHTML += ' 									<a href="javascript:void(0);" onclick="fnSwitchInvField(this,\'INVESTMENT\');" style="border-radius:25%;" class="btn btn-sm btn-primary btn-rounded btn-outline">  ';
	invDetsContentHTML += ' 									  <i class="fa fa-retweet"></i>  ';
	invDetsContentHTML += ' 									</a>  ';
	invDetsContentHTML += ' 									<input type="hidden" name="hdnFldInvIsCustomDescriptn" id="'+hdnFldInvIsCustomDescriptn+'" value="N" />  ';
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row" style="margin-top:20px;">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="txtFldInvAccNo" class="control-label">  ';
	invDetsContentHTML += ' 								Investment Account Number  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldInvAccNo" id="'+txtFldInvAccNo+'" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 							class="form-control" style="width:80%;text-align:left !important;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">&nbsp;</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">&nbsp;</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">&nbsp;</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 				<div style="margin:5px;padding:25px;background-color:#FFF;" id="divInvRSPDetsId">  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-12 col-sm-12">  ';
	invDetsContentHTML += ' 							<h4 style="font-weight:bold;">RSP Details</h4>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selRSPExists" class="control-label">  ';
	invDetsContentHTML += ' 								Any Regular Investment Plan  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selRSPExists" id="'+selRSPExists+'" onchange="fnChkForRSPInv(this,'+invDivLen+');fnUpdInvstmntProjDets(this,\'RSP_EXIST\','+invDivLen+');fnCalcFV('+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								<option value="Y">Yes</option>  ';
	invDetsContentHTML += ' 								<option value="N">No</option>  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divTxtFldRSPAmt'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label class="control-label" for="txtFldRSPAmt">RSP Amount ($)</label>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldRSPAmt" id="'+txtFldRSPAmt+'" onchange="fnUpdInvstmntProjDets(this,\'RSP_AMT\','+invDivLen+');fnCalcFV('+invDivLen+');" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divSelInvFreq'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label for="selInvFreq" class="control-label">  ';
	invDetsContentHTML += ' 									Frequency  ';
	invDetsContentHTML += ' 								</label>  ';
	invDetsContentHTML += ' 								<select name="selInvFreq" id="'+selInvFreq+'" onchange="fnUpdInvstmntProjDets(this,\'FREQ\','+invDivLen+');fnCalcFV('+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 									<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								</select>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divTxtFldRSPYrs'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label class="control-label" for="txtFldRSPYrs">Years of RSP Investment (Yrs)</label>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldRSPYrs" id="'+txtFldRSPYrs+'" onchange="fnValidtPriodsOfInv('+invDivLen+');" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 				<div style="margin:5px;padding:25px;background-color:#FFF;" id="divInvNAVDetsId">  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-12 col-sm-12">  ';
	invDetsContentHTML += ' 							<h4 style="font-weight:bold;">NAV Details</h4>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="'+txtFldInvDate+'">Date Invested</label>  ';
	invDetsContentHTML += ' 							<div class="input-group input-group-sm date"  id="'+divDateInvstdId+'" style="width:80%;" >  '; 
	invDetsContentHTML += ' 								<input type="text" name="txtFldInvDate" id="'+txtFldInvDate+'" maxlength="10"  ';
	invDetsContentHTML += ' 		   							   onmouseover="fipaTooltip(this);" class="form-control" />  ';
	invDetsContentHTML += ' 								<div class="input-group-addon"   >  ';
	invDetsContentHTML += ' 									<span class="glyphicon glyphicon-calendar" ></span>  ';  
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldNAVPrice">Last NAV Price ($)</label>  ';
	invDetsContentHTML += ' 							<div class="input-group input-group-sm" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldNAVPrice" id="'+txtFldNAVPrice+'" onchange="fnCalcCurrNAV('+invDivLen+');"   ';
	invDetsContentHTML += ' 								 onmouseover="fipaTooltip(this);" class="form-control numbers applyEvntUsd" />  ';
	invDetsContentHTML += ' 								<div class="input-group-addon"  >  ';
	invDetsContentHTML += ' 									<span class="glyphicon glyphicon-circle-arrow-down"   ';
	invDetsContentHTML += ' 									style="cursor:pointer;" onclick="fnGetLatestNAVPrice('+invDivLen+');"></span>    ';
	invDetsContentHTML += ' 								</div>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldUnits">Number of Units</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldUnits" id="'+txtFldUnits+'" onchange="fnCalcCurrNAV('+invDivLen+');" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 								class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldCurrPFNav">Current NAV ($)</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldCurrPFNav" id="'+txtFldCurrPFNav+'" onchange="fnUpdInvstmntProjDets(this,\'NAV\','+invDivLen+');fnCalcFV('+invDivLen+');" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 								class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 				<div style="margin:5px;padding:25px;background-color:#FFF;" id="divInvDivdendDetsId">  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-12 col-sm-12">  ';
	invDetsContentHTML += ' 							<h4 style="font-weight:bold;">Dividend Details</h4>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<label for="selIsDividendReinv" class="control-label">  ';
	invDetsContentHTML += ' 								Dividend Reinvested  ';
	invDetsContentHTML += ' 							</label>  ';
	invDetsContentHTML += ' 							<select name="selIsDividendReinv" id="'+selIsDividendReinv+'" onchange="fnChkDividendReinv(this,'+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 								<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								<option value="Y">Yes</option>  ';
	invDetsContentHTML += ' 								<option value="N">No</option>  ';
	invDetsContentHTML += ' 							</select>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divDivdntBasedOnId'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label for="selDividendBasedOn" class="control-label">  ';
	invDetsContentHTML += ' 									Dividend Based On  ';
	invDetsContentHTML += ' 								</label>  ';
	invDetsContentHTML += ' 								<select name="selDividendBasedOn" id="'+selDividendBasedOn+'" onchange="fnValidateDivBasedOn(this,'+invDivLen+');" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 									<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 									<option value="PAR">PAR</option>  ';
	invDetsContentHTML += ' 									<option value="NAV">NAV</option>  ';
	invDetsContentHTML += ' 								</select>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divPARValId'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label class="control-label" for="txtFldPARVal">PAR Value ($)</label>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldPARVal" id="'+txtFldPARVal+'" onchange="fnCalcDivPerAnnum('+invDivLen+')" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divDivdntRateId'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label class="control-label" for="txtFldDividendRate">Dividend Rate (%)</label>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldDividendRate" id="'+txtFldDividendRate+'" onchange="fnCalcDivPerAnnum('+invDivLen+')" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row" style="margin-top:20px;">  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divDivdntPayModeId'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label for="selDivPaymentMode" class="control-label">  ';
	invDetsContentHTML += ' 									Dividend Payment Mode  ';
	invDetsContentHTML += ' 								</label>  ';
	invDetsContentHTML += ' 								<select name="selDivPaymentMode" id="'+selDivPaymentMode+'" class="form-control" style="width:80%;" >  ';
	invDetsContentHTML += ' 									<option value="">--SELECT--</option>  ';
	invDetsContentHTML += ' 								</select>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">  ';
	invDetsContentHTML += ' 							<div id="divAnnulAmtId'+invDivLen+'" style="display:none;">  ';
	invDetsContentHTML += ' 								<label class="control-label" for="txtFldAnnualDivAmt">Dividend Amount Per Annum ($)</label>  ';
	invDetsContentHTML += ' 								<input type="text" name="txtFldAnnualDivAmt" id="'+txtFldAnnualDivAmt+'" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 									class="form-control numbers applyEvntUsd" style="width:80%;" />  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">&nbsp;</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-3 col-sm-3">&nbsp;</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 				<div style="margin:5px;padding:25px;background-color:#FFF;" id="divInvObjDetsId">  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-12 col-sm-12">  ';
	invDetsContentHTML += ' 							<h4 style="font-weight:bold;">Investment Objective(s) Details</h4>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row">  ';
	invDetsContentHTML += ' 						<div class="col-md-6 col-sm-6">  ';
	invDetsContentHTML += ' 							<div class="btnStyle">  ';
	invDetsContentHTML += ' 							  <label class="control-label">&nbsp;</label>  ';
	invDetsContentHTML += ' 							  <button type="button"  class="btn BtnFIPASRCH StylishSRCH" onclick="fnAddInvObjDets('+invDivLen+');" >  ';
	invDetsContentHTML += ' 								<span class="txt">Add Investment Objective</span>  ';
	invDetsContentHTML += ' 								<span class="round"><i class="fa fa-plus"></i></span>  ';
	invDetsContentHTML += ' 							  </button>  ';
	invDetsContentHTML += ' 							</div>  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 						<div class="col-md-6 col-sm-6">  ';
	invDetsContentHTML += ' 							<label class="control-label" for="txtFldInvPeriod">Period of Investment (Yrs)</label>  ';
	invDetsContentHTML += ' 							<input type="text" name="txtFldInvPeriod" id="'+txtFldInvPeriod+'" onchange="fnValidtPriodsOfInv('+invDivLen+');fnUpdInvstmntProjDets(this,\'INV_PERIOD\','+invDivLen+');fnCalcFV('+invDivLen+');" onmouseover="fipaTooltip(this);"   ';
	invDetsContentHTML += ' 								class="form-control numbers applyEvntUsd" style="width:40%;" />  ';
	invDetsContentHTML += ' 						</div>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 					<div class="row" style="padding-left:20px;padding-top:20px;">  ';
	invDetsContentHTML += ' 						<table id="'+tblInvObjDetsDlgId+'" class="table table-hover table-striped" style="width: 99%">  ';
	invDetsContentHTML += ' 							<tbody>  ';
	invDetsContentHTML += ' 							</tbody>  ';
	invDetsContentHTML += ' 						</table>  ';
	invDetsContentHTML += ' 					</div>  ';
	invDetsContentHTML += ' 				</div>  ';
	invDetsContentHTML += ' 			</div>  ';
	invDetsContentHTML += ' 		</div>  ';
	invDetsContentHTML += ' 	</div>  ';
	invDetsContentHTML += ' </div>  ';
	
	
	invDivObj.append(invDetsContentHTML);
	showPopOver(popTxtShowInvDetsInfoId,'Click on the below investment details to show more details.');

	//loading combo box
	fnLoadInvComboBox(document.getElementById(selInvOwnership),document.getElementById('selInvOwnershipDlg'));
	fnLoadInvComboBox(document.getElementById(selPaymentMethod),document.getElementById('selPaymentMethodDlg'));
	fnLoadInvComboBox(document.getElementById(selInvType),document.getElementById('selInvTypeDlg'));
	fnLoadInvComboBox(document.getElementById(selInvInstituteName),document.getElementById('selInvInstituteNameDlg'));
	fnLoadInvComboBox(document.getElementById(selInvFreq),document.getElementById('selInvFreqDlg'));
	fnLoadInvComboBox(document.getElementById(selDivPaymentMode),document.getElementById('selDivPaymentModeDlg'));

	var strSelInsObj  = document.getElementById('selInvInstituteNameDlg');
	var strSelDescObj = document.getElementById('selInvDescDlg');
	
	var selInstituteObj = document.getElementById(selInvInstituteName);
	var selDescrbtnObj  = document.getElementById(selInvDesc);

	//setting basic details values
	document.getElementById(selInvOwnership).value = invDataset != null ? invDataset.selInvOwnership : 
	document.getElementById('selInvOwnershipDlg').value;
	
	document.getElementById(txtFldInvAmt).value = invDataset != null ? invDataset.txtFldInvAmt : 
	document.getElementById('txtFldInvAmtDlg').value;
	
	document.getElementById(selPaymentMethod).value = invDataset != null ? invDataset.selPaymentMethod : 
	document.getElementById('selPaymentMethodDlg').value;
	
	document.getElementById(selPFAnalysis).value = invDataset != null ? invDataset.selPFAnalysis : 
	document.getElementById('selPFAnalysisDlg').value;
	
	document.getElementById(selInvType).value = invDataset != null ? invDataset.selInvType : 
	document.getElementById('selInvTypeDlg').value;
	
	document.getElementById(txtFldEstRoI).value = invDataset != null ? invDataset.txtFldEstRoI : 
	document.getElementById('txtFldEstRoIDlg').value;
	
	selInstituteObj.value = invDataset != null ? invDataset.selInvInstituteName : 
	strSelInsObj.value;
	
	if(selInstituteObj.value == 'AFPL'){
		fnLoadPFDets(selDescrbtnObj);
	}else{
		fnLoadFundDets(selInstituteObj,invDivLen);
	}//end of if
	
	
	document.getElementById(txtFldInvInstituteName).value = invDataset != null ? invDataset.txtFldInvInstituteName : 
	document.getElementById('txtFldInvInstituteNameDlg').value;
	
	selDescrbtnObj.value = invDataset != null ? invDataset.selInvDesc : 
	strSelDescObj.value;
	
	document.getElementById(txtFldInvDesc).value = invDataset != null ? invDataset.txtFldInvDesc : 
	document.getElementById('txtFldInvDescDlg').value;
	
	document.getElementById(txtFldInvAccNo).value = invDataset != null ? invDataset.txtFldInvAccNo : 
	document.getElementById('txtFldInvAccNoDlg').value;
	
	//setting rsp details
	document.getElementById(selRSPExists).value = invDataset != null ? invDataset.selRSPExists : 
	document.getElementById('selRSPExistsDlg').value;
	
	document.getElementById(txtFldRSPAmt).value = invDataset != null ? invDataset.txtFldRSPAmt : 
	document.getElementById('txtFldRSPAmtDlg').value;
	
	document.getElementById(selInvFreq).value = invDataset != null ? invDataset.selInvFreq : 
	document.getElementById('selInvFreqDlg').value;
	
	document.getElementById(txtFldRSPYrs).value = invDataset != null ? invDataset.txtFldRSPYrs : 
	document.getElementById('txtFldRSPYrsDlg').value;
	
	
	//setting nav details
	document.getElementById(txtFldInvDate).value = invDataset != null ? invDataset.txtFldInvDate : 
	document.getElementById('txtFldInvDateDlg').value;
	
	document.getElementById(txtFldNAVPrice).value = invDataset != null ? invDataset.txtFldNAVPrice : 
	document.getElementById('txtFldNAVPriceDlg').value;
	
	document.getElementById(txtFldUnits).value = invDataset != null ? invDataset.txtFldUnits : 
	document.getElementById('txtFldUnitsDlg').value;
	
	document.getElementById(txtFldCurrPFNav).value = invDataset != null ? invDataset.txtFldCurrPFNav : 
	document.getElementById('txtFldCurrPFNavDlg').value;
	
	
	//setting dividend details
	document.getElementById(selIsDividendReinv).value = invDataset != null ? invDataset.selIsDividendReinv : 
	document.getElementById('selIsDividendReinvDlg').value;
	
	document.getElementById(selDividendBasedOn).value = invDataset != null ? invDataset.selDividendBasedOn : 
	document.getElementById('selDividendBasedOnDlg').value;
	
	document.getElementById(txtFldPARVal).value = invDataset != null ? invDataset.txtFldPARVal : 
	document.getElementById('txtFldPARValDlg').value;
	
	document.getElementById(txtFldDividendRate).value = invDataset != null ? invDataset.txtFldDividendRate : 
	document.getElementById('txtFldDividendRateDlg').value;
	
	document.getElementById(selDivPaymentMode).value = invDataset != null ? invDataset.selDivPaymentMode : 
	document.getElementById('selDivPaymentModeDlg').value;
	
	document.getElementById(txtFldAnnualDivAmt).value = invDataset != null ? invDataset.txtFldAnnualDivAmt : 
	document.getElementById('txtFldAnnualDivAmtDlg').value;
	
	//Inv. Objective
	document.getElementById(txtFldInvPeriod).value = invDataset != null ? invDataset.txtFldInvPeriod : 
	document.getElementById('txtFldInvPeriodDlg').value;

	//setting up hidden values
	if(invDataset != null){
		
		document.getElementById(hdnFldInvDetsMode).value = 'Q';
		document.getElementById(priFldInvFnaInvestmentId).value = invDataset.priFldInvFnaInvestmentId;
		document.getElementById(hdnFldInvCreatedBy).value = invDataset.hdnFldInvCreatedBy;
		document.getElementById(hdnFldInvCreatedDt).value = invDataset.hdnFldInvCreatedDt;
		document.getElementById(hdnFldInvIsCustomInstitute).value = invDataset.hdnFldInvIsCustomInstitute;
		document.getElementById(hdnFldInvIsCustomDescriptn).value = invDataset.hdnFldInvIsCustomDescriptn;
		
	}//end of if
	
	//to load the inv. objective details
	invDataset != null ? fnPopulateInvObjDets(invDataset.fnaInvObjectiveDets,invDivLen) : fnLoadInvObjDets(invDivLen);
	
	//to project the future value
	//fnCalcFV(invDivLen);
	/*
	//to show the header of the investment
	if(invDataset != null){
		
		document.getElementById('newInvHead'+invDivLen).innerHTML = 
		document.getElementById(selPaymentMethod).value+' ('+
		selInstituteObj.options[selInstituteObj.selectedIndex].text+' - '+
		selDescrbtnObj.options[selDescrbtnObj.selectedIndex].text+')';
		
	}else{
		
		document.getElementById('newInvHead'+invDivLen).innerHTML = 
		document.getElementById('selPaymentMethodDlg').value+' ('+
		strSelInsObj.options[strSelInsObj.selectedIndex].text+' - '+
		strSelDescObj.options[strSelDescObj.selectedIndex].text+')';
		
	}//end of if
	*/
	//to load the date picker
	fnLoadInvDatePicker(divDateInvstdId);
	
	//to validate RSP Investment
	fnChkForRSPInv(document.getElementById(selRSPExists),invDivLen);
	
	//to validate dividend details
	fnChkDividendReinv(document.getElementById(selIsDividendReinv),invDivLen);
	
}//end of fnAddInvDets

/**
This function is used to 
delete the investment details.
Author - John 2204.1,
Date - 24032022 1519
 */
function fnDelFIPAInvDets(indexPos){
	
	var invContentDivObj = document.getElementById('divInvDetsContentAreaId');
	
	invContentDivObj.removeChild(document.getElementById('divInvDetsContentId'+indexPos));

}//end of fnDelFIPAInvDets


/**
This function is used to load
the existing combo-box into  
the dynamic combo box
Author - John 2204.1,
Date - 24032022 1428
 */
function fnLoadInvComboBox(selObj,existSelObj){
	
	selObj.options.length = 0;
	
	for(var cm=0; cm<existSelObj.options.length; cm++){
		
		selObj.options[cm] = new Option(existSelObj[cm].text,existSelObj[cm].value);
		
	}//end of for
	
}//end of fnLoadInvOwnership


/**
This function is used to calculate
the Future value for the given
investment details.
Author - John 2204.1,
Date - 25032022 1122
 */
function fnCalcFV(index){
	/*
	var presentValue = isEmpty(index) ? document.getElementById('txtFldCurrPFNavDlg').value : 
										document.getElementById('txtFldCurrPFNav'+index).value;
										
	var interestRate = isEmpty(index) ? document.getElementById('txtFldEstRoIDlg').value : 
										document.getElementById('txtFldEstRoI'+index).value;
										
	var noOfYears    = isEmpty(index) ? document.getElementById('txtFldInvPeriodDlg').value : 
										document.getElementById('txtFldInvPeriod'+index).value;
										
	var paymentVal   = isEmpty(index) ? document.getElementById('txtFldRSPAmtDlg').value : 
										document.getElementById('txtFldRSPAmt'+index).value;
										
	var paymntFreq   = isEmpty(index) ? document.getElementById('selInvFreqDlg').value : 
										document.getElementById('selInvFreq'+index).value;
				
	var selRSPExists = isEmpty(index) ? document.getElementById('selRSPExistsDlg').value : 
										document.getElementById('selRSPExists'+index).value;			
				
	var paymntdueAt  = "BEGINNING";
	
	if(!isEmpty(presentValue)){
		
		if(!isEmpty(interestRate)){
			
			if(!isEmpty(noOfYears)){
						
				var currYear = parseInt(new Date().getFullYear());
				
				var yearArr = [];
				var fvArr = [];
				
				for(fv=1; fv<=noOfYears; fv++){
					
					yearArr.push(currYear+fv);
					fvArr.push(fnInvCalculateFV(presentValue, interestRate, fv, paymentVal, paymntFreq, paymntdueAt,selRSPExists));
					
				}//end of for

				var invProjectnCanvas = isEmpty(index) ? 'invProjectnCanvas' : 
														 'invProjectnCanvas'+index;
														 console.log('yearArr = '+yearArr);
														 console.log('fvArr = '+fvArr);
				fnLoadInvObjProjtn(invProjectnCanvas, yearArr, fvArr);
		
			}//end of if
		}//end of if
	}//end of if
	*/
	
}//end of fnCalcFV

/**
This function is used to reset the 
existing value presented in the 
investment details dialog box.
Author - John 2204.1,
Date - 28032022 1510
 */
function fnResetInvDets(){
	
	//Basic details tab
	document.getElementById('selInvOwnershipDlg').value = '';
	document.getElementById('txtFldInvAmtDlg').value = '';
	document.getElementById('selPaymentMethodDlg').value = '';
	document.getElementById('selPFAnalysisDlg').value = '';
	document.getElementById('selInvTypeDlg').value = '';
	document.getElementById('txtFldEstRoIDlg').value = '';
	document.getElementById('selInvInstituteNameDlg').value = '';
	document.getElementById('txtFldInvInstituteNameDlg').value = '';
	document.getElementById('selInvDescDlg').value = '';
	document.getElementById('txtFldInvDescDlg').value = '';
	document.getElementById('txtFldInvAccNoDlg').value = '';
	document.getElementById('txtFldInvAccNoDlg').value = '';
	
	fnLoadFundMgrDets(document.getElementById('selInvInstituteNameDlg'));
	
	document.getElementById('txtFldInvAccNoDlg').readOnly = false;
	document.getElementById('txtFldInvAccNoDlg').style.backgroundColor = '#FFF';
	
	
	//RSP details
	document.getElementById('selRSPExistsDlg').value = '';
	document.getElementById('txtFldRSPAmtDlg').value = '';
	document.getElementById('selInvFreqDlg').value = '';
	document.getElementById('txtFldRSPYrsDlg').value = '';
	fnChkForRSPInv(document.getElementById('selRSPExistsDlg'));
	
	//NAV details
	document.getElementById('txtFldInvDateDlg').value = '';
	document.getElementById('txtFldNAVPriceDlg').value = '';
	document.getElementById('txtFldUnitsDlg').value = '';
	document.getElementById('txtFldCurrPFNavDlg').value = '';
	
	//Dividend details
	document.getElementById('selIsDividendReinvDlg').value = '';
	document.getElementById('selDividendBasedOnDlg').value = '';
	document.getElementById('txtFldPARValDlg').value = '';
	document.getElementById('txtFldDividendRateDlg').value = '';
	document.getElementById('selDivPaymentModeDlg').value = '';
	document.getElementById('txtFldAnnualDivAmtDlg').value = '';
	fnChkDividendReinv(document.getElementById('selIsDividendReinvDlg'));
	
	//Inv. Objective
	document.getElementById('txtFldInvPeriodDlg').value = '';
	document.getElementById('selInvObjDlg').value = '';
	document.getElementById('selChildNameDlg').value = '';
	document.getElementById('txtFldAccumltnPercDlg').value = '';
	document.getElementById('txtFldYrsToRetOrTerDlg').value = '';
	document.getElementById('selDisbursmentByDlg').value = '';
	document.getElementById('txtFldDisWithdrawYearDlg').value = '';
	document.getElementById('txtFldYrsOfDisbrsmntDlg').value = '';
	document.getElementById('txtFldDisAnnualAmtDlg').value = '';
	document.getElementById('tblInvObjDetsDlgId').tBodies[0].innerHTML = '';
	document.getElementById('tblInvObjDetsDlgId').tBodies[1].innerHTML = '';
	
	
	document.getElementById('hdnFldInvObjIndexDlg').value = '';
	document.getElementById('hdnFldInvDetsModeDlg').value = '';
	document.getElementById('hdnFldInvDetsRowIndex').value = '';
	
	//to clear the existing chart value
	fnDestroyExistChart('invProjectnCanvas');
	
	fnFocusInvDlgTab('BASIC');
	
}//end of fnResetInvDets

/**
This function is used to load the 
investment objective details into 
the DHTML tables.
Author - John 2204.1,
Date - 28032022 1752
 */
function fnLoadInvObjDets(index){
	
	var invObjTblObj = document.getElementById('tblInvObjDetsDlgId'+index).tBodies[0];
	
	invObjTblObj.innerHTML = '';
	
	var selInvObj = document.getElementsByName('selInvObj');
	
	for(var io=0; io<selInvObj.length; io++){
		
		var invObjRowObj = invObjTblObj.insertRow(io);
	
		var selInvObjVal = selInvObj[io].value;
		var childDivObj  = document.getElementsByName('selChildName')[io].value;
		var childNameVal = selInvObjVal == 'Education Planning' ? ' ('+childDivObj+')' : '';
		var lblYrsToVal  = selInvObjVal == 'Education Planning' ? 'Years to Tertiary' : 
					 	   selInvObjVal == 'Retirement Planning' ? 'Years to Retirement' : 
					 	   selInvObjVal == 'CPF-RP' ? 'Years to Retirement' : '';
		
		
		var percAccDivObj = document.getElementsByName('txtFldAccumltnPerc')[io].value;
		var yrsToDivObj   = document.getElementsByName('txtFldYrsToRetOrTer')[io].value;
		var selDisbursmentBy = document.getElementsByName('selDisbursmentBy')[io].value;
		var txtFldDisWithdrawYear = document.getElementsByName('txtFldDisWithdrawYear')[io].value;
		var txtFldYrsOfDisbrsmnt = document.getElementsByName('txtFldYrsOfDisbrsmnt')[io].value;
		var txtFldDisAnnualAmt = document.getElementsByName('txtFldDisAnnualAmt')[io].value;
		
		var cell0 = invObjRowObj.insertCell(0);
			cell0.innerHTML = '';
			
			cell0.innerHTML += '<td width="40%">';
			cell0.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Investment Objective</label>';
			cell0.innerHTML += '  <p style="font-size:13pt;">'+selInvObjVal+childNameVal+'</p>';
			cell0.innerHTML += '  <span style="font-size:8pt;color:rgb(54, 162, 235);"></span>';
			cell0.innerHTML += '</td>';
		
		var cell1 = invObjRowObj.insertCell(1);
			cell1.innerHTML = '';
			
			cell1.innerHTML += '<td width="20%">';
			cell1.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Allocation (%)</label>';
			cell1.innerHTML += '  <p style="font-size:13pt;">'+percAccDivObj+'</p>';
			cell1.innerHTML += '</td>';
		
		var cell2 = invObjRowObj.insertCell(2);
			cell2.innerHTML = '';
		
			cell2.innerHTML += '<td width="20%">';
			cell2.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">'+lblYrsToVal+'</label>';
			cell2.innerHTML += '  <p style="font-size:13pt;">'+yrsToDivObj+'</p>';
			cell2.innerHTML += '</td>';
		
		var cell3 = invObjRowObj.insertCell(3);
			cell3.innerHTML = '';
			
			cell3.innerHTML += '<td width="20%">';
			cell3.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Action</label><br>';
			cell3.innerHTML += '  <a href="javascript:void(0);">Edit</a> | ';
			cell3.innerHTML += '  <a href="javascript:void(0);" onclick="fnInvObjDelConf(this);">Delete</a>';
			cell3.innerHTML += '  <input type="hidden" name="selInvstObj'+index+'" value="'+selInvObjVal+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldAccumltnPerc'+index+'" value="'+percAccDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldYrsToRetOrTer'+index+'" value="'+yrsToDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="selChildName'+index+'" value="'+childDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="selDisbursmentBy'+index+'" value="'+selDisbursmentBy+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldDisWithdrawYear'+index+'" value="'+txtFldDisWithdrawYear+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldYrsOfDisbrsmnt'+index+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldDisAnnualAmt'+index+'" value="'+txtFldDisAnnualAmt+'" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedBy'+index+'" value="" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedDt'+index+'" value="" />';
			cell3.innerHTML += '  <input type="hidden" name="priFldInvObjectiveId'+index+'" value="" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjMode'+index+'" value="I" />';
			cell3.innerHTML += '</td>';
		
	}//end of for
	
}//end of fnLoadInvObjDets


/**
This function is used to clear 
the existing chart before 
drawing a new one.
Author - John 2204.1,
Date - 29032022 1208
 */
function fnDestroyExistChart(chartId){
	
	Chart.helpers.each(Chart.instances, function(instance){
	  
		if(instance.chart.canvas.id == chartId){
			
			instance.chart.destroy();
			
		}//end of if

	});//end of chart loop

}//end of fnDestroyExistChart

/** 
This function is used to populate 
the investment details from the 
DB upon selecting the client 
details.
Author - John 2204.1
Date - 31032022 1640
*/
function fnPopulateInvDets(invDataset){
	
	fnChkForRSPInv(document.getElementById('selRSPExistsDlg'));
	fnChkDividendReinv(document.getElementById('selIsDividendReinvDlg'));
	document.getElementById('tblInvDetsSummaryId').tBodies[0].innerHTML = '';
	
	$.each(invDataset, function(invDatasetKey, invDatasetVal) {
		fnAddInvDetsRow(invDatasetVal);
	});//end of for
	
	var invTblObj = document.getElementById('tblInvDetsSummaryId').tBodies[0];
	fnShowInvProjctnLC(invTblObj);
	fnChkInvExist(invTblObj);
	
	document.getElementById('tblInvDetsDelTBodyId').innerHTML = '';
}//end of fnPopulateInvDets


/**
This function is used for AJAX calling for 
investment alone as the aync flag is set 
to flase is the main reason.
Author - John 2204.1,
Date - 01042022 1201
 */
function ajaxCallInv(parameter,servletName,CallBack) {
	
	showLoader();
		$.ajax({
			type : "GET",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : false,
			cache:false,

			success : function(data,statusText) {
				CallBack(data);
				hideLoader();
			},

			error : function(request, status, error) {
				alert("Please Contact System Administrator!");
				hideLoader();				
			}
		});
		
}//end of ajaxCallInv

/**
This function is used to 
change the mode investment 
details.
Author - John 2204.1
Date - 01042022 1218
 */
function fnChngMode(index){
	
	var invDetsModeObj = document.getElementById('hdnFldInvDetsMode'+index);
	if(invDetsModeObj.value == 'Q')invDetsModeObj.value = 'U';

}//end of fnChngMode

/**
This function is used to populate 
the investment objective details 
from the DB.
Author: John 2204.1,
Date: 01042022 1432
 */
function fnPopulateInvObjDets(invObjDataset,index){
	
	var invObjTblObj = document.getElementById('tblInvObjDetsDlgId'+index).tBodies[0];
	
	for(var io=0; io<invObjDataset.length; io++){
		
		var invObjDets   = invObjDataset[io];
		var invObjRowObj = invObjTblObj.insertRow(io);
	
		var selInvObjVal = invObjDets.selInvObj;
		var childDivObj  = invObjDets.selChildName;
		var childNameVal = selInvObjVal == 'Education Planning' ? ' ('+childDivObj+')' : '';
		var lblYrsToVal  = selInvObjVal == 'Education Planning' ? 'Years to Tertiary' : 
					 	   selInvObjVal == 'Retirement Planning' ? 'Years to Retirement' : 
					 	   selInvObjVal == 'CPF-RP' ? 'Years to Retirement' : '';
		
		
		var percAccDivObj 		  = invObjDets.txtFldAccumltnPerc;
		var yrsToDivObj  		  = invObjDets.txtFldYrsToRetOrTer;
		var selDisbursmentBy 	  = invObjDets.selDisbursmentBy;
		var txtFldDisWithdrawYear = invObjDets.txtFldDisWithdrawYear;
		var txtFldYrsOfDisbrsmnt  = invObjDets.txtFldYrsOfDisbrsmnt;
		var txtFldDisAnnualAmt    = invObjDets.txtFldDisAnnualAmt;
		
		var hdnFldInvObjCreatedBy = invObjDets.hdnFldInvObjCreatedBy;
		var hdnFldInvObjCreatedDt = invObjDets.hdnFldInvObjCreatedDt;
		var priFldInvObjectiveId  = invObjDets.priFldInvObjectiveId;
		
		var cell0 = invObjRowObj.insertCell(0);
			cell0.innerHTML = '';
			
			cell0.innerHTML += '<td width="40%">';
			cell0.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Investment Objective</label>';
			cell0.innerHTML += '  <p style="font-size:13pt;">'+selInvObjVal+childNameVal+'</p>';
			cell0.innerHTML += '  <span style="font-size:8pt;color:rgb(54, 162, 235);"></span>';
			cell0.innerHTML += '</td>';
		
		var cell1 = invObjRowObj.insertCell(1);
			cell1.innerHTML = '';
			
			cell1.innerHTML += '<td width="20%">';
			cell1.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Allocation (%)</label>';
			cell1.innerHTML += '  <p style="font-size:13pt;">'+percAccDivObj+'</p>';
			cell1.innerHTML += '</td>';
		
		var cell2 = invObjRowObj.insertCell(2);
			cell2.innerHTML = '';
		
			cell2.innerHTML += '<td width="20%">';
			cell2.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">'+lblYrsToVal+'</label>';
			cell2.innerHTML += '  <p style="font-size:13pt;">'+yrsToDivObj+'</p>';
			cell2.innerHTML += '</td>';
		
		var cell3 = invObjRowObj.insertCell(3);
			cell3.innerHTML = '';
			
			cell3.innerHTML += '<td width="20%">';
			cell3.innerHTML += '  <label style="font-size:8pt;" class="control-label text-muted">Action</label><br>';
			cell3.innerHTML += '  <a href="javascript:void(0);">Edit</a> | ';
			cell3.innerHTML += '  <a href="javascript:void(0);" onclick="fnInvObjDelConf(this);">Delete</a>';
			cell3.innerHTML += '  <input type="hidden" name="selInvstObj'+index+'" value="'+selInvObjVal+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldAccumltnPerc'+index+'" value="'+percAccDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldYrsToRetOrTer'+index+'" value="'+yrsToDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="selChildName'+index+'" value="'+childDivObj+'" />';
			cell3.innerHTML += '  <input type="hidden" name="selDisbursmentBy'+index+'" value="'+selDisbursmentBy+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldDisWithdrawYear'+index+'" value="'+txtFldDisWithdrawYear+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldYrsOfDisbrsmnt'+index+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
			cell3.innerHTML += '  <input type="hidden" name="txtFldDisAnnualAmt'+index+'" value="'+txtFldDisAnnualAmt+'" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedBy'+index+'" value="'+hdnFldInvObjCreatedBy+'" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjCreatedDt'+index+'" value="'+hdnFldInvObjCreatedDt+'" />';
			cell3.innerHTML += '  <input type="hidden" name="priFldInvObjectiveId'+index+'" value="'+priFldInvObjectiveId+'" />';
			cell3.innerHTML += '  <input type="hidden" name="hdnFldInvObjMode'+index+'" value="Q" />';
			cell3.innerHTML += '</td>';
		
	}//end of for
	
}//end of fnPopulateInvObjDets

/**
This function is used to validate 
the mandatory fields in the 
Investment screen.
Author - John 22.4.1
Date - 05042022 1257
 */
function fnValidateInvMandFields(){
	
	var selInvOwnership    = document.getElementById('selInvOwnershipDlg');
	var selPaymentMethod   = document.getElementById('selPaymentMethodDlg');
	var selInvType 		   = document.getElementById('selInvTypeDlg');
	var selInvInsName 	   = document.getElementById('selInvInstituteNameDlg');
	var txtFldInvInsName   = document.getElementById('txtFldInvInstituteNameDlg');
	var selInvDesc 		   = document.getElementById('selInvDescDlg');
	var txtFldInvDesc 	   = document.getElementById('txtFldInvDescDlg');
	var hdnFldInvIsCstmIns = document.getElementById('hdnFldInvIsCustomInstituteDlg');
	var hdnFldInvIsCstmDes = document.getElementById('hdnFldInvIsCustomDescriptnDlg');
	
	
	if(!validateMandatoryFlds(selInvOwnership,'Please select ownership.')){
		fnFocusInvDlgTab('BASIC');
		return false;
	}//end of if
	
	if(!validateMandatoryFlds(selPaymentMethod,'Please select payment method.')){
		ifnFocusInvDlgTab('BASIC');
		return false;
	}//end of if
	
	if(!validateMandatoryFlds(selInvType,'Please select investment type.')){
		fnFocusInvDlgTab('BASIC');
		return false;
	}//end of if
	
	
	if(hdnFldInvIsCstmIns.value == 'N') {
		
		if(!validateMandatoryFlds(selInvInsName,'Please select the name of the institution.')){
			fnFocusInvDlgTab('BASIC');
			return false;
		}//end of if
		
	} else{
		
		if(!validateMandatoryFlds(txtFldInvInsName,'Please key-in the name of the institution.')){
			fnFocusInvDlgTab('BASIC');
			return false;
		}//end of if
		
	}//end of if
		
	if(hdnFldInvIsCstmDes.value == 'N'){
		
		if(!validateMandatoryFlds(selInvDesc,'Please select the description of investment.')){
			fnFocusInvDlgTab('BASIC');
			return false;
		}//end of if
		
	} else{
		
		if(!validateMandatoryFlds(txtFldInvDesc,'Please key-in the description of investment.')){
			fnFocusInvDlgTab('BASIC');
			return false;
		}//end of if
		
	}//end of if
	
	
	//validating RSP tab
	if(!fnValidateRSPDets()) return false;
	
	//validating dividend tab
	if(!fnValidateDividendDets()) return false;
	
	var tblInvObjDetsObj = document.getElementById('tblInvObjDetsDlgId');
	
	if(tblInvObjDetsObj.tBodies[0].rows.length == 0){
		showAlert('Please add investment objective.');
		fnFocusInvDlgTab('OBJECTIVE');
		return false;
	}//end of if
	
	if(!fnValidateInvObjAccuPerc(tblInvObjDetsObj)) return false;
	
	var txtFldInvPeriod = document.getElementById('txtFldInvPeriodDlg'); 
	
	if(!validateMandatoryFlds(txtFldInvPeriod,'Please key-in the period of investment.')){
		fnFocusInvDlgTab('OBJECTIVE');
		return false;
	}//end of if
	
	return true;
}//end of fnValidateInvMandFields

/**
This function is used to validate 
the RSP mandatory fields if RSP 
investment exists.
Author - John 22.4.1,
Date - 05042022 1239
 */
function fnValidateRSPDets(){
	
	var selRSPExists = document.getElementById('selRSPExistsDlg');
	
	if(selRSPExists.value == 'Y'){
					   
		var txtFldRSPAmt = document.getElementById('txtFldRSPAmtDlg');
		var selInvFreq   = document.getElementById('selInvFreqDlg');
		var txtFldRSPYrs = document.getElementById('txtFldRSPYrsDlg');
					   	   
		
		if(!validateMandatoryFlds(txtFldRSPAmt,'Please key-in RSP investment amount.')){
			fnFocusInvDlgTab('RSP');
			return false;
		}//end of if
		
		if(!validateMandatoryFlds(selInvFreq,'Please key-in RSP investment frequency.')){
			fnFocusInvDlgTab('RSP');
			return false;
		}//end of if
		
		if(!validateMandatoryFlds(txtFldRSPYrs,'Please key-in Years of RSP investment.')){
			fnFocusInvDlgTab('RSP');
			return false;
		}//end of if
		
	}//end of if
	
	return true;
}//end of fnValidateRSPDets

/**
This function is used to validate 
the dividende related fields if 
dividend is not reinvested.
Author - John 22.4.1
Date - 05042022 1420
 */
 function fnValidateDividendDets(){
	
	var selIsDividendReinv = document.getElementById('selIsDividendReinvDlg');
							 
	if(selIsDividendReinv.value == 'N'){
		
		var selDividendBasedOn = document.getElementById('selDividendBasedOnDlg');
		var txtFldPARVal 	   = document.getElementById('txtFldPARValDlg');
		var txtFldDividendRate = document.getElementById('txtFldDividendRateDlg');
		var selDivPaymentMode  = document.getElementById('selDivPaymentModeDlg');
		var txtFldAnnualDivAmt = document.getElementById('txtFldAnnualDivAmtDlg');
							 	 
		if(!validateMandatoryFlds(selDividendBasedOn,'Please select dividend based on.')){
			fnFocusInvDlgTab('DIVIDEND');
			return false;
		}//end of if
		
		if(selDividendBasedOn.value == 'PAR'){
			if(!validateMandatoryFlds(txtFldPARVal,'Please key-in PAR value.')){
				fnFocusInvDlgTab('DIVIDEND');
				return false;
			}//end of if
		}//end of if
		
		if(!validateMandatoryFlds(txtFldDividendRate,'Please key-in dividend rate.')){
			fnFocusInvDlgTab('DIVIDEND');
			return false;
		}//end of if
		
		if(!validateMandatoryFlds(selDivPaymentMode,'Please select dividend payment mode.')){
			fnFocusInvDlgTab('DIVIDEND');
			return false;
		}//end of if
		
		if(!validateMandatoryFlds(txtFldAnnualDivAmt,'Please key-in annual dividend amount.')){
			fnFocusInvDlgTab('DIVIDEND');
			return false;
		}//end of if
		
	}//end of if
	
	return true;
}//end of fnValidateDividendDets

function fnValidateInvDets(){
	
	var indexIdArr = document.getElementsByName('hdnFldInvDetsIndex');
	
	if(indexIdArr){
		
		for(var val=0; val<indexIdArr.length; val++){
		
			if(!fnValidateInvMandFields(indexIdArr[val].value))return false;
		
		}//end of for	
	}//end of if
	
	return true;
}//end of fnValidateInvDets

/**
This function will be triggered
on the screen is loaded.
Name - John 22.4.1,
Author - 11042022 1140
 */
function fnFIPAInvOnLoadevnt(){
	
	//fnLoadInvObjProjtnForSumm();
	
}//end of fnFIPAInvOnLoadevnt

/**
This functions is used to load the 
date picker for the passed id as
parameter.
Author - 
 */
function fnLoadInvDatePicker(strDateId){
	
	$('#'+strDateId).datetimepicker(dateOptions).on("change", function() {
		checkDateFormat($(this));
	});
	
}//end of fnLoadInvDatePicker


/**
This function is used to focus the 
investment dialog tab based on the 
given parameter.
Author - John 22.4.1
Date - 11042022 1342
 */
function fnFocusInvDlgTab(strTabName){
	
	var divInvBasicDets    = $('#divInvBasicDets');
	var lnkInvBasicDets    = $('#lnkInvBasicDets');
	
	var divInvRSPDets 	   = $('#divInvRSPDets');
	var lnkInvRSPDets 	   = $('#lnkInvRSPDets');
	
	var divInvNAVDets 	   = $('#divInvNAVDets');
	var lnkInvNAVDets 	   = $('#lnkInvNAVDets');
	
	var divInvDividendDets = $('#divInvDividendDets');
	var lnkInvDividendDets = $('#lnkInvDividendDets');
	
	var divInvObjsDets	   = $('#divInvObjsDets');
	var lnkInvObjsDets 	   = $('#lnkInvObjsDets');
	
	switch(strTabName){
		
		case 'BASIC':
		
			divInvBasicDets.addClass('active');
			lnkInvBasicDets.addClass('active');
			divInvBasicDets.removeClass('fade');
			divInvBasicDets.addClass('fade in');
			
			if(divInvRSPDets.hasClass('active'))divInvRSPDets.removeClass('active');
			if(lnkInvRSPDets.hasClass('active'))lnkInvRSPDets.removeClass('active');
			if(divInvRSPDets.hasClass('fade in'))divInvRSPDets.removeClass('fade in');
			
			if(divInvNAVDets.hasClass('active'))divInvNAVDets.removeClass('active');
			if(lnkInvNAVDets.hasClass('active'))lnkInvNAVDets.removeClass('active');
			if(divInvNAVDets.hasClass('fade in'))divInvNAVDets.removeClass('fade in');
			
			if(divInvDividendDets.hasClass('active'))divInvDividendDets.removeClass('active');
			if(lnkInvDividendDets.hasClass('active'))lnkInvDividendDets.removeClass('active');
			if(divInvDividendDets.hasClass('fade in'))divInvDividendDets.removeClass('fade in');
			
			if(divInvObjsDets.hasClass('active'))divInvObjsDets.removeClass('active');
			if(lnkInvObjsDets.hasClass('active'))lnkInvObjsDets.removeClass('active');
			if(divInvObjsDets.hasClass('fade in'))divInvObjsDets.removeClass('fade in');
			
		break;
		
		case 'RSP':
			
			
			
			if(divInvBasicDets.hasClass('active'))divInvBasicDets.removeClass('active');
			if(lnkInvBasicDets.hasClass('active'))lnkInvBasicDets.removeClass('active');
			if(divInvBasicDets.hasClass('fade in'))divInvBasicDets.removeClass('fade in');
			
			divInvRSPDets.addClass('active');
			lnkInvRSPDets.addClass('active');
			divInvRSPDets.removeClass('fade');
			divInvRSPDets.addClass('fade in');
			
			if(divInvNAVDets.hasClass('active'))divInvNAVDets.removeClass('active');
			if(lnkInvNAVDets.hasClass('active'))lnkInvNAVDets.removeClass('active');
			if(divInvNAVDets.hasClass('fade in'))divInvNAVDets.removeClass('fade in');
			
			if(divInvDividendDets.hasClass('active'))divInvDividendDets.removeClass('active');
			if(lnkInvDividendDets.hasClass('active'))lnkInvDividendDets.removeClass('active');
			if(divInvDividendDets.hasClass('fade in'))divInvDividendDets.removeClass('fade in');
			
			if(divInvObjsDets.hasClass('active'))divInvObjsDets.removeClass('active');
			if(lnkInvObjsDets.hasClass('active'))lnkInvObjsDets.removeClass('active');
			if(divInvObjsDets.hasClass('fade in'))divInvObjsDets.removeClass('fade in');
		
		break;
		
		case 'NAV':
			
			if(divInvBasicDets.hasClass('active'))divInvBasicDets.removeClass('active');
			if(lnkInvBasicDets.hasClass('active'))lnkInvBasicDets.removeClass('active');
			if(divInvBasicDets.hasClass('fade in'))divInvBasicDets.removeClass('fade in');
			
			if(divInvRSPDets.hasClass('active'))divInvRSPDets.removeClass('active');
			if(lnkInvRSPDets.hasClass('active'))lnkInvRSPDets.removeClass('active');
			if(divInvRSPDets.hasClass('fade in'))divInvRSPDets.removeClass('fade in');
			
			divInvNAVDets.addClass('active');
			lnkInvNAVDets.addClass('active');
			divInvNAVDets.removeClass('fade');
			divInvNAVDets.addClass('fade in');
			
			if(divInvDividendDets.hasClass('active'))divInvDividendDets.removeClass('active');
			if(lnkInvDividendDets.hasClass('active'))lnkInvDividendDets.removeClass('active');
			if(divInvDividendDets.hasClass('fade in'))divInvDividendDets.removeClass('fade in');
			
			if(divInvObjsDets.hasClass('active'))divInvObjsDets.removeClass('active');
			if(lnkInvObjsDets.hasClass('active'))lnkInvObjsDets.removeClass('active');
			if(divInvObjsDets.hasClass('fade in'))divInvObjsDets.removeClass('fade in');
		
		break;
		
		case 'DIVIDEND':
		
			if(divInvBasicDets.hasClass('active'))divInvBasicDets.removeClass('active');
			if(lnkInvBasicDets.hasClass('active'))lnkInvBasicDets.removeClass('active');
			if(divInvBasicDets.hasClass('fade in'))divInvBasicDets.removeClass('fade in');
			
			if(divInvRSPDets.hasClass('active'))divInvRSPDets.removeClass('active');
			if(lnkInvRSPDets.hasClass('active'))lnkInvRSPDets.removeClass('active');
			if(divInvRSPDets.hasClass('fade in'))divInvRSPDets.removeClass('fade in');
			
			if(divInvNAVDets.hasClass('active'))divInvNAVDets.removeClass('active');
			if(lnkInvNAVDets.hasClass('active'))lnkInvNAVDets.removeClass('active');
			if(divInvNAVDets.hasClass('fade in'))divInvNAVDets.removeClass('fade in');
			
			divInvDividendDets.addClass('active');
			lnkInvDividendDets.addClass('active');
			divInvDividendDets.removeClass('fade');
			divInvDividendDets.addClass('fade in');
			
			if(divInvObjsDets.hasClass('active'))divInvObjsDets.removeClass('active');
			if(lnkInvObjsDets.hasClass('active'))lnkInvObjsDets.removeClass('active');
			if(divInvObjsDets.hasClass('fade in'))divInvObjsDets.removeClass('fade in');
		
		break;
		
		case 'OBJECTIVE':
		
			if(divInvBasicDets.hasClass('active'))divInvBasicDets.removeClass('active');
			if(lnkInvBasicDets.hasClass('active'))lnkInvBasicDets.removeClass('active');
			if(divInvBasicDets.hasClass('fade in'))divInvBasicDets.removeClass('fade in');
			
			if(divInvRSPDets.hasClass('active'))divInvRSPDets.removeClass('active');
			if(lnkInvRSPDets.hasClass('active'))lnkInvRSPDets.removeClass('active');
			if(divInvRSPDets.hasClass('fade in'))divInvRSPDets.removeClass('fade in');
			
			if(divInvNAVDets.hasClass('active'))divInvNAVDets.removeClass('active');
			if(lnkInvNAVDets.hasClass('active'))lnkInvNAVDets.removeClass('active');
			if(divInvNAVDets.hasClass('fade in'))divInvNAVDets.removeClass('fade in');
			
			if(divInvDividendDets.hasClass('active'))divInvDividendDets.removeClass('active');
			if(lnkInvDividendDets.hasClass('active'))lnkInvDividendDets.removeClass('active');
			if(divInvDividendDets.hasClass('fade in'))divInvDividendDets.removeClass('fade in');
			
			divInvObjsDets.addClass('active');
			lnkInvObjsDets.addClass('active');
			divInvObjsDets.removeClass('fade');
			divInvObjsDets.addClass('fade in');
		
		break;
		
		case 'PROJECTION':
		
			if(divInvBasicDets.hasClass('active'))divInvBasicDets.removeClass('active');
			if(lnkInvBasicDets.hasClass('active'))lnkInvBasicDets.removeClass('active');
			if(divInvBasicDets.hasClass('fade in'))divInvBasicDets.removeClass('fade in');
			
			if(divInvRSPDets.hasClass('active'))divInvRSPDets.removeClass('active');
			if(lnkInvRSPDets.hasClass('active'))lnkInvRSPDets.removeClass('active');
			if(divInvRSPDets.hasClass('fade in'))divInvRSPDets.removeClass('fade in');
			
			if(divInvNAVDets.hasClass('active'))divInvNAVDets.removeClass('active');
			if(lnkInvNAVDets.hasClass('active'))lnkInvNAVDets.removeClass('active');
			if(divInvNAVDets.hasClass('fade in'))divInvNAVDets.removeClass('fade in');
			
			if(divInvDividendDets.hasClass('active'))divInvDividendDets.removeClass('active');
			if(lnkInvDividendDets.hasClass('active'))lnkInvDividendDets.removeClass('active');
			if(divInvDividendDets.hasClass('fade in'))divInvDividendDets.removeClass('fade in');
			
			if(divInvObjsDets.hasClass('active'))divInvObjsDets.removeClass('active');
			if(lnkInvObjsDets.hasClass('active'))lnkInvObjsDets.removeClass('active');
			if(divInvObjsDets.hasClass('fade in'))divInvObjsDets.removeClass('fade in');
			
		break;
		
	}//end of switch
	
}//end of fnFocusInvDlgTab

/**
This function is used to validate 
the PAR or NAV value of the 
dividend based on the select 
value.
Author - John 22.4.1,
Date - 11042022 1709
 */
function fnValidateDivBasedOn(selObj){
	
	var txtFldPARVal = document.getElementById('txtFldPARValDlg');
					   
	if(selObj.value == 'PAR'){
		
		txtFldPARVal.disabled = false;
		txtFldPARVal.focus();
		
	}else{
		
		txtFldPARVal.disabled = true;
		txtFldPARVal.value = '';
		
	}//end of if
	
	fnCalcDivPerAnnum();
	
}//end of fnValidateDivBasedOn


/**
This function is used to calculate 
the dividend per annum value based 
on the PAR or NAV.
Author - John 22.4.1,
Date - 11042022 1904
 */
function fnCalcDivPerAnnum(){
	
	var selDividendBasedOnObj = document.getElementById('selDividendBasedOnDlg');
	var txtFldDividendRateObj = document.getElementById('txtFldDividendRateDlg');
	var txtFldAnnualDivAmtObj = document.getElementById('txtFldAnnualDivAmtDlg');
	
	var txtFldDivRate 		  = isEmpty(txtFldDividendRateObj.value) ? 0 : 
								parseFloat(txtFldDividendRateObj.value);		
	  		
	if(selDividendBasedOnObj.value == 'PAR'){
		
						  		
		var txtFldPARValObj = document.getElementById('txtFldPARValDlg');
		var txtFldPARVal    = isEmpty(txtFldPARValObj.value) ? 0 : parseFloat(txtFldPARValObj.value);
		
		txtFldAnnualDivAmtObj.value = roundNumber(txtFldPARVal*(txtFldDivRate/100));
		
	}else if(selDividendBasedOnObj.value == 'NAV'){
		
		var txtFldCurrPFNavObj  = document.getElementById('txtFldCurrPFNavDlg');
		var txtFldCurrPFNavVal  = isEmpty(txtFldCurrPFNavObj.value) ? 0 : parseFloat(txtFldCurrPFNavObj.value);
		
		txtFldAnnualDivAmtObj.value = roundNumber(txtFldCurrPFNavVal*(txtFldDivRate/100));
		
	}//end of if
	
}//end of fnCalcDivPerAnnum

/**
This function is used to validate 
the periods of investment with 
the Yrs of RSP investment if 
available.
Author - John 22.4.1,
Date - 11042022 1904
 */
function fnValidtPriodsOfInv(index){
	
	var txtFldInvPeriodObj = isEmpty(index) ? 
						   	 document.getElementById('txtFldInvPeriodDlg') : 
						  	 document.getElementById('txtFldInvPeriod'+index);
						  		
	var txtFldRSPYrsObj    = isEmpty(index) ? 
						  	 document.getElementById('txtFldRSPYrsDlg') : 
						  	 document.getElementById('txtFldRSPYrs'+index);
	
	if((!isEmpty(txtFldRSPYrsObj.value)) && 
	   (!isEmpty(txtFldInvPeriodObj.value))){
		
		if(parseInt(txtFldRSPYrsObj.value) > parseInt(txtFldInvPeriodObj.value)){
		
			showAlert('Periods of invesment cannot be lesser than RSP Yrs. of investment.');
			if(isEmpty(index)){fnFocusInvDlgTab('OBJECTIVE')}
			txtFldInvPeriodObj.value = '';
			txtFldInvPeriodObj.focus();
			return false;
			
		}//end of if
		
	}//end of if	  	 
	
	
}//end of fnValidtPriodsOfInv

/**
This function is used to update 
the product summary details 
into their respective 
fields
Author - John 22.4.1,
Date - 12042022 1207
 */
function fnUpdInvProdSummDets(strCallFrom,index){
	
	switch(strCallFrom){
		
		case 'INV_YEARS' :
			document.getElementById('txtFldInvPeriod'+index).value = 
			document.getElementById('locPeriodOfInv'+index).value;
		break;
		
		case 'ROI' :
			document.getElementById('txtFldEstRoI'+index).value = 
			document.getElementById('locEstROI'+index).value;
		break;
		
		case 'NAV' :
			document.getElementById('txtFldCurrPFNav'+index).value = 
			document.getElementById('locCurrNAV'+index).value;
		break;
		
		case 'IS_RSP_EXIST' :
			document.getElementById('selRSPExists'+index).value = 
			document.getElementById('locIsRSPExist'+index).value;
		break;
		
		case 'RSP_AMT' :
			document.getElementById('txtFldRSPAmt'+index).value = 
			document.getElementById('locRSPAmt'+index).value;
		break;
		
		case 'INV_FREQ' :
			document.getElementById('selInvFreq'+index).value = 
			document.getElementById('locInvFreq'+index).value;
		break;
		
	}//end of switch
	
	fnCalcFV(index);
}//end of fnUpdInvProdSummDets

/**
This function is used to get 
the latest NAV price based on 
the given date parameter.
Author - John 22.4.1,
Date - 12/04/2022 1629
 */
function fnGetLatestNAVPrice(index){
	
	var strNAVDate  = isEmpty(index) ? 
					  document.getElementById('txtFldInvDateDlg').value : 
					  document.getElementById('txtFldInvDate'+index).value;
	
	var strFMCode   = isEmpty(index) ? 
					  document.getElementById('selInvInstituteNameDlg').value : 
					  document.getElementById('selInvInstituteName'+index).value;
	
	var strFundCode = isEmpty(index) ? 
					  document.getElementById('selInvDescDlg').value : 
					  document.getElementById('selInvDesc'+index).value;
					  
	var strNAVObj   = isEmpty(index) ? 
					  document.getElementById('txtFldNAVPriceDlg') : 
					  document.getElementById('txtFldNAVPrice'+index);
	
	
	if(isEmpty(strFMCode)){
		showAlert('Name of the institution cannot be empty.');
		fnFocusInvDlgTab('BASIC');
		return false;
	}//end of if
	
	
	if(isEmpty(strFundCode)){
		showAlert('Description of investment cannot be empty.');
		fnFocusInvDlgTab('BASIC');
		return false;
	}//end of if
	
	if(isEmpty(strNAVDate)){
		showAlert('NAV date cannot be empty.');
		return false;
	}//end of if
	
	
	if(!isDate(strNAVDate)){
		showAlert('Date invested is not valid.');
		return false;
	}//end of if
	
	var invNAVParams = "DBCALLFOR=GET_NAV_PRICE&strNAVDate="+strNAVDate+
					   "&strFMCode="+strFMCode+"&strFundCode="+strFundCode;
		
		showLoader(); 
		ajaxCallInv(invNAVParams,servletName,function(Data){ 
			
			var retval = Data;  
			
			hideLoader(); 
			
	 		for ( var val in retval) { 
		
	 			var jsnRes = retval[val];

	 			if (jsnRes["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}//end of if
	 			
	 			if (jsnRes["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			}//end of if

				var strNAVPrice = jsnRes["strNAVPrice"];
	 			
	 			if(isEmpty(strNAVPrice)){
					showAlert('NAV price not available.');
					return false;
				}//end of if
	 			
	 			
	 			strNAVObj.value = strNAVPrice;
	 			fnCalcCurrNAV(index);
	 		}//end of if
	 		
		}); 
	
}//end of fnGetLatestNAVPrice

/**
This function is used to validation 
to total accumulation percentage 
of the investment objective. 
The sum should always be 100.
Author - John 2204.1,
Date - 18042022 1738
 */
function fnValidateInvObjAccuPerc(tblInvObjDetsObj){
	
	var tblBodyObj = tblInvObjDetsObj.tBodies[0];
	var totAccuPerc = 0.0;
	
	for(var io=0; io<tblBodyObj.rows.length; io++){
		
		var douAccuPerc = parseFloat(tblBodyObj.rows[io].cells[3].children[5].value);
		totAccuPerc = totAccuPerc+douAccuPerc;
		
	}//end of for
	
	if(totAccuPerc != 100){
		
		showAlert('Percentage of accumulation for the invesment objective(s) should always be 100.');
		fnFocusInvDlgTab('OBJECTIVE');
		return false;
		
	}//end of for
	
	return true;
}//end of fnValidateInvObjAccuPerc

/**
This function is used to update respective 
values into the investment projection 
screen variables.
Author - John 2204.1,
Date - 18042022 1755
 */
function fnUpdInvstmntProjDets(fldObj,fldType,index){
	
	switch(fldType){
		
		case 'INV_PERIOD':
			document.getElementById('locPeriodOfInv'+index).value = fldObj.value;
		break;	
		
		case 'ROI':
			document.getElementById('locEstROI'+index).value = fldObj.value;
		break;	
		
		case 'NAV':
			document.getElementById('locCurrNAV'+index).value = fldObj.value;
		break;	
		
		case 'RSP_EXIST':
			document.getElementById('locIsRSPExist'+index).value = fldObj.value;
		break;	
		
		case 'RSP_AMT':
			document.getElementById('locRSPAmt'+index).value = fldObj.value;
		break;	
		
		case 'FREQ':
			document.getElementById('locInvFreq'+index).value = fldObj.value;
		break;	
		
	}//end of switch
	
}//end of fnUpdInvstmntProjDets


function fnLoadInvObjProjtnForSumm(invProjctnObjFinArr){
	
	
	var yrsArr = [];
	var fvArr = [];
	
	invProjctnObjFinArr.forEach(function(fvObj){
		yrsArr.push(fvObj.invProjctnYr);
		fvArr.push(fvObj.invProjctnFV);
	});
			
	fnDestroyExistChart('invProjectnCanvasSumm');
	
	var ctx = document.getElementById('invProjectnCanvasSumm').getContext("2d");
	
	window.chartColors = {
		red: 'rgb(255, 99, 132)',
		orange: 'rgb(255, 159, 64)',
		yellow: 'rgb(255, 205, 86)',
		green: 'rgb(75, 192, 192)',
		blue: 'rgb(54, 162, 235)',
		purple: 'rgb(153, 102, 255)',
		grey: 'rgb(231,233,237)'
	};
	
	var config = {
	  type: 'line',
	  data: {
	    labels: yrsArr,
	    datasets: [{
	      label: "Investment Details 1",
	      borderColor: window.chartColors.green,
	      data: fvArr,
	      fill: false,
		  cubicInterpolationMode: 'monotone'
	    }]
	  },
	  options: {
		responsive: false,
	    tooltips: {
			mode: 'label',
			callbacks: {
            label: function(t, d) {
               var xLabel = d.datasets[t.datasetIndex].label;
               var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
               return xLabel + ': ' + yLabel;
            }
         }
		},
	    hover: {mode: 'nearest',intersect: true},
	    scales: {
	      xAxes: [{display: true,scaleLabel: {display: true,labelString: 'Year'}}],
	      yAxes: [{
         ticks: {
           callback: function(value) {
             return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
           }
         }
       }]
	    },
	    legend: {display: false}
	  }
	};
	
	new Chart(ctx, config);
		
	//fnLoadInvObjProjtn('invProjectnCanvasSumm',yearsArr,fvArr);
}//end of fnLoadInvObjProjtnForSumm


/**
This function is used to show the 
investment row delete 
confirmation message.
Author - John,
Date - 19082022 1045
 */
function fnShowInvDetsRowDelConfMsg(lnkObj){
	
	$('#headInvTitleId').html('Investment Delete Confirmation');
	$('#divInvMsgId').html('Are you sure, you want to delete this row?');
	$('#divInvCondMsgId').modal('show');
	glblRowObj = lnkObj.parentElement.parentElement;
	
}//end of fnShowInvDetsRowDelConfMsg

/**
This function is used to delete the 
investment row from DHTML table.
Author - John,
Date - 19082022 1045
 */
function fnDelInvDetsRow(){
	
	var tblRowObj  = glblRowObj;
	var tblBodyObj = tblRowObj.parentElement;
	var strModeObj = tblRowObj.cells[0].children[20];
	
	var delTBodyObj = document.getElementById('tblInvDetsDelTBodyId');
	var hInvObjIndx = tblRowObj.cells[0].children[1].value;
	var invObjsMode = document.getElementsByName('hdnFldInvObjMode'+hInvObjIndx);
	
	for(var io=0; io<invObjsMode.length; io++){
		invObjsMode[io].value = 'D';
	}//end of for
	
	strModeObj.value = 'D';
	delTBodyObj.innerHTML += tblRowObj.innerHTML;
	tblBodyObj.deleteRow(tblRowObj.rowIndex-1);
	
	fnResetInvRows(tblBodyObj);
	fnShowInvDetsCharts(tblBodyObj);
	fnShowInvProjctnLC(tblBodyObj)
	$('#divInvCondMsgId').modal('hide');
	fnChkInvExist(tblBodyObj);
	
}//end of fnDelInvDetsRow

/**
This function is used to reset the 
investment DHTML table details.
Author - JOhn,
Date - 19082022 1056
 */
function fnResetInvRows(tblBodyObj){
	
	for(var slno=0; slno<tblBodyObj.rows.length; slno++){
		
		tblBodyObj.rows[slno].cells[0].children[0].children[0].innerHTML = 'Investment Details '+(slno+1);
		
	}//end of for
	
}//end of fnResetInvRows

/**
This function is used to validate the 
investment summary details based on 
the keyed-in investment values.
Author - John,
Date - 22082022 1048
 */
function fnAddInvDetsRow(invDatasetVal){
	
	var summTblObj = document.getElementById('tblInvDetsSummaryId').tBodies[0];
	var summTblLen = summTblObj.rows.length;
	
	var selOwnerVal = '';
	var paymntMthdVal = '';
	var typeOfInvVal = '';
	var instnVal = '';
	var invDescVal = '';
	var txtFldInvAmt = '';
	var selPFAnalysis = '';
	var txtFldEstRoI = '';
	var txtFldInvAccNo = '';
	var selRSPExists = '';
	var txtFldRSPAmt = '';
	var selInvFreq = '';
	var txtFldRSPYrs = '';
	var txtFldInvDate = '';
	var txtFldNAVPrice = '';
	var txtFldUnits = '';
	var txtFldCurrPFNav = '';
	var selIsDividendReinv = '';
	var selDividendBasedOn = '';
	var txtFldPARVal = '';
	var txtFldDividendRate = '';
	var selDivPaymentMode = '';
	var txtFldAnnualDivAmt = '';
	var txtFldInvPeriod = '';
	var hdnFldInvIsCustomInstitute = '';
	var hdnFldInvIsCustomDescriptn = '';
	var instnTxt = '';
	var invDescTxt = '';
	var priFldInvFnaInvestmentId = '';
	var hdnFldInvDetsMode = 'Q';
	var hdnFldInvCreatedBy = '';
	var hdnFldInvCreatedDt = ''; 
	
	var fvObj = {};
	
	
	if(invDatasetVal == null){
		
		selOwnerVal   = document.getElementById('selInvOwnershipDlg').value;
		paymntMthdVal = document.getElementById('selPaymentMethodDlg').value;
		typeOfInvVal  = document.getElementById('selInvTypeDlg').value;
		
		var hdnInsVal 	  = document.getElementById('hdnFldInvIsCustomInstituteDlg').value;
		var hdnDescVal 	  = document.getElementById('hdnFldInvIsCustomDescriptnDlg').value;
		
		selInsObj 	  = document.getElementById('selInvInstituteNameDlg');
		instnTxt 	  = hdnInsVal == 'N' ? selInsObj.options[selInsObj.selectedIndex].text : 
					   		document.getElementById('txtFldInvInstituteNameDlg').value;
					   		
		selInvDescObj = document.getElementById('selInvDescDlg');
		invDescTxt    = hdnDescVal == 'N' ? selInvDescObj.options[selInvDescObj.selectedIndex].text : 
					   		document.getElementById('txtFldInvDescDlg').value;			   		
		
		instnVal 	  = hdnInsVal == 'N' ? selInsObj.value : 
					   		document.getElementById('txtFldInvInstituteNameDlg').value;
					   		
		invDescVal 	  = hdnDescVal == 'N' ? selInvDescObj.value : 
							document.getElementById('txtFldInvInstituteNameDlg').value;
		
		txtFldInvAmt = document.getElementById('txtFldInvAmtDlg').value;
		selPFAnalysis = document.getElementById('selPFAnalysisDlg').value;
		txtFldEstRoI = document.getElementById('txtFldEstRoIDlg').value;
		txtFldInvAccNo = document.getElementById('txtFldInvAccNoDlg').value;
		selRSPExists = document.getElementById('selRSPExistsDlg').value;
		txtFldRSPAmt = document.getElementById('txtFldRSPAmtDlg').value;
		selInvFreq = document.getElementById('selInvFreqDlg').value;
		txtFldRSPYrs = document.getElementById('txtFldRSPYrsDlg').value;
		txtFldInvDate = document.getElementById('txtFldInvDateDlg').value;
		txtFldNAVPrice = document.getElementById('txtFldNAVPriceDlg').value;
		txtFldUnits = document.getElementById('txtFldUnitsDlg').value;
		txtFldCurrPFNav = document.getElementById('txtFldCurrPFNavDlg').value;
		selIsDividendReinv = document.getElementById('selIsDividendReinvDlg').value;
		selDividendBasedOn = document.getElementById('selDividendBasedOnDlg').value;
		txtFldPARVal = document.getElementById('txtFldPARValDlg').value;
		txtFldDividendRate = document.getElementById('txtFldDividendRateDlg').value;
		selDivPaymentMode = document.getElementById('selDivPaymentModeDlg').value;
		txtFldAnnualDivAmt = document.getElementById('txtFldAnnualDivAmtDlg').value;
		txtFldInvPeriod = document.getElementById('txtFldInvPeriodDlg').value;
		hdnFldInvIsCustomInstitute = document.getElementById('hdnFldInvIsCustomInstituteDlg').value;
		hdnFldInvIsCustomDescriptn = document.getElementById('hdnFldInvIsCustomDescriptnDlg').value;
		priFldInvFnaInvestmentId = makeid(17);
		hdnFldInvDetsMode = 'I';
		
	}else{
		
		selOwnerVal = invDatasetVal.selInvOwnership == undefined ? '' : invDatasetVal.selInvOwnership;
		paymntMthdVal = invDatasetVal.selPaymentMethod == undefined ? '' : invDatasetVal.selPaymentMethod;
		typeOfInvVal = invDatasetVal.selInvType == undefined ? '' : invDatasetVal.selInvType;
		instnVal = invDatasetVal.selInvInstituteName == undefined ? '' : invDatasetVal.selInvInstituteName;
		invDescVal = invDatasetVal.selInvDesc == undefined ? '' : invDatasetVal.selInvDesc;
		txtFldInvAmt = invDatasetVal.txtFldInvAmt == undefined ? '' : invDatasetVal.txtFldInvAmt;
		selPFAnalysis = invDatasetVal.selPFAnalysis == undefined ? '' : invDatasetVal.selPFAnalysis;
		txtFldEstRoI = invDatasetVal.txtFldEstRoI == undefined ? '' : invDatasetVal.txtFldEstRoI;
		txtFldInvAccNo = invDatasetVal.txtFldInvAccNo == undefined ? '' : invDatasetVal.txtFldInvAccNo;
		selRSPExists = invDatasetVal.selRSPExists == undefined ? '' : invDatasetVal.selRSPExists;
		txtFldRSPAmt = invDatasetVal.txtFldRSPAmt == undefined ? '' : invDatasetVal.txtFldRSPAmt;
		selInvFreq = invDatasetVal.selInvFreq == undefined ? '' : invDatasetVal.selInvFreq;
		txtFldRSPYrs = invDatasetVal.txtFldRSPYrs == undefined ? '' : invDatasetVal.txtFldRSPYrs;
		txtFldInvDate = invDatasetVal.txtFldInvDate == undefined ? '' : fnConDBDtToScrDt(invDatasetVal.txtFldInvDate);
		txtFldNAVPrice = invDatasetVal.txtFldNAVPrice == undefined ? '' : invDatasetVal.txtFldNAVPrice;
		txtFldUnits = invDatasetVal.txtFldUnits == undefined ? '' : invDatasetVal.txtFldUnits;
		txtFldCurrPFNav = invDatasetVal.txtFldCurrPFNav == undefined ? '' : invDatasetVal.txtFldCurrPFNav;
		selIsDividendReinv = invDatasetVal.selIsDividendReinv == undefined ? '' : invDatasetVal.selIsDividendReinv;
		selDividendBasedOn = invDatasetVal.selDividendBasedOn == undefined ? '' : invDatasetVal.selDividendBasedOn;
		txtFldPARVal = invDatasetVal.txtFldPARVal == undefined ? '' : invDatasetVal.txtFldPARVal;
		txtFldDividendRate = invDatasetVal.txtFldDividendRate == undefined ? '' : invDatasetVal.txtFldDividendRate;
		selDivPaymentMode = invDatasetVal.selDivPaymentMode == undefined ? '' : invDatasetVal.selDivPaymentMode;
		txtFldAnnualDivAmt = invDatasetVal.txtFldAnnualDivAmt == undefined ? '' : invDatasetVal.txtFldAnnualDivAmt;
		txtFldInvPeriod = invDatasetVal.txtFldInvPeriod == undefined ? '' : invDatasetVal.txtFldInvPeriod;
		hdnFldInvIsCustomInstitute = invDatasetVal.hdnFldInvIsCustomInstitute == undefined ? '' : invDatasetVal.hdnFldInvIsCustomInstitute;
		hdnFldInvIsCustomDescriptn = invDatasetVal.hdnFldInvIsCustomDescriptn == undefined ? '' : invDatasetVal.hdnFldInvIsCustomDescriptn;
		priFldInvFnaInvestmentId = invDatasetVal.priFldInvFnaInvestmentId == undefined ? '' : invDatasetVal.priFldInvFnaInvestmentId;
		
		if(instnVal == 'AFPL'){
			
			instnTxt = 'Avallis Financial Pte Ltd';
			invDescTxt = invDescVal;
			
		}else{
			
			var strFMFundNames = fnGetFmFundNames(instnVal,invDescVal);
			
			if(strFMFundNames.indexOf('^') > -1){
				
				var strFMName   = strFMFundNames.split('^')[0];
				var strFundName = strFMFundNames.split('^')[1];
				
				instnTxt   = strFMName;
				invDescTxt = strFundName;
				
			}//end of if
			
		}//end of if
		
		
		hdnFldInvDetsMode = 'Q';
		hdnFldInvCreatedDt = invDatasetVal.hdnFldInvCreatedDt == undefined ? '' : invDatasetVal.hdnFldInvCreatedDt;
		hdnFldInvCreatedBy = invDatasetVal.hdnFldInvCreatedBy == undefined ? '' : invDatasetVal.hdnFldInvCreatedBy;
		
	}//end of if
		
	fvObj.txtFldCurrPFNav = txtFldCurrPFNav;
	fvObj.txtFldEstRoI    = txtFldEstRoI;
	fvObj.txtFldInvPeriod = txtFldInvPeriod;
	fvObj.txtFldRSPAmt    = txtFldRSPAmt;
	fvObj.selInvFreq      = selInvFreq;
	fvObj.selRSPExists    = selRSPExists;
	fvObj.priInvFnaInvId  = priFldInvFnaInvestmentId;
	
		
	var summRowObj = summTblObj.insertRow(summTblLen);
	
	var cell0 = summRowObj.insertCell(0);
	
	var selInvProjtnObj = document.createElement('SELECT');
	var calcFV = fnCalcFutureVal(fvObj);
	fnCalcFutureValForLC(fvObj,selInvProjtnObj);
	
	var cell0HTML = '';
	
		cell0HTML += '<div>';
		cell0HTML += '  <span style="font-weight:bold;">Investment Details '+(summTblLen+1)+'</span><br>';
		cell0HTML += '  <span>'+instnTxt+'</span><br>';
		cell0HTML += '  <span>'+invDescTxt+'</span><br>';
		cell0HTML += '  <span><b>Ownership: </b>'+selOwnerVal+'</span><br>';
		cell0HTML += '  <span><b>Type of Investment: </b>'+typeOfInvVal+'</span><br>';
		cell0HTML += '  <span><b>Payment Method: </b>'+paymntMthdVal+'</span><br>';
		
		if(calcFV>0){
			cell0HTML += '  <span><b>Future Value: </b>'+currencyFormat(parseFloat(calcFV))+'</span><br>';
		}else{
			cell0HTML += '  <span>&nbsp;</span><br>';
		}//end of if
		
		cell0HTML += '  <span id="spnInvObjDetsId'+summTblLen+'"></span>';
		
		cell0HTML += '</div>';
		cell0HTML += '<input type="hidden" name="hdnFldInvObjIndex" value="'+summTblLen+'" />';
		cell0HTML += '<input type="hidden" name="selInvOwnership" value="'+selOwnerVal+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvAmt" value="'+txtFldInvAmt+'" />';
		cell0HTML += '<input type="hidden" name="selPaymentMethod" value="'+paymntMthdVal+'" />';
		cell0HTML += '<input type="hidden" name="selPFAnalysis" value="'+selPFAnalysis+'" />';
		cell0HTML += '<input type="hidden" name="selInvType" value="'+typeOfInvVal+'" />';
		cell0HTML += '<input type="hidden" name="selInvInstituteName" value="'+instnVal+'" />';
		cell0HTML += '<input type="hidden" name="selInvDesc" value="'+invDescVal+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvAccNo" value="'+txtFldInvAccNo+'" />';
		cell0HTML += '<input type="hidden" name="txtFldRSPYrs" value="'+txtFldRSPYrs+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvDate" value="'+txtFldInvDate+'" />';
		cell0HTML += '<input type="hidden" name="txtFldNAVPrice" value="'+txtFldNAVPrice+'" />';
		cell0HTML += '<input type="hidden" name="txtFldUnits" value="'+txtFldUnits+'" />';
		cell0HTML += '<input type="hidden" name="selIsDividendReinv" value="'+selIsDividendReinv+'" />';
		cell0HTML += '<input type="hidden" name="selDividendBasedOn" value="'+selDividendBasedOn+'" />';
		cell0HTML += '<input type="hidden" name="txtFldPARVal" value="'+txtFldPARVal+'" />';
		cell0HTML += '<input type="hidden" name="txtFldDividendRate" value="'+txtFldDividendRate+'" />';
		cell0HTML += '<input type="hidden" name="selDivPaymentMode" value="'+selDivPaymentMode+'" />';
		cell0HTML += '<input type="hidden" name="txtFldAnnualDivAmt" value="'+txtFldAnnualDivAmt+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvDetsMode" value="'+hdnFldInvDetsMode+'" />';
		cell0HTML += '<input type="hidden" name="priFldInvFnaInvestmentId" value="'+priFldInvFnaInvestmentId+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvCreatedBy" value="'+hdnFldInvCreatedBy+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvCreatedDt" value="'+hdnFldInvCreatedDt+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvIsCustomInstitute" value="'+hdnFldInvIsCustomInstitute+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvIsCustomDescriptn" value="'+hdnFldInvIsCustomDescriptn+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvFV" value="'+calcFV+'" />';
	
		if(invDatasetVal == null){
			
			var selInvstObj = document.getElementsByName('selInvstObjDlg');
		
			for(var io=0; io<selInvstObj.length; io++){
				
				var selInvObjVal = selInvstObj[io].value;
				var childDivVal  = document.getElementsByName('selChildNameDlg')[io].value;
				var percAccDivVal = document.getElementsByName('txtFldAccumltnPercDlg')[io].value;
				var yrsToDivVal   = document.getElementsByName('txtFldYrsToRetOrTerDlg')[io].value;
				var selDisbursmentBy = document.getElementsByName('selDisbursmentByDlg')[io].value;
				var txtFldDisWithdrawYear = document.getElementsByName('txtFldDisWithdrawYearDlg')[io].value;
				var txtFldYrsOfDisbrsmnt = document.getElementsByName('txtFldYrsOfDisbrsmntDlg')[io].value;
				var txtFldDisAnnualAmt = document.getElementsByName('txtFldDisAnnualAmtDlg')[io].value;
				
				cell0HTML += '<input type="hidden" name="selInvObj'+summTblLen+'" id="selInvObj'+summTblLen+io+'" value="'+selInvObjVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldAccumltnPerc'+summTblLen+'" id="txtFldAccumltnPerc'+summTblLen+io+'" value="'+percAccDivVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsToRetOrTer'+summTblLen+'" id="txtFldYrsToRetOrTer'+summTblLen+io+'" value="'+yrsToDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selChildName'+summTblLen+'" id="selChildName'+summTblLen+io+'" value="'+childDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selDisbursmentBy'+summTblLen+'" id="selDisbursmentBy'+summTblLen+io+'" value="'+selDisbursmentBy+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisWithdrawYear'+summTblLen+'" id="txtFldDisWithdrawYear'+summTblLen+io+'" value="'+txtFldDisWithdrawYear+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsOfDisbrsmnt'+summTblLen+'" id="txtFldYrsOfDisbrsmnt'+summTblLen+io+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisAnnualAmt'+summTblLen+'" id="txtFldDisAnnualAmt'+summTblLen+io+'" value="'+txtFldDisAnnualAmt+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedBy'+summTblLen+'" id="hdnFldInvObjCreatedBy'+summTblLen+io+'" value="" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedDt'+summTblLen+'" id="hdnFldInvObjCreatedDt'+summTblLen+io+'" value="" />';
				cell0HTML += '<input type="hidden" name="priFldInvObjectiveId'+summTblLen+'" id="priFldInvObjectiveId'+summTblLen+io+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjMode'+summTblLen+'" id="hdnFldInvObjMode'+summTblLen+io+'" value="I" />';
				
			}//end of for
			
			cell0.innerHTML = cell0HTML;
			
			var selInvObj = document.getElementsByName('selInvObj'+summTblLen);
			
			for(var io=0; io<selInvObj.length; io++){
					
				var inObjId = makeid(17);
				document.getElementsByName("priFldInvObjectiveId"+summTblLen)[io].value = "IO_"+inObjId.substring(3,inObjId.length);
				
				var selInvObjVal = selInvObj[io].value;
				
				if(selInvObjVal == 'Retirement Planning'){
					
					var strRetPlngId = document.getElementsByName("priFldInvObjectiveId"+summTblLen)[io].value;
					var strDisbmntBy =  document.getElementsByName("selDisbursmentBy"+summTblLen)[io].value;
					var strAnnlAmt   =  document.getElementsByName("txtFldDisAnnualAmt"+summTblLen)[io].value;
					var strRetDisc 	 = instnTxt+' - '+invDescTxt;
					var strRetClsfy  = 'Investment';
					var strRetAgeFrm = '';
					var strRetAgeTo  = '';
					var strRetRoI    = '';
					var strAgeBasdOn = '';
					var strEsltnRate = txtFldEstRoI;
					var strAccltnPer = document.getElementsByName("txtFldAccumltnPerc"+summTblLen)[io].value;
					var strAcclAmt   = (calcFV/100)*strAccltnPer;
					
					if(selOwnerVal == 'Self'){
						
						strRetAgeFrm =  document.getElementById("retSelfAge").value;
						strRetAgeTo  =  document.getElementById("retSelfProjage").value;
						strRetRoI    =  document.getElementById("retSelfProjroi").value;
						strAgeBasdOn = 'SELF';
						
					}else{
						
						strRetAgeFrm =  document.getElementById("retSpsAge").value;
						strRetAgeTo  =  document.getElementById("retSpsProjage").value;
						
						if(selOwnerVal == 'Spouse'){
							
							strRetRoI    =  document.getElementById("retSpsProjroi").value;
							strAgeBasdOn = 'SPOUSE';
							
						}else{
							
							strRetRoI    =  document.getElementById("retFamProjroi").value;
							strAgeBasdOn = 'SELF';
							
						}//end of if
						
					}//end of if
					
					getincassrtRows(null,"N");
					var retIncmAssetTbl = document.getElementById('IncAssRetPlgtbl').tBodies[0];
					var lastRowObj =  retIncmAssetTbl.rows[retIncmAssetTbl.rows.length-1];
					
					if(strDisbmntBy == 'YEARS'){
		
						var period = strRetAgeTo - strRetAgeFrm;
						var annAmt = (-fnCalcPMT(strRetRoI, period, strAcclAmt, 0, "BEGINNING", "ANNUAL")).round(2);
					
					}else if(strDisbmntBy == 'AMOUNT'){
						
						var annAmt = parseFloat(strAnnlAmt).round(2);
						var period = fnGetNPERVal(strRetRoI, -annAmt, strAcclAmt, 0, true);	
					
					}//end of if
					
					var strRetIAFreq = strDisbmntBy == 'SINGLE' ? 'SINGLE' : 'REGULAR';
					var retIaAnnlAmtOrYrs = strDisbmntBy == 'YEARS' ? period : annAmt;
					
					lastRowObj.cells[0].children[2].value = makeid(17);
					lastRowObj.cells[0].children[3].value = strRetPlngId;
					lastRowObj.cells[2].children[0].value = strRetDisc;
					
					lastRowObj.cells[3].children[0].value = strRetClsfy;
					lastRowObj.cells[3].children[1].value = strRetClsfy;
					
					lastRowObj.cells[4].children[0].value = strAcclAmt;
					lastRowObj.cells[4].children[1].value = strRetIAFreq;
					lastRowObj.cells[4].children[2].value = strRetRoI;
					lastRowObj.cells[4].children[3].value = strEsltnRate;
					lastRowObj.cells[4].children[4].value = strDisbmntBy;
					lastRowObj.cells[4].children[5].value = retIaAnnlAmtOrYrs;
					
					lastRowObj.cells[5].children[0].value = strRetAgeFrm;
					lastRowObj.cells[5].children[1].value = strRetAgeTo;
					lastRowObj.cells[5].children[2].value = strAgeBasdOn;
					lastRowObj.cells[5].children[5].innerHTML = 'Start @ '+strRetAgeFrm+'<br>End @ '+strRetAgeTo;
					
					var cell4SpnElem = lastRowObj.cells[4].children[6];
						cell4SpnElem.innerHTML = '$'+annAmt+' '+strDisbmntBy+'<br>'+strRetRoI+'% RoI<br><a class="btn btn-default addinfoicon">';
					
					var $lastRow = $(lastRowObj);
	
					$lastRow.find("td:eq(4)").find('span').find('a').on("click",function(){
						fnShowRetAnnualAmtDets(strAcclAmt,annAmt,period,strRetRoI,strRetDisc,strDisbmntBy); 
					});
					
					applyToastrAlert("The keyed in Retirement Planning information will be populated in the income and assets available during retirement.");
					
					/*
					fnAddIncmAssetRetrmnt(
						strRetPlngId, strDisbmntBy, strRetDisc, strRetClsfy,
						strRetAgeFrm, strRetAgeTo, strRetRoI, strAgeBasdOn,
						strEsltnRate, strAcclAmt,strAnnlAmt);*/
				}//end of if
				
			}//end of for
		}else{
			
			var selInvObjs = invDatasetVal.fnaInvObjectiveDets;

			for(var io=0; io<selInvObjs.length; io++){
				
				var selInvObjVal = selInvObjs[io].selInvObj;
				var childDivVal  = selInvObjs[io].selChildName;
				var percAccDivVal = selInvObjs[io].txtFldAccumltnPerc;
				var yrsToDivVal   = selInvObjs[io].txtFldYrsToRetOrTer;
				var selDisbursmentBy = selInvObjs[io].selDisbursmentBy;
				var txtFldDisWithdrawYear = selInvObjs[io].txtFldDisWithdrawYear;
				var txtFldYrsOfDisbrsmnt = selInvObjs[io].txtFldYrsOfDisbrsmnt;
				var txtFldDisAnnualAmt = selInvObjs[io].txtFldDisAnnualAmt;
				var priFldInvObjectiveId = selInvObjs[io].priFldInvObjectiveId;
				var hdnFldInvObjCreatedBy = selInvObjs[io].hdnFldInvObjCreatedBy;
				var hdnFldInvObjCreatedDt = fnConvDBDttoScrDt(selInvObjs[io].hdnFldInvObjCreatedDt);
				
				cell0HTML += '<input type="hidden" name="selInvObj'+summTblLen+'" value="'+selInvObjVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldAccumltnPerc'+summTblLen+'" value="'+percAccDivVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsToRetOrTer'+summTblLen+'" value="'+yrsToDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selChildName'+summTblLen+'" value="'+childDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selDisbursmentBy'+summTblLen+'" value="'+selDisbursmentBy+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisWithdrawYear'+summTblLen+'" value="'+txtFldDisWithdrawYear+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsOfDisbrsmnt'+summTblLen+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisAnnualAmt'+summTblLen+'" value="'+txtFldDisAnnualAmt+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedBy'+summTblLen+'" value="'+hdnFldInvObjCreatedBy+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedDt'+summTblLen+'" value="'+hdnFldInvObjCreatedDt+'" />';
				cell0HTML += '<input type="hidden" name="priFldInvObjectiveId'+summTblLen+'" value="'+priFldInvObjectiveId+'" id="priFldInvObjectiveId'+summTblLen+io+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjMode'+summTblLen+'" value="Q" />';
				
			}//end of for
			
			cell0.innerHTML = cell0HTML;
		}//end of if
		
		var selInvObj = document.getElementsByName('selInvObj'+summTblLen);
		var invObjLen = selInvObj.length;
		
		if(invObjLen >0){
			
			var ioSpnElem = document.getElementById('spnInvObjDetsId'+summTblLen);
			var cellIOHTML= '';
			
			cellIOHTML += '<b>Investment Objective(s): </b>';
			cellIOHTML += '  <ol>';
			for(var io=0; io<invObjLen; io++){
			
				var invObj   = selInvObj[io].value;
				var accPerc  = document.getElementsByName('txtFldAccumltnPerc'+summTblLen)[io].value;
				var childVal = document.getElementsByName('selChildName'+summTblLen)[io].value;
				var modeVal  = document.getElementsByName('hdnFldInvObjMode'+summTblLen)[io].value;
				
				if(invObj == 'Education Planning') invObj += ' ('+childVal+')';
				
				if(modeVal != 'D'){
					cellIOHTML += '  <li>'+invObj+' - '+accPerc+'%</li>';
				}//end of if
				
				
			}//end of for
			cellIOHTML += '  <ol>';
			
			ioSpnElem.innerHTML = cellIOHTML;
		}//end of if
		
		fnShowInvDetsCharts(summTblObj);
		
	var cell1 = summRowObj.insertCell(1);
		cell1.innerHTML = '<input type="text" name="txtFldInvPeriod" class="editable" onkeypress="return fnValidateNum(event,this,2,0);" onchange="fnCalcRowLvlFV(this,\'NON_RSP\');" maxlength="2" style="width:99%;" value="'+txtFldInvPeriod+'" />';
		
	var cell2 = summRowObj.insertCell(2);
		cell2.innerHTML = '<input type="text" name="txtFldEstRoI" class="editable" onchange="fnCalcRowLvlFV(this,\'NON_RSP\');" maxlength="5" style="width:95%;" value="'+txtFldEstRoI+'" />';
		
	var cell3 = summRowObj.insertCell(3);
		cell3.innerHTML = '<input type="text" name="txtFldCurrPFNav" class="editable" onchange="fnCalcRowLvlFV(this,\'NON_RSP\');" style="width:99%;" value="'+txtFldCurrPFNav+'" />';
		
		cell3.appendChild(selInvProjtnObj);
		cell3.children[1].style.display = 'none';
		
	var cell4 = summRowObj.insertCell(4);
	var cell4HTML = '';
		cell4HTML += '<table>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Any RSP?</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <select name="selRSPExists" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');"><option value="">--SELECT--</option><option value="Y">Yes</option><option value="N">No</option></select>';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Amt ($):</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <input type="text" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');" name="txtFldRSPAmt" style="width:99%;" value="'+txtFldRSPAmt+'" />';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Frequency:</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <select name="selInvFreq" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');"><option value="">--SELECT--</option><option value="ANNUAL">ANNUAL</option><option value="SEMI ANNUAL">SEMI ANNUAL</option><option value="QUARTERLY">QUARTERLY</option><option value="MONTHLY">MONTHLY</option><option value="SINGLE">SINGLE</option></select>';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '</table>';
		
		cell4.innerHTML = cell4HTML;
		
	var cell5 = summRowObj.insertCell(5);
		cell5.innerHTML = '<a href="javascript:void(0);" class="invCRUDOpsCls" onclick="fnEditInvDets(this);" title="Edit"><i class="fa fa-pencil-square-o"></i></a> | <a href="javascript:void(0);" class="invCRUDOpsCls" onclick="fnShowInvDetsRowDelConfMsg(this);" title="Delete"><i class="fa fa-trash"></i></a>';
	
	
	cell4.children[0].rows[0].cells[1].children[0].value = selRSPExists;
	cell4.children[0].rows[2].cells[1].children[0].value = selInvFreq;
	document.getElementById('divInvDetsSummaryId').style.display = '';
	
	fnShowInvProjctnLC(summTblObj);
}//end of fnAddInvDetsRow

function fnShowInvDetsCharts(tblObj){
	
	var pieChartLbl = [];
	var picChartVal = [];
	var picChartCCA = [];
	var picColCodes = '#017d6f,#084e7f,#dd7547,#b40f3a,#ff9d4f,#14765a,#084e7f,#ff9d4f,#ec0548,#c7782c';
	
	for(var pc=0; pc<tblObj.rows.length; pc++){
		
		var calcFV = tblObj.rows[pc].cells[0].children[26].value;
		
		if(calcFV >0){
			
			picChartVal.push(parseFloat(calcFV));
			pieChartLbl.push(tblObj.rows[pc].cells[0].children[0].children[0].innerHTML);
			picChartCCA.push(picColCodes.split(',')[pc]);
			
		}//end of if
		
	}//end of for
	
	var pieChartId = 'invProjtnPieChart';
		fnDestroyExistChart(pieChartId);
	
	var ctx = document.getElementById(pieChartId).getContext("2d");

	var config = {
	  type: 'pie',
	  data: {
	    labels: pieChartLbl,
	    datasets: [{
	      label: "Future Value",
	      backgroundColor: picChartCCA,
	      data: picChartVal,
	      fill: false,
		  cubicInterpolationMode: 'monotone'
	    }]
	  },
	  options: {
		responsive: false,
	    tooltips: {
			mode: 'label',
			callbacks: {
            // this callback is used to create the tooltip label
	        label: function(t, data) {
	          // get the data label and data value to display
	          // convert the data value to local string so it uses a comma seperated number
	          var dataLabel = data.labels[t.index];
	          var value = ': $ ' + data.datasets[t.datasetIndex].data[t.index].toLocaleString();
	
	          // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
	          if (Chart.helpers.isArray(dataLabel)) {
	            // show value on first line of multiline label
	            // need to clone because we are changing the value
	            dataLabel = dataLabel.slice();
	            dataLabel[0] += value;
	          } else {
	            dataLabel += value;
	          }
	
	          // return the text to display on the tooltip
	          return dataLabel;
	        }
         }
		},
	    hover: {mode: 'nearest',intersect: true},
	    legend: {display: true}
	  }
	};
	
	new Chart(ctx, config);
	
}//end of fnShowInvDetsCharts

function fnCalcRowLvlFV(fldObj,callFrm){
	
	var rowObj = null;
	
	if(callFrm == 'NON_RSP'){
		
		rowObj = fldObj.parentElement.parentElement;
		
	}else if(callFrm == 'RSP'){
		
		rowObj = fldObj
				.parentElement.parentElement.parentElement
				.parentElement.parentElement.parentElement;
				
	}//end of if
	
	var txtFldInvIndex  = rowObj.cells[0].children[1].value;
	var txtFldInvPeriod = rowObj.cells[1].children[0].value;
	var txtFldEstRoI 	= rowObj.cells[2].children[0].value;
	var txtFldCurrPFNav = rowObj.cells[3].children[0].value;
	var selRSPExists	= rowObj.cells[4].children[0].tBodies[0].rows[0].cells[1].children[0].value;
	var txtFldRSPAmt 	= rowObj.cells[4].children[0].tBodies[0].rows[1].cells[1].children[0].value;
	var selInvFreq 		= rowObj.cells[4].children[0].tBodies[0].rows[2].cells[1].children[0].value;
	
	if(selRSPExists != 'Y'){
		
		rowObj.cells[4].children[0].tBodies[0].rows[1].cells[1].children[0].value = '';
		txtFldRSPAmt = 0;
		
		rowObj.cells[4].children[0].tBodies[0].rows[2].cells[1].children[0].value = '';
		selInvFreq = '';
		
	}//end of if
	
	var fvObj = {};
		fvObj.txtFldCurrPFNav = txtFldCurrPFNav;
		fvObj.txtFldEstRoI    = txtFldEstRoI;
		fvObj.txtFldInvPeriod = txtFldInvPeriod;
		fvObj.txtFldRSPAmt    = txtFldRSPAmt;
		fvObj.selInvFreq      = selInvFreq;
		fvObj.selRSPExists    = selRSPExists;
		
	var calcFV = fnCalcFutureVal(fvObj);
	
	if(calcFV>0){
		
		rowObj.cells[0].children[0].children[12].innerHTML = '<b>Future Value: </b>'+currencyFormat(parseFloat(calcFV));
		rowObj.cells[0].children[26].value = calcFV;
		
	}else{
		
		rowObj.cells[0].children[0].children[12].innerHTML = '&nbsp;';
		rowObj.cells[0].children[26].value = 0;
		
	}//end of if
	
	fnShowInvDetsCharts(rowObj.parentElement);
	rowObj.cells[0].children[20].value = 'U';
	
	var hInvObjIndx = rowObj.cells[0].children[1].value;
	var invObjsMode = document.getElementsByName('hdnFldInvObjMode'+hInvObjIndx);
		
	for(var io=0; io<invObjsMode.length; io++){
		invObjsMode[io].value = 'U';
	}//end of for
	
	fnCalcFutureValForLC(fvObj,rowObj.cells[3].children[1]);
	fnShowInvProjctnLC(rowObj.parentElement);
	
	
	//updating in the retirement planning screen if exists
	var selInvObjs = document.getElementsByName('selInvObj'+txtFldInvIndex);
	
	for(var io=0; io<selInvObjs.length; io++){
		
		var selInvObj = selInvObjs[io].value;
		
		if(selInvObj == 'Retirement Planning'){
			
			var invObjId = document.getElementsByName('priFldInvObjectiveId'+txtFldInvIndex)[io].value;
			var accPerc  = document.getElementsByName('txtFldAccumltnPerc'+txtFldInvIndex)[io].value;
			
			if(isEmpty(accPerc) || accPerc == null){
				accPerc = 0;
			}//end of if
			
			var fvForRP  = (calcFV/100)*accPerc;
			
			var retIncmAssetTbl = document.getElementById('IncAssRetPlgtbl').tBodies[0];
			var rowLen = retIncmAssetTbl.rows.length;
			
			for(var rt=0; rt<rowLen; rt++){
				
				var rowRefId = retIncmAssetTbl.rows[rt].cells[0].children[3].value;
				
				if(rowRefId == invObjId){
					
					var prdFrm = retIncmAssetTbl.rows[rt].cells[5].children[0].value;
					var prdTo  = retIncmAssetTbl.rows[rt].cells[5].children[1].value;
					var strRoI = retIncmAssetTbl.rows[rt].cells[4].children[3].value;
					var distBy = retIncmAssetTbl.rows[rt].cells[4].children[1].value;
					var strDic = retIncmAssetTbl.rows[rt].cells[2].children[0].value;
					
					prdFrm = isEmpty(prdFrm) || prdFrm == null ? 0 : prdFrm;
					prdTo  = isEmpty(prdTo ) || prdTo  == null ? 0 : prdTo;
					
					var prd = prdTo - prdFrm;
					var annAmt = (-fnCalcPMT(strRoI, prd, fvForRP, 0, "BEGINNING", "ANNUAL")).round(2);
					
					var fvHTML = '$'+annAmt+' '+distBy+'<br>'+strRoI+'% RoI<br><a class="btn btn-default addinfoicon"></a>';
					retIncmAssetTbl.rows[rt].cells[4].children[4].innerHTML = fvHTML;
					
					var $lastRow = $(retIncmAssetTbl.rows[rt]);
					
					$lastRow.find("td:eq(4)").find('span').find('a').on("click",function(){
						fnShowRetAnnualAmtDets(fvForRP,annAmt,prdFrm,prdTo,strRoI,strDic); 
					});
										
				}//end of if
				
			}//end of for
			
		}//end of if
		
	}//end of for
	
}//end of fnCalcRowLvlFV 


function fnCalcFutureValForLC(fvObj,selInvProjtnObj){
	
	var calcFV 		   = 0.0;
	var presentValue   = fvObj.txtFldCurrPFNav;
	var interestRate   = fvObj.txtFldEstRoI;
	var noOfYears      = fvObj.txtFldInvPeriod;
	var paymentVal     = fvObj.txtFldRSPAmt;
	var paymntFreq     = fvObj.selInvFreq;
	var selRSPExists   = fvObj.selRSPExists;
	var priInvFnaInvId = fvObj.priInvFnaInvId;
				
	selInvProjtnObj.options.length = 0;
				
	var paymntdueAt  = "BEGINNING";
	var currYear = new Date().getFullYear();
	
	if(!isEmpty(presentValue)){
		
		if(!isEmpty(interestRate)){
			
			if(!isEmpty(noOfYears)){
				
				for(var fv=1; fv<=noOfYears; fv++){
					
					var year = (currYear+fv);
					calcFV = fnInvCalculateFV(presentValue, interestRate, fv, paymentVal, paymntFreq, paymntdueAt,selRSPExists)
					selInvProjtnObj.options[selInvProjtnObj.options.length++] = 
					new Option(calcFV,year);
					
				}//end of for
		
			}//end of if
		}//end of if
	}//end of if
	
}//end of fnCalcFutureValForLC


/**
This function is used to fetch the 
account number if available 
in the AVIS database.
Author - John 22.9.1,
Date - 16/07/2022 1651
 */
function fnInvAccountNo(){
	
	var strPFDets = document.getElementById('selInvDescDlg').value;
	var strOwnership = document.getElementById('selInvOwnershipDlg').value;
	var strMainCateg = '';
	var strSubCateg = '';
	
	
	var strInvCateg = document.getElementById('selPaymentMethodDlg').value;
	
	var strNRIC = strOwnership == 'Spouse' ? 
				  document.getElementById('dfSpsNric').value : 
				  document.getElementById('dfSelfNric').value;
	
	if(!isEmpty(strPFDets)){
		
		if(strPFDets.indexOf('-') > -1){
			
			strMainCateg = strPFDets.split('-')[0];
			strSubCateg  = strPFDets.split('-')[1];
			
		}//end of if
		
	}//end of if
	
	if(!isEmpty(strNRIC) && 
	   !isEmpty(strInvCateg) && 
	   !isEmpty(strMainCateg) && 
	   !isEmpty(strSubCateg)){
		
		document.getElementById('txtFldInvAccNoDlg').value = '';
		
		var invNAVParams = "DBCALLFOR=GET_INV_ACCOUNT_NO&strNRIC="+strNRIC+
					   "&strInvCateg="+strInvCateg+"&strMainCateg="+strMainCateg+
					   "&strSubCateg="+strSubCateg;
		
		showLoader(); 
		ajaxCallInv(invNAVParams,servletName,function(Data){ 
			
			var retval = Data;  
			
			hideLoader(); 
			
	 		for ( var val in retval) { 
		
	 			var jsnRes = retval[val];

	 			if (jsnRes["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}//end of if
	 			
	 			if (jsnRes["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			}//end of if

				var strAccountNo = jsnRes["strAccountNo"];
	 			document.getElementById('txtFldInvAccNoDlg').value = strAccountNo;
	 			
	 		}//end of if
	 		
		}); 
		
	}//end of if
	
}//end of fnInvAccountNo

/**
This function is used to convert 
DB date to screen date.
Author - John,
Date - 19092022 1834
 */
function fnConDBDtToScrDt(strDBDt){
	
	var retDt = '';
	
	if(strDBDt != null || 
	   strDBDt != undefined || 
	   strDBDt != ''){
		
		var dt = strDBDt.split('-')[2];
		var mn = strDBDt.split('-')[1];
		var yr = strDBDt.split('-')[0];
		
		
		retDt = dt+'/'+mn+'/'+yr;
	}//end of if
	
	return retDt;
}//end of fnConDBDtToScrDt

/**
This function is used to load the 
fund manager details of the investments
from master.
Author - John 2204.1,
Date - 10102022 1619
 */
function fnLoadFundMgrDets(selInsObj){
	
	var hdnFMLst = document.getElementById('hdnFundMgrList');
	
	for(var fm=0; fm<hdnFMLst.options.length; fm++ ){
		
		selInsObj.options[selInsObj.options.length] = new Option(hdnFMLst[fm].text,hdnFMLst[fm].value);
		
	}//end of for
		
}//end of fnLoadPFDets

/**
This function is used to get the 
fund manager and fund name for 
the given fm code and fund 
code parameters.
Author - John,
Date - 10102022 1714
 */
function fnGetFmFundNames(strFMCode,strFundCode){
	
	var strFmFundNames = '';
	
	var invFmFundParams = "DBCALLFOR=GET_FM_FUND_NAMES&strFMCode="+strFMCode+
					   "&strFundCode="+strFundCode;
		
		
		ajaxCallInv(invFmFundParams,servletName,function(Data){ 
			
			var retval = Data;  
			
	 		for ( var val in retval) { 
		
	 			var jsnRes = retval[val];

	 			if (jsnRes["SESSION_EXPIRY"]) {
	 				window.location = BASE_URL +  SESSION_EXP_JSP;
	 				return;
	 			}//end of if
	 			
	 			if (jsnRes["DB_ERROR"]) {
	 				window.location = BASE_URL +  DB_EXP_JSP;
	 				return;
	 			}//end of if

				strFmFundNames = jsnRes["strFmFundNames"];
				
	 		}//end of if
	 		
		}); 
	
	return strFmFundNames;
}//end of fnGetFmFundNames

/**
This function is used to 
edit the investment 
objective details.
Author - John,
Date - 10102022 1816
 */
function fnEditInvObjDets(lnkObj){
	
	var cellObj = lnkObj.parentElement;
	
	var invObj  = cellObj.children[4].value;
	var accPerc = cellObj.children[5].value;
	var yrsToRT = cellObj.children[6].value;
	var chilNam = cellObj.children[7].value;
	var dismtBy = cellObj.children[8].value;
	var disWiYr = cellObj.children[9].value;
	var yrsToDs = cellObj.children[10].value;
	var annlAmt = cellObj.children[11].value;
	var invMode = cellObj.children[15].value;
	
	var selInvObj  = document.getElementById('selInvObjDlg');
	var allocObj   = document.getElementById('txtFldAccumltnPercDlg');
	var yrsToRTObj = document.getElementById('txtFldYrsToRetOrTerDlg');
	var selChldObj = document.getElementById('selChildNameDlg');
	var dismtByObj = document.getElementById('selDisbursmentByDlg');
	var witDrYrObj = document.getElementById('txtFldDisWithdrawYearDlg');
	var yrsToDsObj = document.getElementById('txtFldYrsOfDisbrsmntDlg');
	var annlAmtObj = document.getElementById('txtFldDisAnnualAmtDlg');
	
	
	selInvObj.value  = invObj;
	fnSelInvObjDets(selInvObj);
	
	allocObj.value   = accPerc;
	yrsToRTObj.value = yrsToRT;
	fnLoadChildNames();
	
	selChldObj.value = chilNam;
	dismtByObj.value = dismtBy;
	fnSetDisbrsmntBy(dismtByObj);
	
	witDrYrObj.value = disWiYr;
	yrsToDsObj.value = yrsToDs;
	annlAmtObj.value = annlAmt;
	
	document.getElementById('hdnFldInvObjMode').value = invMode.value == 'Q' ? 'U' : 'I';
	showFIPAModel('divInvObjDetsDlgId','Investment Objective Details'); 

	document.getElementById('btnAddInvObjDetsId').style.display = 'none';
	document.getElementById('btnUpdInvObjDetsId').style.display = '';
	
	document.getElementById('hdnFldInvObjDetsRowIndex').value = cellObj.parentElement.rowIndex;
	
}//end of fnEditInvObjDets


/**
This function is used to edit 
the investment details.
Author - John,
Date - 12102022 1153
 */
function fnEditInvDets(lnkObj){
	
	var rowObj = lnkObj.parentElement.parentElement;
	
	
	//Basic Details
	var hdnFldInvObjIndex   = rowObj.cells[0].children[1].value;
	var selInvOwnership     = rowObj.cells[0].children[2].value;
	var txtFldInvAmt 	    = rowObj.cells[0].children[3].value;
	var selPaymentMethod    = rowObj.cells[0].children[4].value;
	var selPFAnalysis 	    = rowObj.cells[0].children[5].value;
	var selInvType 			= rowObj.cells[0].children[6].value;
	var txtFldEstRoI	 	= rowObj.cells[2].children[0].value;
	var selInvInstituteName = rowObj.cells[0].children[7].value;
	var selInvDesc 		    = rowObj.cells[0].children[8].value;
	var txtFldInvAccNo 		= rowObj.cells[0].children[9].value;
	var hdnFldInvIsCustomInstitute = rowObj.cells[0].children[24].value;
	var hdnFldInvIsCustomDescriptn = rowObj.cells[0].children[25].value;
	
	
	//RSP Details
	var isRSPExists  = rowObj.cells[4].children[0].tBodies[0].rows[0].cells[1].children[0].value;
	var txtFldRSPAmt = rowObj.cells[4].children[0].tBodies[0].rows[1].cells[1].children[0].value;
	var selInvFreq   = rowObj.cells[4].children[0].tBodies[0].rows[2].cells[1].children[0].value;
	var txtFldRSPYrs = rowObj.cells[0].children[10].value;
	
	//NAV Details
	var txtFldInvDate   = rowObj.cells[0].children[11].value;
	var txtFldNAVPrice 	= rowObj.cells[0].children[12].value;
	var txtFldUnits 	= rowObj.cells[0].children[13].value;
	var txtFldCurrPFNav = rowObj.cells[3].children[0].value;
	
	//Dividend Details
	var selIsDividendReinv = rowObj.cells[0].children[14].value;
	var selDividendBasedOn = rowObj.cells[0].children[15].value;
	var txtFldPARVal 	   = rowObj.cells[0].children[16].value;
	var txtFldDividendRate = rowObj.cells[0].children[17].value;
	var selDivPaymentMode  = rowObj.cells[0].children[18].value;
	var txtFldAnnualDivAmt = rowObj.cells[0].children[19].value;
	var txtFldInvPeriod    = rowObj.cells[1].children[0].value;
	
	//Other Details
	var hdnFldInvDetsMode          = rowObj.cells[0].children[20].value;
	var priFldInvFnaInvestmentId   = rowObj.cells[0].children[21].value;
	var hdnFldInvFV				   = rowObj.cells[0].children[26].value;
	
	//to show the investment details dialog box
	fnAddInvestmentDets('UPDATE');
	
	document.getElementById('selInvOwnershipDlg').value = selInvOwnership;
	document.getElementById('txtFldInvAmtDlg').value = txtFldInvAmt;
	document.getElementById('selPaymentMethodDlg').value = selPaymentMethod;
	document.getElementById('selPFAnalysisDlg').value = selPFAnalysis;
	document.getElementById('selInvTypeDlg').value = selInvType;
	document.getElementById('txtFldEstRoIDlg').value = txtFldEstRoI;
	
	if(hdnFldInvIsCustomInstitute == 'Y'){
		
		document.getElementById('txtFldInvInstituteNameDlg').value = selInvInstituteName;
		fnSwitchInvField(document.getElementById('lnkInvInstituteNameDlg'),'INSTITUTE');
		
	}else{
		
		var selInsObj = document.getElementById('selInvInstituteNameDlg');
		
		if(selPFAnalysis == 'Y'){
			
			selInsObj.options.length = 0;
			selInsObj.options[0] = new Option('Avallis Financial Pte Ltd','AFPL');
			fnLoadPFDets(document.getElementById('selInvDescDlg'));
			
		}else{
			
			selInsObj.value = selInvInstituteName;
			fnLoadFundDets(selInsObj);
			
		}//end of if
		
		
	}//end of if
	
	if(hdnFldInvIsCustomInstitute == 'Y'){
		
		document.getElementById('txtFldInvDescDlg').value = selInvDesc;
		fnSwitchInvField(document.getElementById('lnkInvDescDlg'),'INVESTMENT');
		
	}else{
		
		document.getElementById('selInvDescDlg').value = selInvDesc;
		
	}//end of if
	
	document.getElementById('hdnFldInvIsCustomInstituteDlg').value = hdnFldInvIsCustomInstitute;
	document.getElementById('hdnFldInvIsCustomDescriptnDlg').value = hdnFldInvIsCustomDescriptn;
	document.getElementById('txtFldInvAccNoDlg').value = txtFldInvAccNo;
	
	//RSP details
	document.getElementById('selRSPExistsDlg').value = isRSPExists;
	fnChkForRSPInv(document.getElementById('selRSPExistsDlg'));
	document.getElementById('txtFldRSPAmtDlg').value = txtFldRSPAmt;
	document.getElementById('selInvFreqDlg').value   = selInvFreq;
	document.getElementById('txtFldRSPYrsDlg').value = txtFldRSPYrs;
	
	//NAV Details
	document.getElementById('txtFldInvDateDlg').value = txtFldInvDate;
	document.getElementById('txtFldNAVPriceDlg').value   = txtFldNAVPrice;
	document.getElementById('txtFldUnitsDlg').value = txtFldUnits;
	document.getElementById('txtFldCurrPFNavDlg').value = txtFldCurrPFNav;
	
	//Dividend Details
	document.getElementById('selIsDividendReinvDlg').value = selIsDividendReinv;
	fnChkDividendReinv(document.getElementById('selIsDividendReinvDlg'));
	
	document.getElementById('selDividendBasedOnDlg').value   = selDividendBasedOn;
	fnValidateDivBasedOn(document.getElementById('selDividendBasedOnDlg'));
	
	document.getElementById('txtFldPARValDlg').value = txtFldPARVal;
	document.getElementById('txtFldDividendRateDlg').value = txtFldDividendRate;
	document.getElementById('selDivPaymentModeDlg').value = selDivPaymentMode;
	document.getElementById('txtFldAnnualDivAmtDlg').value = txtFldAnnualDivAmt;
	
	var invObjTblObj = document.getElementById('tblInvObjDetsDlgId').tBodies[0];
	var selInvObjs = document.getElementsByName('selInvObj'+hdnFldInvObjIndex);
	var invObjLen = selInvObjs.length
	
	invObjTblObj.innerHTML = '';
	
	for(var io=0; io<invObjLen; io++){
		
		var selInvObj 			  = selInvObjs[io].value;
		var txtFldAccumltnPerc    = document.getElementsByName('txtFldAccumltnPerc'+hdnFldInvObjIndex)[io].value;
		var txtFldYrsToRetOrTer   = document.getElementsByName('txtFldYrsToRetOrTer'+hdnFldInvObjIndex)[io].value;
		var selChildName	      = document.getElementsByName('selChildName'+hdnFldInvObjIndex)[io].value;
		var selDisbursmentBy	  = document.getElementsByName('selDisbursmentBy'+hdnFldInvObjIndex)[io].value;
		var txtFldDisWithdrawYear = document.getElementsByName('txtFldDisWithdrawYear'+hdnFldInvObjIndex)[io].value;
		var txtFldYrsOfDisbrsmnt  = document.getElementsByName('txtFldYrsOfDisbrsmnt'+hdnFldInvObjIndex)[io].value;
		var txtFldDisAnnualAmt    = document.getElementsByName('txtFldDisAnnualAmt'+hdnFldInvObjIndex)[io].value;
		var hdnFldInvObjCreatedBy = document.getElementsByName('hdnFldInvObjCreatedBy'+hdnFldInvObjIndex)[io].value;
		var hdnFldInvObjCreatedDt = document.getElementsByName('hdnFldInvObjCreatedDt'+hdnFldInvObjIndex)[io].value;
		var priFldInvObjectiveId  = document.getElementsByName('priFldInvObjectiveId'+hdnFldInvObjIndex)[io].value;
		var hdnFldInvObjMode 	  = document.getElementsByName('hdnFldInvObjMode'+hdnFldInvObjIndex)[io].value;
		
		var invObjRowObj = invObjTblObj.insertRow(io);
		var childNameVal = selInvObj == 'Education Planning' ? ' ('+selChildName+')' : '';
		
		var lblYrsToVal  = selInvObj == 'Education Planning' ? 'Years to Tertiary' : 
				 	   	   selInvObj == 'Retirement Planning' ? 'Years to Retirement' : 
				 	   	   selInvObj == 'CPF-RP' ? 'Years to Retirement' : '';
				 	   
		var cell0 = invObjRowObj.insertCell(0);
			cell0.width = '40%';
		var cell0HTML = '';
		
		cell0HTML += '<label style="font-size:8pt;" class="control-label text-muted">Investment Objective</label>';
		cell0HTML += '<p style="font-size:13pt;">'+selInvObj+childNameVal+'</p>';
		cell0HTML += '<span style="font-size:8pt;color:rgb(54, 162, 235);"></span>';
		cell0.innerHTML = cell0HTML;
		
		var cell1 = invObjRowObj.insertCell(1);
			cell1.width = '20%';
		var cell1HTML = '';
		
		cell1HTML += '<label style="font-size:8pt;" class="control-label text-muted">Allocation (%)</label>';
		cell1HTML += '<p style="font-size:13pt;">'+txtFldAccumltnPerc+'</p>';
		cell1.innerHTML = cell1HTML;
		
		var cell2 = invObjRowObj.insertCell(2);
			cell2.width = '20%';
		var cell2HTML = '';
	
		cell2HTML += '<label style="font-size:8pt;" class="control-label text-muted">'+lblYrsToVal+'</label>';
		cell2HTML += '<p style="font-size:13pt;">'+txtFldYrsToRetOrTer+'</p>';
		cell2.innerHTML = cell2HTML;
		
		var cell3 = invObjRowObj.insertCell(3);
			cell3.width = '20%';
		var cell3HTML = '';
		
		cell3HTML += '  <label style="font-size:8pt;" class="control-label text-muted">Action</label><br>';
		cell3HTML += '  <a href="javascript:void(0);" onclick="fnEditInvObjDets(this);" >Edit</a> | ';
		cell3HTML += '  <a href="javascript:void(0);" onclick="fnInvObjDelConf(this);">Delete</a>';
		cell3HTML += '  <input type="hidden" name="selInvstObjDlg'+hdnFldInvObjIndex+'" value="'+selInvObj+'" />';
		cell3HTML += '  <input type="hidden" name="txtFldAccumltnPercDlg'+hdnFldInvObjIndex+'" value="'+txtFldAccumltnPerc+'" />';
		cell3HTML += '  <input type="hidden" name="txtFldYrsToRetOrTerDlg'+hdnFldInvObjIndex+'" value="'+txtFldYrsToRetOrTer+'" />';
		cell3HTML += '  <input type="hidden" name="selChildNameDlg'+hdnFldInvObjIndex+'" value="'+selChildName+'" />';
		cell3HTML += '  <input type="hidden" name="selDisbursmentByDlg'+hdnFldInvObjIndex+'" value="'+selDisbursmentBy+'" />';
		cell3HTML += '  <input type="hidden" name="txtFldDisWithdrawYearDlg'+hdnFldInvObjIndex+'" value="'+txtFldDisWithdrawYear+'" />';
		cell3HTML += '  <input type="hidden" name="txtFldYrsOfDisbrsmntDlg'+hdnFldInvObjIndex+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
		cell3HTML += '  <input type="hidden" name="txtFldDisAnnualAmtDlg'+hdnFldInvObjIndex+'" value="'+txtFldDisAnnualAmt+'" />';
		cell3HTML += '  <input type="hidden" name="hdnFldInvObjCreatedByDlg'+hdnFldInvObjIndex+'" value="'+hdnFldInvObjCreatedBy+'" />';
		cell3HTML += '  <input type="hidden" name="hdnFldInvObjCreatedDtDlg'+hdnFldInvObjIndex+'" value="'+hdnFldInvObjCreatedDt+'" />';
		cell3HTML += '  <input type="hidden" name="priFldInvObjectiveIdDlg'+hdnFldInvObjIndex+'" value="'+priFldInvObjectiveId+'" />';
		cell3HTML += '  <input type="hidden" name="hdnFldInvObjModeDlg'+hdnFldInvObjIndex+'" value="'+hdnFldInvObjMode+'" />';
		
		cell3.innerHTML = cell3HTML;
	}//end of for
	
	document.getElementById('txtFldInvPeriodDlg').value = txtFldInvPeriod;
	
	document.getElementById('hdnFldInvObjIndexDlg').value = hdnFldInvObjIndex;
	document.getElementById('hdnFldInvDetsModeDlg').value = hdnFldInvDetsMode == 'Q' ? 'U' : 'I';
	document.getElementById('hdnFldInvDetsRowIndex').value = rowObj.rowIndex;
	
}//end of fnEditInvDets


/**
This function is used to add 
asset and income available 
during retirement.
Author - John,
Date - 17102022 1706
 */
function fnAddIncmAssetRetrmnt(
	strRetPlngId, strDisbmntBy, strRetDisc, strRetClsfy,
	strRetAgeFrm, strRetAgeTo, strRetRoI, strAgeBasdOn,
	strEsltnRate, strAcclAmt,strAnnlAmt){

	var retIncmAssetTbl = document.getElementById('IncAssRetPlgtbl').tBodies[0];

	var rowLen = retIncmAssetTbl.rows.length;
	var rowObj = retIncmAssetTbl.insertRow(rowLen);
	
	rowObj.className = "odd";
	rowObj.role = 'row';
	rowObj.setAttribute('rowrefid',strRetPlngId);
	
	var cell0 = rowObj.insertCell(0);
		cell0.className = 'dt-head-center text-center';
		
	var cell0HTML  = '';
		cell0HTML += '<span>'+(rowLen+1)+'</span>';
		cell0HTML += '<input type="hidden" name="txtFldincassrtMode" value="I" class="fipaMode" />';
		cell0HTML += '<input type="hidden" name="txtFldIncAssId" value="'+makeid(17)+'">';
		cell0HTML += '<input type="hidden" class="rowrefid" name="txtFldIncAssRefId" value="'+strRetPlngId+'">';
	
	cell0.innerHTML = cell0HTML;
	
	var cell1 = rowObj.insertCell(1);
		cell1.className = 'dt-head-center text-center';
		
	var cell1HTML  = '';
		cell1HTML += '<div class="checkbox checkbox-primary text-center">';
		cell1HTML += '	<input type="checkbox" name="radincassrtSelect" id="radincassrt'+rowLen+'">';
		cell1HTML += '	<label for="radincassrt'+rowLen+'">&nbsp;</label>';
		cell1HTML += '</div>';
	
	cell1.innerHTML = cell1HTML;
	
	var cell2 = rowObj.insertCell(2);
		cell2.className = 'dt-head-center text-center';
		cell2.innerHTML = '<input type="text" name="txtFldIncAssDesc" value="'+strRetDisc+'" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="150" readonly="readonly">';
		
	var cell3 = rowObj.insertCell(3);
		cell3.className = 'dt-head-center text-center';
		
	var cell3HTML  = '';
		cell3HTML += '<select type="text" name="txtFldIncAssClsfy" class="form-control editable form-tablecolor" onmouseover="fipaTooltip(this);" maxlength="150" readonly="readonly" disabled="disabled">';
		cell3HTML += '	<option value="">--SELECT--</option>';
		cell3HTML += '	<option value="CPF Life">CPF Life</option>';
		cell3HTML += '	<option value="Investment">Investment</option>';
		cell3HTML += '	<option value="Life Insurance">Life Insurance</option>';
		cell3HTML += '	<option value="Properties">Properties</option>';
		cell3HTML += '	<option value="SRS">SRS</option>';
		cell3HTML += '	<option value="SRS/ Annual Withdrawal">SRS/ Annual Withdrawal</option>';
		cell3HTML += '	<option value="Others">Others</option>';
		cell3HTML += '</select>';
		cell3HTML += '<input type="hidden" name="txtFldIncAsstSubClsfy" value="'+strRetClsfy+'">';
		cell3.innerHTML = cell3HTML;
		
		cell3.children[0].value = strRetClsfy;
		
	var cell4 = rowObj.insertCell(4);
		cell4.className = 'dt-head-center text-center';
	
	if(strDisbmntBy == 'YEARS'){
		
		var period = strRetAgeTo - strRetAgeFrm;
		var annAmt = (-fnCalcPMT(strRetRoI, period, strAcclAmt, 0, "BEGINNING", "ANNUAL")).round(2);
	
	}else if(strDisbmntBy == 'AMOUNT'){
		
		var annAmt = parseFloat(strAnnlAmt).round(2);
		var period = fnGetNPERVal(strRetRoI, -annAmt, strAcclAmt, 0, true);	
	
	}//end of if
	
	var strRetIAFreq = strDisbmntBy == 'SINGLE' ? 'SINGLE' : 'REGULAR';
	var retIaAnnlAmtOrYrs = strDisbmntBy == 'YEARS' ? period : annAmt;
	
	
	var cell4HTML  = '';
		cell4HTML += '<input type="hidden" name="txtFldIncAssAmtofInc" value="'+strAcclAmt+'" />';
		cell4HTML += '<input type="hidden" name="selIncAssFreq" value="'+strRetIAFreq+'" />';
		cell4HTML += '<input type="hidden" name="txtFldIncAssEslrate" value="'+strEsltnRate+'" />';
		cell4HTML += '<input type="hidden" name="txtFldIncAssRoi" value="'+strRetRoI+'" />';
		cell4HTML += '<input type="hidden" name="retIaDisbrsmntBy" value="'+strDisbmntBy+'" />';
		cell4HTML += '<input type="hidden" name="retIaAnnlAmtOrYrs" value="'+retIaAnnlAmtOrYrs+'" />';
		cell4HTML += '<span onmouseover="fipaTooltip(this);" style="width: 183px; word-wrap: break-word;display: inline-block;">$'+annAmt+' '+strDisbmntBy+'<br>'+strRetRoI+'% RoI<br><a class="btn btn-default addinfoicon"></a></span>';
		cell4.innerHTML = cell4HTML;
		
	var cell5 = rowObj.insertCell(5);
		cell5.className = 'dt-head-center text-center';
	
	var cell5HTML  = '';
		cell5HTML += '<input type="hidden" name="txtFldIncAssAgePaySts" value="'+strRetAgeFrm+'" />';
		cell5HTML += '<input type="hidden" name="txtFldIncAssAgePayends" value="'+strRetAgeTo+'" />';
		cell5HTML += '<input type="hidden" name="selIncAssAgeBsOn" value="'+strAgeBasdOn+'" />';
		cell5HTML += '<input type="hidden" name="txtFldIncAssCrtdBy">';
		cell5HTML += '<input type="hidden" name="txtFldIncAssCrtdDate">';
		cell5HTML += '<span onmouseover="fipaTooltip(this);" style="width: 185px; word-wrap: break-word;display: inline-block;">Start @ '+strRetAgeFrm+'<br>End @ '+strRetAgeTo+'</span>';
		cell5.innerHTML = cell5HTML;
	
	var $lastRow = $(rowObj);
	
	$lastRow.find("td:eq(4)").find('span').find('a').on("click",function(){
		fnShowRetAnnualAmtDets(strAcclAmt,annAmt,period,strRetRoI,strRetDisc,strDisbmntBy); 
	});
			
	applyToastrAlert("The keyed in Retirement Planning information will be populated in the income and assets available during retirement.");
	
}//end of fnAddIncmAssetRetrmnt


$(document).on("click",".invCRUDOpsCls",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});

/**
This function is used to update the 
value and show the line chart 
for the investment projection.
Author - John,
Date - 18102022 1859
 */
function fnShowInvProjctnLC(summTblObj){
	
	var invProjctnObjArr = [];
	
	for(var ip=0; ip<summTblObj.rows.length; ip++){
		
		var selInvProjctnObj = summTblObj.rows[ip].cells[3].children[1];
		
		for(var sel=0; sel<selInvProjctnObj.options.length; sel++){
			
			var invProjctnYr = selInvProjctnObj.options[sel].value;
			var invProjctnFV = selInvProjctnObj.options[sel].text;
			
			var invProjctnObj = {};
			invProjctnObj.invProjctnYr = invProjctnYr;
			invProjctnObj.invProjctnFV = invProjctnFV;
			invProjctnObjArr.push(invProjctnObj);
			
		}//end of for
		
	}//end of for
	
	invProjctnObjArr.sort(function(a,b){
		return a.invProjctnYr - b.invProjctnYr;
	});
	
	var invProjctnObjFin = {};
	
	invProjctnObjArr.forEach(function(obj){
		
		if(invProjctnObjFin.hasOwnProperty(obj.invProjctnYr)){
			
			invProjctnObjFin[obj.invProjctnYr] = 
			parseFloat(invProjctnObjFin[obj.invProjctnYr]) + 
			roundNumber(parseFloat(obj.invProjctnFV));
			
		}else{
			invProjctnObjFin[obj.invProjctnYr] = roundNumber(parseFloat(obj.invProjctnFV));
		}//end of if
		
	});

	var invProjctnObjFinArr = [];
	
	for (var prop in invProjctnObjFin) {
	  invProjctnObjFinArr.push({ 'invProjctnYr': prop, 'invProjctnFV': invProjctnObjFin[prop] });
	}//end of for
	
	fnLoadInvObjProjtnForSumm(invProjctnObjFinArr)
}//end of fnShowInvProjctnLC

/**
This function is used to check whether 
investment found or not and display 
message or records accordingly.
Author - John,
Date - 07/11/2022 1655
 */
 function fnChkInvExist(invTblObj){
	
	if(invTblObj.rows.length >0){
		
		document.getElementById('divInvDetsSummaryId').style.display = '';
		document.getElementById('divInvDetsNotFoundId').style.display = 'none';
		
	}else{
		
		document.getElementById('divInvDetsSummaryId').style.display = 'none';
		document.getElementById('divInvDetsNotFoundId').style.display = '';
		
	}//end of if
	
}//end of fnChkInvExist

/**
This function is used to 
show investment report 
in a HTML formar.
Author - John,
Date - 11/11/2022 1506
 */
function fnShowInvRep(){
	
	if(document.getElementById('tblInvDetsSummaryId').tBodies[0].rows.length == 0){
		applyErrorToastrAlert("No records to generate investment report.");
		return false;
	}//end of if
	
	var strFNAId = $("#fnaId").val();
	window.open( BASEURL +"/ShowInvReport.do?strFNAId=" + strFNAId,'avallis');
	
}//end of fnShowInvRep


/**
This function is used to update 
the the investment details.
Author - John,
Date - 14/11/2022 1624
 */
function fnUpdInvDets(){
	
	//validating all the mandatory fields
	if(!fnValidateInvMandFields()) return false;
	
	//Basic Details
	var selOwner   = document.getElementById('selInvOwnershipDlg').value;
	var invAmt     = document.getElementById('txtFldInvAmtDlg').value;
	var selPayMthd = document.getElementById('selPaymentMethodDlg').value;
	var pfAnalFor  = document.getElementById('selPFAnalysisDlg').value;
	var invType    = document.getElementById('selInvTypeDlg').value;
	var estROI     = document.getElementById('txtFldEstRoIDlg').value;
	var selInvIns  = document.getElementById('selInvInstituteNameDlg').value;
	var txtInvIns  = document.getElementById('txtFldInvInstituteNameDlg').value;
	var selInvDesc = document.getElementById('selInvDescDlg').value;
	var txtInvDesc = document.getElementById('txtFldInvDescDlg').value;
	var invAccNo   = document.getElementById('txtFldInvAccNoDlg').value;
	var hdnInsVal  = document.getElementById('hdnFldInvIsCustomInstituteDlg').value;
	var hdnDescVal = document.getElementById('hdnFldInvIsCustomDescriptnDlg').value;
	
	var selInvObj  = document.getElementById('selInvInstituteNameDlg');
	var invDescObj = document.getElementById('selInvDescDlg');
	var instnTxt   = hdnInsVal  == 'N' ? selInvObj.options[selInvObj.selectedIndex].text : txtInvIns;
	var descTxt    = hdnDescVal == 'N' ? invDescObj.options[invDescObj.selectedIndex].text : txtInvDesc;
	var instnVal   = hdnInsVal  == 'N' ? selInvIns  : txtInvIns;
	var invDescVal = hdnDescVal == 'N' ? selInvDesc : txtInvDesc;
							
	//RSP Details
	var isRSPYN = document.getElementById('selRSPExistsDlg').value;
	var rspAmt  = document.getElementById('txtFldRSPAmtDlg').value;
	var invFreq = document.getElementById('selInvFreqDlg').value;
	var rspYrs  = document.getElementById('txtFldRSPYrsDlg').value;
				
	//NAV Details
	var invDate  = document.getElementById('txtFldInvDateDlg').value;
	var navPrice = document.getElementById('txtFldNAVPriceDlg').value;
	var units    = document.getElementById('txtFldUnitsDlg').value;
	var currNAV  = document.getElementById('txtFldCurrPFNavDlg').value;
				
	//Dividend Details
	var isDivReinv = document.getElementById('selIsDividendReinvDlg').value;
	var divBasedOn = document.getElementById('selDividendBasedOnDlg').value;
	var parVal     = document.getElementById('txtFldPARValDlg').value;
	var divRate    = document.getElementById('txtFldDividendRateDlg').value;
	var divPayMode = document.getElementById('selDivPaymentModeDlg').value;
	var annualAmt  = document.getElementById('txtFldAnnualDivAmtDlg').value;
	
	//Investemtn Objective Details
	var invPeriod = document.getElementById('txtFldInvPeriodDlg').value;
	
	var invRowIndx = document.getElementById('hdnFldInvDetsRowIndex').value;
	var summTblObj = document.getElementById('tblInvDetsSummaryId').tBodies[0];
	var rowObj 	   = summTblObj.rows[invRowIndx-1];
	var cell0Obj   = rowObj.cells[0];
	
	var calcFV = 0;
	var summTblLen = cell0Obj.children[1].value;
	var priInvId   = cell0Obj.children[21].value;
	var createdBy  = cell0Obj.children[23].value;
	var createdDt  = cell0Obj.children[24].value;

	var fvObj = {};
	fvObj.txtFldCurrPFNav = currNAV;
	fvObj.txtFldEstRoI    = estROI;
	fvObj.txtFldInvPeriod = invPeriod;
	fvObj.txtFldRSPAmt    = rspAmt;
	fvObj.selInvFreq      = invFreq;
	fvObj.selRSPExists    = isRSPYN;
	fvObj.priInvFnaInvId  = priInvId;
	
	calcFV = fnCalcFutureVal(fvObj);
	
	var cell0HTML = '';
	
		cell0HTML += '<div>';
		cell0HTML += '  <span style="font-weight:bold;">Investment Details '+(invRowIndx)+'</span><br>';
		cell0HTML += '  <span>'+instnTxt+'</span><br>';
		cell0HTML += '  <span>'+descTxt+'</span><br>';
		cell0HTML += '  <span><b>Ownership: </b>'+selOwner+'</span><br>';
		cell0HTML += '  <span><b>Type of Investment: </b>'+invType+'</span><br>';
		cell0HTML += '  <span><b>Payment Method: </b>'+selPayMthd+'</span><br>';
		
		if(calcFV>0){
			cell0HTML += '  <span><b>Future Value: </b>'+currencyFormat(parseFloat(calcFV))+'</span><br>';
		}else{
			cell0HTML += '  <span>&nbsp;</span><br>';
		}//end of if
		
		cell0HTML += '  <span id="spnInvObjDetsId'+summTblLen+'"></span>';
		
		cell0HTML += '</div>';
		cell0HTML += '<input type="hidden" name="hdnFldInvObjIndex" value="'+summTblLen+'" />';
		cell0HTML += '<input type="hidden" name="selInvOwnership" value="'+selOwner+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvAmt" value="'+invAmt+'" />';
		cell0HTML += '<input type="hidden" name="selPaymentMethod" value="'+selPayMthd+'" />';
		cell0HTML += '<input type="hidden" name="selPFAnalysis" value="'+pfAnalFor+'" />';
		cell0HTML += '<input type="hidden" name="selInvType" value="'+invType+'" />';
		cell0HTML += '<input type="hidden" name="selInvInstituteName" value="'+instnVal+'" />';
		cell0HTML += '<input type="hidden" name="selInvDesc" value="'+invDescVal+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvAccNo" value="'+invAccNo+'" />';
		cell0HTML += '<input type="hidden" name="txtFldRSPYrs" value="'+rspYrs+'" />';
		cell0HTML += '<input type="hidden" name="txtFldInvDate" value="'+invDate+'" />';
		cell0HTML += '<input type="hidden" name="txtFldNAVPrice" value="'+navPrice+'" />';
		cell0HTML += '<input type="hidden" name="txtFldUnits" value="'+units+'" />';
		cell0HTML += '<input type="hidden" name="selIsDividendReinv" value="'+isDivReinv+'" />';
		cell0HTML += '<input type="hidden" name="selDividendBasedOn" value="'+divBasedOn+'" />';
		cell0HTML += '<input type="hidden" name="txtFldPARVal" value="'+parVal+'" />';
		cell0HTML += '<input type="hidden" name="txtFldDividendRate" value="'+divRate+'" />';
		cell0HTML += '<input type="hidden" name="selDivPaymentMode" value="'+divPayMode+'" />';
		cell0HTML += '<input type="hidden" name="txtFldAnnualDivAmt" value="'+annualAmt+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvDetsMode" value="U" />';
		cell0HTML += '<input type="hidden" name="priFldInvFnaInvestmentId" value="'+priInvId+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvCreatedBy" value="'+createdBy+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvCreatedDt" value="'+createdDt+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvIsCustomInstitute" value="'+hdnInsVal+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvIsCustomDescriptn" value="'+hdnDescVal+'" />';
		cell0HTML += '<input type="hidden" name="hdnFldInvFV" value="'+calcFV+'" />';
		
		var selInvstObj = document.getElementsByName('selInvstObjDlg'+summTblLen);
		
			for(var io=0; io<selInvstObj.length; io++){
				
				var selInvObjVal = selInvstObj[io].value;
				var childDivVal  = document.getElementsByName('selChildNameDlg'+summTblLen)[io].value;
				var percAccDivVal = document.getElementsByName('txtFldAccumltnPercDlg'+summTblLen)[io].value;
				var yrsToDivVal   = document.getElementsByName('txtFldYrsToRetOrTerDlg'+summTblLen)[io].value;
				var selDisbursmentBy = document.getElementsByName('selDisbursmentByDlg'+summTblLen)[io].value;
				var txtFldDisWithdrawYear = document.getElementsByName('txtFldDisWithdrawYearDlg'+summTblLen)[io].value;
				var txtFldYrsOfDisbrsmnt = document.getElementsByName('txtFldYrsOfDisbrsmntDlg'+summTblLen)[io].value;
				var txtFldDisAnnualAmt = document.getElementsByName('txtFldDisAnnualAmtDlg'+summTblLen)[io].value;
				var hdnFldInvObjCreatedBy = document.getElementsByName('hdnFldInvObjCreatedByDlg'+summTblLen)[io].value;
				var hdnFldInvObjCreatedDt = document.getElementsByName('hdnFldInvObjCreatedDtDlg'+summTblLen)[io].value;
				var hdnFldInvObjMode = document.getElementsByName('hdnFldInvObjModeDlg'+summTblLen)[io].value;
				var priFldInvObjectiveId = document.getElementsByName('priFldInvObjectiveIdDlg'+summTblLen)[io].value;
				
				if(isEmpty(priFldInvObjectiveId)){
					
					var inObjId = makeid(17);
					priFldInvObjectiveId = "IO_"+inObjId.substring(3,inObjId.length);
				
				}//end of if
				
				cell0HTML += '<input type="hidden" name="selInvObj'+summTblLen+'" id="selInvObj'+summTblLen+io+'" value="'+selInvObjVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldAccumltnPerc'+summTblLen+'" id="txtFldAccumltnPerc'+summTblLen+io+'" value="'+percAccDivVal+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsToRetOrTer'+summTblLen+'" id="txtFldYrsToRetOrTer'+summTblLen+io+'" value="'+yrsToDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selChildName'+summTblLen+'" id="selChildName'+summTblLen+io+'" value="'+childDivVal+'" />';
				cell0HTML += '<input type="hidden" name="selDisbursmentBy'+summTblLen+'" id="selDisbursmentBy'+summTblLen+io+'" value="'+selDisbursmentBy+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisWithdrawYear'+summTblLen+'" id="txtFldDisWithdrawYear'+summTblLen+io+'" value="'+txtFldDisWithdrawYear+'" />';
				cell0HTML += '<input type="hidden" name="txtFldYrsOfDisbrsmnt'+summTblLen+'" id="txtFldYrsOfDisbrsmnt'+summTblLen+io+'" value="'+txtFldYrsOfDisbrsmnt+'" />';
				cell0HTML += '<input type="hidden" name="txtFldDisAnnualAmt'+summTblLen+'" id="txtFldDisAnnualAmt'+summTblLen+io+'" value="'+txtFldDisAnnualAmt+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedBy'+summTblLen+'" id="hdnFldInvObjCreatedBy'+summTblLen+io+'" value="'+hdnFldInvObjCreatedBy+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjCreatedDt'+summTblLen+'" id="hdnFldInvObjCreatedDt'+summTblLen+io+'" value="'+hdnFldInvObjCreatedDt+'" />';
				cell0HTML += '<input type="hidden" name="priFldInvObjectiveId'+summTblLen+'" id="priFldInvObjectiveId'+summTblLen+io+'" value="'+priFldInvObjectiveId+'" />';
				cell0HTML += '<input type="hidden" name="hdnFldInvObjMode'+summTblLen+'" id="hdnFldInvObjMode'+summTblLen+io+'" value="'+hdnFldInvObjMode+'" />';
				
			}//end of for
			
		cell0Obj.innerHTML = '';
		cell0Obj.innerHTML = cell0HTML;
		
		rowObj.cells[1].children[0].value = invPeriod;
		rowObj.cells[2].children[0].value = estROI;
		rowObj.cells[3].children[0].value = currNAV;
		
	var cell4Obj  = rowObj.cells[4];
	var cell4HTML = '';
		cell4HTML += '<table>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Any RSP?</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <select name="selRSPExists" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');"><option value="">--SELECT--</option><option value="Y">Yes</option><option value="N">No</option></select>';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Amt ($):</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <input type="text" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');" name="txtFldRSPAmt" style="width:99%;" value="'+rspAmt+'" />';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '  <tr>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <b>Frequency:</b>';
		cell4HTML += '    </td>';
		cell4HTML += '    <td width="50%">';
		cell4HTML += '      <select name="selInvFreq" class="editable" onchange="fnCalcRowLvlFV(this,\'RSP\');"><option value="">--SELECT--</option><option value="ANNUAL">ANNUAL</option><option value="SEMI ANNUAL">SEMI ANNUAL</option><option value="QUARTERLY">QUARTERLY</option><option value="MONTHLY">MONTHLY</option><option value="SINGLE">SINGLE</option></select>';
		cell4HTML += '    </td>';
		cell4HTML += '  </tr>';
		cell4HTML += '</table>';
	
	cell4Obj.innerHTML = '';
	cell4Obj.innerHTML = cell4HTML;
	
	var selInvObj = document.getElementsByName('selInvstObjDlg'+summTblLen);
	var invObjLen = selInvObj.length;
	
	if(invObjLen >0){
		
		var ioSpnElem = document.getElementById('spnInvObjDetsId'+summTblLen);
		var cellIOHTML= '';
		
		cellIOHTML += '<b>Investment Objective(s): </b>';
		cellIOHTML += '  <ol>';
		for(var io=0; io<invObjLen; io++){
		
			var invObj   = selInvObj[io].value;
			var accPerc  = document.getElementsByName('txtFldAccumltnPercDlg'+summTblLen)[io].value;
			var childVal = document.getElementsByName('selChildNameDlg'+summTblLen)[io].value;
			var modeVal  = document.getElementsByName('hdnFldInvObjMode'+summTblLen)[io].value;
			
			if(invObj == 'Education Planning') invObj += ' ('+childVal+')';
			
			if(modeVal != 'D'){
				cellIOHTML += '  <li>'+invObj+' - '+accPerc+'%</li>';
			}//end of if
			
		}//end of for
		cellIOHTML += '  <ol>';
		
		ioSpnElem.innerHTML = cellIOHTML;
	}//end of if
		
	cell4Obj.children[0].rows[0].cells[1].children[0].value = isRSPYN;
	cell4Obj.children[0].rows[2].cells[1].children[0].value = invFreq;
	
	var selInvProjtnObj = rowObj.cells[3].children[1];
	fnCalcFutureValForLC(fvObj,selInvProjtnObj);
	
	
	fnShowInvDetsCharts(summTblObj);
	fnShowInvProjctnLC(summTblObj);
	$('#divInvDetsId').modal('hide');
}//end of fnUpdInvDets

/**
This function is used to update 
the investment objectives.
Author - John,
Date - 14/11/2022 1823
 */
function fnUpdInvObjToTblDets(){
	
	var invObjTblObj   = document.getElementById('tblInvObjDetsDlgId').tBodies[0];
	var invObjRowIndex = document.getElementById('hdnFldInvObjDetsRowIndex').value;
	var rowObj  = invObjTblObj.rows[invObjRowIndex];
	var cellObj = rowObj.cells[3];
	
	var selInvVal  = document.getElementById('selInvObjDlg').value;
	var allocVal   = document.getElementById('txtFldAccumltnPercDlg').value;
	var yrsToRTVal = document.getElementById('txtFldYrsToRetOrTerDlg').value;
	var selChldVal = document.getElementById('selChildNameDlg').value;
	var dismtByVal = document.getElementById('selDisbursmentByDlg').value;
	var witDrYrVal = document.getElementById('txtFldDisWithdrawYearDlg').value;
	var yrsToDsVal = document.getElementById('txtFldYrsOfDisbrsmntDlg').value;
	var annlAmtVal = document.getElementById('txtFldDisAnnualAmtDlg').value;
	
	rowObj.cells[0].children[1].innerHTML = selInvVal;
	rowObj.cells[1].children[1].innerHTML = allocVal;
	rowObj.cells[2].children[1].innerHTML = yrsToRTVal;
	
	cellObj.children[4].value  = selInvVal;
	cellObj.children[5].value  = allocVal;
	cellObj.children[6].value  = yrsToRTVal;
	cellObj.children[7].value  = selChldVal;
	cellObj.children[8].value  = dismtByVal;
	cellObj.children[9].value  = witDrYrVal;
	cellObj.children[10].value = yrsToDsVal;
	cellObj.children[11].value = annlAmtVal;
	cellObj.children[15].value = 'U';
	
	$('#divInvObjDetsDlgId').modal('hide');
}//end of fnUpdInvObjToTblDets

/**
This function is used to load the 
children names into the 
select combo box.
Author - John,
Date - 14/11/2022 1858
 */
function fnLoadChildNames(){
	
	var childDivObj = document.getElementById('selChildNameDlg');
		childDivObj.options.length = 1;
	
	var childNameObjs = document.getElementsByName('txtFldChldName');
	var childMsgObj   = document.getElementById('spnChildNameDlg');
	
	if(childNameObjs != null){

		if(childNameObjs.length >0){
			
			for(var cn=0; cn<childNameObjs.length; cn++){
			
				var childNameObj = childNameObjs[cn];
	
				if(!isEmpty(childNameObj.value)){
					
					childDivObj.options[childDivObj.options.length++] = 
					new Option(childNameObj.value,childNameObj.value);
					
				}//end of if
				
			}//end of for
			
			childMsgObj.style.display = 'none';
		}else{
			
			childMsgObj.style.display = '';
		}//end of if
		
	}//end of if
	
}//end of fnLoadChildNames

/**
This function is used to open the 
investmen objective delete 
confirmation dialog box.
Author - John,
Date - 1611202  1052
 */
function fnInvObjDelConf(lnkObj){
	
	$('#headInvObjTitleId').html('Investment Objective Delete Confirmation');
	$('#divInvObjMsgId').html('Are you sure, you want to delete this investment objective details?');
	$('#divInvObjCondMsgId').modal('show');
	glblIORowObj = lnkObj.parentElement.parentElement;
	
}//end of fnInvObjDelConf

/**
This function is used to delete the 
investment objective details.
Author - John,
Date - 16/11/2022 1053
 */

function fnDelInvObjDetsRow(){
	
	var tblRowObj  = glblIORowObj;
	var tblBodyObj = tblRowObj.parentElement;
	var strModeObj = tblRowObj.cells[3].children[15];
	
	if(strModeObj.value == 'I'){
		tblBodyObj.deleteRow(tblRowObj.rowIndex);
	}else{
		
		strModeObj.value = 'D';
		document.getElementById('tblDelInvObjId').innerHTML += tblRowObj.innerHTML;
		tblBodyObj.deleteRow(tblRowObj.rowIndex);
		
	}//end of if

	$('#divInvObjCondMsgId').modal('hide');
	
}//end of fnDelInvDetsRow

/**
This function is used to 
close the investment 
details dialog box.
Author - John,
Date - 16/11/2022 1556
 */
function fnCloseInvDets(){
	
	document.getElementById('hdnFldInvDetsRowIndex').value = '';
	
}//end of fnCloseInvDets

function fnConvDBDttoScrDt(strDBDt){
	
	var retDt = "";
	
	if(isEmpty(strDBDt) || 
	   strDBDt == null || 
	   strDBDt == undefined || 
	   strDBDt == 'undefied'){
		
		return retDt;
		
	}//end of if
	
	var strDBDtArr = strDBDt.split('-');
	retDt = strDBDtArr[2]+'/'+strDBDtArr[1]+'/'+strDBDtArr[0];
	
	return retDt;
}//end of fnConvDBDttoScrDt





/**
This function is used to show 
the investment details for 
report in the HTML format.
 */
function fnGetInvDetsForRpt(strFNAId){
	
	showLoader(); 
	 
	var parameter = "DBCALLFOR=GET_INVDETS_FOR_RPT&strFnaId="+ strFNAId ;
	
	ajaxCall(parameter,servletName,function(data){
	
		var invRetVal = data;
      	var selfDetsArr = [];
      	var spsDetsArr  = [];
      	var jntDetsArr  = [];
		
		var currNAVSumSelf = 0;
		var currInvSumSelf = 0;
		
		var currNAVSumSps  = 0;
		var currInvSumSps  = 0;
		
		var currNAVSumJnt  = 0;
		var currInvSumJnt  = 0;
		
		for ( var invCnt in invRetVal) {
			
			if (invRetVal.hasOwnProperty(invCnt)) {
  
				var invVal = invRetVal[invCnt];
				
				var strOwner   = isEmpty(invVal["OWNERSHIP"])?" ":invVal["OWNERSHIP"];
				var strCurrNav = isEmpty(invVal["CURRENT_NAV"])?"0": invVal["CURRENT_NAV"];
				var strInvAmnt = isEmpty(invVal["AMOUNT_INVESTED"])?"0":invVal["AMOUNT_INVESTED"];
				
				switch(strOwner){
					
					case 'Self' : 
						selfDetsArr.push(invVal);
						currNAVSumSelf += parseFloat(strCurrNav);
						currInvSumSelf += parseFloat(strInvAmnt);
					break;
					
					case 'Spouse' : 
						spsDetsArr.push(invVal);
						currNAVSumSps += parseFloat(strCurrNav);
						currInvSumSps += parseFloat(strInvAmnt);
					break;
					
					case 'Joint' : 
						jntDetsArr.push(invVal);
						currNAVSumJnt += parseFloat(strCurrNav);
						currInvSumJnt += parseFloat(strInvAmnt);
					break;
					
				}//end of switch
			
			}//end of if
		}//end of for
		
		
		if(selfDetsArr.length >0){
			
			fnSetInvDetsRows('tblSelfInvDetsRptId',selfDetsArr);
			
			document.getElementById('trSumofCurrNAVSelfId').style.display = '';
			document.getElementById('tdSumofCurrNAVSelfId').innerHTML = currencyFormat(currNAVSumSelf);
			
			document.getElementById('trSumofCurrInvSelfId').style.display = '';
			document.getElementById('tdSumofCurrInvSelfId').innerHTML = currencyFormat(currInvSumSelf);
			
			document.getElementById('divSelfInvDetsRptId').style.display = '';
		}else{
			
			document.getElementById('trSumofCurrNAVSelfId').style.display = 'none';
			document.getElementById('tdSumofCurrNAVSelfId').innerHTML = '&nbsp;';
			
			document.getElementById('trSumofCurrInvSelfId').style.display = 'none';
			document.getElementById('tdSumofCurrInvSelfId').innerHTML = '&nbsp;';
			
			document.getElementById('divSelfInvDetsRptId').style.display = 'none';
		}//end of if
		
		if(spsDetsArr.length >0){
			
			fnSetInvDetsRows('tblSpsInvDetsRptId',spsDetsArr);	
			
			document.getElementById('trSumofCurrNAVSpsId').style.display = '';
			document.getElementById('tdSumofCurrNAVSpsId').innerHTML = currencyFormat(currNAVSumSps);
			
			document.getElementById('trSumofCurrInvSpsId').style.display = '';
			document.getElementById('tdSumofCurrInvSpsId').innerHTML = currencyFormat(currInvSumSps);
			
			document.getElementById('divSpsInvDetsRptId').style.display = '';
		}else{
			
			document.getElementById('trSumofCurrNAVSpsId').style.display = 'none';
			document.getElementById('tdSumofCurrNAVSpsId').innerHTML = '&nbsp;';
			
			document.getElementById('trSumofCurrInvSpsId').style.display = 'none';
			document.getElementById('tdSumofCurrInvSpsId').innerHTML = '&nbsp;';
			
			document.getElementById('divSpsInvDetsRptId').style.display = 'none';
		}//end of if
		
		if(jntDetsArr.length >0){
			
			fnSetInvDetsRows('tblJntInvDetsRptId',jntDetsArr);
			
			document.getElementById('trSumofCurrNAVJntId').style.display = '';
			document.getElementById('tdSumofCurrNAVJntId').innerHTML = currencyFormat(currNAVSumJnt);
			
			document.getElementById('trSumofCurrInvJntId').style.display = '';
			document.getElementById('tdSumofCurrInvJntId').innerHTML = currencyFormat(currInvSumJnt);
			
			document.getElementById('divJntInvDetsRptId').style.display = '';
		}else{
			
			document.getElementById('trSumofCurrNAVJntId').style.display = 'none';
			document.getElementById('tdSumofCurrNAVJntId').innerHTML = '&nbsp;';
			
			document.getElementById('trSumofCurrInvJntId').style.display = 'none';
			document.getElementById('tdSumofCurrInvJntId').innerHTML = '&nbsp;';
			
			document.getElementById('divJntInvDetsRptId').style.display = 'none';
		}//end of if
	});//end of ajaxcall
	
	hideLoader();
	
}//end of fnGetInvDetsForRpt


/**
This function is used to set the values 
into the tables based on the ownership.
Author - John,
Date - 12122022 1214
 */
function fnSetInvDetsRows(strTblId,invDetsArr){
	
	var invTblObj = document.getElementById(strTblId).tBodies[0];
	
	for(var inv=0; inv<invDetsArr.length; inv++){
		
		var invVal = invDetsArr[inv];
		
		var rowObj = invTblObj.insertRow(inv);
				
		var strInvType = isEmpty(invVal["TYPE_OF_INVESTMENT"])?" ":invVal["TYPE_OF_INVESTMENT"];
		var strPayMthd = isEmpty(invVal["PAYMENT_METHOD"])?" ":invVal["PAYMENT_METHOD"];
		
		var strInsName = isEmpty(invVal["INS_NAME"])?" ":invVal["INS_NAME"];
		var strInvDesc = isEmpty(invVal["INV_DESC"])?" ":invVal["INV_DESC"];
		var strInvAmnt = isEmpty(invVal["AMOUNT_INVESTED"])?"0":invVal["AMOUNT_INVESTED"];
		
		var strInvUnts = isEmpty(invVal["UNITS"])?"0":invVal["UNITS"];
		var strNavPric = isEmpty(invVal["NAV_PRICE"])?"0":invVal["NAV_PRICE"];
		var strCurrNav = isEmpty(invVal["CURRENT_NAV"])?"0":invVal["CURRENT_NAV"];
		
		
		var strRspYN   = isEmpty(invVal["IS_RSP_EXIST_YN"])?"N":invVal["IS_RSP_EXIST_YN"];
		var strRSPAmnt = isEmpty(invVal["RSP_AMOUNT"])?"0":invVal["RSP_AMOUNT"];
		var strRSPFreq = isEmpty(invVal["RSP_FREQUENCY"])?" ":invVal["RSP_FREQUENCY"];
		var strRSPYers = isEmpty(invVal["RSP_INVESTMENT_YRS"])?" ":invVal["RSP_INVESTMENT_YRS"];
		
		var strEstROI  = isEmpty(invVal["ESTIMATED_ROI"])?"0":invVal["ESTIMATED_ROI"];
		var strInvPrd  = isEmpty(invVal["INVESTMENT_PERIOD"])?"0":invVal["INVESTMENT_PERIOD"];
		var strInvId   = invVal["FNA_INVESTMENT_ID"];
		
		
		var invObj = {};
		
		//for Future value calculations
		invObj.txtFldCurrPFNav = parseFloat(strCurrNav);
		invObj.txtFldEstRoI    = parseFloat(strEstROI);
		invObj.txtFldInvPeriod = parseInt(strInvPrd);
		invObj.txtFldRSPAmt    = parseFloat(strRSPAmnt);
		invObj.selInvFreq      = strRSPFreq;
		invObj.selRSPExists    = strRspYN;
		invObj.priInvFnaInvId  = strInvId;
		
		var calcFV = fnCalcFutureVal(invObj);
		
		var cell0 = rowObj.insertCell(0);	
		var cell0HTML  = '';
			cell0HTML += '<span class="invRepCls" style="font-size:10pt;">';
			cell0HTML += '<div>Investment Type: '+strInvType+'</div>';
			cell0HTML += '<div>Payment Method: '+strPayMthd+'</div>';
			cell0HTML += 'Future Value: '+currencyFormat(parseFloat(calcFV))+'';
			cell0HTML += '</span>';
			cell0HTML += '<input type="hidden" class="hdnCurrNAV" value="'+parseFloat(strCurrNav)+'" />';
			cell0HTML += '<input type="hidden" class="hdnInvAmt" value="'+parseFloat(strInvAmnt)+'" />';
			
		cell0.innerHTML= cell0HTML;
		
		strInsName = strInsName == 'AFPL' ? 'Avallis Financial Pte Ltd' : strInsName;
		
		var cell1 = rowObj.insertCell(1);		
		var cell1HTML  = '';
			cell1HTML += '<span class="invRepCls" style="font-size:10pt;">';
			cell1HTML += '<div>'+strInsName+'</div>';
			cell1HTML += '<div>'+strInvDesc+'</div>';
			cell1HTML += 'Investment Amount: '+currencyFormat(parseFloat(strInvAmnt))+'';
			cell1HTML += '</span>';
			
		cell1.innerHTML= cell1HTML;
		
		var cell2 = rowObj.insertCell(2);		
		var cell2HTML  = '';
			cell2HTML += '<span class="invRepCls" style="font-size:10pt;">';
			cell2HTML += '<div>Units: '+strInvUnts+'</div>';
			cell2HTML += '<div>NAV Price: '+strNavPric+'</div>';
			cell2HTML += 'Current NAV: '+currencyFormat(parseFloat(strCurrNav))+'';
			cell2HTML += '</span>';
			
		cell2.innerHTML= cell2HTML;
		
		var cell3 = rowObj.insertCell(3);		
		var cell3HTML  = '';
			cell3HTML += '<span class="invRepCls" style="font-size:10pt;">';
			
			if(strRspYN == 'Y'){
				
				cell3HTML += '<div>RSP Amount: '+currencyFormat(parseFloat(strRSPAmnt))+'</div>';
				cell3HTML += '<div>Frequency: '+strRSPFreq+'</div>';
				cell3HTML += 'RSP Years: '+strRSPYers+'';
				
			}else{
				cell3HTML += '<div>N/A</div>';
			}//end of if
			
			cell3HTML += '</span>';
			
		cell3.innerHTML= cell3HTML;
		
		var cell4 = rowObj.insertCell(4);	
		var cell4HTML = '';
		
		var invObjLst = invVal["INV_OBJECTIVE_LST"];
		
		cell4HTML += '<span class="invRepCls" style="font-size:10pt;">';
		for (var invObjCnt in invObjLst) {
			
			if (invObjLst.hasOwnProperty(invObjCnt)) {
				
				var invObjVal  = invObjLst[invObjCnt];
				
				var invObjctv  = isEmpty(invObjVal["INVESTMENT_OBJECTIVE"]) ? "" : 
										 invObjVal["INVESTMENT_OBJECTIVE"];
										
				var invAlcPerc = isEmpty(invObjVal["ALLOCATION_PERC"]) ? "" : 
										 invObjVal["ALLOCATION_PERC"]+'%';
										
				var invChldNme = isEmpty(invObjVal["CHILD_NAME"]) ? "" : 
										 ' ('+invObjVal["CHILD_NAME"]+')';
				
				invObjctv = invObjctv == 'Education Planning' ? invObjctv+invChldNme : invObjctv;
				
				cell4HTML += '<div>'+invObjctv+' - '+invAlcPerc+'</div>';
				
			}//end of if
		}//end of for
		
		cell4HTML += '</span>';
		cell4.innerHTML= cell4HTML;
		
	}//end of for
	
}//end of fnSetInvDetsRows


function fnGenInvDesRpt(){
	
	showLoader(); 

	var strTblInvDetsRptIdSelf = "tblSelfInvDetsRptId";
	var strTblInvDetsRptIdSps  = "tblSpsInvDetsRptId";
	var strTblInvDetsRptIdJnt  = "tblJntInvDetsRptId";
	
	var selfLen = $('#'+strTblInvDetsRptIdSelf+' tbody tr:visible').length;
	var spsLen  = $('#'+strTblInvDetsRptIdSps+' tbody tr:visible').length;
	var jntLen  = $('#'+strTblInvDetsRptIdJnt+' tbody tr:visible').length;
	
	if(selfLen == 0 && spsLen == 0 && jntLen == 0) {
		hideLoader();
		alert("No data to export")
		return false;
	}//end of if
	
	var pl ="portrait";
	var fileSave ="Investment_Details";
	 
	var pdfTitle ="";  
	var screentittlefootername = "Investment Details";
	
	var invColHdrArrSelf = 
			[["Ownership: Self"],
			["Basic Details","Investment Details","NAV Details","RSP Details","Investment Objectives"]];
			
	var invColHdrArrSps = 
			[["Ownership: Spouse"],
			["Basic Details","Investment Details","NAV Details","RSP Details","Investment Objectives"]];
			
	var invColHdrArrJnt = 
			[["Ownership: Joint"],
			["Basic Details","Investment Details","NAV Details","RSP Details","Investment Objectives"]];
			
	var jsonObject = [];
	
	if(selfLen > 0 && spsLen == 0 && jntLen == 0) {
		
		jsonObject = [
			{"key":"Table","value":strTblInvDetsRptIdSelf,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSelf,"pdfaddnewPage":""}];
	    
	}else if(selfLen == 0 && spsLen > 0 && jntLen == 0) {
		
		jsonObject = [
		{"key":"Table","value":strTblInvDetsRptIdSps,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSps,"pdfaddnewPage":"yes"}];
	    
	}else if(selfLen > 0 && spsLen > 0 && jntLen == 0) {
		
		jsonObject = [
		{"key":"Table","value":strTblInvDetsRptIdSelf,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSelf,"pdfaddnewPage":""},
	    {"key":"Table","value":strTblInvDetsRptIdSps,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSps,"pdfaddnewPage":"yes"}];
	    
	}else if(selfLen == 0 && spsLen == 0 && jntLen > 0) {
		
		jsonObject = [
		{"key":"Table","value":strTblInvDetsRptIdJnt,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrJnt,"pdfaddnewPage":"yes"}];
	    
	}else if(selfLen > 0 && spsLen == 0 && jntLen > 0) {
		
		jsonObject = [
		{"key":"Table","value":strTblInvDetsRptIdSelf,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSelf,"pdfaddnewPage":""},
	    {"key":"Table","value":strTblInvDetsRptIdJnt,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrJnt,"pdfaddnewPage":"yes"}];
	    
	}else if(selfLen == 0 && spsLen > 0 && jntLen > 0) {
		
		jsonObject = [,
	    {"key":"Table","value":strTblInvDetsRptIdSps,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSps,"pdfaddnewPage":"yes"},
	    {"key":"Table","value":strTblInvDetsRptIdJnt,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrJnt,"pdfaddnewPage":"yes"}];
	    
	}else if(selfLen > 0 && spsLen > 0 && jntLen > 0) {
		
		jsonObject = [
		{"key":"Table","value":strTblInvDetsRptIdSelf,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSelf,"pdfaddnewPage":""},
	    {"key":"Table","value":strTblInvDetsRptIdSps,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrSps,"pdfaddnewPage":"yes"},
	    {"key":"Table","value":strTblInvDetsRptIdJnt,"Title":pdfTitle,"TitleFooter":screentittlefootername,
	    "header":invColHdrArrJnt,"pdfaddnewPage":"yes"}];
	    
	}//end of if
	
	var jsonObj = [{portraitlandscape: pl, fileSave:fileSave }]
		
	var JsonData={"jsobj":jsonObj} // convert jsonObjecy
	var jsonArray=[];
	jsonArray.push(JSON.stringify(JsonData));// convert jsonArray
	var objArrayfilename = JSON.parse(jsonArray); // parse jsonArray to variable(objArray)
	
	setTimeout(function(){
		fnHtml2PdfInvCall(jsonObject,objArrayfilename); //function to start print pdf
	},100);
	 
	hideLoader();
		
}//end of fnGenInvDesRpt

function fnHtml2PdfInvCall(jsonObject,objArrayfilename,file){

	var pdf;
 
		pdf = new jsPDF(objArrayfilename.jsobj[0].portraitlandscape,'mm',"a2",true); 
	    pdf.setFont("Calibri");
		pdf.setFontSize(13);
		pdf.page=1; 
		 
 	  	fnHtml2PdfInv(pdf,jsonObject,objArrayfilename,file);
	 
}//end of fnHtml2PdfInvCall


function fnHtml2PdfInv(pdf,jsonObject,objArrayfilename,file){
  
	var totallen =jsonObject.length;
    var jsonobj = jsonObject[0];
    
	fnH2pInvTable(pdf, jsonObject, jsonobj,totallen,0,objArrayfilename,file);
		 
}//end of html2PdfInv


function fnH2pInvTable(pdf, fullobj, jsonobj, totallen, curind,objArrayfilename,file){
     
	    var newind = curind + 1;
	   
		if($("#"+jsonobj.value+" tbody tr:first td:first")){
			
			if(jsonobj.pdfaddnewPage.length > 0){
				pdf.addPage("a2", 'portrait');
			} //end of if
				
			h2pTitle(pdf,10,15,jsonobj.Title);
			fnH2pInvHeader(pdf,200,jsonobj); 
            pdf.text(200,pdf.internal.pageSize.height - 40,"Avallis Financial Pte Ltd");
			pdf.text(165,pdf.internal.pageSize.height-35,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
			  	
			fnH2PAddAutoTbl(pdf,20,jsonobj); //arrange the table structure and preparing for print
			 
		}//end of if
			     
	  if(totallen != newind){
			
        var newidobj = fullobj[newind];
        
		if(newidobj.key == "Table"){
			fnH2pInvTable(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
		}//end of if
			
	  }else {
		h2psavePdf(pdf,objArrayfilename,jsonobj);  		
	  }//end of if
		
}//end of h2pInvTable


function fnH2pInvHeader(doc,LeftAlign,jsonobj){ 
	doc.setFontSize(18);
	doc.setFontType("bold");
	
	doc.text(LeftAlign,14,jsonobj.TitleFooter);   
	doc.setFontSize(13);
	doc.setFontType("normal");
}//end of h2pInvHeader


function fnH2PAddAutoTbl(doc,position,jsonobj){
	
	var rows = []; 
	
		$("#"+jsonobj.value).DataTable().rows().iterator('row', function(context, index){ 
			
			var rowdata=[];
			var node = $(this.row(index).node()); 
			
			$(node).find("td").each(function(i){	
			
				var span = $(this).find("span");
				var elem = $(this).find(":input");
				var elemtxt = $(this).text();
			 
				var data;
				 
				var nodetype = $(this).find(":input").prop('type');
			 
				if(nodetype == "checkbox")return;
			
				data = elemtxt;
					
				if(nodetype == "text"){
					data= elem.val();
				}//end of if
 
				if(elem.is("select")){
					
					data= elem.find('option:selected').html();
					data = data == '--SELECT--' ? '' : data;
					
				}//end of if
				
				if(span.is("span")){
					if($('.invRepCls')){
						data= span.html();
						data = data.replace(/<\/div>/g, '\n');
						data = data.replace(/(<([^>]+)>)/g, "");
					}//end of if
				}//end of if
				
				rowdata.push(data)
				 
			});//end of for 
			
			rows.push(rowdata);
			 
		}//end of for {DataTable}
	);
	
	var totInvAmt = 0, totCurrNAV = 0;
	
	var tblObj = document.getElementById(jsonobj.value).tBodies[0];
	
	for(var tot=0; tot<tblObj.rows.length; tot++){
		
		totCurrNAV += parseFloat(tblObj.rows[tot].cells[0].children[1].value);
		totInvAmt  += parseFloat(tblObj.rows[tot].cells[0].children[2].value);
		
	}//end of for
	
	var footCurNAVArr = ["", "Sum of Current NAV", currencyFormat(totCurrNAV), "", ""];
	var footTotInvArr = ["", "Sum of Investment Amount", currencyFormat(totInvAmt), "", ""];
	
	doc.autoTable({
		head:jsonobj.header,
        body:rows,
        foot: [footCurNAVArr,footTotInvArr],
        theme:'grid',
	    startY:(isEmpty(position)?20:position),
        margin:{left:10,right:10,top:30,bottom:50},
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap',cellWidth:'auto'},
        headStyles: {
        	lineWidth: .1,
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 15,
            lineColor: [44, 44, 44],
        },
        bodyStyles: { valign: 'top',fontSize:8},
        columnStyles	: {text:{cellWidth:17 }},
	    footStyles: {
	      fillColor: [211, 211, 211],
	      textColor: [0, 0, 0],
	      fontSize: 12,
	    },
        showFoot: "lastPage"
       
	});
	
}//end of fnH2PAddAutoTbl

/**
This function is used to validate the 
duplication in the investment 
objective dialog box 
before adding.
Author: John,
Date: 16122022 0954
 */
function fnCkhForInvObjDupl(invObjTblObj,invObjVal){
	
	for(var io=0; io<invObjTblObj.rows.length; io++){
		
		var tblInvObj = invObjTblObj.rows[io].cells[3].children[4].value;
		if(tblInvObj == invObjVal){
			showAlert(tblInvObj+' is already added, cannot be added again.');
			return false;
		}//end of if
		
	}//end of for
	
	return true;
}//end of fnCkhForInvObjDupl