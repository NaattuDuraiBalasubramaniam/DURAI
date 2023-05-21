/**
 * ALL DATA TABLE CONFIG GOES HERE
 */



var searchtbl = $("#ClientSearchTable").DataTable(
		{
			scrollCollapse : true,
			scrollX : true,
			scrollY : true,//"87vh"
			sorting : false,
			ordering : true,
			bLengthChange : false,
			filter : false,
			paging : false,
			info    : false,
			dom : '<<"top" ip>flt>',
			 columnDefs: [  { width: '20px', targets: [0,1]},
			   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8]}],		 
			fnDrawCallback : function(oSettings) {
				if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
					$(oSettings.nTableWrapper).find('.dataTables_paginate')
							.hide();
					$(oSettings.nTableWrapper).find('.dataTables_scrollBody')
							.css("height", "auto");

				}

			}
		});


var profileTbl = $("#ProfileSearchTable").DataTable(
		{
			destroy: true,
		 	responsive: false,   
			scrollCollapse : true,
			scrollX : true,
			scrollY : true,//"87vh"
			sorting : false,
			ordering : false,
			bLengthChange : false,
			filter : false,
			paging : false,
			dom : '<<"top" ip>flt>',
			 columnDefs: [  { width: '20px', targets: [0,1]},
			   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8]}],		 
			fnDrawCallback : function(oSettings) {
				if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
					$(oSettings.nTableWrapper).find('.dataTables_paginate')
							.hide();
					$(oSettings.nTableWrapper).find('.dataTables_scrollBody')
							.css("height", "auto");

				}

			}
		});



var chldpartTbl = $('#childParticularsTable').DataTable( {
	destroy: true,
 	responsive: false,        
    ordering: false,
    searching: false,
	scrollY:  "43vh",   
	scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,  
    dom: '<<"top" ip>flt>',
	columnDefs: [  { width: '20px', targets: [0,1]},
       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11],"orderable": false,"searchable": false}
				]		 
	 
}).draw();


var finGoalsTbl = $('#finGoalsTable').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',    
	autowidth:false,
   	bLengthChange: false,    
    columnDefs: [  	{ width: '20px', targets: [0,1]},
   	             	{"className": "dt-head-center text-center",targets: [0,1,2,3,4],"orderable": false,"searchable": false}
    			]	 

}).draw();





var AutoAlterTbl = $('#AutoAlterTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4],"orderable": false,"searchable": false}]		 

}).draw();

var fnaartuplanTbl = $('#fnaartuplanTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}]		 
	
}).draw();

var fnaartufundTbl = $('#fnaartufundTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}]		 
	 
}).draw();


var fnaSwrepFundTbl = $('#fnaSwrepFundTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]		 
	 
}).draw();



var othareaofconTbl = $('#othareaofconTbl').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: "100%",
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2],"orderable": false,"searchable": false}]		 
		
	}).draw();




var personalAssetTbl = $('#personalAssetTbl').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	            {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}]		 
	 
	}).draw();





var businessAssetTbl = $('#businessAssetTbl').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   columnDefs: [], 
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}]		 
		 
	}).draw();



var fnaAttachments = $('#fnaAttachments').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7],"orderable": false,"searchable": false}]		 
			   
	}).draw();






var cashOfBanksTable = $('#cashOfBanksTable').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}]		 
		
	}).draw();




var utlipPolicyTbl = $('#existPolicyUtlip').DataTable(
		{
			destroy : true,
			responsive : false,
			//ordering : false,
			ordering : true,
			searching : false,
			scrollY : 200,
			scrollX : true,
			scroller : false,
			scrollCollapse : true,
			paging : false,
			filter : false,
			dom : '<<"top" ip>flt>',
			columnDefs : [ {width : '20px',targets : [ 0, 1 ]}, { "searchable" : false } ,{ "orderable": false,targets: [0]}],
//			fixedColumns:   true,
//			fixedColumns:   {rightColumns: 3,leftColumns:1 },
			 columns: [
	   	           null,
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' },
	   	           { "orderDataType": "dom-text", type: 'string' }
	   	     	   /*{ "orderDataType": "dom-text", type: 'string' }
	   	  		   { "orderDataType": "dom-text", type: 'string' },
	   	  		   { "orderDataType": "dom-text", type: 'string' },
	   			   { "orderDataType": "dom-text", type: 'string' },*/
	   	       ],
	   	      	
	   	       fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
	            //debugger;
	            var index = iDisplayIndexFull + 1;
	            $("td span", nRow).html(index);
	            return nRow;
	        },
			fnDrawCallback : function(oSettings) {
				if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
					$(oSettings.nTableWrapper).find('.dataTables_scrollBody')
							.css("max-height", "40vh").css("min-height",
									"250px");
				}
			}

		});

