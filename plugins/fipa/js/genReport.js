
/**
 * Report Generation
 */
var fipaForm;
 
//var reportmachineip = "http://118.201.157.48:7093";
//var reportmachineip = "http://localhost:8080";
//var reportmachineip = "http://localhost:6083";
var reportmachineip = "https://secure-fipa-dev.avallis.com/";
//var reportmachineip = "https://secure-stats.avallis.com/";
function GenSelReport(){
	
	
	var $analysisChk = $("#analysisTypesdiv").find("input[type='checkbox']:checked");  
	var chkReportId=[]; 
	var desirory = $("#analysisTypesdiv").find("input[type='checkbox']:checked").map(function() { 
		chkReportId.push($(this).attr("value"));		
		
	   return this.value;
	}).get(); 
	if(chkReportId.length == 0){
		alert("Select any report and click Generate Report Button");
		return false
	}else if(chkReportId.length >= 2){
		alert("Select any One report and click Generate Report Button");
		$analysisChk.attr("checked",false);	
		return false
	}
	else{
		fnaGenReport(chkReportId);
		$analysisChk.attr("checked",false);	
	}
	
}


function fnaGenReport(chkReportId) {
	
	var clientId = $("input[name=fnaId]").val();
    var repmaincolor=$("#colorReportMainHead").val();
    var repsubcolor=$("#colorReportSubHead").val();
    var custId = $("input[name=custId]").val();
 	var eldershieldplan=$("#txtFldElderShieldPlan").val();
    var brsval=$("#cpfLifeBrsamt").val();
	var cpfwidthdrawal=$("#cpfLifeRasavings").val();
	
	 if(isEmpty(clientId)){ 
			applyToastrAlert("No Profile is selected"); 
			return false;
		}
	 
	 var machine = "";
	
	 
//	 BY DEFAULT
//	 repmaincolor = "#009A78";
//	 repsubcolor = "#333E48";
	 
//	 repmaincolor = "GRAY";
//	 repsubcolor = "SILVER";

	 
	 if(chkReportId.length>1){
		 machine =  reportmachineip+"/birt-viewer/fipajsp/FIPA_GEN_REPORTS.jsp?__format=pdf"
		 		+ "&P_FNAID="+clientId+"&P_REPORTS="+chkReportId;
	
//	 	console.log(machine)
		 creatSubmtDynaReportPDF(machine);
	 	
	 }else{
		 
		 if(chkReportId == "BANK"){
			 
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CAB.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "CEP"){
	
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CEP.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 		 
		 if(chkReportId == "CFA"){
		
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CFA.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "CPF"){
			 
			 //machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CPF.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor+ "&P_WIDTHDRAWAL="+cpfwidthdrawal+ "&P_BRS_AMOUNT="+brsval;
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CPF.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "INV"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_INV.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;;
		 }
		 
		 
		 if(chkReportId == "LIFE"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_LIFEINS.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;;
		 }
		 
		 
		 if(chkReportId == "NWA"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_NWA.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "RET"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_RP.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "SNASELF"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SNA_SELF.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor+ "&P_ELDERSHIELD="+eldershieldplan;
		 }
		 
		 if(chkReportId == "SNASPOUSE"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SNA_SPOUSE.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
			 
		 }
		 creatSubmtDynaReportPDF(machine);
		 
		 
		 if(chkReportId == "SRS"){
			 
			 
			 var parameter = "DBCALLFOR=GET_SRS_PROJECTION&strFnaId="+ clientId ;
				
				
				$.ajax({
					type : "GET",
					url : servletName,
					data : parameter,
					dataType : "json",
					async : false,
					success : function(data,statusText) {
						
						var retval = data;
						
						
						
						for ( var val in retval) {

							var tabdets = retval[val];

							if (tabdets["DB_ERROR"]) {
								window.location = BASE_URL + DB_EXP_JSP;
								return;
							}
							
							if(retval.length >0){
								var age = Number(tabdets["SELF_AGE"]);
								var endbal = Number(tabdets["SRS_CLOSING_BAL"]);
								var withdrawn = Number(tabdets["SRS_ANNL_WITHDRAW"]);
									
									if(withdrawn > 0 ){
									 $("#retFromSrsAge").val(age);
										 $("#retFromSrsAmount").val(withdrawn);
										syncSRSBalanceRet();
										
									}
							}
							
								
						}
						
						 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SRS.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
						 
						 creatSubmtDynaReportPDF(machine);
							
						
					}
				})
				
			
		 }
		 
		 
		 
	 }
	 
	 

	
}