var existPolicyLHIns = $('#existPolicyLHIns').DataTable(
		{
			destroy : true,
			responsive : false,
			//ordering : false,
			ordering : true,
			order : [],
			searching : false,
			scrollY : 200,
			scrollX : true,
			scroller : false,
			scrollCollapse : true,
			paging : false,
			filter : false,
			dom : '<<"top" ip>flt>',
			columnDefs : [ {
				width : '20px',
				targets : [ 0, 1 ]
			}, { "searchable" : false } ,{ "orderable": false,targets: [0]}],
			
			
//			fixedColumns:   true,
			
//			fixedColumns:   {rightColumns: 3 ,leftColumns:1},
			columns: [
			      null,
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' }
			   /*   { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' },
			      { "orderDataType": "dom-text", type: 'string' }*/
			  ],
			  
			fnDrawCallback : function(oSettings) {

				if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
					$(oSettings.nTableWrapper).find('.dataTables_scrollBody')
							.css("max-height", "45vh").css("min-height",
									"250px");
				}

			},
		
		 	
		fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
		//debugger;
		var index = iDisplayIndexFull + 1;
		$("td span", nRow).html(index);
		return nRow;
		}
		
		});



var deptParticularsTable = $('#deptParticularsTable').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]
   	             
	
}).draw();




var fnaInvestmentTbl = $('#fnaInvestmentTbl').DataTable({
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "60vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false,
    /*paging:true, 
    pagingType : "full_numbers",*/
    
    filter:false,   
    dom: '<<"top" ip>flt>',  
  columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]	
   	         
	 
}).draw();

var liDeathBenefittbl = $('#liDeathBenefittbl').DataTable( {
	destroy: true,
 	responsive: false,              
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}]		 
	 
}).draw();


var liDisabilitytbl = $('#liDisabilitytbl').DataTable( {
	destroy: true,
 	responsive: false,              
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}]		 
	 
}).draw();


var liCriticalIllnesstbl = $('#liCriticalIllnesstbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}]		 
	 
}).draw();
	


var liHospitilisationtbl = $('#liHospitilisationtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}]		 
	 
}).draw();


var liRetirementPlgtbl = $('#liRetirementPlgtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}]		 
}).draw();


var fnaLINomineesTbl = $('#fnaLINomineesTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "20vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3],"orderable": false,"searchable": false}]
}).draw();



var liPlanDetailstbl = $('#liPlanDetailstbl').DataTable( {
	destroy: true,
 	responsive: false,        
    ordering: false,
    searching: false,
	scrollY:  "40vh",   
	scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,  
    dom: '<<"top" ip>flt>',
    columnDefs: [  { width: '20px', targets: [0,1]},
       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}]		 
	 
	 
}).draw();



var liRaiderDetailstbl = $('#liRaiderDetailstbl').DataTable({
	destroy: true,
 	responsive: false,        
    ordering: false,
    searching: false,
	scrollY:  "40vh",   
	scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,  
    dom: '<<"top" ip>flt>',
    columnDefs: [  { width: '20px', targets: [0,1]},
       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}]
	 
}).draw();

var planCoveragestbl= $('#planCoveragestbl').DataTable({
	destroy: true,
 	responsive: false,        
    ordering: false,
    searching: false,
	scrollY:  "40vh",   
	scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,  
    dom: '<<"top" ip>flt>',
    columnDefs: [  { width: '20px', targets: [0,1]},
       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],"orderable": false,"searchable": false}]
	 
}).draw();




var fnaPropOwnTblByCPF = $('#fnaPropOwnTblByCPF').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	    
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"orderable": false,"searchable": false}]		 
		
	}).draw();

var clntReasnsTable = $('#clntReasnsTable').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   sereasnhing: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	    
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2],"orderable": false,"sereasnhable": false}]		 
		
	}).draw();


var OthRetPlgtbl = $('#OthRetPlgtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
  columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5],"orderable": false,"searchable": false}]
}).draw();



var IncRetPlgtbl = $('#IncRetPlgtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]
}).draw();



var IncAssRetPlgtbl = $('#IncAssRetPlgtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    paging:false, 
    info:false,
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5],"orderable": false,"searchable": false}] 
}).draw();

$.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('input', td).val();
    } );
}
$.fn.dataTable.ext.order['dom-text-numeric'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('input', td).val() * 1;
    } );
}
$.fn.dataTable.ext.order['dom-select'] = function  ( settings, col )
{
    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
        return $('select', td).val();
    } );
}


var wealthAccmltTable = $('#wealthAccmltTable').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',    
	autowidth:false,
   	bLengthChange: false
 
}).draw();



var fnaVehiOwnTbl = $('#fnaVehiOwnTbl').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}]		 
		
	}).draw();


var finGoalsMasterTable=$("#finGoalsMasterTable").DataTable({ 
	scrollY:"23vh",
	scrollX: true,
	autowidth:false,
    scrollCollapse:false,
   	searching: false,
   	ordering: false,
   	bLengthChange: false,
   	scrollCollapse:false,
   	
   	
   	destroy: true,
 	responsive: false,        
    scroller: false,
    filter:false,  
    dom: '<<"top" ip>flt>',
   	paging:false,
   	columnDefs: [  
   	             {"className": "dt-center","targets": [0],"orderable": false,"searchable": false}] 
}).draw();


var RDAnalysFlowtbl = $('#RDAnalysFlowtbl').DataTable({
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
     
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]
}).draw();




var RDExptbl = $('#RDExptbl').DataTable({
 	destroy: true,
 	autowidth:false,
  	responsive: true,         
     ordering: false,
     searching: false,     
     scrollY:  "40vh",
     scrollX: true,
     scroller: true,
     scrollCollapse:false,
     info:false,
     paging:false, 
     filter:false,   
     dom: '<<"top" ip>flt>',  
     columnDefs: [ {"width":"10px","className":"dt-head-center","targets":[0,1]},
                   {"width":"120px","className":"dt-head-center","targets":[2]},
                   {"width":"60px","className":"dt-head-center","targets":[3,4,5,6,7,8]},
                   {"className":"dt-head-center","targets":[9]}]		 
 	
 }).draw();

var RDIncDisImbtbl = $('#RDIncDisImbtbl').DataTable( {
	destroy: true,
  	responsive: false,         
     ordering: false,
     searching: false,     
     scrollY:  "40vh",
     scrollX: true,
     scroller: false,
     scrollCollapse:false,
     info:false,
     paging:false, 
     filter:false,   
      
     dom: '<<"top" ip>flt>',  
     columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}]		 
	 
}).draw();





var RDIncAsstbl = $('#RDIncAsstbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false},
   	             { "orderDataType": "dom-text", type: 'string' }
    ] 
		 
}).draw();



$('#RDIncAsstbl thead tr').clone(true).appendTo( '#RDIncAsstbl thead' );


var retCpfPayoutTable = $('#retCpfPayoutTable').DataTable( {
	destroy: true,
 	responsive: false,         
 	//ordering: false,
 	ordering: true,
    searching: false,     
    scrollY:  "10vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '15px', targets: [0]},
                 { width: '20px', targets: [1]},
                 { width: '15px', targets: [2]},
                 { width: '150px', targets: [3,4,5,6]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"searchable": false},{ "orderable": false,targets: [0,1]}] ,
   	          columns: [
   	           null,
   	           null,
   	           { "orderDataType": "dom-text", type: 'string' },
   	           { "orderDataType": "dom-select" ,type: 'string' },
   	           { "orderDataType": "dom-text-numeric" },
   	           { "orderDataType": "dom-text-numeric" },
   	           { "orderDataType": "dom-text-numeric" }
   	            ],
   	       	fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
   	           //debugger;
   	           var index = iDisplayIndexFull + 1;
   	           $("td span", nRow).html(index);
   	           return nRow;
   	       }
}).draw();



var liEducationtbl = $('#liEducationtbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",
    			targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],"orderable": false,"searchable": false},
    			{
                    "targets": [ 12,13 ],
                    "visible": false,
                    "searchable": false
                }]		 
 
}).draw();



var liEduPayoutstbl = $('#liEduPayoutstbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
    columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4],"orderable": false,"searchable": false}]
}).draw();



var cpfAccAddDedTable = $('#cpfAccAddDedTable').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}] 
	}).draw();


var fnaswrepplanTbl = $('#fnaswrepplanTbl').DataTable( {
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>',  
  columnDefs: [  { width: '20px', targets: [0,1]},
   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}]
}).draw();

 
var retCpfPayoutTableReplica = $('#retCpfPayoutTableReplica').DataTable( {
   destroy: true,
   responsive: false,         
  // ordering: false,
   ordering: true,
   searching: false,     
   scrollY:  "21vh",
   scrollX: false,
   scroller: false,
   scrollCollapse:false,
   info:false,
   paging:false, 
   filter:false,   
   dom: '<<"top" ip>flt>',  
   columnDefs: [  { width: '10px', targets: [0]},
                { width: '30px', targets: [1]},
                { width: '10px', targets: [2]},
                { width: '100px', targets: [3,4]},
  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4],"searchable": false},{ "orderable": false,targets: [0]}],	 
  	       	columns: [
	        	    null,
	            	  { "orderDataType": "dom-text", type: 'string' },
	        	      { "orderDataType": "dom-text-numeric" },
	        	      { "orderDataType": "dom-text-numeric" },
	        	      { "orderDataType": "dom-text-numeric" }
	        	     ],
	        		fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
	        	    //debugger;
	        	    var index = iDisplayIndexFull + 1;
	        	    $("td span", nRow).html(index);
	        	    return nRow;
	        	}
}).draw();




var cpfpayoutRD = $('#cpfpayoutRD').DataTable( {
   destroy: true,
   responsive: false,         
   ordering: false,
   searching: false,     
   scrollY:  "21vh",
   scrollX: true,
   scroller: false,
   scrollCollapse:false,
   info:false,
   paging:false, 
   filter:false,   
   dom: '<<"top" ip>flt>',  
 columnDefs: [  { width: '10px', targets: [0]},
                { width: '30px', targets: [1]},
                { width: '10px', targets: [2]},
                { width: '100px', targets: [3,4]},
  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4],"orderable": false,"searchable": false}]		 
	
}).draw();




	
var srsTable = $('#srsTable').DataTable( {
	   destroy: true,
	   responsive: false,         
	   ordering: false,
	   searching: false,     
	   scrollY:  "40vh",
	   scrollX: true,
	   scroller: false,
	   scrollCollapse:false,
	   info:false,
	   paging:false, 
	   filter:false,   
	   dom: '<<"top" ip>flt>',  
	   columnDefs: [  { width: '20px', targets: [0,1]},
	  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5],"orderable": false,"searchable": false}]		 
		 
	}).draw();
 

$('#sidebar-menu a').on("click",function(){
	//$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	 
});
 

$('#lifeInsNavTabsDets').find("li a").on("click",function(){ 
 
//	setTimeout(function(){
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
//	},500); 
});
 


var reviewLogTable = $('#reviewLogTable').DataTable( {
	destroy: true,
 	responsive: false,        
    ordering: false,
    searching: false,
	scrollY:  "50vh",   
	scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,  
    dom: '<<"top" ip>flt>',
	columnDefs: [  { width: '20px', targets: [0,1]},
       	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}]		 
	 
}).draw();







//MASTER CPF SCREEN
 
var cpfSrchDetails=$("#CpfSearchDetail").DataTable({
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "50vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:false,
    info:false,
    paging:false, 
    filter:false,   
    dom: '<<"top" ip>flt>'
});



function ctrlOverFlowDataTable(tblid){
	 
	$("#"+tblid+"_wrapper").css("width","98%");
	$("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("width","101.6%");
	$("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("overflow","scroll"); 
}


$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
       .columns.adjust();
 }); 


$(document).on('show.bs.modal', function () {
	$($.fn.dataTable.tables(true)).DataTable()
    .columns.adjust();
});


$("li.mainmenu a").on("click",function(){
	 setTimeout(function(){ 
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
	 },100); 
});
//$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
