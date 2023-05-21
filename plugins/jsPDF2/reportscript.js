
/*$("#popcolorid").click(function(){
	  $("#raddrop").addClass("rad-dropmenu-item rad-settings active");
	});*/

function drawdatatablepaging(tableid){

    $('#'+tableid).DataTable( {
            "paging":   false,
            "ordering": false,
            "info":     false,
            "searching":false                 
        });

}

$("#pdfPrint").click(function (){ 
	$("#canvasSelfBarChart1").addClass("chartjs-render-monitor widthpixel");
	$("#canvasSelfBarChart").addClass("chartjs-render-monitor widthpixel");
	var pl ="portrait";  // landscape     portrait
	var fileSave ="CashFlowAnalysis";
	
	var tblIddeptParticularsTable ="pdfContent";  //table id 
	var tblIddeptParticularsTablefooter ="chartpdfid";
	var divchartid ="tdlid";
	var tdlid2 ="tdlid2";
	var chartid ="chartid";
	var chartid1 ="chartid1";
	var chartpdfid1 ="chartpdfid1";
	var pdfTitle =""; // $(".cpfAccounttitle").text(); // table title name
	 
	var screentittlefootername = "Income and Expenses (Cash Flow Analysis)";

	
	
	var jsonObject = 
	    [{"key":"Image","value":tblIddeptParticularsTable,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	    // {"key":"Image","value":divchartid,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	     {"key":"Image","value":tblIddeptParticularsTablefooter,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"}
	    // {"key":"Image","value":chartpdfid1,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"}
	    // {"key":"Image","value":chartid,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	    // {"key":"Image","value":chartid1,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"}
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
	 },100);
	 
});




//vignesh add on 23 06 2021

function SRSRepotSrch(strFNAId){
	 
	showLoader(); 
	var fnaId = strFNAId;
	//var fnaId="FNA0000000000002940";
	var parameter = "DBCALLFOR=GET_SRS_PROJECTION&strFnaId="+ fnaId ;
	//console.log("length ----------->  " + parameter.length);
	 
	ajaxCall(parameter,servletName,function(Data){
		var SRSretval = Data;
//		console.log(JSON.stringify("data--> " + Data.length));
//		console.log(JSON.stringify("retval--> " + SRSretval.length));
//		console.log(("retval--> " + SRSretval.length));
		//for ( var val in retval) {
		//	var tabdets = retval[val];
		//	var selfRentalLodging = Number(tabdets["EXPD_SELF_RENT"]); // FNA_ID,SELF_DOB,SELF_AGE,SRS_OPEN_BAL,SRS_ANNL_ADD,SRS_ANNL_WITHDRAW,SRS_CLOSING_BAL
		//}
		var ageopenclosebal;
		var barChartData;
		var SRStblId = document.getElementById("SRSProjectionTablereport");
		var SRStbody = SRStblId.tBodies[0];
	  
		var  Total_SRS_OPEN_BAL=0,Total_SRS_ANNL_ADD=0,Total_SRS_ANNL_WITHDRAW=0,Total_SRS_CLOSING_BAL=0;
		
		 for ( var SRScont in SRSretval) {
			 
			if (SRSretval.hasOwnProperty(SRScont)) {
				
				/*if(TotalAnnualInflowSELF == 0 && TotAnnualExpensesSELF == 0){
        		  $("#selfnodatafount").css('display','block');
        		  $("#canvasSelfDiv").css('display','none');
        			}else{
        		 $("#selfnodatafount").css('display','none');
        		 $("#canvasSelfDiv").css('display','block');
        		 
        			}*/
 
ageopenclosebal =SRSretval;
barChartData = SRScont;

//console.log("ageopenclosebal   " +  JSON.stringify(ageopenclosebal))

//console.log("SRScont   " ,  SRScont)

				
				var SRScontvalue = SRSretval[SRScont];
				 
				var rc = Number(SRScont);
				var crow = SRStbody.insertRow(SRScont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= (isEmpty(SRScontvalue["SELF_AGE"])?"0":(SRScontvalue["SELF_AGE"])); 					
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML = (numberWithCommas(isEmpty(SRScontvalue["SRS_OPEN_BAL"])?"0":(SRScontvalue["SRS_OPEN_BAL"])));   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML = (numberWithCommas(isEmpty(SRScontvalue["SRS_ANNL_ADD"])?"0":(SRScontvalue["SRS_ANNL_ADD"])));  
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML = (numberWithCommas(isEmpty(SRScontvalue["SRS_ANNL_WITHDRAW"])?"0":(SRScontvalue["SRS_ANNL_WITHDRAW"])));  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML = (numberWithCommas(isEmpty(SRScontvalue["SRS_CLOSING_BAL"])?"0":(SRScontvalue["SRS_CLOSING_BAL"])));  
				cell5.style.textAlign = "center";
				   
				//(isEmpty(selfEmploymentMonthInc) ? "0" :selfEmploymentMonthInc)
				//var selfRentalLodging = Number(tabdets["EXPD_SELF_RENT"]); // FNA_ID,SELF_DOB,SELF_AGE,SRS_OPEN_BAL,SRS_ANNL_ADD,SRS_ANNL_WITHDRAW,SRS_CLOSING_BAL
			}
			
			Total_SRS_OPEN_BAL = Total_SRS_OPEN_BAL+ Number(isEmpty(SRScontvalue["SRS_OPEN_BAL"])?"0":(SRScontvalue["SRS_OPEN_BAL"]));
			Total_SRS_ANNL_ADD = Total_SRS_ANNL_ADD+ Number(isEmpty(SRScontvalue["SRS_ANNL_ADD"])?"0":(SRScontvalue["SRS_ANNL_ADD"]));
			Total_SRS_ANNL_WITHDRAW = Total_SRS_ANNL_WITHDRAW+ Number(isEmpty(SRScontvalue["SRS_ANNL_WITHDRAW"])?"0":(SRScontvalue["SRS_ANNL_WITHDRAW"]));
			Total_SRS_CLOSING_BAL = Total_SRS_CLOSING_BAL+ Number(isEmpty(SRScontvalue["SRS_CLOSING_BAL"])?"0":(SRScontvalue["SRS_CLOSING_BAL"]));
		 
			
			} 
		
//		 console.log(("Total_SRS_OPEN_BAL--> " + Total_SRS_OPEN_BAL));
//		 console.log(("Total_SRS_ANNL_ADD--> " + Total_SRS_ANNL_ADD));
//		 console.log(("Total_SRS_ANNL_WITHDRAW--> " + Total_SRS_ANNL_WITHDRAW));
//		 console.log(("Total_SRS_CLOSING_BAL--> " + Total_SRS_CLOSING_BAL));
		 
		 
		 checkerror(Total_SRS_OPEN_BAL,"totalSRSopenbalId");
		 var totalSRSopenbalIdCal = numberWithCommas(Total_SRS_OPEN_BAL);
		 $('#totalSRSopenbalId').html(totalSRSopenbalIdCal);
		 
		 checkerror(Total_SRS_ANNL_ADD,"totalSRSannladdId");
		 var totalSRSopenbalIdCall = numberWithCommas(Total_SRS_ANNL_ADD);
		 $('#totalSRSannladdId').html(totalSRSopenbalIdCall);
		 
		 checkerror(Total_SRS_ANNL_WITHDRAW,"totalSRSannlwithdrawId");
		 var totalSRSannlwithdrawCal = numberWithCommas(Total_SRS_ANNL_WITHDRAW);
		 $('#totalSRSannlwithdrawId').html(totalSRSannlwithdrawCal);
		 
		 checkerror(Total_SRS_CLOSING_BAL,"totalSRScloseingbalId");
		 var totalSRScloseingbalCal = numberWithCommas(Total_SRS_CLOSING_BAL);
		 $('#totalSRScloseingbalId').html(totalSRScloseingbalCal);
		 
		 
		 


		 var SrsSummaryJSONArray=[];
		 var pieChartSRSDiv = document.getElementById("pieChartSRS");
		   pieChartSRSDiv.innerHTML="";
		   pieChartSRSDiv.innerHTML="<canvas id='canvaspieChartSRS' class=''></canvas>";
		   
		   var SrsOpenBalJSONObject = {"key":"SRS OPEN BAL","value":Total_SRS_OPEN_BAL, "Open Bal":Total_SRS_OPEN_BAL,"Annl ADD":Total_SRS_ANNL_ADD,"Annl Withdraw":Total_SRS_ANNL_WITHDRAW, "Closing Bal":Total_SRS_CLOSING_BAL};
		   var SrsAnnlAddJSONObject = {"key":"SRS ANNL ADD","value":Total_SRS_ANNL_ADD };
		   var SrsAnnlWithdrawJSONObject = {"key":"SRS ANNL WITHDRAW","value":Total_SRS_ANNL_WITHDRAW };
		   var SrsClosingBalJSONObject = {"key":"SRS CLOSING BAL","value":Total_SRS_CLOSING_BAL };

		   SrsSummaryJSONArray.push(SrsOpenBalJSONObject);
		   SrsSummaryJSONArray.push(SrsAnnlAddJSONObject);
		   SrsSummaryJSONArray.push(SrsAnnlWithdrawJSONObject);
		   SrsSummaryJSONArray.push(SrsClosingBalJSONObject);
		   
		   var labels = SrsSummaryJSONArray.map(function (e) {
		    return  e.key;
		 });

		 var datavalue = SrsSummaryJSONArray.map(function (e) {
		    return  e.value;
		 });

		 var canvaspieChart = document.getElementById("canvaspieChartSRS");
		 var randomColorGenerator = () => {
		    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
		 };
		   var len = datavalue.length;

		 bgColors = function (len) {
		    var bgArray = new Array(len);
		    for (var j = 0; j < len; j++) {
		        bgArray[j] = randomColorGenerator();
		    }
		    return bgArray;
		 }

		 chartTypeSelf = "Pie";
		 //Pie chart
		 if (chartTypeSelf == "Pie") { 
		 	configSelf = {
		            type: 'pie',
		            data: {
		                datasets: [{
		                    
		                    data: datavalue,
		                    backgroundColor: bgColors(len),
		                    borderWidth: 0.5,
		                    label: 'SRS (Investment Summary) ' 
		                }],
		                labels: labels 
		            },
		             
		            options: {
		                responsive: true,
		                legend: {
		                    position: 'left',
		                },
		                tooltips: {
		                    callbacks: {
		                        label: function (item, data) {
		                        	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
		                        }
		                    }
		                },
		                plugins: {
		                    labels: {
		 	              render: 'percentage',
		 	              fontColor: ['white','white'],
		 	              precision: 2
		 	            } 
		            }
		            },
		        };
		 }

		   
		 var ctxSelf = document.getElementById('canvaspieChartSRS').getContext('2d');
		 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
		 }});

		 selfmychart.destroy();
		 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
		 }});

		 window.resetZoom  = function () {
		 	selfmychart.resetZoom();
		 };

		 // let bgColor;
		 if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
		 	bgColor = bgColors(datavalue.length);
		 }
		 configSelf.data.datasets[0].data = datavalue;
		 if (bgColor != undefined) {
		 	configSelf.data.datasets[0].backgroundColor = bgColor;
		 }

		 selfmychart.update();
		 selfmychart.resetZoom();
		// loadDynamicChartSelfDonut(SrsSummaryJSONArray);
		   
		   
		   
		   
		 /*====================================================Bar chart==============================================================*/

		 var finallabel ="SRS OPEN BAL";
		 SRSloadDynamicChart(SrsSummaryJSONArray,finallabel);
		 //self bar chart
		 function SRSloadDynamicChart(SrsSummaryJSONArray,finallabel){
		  	   var labelsValidate =finallabel;
		  	             var firstvalue="";
		  	             var secondvalue="";

		  	             for(var i=0; i<SrsSummaryJSONArray.length;i++){
		  	               firstvalue=SrsSummaryJSONArray[0];
		  	               secondvalue=SrsSummaryJSONArray[1];
		  	             }
		  	    
		  	   var firstvaluekey=[];
		  	   var firstvalueVal=[];

		  	   for (var [key, value] of Object.entries(firstvalue)) {
		  	     
		  	     if(key!="key" && key!="value")
		  	     {
		  	       firstvaluekey.push(key);
		  	       firstvalueVal.push(value);
		  	     } 
		  	   }

		  	 /*  var secondvaluekey=[];
		  	   var secondvalueVal=[];
		  	    
		  	   for (var [key, value] of Object.entries(secondvalue)) {
		  	      
		  	     if(key!="key" && key!="value")
		  	     {
		  	       secondvaluekey.push(key);
		  	       secondvalueVal.push(value);
		  	     }
		  	   }*/
		  	    
		  	   var barChartSRSDiv = document.getElementById("barChartSRS");
		  	       barChartSRSDiv.innerHTML="";
		       	   barChartSRSDiv.innerHTML="<canvas id='canvasbarChartSRS' class=''></canvas>";

		  	   var labels="";
		  	   var data1 ="";
		  	   if(labelsValidate =="SRS OPEN BAL"){
		  		  // $("#detailsExpenseCharttittle").val("Details of Income");
		  	       labels= firstvaluekey ;
		  	       data1=firstvalueVal;
		  	   } 
		  	           
		  	   var configSelfBar="";
		  	   //Filter data here based on the condition

		  	   var chartTypeSelfnew ="";
		  	   var chartTypeSpouse="";
		  	   
		  	   var bgColor = "";
		  	   var selfbarchart="";
		  	   
		  	          
		  	               var randomColorGenerator = () => {
		  	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
		  	               };
		  	              
		  	             var  len = data1.length;
		  	              
		  	               var  bgColors = function (len) {
		  	                   var bgArray = new Array(len);
		  	                   for (var j = 0; j < len; j++) {
		  	                       bgArray[j] = randomColorGenerator();
		  	                   }
		  	                   return bgArray;
		  	               }

		  	             

		  	   //Line chart

		  	   Chart.defaults.LineWithLine = Chart.defaults.line;
		  	           Chart.controllers.LineWithLine = Chart.controllers.line.extend({
		  	               draw: function (ease) {
		  	                   Chart.controllers.line.prototype.draw.call(this, ease);

		  	                   if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
		  	                       var activePoint = this.chart.tooltip._active[0],
		  	                       ctx = this.chart.ctx,
		  	                           x = activePoint.tooltipPosition().x,
		  	                           topY = this.chart.legend.bottom,
		  	                           bottomY = this.chart.chartArea.bottom;

		  	                       // draw line
		  	                       ctx.save();
		  	                       ctx.beginPath();
		  	                       ctx.moveTo(x, topY);
		  	                       ctx.lineTo(x, bottomY);
		  	                       ctx.lineWidth = 1;
		  	                       ctx.strokeStyle = '#4aa2eb';
		  	                       ctx.stroke();
		  	                       ctx.restore();
		  	                   }
		  	               }
		  	           });

		  	           chartTypeSelfnew = "Bar";

		  	           if (chartTypeSelfnew == "Bar") {
		  	               var bgColor = bgColors(len);
		  	                   var fund1data = {
		  	                       label: 'SRS (Investment Summary)',
		  	                       data: data1,
		  	                       categoryPercentage: 0.5,
		  	                       barPercentage: 1,
		  	                       backgroundColor: bgColor,
		  	                        
		  	                       borderWidth: 0,
		  	                       yAxisID: "y-axis-AnnualIncome"
		  	                   };

		  	                   var fundData = {
		  	                       labels: labels,
		  	                       datasets: [fund1data],

		  	                   };

		  	                   configSelfBar = {
		  	                       type: 'bar',
		  	                       data: fundData,
		  	                       options: {
		  	                           tooltips: {
		  	                               mode: 'label',
		  	                               callbacks: {
		  	                                   title: function(tooltipItems, data) {
		  	                                   return tooltipItems[0].xLabel ;
		  	                                   },
		  	                                   label: (tooltipItem, data) => {
		  	                                	   return ;
		  	                                       
		  	                                      // return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
		  	                                   },
		  	                                   footer: (tooltipItems, data) => {
		  	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
		  	                                       return ' Total : $ ' + total.toFixed(2);
		  	                                   }
		  	                               }
		  	                           },

		  	                           plugins: {
		  	                               labels:false
		  	                       },
		  	                       legend: {
		  	                       	display: false
		  	                       },

		  	                           scales: {
		  	                               xAxes: [{
		  	                                   display: true,
		  	                                   scaleLabel: {
		  	                                       display: true,
		  	                                       labelString: ' '
		  	                                   }, ticks: {
		  	                                       minRotation: 0,
		  	                                       maxRotation: 80,
		  	                                   },
		  	                                   //  stacked:true//Stacked bar chart

		  	                               }],
		  	                               yAxes: [{
		  	                                   display: true,
		  	                                   scaleLabel: {
		  	                                       display: true,
		  	                                       labelString: 'Amount'
		  	                                   }, 
		  	                                   
		  	                                   id: "y-axis-AnnualIncome",
		  	                                   ticks: {
		 				        	                       beginAtZero: true,
		 				        	                       callback: function(value, index, values) {
		 				        	                       return '$ ' + value;
		 		        	                       }
		 		        	                   }
		  	                               }]
		  	                           },
		  	                           pan: {
		  	                               enabled: true,
		  	                               mode: "x",
		  	                               speed: 10,
		  	                               threshold: 10,
		  	                               onPan: function ({ chart }) { canvasbarChartSRS.style.cursor = "grabbing"; },
		  	                               onPanComplete: function ({ chart }) { canvasbarChartSRS.style.cursor = "default"; }
		  	                           },
		  	                           zoom: {
		  	                               enabled: true,
		  	                               drag: false,
		  	                               mode: "x",
		  	                               limits: {
		  	                                   max: 10,
		  	                                   min: 0.5
		  	                               },
		  	                               onZoom: function ({ selfbarchart }) { canvasbarChartSRS.style.cursor = "grabbing"; },
		  	                               onZoomComplete: function ({ selfbarchart }) { canvasbarChartSRS.style.cursor = "default"; }
		  	                           }
		  	                       }
		  	                   };
		  	               }

		  	         var ctxSelf = document.getElementById('canvasbarChartSRS').getContext('2d');
	 	                selfbarchart = new Chart(ctxSelf, configSelfBar );
	 	             
	 	               selfbarchart.destroy();
	 	               selfbarchart = new Chart(ctxSelf, configSelfBar );
	 	               
	 	               window.resetZoom  = function () {
	 	                 	selfbarchart.resetZoom();
	 	                 };
	 	                 
	 	              // let bgColor;
	 	               if (configSelfBar.type == "doughnut" || configSelfBar.type == "pie" ){
	 	               	bgColor = bgColors(data1.length);
	 	               }
	 	               configSelfBar.data.datasets[0].data = data1;
	 	               if (bgColor != undefined) {
	 	            	   configSelfBar.data.datasets[0].backgroundColor = bgColor;
	 	               }
	 	              
	 	               selfbarchart.update();
	 	               selfbarchart.resetZoom();
	 	             
		  	         }
		 /*====================================================Bar chart 05 07 2021==============================================================*/ 
	
	
				if(barChartData.length > 0 ){ 
	        		 $("#srsnodatafount").css('display','none');
	        		 $("#barChartopenclosebalSRS").css('display','block');
						//console.log("barChartData  data " ,  barChartData)
	        	}else{
	                  $("#srsnodatafount").css('display','block');
	        		  $("#barChartopenclosebalSRS").css('display','none');
	        	}

		// (isEmpty(ageopenclosebal) ? "0" :ageopenclosebal)
			var labels = ageopenclosebal.map(function (e) {
			    return  e.SELF_AGE;
			 });

			 var datavalue1 = ageopenclosebal.map(function (e) {
			    return  e.SRS_OPEN_BAL;
			 });
			 
			 var datavalue2 = ageopenclosebal.map(function (e) {
				    return  e.SRS_CLOSING_BAL;
				 });


			 var srsbarchart="";
			 
			 var chart;
			 var barChartopenclosebalSRSDiv = document.getElementById("barChartopenclosebalSRS");
			 barChartopenclosebalSRSDiv.innerHTML="";
			 barChartopenclosebalSRSDiv.innerHTML="<canvas id='canvasbarChartopenclosebalSRS' class=''></canvas>";
			 
			 var randomColorGenerator = () => {
			    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
			 };
		 
			 len = datavalue1.length;
		        var bgColors = function (len) {
		            var bgArray = new Array(len);
		            for (var j = 0; j < len; j++) {
		                bgArray[j] = randomColorGenerator();
		            }
		            return bgArray;
		        }
		        
			 Chart.defaults.LineWithLine = Chart.defaults.line;
		        Chart.controllers.LineWithLine = Chart.controllers.line.extend({
		            draw: function (ease) {
		                Chart.controllers.line.prototype.draw.call(this, ease);

		                if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
		                    var activePoint = this.chart.tooltip._active[0],
		                    ctx = this.chart.ctx,
		                        x = activePoint.tooltipPosition().x,
		                        topY = this.chart.legend.bottom,
		                        bottomY = this.chart.chartArea.bottom;

		                    // draw line
		                    ctx.save();
		                    ctx.beginPath();
		                    ctx.moveTo(x, topY);
		                    ctx.lineTo(x, bottomY);
		                    ctx.lineWidth = 1;
		                    ctx.strokeStyle = '#4aa2eb';
		                    ctx.stroke();
		                    ctx.restore();
		                }
		            }
		        });
		 var onloadbarchart = "Bar";
		 
			 if (onloadbarchart == "Bar") {
	                var fund1data = {
	                    label: 'Opening Balance',
	                    data: datavalue1,
	                    categoryPercentage: 0.5,
	                    barPercentage: 1,
	                    backgroundColor: 'rgba(0, 99, 132, 0.9)',
	                    hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
	                    borderWidth: 0,
	                    yAxisID: "y-axis-AnnualIncome"
	                };


	                var fund2data = {
	                    label: 'Closing Balance',
	                    data: datavalue2,
	                    categoryPercentage: 0.5,
	                    barPercentage: 1,
	                    backgroundColor: 'rgba(99, 132, 0, 0.9)',
	                    hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
	                    borderWidth: 0,
	                    yAxisID: "y-axis-AnnualIncome"
	                };
	                

	                var fundData = {
	                    labels: labels,
	                    datasets: [fund1data, fund2data],
	                   

	                };

	                config = {
	                    type: 'bar',
	                    data: fundData,
	                    options: {
	                        tooltips: {
	                            mode: 'label',
	                            callbacks: {
	                                title: function(tooltipItems, data) {
	                                return 'Age: ' + tooltipItems[0].xLabel ;
	                                },
	                                label: (tooltipItem, data) => {
	                              //      console.log(tooltipItem.label)
	                                     
	                                    //tooltipItem.label+" "+
	                                    return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
	                                },
	                                footer: (tooltipItems, data) => {
	                                    let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
	                                   // return 'Total : $ ' + total.toFixed(3);
	                                }
	                            }
	                        },

	                        plugins: {
	                            labels:false
	                    },

	                        
	                        scales: {

	                            xAxes: [{
	                                display: true,
	                                scaleLabel: {
	                                    display: true,
	                                    labelString: 'Age'
	                                }, ticks: {

	                                    minRotation: 0,
	                                    maxRotation: 80,
	                                },
	                                //  stacked:true//Stacked bar chart

	                            }],
	                            yAxes: [{
	                                display: true,
	                                scaleLabel: {
	                                    display: true,
	                                    labelString: 'Amount'

	                                }, 
	                                
	                                id: "y-axis-AnnualIncome",
	                                ticks: {
	                    beginAtZero: true,
	                     callback: function(value, index, values) {
	                        return '$ ' + value;
	                    }
	                }
	                                // stacked:true//Stacked bar chart
	                            }]
	                        },
	                        pan: {
	                            enabled: true,
	                            mode: "x",
	                            speed: 10,
	                            threshold: 10,
	                            onPan: function ({ chart }) { canvasbarChartopenclosebalSRS.style.cursor = "grabbing"; },
	                            onPanComplete: function ({ chart }) { canvasbarChartopenclosebalSRS.style.cursor = "default"; }
	                        },
	                        zoom: {
	                            enabled: true,
	                            drag: false,
	                            mode: "x",
	                            limits: {
	                                max: 10,
	                                min: 0.5
	                            },
	                            onZoom: function ({ chart }) { canvasbarChartopenclosebalSRS.style.cursor = "grabbing"; },
	                            onZoomComplete: function ({ chart }) { canvasbarChartopenclosebalSRS.style.cursor = "default"; }


	                        }
	                    }
	                };

	            }
		 
		 
			 var srsctx = document.getElementById('canvasbarChartopenclosebalSRS').getContext('2d');
	            chart = new Chart(srsctx, config);
	            chart.destroy();
	            
	            chart = new Chart(srsctx, config);

	            let datasetLength = config.data.datasets.length;
 
	             
	            var bgColor;
	           /* if (config.type == "doughnut" || config.type == "pie") {
	                bgColor = bgColors(datavalue1.length);
	            }*/
	            config.data.datasets[0].data = datavalue1;
	            /*if (bgColor != undefined) {
	                config.data.datasets[0].backgroundColor = bgColor;

	            }*/

	          /*  if (datasetLength == 2) {
	                let  data2 = ageopenclosebal.map(function (e) {
	                   return e.SRS_CLOSING_BAL;
	                });
	                
	              
	                config.data.datasets[1].data = data2;
	                if (bgColor != undefined) {
	                    config.data.datasets[1].backgroundColor = bgColor;

	                }


	            }*/

	            config.data.labels = labels;
	            chart.update();
	            chart.resetZoom();
		 
	            /*====================================================End Bar chart 05 07 2021==============================================================*/  
		  
	});
	hideLoader();
}



var AnnualIncomeExpSelfChartDataJSONArray=[];

function cashFlowSrch(strFNAId){
	showLoader(); 
var fnaId = strFNAId;
	//var fnaId="FNA0000000000002992";
var parameter = "DBCALLFOR=GET_CASHFLOW_PROJECTION&strFnaId="+ fnaId ;

ajaxCall(parameter,servletName,function(Data){
var retval = Data;
hideLoader()
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



/*$(document).ready(function() {
	var annualIncomeIdvalue = $("#annualIncomeId").html();
	 
	  if (annualIncomeIdvalue < 0) {
	    $("#annualIncomeId").css({
	      'background-color': '#ff0000',
	    })
	  }
	  
	  var employeeContributionvalue = $("#employeeContribution").html();
 
	  if (employeeContributionvalue < 0) {
	    $("#employeeContribution").css({
	      'background-color': '#ff0000',
	    })
	  }
	  
	  var annualInflowidvalue = $("#annualInflowid").html();
	 
	  if (annualInflowidvalue < 0) {
	    $("#annualInflowid").css({
	      'background-color': '#ff0000',
	    })
	  }
	  var netSurplusDeficitidvalue = $("#netSurplusDeficitid").html();
		console.log(netSurplusDeficitidvalue);
		  if (netSurplusDeficitidvalue < 0) {
		    $("#netSurplusDeficitid").css({
		      'background-color': '#ff0000',
		    })
		  }
	  
	});*/

/*Rental Related*/
var selfRentalLodging = Number(tabdets["EXPD_SELF_RENT"]);
var selfRentalLodgingCal = numberWithCommas(selfRentalLodging);
$('#selfRentalLodgingId').html(selfRentalLodgingCal);
$('#rentallodgings').html(selfRentalLodging);
var spouseRentalLodging = Number(tabdets["EXPD_SPS_RENT"]);
var spouseRentalLodgingCal = numberWithCommas(spouseRentalLodging);
$('#spouseRentalLodgingId').html(spouseRentalLodgingCal);
var familyRentalLodging = Number(tabdets["EXPD_FAMILY_RENT"]);
var familyRentalLodgingCal = numberWithCommas(familyRentalLodging);
$('#familyRentalLodgingId').html(familyRentalLodgingCal);

/*Utility Related*/
var selfUtility = Number(tabdets["EXPD_SELF_UTIL"]);
var selfUtilityCal = numberWithCommas(selfUtility);
$('#selfUtilitiesId').html(selfUtilityCal);
$('#utilitiesComm').html(selfUtility);
var spouseUtility = Number(tabdets["EXPD_SPS_UTIL"]);
var spouseUtilityCal = numberWithCommas(spouseUtility);
$('#spouseUtilitiesId').html(spouseUtilityCal);
var familyUtility = Number(tabdets["EXPD_FAMILY_UTIL"]);
var familyUtilityCal = numberWithCommas(familyUtility);
$('#familyUtilitiesId').html(familyUtilityCal);

/*Grocery Related*/
var selfGrocery = Number(tabdets["EXPD_SELF_GROCERY"]);
var selfGroceryCal = numberWithCommas(selfGrocery);
$('#selfGroceryHouseholdId').html(selfGroceryCal);
$('#groceryHouse').html(selfGrocery);
var spouseGrocery = Number(tabdets["EXPD_SPS_GROCERY"]);
var spouseGroceryCal = numberWithCommas(spouseGrocery);
$('#spouseGroceryHouseholdId').html(spouseGroceryCal);
var familyGrocery = Number(tabdets["EXPD_FAMILY_GROCERY"]);
var familyGroceryCal = numberWithCommas(familyGrocery);
$('#familyGroceryHouseholdId').html(familyGroceryCal);

/*EatingOut Related*/
var selfEatingOut = Number(tabdets["EXPD_SELF_EATINGOUT"]);
var selfEatingOutCal = numberWithCommas(selfEatingOut);
$('#selfEatingOutId').html(selfEatingOutCal);
$('#eatingOut').html(selfEatingOut);
var spouseEatingOut = Number(tabdets["EXPD_SPS_EATINGOUT"]);
var spouseEatingOutCal = numberWithCommas(spouseEatingOut);
$('#spouseEatingOutId').html(spouseEatingOutCal);
var familyEatingOut = Number(tabdets["EXPD_FAMILY_EATINGOUT"]);
var familyEatingOutCal = numberWithCommas(familyEatingOut);
$('#familyEatingOutId').html(familyEatingOutCal);

/*Clothing Related*/
var selfClothing = Number(tabdets["EXPD_SELF_CLOTHING"]);
var selfClothingCal = numberWithCommas(selfClothing);
$('#selfClothingApparelId').html(selfClothingCal);
$('#clothingApparel').html(selfClothing);
var spouseClothing = Number(tabdets["EXPD_SPS_CLOTHING"]);
var spouseClothingCal = numberWithCommas(spouseClothing);
$('#spouseClothingApparelId').html(spouseClothingCal);
var familyClothing = Number(tabdets["EXPD_FAMILY_CLOTHING"]);
var familyClothingCal = numberWithCommas(familyClothing);
$('#familyClothingApparelId').html(familyClothingCal);

/*Transportation Related*/
var selfTransport = Number(tabdets["EXPD_SELF_TRANSPORT"]);
var selfTransportCal = numberWithCommas(selfTransport);
$('#selfTransportId').html(selfTransportCal);
var spouseTransport = Number(tabdets["EXPD_SPS_TRANSPORT"]);
var spouseTransportCal = numberWithCommas(spouseTransport);
$('#spouseTransportId').html(spouseTransportCal);
var familyTransport = Number(tabdets["EXPD_FAMILY_TRANSPORT"]);
var familyTransportCal = numberWithCommas(familyTransport);
$('#familyTransportId').html(familyTransportCal);

/*Medical Related*/
var selfMedical = Number(tabdets["EXPD_SELF_MEDICAL"]);
var selfMedicalCal = numberWithCommas(selfMedical);
$('#selfMedicalPersonalId').html(selfMedicalCal);
var spouseMedical = Number(tabdets["EXPD_SPS_MEDICAL"]);
var spouseMedicalCal = numberWithCommas(spouseMedical);
$('#spouseMedicalPersonalId').html(spouseMedicalCal);
var familyMedical = Number(tabdets["EXPD_FAMILY_MEDICAL"]);
var familyMedicalCal = numberWithCommas(familyMedical);
$('#familyMedicalPersonalId').html(familyMedicalCal);


/*Personal Related*/
var selfPersonal = Number(tabdets["EXPD_SELF_PERSONAL"]);
var selfPersonalCal = numberWithCommas(selfPersonal);
$('#selfPersonalExpId').html(selfPersonalCal);
var spousePersonal = Number(tabdets["EXPD_SPS_PERSONAL"]);
var spousePersonalCal = numberWithCommas(spousePersonal);
$('#spousePersonalExpId').html(spousePersonalCal);
var familyPersonal = Number(tabdets["EXPD_FAMILY_PERSONAL"]);
var familyPersonalCal = numberWithCommas(familyPersonal);
$('#familyPersonalExpId').html(familyPersonalCal);

/*Household Related*/
var selfHouseHold = Number(tabdets[""]);
$('#selfHouseholdMaintId').html("-N/A-");
var spouseHouseHold = Number(tabdets[""]);
$('#spouseHouseholdMaintId').html("-N/A-");
var familyHouseHold = Number(tabdets["EXPD_FAMILY_HOUSEHOLD"]);
var familyHouseHoldCal = numberWithCommas(familyHouseHold);
$('#familyHouseholdMaintId').html(familyHouseHoldCal);

/*Domestic Related*/
var selfDomestic = Number(tabdets[""]);
$('#selfdomesticHelpId').html("-N/A-");
var spouseDomestic = Number(tabdets[""]);
$('#spousedomesticHelpId').html("-N/A-");
var familyDomestic = Number(tabdets["EXPD_FAMILY_DOMESTIC"]);
var familyDomesticCal = numberWithCommas(familyDomestic);
$('#familydomesticHelpId').html(familyDomesticCal);


/*ChildrenCare Related*/
var selfChildCare = Number(tabdets[""]);
$('#selfChildrenEduEnhProgId').html("-N/A-");
var spouseChildCare = Number(tabdets[""]);
$('#spouseChildrenEduEnhProgId').html("-N/A-");
var familyChildCare = Number(tabdets["EXPD_FAMILY_ENHANCE"]);
var familyChildCareCal = numberWithCommas(familyChildCare);
$('#familyChildrenEduEnhProgId').html(familyChildCareCal);


/*Dependant Related*/
var selfDependant = Number(tabdets["EXPD_SELF_DEPNTCONTR"]);
var selfDependantCal = numberWithCommas(selfDependant);
$('#selfDependContriId').html(selfDependantCal);
var spouseDependant = Number(tabdets["EXPD_SPS_DEPNTCONTR"]);
var spouseDependantCal = numberWithCommas(spouseDependant);
$('#spouseDependContriId').html(spouseDependantCal);
var familyDependant = Number(tabdets[""]);
$('#familyDependContriId').html("-N/A-");

/*Taxes Related*/
var selfTaxes = Number(tabdets["EXPD_SELF_TAXES"]);
var selfTaxesCal = numberWithCommas(selfTaxes);
$('#selfTaxesId').html(selfTaxesCal);
var spouseTaxes = Number(tabdets["EXPD_SPS_TAXES"]);
var spouseTaxesCal = numberWithCommas(spouseTaxes);
$('#spouseTaxesId').html(spouseTaxesCal);
var familyTaxes = Number(tabdets["EXPD_FAMILY_TAXES"]);
var familyTaxesCal = numberWithCommas(familyTaxes);
$('#familyTaxesId').html(familyTaxesCal);

/*Entertainment Related*/
var selfEntertainment = Number(tabdets["EXPD_SELF_ENTERTAIN"]);
var selfEntertainmentCal = numberWithCommas(selfEntertainment);
$('#selfEntertainmentId').html(selfEntertainmentCal);
var spouseEntertainment = Number(tabdets["EXPD_SPS_ENTERTAIN"]);
var spouseEntertainmentCal = numberWithCommas(spouseEntertainment);
$('#spouseEntertainmentId').html(spouseEntertainmentCal);
var familyEntertainment = Number(tabdets["EXPD_FAMILY_ENTERTAIN"]);
var familyEntertainmentCal = numberWithCommas(familyEntertainment);
$('#familyEntertainmentId').html(familyEntertainmentCal);


/*Festive Related*/
var selfFestive = Number(tabdets["EXPD_SELF_FESTIV"]);
var selfFestiveCal = numberWithCommas(selfFestive);
$('#selfFestSpendId').html(selfFestiveCal);
var spouseFestive = Number(tabdets["EXPD_SPS_FESTIV"]);
var spouseFestiveCal = numberWithCommas(spouseFestive);
$('#spouseFestSpendId').html(spouseFestiveCal);
var familyFestive = Number(tabdets["EXPD_FAMILY_FESTIV"]);
var familyFestiveCal = numberWithCommas(familyFestive);
$('#familyFestSpendId').html(familyFestiveCal);


/*Vacations Related*/
var selfVacations = Number(tabdets["EXPD_SELF_VACATIONS"]);
var selfVacationsCal = numberWithCommas(selfVacations);
$('#selfVacationId').html(selfVacationsCal);
var spouseVacations = Number(tabdets["EXPD_SPS_VACATIONS"]);
var spouseVacationsCal = numberWithCommas(spouseVacations);
$('#spouseVacationId').html(spouseVacationsCal);
var familyVacations = Number(tabdets["EXPD_FAMILY_VACATIONS"]);
var familyVacationsCal = numberWithCommas(familyVacations);
$('#familyVacationId').html(familyVacationsCal);

/*Charity Related*/
var selfCharity = Number(tabdets["EXPD_SELF_CHARITY"]);
var selfCharityCal = numberWithCommas(selfCharity);
$('#selfCharityId').html(selfCharityCal);
var spouseCharity = Number(tabdets["EXPD_SPS_CHARITY"]);
var spouseCharityCal = numberWithCommas(spouseCharity);
$('#spouseCharityId').html(spouseCharityCal);
var familyCharity = Number(tabdets["EXPD_FAMILY_CHARITY"]);
var familyCharityCal = numberWithCommas(familyCharity);
$('#familyCharityId').html(familyCharityCal);

/*PropertyLoan Related*/
var selfPropertyLoan = Number(tabdets["EXPD_SELF_PROPLOAN"]);
var selfPropertyLoanCal = numberWithCommas(selfPropertyLoan);
$('#selfPropertyLoanRepaymentId').html(selfPropertyLoanCal);
var spousePropertyLoan = Number(tabdets["EXPD_SPS_PROPLOAN"]);
var spousePropertyLoanCal = numberWithCommas(spousePropertyLoan);
$('#spousePropertyLoanRepaymentId').html(spousePropertyLoanCal);
var familyPropertyLoan = Number(tabdets["EXPD_FAMILY_PROPLOAN"]);
var familyPropertyLoanCal = numberWithCommas(familyPropertyLoan);
$('#familyPropertyLoanRepaymentId').html(familyPropertyLoanCal);

/*VehicleLoan Related*/
var selfVehicleLoan = Number(tabdets["EXPD_SELF_VEHILOAN"]);
var selfVehicleLoanCal = numberWithCommas(selfVehicleLoan);
$('#selfVehicleLoanId').html(selfVehicleLoanCal);
var spouseVehicleLoan = Number(tabdets["EXPD_SPS_VEHILOAN"]);
var spouseVehicleLoanCal = numberWithCommas(spouseVehicleLoan);
$('#spouseVehicleLoanId').html(spouseVehicleLoanCal);
var familyVehicleLoan = Number(tabdets["EXPD_FAMILY_VEHILOAN"]);
var familyVehicleLoanCal = numberWithCommas(familyVehicleLoan);
$('#familyVehicleLoanId').html(familyVehicleLoanCal);

/*LifeInsuPrem Related*/
var selfLifeInsuPrem = Number(tabdets["EXPD_SELF_INSURANCE"]);
var selfLifeInsuPremCal = numberWithCommas(selfLifeInsuPrem);
$('#selfLifeInsPremId').html(selfLifeInsuPremCal);
var spouseLifeInsuPrem = Number(tabdets["EXPD_SPS_INSURANCE"]);
var spouseLifeInsuPremCal = numberWithCommas(spouseLifeInsuPrem);
$('#spouseLifeInsPremId').html(spouseLifeInsuPremCal);
var familyLifeInsuPrem = Number(tabdets["EXPD_FAMILY_INSURANCE"]);
var familyLifeInsuPremCal = numberWithCommas(familyLifeInsuPrem);
$('#familyLifeInsPremId').html(familyLifeInsuPremCal);

/*GeneralInsuPrem Related*/
var selfGeneralInsuPrem = Number(tabdets["EXPD_SELF_GI"]);
var selfGeneralInsuPremCal = numberWithCommas(selfGeneralInsuPrem);
$('#selfGenInsPremId').html(selfGeneralInsuPremCal);
var spouseGeneralInsuPrem = Number(tabdets["EXPD_SPS_GI"]);
var spouseGeneralInsuPremCal = numberWithCommas(spouseGeneralInsuPrem);
$('#spouseGenInsPremId').html(spouseGeneralInsuPremCal);
var familyGeneralInsuPrem = Number(tabdets["EXPD_FAMILY_GI"]);
var familyGeneralInsuPremCal = numberWithCommas(familyGeneralInsuPrem);
$('#familyGenInsPremId').html(familyGeneralInsuPremCal);

/*Others Related*/
var selfOthers = Number(tabdets["EXPD_SELF_OTHERS"]);
var selfOthersCal = numberWithCommas(selfOthers);
$('#selfOthersId').html(selfOthersCal);
var spouseOthers = Number(tabdets["EXPD_SPS_OTHERS"]);
var spouseOthersCal = numberWithCommas(spouseOthers);
$('#spouseOthersId').html(spouseOthersCal);
var familyOthers = Number(tabdets["EXPD_FAMILY_OTHERS"]);
var familyOthersCal = numberWithCommas(familyOthers);
$('#familyOthersId').html(familyOthersCal);

/*AnnualExp Related*/
var selfAnnualExp = Number(tabdets["EXPD_SELF_ANNAULEXP"]);
var selfAnnualExpCal = numberWithCommas(selfAnnualExp);
$('#selfAnnualExpId').html(selfAnnualExpCal);
var spouseAnnualExp = Number(tabdets["EXPDS_SPS_ANNALEXP"]);
var spouseAnnualExpCal = numberWithCommas(spouseAnnualExp);
$('#spouseAnnualExpId').html(spouseAnnualExpCal);
var familyAnnualExp = Number(tabdets["EXPD_FAMILY_ANNLEXP"]);
var familyAnnualExpCal = numberWithCommas(familyAnnualExp);
$('#familyAnnualExpId').html(familyAnnualExpCal);


/*NetAnnualInflow Related*/
/*var selfNetAnnualInflow = Number(tabdets["NEW_ANNL_SELF"]);
$('#selfNetannualInflowId').html(selfNetAnnualInflow);*/
//var selfNetAnnualInflow = Number(tabdets["INSRC_SELF_TOTANNL"])-Number(tabdets["CPF_CONTIB_SELF"]);
var selfNetAnnualInflow = ((Number(tabdets["INCSRC_SELF_EMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SELF_EMP_ADDLWAGE"])+(Number(tabdets["INCSRC_SELF_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SELF_NEMP_DIVDAMT"])+Number(tabdets["INCSRC_SELF_NEMP_RENTAMT"])+Number(tabdets["INCSRC_SELF_NEMP_OTHAMT"]))-Number(tabdets["CPF_CONTIB_SELF"]);
checkerror(selfNetAnnualInflow,"selfNetannualInflowId");
var selfNetAnnualInflowCal = numberWithCommas(selfNetAnnualInflow);
$('#selfNetannualInflowId').html(selfNetAnnualInflowCal);
checkerror(selfNetAnnualInflow,"annualInflowid");
var selfNetAnnualInflowCal = numberWithCommas(selfNetAnnualInflow);
$('#annualInflowid').html(selfNetAnnualInflowCal);/*AnnualInflow*/

/*var spouseNetAnnualInflow = Number(tabdets["NEW_ANNL_SPS"]);
$('#spouseNetannualInflowId').html(selfNetannualInflowId);*/
//var spouseNetAnnualInflow = Number(tabdets["INSRC_SPS_TOTANNL"])-Number(tabdets["CPF_CONTIB_SPS"]);
//var spouseNetAnnualInflow =  ((Number(tabdets["INCSRC_SPS_EMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SPS_EMP_ADDLWAGE"])+(Number(tabdets["INCSRC_SPS_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SPS_NEMP_DIVDAMT"])+ Number(tabdets["INCSRC_SPS_NEMP_RENTAMT"])+ Number(tabdets["INCSRC_SPS_NEMP_OTHAMT"]))-Number(tabdets["CPF_CONTIB_SPS"]);
var spouseNetAnnualInflow = Number(tabdets["NEW_ANNL_SPS"]);
checkerror(spouseNetAnnualInflow,"spouseNetannualInflowId");
var spouseNetAnnualInflowCal = numberWithCommas(spouseNetAnnualInflow);
$('#spouseNetannualInflowId').html(spouseNetAnnualInflowCal);

/*var familyNetAnnualInflow = Number(tabdets[""]);
$('#familyNetannualInflowId').html(familyNetAnnualInflow);*/
var familyNetAnnualInflow = (Number(tabdets["INCSRC_JOINT_EMP_MONTHLY"])*12)+(Number(tabdets["INCSRC_JOINT_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_JOINT_NEMP_DIVDAMT"])+ Number(tabdets["INCSRC_JOINT_NEMP_RENTAMT"])+Number(tabdets["INCSRC_JOINT_NEMP_OTHAMT"]);
checkerror(familyNetAnnualInflow,"familyNetannualInflowId");
$('#familyNetannualInflowId').html(familyNetAnnualInflow);


/*EmployeeCont Related*/
var selfEmployeeCont =Number(tabdets["CPF_CONTIB_SELF"]);
var selfEmployeeContCal = numberWithCommas(selfEmployeeCont);
$('#selfEmpContributionId').html(selfEmployeeContCal);
checkerror(selfEmployeeCont,"employeeContribution");
var selfEmployeeContCal = numberWithCommas(selfEmployeeCont);
$('#employeeContribution').html(selfEmployeeContCal);/*EmployeeContribution*/
var spouseEmployeeCont = Number(tabdets["CPF_CONTIB_SPS"]);
var spouseEmployeeContCal = numberWithCommas(spouseEmployeeCont);
$('#spouseEmpContributionId').html(spouseEmployeeContCal);
var familyEmployeeCont = Number(tabdets[""]);
$('#familyEmpContributionId').html(familyEmployeeCont);

/*Total AnnualIncome Related*/
//var selfTotalAnnualInc = Number(tabdets["INSRC_SELF_TOTANNL"]);
var selfTotalAnnualInc = (Number(tabdets["INCSRC_SELF_EMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SELF_EMP_ADDLWAGE"])+(Number(tabdets["INCSRC_SELF_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SELF_NEMP_DIVDAMT"])+Number(tabdets["INCSRC_SELF_NEMP_RENTAMT"])+Number(tabdets["INCSRC_SELF_NEMP_OTHAMT"]);
checkerror(selfTotalAnnualInc,"selfTotalAnnualIncId");
var selfTotalAnnualIncCal = numberWithCommas(selfTotalAnnualInc);
$('#selfTotalAnnualIncId').html(selfTotalAnnualIncCal);

//nfObject = new Intl.NumberFormat('en-US')
//var finlselfTotalAnnualInc = nfObject.format(selfTotalAnnualInc)
checkerror(selfTotalAnnualInc,"annualIncomeId");
var selfTotalAnnualIncCal = numberWithCommas(selfTotalAnnualInc);
$('#annualIncomeId').html(selfTotalAnnualIncCal);/*Total Annual Income*/
//var spouseTotalAnnualInc = Number(tabdets["INSRC_SPS_TOTANNL"]);
var spouseTotalAnnualInc = (Number(tabdets["INCSRC_SPS_EMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SPS_EMP_ADDLWAGE"])+(Number(tabdets["INCSRC_SPS_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_SPS_NEMP_DIVDAMT"])+ Number(tabdets["INCSRC_SPS_NEMP_RENTAMT"])+ Number(tabdets["INCSRC_SPS_NEMP_OTHAMT"]);
checkerror(spouseTotalAnnualInc,"spouseTotalAnnualIncId");
var spouseTotalAnnualIncCal = numberWithCommas(spouseTotalAnnualInc);
$('#spouseTotalAnnualIncId').html(spouseTotalAnnualIncCal);
//var familyTotalAnnualInc = Number(tabdets["INSRC_JOINT_TOTANNL"]);
var familyTotalAnnualInc = (Number(tabdets["INCSRC_JOINT_EMP_MONTHLY"])*12)+(Number(tabdets["INCSRC_JOINT_NEMP_MONTHLY"])*12)+Number(tabdets["INCSRC_JOINT_NEMP_DIVDAMT"])+ Number(tabdets["INCSRC_JOINT_NEMP_RENTAMT"])+Number(tabdets["INCSRC_JOINT_NEMP_OTHAMT"]);
checkerror(familyTotalAnnualInc,"familyTotalAnnualIncId");
var familyTotalAnnualIncCal = numberWithCommas(familyTotalAnnualInc);
$('#familyTotalAnnualIncId').html(familyTotalAnnualIncCal);




/*Non Employment Others Annual Related*/
var selfNonEmpOthers = Number(tabdets["INCSRC_SELF_NEMP_OTHAMT"]);
var selfNonEmpOthersCal = numberWithCommas(selfNonEmpOthers);
$('#selfNonEmpOthersId').html(selfNonEmpOthersCal);
$('#otherAnnual').html(selfNonEmpOthers);
var spouseNonEmpOthers = Number(tabdets["INCSRC_SPS_NEMP_OTHAMT"]);
var spouseNonEmpOthersCal = numberWithCommas(spouseNonEmpOthers);
$('#spousNonEmpOthersId').html(spouseNonEmpOthersCal);
var familyNonEmpOthers = Number(tabdets["INCSRC_JOINT_NEMP_OTHAMT"]);
$('#familyNonEmpOthersId').html(familyNonEmpOthers);

/*Non Employment rental Income Related*/
var selfNonEmpRentalInc = Number(tabdets["INCSRC_SELF_NEMP_RENTAMT"]);
var selfNonEmpRentalIncCal = numberWithCommas(selfNonEmpRentalInc);
$('#selfNonEmpAnnRentalIncId').html(selfNonEmpRentalIncCal);
$('#annualRentalIncome').html(selfNonEmpRentalInc);
var spouseNonEmpRentalInc = Number(tabdets["INCSRC_SPS_NEMP_RENTAMT"]);
var spouseNonEmpRentalIncCal = numberWithCommas(spouseNonEmpRentalInc);
$('#spouseNonEmpAnnRentalIncId').html(spouseNonEmpRentalIncCal);
var familyNonEmpRentalInc = Number(tabdets["INCSRC_JOINT_NEMP_RENTAMT"]);
var familyNonEmpRentalIncCal = numberWithCommas(familyNonEmpRentalInc);
$('#familyNonEmpAnnRentalIncId').html(familyNonEmpRentalIncCal);


/*Non Employment Divident Related*/
var selfNonEmpDiv = Number(tabdets["INCSRC_SELF_NEMP_DIVDAMT"]);
var selfNonEmpDivCal = numberWithCommas(selfNonEmpDiv);
$('#selfNonEmpDivcId').html(selfNonEmpDivCal);
$('#dividendsGains').html(selfNonEmpDiv);
var spouseNonEmpDiv = Number(tabdets["INCSRC_SPS_NEMP_DIVDAMT"]);
var spouseNonEmpDivCal = numberWithCommas(spouseNonEmpDiv);
$('#spouseNonEmpDivId').html(spouseNonEmpDivCal);
var familyNonEmpDiv = Number(tabdets["INCSRC_JOINT_NEMP_DIVDAMT"]);
var familyNonEmpDivCal = numberWithCommas(familyNonEmpDiv);
$('#familyNonEmpDivId').html(familyNonEmpDivCal);


/*Non Employment Monthly Inc Related*/
var selfNonEmpMonthlyInc = Number(tabdets["INCSRC_SELF_NEMP_MONTHLY"]);
var selfNonEmpMonthlyIncCal = numberWithCommas(selfNonEmpMonthlyInc);
$('#selfNonEmpMonIncId').html(selfNonEmpMonthlyIncCal);
$('#monthlyIncome').html(selfNonEmpMonthlyInc);
var spouseNonEmpMonthlyInc = Number(tabdets["INCSRC_SPS_NEMP_MONTHLY"]);
var spouseNonEmpMonthlyIncCal = numberWithCommas(spouseNonEmpMonthlyInc);
$('#spouseNonEmpMonIncId').html(spouseNonEmpMonthlyIncCal);
var familyNonEmpMonthlyInc = Number(tabdets["INCSRC_JOINT_NEMP_MONTHLY"]);
$('#familyNonEmpMonIncId').html(familyNonEmpMonthlyInc);


/*Employment Profit Related*/
var selfEmploymentProfit = Number(tabdets["INCSRC_SELF_EMP_ADDLWAGE"]);
var selfEmploymentProfitCal = numberWithCommas(selfEmploymentProfit);
$('#selfEmpProfitId').html(selfEmploymentProfitCal);
$('#annualprofitsbonuses').html(selfEmploymentProfit);
var spouseEmploymentProfit = Number(tabdets["INCSRC_SPS_EMP_ADDLWAGE"]);
var spouseEmploymentProfitCal = numberWithCommas(spouseEmploymentProfit);
$('#spouseEmpProfitId').html(spouseEmploymentProfitCal);
var familyEmploymentProfit = Number(tabdets[""]);
$('#familyEmpProfitId').html(familyEmploymentProfit);


/*Employment Monthly Net Income Related*/
var selfEmploymentMonthInc = Number(tabdets["INCSRC_SELF_EMP_MONTHLY"]);

var selfEmploymentMonthIncCal = numberWithCommas(selfEmploymentMonthInc);

$('#selfEmpMonthlyNetIncId').html(selfEmploymentMonthIncCal);
$('#monthlyNetIncome').html(selfEmploymentMonthInc);
var spouseEmploymentMonthInc = Number(tabdets["INCSRC_SPS_EMP_MONTHLY"]);
var spouseEmploymentMonthIncCal = numberWithCommas(spouseEmploymentMonthInc);
$('#spouseEmpMonthlyNetIncId').html(spouseEmploymentMonthIncCal);
var familyEmploymentMonthInc = Number(tabdets["INCSRC_JOINT_EMP_MONTHLY"]);
var familyEmploymentMonthIncCal = numberWithCommas(familyEmploymentMonthInc);
$('#familyEmpMonthlyNetIncId').html(familyEmploymentMonthIncCal);

/*Total Net Surplus/Deficit*/
/*var totalNetSurpdeficit = (selfNetAnnualInflow+spouseNetAnnualInflow)-(selfAnnualExp+spouseAnnualExp+familyAnnualExp)
checkerror(totalNetSurpdeficit,"totalNetSurpdeficitId");
var totalNetSurpdeficitCal = numberWithCommas(totalNetSurpdeficit);
$('#totalNetSurpdeficitId').html(totalNetSurpdeficitCal);*/
var totalNetSurpdeficit = (Number(tabdets["NEW_ANNL_SELF"])-Number(tabdets["EXPD_SELF_ANNAULEXP"]))+(Number(tabdets["NEW_ANNL_SPS"])-Number(tabdets["EXPDS_SPS_ANNALEXP"]))+(0-Number(tabdets["EXPD_FAMILY_ANNLEXP"]));
checkerror(totalNetSurpdeficit,"totalNetSurpdeficitId");
var totalNetSurpdeficitCal = numberWithCommas(totalNetSurpdeficit);
$('#totalNetSurpdeficitId').html(totalNetSurpdeficitCal);

/*checkerror(totalNetSurpdeficit,"netSurplusDeficitid");*/
 
/*var totalNetSurpdeficitCal = numberWithCommas(totalNetSurpdeficit);*/
$('#netSurplusDeficitid').html(totalNetSurpdeficitCal);

var NetSurpdeficitSpouse = (spouseNetAnnualInflow)-(spouseAnnualExp);
$('#totalNetSurpdeficitspouseId').html(numberWithCommas(NetSurpdeficitSpouse));

/*var NetSurpdeficitSpouse =(Number(tabdets["NEW_ANNL_SPS"])-Number(tabdets["EXPDS_SPS_ANNALEXP"]));
$('#totalNetSurpdeficitspouseId').html(numberWithCommas(NetSurpdeficitSpouse));*/

var totalNetSurpdeficitSelf = (selfNetAnnualInflow)-(selfAnnualExp);
$('#totalNetSurpdeficitSelfid').html(numberWithCommas(totalNetSurpdeficitSelf));
var totalNetSurpdeficitfam = (familyNetAnnualInflow)-(familyAnnualExp);
$('#totalNetSurpdeficitfamid').html(numberWithCommas(totalNetSurpdeficitfam));

var configSelf ="";
var chartTypeSelf ="";
var bgColors = "";
var bgColor = "";
var len = "";
var AnnualIncomeSpouseJSONArray=[];
var AnnualIncomeJointJSONArray=[];
var selfmychart="";
var AnnualIncomeSELFJSONArray=[];
var canvasSelfDiv = document.getElementById("areaChart");
  canvasSelfDiv.innerHTML="";
  canvasSelfDiv.innerHTML="<canvas id='canvasSelf' class=''></canvas>";
  
var MonthlyGrossIncomeSELF,BonusSELF,NonEmpMonthlyIncomeSELF ,NonEmpAnnualRentalIncomeSELF ,NonEmpInvestmentIncomedividendsgains ,NonEmpOtherIncomeSELF ;
var AnnExpOutRentalforLodgings,AnnExpOutUtilitiescommunication,AnnExpOutGroceryHouseholdNeeds ,AnnExpOutEatingout ,AnnExpOutClothingApparel ,AnnExpOutTransportation ,AnnExpOutMedicalPersonalCare ,AnnExpOutPersonalExpenses ,AnnExpOutDependantContributions,AnnExpOutTaxes ,AnnExpOutEntertainment ,AnnExpOutFestiveSpending ,AnnExpOutVacations ,AnnExpOutCharity ,AnnExpOutLoanRepayment ,AnnExpOutPropertyLoanRepayment ,AnnExpOutVehicleLoanRepayment ,AnnExpOutLifeInsurancePremiums ,AnnExpOutGeneralInsurancePremiums ,AnnExpOutOtherExpenses  ;
var AnnExpOutAnnualExpenses;
//Employment Income SELF
MonthlyGrossIncomeSELF = (isEmpty(selfEmploymentMonthInc) ? "0" :selfEmploymentMonthInc);
BonusSELF = (isEmpty (selfEmploymentProfit)? "0" : selfEmploymentProfit);
//Non-employment Income SELF
  NonEmpMonthlyIncomeSELF = ( isEmpty (selfNonEmpMonthlyInc)? "0" : selfNonEmpMonthlyInc); 
  NonEmpAnnualRentalIncomeSELF = ( isEmpty (selfNonEmpRentalInc)? "0" : selfNonEmpRentalInc);  
  NonEmpInvestmentIncomedividendsgains =( isEmpty (selfNonEmpDiv) ? "0" : selfNonEmpDiv);
  NonEmpOtherIncomeSELF = (isEmpty(selfNonEmpOthers)? "0" :selfNonEmpOthers); 
  //Annual Expenditure - Outflow
AnnExpOutRentalforLodgings =(isEmpty(selfRentalLodging)? "0" :selfRentalLodging);  
AnnExpOutUtilitiescommunication =(isEmpty(selfUtility) ? "0" : selfUtility);
AnnExpOutGroceryHouseholdNeeds =(isEmpty(selfGrocery) ? "0" : selfGrocery); 
AnnExpOutEatingout =(isEmpty(selfEatingOut) ? "0" : selfEatingOut); 
AnnExpOutClothingApparel = (isEmpty(selfClothing) ? "0" : selfClothing); 
AnnExpOutTransportation = (isEmpty(selfTransport) ? "0" : selfTransport); 
AnnExpOutMedicalPersonalCare =(isEmpty(selfMedical) ? "0" : selfMedical); 
AnnExpOutPersonalExpenses =(isEmpty(selfPersonal) ? "0" : selfPersonal); 
AnnExpOutDependantContributions =(isEmpty(selfDependant) ? "0" : selfDependant); 
AnnExpOutTaxes =(isEmpty(selfTaxes) ? "0" : selfTaxes); 
AnnExpOutEntertainment =(isEmpty(selfEntertainment) ? "0" : selfEntertainment); 
AnnExpOutFestiveSpending =(isEmpty(selfFestive) ? "0" : selfFestive); 
AnnExpOutVacations =(isEmpty(selfVacations) ? "0" : selfVacations); 
AnnExpOutCharity =(isEmpty(selfCharity) ? "0" : selfCharity); 
AnnExpOutLoanRepayment ="0";
AnnExpOutPropertyLoanRepayment =(isEmpty(selfPropertyLoan) ? "0" : selfPropertyLoan); 
AnnExpOutVehicleLoanRepayment =(isEmpty(selfVehicleLoan) ? "0" : selfVehicleLoan); 
AnnExpOutLifeInsurancePremiums =(isEmpty(selfLifeInsuPrem) ? "0" : selfLifeInsuPrem);
AnnExpOutGeneralInsurancePremiums =(isEmpty(selfGeneralInsuPrem) ? "0" : selfGeneralInsuPrem); 
AnnExpOutOtherExpenses = (isEmpty(selfOthers) ? "0" : selfOthers);     
//Annual Expenditure - Outflow -- final total amount
AnnExpOutAnnualExpenses =(isEmpty(selfAnnualExp) ? "0" : selfAnnualExp);

//console.log(" AnnExpOutDependantContributions -->" + AnnExpOutDependantContributions);
var yearlyGrossIncomeSELF = (MonthlyGrossIncomeSELF * 12 ); 
var EmploymentAnnualIncomeSELF =  (parseFloat(yearlyGrossIncomeSELF) + parseFloat(BonusSELF));

var yearlyNonEmpMonthlyIncomeSELF = (NonEmpMonthlyIncomeSELF * 12 );
var NonEmploymentAnnualIncomeSELF  = (parseFloat(yearlyNonEmpMonthlyIncomeSELF) + parseFloat(NonEmpAnnualRentalIncomeSELF) + parseFloat(NonEmpInvestmentIncomedividendsgains) + parseFloat(NonEmpOtherIncomeSELF));
var TotalAnnualInflowSELF =(parseFloat( EmploymentAnnualIncomeSELF) + parseFloat(NonEmploymentAnnualIncomeSELF));

var TotalAnnualExpenditureSELF =(parseFloat(AnnExpOutRentalforLodgings) + parseFloat(AnnExpOutUtilitiescommunication) + parseFloat(AnnExpOutGroceryHouseholdNeeds) + parseFloat(AnnExpOutEatingout) + parseFloat(AnnExpOutClothingApparel) + parseFloat(AnnExpOutTransportation) + parseFloat(AnnExpOutMedicalPersonalCare) + parseFloat(AnnExpOutPersonalExpenses) + parseFloat(AnnExpOutDependantContributions) + parseFloat(AnnExpOutTaxes) + parseFloat(AnnExpOutEntertainment) + parseFloat(AnnExpOutFestiveSpending) + parseFloat(AnnExpOutVacations) + parseFloat(AnnExpOutCharity) + parseFloat(AnnExpOutLoanRepayment) + parseFloat(AnnExpOutPropertyLoanRepayment) + parseFloat(AnnExpOutVehicleLoanRepayment) + parseFloat(AnnExpOutLifeInsurancePremiums) + parseFloat(AnnExpOutGeneralInsurancePremiums) + parseFloat(AnnExpOutOtherExpenses)  );                         
var TotAnnualExpensesSELF = parseFloat(AnnExpOutAnnualExpenses);

var AnnualIncomeSELFJSONObject = {"key":"Annual Income","value":TotalAnnualInflowSELF, "Annual Gross Income":yearlyGrossIncomeSELF,"Bonus":BonusSELF,"Annual Income":yearlyNonEmpMonthlyIncomeSELF, "Annual Rental Income":NonEmpAnnualRentalIncomeSELF,"Investment Income dividends gains": NonEmpInvestmentIncomedividendsgains,"Other Income": NonEmpOtherIncomeSELF};
var AnnualExpenseSELFJSONObject = {"key":"Annual Expense","value":TotAnnualExpensesSELF, "Rental for Lodgings":AnnExpOutRentalforLodgings, "Utilities communication": AnnExpOutUtilitiescommunication, "Grocery Household Needs": AnnExpOutGroceryHouseholdNeeds , "Eating out": AnnExpOutEatingout ,"Clothing Apparel": AnnExpOutClothingApparel,"Transportation" : AnnExpOutTransportation , "Medical Personal Care" :AnnExpOutMedicalPersonalCare , "Personal Expenses": AnnExpOutPersonalExpenses ,"Dependant Contributions" :AnnExpOutDependantContributions ,"Taxes": AnnExpOutTaxes ,"Entertainment": AnnExpOutEntertainment ,"Festive Spending": AnnExpOutFestiveSpending ,"Vacations": AnnExpOutVacations, "Charity": AnnExpOutCharity ,"Loan Repayment": AnnExpOutLoanRepayment ,"Property Loan Repayment": AnnExpOutPropertyLoanRepayment , "Vehicle Loan Repayment": AnnExpOutVehicleLoanRepayment, "Life Insurance Premiums": AnnExpOutLifeInsurancePremiums , "General Insurance Premiums": AnnExpOutGeneralInsurancePremiums ,"Other Expenses": AnnExpOutOtherExpenses };

AnnualIncomeSELFJSONArray.push(AnnualIncomeSELFJSONObject);
AnnualIncomeExpSelfChartDataJSONArray.push(AnnualIncomeSELFJSONObject);
AnnualIncomeSELFJSONArray.push(AnnualExpenseSELFJSONObject);
AnnualIncomeExpSelfChartDataJSONArray.push(AnnualExpenseSELFJSONObject);
// console.log("AnnualIncomeSELFJSONArray " + AnnualIncomeSELFJSONArray.length);
if(TotalAnnualInflowSELF == 0 && TotAnnualExpensesSELF == 0){
	  $("#selfnodatafount").css('display','block');
	  $("#canvasSelfDiv").css('display','none');
}else{
	 $("#selfnodatafount").css('display','none');
	 $("#canvasSelfDiv").css('display','block');
	 
}
// if(AnnualIncomeSELFJSONArray.length > 0){
var labels = AnnualIncomeSELFJSONArray.map(function (e) {
   return  e.key;
});
var datavalue = AnnualIncomeSELFJSONArray.map(function (e) {
   return  e.value;
});

var canvasSelf = document.getElementById("canvasSelf");
var randomColorGenerator = () => {
   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};

var len = datavalue.length;

bgColors = function (len) {
   var bgArray = new Array(len);
   for (var j = 0; j < len; j++) {
       bgArray[j] = randomColorGenerator();
   }
   return bgArray;
}

chartTypeSelf = "Pie";
//Pie chart
if (chartTypeSelf == "Pie") { 
	configSelf = {
           type: 'pie',
           data: {
               datasets: [{
                   
                   data: datavalue,
                   backgroundColor: bgColors(len),
                   borderWidth: 0.5,
                   label: 'Annual Income and Expense ' 
               }],
               labels: labels 
           },
            
           options: {
               responsive: true,
               legend: {
                   position: 'left',
               },
               tooltips: {
                   callbacks: {
                       label: function (item, data) {
                       	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                       }
                   }
               },
               plugins: {
                   labels: {
	              render: 'percentage',
	              fontColor: ['white','white'],
	              precision: 2
	            } 
           }
           },
       };
}

//Donut chart
if (chartTypeSelf == "Doughnut") {
	 
     bgColor = bgColors(len);
     configSelf = {
       type: 'doughnut',
       data: {
           datasets: [{
               data: datavalue,
               backgroundColor: bgColor,
               borderWidth: 0.5,
               label: 'Annual Income and Expense'
           }],
           labels: labels,
           datavalue: datavalue
       },
       options: {
           responsive: true,
           legend: {
               position: 'bottom',
           },
           animation: {
               animateScale: true,
               animateRotate: true
           },
           tooltips: {
               callbacks: {
                   label: function (item, data) {
                   	return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                   }
               }
           },
           plugins: {
               labels: {
	          render: 'percentage',
	          fontColor: ['white','white'],
	          precision: 2
	        } 
       }
       }
   };
}

var ctxSelf = document.getElementById('canvasSelf').getContext('2d');
selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
}});

selfmychart.destroy();
selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
}});

window.resetZoom  = function () {
	selfmychart.resetZoom();
};

// let bgColor;
if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
	bgColor = bgColors(datavalue.length);
}
configSelf.data.datasets[0].data = datavalue;
if (bgColor != undefined) {
	configSelf.data.datasets[0].backgroundColor = bgColor;
}

selfmychart.update();
selfmychart.resetZoom();
//loadDynamicChartSelfDonut(AnnualIncomeSELFJSONArray);
/*====================================================Bar chart==============================================================*/

var finallabel ="Annual Income";
loadDynamicChartSelfnew(AnnualIncomeSELFJSONArray,finallabel);
//self bar chart
function loadDynamicChartSelfnew(AnnualIncomeSELFJSONArray,finallabel){
 	   var labelsValidate =finallabel;
 	             var firstvalue="";
 	             var secondvalue="";

 	             for(var i=0; i<AnnualIncomeSELFJSONArray.length;i++){
 	               firstvalue=AnnualIncomeSELFJSONArray[0];
 	               secondvalue=AnnualIncomeSELFJSONArray[1];
 	             }
 	    
 	   var firstvaluekey=[];
 	   var firstvalueVal=[];

 	   for (var [key, value] of Object.entries(firstvalue)) {
 	     
 	     if(key!="key" && key!="value")
 	     {
 	       firstvaluekey.push(key);
 	       firstvalueVal.push(value);
 	     } 
 	   }

 	   var secondvaluekey=[];
 	   var secondvalueVal=[];
 	    
 	   for (var [key, value] of Object.entries(secondvalue)) {
 	      
 	     if(key!="key" && key!="value")
 	     {
 	       secondvaluekey.push(key);
 	       secondvalueVal.push(value);
 	     }
 	   }
 	    
 	   var IncomeandExpenseDiv = document.getElementById("barChart2");
 	   IncomeandExpenseDiv.innerHTML="";
 	   IncomeandExpenseDiv.innerHTML="<canvas id='canvasSelfBarChart' class=''></canvas>";

 	   var labels="";
 	   var data1 ="";
 	   if(labelsValidate =="Annual Income"){
 		   $("#detailsExpenseCharttittle").val("Details of Income");
 	       labels= firstvaluekey ;
 	       data1=firstvalueVal;
 	   }else if(labelsValidate =="Annual Expense"){
 		   $("#detailsExpenseCharttittle").val("Details of Expense");
 	       labels=secondvaluekey;
 	       data1=secondvalueVal;
 	   }
 	           
 	   var configSelfBar="";
 	   //Filter data here based on the condition

 	   var chartTypeSelfnew ="";
 	   var chartTypeSpouse="";
 	   
 	   var bgColor = "";
 	   var selfbarchart="";
 	   
 	          
 	               var randomColorGenerator = () => {
 	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
 	               };
 	              
 	             var  len = data1.length;
 	              
 	               var  bgColors = function (len) {
 	                   var bgArray = new Array(len);
 	                   for (var j = 0; j < len; j++) {
 	                       bgArray[j] = randomColorGenerator();
 	                   }
 	                   return bgArray;
 	               }

 	              Chart.defaults.LineWithLine = Chart.defaults.line;
 	              Chart.controllers.LineWithLine = Chart.controllers.line.extend({
 	               draw: function (ease) {
 	                   Chart.controllers.line.prototype.draw.call(this, ease);

 	                   if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
 	                       var activePoint = this.chart.tooltip._active[0],
 	                       ctx = this.chart.ctx,
 	                           x = activePoint.tooltipPosition().x,
 	                           topY = this.chart.legend.bottom,
 	                           bottomY = this.chart.chartArea.bottom;

 	                       // draw line
 	                       ctx.save();
 	                       ctx.beginPath();
 	                       ctx.moveTo(x, topY);
 	                       ctx.lineTo(x, bottomY);
 	                       ctx.lineWidth = 1;
 	                       ctx.strokeStyle = '#4aa2eb';
 	                       ctx.stroke();
 	                       ctx.restore();
 	                   }
 	               }
 	           });

 	   //Line chart

 	   Chart.defaults.LineWithLine = Chart.defaults.line;
 	           Chart.controllers.LineWithLine = Chart.controllers.line.extend({
 	               draw: function (ease) {
 	                   Chart.controllers.line.prototype.draw.call(this, ease);

 	                   if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
 	                       var activePoint = this.chart.tooltip._active[0],
 	                       ctx = this.chart.ctx,
 	                           x = activePoint.tooltipPosition().x,
 	                           topY = this.chart.legend.bottom,
 	                           bottomY = this.chart.chartArea.bottom;

 	                       // draw line
 	                       ctx.save();
 	                       ctx.beginPath();
 	                       ctx.moveTo(x, topY);
 	                       ctx.lineTo(x, bottomY);
 	                       ctx.lineWidth = 1;
 	                       ctx.strokeStyle = '#4aa2eb';
 	                       ctx.stroke();
 	                       ctx.restore();
 	                   }
 	               }
 	           });

 	           chartTypeSelfnew = "Bar";

 	           if (chartTypeSelfnew == "Bar") {
 	               var bgColor = bgColors(len);
 	                   var fund1data = {
 	                       label: 'Annual Income',
 	                       data: data1,
 	                       categoryPercentage: 0.5,
 	                       barPercentage: 1,
 	                       backgroundColor: bgColor,
 	                        
 	                       borderWidth: 0,
 	                       yAxisID: "y-axis-AnnualIncome"
 	                   };

 	                   var fundData = {
 	                       labels: labels,
 	                       datasets: [fund1data],

 	                   };

 	                   configSelfBar = {
 	                       type: 'bar',
 	                       data: fundData,
 	                       options: {
 	                           tooltips: {
 	                               mode: 'label',
 	                               callbacks: {
 	                                   title: function(tooltipItems, data) {
 	                                   return tooltipItems[0].xLabel ;
 	                                   },
 	                                   label: (tooltipItem, data) => {
 	                                	   return ;
 	                                       
 	                                      // return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
 	                                   },
 	                                   footer: (tooltipItems, data) => {
 	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
 	                                       return ' Total : $ ' + total.toFixed(3);
 	                                   }
 	                               }
 	                           },

 	                           plugins: {
 	                               labels:false
 	                       },
 	                       legend: {
 	                       	display: false
 	                       },

 	                           scales: {
 	                               xAxes: [{
 	                                   display: true,
 	                                   scaleLabel: {
 	                                       display: true,
 	                                       labelString: ' '
 	                                   }, ticks: {
 	                                       minRotation: 0,
 	                                       maxRotation: 80,
 	                                   },
 	                                   //  stacked:true//Stacked bar chart

 	                               }],
 	                               yAxes: [{
 	                                   display: true,
 	                                   scaleLabel: {
 	                                       display: true,
 	                                       labelString: 'Amount'
 	                                   }, 
 	                                   
 	                                   id: "y-axis-AnnualIncome",
 	                                   ticks: {
				        	                       beginAtZero: true,
				        	                       callback: function(value, index, values) {
				        	                       return '$ ' + value;
		        	                       }
		        	                   }
 	                               }]
 	                           },
 	                           pan: {
 	                               enabled: true,
 	                               mode: "x",
 	                               speed: 10,
 	                               threshold: 10,
 	                               onPan: function ({ chart }) { canvasSelfBarChart.style.cursor = "grabbing"; },
 	                               onPanComplete: function ({ chart }) { canvasSelfBarChart.style.cursor = "default"; }
 	                           },
 	                           zoom: {
 	                               enabled: true,
 	                               drag: false,
 	                               mode: "x",
 	                               limits: {
 	                                   max: 10,
 	                                   min: 0.5
 	                               },
 	                               onZoom: function ({ selfbarchart }) { canvasSelfBarChart.style.cursor = "grabbing"; },
 	                               onZoomComplete: function ({ selfbarchart }) { canvasSelfBarChart.style.cursor = "default"; }
 	                           }
 	                       }
 	                   };
 	               }

 	               var ctxSelf = document.getElementById('canvasSelfBarChart').getContext('2d');
 	                selfbarchart = new Chart(ctxSelf, configSelfBar );
 	             
 	               selfbarchart.destroy();
 	               selfbarchart = new Chart(ctxSelf, configSelfBar );
 	               
 	               window.resetZoom  = function () {
 	                 	selfbarchart.resetZoom();
 	                 };
 	                 
 	              // let bgColor;
 	               if (configSelfBar.type == "doughnut" || configSelfBar.type == "pie" ){
 	               	bgColor = bgColors(data1.length);
 	               }
 	               configSelfBar.data.datasets[0].data = data1;
 	               if (bgColor != undefined) {
 	            	   configSelfBar.data.datasets[0].backgroundColor = bgColor;
 	               }
 	              // config.data.labels = labels;
 	               selfbarchart.update();
 	               selfbarchart.resetZoom();
 	              var finallabelExp ="Annual Expense";
 	         	  loadDynamicChartSelfExpnew(AnnualIncomeSELFJSONArray,finallabelExp);
 	         }
	
}
});

}

function loadDynamicChartSelfExpnew(AnnualIncomeSELFJSONArray,finallabel){
 	   var labelsValidate =finallabel;
 	             var firstvalue="";
 	             var secondvalue="";

 	             for(var i=0; i<AnnualIncomeSELFJSONArray.length;i++){
 	               firstvalue=AnnualIncomeSELFJSONArray[0];
 	               secondvalue=AnnualIncomeSELFJSONArray[1];
 	             }
 	    
 	   var firstvaluekey=[];
 	   var firstvalueVal=[];

 	   for (var [key, value] of Object.entries(firstvalue)) {
 	     
 	     if(key!="key" && key!="value")
 	     {
 	       firstvaluekey.push(key);
 	       firstvalueVal.push(value);
 	     } 
 	   }

 	   var secondvaluekey=[];
 	   var secondvalueVal=[];
 	    
 	   for (var [key, value] of Object.entries(secondvalue)) {
 	      
 	     if(key!="key" && key!="value")
 	     {
 	       secondvaluekey.push(key);
 	       secondvalueVal.push(value);
 	     }
 	   }
 	    
 	   var IncomeandExpenseDiv = document.getElementById("barChart");
 	   IncomeandExpenseDiv.innerHTML="";
 	   IncomeandExpenseDiv.innerHTML="<canvas id='canvasSelfBarChart1' class='' style='width: 600px; !important'></canvas>";

 	   var labels="";
 	   var data1 ="";
 	   if(labelsValidate =="Annual Income"){
 		   $("#detailsExpenseCharttittle").val("Details of Income");
 	       labels= firstvaluekey ;
 	       data1=firstvalueVal;
 	   }else if(labelsValidate =="Annual Expense"){
 		   $("#detailsExpenseCharttittle").val("Details of Expense");
 	       labels=secondvaluekey;
 	       data1=secondvalueVal;
 	   }
 	           
 	   var configSelfBar="";
 	   //Filter data here based on the condition

 	   var chartTypeSelfnew ="";
 	   var chartTypeSpouse="";
 	   
 	   var bgColor = "";
 	   var selfbarchart="";
 	   
 	          
 	               var randomColorGenerator = () => {
 	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
 	               };
 	              
 	             var  len = data1.length;
 	              
 	               var  bgColors = function (len) {
 	                   var bgArray = new Array(len);
 	                   for (var j = 0; j < len; j++) {
 	                       bgArray[j] = randomColorGenerator();
 	                   }
 	                   return bgArray;
 	               }

 	              Chart.defaults.LineWithLine = Chart.defaults.line;
 	              Chart.controllers.LineWithLine = Chart.controllers.line.extend({
 	               draw: function (ease) {
 	                   Chart.controllers.line.prototype.draw.call(this, ease);

 	                   if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
 	                       var activePoint = this.chart.tooltip._active[0],
 	                       ctx = this.chart.ctx,
 	                           x = activePoint.tooltipPosition().x,
 	                           topY = this.chart.legend.bottom,
 	                           bottomY = this.chart.chartArea.bottom;

 	                       // draw line
 	                       ctx.save();
 	                       ctx.beginPath();
 	                       ctx.moveTo(x, topY);
 	                       ctx.lineTo(x, bottomY);
 	                       ctx.lineWidth = 1;
 	                       ctx.strokeStyle = '#4aa2eb';
 	                       ctx.stroke();
 	                       ctx.restore();
 	                   }
 	               }
 	           });

 	   //Line chart

 	   Chart.defaults.LineWithLine = Chart.defaults.line;
 	           Chart.controllers.LineWithLine = Chart.controllers.line.extend({
 	               draw: function (ease) {
 	                   Chart.controllers.line.prototype.draw.call(this, ease);

 	                   if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
 	                       var activePoint = this.chart.tooltip._active[0],
 	                       ctx = this.chart.ctx,
 	                           x = activePoint.tooltipPosition().x,
 	                           topY = this.chart.legend.bottom,
 	                           bottomY = this.chart.chartArea.bottom;

 	                       // draw line
 	                       ctx.save();
 	                       ctx.beginPath();
 	                       ctx.moveTo(x, topY);
 	                       ctx.lineTo(x, bottomY);
 	                       ctx.lineWidth = 1;
 	                       ctx.strokeStyle = '#4aa2eb';
 	                       ctx.stroke();
 	                       ctx.restore();
 	                   }
 	               }
 	           });

 	           chartTypeSelfnew = "Bar";
 	          //chartTypeSelfnew =  document.getElementById("chartTypeIncomeExpense").value;
 	           if (chartTypeSelfnew == "Bar") {
 	               var bgColor = bgColors(len);
 	                   var fund1data = {
 	                       label: 'Annual Income',
 	                       data: data1,
 	                       categoryPercentage: 0.5,
 	                       barPercentage: 1,
 	                       backgroundColor: bgColor,
 	                        
 	                       borderWidth: 0,
 	                       yAxisID: "y-axis-AnnualIncome"
 	                   };

 	                   var fundData = {
 	                       labels: labels,
 	                       datasets: [fund1data],

 	                   };

 	                   configSelfBar = {
 	                       type: 'bar',
 	                       data: fundData,
 	                       options: {
 	                           tooltips: {
 	                               mode: 'label',
 	                               callbacks: {
 	                                   title: function(tooltipItems, data) {
 	                                   return tooltipItems[0].xLabel ;
 	                                   },
 	                                   label: (tooltipItem, data) => {
 	                                	   return ;
 	                                       
 	                                      // return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
 	                                   },
 	                                   footer: (tooltipItems, data) => {
 	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
 	                                       return ' Total : $ ' + total.toFixed(3);
 	                                   }
 	                               }
 	                           },

 	                           plugins: {
 	                               labels:false
 	                       },
 	                       legend: {
 	                       	display: false
 	                       },

 	                           scales: {
 	                               xAxes: [{
 	                                   display: true,
 	                                   scaleLabel: {
 	                                       display: true,
 	                                       labelString: ' '
 	                                   }, ticks: {
 	                                       minRotation: 0,
 	                                       maxRotation: 80,
 	                                   },
 	                                   //  stacked:true//Stacked bar chart

 	                               }],
 	                               yAxes: [{
 	                                   display: true,
 	                                   scaleLabel: {
 	                                       display: true,
 	                                       labelString: 'Amount'
 	                                   }, 
 	                                   
 	                                   id: "y-axis-AnnualIncome",
 	                                   ticks: {
				        	                       beginAtZero: true,
				        	                       callback: function(value, index, values) {
				        	                       return '$ ' + value;
		        	                       }
		        	                   }
 	                               }]
 	                           },
 	                           pan: {
 	                               enabled: true,
 	                               mode: "x",
 	                               speed: 10,
 	                               threshold: 10,
 	                               onPan: function ({ chart }) { canvasSelfBarChart1.style.cursor = "grabbing"; },
 	                               onPanComplete: function ({ chart }) { canvasSelfBarChart1.style.cursor = "default"; }
 	                           },
 	                           zoom: {
 	                               enabled: true,
 	                               drag: false,
 	                               mode: "x",
 	                               limits: {
 	                                   max: 10,
 	                                   min: 0.5
 	                               },
 	                               onZoom: function ({ selfbarchart }) { canvasSelfBarChart1.style.cursor = "grabbing"; },
 	                               onZoomComplete: function ({ selfbarchart }) { canvasSelfBarChart1.style.cursor = "default"; }
 	                           }
 	                       }
 	                   };
 	               }

 	               var ctxSelf = document.getElementById('canvasSelfBarChart1').getContext('2d');
 	                selfbarchart = new Chart(ctxSelf, configSelfBar );
 	             
 	               selfbarchart.destroy();
 	               selfbarchart = new Chart(ctxSelf, configSelfBar );
 	               
 	               window.resetZoom  = function () {
 	                 	selfbarchart.resetZoom();
 	                 };
 	                 
 	              // let bgColor;
 	               if (configSelfBar.type == "doughnut" || configSelfBar.type == "pie" ){
 	               	bgColor = bgColors(data1.length);
 	               }
 	               configSelfBar.data.datasets[0].data = data1;
 	               if (bgColor != undefined) {
 	            	   configSelfBar.data.datasets[0].backgroundColor = bgColor;
 	               }
 	              // config.data.labels = labels;
 	               selfbarchart.update();
 	               selfbarchart.resetZoom();
 	         }
function loadDynamicChartIncExps() {

	var configSelf ="";
	var chartTypeSelf ="";
	var bgColors = "";
	var bgColor = "";
	var len = "";
	var selfmychart="";

	var canvasSelfDiv = document.getElementById("areaChart");
	  canvasSelfDiv.innerHTML="";
	  canvasSelfDiv.innerHTML="<canvas id='canvasSelf1' class=''></canvas>";
	  

	// if(AnnualIncomeSELFJSONArray.length > 0){
	var labels = AnnualIncomeExpSelfChartDataJSONArray.map(function (e) {
	   return  e.key;
	});
	var datavalue = AnnualIncomeExpSelfChartDataJSONArray.map(function (e) {
	   return  e.value;
	});

	var canvasSelf1 = document.getElementById("canvasSelf");
	var randomColorGenerator = () => {
	   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
	};

	var len = datavalue.length;

	bgColors = function (len) {
	   var bgArray = new Array(len);
	   for (var j = 0; j < len; j++) {
	       bgArray[j] = randomColorGenerator();
	   }
	   return bgArray;
	}

	//chartTypeSelf = "Doughnut";
	chartTypeSelf = document.getElementById("chartTypeIncomeExpense").value;
	//Pie chart
	if (chartTypeSelf == "Pie") { 
		configSelf = {
	           type: 'pie',
	           data: {
	               datasets: [{
	                   
	                   data: datavalue,
	                   backgroundColor: bgColors(len),
	                   borderWidth: 0.5,
	                   label: 'Annual Income and Expense ' 
	               }],
	               labels: labels 
	           },
	            
	           options: {
	               responsive: true,
	               legend: {
	                   position: 'left',
	               },
	              // title: {
	              //     display: true,
	             //      text: 'Self Annual Income and Expense'
	              // },
	               tooltips: {
	                   callbacks: {
	                       label: function (item, data) {
	                       	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
	                       }
	                   }
	               },
	               plugins: {
	                   labels: {
		              render: 'percentage',
		              fontColor: ['white','white'],
		              precision: 2
		            } 
	           }
	           },
	       };
	}

	//Donut chart
	if (chartTypeSelf == "Doughnut") {
		
	     bgColor = bgColors(len);
	     configSelf = {
	       type: 'doughnut',
	       data: {
	           datasets: [{
	               data: datavalue,
	               backgroundColor: bgColor,
	               borderWidth: 0.5,
	               label: 'Annual Income and Expense'
	           }],
	           labels: labels,
	           datavalue: datavalue
	       },
	       options: {
	           responsive: true,
	           legend: {
	               position: 'bottom',
	           },
	          // title: {
	           //    display: true,
	          //     text: 'Self Annual Income and Expense'
	          // },
	           animation: {
	               animateScale: true,
	               animateRotate: true
	           },
	           tooltips: {
	               callbacks: {
	                   label: function (item, data) {
	                   	return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
	                   }
	               }
	           },
	           plugins: {
	               labels: {
		          render: 'percentage',
		          fontColor: ['white','white'],
		          precision: 2
		        } 
	       }
	       }
	   };
	}

	var ctxSelf = document.getElementById('canvasSelf1').getContext('2d');
	selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
	}});

	selfmychart.destroy();
	selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
	}});

	window.resetZoom  = function () {
		selfmychart.resetZoom();
	};

	// let bgColor;
	if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
		bgColor = bgColors(datavalue.length);
	}
	configSelf.data.datasets[0].data = datavalue;
	if (bgColor != undefined) {
		configSelf.data.datasets[0].backgroundColor = bgColor;
	}

	selfmychart.update();
	selfmychart.resetZoom();

}

function loadDynamicChartSelfDonut(AnnualIncomeSELFJSONArray){
	var configSelf ="";
	var chartTypeSelf ="";
	var bgColors = "";
	var bgColor = "";
	var len = "";
	var selfmychart="";

	var canvasSelfDiv = document.getElementById("areaChart2");
	  canvasSelfDiv.innerHTML="";
	  canvasSelfDiv.innerHTML="<canvas id='canvasSelf1' class=''></canvas>";
	  

	// if(AnnualIncomeSELFJSONArray.length > 0){
	var labels = AnnualIncomeSELFJSONArray.map(function (e) {
	   return  e.key;
	});
	var datavalue = AnnualIncomeSELFJSONArray.map(function (e) {
	   return  e.value;
	});

	var canvasSelf1 = document.getElementById("canvasSelf1");
	var randomColorGenerator = () => {
	   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
	};

	var len = datavalue.length;

	bgColors = function (len) {
	   var bgArray = new Array(len);
	   for (var j = 0; j < len; j++) {
	       bgArray[j] = randomColorGenerator();
	   }
	   return bgArray;
	}

	chartTypeSelf = "Doughnut";
	//Pie chart
	if (chartTypeSelf == "Pie") { 
		configSelf = {
	           type: 'pie',
	           data: {
	               datasets: [{
	                   
	                   data: datavalue,
	                   backgroundColor: bgColors(len),
	                   borderWidth: 0.5,
	                   label: 'Annual Income and Expense ' 
	               }],
	               labels: labels 
	           },
	            
	           options: {
	               responsive: true,
	               legend: {
	                   position: 'left',
	               },
	              // title: {
	              //     display: true,
	             //      text: 'Self Annual Income and Expense'
	              // },
	               tooltips: {
	                   callbacks: {
	                       label: function (item, data) {
	                       	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
	                       }
	                   }
	               },
	               plugins: {
	                   labels: {
		              render: 'percentage',
		              fontColor: ['white','white'],
		              precision: 2
		            } 
	           }
	           },
	       };
	}

	//Donut chart
	if (chartTypeSelf == "Doughnut") {
		
	     bgColor = bgColors(len);
	     configSelf = {
	       type: 'doughnut',
	       data: {
	           datasets: [{
	               data: datavalue,
	               backgroundColor: bgColor,
	               borderWidth: 0.5,
	               label: 'Annual Income and Expense'
	           }],
	           labels: labels,
	           datavalue: datavalue
	       },
	       options: {
	           responsive: true,
	           legend: {
	               position: 'bottom',
	           },
	          // title: {
	           //    display: true,
	          //     text: 'Self Annual Income and Expense'
	          // },
	           animation: {
	               animateScale: true,
	               animateRotate: true
	           },
	           tooltips: {
	               callbacks: {
	                   label: function (item, data) {
	                   	return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
	                   }
	               }
	           },
	           plugins: {
	               labels: {
		          render: 'percentage',
		          fontColor: ['white','white'],
		          precision: 2
		        } 
	       }
	       }
	   };
	}

	var ctxSelf = document.getElementById('canvasSelf1').getContext('2d');
	selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
	}});

	selfmychart.destroy();
	selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
	}});

	window.resetZoom  = function () {
		selfmychart.resetZoom();
	};

	// let bgColor;
	if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
		bgColor = bgColors(datavalue.length);
	}
	configSelf.data.datasets[0].data = datavalue;
	if (bgColor != undefined) {
		configSelf.data.datasets[0].backgroundColor = bgColor;
	}

	selfmychart.update();
	selfmychart.resetZoom();
}



function checkerror(value,fldId){
	if( value < 0 ){
		$('#'+fldId).css("color","red")
	 
	}else{
		$('#'+fldId).css("color"," ")
		 
	}
	
}
//add vignesh on 10 06 2021
//var finlselfTotalAnnualInc = selfRentalLodging.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

function numberWithCommas(x){
	 var val='';
	  var xval = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	  val= '$'+xval;
	   
	  return val;
	}




$("#srspdfPrint").click(function (){ 
	
	showLoader(); 
	var rl = $('#SRSProjectionTablereport tbody tr:visible').length;
		if(rl == 0) {
			hideLoader();
			alert("No data to export")
			return false;
		}
	
	$("#canvasbarChartSRS").addClass("chartjs-render-monitor widthpixel");
	//$("#canvasSelfBarChart").addClass("chartjs-render-monitor widthpixel");
	var pl ="portrait";  // landscape     portrait
	var fileSave ="SRS_Projection";
	
	var divsrschartId ="pdfSRSContentCardChart";  //table id 
	var tblIdSRS ="SRSProjectionTablereport";
	var divchartid ="tdlid";
	var tdlid2 ="tdlid2";
	var chartid ="chartid";
	var chartid1 ="chartid1";
	var chartpdfid1 ="chartpdfid1";
	var pdfTitle ="";  
	var pdfTitle6 ="SRS (Investment Summary)";
	var screentittlefootername = "SRS Projection Report";

	drawdatatablepaging(tblIdSRS);
	
	var columnsgeneratetoamendincExp =[];
	$("#SRSProjectionTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsgeneratetoamendincExp.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnsgeneratetoamendincExpAry =[]; //non group header we should follow this
	columnsgeneratetoamendincExpAry.push(columnsgeneratetoamendincExp);
	
	
	var jsonObject = 
	    [{"key":"Image","value":divsrschartId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	    {"key":"Table","value":tblIdSRS,"Title":pdfTitle6,"TitleFooter":screentittlefootername,"header":columnsgeneratetoamendincExpAry,"pdfaddnewPage":"yes"},
	    
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
	 },100);
	 
		hideLoader();
});




//cash Of Bank///


function cashOfBankReportSrch(strFNAId){
	 
	showLoader(); 
	var fnaId = strFNAId;
	 
	var parameter = "DBCALLFOR=GET_CASH_AT_BANK&strFnaId="+ fnaId ;
	 
	ajaxCall(parameter,servletName,function(Data){
		var CABretval = Data;
     
		var CABtblId = document.getElementById("cashOfBanksTablereport");
		var CABtbody = CABtblId.tBodies[0];
		var Total_CAB_CURRENT_BALANCE=0,Total_CAB_REGULAR_DEPOSIT=0;
		
		var chartDataCABretval;
		var cabbarChartData;
		
		for ( var CABcont in CABretval) {
			
			if (CABretval.hasOwnProperty(CABcont)) {
  
            chartDataCABretval = CABretval;
            cabbarChartData = CABcont;
      

				var CABcontvalue = CABretval[CABcont];
				var rc = Number(CABcont);
				var crow = CABtbody.insertRow(CABcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= (isEmpty(CABcontvalue["MAIN_ACCOUNT_HOLDER"])?" ":(CABcontvalue["MAIN_ACCOUNT_HOLDER"])); 					
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =(isEmpty(CABcontvalue["SUPP_ACCOUNT_HOLDER"])?" ":(CABcontvalue["SUPP_ACCOUNT_HOLDER"]));     						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =(isEmpty(CABcontvalue["RELATIONSHIP"])?" ":(CABcontvalue["RELATIONSHIP"])); 
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =(isEmpty(CABcontvalue["OWNERSHIP_TYPE"])?" ":(CABcontvalue["OWNERSHIP_TYPE"])); 
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =(isEmpty(CABcontvalue["BANK_NAME"])?" ":(CABcontvalue["BANK_NAME"])); 
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =(isEmpty(CABcontvalue["BANK_ACC_NO"])?" ":(CABcontvalue["BANK_ACC_NO"])); 
				cell6.style.textAlign = "center";
				
				var cell7 = crow.insertCell(7);
				cell7.innerHTML =(isEmpty(CABcontvalue["ACCOUNT_TYPE"])?" ":(CABcontvalue["ACCOUNT_TYPE"])); 
				cell7.style.textAlign = "center";
				
				var cell8 = crow.insertCell(8);
				cell8.innerHTML =(numberWithCommas(isEmpty(CABcontvalue["CURRENT_BALANCE"])?"0":(CABcontvalue["CURRENT_BALANCE"]))); 
				cell8.style.textAlign = "center";
				
				var cell9 = crow.insertCell(9);
				cell9.innerHTML =(numberWithCommas(isEmpty(CABcontvalue["REGULAR_DEPOSIT"])?"0":(CABcontvalue["REGULAR_DEPOSIT"])));   
				cell9.style.textAlign = "center";
				
				var cell10 = crow.insertCell(10);
				cell10.innerHTML =(isEmpty(CABcontvalue["DEPOSIT_FREQUENCY"])?" ":(CABcontvalue["DEPOSIT_FREQUENCY"])); 
				cell10.style.textAlign = "center";
				
				var cell11 = crow.insertCell(11);
				cell11.innerHTML =(isEmpty(CABcontvalue["OBJECTIVE"])?" ":(CABcontvalue["OBJECTIVE"])); 
				cell11.style.textAlign = "center";
			 
			}
			
			Total_CAB_CURRENT_BALANCE = Total_CAB_CURRENT_BALANCE+ Number(isEmpty(CABcontvalue["CURRENT_BALANCE"])?"0":(CABcontvalue["CURRENT_BALANCE"]));
			Total_CAB_REGULAR_DEPOSIT = Total_CAB_REGULAR_DEPOSIT+ Number(isEmpty(CABcontvalue["REGULAR_DEPOSIT"])?"0":(CABcontvalue["REGULAR_DEPOSIT"]));
			
			}
			
			
	     checkerror(Total_CAB_CURRENT_BALANCE,"TotalCABCurrentBalanceId");
		 var TotalCABCurrentBalanceCel = numberWithCommas(Total_CAB_CURRENT_BALANCE);
		 $('#TotalCABCurrentBalanceId').html(TotalCABCurrentBalanceCel);
	
	     checkerror(Total_CAB_REGULAR_DEPOSIT,"TotalCABRegularDepositId");
		 var TotalCABRegularDepositCel = numberWithCommas(Total_CAB_REGULAR_DEPOSIT);
		 $('#TotalCABRegularDepositId').html(TotalCABRegularDepositCel);
	
				if(cabbarChartData.length > 0 ){
	        		 $("#cabnodatafount").css('display','none');
	        		 $("#totalcurrentregulardetailsCAB").css('display','block');
						//console.log("barChartData  data " ,  barChartData)
	        	}else{
	                  $("#cabnodatafount").css('display','block');
	        		  $("#totalcurrentregulardetailsCAB").css('display','none');
	        	}

			var labels = chartDataCABretval.map(function (e) {
			    return  e.MAIN_ACCOUNT_HOLDER;
			 });

			 var datavalue1 = chartDataCABretval.map(function (e) {
			    return  e.CURRENT_BALANCE;
			 });
			 
			 var datavalue2 = chartDataCABretval.map(function (e) {
				    return  e.REGULAR_DEPOSIT;
				 });

			 var srsbarchart="";
			 
			 var chart;
			 var totalcurrentregulardetailsCABDiv = document.getElementById("totalcurrentregulardetailsCAB");
			 totalcurrentregulardetailsCABDiv.innerHTML="";
			 totalcurrentregulardetailsCABDiv.innerHTML="<canvas id='canvastotalcurrentregulardetailsCAB' class=''></canvas>";
			 
			 var randomColorGenerator = () => {
			    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
			 };
		 
			 len = datavalue1.length;
		        var bgColors = function (len) {
		            var bgArray = new Array(len);
		            for (var j = 0; j < len; j++) {
		                bgArray[j] = randomColorGenerator();
		            }
		            return bgArray;
		        }
		        
			 Chart.defaults.LineWithLine = Chart.defaults.line;
		        Chart.controllers.LineWithLine = Chart.controllers.line.extend({
		            draw: function (ease) {
		                Chart.controllers.line.prototype.draw.call(this, ease);

		                if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
		                    var activePoint = this.chart.tooltip._active[0],
		                    ctx = this.chart.ctx,
		                        x = activePoint.tooltipPosition().x,
		                        topY = this.chart.legend.bottom,
		                        bottomY = this.chart.chartArea.bottom;

		                    // draw line
		                    ctx.save();
		                    ctx.beginPath();
		                    ctx.moveTo(x, topY);
		                    ctx.lineTo(x, bottomY);
		                    ctx.lineWidth = 1;
		                    ctx.strokeStyle = '#4aa2eb';
		                    ctx.stroke();
		                    ctx.restore();
		                }
		            }
		        });
		 var onloadbarchart = "Bar";
		 
			 if (onloadbarchart == "Bar") {
	                var fund1data = {
	                    label: 'Current Balance',
	                    data: datavalue1,
	                    categoryPercentage: 0.5,
	                    barPercentage: 1,
	                    backgroundColor: 'rgba(0, 99, 132, 0.9)',
	                    hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
	                    borderWidth: 0,
	                    yAxisID: "y-axis-CurrentBalance"
	                };

	                var fund2data = {
	                    label: 'Regular Deposit',
	                    data: datavalue2,
	                    categoryPercentage: 0.5,
	                    barPercentage: 1,
	                    backgroundColor: 'rgba(99, 132, 0, 0.9)',
	                    hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
	                    borderWidth: 0,
	                    yAxisID: "y-axis-CurrentBalance"
	                };

	                var fundData = {
	                    labels: labels,
	                    datasets: [fund1data, fund2data],

	                };

	                config = {
	                    type: 'bar',
	                    data: fundData,
	                    options: {
	                        tooltips: {
	                            mode: 'label',
	                            callbacks: {
	                                title: function(tooltipItems, data) {
	                                return 'Acc Holder: ' + tooltipItems[0].xLabel ;
	                                },
	                                label: (tooltipItem, data) => {
	                              //      console.log(tooltipItem.label)
	                                     
	                                    //tooltipItem.label+" "+
	                                    return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
	                                },
	                                footer: (tooltipItems, data) => {
	                                    let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
	                                   // return 'Total : $ ' + total.toFixed(3);
	                                }
	                            }
	                        },

	                        plugins: {
	                            labels:false
	                    },
	                        
	                        scales: {

	                            xAxes: [{
	                                display: true,
	                                scaleLabel: {
	                                    display: true,
	                                    labelString: 'Acc Holder'
	                                }, ticks: {

	                                    minRotation: 0,
	                                    maxRotation: 80,
	                                },
	                                //  stacked:true//Stacked bar chart

	                            }],
	                            yAxes: [{
	                                display: true,
	                                scaleLabel: {
	                                    display: true,
	                                    labelString: 'Amount'

	                                }, 
	                                
	                                id: "y-axis-CurrentBalance",
	                                ticks: {
	                    beginAtZero: true,
	                     callback: function(value, index, values) {
	                        return '$ ' + value;
	                    }
	                }
	                                // stacked:true//Stacked bar chart
	                            }]
	                        },
	                        pan: {
	                            enabled: true,
	                            mode: "x",
	                            speed: 10,
	                            threshold: 10,
	                            onPan: function ({ chart }) { canvastotalcurrentregulardetailsCAB.style.cursor = "grabbing"; },
	                            onPanComplete: function ({ chart }) { canvastotalcurrentregulardetailsCAB.style.cursor = "default"; }
	                        },
	                        zoom: {
	                            enabled: true,
	                            drag: false,
	                            mode: "x",
	                            limits: {
	                                max: 10,
	                                min: 0.5
	                            },
	                            onZoom: function ({ chart }) { canvastotalcurrentregulardetailsCAB.style.cursor = "grabbing"; },
	                            onZoomComplete: function ({ chart }) { canvastotalcurrentregulardetailsCAB.style.cursor = "default"; }

	                        }
	                    }
	                };

	            }
		 
			 var cabctx = document.getElementById('canvastotalcurrentregulardetailsCAB').getContext('2d');
	            chart = new Chart(cabctx, config);
	            chart.destroy();
	            
	            chart = new Chart(cabctx, config);

	            let datasetLength = config.data.datasets.length;
 
	             
	            var bgColor;
	           /* if (config.type == "doughnut" || config.type == "pie") {
	                bgColor = bgColors(datavalue1.length);
	            }*/
	            config.data.datasets[0].data = datavalue1;
	            /*if (bgColor != undefined) {
	                config.data.datasets[0].backgroundColor = bgColor;

	            }*/

	       if (datasetLength == 2) {
		       let data2 = chartDataCABretval.map(function (e) {
				    return  e.REGULAR_DEPOSIT;
				 });
			 
	                config.data.datasets[1].data = data2;
	              //  if (bgColor != undefined) {
	              //      config.data.datasets[1].backgroundColor = bgColor;

	             //   }


	            }

	            config.data.labels = labels;
	            chart.update();
	            chart.resetZoom();
		 
		
	});
	hideLoader();
}



$("#btnCABpdfPrint").click(function (){ 
	
	showLoader(); 
	
	var rl = $('#cashOfBanksTablereport tbody tr:visible').length;
	if(rl == 0) {
		hideLoader();
		alert("No data to export")
		return false;
	}
	
	var pl ="portrait";  // landscape     portrait
	var fileSave ="Cash_ At_Bank";
	
	var divIdpdfCABAmountChart ="CABCurrentRegularAmountChart";  //table id 
	var tblIdcashOfBanksTablereport ="cashOfBanksTablereport";
	 
	drawdatatablepaging(tblIdcashOfBanksTablereport);
	
	var pdfTitle =" ";  
	var pdfTitleone ="List of Bank Accounts";
	var screentittlefootername = "Bank Accounts";

	var columnsgeneratetoamendincExp =[];
	$("#SRSProjectionTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsgeneratetoamendincExp.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnsgeneratetoamendincExpAry =[]; //non group header we should follow this
	columnsgeneratetoamendincExpAry.push(columnsgeneratetoamendincExp);
	
	var cabColHeaderArray  = [
	    [
	        {content: 'List of Bank Accounts', colSpan: 12, styles: {halign: 'center'}} 
	       // {content: 'Client Annual Loan Repayment', colSpan: 2, styles: {halign: 'center'}},
	        //{content: 'Spouse Annual Loan Repayment', colSpan: 2, styles: {halign: 'center'}},
	       // {content: 'On Retirement', colSpan: 5, styles: {halign: 'center'}}
	        
	    ],
	    ["#","Main Acc.holder name","Sup. Acc.holder name","Relationship","Ownership type","Name of bank","Bank Acc No.","Type of Account","Current Balance","Regular Deposit if any","Frequency of Deposit","Objective"],
	];
	
	var jsonObject = 
	    [{"key":"Image","value":divIdpdfCABAmountChart,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	    {"key":"Table","value":tblIdcashOfBanksTablereport,"Title":pdfTitleone,"TitleFooter":screentittlefootername,"header":cabColHeaderArray,"pdfaddnewPage":"yes"},
	    
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
	 },100);
	 
		hideLoader();
});



///CPF////

//vignesh add on 21 06 2021
function CPFFlowSrch(strFNAId){
	showLoader(); 
	var fnaId = strFNAId;
		//var fnaId="FNA0000000000002992";GET_CASHFLOW_PROJECTION  //RET_CPF_LIFE
	var parameter = "DBCALLFOR=GET_CPF_PROJECTION&strFnaId="+ fnaId ;
	//FIPA_SP_CPFPROJ_CPFLIFE_CALL
	//console.log("parameter   " + parameter.length)
	ajaxCall(parameter,servletName,function(Data){
		
		var retval = Data;
		var BSretval = Data;
		var BMretval = Data;
		
		var ARretval = Data;
		var AOretval = Data;
		var ASretval = Data;
		var AMretval = Data;
		
         //////////Ordinary/////////////
		var BOtblId = document.getElementById("CpfOrdinaryBalanceTablereport");
		var BOtbody = BOtblId.tBodies[0];
		
		for ( var BOcont in retval) {
			
			if (retval.hasOwnProperty(BOcont)) {

				var BOcontvalue = retval[BOcont];
				var rc = Number(BOcont);
				var crow = BOtbody.insertRow(BOcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((BOcontvalue["SELF_AGE"]))?"0":(BOcontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((BOcontvalue["SELF_OA_BAL"]))?"0":numberWithCommas(BOcontvalue["SELF_OA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =isNaN((BOcontvalue["SELF_OA_ANNLCONTRIB"]))?"0":numberWithCommas(BOcontvalue["SELF_OA_ANNLCONTRIB"]);//value[4];  
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((BOcontvalue["SELF_OA_ADDITION"]))?"0":numberWithCommas(BOcontvalue["SELF_OA_ADDITION"]);//value[5];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((BOcontvalue["SELF_OA_DEDUCTION"]))?"0":numberWithCommas(BOcontvalue["SELF_OA_DEDUCTION"]);//value[6];  
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =isNaN((BOcontvalue["SELF_OA_ENDBAL"]))?"0":numberWithCommas(BOcontvalue["SELF_OA_ENDBAL"]);//value[6];  
				cell6.style.textAlign = "center";
			 
			}}
		
		//////////Special/////////////
		var BStblId = document.getElementById("CpfSpecialBalanceTablereport");
		var BStbody = BStblId.tBodies[0];
		
		for ( var BScont in BSretval) {
			
			if (BSretval.hasOwnProperty(BScont)) {

				var BScontvalue = BSretval[BScont];
				var rc = Number(BScont);
				var crow = BStbody.insertRow(BScont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((BScontvalue["SELF_AGE"]))?"0":(BScontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((BScontvalue["SELF_SA_BAL"]))?"0":numberWithCommas(BScontvalue["SELF_SA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =isNaN((BScontvalue["SELF_SA_ANNLCONTRIB"]))?"0":numberWithCommas(BScontvalue["SELF_SA_ANNLCONTRIB"]);//value[4];  
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((BScontvalue["SELF_SA_ADDITION"]))?"0":numberWithCommas(BScontvalue["SELF_SA_ADDITION"]);//value[5];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((BScontvalue["SELF_SA_DEDUCTION"]))?"0":numberWithCommas(BScontvalue["SELF_SA_DEDUCTION"]);//value[6];  
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =isNaN((BScontvalue["SELF_SA_ENDBAL"]))?"0":numberWithCommas(BScontvalue["SELF_SA_ENDBAL"]);//value[6];  
				cell6.style.textAlign = "center";
			 
			}}
		
//////////Medisave/////////////
		var BMtblId = document.getElementById("CpfMedisaveBalanceTablereport");
		var BMtbody = BMtblId.tBodies[0];
		
		for ( var BMcont in BMretval) {
			
			if (BMretval.hasOwnProperty(BMcont)) {

				var BMcontvalue = BMretval[BMcont];
				var rc = Number(BMcont);
				var crow = BMtbody.insertRow(BMcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";

				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((BMcontvalue["SELF_AGE"]))?"0":(BMcontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((BMcontvalue["SELF_MA_BAL"]))?"0":numberWithCommas(BMcontvalue["SELF_MA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =isNaN((BMcontvalue["SELF_MA_ANNLCONTRIB"]))?"0":numberWithCommas(BMcontvalue["SELF_MA_ANNLCONTRIB"]);//value[4];  
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((BMcontvalue["SELF_MA_ADDITION"]))?"0":numberWithCommas(BMcontvalue["SELF_MA_ADDITION"]);//value[5];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((BMcontvalue["SELF_MA_DEDUCTION"]))?"0":numberWithCommas(BMcontvalue["SELF_MA_DEDUCTION"]);//value[6];  
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =isNaN((BMcontvalue["SELF_MA_ENDBAL"]))?"0":numberWithCommas(BMcontvalue["SELF_MA_ENDBAL"]);//value[6];  
				cell6.style.textAlign = "center";
			 
			}}
		
		
		
//////////Retirement/////////////
		var ARtblId = document.getElementById("CpfARRetirementBalanceTablereport");
		var ARtbody = ARtblId.tBodies[0];
		
		for ( var ARcont in ARretval) {
			
			if (ARretval.hasOwnProperty(ARcont)) {

				var ARcontvalue = ARretval[ARcont];
				var rc = Number(ARcont);
				var crow = ARtbody.insertRow(ARcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((ARcontvalue["SELF_AGE"]))?"0":(ARcontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((ARcontvalue["SELF_RA_BAL"]))?"0":numberWithCommas(ARcontvalue["SELF_RA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =isNaN((ARcontvalue["SELF_RA_ADDITION"]))?"0":numberWithCommas(ARcontvalue["SELF_RA_ADDITION"]);//value[4];  
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((ARcontvalue["SELF_RA_DEDUCTION"]))?"0":numberWithCommas(ARcontvalue["SELF_RA_DEDUCTION"]);//value[5];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((ARcontvalue["SELF_RA_ENDBAL"]))?"0":numberWithCommas(ARcontvalue["SELF_RA_ENDBAL"]);//value[6];  
				cell5.style.textAlign = "center";
			 
			}}
		
		
		 //////////Ordinary/////////////
		var AOtblId = document.getElementById("CpfAROrdinaryBalanceTablereport");
		var  AOtbody =  AOtblId.tBodies[0];
		
		for ( var  AOcont in  AOretval) {
			
			if ( AOretval.hasOwnProperty( AOcont)) {

				var  AOcontvalue = retval[ AOcont];
				var rc = Number(AOcont);
				var crow =  AOtbody.insertRow( AOcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((AOcontvalue["SELF_AGE"]))?"0":(AOcontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((AOcontvalue["SELF_OA_BAL"]))?"0":numberWithCommas(AOcontvalue["SELF_OA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				    
				var cell3 = crow.insertCell(3);
				cell3.innerHTML =isNaN((AOcontvalue["SELF_OA_ADDITION"]))?"0":numberWithCommas(AOcontvalue["SELF_OA_ADDITION"]);//value[5];  
				cell3.style.textAlign = "center";
				
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((AOcontvalue["SELF_OA_DEDUCTION"]))?"0":numberWithCommas(AOcontvalue["SELF_OA_DEDUCTION"]);//value[6];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((AOcontvalue["SELF_OA_ENDBAL"]))?"0":numberWithCommas(AOcontvalue["SELF_OA_ENDBAL"]);//value[6];  
				cell5.style.textAlign = "center";
			 
			}}
		
		
//////////Special/////////////
		var AStblId = document.getElementById("CpfARSpecialBalanceTablereport");
		var AStbody = AStblId.tBodies[0];
		
		for ( var AScont in ASretval) {
			
			if (ASretval.hasOwnProperty(AScont)) {

				var AScontvalue = ASretval[AScont];
				var rc = Number(AScont);
				var crow = AStbody.insertRow(AScont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((AScontvalue["SELF_AGE"]))?"0":(AScontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((AScontvalue["SELF_SA_BAL"]))?"0":numberWithCommas(AScontvalue["SELF_SA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);
				cell3.innerHTML =isNaN((AScontvalue["SELF_SA_ADDITION"]))?"0":numberWithCommas(AScontvalue["SELF_SA_ADDITION"]);//value[5];  
				cell3.style.textAlign = "center";
				
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((AScontvalue["SELF_SA_DEDUCTION"]))?"0":numberWithCommas(AScontvalue["SELF_SA_DEDUCTION"]);//value[6];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((AScontvalue["SELF_SA_ENDBAL"]))?"0":numberWithCommas(AScontvalue["SELF_SA_ENDBAL"]);//value[6];  
				cell5.style.textAlign = "center";
			 
			}}
		
		
//////////Special/////////////
		var AMtblId = document.getElementById("CpfARMedisaveBalanceTablereport");
		var AMtbody = AMtblId.tBodies[0];
		
		for ( var AMcont in AMretval) {
			
			if (AMretval.hasOwnProperty(AMcont)) {

				var AMcontvalue = AMretval[AMcont];
				var rc = Number(AMcont);
				var crow = AMtbody.insertRow(AMcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";

				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= isNaN((AMcontvalue["SELF_AGE"]))?"0":(AMcontvalue["SELF_AGE"]);// value[2];						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =isNaN((AMcontvalue["SELF_SA_BAL"]))?"0":numberWithCommas(AMcontvalue["SELF_SA_BAL"]); //value[3];   						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);
				cell3.innerHTML =isNaN((AMcontvalue["SELF_SA_ADDITION"]))?"0":numberWithCommas(AMcontvalue["SELF_SA_ADDITION"]);//value[5];  
				cell3.style.textAlign = "center";
				
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =isNaN((AMcontvalue["SELF_SA_DEDUCTION"]))?"0":numberWithCommas(AMcontvalue["SELF_SA_DEDUCTION"]);//value[6];  
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =isNaN((AMcontvalue["SELF_SA_ENDBAL"]))?"0":numberWithCommas(AMcontvalue["SELF_SA_ENDBAL"]);//value[6];  
				cell5.style.textAlign = "center";
			 
			}}
		
	});
	
	  
	hideLoader();
}


	//CPF Analysis
$("#btnCPFpdfPrint").click(function (){
	 showLoader(); 
	var pl ="landscape";  // landscape     portrait
	var fileSave ="CPFProjectionsAnalysis";
	var screentittlefootername = "CPF Analysis";
	
	var tblIdCpfOrdinaryBalanceTablereport ="CpfOrdinaryBalanceTablereport";  
	var tblIdCpfSpecialBalanceTablereport ="CpfSpecialBalanceTablereport";
	var tblIdCpfMedisaveBalanceTablereport ="CpfMedisaveBalanceTablereport";
	var tdlIdCpfARRetirementBalanceTablereport ="CpfARRetirementBalanceTablereport";
	var tblIdCpfAROrdinaryBalanceTablereport ="CpfAROrdinaryBalanceTablereport";
	var tblIdCpfARSpecialBalanceTablereport ="CpfARSpecialBalanceTablereport";
	var tblIdCpfARMedisaveBalanceTablereport ="CpfARMedisaveBalanceTablereport";
	
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
	$("#CpfOrdinaryBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfOrdinaryBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfOrdinaryBalanceTablereportAry =[];  
	columnsCpfOrdinaryBalanceTablereportAry.push(columnsCpfOrdinaryBalanceTablereport);
	
//2
    var columnsCpfSpecialBalanceTablereport =[];
	$("#CpfSpecialBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfSpecialBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfSpecialBalanceTablereportAry =[];  
	columnsCpfSpecialBalanceTablereportAry.push(columnsCpfSpecialBalanceTablereport);

//3
    var columnsCpfMedisaveBalanceTablereport =[];
	$("#CpfMedisaveBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfMedisaveBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfMedisaveBalanceTablereportAry =[];  
	columnsCpfMedisaveBalanceTablereportAry.push(columnsCpfMedisaveBalanceTablereport);
	
//4
    var columnsCpfARRetirementBalanceTablereport =[];
	$("#CpfARRetirementBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARRetirementBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARRetirementBalanceTablereportAry =[];  
	columnsCpfARRetirementBalanceTablereportAry.push(columnsCpfARRetirementBalanceTablereport);
	
//5
    var columnsCpfAROrdinaryBalanceTablereport =[];
	$("#CpfAROrdinaryBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfAROrdinaryBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfAROrdinaryBalanceTablereportAry =[];  
	columnsCpfAROrdinaryBalanceTablereportAry.push(columnsCpfAROrdinaryBalanceTablereport);
	
//6
    var columnsCpfARSpecialBalanceTablereport =[];
	$("#CpfARSpecialBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARSpecialBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARSpecialBalanceTablereportAry =[];  
	columnsCpfARSpecialBalanceTablereportAry.push(columnsCpfARSpecialBalanceTablereport);
	
//7
    var columnsCpfARMedisaveBalanceTablereport =[];
	$("#CpfARMedisaveBalanceTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsCpfARMedisaveBalanceTablereport.push(h2pcapitalizeWords(hdrText));
	});
	 
	var columnsCpfARMedisaveBalanceTablereportAry =[];  
	columnsCpfARMedisaveBalanceTablereportAry.push(columnsCpfARMedisaveBalanceTablereport);
	
	
	var jsonObject = 
	    [{"key":"Table","value":tblIdCpfOrdinaryBalanceTablereport,"Title":pdfTitleone,"TitleFooter":screentittlefootername,"header":columnsCpfOrdinaryBalanceTablereportAry,"pdfaddnewPage":""},
	     {"key":"Table","value":tblIdCpfSpecialBalanceTablereport,"Title":pdfTitletwo,"TitleFooter":screentittlefootername,"header":columnsCpfSpecialBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfMedisaveBalanceTablereport,"Title":pdfTitlethree,"TitleFooter":screentittlefootername,"header":columnsCpfMedisaveBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tdlIdCpfARRetirementBalanceTablereport,"Title":pdfTitlefour,"TitleFooter":screentittlefootername,"header":columnsCpfARRetirementBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfAROrdinaryBalanceTablereport,"Title":pdfTitlefive,"TitleFooter":screentittlefootername,"header":columnsCpfAROrdinaryBalanceTablereportAry,"pdfaddnewPage":"yes"},
	     {"key":"Table","value":tblIdCpfARSpecialBalanceTablereport,"Title":pdfTitlesix,"TitleFooter":screentittlefootername,"header":columnsCpfARSpecialBalanceTablereportAry,"pdfaddnewPage":"yes"},
		 {"key":"Table","value":tblIdCpfARMedisaveBalanceTablereport,"Title":pdfTitleseven,"TitleFooter":screentittlefootername,"header":columnsCpfARMedisaveBalanceTablereportAry,"pdfaddnewPage":"yes"}
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
	 },100);
	 hideLoader();
});



/*investment Details*/
function investmentDetailsSrch(strFNAId){
	
	showLoader(); 
	var fnaId = strFNAId;
	 
	var parameter = "DBCALLFOR=GET_INVESTMENT_DETAILS&strFnaId="+ fnaId ;
	
	ajaxCall(parameter,servletName,function(Data){
	
		var INVretval = Data;
      
		var INVtblId = document.getElementById("investmentDetailsTableReport");
		var INVtbody = INVtblId.tBodies[0];
		
		for ( var INVcont in INVretval) {
			
			if (INVretval.hasOwnProperty(INVcont)) {
  
				var INVcontvalue = INVretval[INVcont];
				var rc = Number(INVcont);
				var crow = INVtbody.insertRow(INVcont);

				//var cell0 = crow.insertCell(0);
				//cell0.innerHTML =  (rc + 1);
				//cell0.style.textAlign = "center";
				
				var cell0 = crow.insertCell(0);		
				cell0.innerHTML= (isEmpty(INVcontvalue["INV_OWNER"])?" ":(INVcontvalue["INV_OWNER"])); 	
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML =(isEmpty(INVcontvalue["INV_TYPE"])?" ":(INVcontvalue["INV_TYPE"]));     						
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);								
				cell2.innerHTML =(isEmpty(INVcontvalue["INV_FA"])?" ":(INVcontvalue["INV_FA"])); 
				cell2.style.textAlign = "center";
				    
				var cell3 = crow.insertCell(3);
				cell3.innerHTML =(isEmpty(INVcontvalue["INV_INSTNAME"])?" ":(INVcontvalue["INV_INSTNAME"])); 
				cell3.style.textAlign = "center";
				
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =(isEmpty(INVcontvalue["INV_DESC"])?" ":(INVcontvalue["INV_DESC"])); 
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =(isEmpty(INVcontvalue["INV_ESTRATE"])?" ":(INVcontvalue["INV_ESTRATE"])); 
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =(isEmpty(INVcontvalue["INV_AMOUNT"])?" ":(INVcontvalue["INV_AMOUNT"])); 
				cell6.style.textAlign = "center";
				
				var cell7 = crow.insertCell(7);
				cell7.innerHTML =(isEmpty(INVcontvalue["INV_PAYMETHOD"])?" ":(INVcontvalue["INV_PAYMETHOD"]));
				cell7.style.textAlign = "center";
				
				var cell8 = crow.insertCell(8);
				cell8.innerHTML =(isEmpty(INVcontvalue["INV_DATE"])?" ":(INVcontvalue["INV_DATE"]));   
				cell8.style.textAlign = "center";
				
				var cell9 = crow.insertCell(9);
				cell9.innerHTML =(isEmpty(INVcontvalue["INV_CURRBID"])?" ":(INVcontvalue["INV_CURRBID"])); 
				cell9.style.textAlign = "center";
				
				var cell10 = crow.insertCell(10);
				/*cell10.innerHTML =(isEmpty(INVcontvalue["INV_UNITSALLOC"])?" ":(INVcontvalue["INV_UNITSALLOC"])); */
				var units =(isEmpty(INVcontvalue["INV_UNITSALLOC"])?" ":(INVcontvalue["INV_UNITSALLOC"])); 
				//var unitsToDecimalConv=parseFloat(units).toFixed(4);
				cell10.innerHTML =parseFloat(units).toFixed(4);
				cell10.style.textAlign = "center";
				
				var cell11 = crow.insertCell(11);
				/*cell11.innerHTML =(isEmpty(INVcontvalue["INV_CURRNAV"])?" ":(INVcontvalue["INV_CURRNAV"])); */
				/*var currNAV =(isEmpty(INVcontvalue["INV_CURRNAV"])?" ":(INVcontvalue["INV_CURRNAV"]));  */
				/*cell11.innerHTML =parseFloat(currNAV).toFixed(4);*/
				cell11.innerHTML =(isEmpty(INVcontvalue["INV_CURRNAV"])?" ":(INVcontvalue["INV_CURRNAV"]));
				cell11.style.textAlign = "center";
			 
		        var cell12 = crow.insertCell(12);
				cell12.innerHTML =(isEmpty(INVcontvalue["INV_REGPLAN_FREQ"])?" ":(INVcontvalue["INV_REGPLAN_FREQ"])); 
				cell12.style.textAlign = "center";
				
				var cell13 = crow.insertCell(13);
				cell13.innerHTML =(isEmpty(INVcontvalue["INV_REGPLAN_AMOUNT"])?"0":(INVcontvalue["INV_REGPLAN_AMOUNT"])); 
				cell13.style.textAlign = "center";
		
		        var cell14 = crow.insertCell(14);
				cell14.innerHTML =(isEmpty(INVcontvalue["INV_REGPLAN_FROMYRS"])?"0":(INVcontvalue["INV_REGPLAN_FROMYRS"])); 
				cell14.style.textAlign = "center";
		
   		        var cell15 = crow.insertCell(15);
				cell15.innerHTML =(isEmpty(INVcontvalue["DIV_PERIODINV"])?"0":(INVcontvalue["DIV_PERIODINV"])); 
				cell15.style.textAlign = "center";
		
		        var cell16 = crow.insertCell(16);
				cell16.innerHTML =(isEmpty(INVcontvalue["INV_OBJECTIVE"])?" ":(INVcontvalue["INV_OBJECTIVE"])); 
				cell16.style.textAlign = "center";
		
		        var cell17 = crow.insertCell(17);
				cell17.innerHTML =(isEmpty(INVcontvalue["INV_CHILDNAME"])?" ":(INVcontvalue["INV_CHILDNAME"])); 
				cell17.style.textAlign = "center";
				
				 var cell18 = crow.insertCell(18);
				cell18.innerHTML =(isEmpty(INVcontvalue["INV_ACCPRCNT"])?"0":(INVcontvalue["INV_ACCPRCNT"])); 
				cell18.style.textAlign = "center";
	 
			}
			
	 	
			}
			 
	});
	

	hideLoader();
	setTimeout(function(){
		var $selfTotal=0;
		var $spouseTotal=0;
		var $jointTotal=0;
		$("#investmentDetailsTableReport tbody").find('tr:visible').each(function(){ 
	    var $curElm=$(this);
	    var $owner = $curElm.find("td:eq(0)").text();  
			if($owner =="Self"){
			$selfTotal += +$curElm.find("td:eq(11)").text()||0;
			}
		    if($owner =="Spouse"){
			$spouseTotal += +$curElm.find("td:eq(11)").text()||0;
			}
			if($owner =="Joint"){
			$jointTotal += +$curElm.find("td:eq(11)").text()||0;
			}
		});
		
	//var InvSelfTotal =parseFloat($selfTotal).toFixed(4);
	var InvSelfTotal =$selfTotal;
	$('#InvSelfTotal').text(InvSelfTotal);
	//var InvSpouseTotal =parseFloat($spouseTotal).toFixed(4);
	var InvSpouseTotal =$spouseTotal;
	$('#InvSpouseTotal').text(InvSpouseTotal);
	//var InvJointTotal =parseFloat($jointTotal).toFixed(4);
	var InvJointTotal =$jointTotal;
	$('#InvJointTotal').text(InvJointTotal);		
								}, 1000);
	
		
	
		
}

 
$("#invDetspdfPrint").click(function (){ 
	
	showLoader(); 

	var rl = $('#investmentDetailsTableReport tbody tr:visible').length;
		if(rl == 0) {
			hideLoader();
			alert("No data to export")
			return false;
		}
	
	//$("#canvasbarChartSRS").addClass("chartjs-render-monitor widthpixel");
	//$("#canvasSelfBarChart").addClass("chartjs-render-monitor widthpixel");
	var pl ="landscape";  // landscape     portrait
	var fileSave ="Investment_Details";
	
	var divIdpdfCABAmountChart ="CABCurrentRegularAmountChart";  //table id 
	var tblIdcashOfBanksTablereport ="investmentDetailsTableReport";
	 
	var pdfTitle =" ";  
	var pdfTitleone ="List of Bank Accounts";
	var screentittlefootername = "Investment Details";
	
	drawdatatablepaging(tblIdcashOfBanksTablereport);


	var columnsgeneratetoamendincExp =[];
	$("#SRSProjectionTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsgeneratetoamendincExp.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnsgeneratetoamendincExpAry =[]; //non group header we should follow this
	columnsgeneratetoamendincExpAry.push(columnsgeneratetoamendincExp);
	
	var invColHeaderArray  = [
	    [
	        {content: 'Investmt & NAV Details', colSpan: 12, styles: {halign: 'center'}}, 
	        {content: 'Regular Investment (RSP)', colSpan: 3, styles: {halign: 'center'}},
	        {content: 'Objective', colSpan: 4, styles: {halign: 'center'}}
	       // {content: 'On Retirement', colSpan: 5, styles: {halign: 'center'}}
	        
	    ],
	    ["Ownership","Investmt Type","Name of FA/ Broker/ Secruity house","Names of Institution","Description of Inv","Estd.Inv.Rate (%)","Amount Invested","Source/Payment Method","Date Invested","Current Bid Pr/NAV","No. of units","Current NAV","Frequency","Amount","No.of Yrs. of RSP","Period of Inv","Objective","Name of child, the Inv. provided for","% of accuml"],
	];
	
	var jsonObject = 
	    [{"key":"Table","value":tblIdcashOfBanksTablereport,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":invColHeaderArray,"pdfaddnewPage":""},
       //{"key":"Image","value":divIdpdfCABAmountChart,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	  //  {"key":"Table","value":tblIdcashOfBanksTablereport,"Title":pdfTitleone,"TitleFooter":screentittlefootername,"header":cabColHeaderArray,"pdfaddnewPage":"yes"},
	    
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
	 },100);
	 
		hideLoader();
});




/*life InsuranceSrch*/
function lifeInsuranceSrch(strFNAId){
	
	showLoader(); 

	var fnaId = strFNAId;
	 
	var parameter = "DBCALLFOR=GET_LIFE_INSURANCE_DETAILS&strFnaId="+ fnaId ;
	
	ajaxCall(parameter,servletName,function(Data){
	
			var LIFretval = Data;
      
		var LIFtblId = document.getElementById("lifeInsTablereport");
		var LIFtbody = LIFtblId.tBodies[0];
		
		for ( var LIFcont in LIFretval) {
			
			if (LIFretval.hasOwnProperty(LIFcont)) {
  
				var LIFcontvalue = LIFretval[LIFcont];
				var rc = Number(LIFcont);
				var crow = LIFtbody.insertRow(LIFcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= (isEmpty(LIFcontvalue["LIP_OWNER"])?" ":(LIFcontvalue["LIP_OWNER"])); 					
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =(isEmpty(LIFcontvalue["LIP_ASSURED"])?" ":(LIFcontvalue["LIP_ASSURED"]));     						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				/*cell3.innerHTML =(isEmpty(LIFcontvalue["LIP_COMPANY"])?" ":(LIFcontvalue["LIP_COMPANY"])); */
				cell3.innerHTML =(isEmpty(LIFcontvalue["LIP_PRIN_NAME"])?" ":(LIFcontvalue["LIP_PRIN_NAME"])); 
				cell3.style.textAlign = "center";
				 
				var cell4 = crow.insertCell(4);
				cell4.innerHTML =(isEmpty(LIFcontvalue["LIP_PLANNAME"])?" ":(LIFcontvalue["LIP_PLANNAME"])); 
				cell4.style.textAlign = "center";
				
				   
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =(isEmpty(LIFcontvalue["LIP_POLICYNO"])?" ":(LIFcontvalue["LIP_POLICYNO"])); 
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =(isEmpty(LIFcontvalue["LIP_PLANTYPE"])?" ":(LIFcontvalue["LIP_PLANTYPE"])); 
				cell6.style.textAlign = "center";
				
				/*var cell6 = crow.insertCell(6);
				cell6.innerHTML =(isEmpty(LIFcontvalue["LIP_POLICYTYPE"])?" ":(LIFcontvalue["LIP_POLICYTYPE"])); 
				cell6.style.textAlign = "center";*/
				
				var cell7 = crow.insertCell(7);
				cell7.innerHTML =(isEmpty(LIFcontvalue["LIP_INCEPDATE"])?" ":(LIFcontvalue["LIP_INCEPDATE"])); 
				cell7.style.textAlign = "center";
				
				var cell8 = crow.insertCell(8);
				cell8.innerHTML =(isEmpty(LIFcontvalue["LIP_SA"])?" ":(numberWithCommas(LIFcontvalue["LIP_SA"]))); 
				cell8.style.textAlign = "center";
				
				var cell9 = crow.insertCell(9);
				cell9.innerHTML =(isEmpty(LIFcontvalue["DEATHBENF_COVER"])?" ":(numberWithCommas(LIFcontvalue["DEATHBENF_COVER"])));
				cell9.style.textAlign = "center";
				
				var cell10 = crow.insertCell(10);
				cell10.innerHTML =(isEmpty(LIFcontvalue["CIES_COVER"])?" ":(LIFcontvalue["CIES_COVER"]));   
				cell10.style.textAlign = "center";
				
				var cell11 = crow.insertCell(11);
				cell11.innerHTML =(isEmpty(LIFcontvalue["CIAS_COVER"])?" ":(LIFcontvalue["CIAS_COVER"])); 
				cell11.style.textAlign = "center";
				
				var cell12 = crow.insertCell(12);
				cell12.innerHTML =(isEmpty(LIFcontvalue["DISABLE_COVER"])?" ":(numberWithCommas(LIFcontvalue["DISABLE_COVER"]))); 
				cell12.style.textAlign = "center";
				
				var cell13 = crow.insertCell(13);
				cell13.innerHTML =(isEmpty(LIFcontvalue["PREMIUM"])?" ":(numberWithCommas(LIFcontvalue["PREMIUM"]))); 
				cell13.style.textAlign = "center";
				
				var cell14 = crow.insertCell(14);
				cell14.innerHTML =(isEmpty(LIFcontvalue["LIP_PAYMENTFREQ"])?" ":((LIFcontvalue["LIP_PAYMENTFREQ"]))); 
				cell14.style.textAlign = "center";
				
				var cell15 = crow.insertCell(15);
				cell15.innerHTML =(isEmpty(LIFcontvalue["LIP_PREMIUMSRC"])?" ":((LIFcontvalue["LIP_PREMIUMSRC"]))); 
				cell15.style.textAlign = "center";
			 
		        var cell16 = crow.insertCell(16);
				cell16.innerHTML =(isEmpty(LIFcontvalue["LIP_CURR_CASH_VAL"])?" ":(numberWithCommas(LIFcontvalue["LIP_CURR_CASH_VAL"]))); 
				cell16.style.textAlign = "center";
				
				/*var cell14 = crow.insertCell(14);
				cell14.innerHTML =(isEmpty(LIFcontvalue["LIP_ISNUR_OBJECT"])?"0":(LIFcontvalue["LIP_ISNUR_OBJECT"])); 
				cell14.style.textAlign = "center";*/
		
				var cell17 = crow.insertCell(17);
				cell17.innerHTML =(isEmpty(LIFcontvalue["LIP_MATURITY_VAL"])?"0":(numberWithCommas(LIFcontvalue["LIP_MATURITY_VAL"]))); 
				cell17.style.textAlign = "center";
				
				var cell18 = crow.insertCell(18);
				cell18.innerHTML =(isEmpty(LIFcontvalue["LIP_MATURITY_DATE"])?"0":(LIFcontvalue["LIP_MATURITY_DATE"])); 
				cell18.style.textAlign = "center";
				
				var cell19 = crow.insertCell(19);
				cell19.innerHTML =(isEmpty(LIFcontvalue["POLICY_STATUS"])?"0":(LIFcontvalue["POLICY_STATUS"])); 
				cell19.style.textAlign = "center";
				
		        /*var cell15 = crow.insertCell(15);
				cell15.innerHTML =(isEmpty(LIFcontvalue["OS_LOAN"])?"0":(numberWithCommas(LIFcontvalue["OS_LOAN"]))); 
				cell15.style.textAlign = "center";*/
		
   		        var cell20 = crow.insertCell(20);
				cell20.innerHTML =(isEmpty(LIFcontvalue["LIP_REMARKS"])?"":(LIFcontvalue["LIP_REMARKS"])); 
				cell20.style.textAlign = "center";
	 
			}
			
			}
			 
	});
	hideLoader();
		setTimeout(function(){
		var $selfInsTotal=0;
		var $spouseTotal=0;
		var $jointTotal=0;
		var $selfSumTotal=0;
		var $spouseSumTotal=0;
		var $jointSumTotal=0;
		var $selfPremTotal=0;
		var $spousePremTotal=0;
		var $jointPremTotal=0;
		var $selfMatTotal=0;
		var $spouseMatTotal=0;
		var $jointMatTotal=0;
		$("#lifeInsTablereport tbody").find('tr:visible').each(function(){ 
	    var $curElm=$(this);
	    var $owner = $curElm.find("td:eq(1)").text(); 
			if($owner =="Self"){
			$selfInsTotal += +$curElm.find("td:eq(16)").text().slice(1).replace(/,/g, "")||0;
			$selfSumTotal += +$curElm.find("td:eq(8)").text().slice(1).replace(/,/g, "")||0;
			$selfPremTotal += +$curElm.find("td:eq(13)").text().slice(1).replace(/,/g, "")||0;
			$selfMatTotal += +$curElm.find("td:eq(17)").text().slice(1).replace(/,/g, "")||0;
			}
		    if($owner =="Spouse"){
			$spouseTotal += +$curElm.find("td:eq(16)").text().slice(1).replace(/,/g, "")||0;
			$spouseSumTotal += +$curElm.find("td:eq(8)").text().slice(1).replace(/,/g, "")||0;
			$spousePremTotal += +$curElm.find("td:eq(13)").text().slice(1).replace(/,/g, "")||0;
			$spouseMatTotal += +$curElm.find("td:eq(17)").text().slice(1).replace(/,/g, "")||0;
			}
			if($owner =="Joint"){
			$jointTotal += +$curElm.find("td:eq(16)").text().slice(1).replace(/,/g, "")||0;
			$jointSumTotal += +$curElm.find("td:eq(8)").text().slice(1).replace(/,/g, "")||0;
			$jointPremTotal += +$curElm.find("td:eq(13)").text().slice(1).replace(/,/g, "")||0;
			$jointMatTotal += +$curElm.find("td:eq(17)").text().slice(1).replace(/,/g, "")||0;
			}
		});
		
	//var InvSelfTotal =parseFloat($selfInsTotal).toFixed(4);
	var InvSelfTotal =$selfInsTotal;
	$('#LifeSelfCashTotal').text(numberWithCommas(InvSelfTotal));
	$('#LifeSelfSumTotal').text(numberWithCommas($selfSumTotal));	
	$('#LifeSelfPremTotal').text(numberWithCommas($selfPremTotal));
	 $('#LifeSelfMaturityTotal').text(numberWithCommas($selfMatTotal));	
		
		
	//var InvSpouseTotal =parseFloat($spouseTotal).toFixed(4);
	var InvSpouseTotal =$spouseTotal;
	$('#LifeSpouseCashTotal').text(numberWithCommas(InvSpouseTotal));
	$('#LifeSpouseSumTotal').text(numberWithCommas($spouseSumTotal));	
	$('#LifeSpousePremTotal').text(numberWithCommas($spousePremTotal));
	 $('#LifeSpouseMaturityTotal').text(numberWithCommas($spouseMatTotal));	
	
	//var InvJointTotal =parseFloat($jointTotal).toFixed(4);
	var InvJointTotal =$jointTotal;
	$('#LifeTotalCashTotal').text(numberWithCommas(InvJointTotal));	
	$('#LifeJointSumTotal').text(numberWithCommas($jointSumTotal));	
	$('#LifeJointPremTotal').text(numberWithCommas($jointPremTotal));
	 $('#LifeJointMaturityTotal').text(numberWithCommas($jointMatTotal));	
								}, 1000);
}

/*life InsuranceSrch*/
function FPMSlifeInsuranceSrch(strFNAId,strCustId){
	
	showLoader(); 
	var fnaId = strFNAId;
	var custId = strCustId;
	//var parameter = "DBCALLFOR=GET_FPMS_LIFE_INSURANCE_DETAILS&strFnaId="+ fnaId ;
	var parameter = "DBCALLFOR=GET_FPMS_LIFE_INSURANCE_DETAILS&strFnaId="+ fnaId +"&strCustId="+custId;
	ajaxCall(parameter,servletName,function(Data){
	
			var LIFretval = Data;
      
		var LIFtblId = document.getElementById("lifeInsFPMSTablereport");
		var LIFtbody = LIFtblId.tBodies[0];
		
		for ( var LIFcont in LIFretval) {
			
			if (LIFretval.hasOwnProperty(LIFcont)) {
  
				var LIFcontvalue = LIFretval[LIFcont];
				var rc = Number(LIFcont);
				var crow = LIFtbody.insertRow(LIFcont);

				var cell0 = crow.insertCell(0);
				cell0.innerHTML =  (rc + 1);
				cell0.style.textAlign = "center";
				
				var cell1 = crow.insertCell(1);		
				cell1.innerHTML= (isEmpty(LIFcontvalue["APPLICATION"])?" ":(LIFcontvalue["APPLICATION"])); 					
				cell1.style.textAlign = "center";
				
				var cell2 = crow.insertCell(2);		
				cell2.innerHTML =(isEmpty(LIFcontvalue["PLANNAME"])?" ":(LIFcontvalue["PLANNAME"]));     						
				cell2.style.textAlign = "center";
				
				var cell3 = crow.insertCell(3);								
				cell3.innerHTML =(isEmpty(LIFcontvalue["PRINCIPAL"])?" ":(LIFcontvalue["PRINCIPAL"])); 
				cell3.style.textAlign = "center";
				    
				var cell4 = crow.insertCell(4);
				cell4.innerHTML ="Self"; 
				cell4.style.textAlign = "center";
				
				var cell5 = crow.insertCell(5);
				cell5.innerHTML =(isEmpty(LIFcontvalue["CUST_NAME"])?" ":(LIFcontvalue["CUST_NAME"])); 
				cell5.style.textAlign = "center";
				
				var cell6 = crow.insertCell(6);
				cell6.innerHTML =(isEmpty(LIFcontvalue["POLICYNO"])?" ":(LIFcontvalue["POLICYNO"])); 
				cell6.style.textAlign = "center";
				
				var cell7 = crow.insertCell(7);
				cell7.innerHTML ="N/A"; 
				cell7.style.textAlign = "center";
				
				var cell8 = crow.insertCell(8);
				cell8.innerHTML =(isEmpty(LIFcontvalue["POL_STATUS_NAME"])?" ":(LIFcontvalue["POL_STATUS_NAME"]));
				cell8.style.textAlign = "center";
				
				var cell9 = crow.insertCell(9);
				cell9.innerHTML =(isEmpty(LIFcontvalue["ASSURD"])?" ":(numberWithCommas(LIFcontvalue["ASSURD"])));   
				cell9.style.textAlign = "center";
				
				var cell10 = crow.insertCell(10);
				cell10.innerHTML =(isEmpty(LIFcontvalue["PREMIUMAMOUNT"])?" ":(numberWithCommas(LIFcontvalue["PREMIUMAMOUNT"]))); 
				cell10.style.textAlign = "center";
				
			
			}
			
			}
			 
	});
	hideLoader();
}
//lifeInsTablepdfPrint
 
$("#lifeInsTablepdfPrint").click(function (){ 
	
	showLoader(); 
		var rl = $('#lifeInsTablereport tbody tr:visible').length;
		var r2 = $('#lifeInsFPMSTablereport tbody tr:visible').length;
		if(rl == 0 && r2 == 0) {
			hideLoader();
			alert("No data to export")
			return false;
		}
	var pl ="landscape";  // landscape     portrait
	var fileSave ="Life_Insurance_Details";
	
	var tblIdlifeInsTablereport ="lifeInsTablereport";
	 
	var pdfTitle ="";
	var screentittlefootername = "Life Insurance Details";

	drawdatatablepaging(tblIdlifeInsTablereport);

	var columnsgenerateLifIns =[];
	$("#lifeInsTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsgenerateLifIns.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnsgenerateLifInsAry =[]; //non group header we should follow this
	columnsgenerateLifInsAry.push(columnsgenerateLifIns);
	
	

	/* FPMS Life Policy*/
	var fpmstblIdlifeInsTablereport ="lifeInsFPMSTablereport";

	drawdatatablepaging(fpmstblIdlifeInsTablereport);

	var columnsgeneratefpmsLifIns =[];
	$("#lifeInsFPMSTablereport thead tr:first th").each(function(){
	var hdrText=$(this).find("div").text();
	columnsgeneratefpmsLifIns.push(h2pcapitalizeWords(hdrText));
	});
	
	var columnsgenerateFpmsLifInsAry =[]; //non group header we should follow this
	columnsgenerateFpmsLifInsAry.push(columnsgeneratefpmsLifIns);
	
	
	/*var fpmsLifeColHeaderArray  = [
	    ["#","Application","Plan Name","Principal","Proposer","Life Assured","Policy  No.","Coverage  Benefits","Policy Status","Sum Assured","Annual Premium"],
	];
	*/
/*	var fpmsjsonObject = 
	    [{"key":"Table","value":fpmstblIdlifeInsTablereport,"Title":"","TitleFooter":screentittlefootername,"header":fpmsLifeColHeaderArray,"pdfaddnewPage":""},
        
         ];*/
	
	
	
	var invColHeaderArray  = [
	    ["#","Owner","Life Assured","Company","Policy No.","Plan Type","Policy Type","Sum Assured","Death Benefit","DD Early Stage","DD Advanced Stage","Annual Premium","Premium Source","Cash Value","objective","Outstanding Loan","Remarks"],
	];
	//pdfaddnewPage which mean if we have next one for first no value
	var jsonObject = 
	    [{"key":"Table","value":tblIdlifeInsTablereport,"Title":"","TitleFooter":screentittlefootername,"header":invColHeaderArray,"pdfaddnewPage":""},
	    {"key":"Table","value":fpmstblIdlifeInsTablereport,"Title":"","TitleFooter":screentittlefootername,"header":columnsgenerateFpmsLifInsAry,"pdfaddnewPage":"yes"}
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
	 },100);
	 
		hideLoader();
});




//netWorthAnalysisRptSrch
function netWorthAnalysisRptSrch(strFNAId){
	
	showLoader(); 
	var fnaId = strFNAId;
	 
	var parameter = "DBCALLFOR=GET_NETWORTH_DETAILS&strFnaId="+ fnaId ;
	
	ajaxCall(parameter,servletName,function(Data){
	
		var NAVretval = Data;
		 
		hideLoader()
		for ( var val in NAVretval) {
		var NAVtabdets = NAVretval[val];
		 
		 //Cash/Cash Equivalents
		var txtfldTotalCashAsset = (NAVtabdets["TOTAL_CASH_ASSET"] / NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
		var txtfldTotalCashAssetCal = (txtfldTotalCashAsset).toFixed(2) +" % ";
		$('#txtfldTotalCashAssetId').html(txtfldTotalCashAssetCal);
		
		//Cash
		var txtfldSelfCash = Number(NAVtabdets["SELF_CASH"]);
		var txtfldSelfCashCal = numberWithCommas(txtfldSelfCash);
		$('#txtfldSelfCashId').html(txtfldSelfCashCal);
		
		var txtfldSpouseCash = Number(NAVtabdets["SPOUSE_CASH"]);
		var txtfldSpouseCashCal = numberWithCommas(txtfldSpouseCash);
		$('#txtfldSpouseCashId').html(txtfldSpouseCashCal);
		
		var txtfldFamilyCash = Number(NAVtabdets["FAMILY_CASH"]);
		var txtfldFamilyCashCal = numberWithCommas(txtfldFamilyCash);
		$('#txtfldFamilyCashId').html(txtfldFamilyCashCal);
		
		var txtfldTotalCashAssetTot = Number(NAVtabdets["TOTAL_CASH_ASSET"]);
		var txtfldTotalCashAssetTotCal = numberWithCommas(txtfldTotalCashAssetTot);
		$('#txtfldTotalCashAssetTotId').html(txtfldTotalCashAssetTotCal);
		
		var txtfldTotalCashLiab = Number(NAVtabdets["TOTAL_CASH_LIAB"]);
		var txtfldTotalCashLiabCal = numberWithCommas(txtfldTotalCashLiab);
		$('#txtfldTotalCashLiabId').html(txtfldTotalCashLiabCal);
		
		var txtfldCashNetworth = Number(NAVtabdets["CASH_NETWORTH"]);
		var txtfldCashNetworthCal = numberWithCommas(txtfldCashNetworth);
		$('#txtfldCashNetworthId').html(txtfldCashNetworthCal);
		 
	    var txtfldTotalCashAssett = ((NAVtabdets["TOTAL_CASH_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100) + ((NAVtabdets["TOTAL_SRS_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100);
        var txtfldTotalCashAssetCall = (txtfldTotalCashAssett).toFixed(2) +" % ";
        $('#txtfldTotalCashAssettId').html(txtfldTotalCashAssetCall);   

         //SRS

        var txtfldCashSelfSRS = Number(NAVtabdets["CASST_SELF_SRS"]);
        var txtfldCashSelfSRSCal = numberWithCommas(txtfldCashSelfSRS);
        $('#txtfldCashSelfSRSId').html(txtfldCashSelfSRSCal); 
		
		var txtfldCasstSPSSRS = Number(NAVtabdets["CASST_SPS_SRS"]);
        var txtfldCasstSPSSRSCal = numberWithCommas(txtfldCasstSPSSRS);
        $('#txtfldCasstSPSSRSId').html(txtfldCasstSPSSRSCal); 
         
        var txtfldCasstSRSFamily = Number(NAVtabdets["CASST_SRS_FAMILY"]);
        var txtfldCasstSRSFamilyCal = numberWithCommas(txtfldCasstSRSFamily);
        $('#txtfldCasstSRSFamilyId').html(txtfldCasstSRSFamilyCal); 

        var txtfldTotalSRSAsset = Number(NAVtabdets["TOTAL_SRS_ASSET"]);
        var txtfldTotalSRSAssetCal = numberWithCommas(txtfldTotalSRSAsset);
        $('#txtfldTotalSRSAssetId').html(txtfldTotalSRSAssetCal); 

        var txtfldTotalSRSLiab = Number(NAVtabdets["TOTAL_SRS_LIAB"]);
        var txtfldTotalSRSLiabCal = numberWithCommas(txtfldTotalSRSLiab);
        $('#txtfldTotalSRSLiabId').html(txtfldTotalSRSLiabCal);

		var txtfldSRSNetWorth = Number(NAVtabdets["SRS_NETWORTH"]);
        var txtfldSRSNetWorthCal = numberWithCommas(txtfldSRSNetWorth);
        $('#txtfldSRSNetWorthId').html(txtfldSRSNetWorthCal);

		var txtfldTotalSRSAssett = (NAVtabdets["TOTAL_SRS_ASSET"] / NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalSRSAssetCall = (txtfldTotalSRSAssett).toFixed(2) +" % ";
        $('#txtfldTotalSRSAssettId').html(txtfldTotalSRSAssetCall); 

		//Investment Assets
		
		var txtfldInvestmentAssettTot =  ((NAVtabdets["INS_TOTAL_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100) + ((NAVtabdets["INV_BOND_TOTAL_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"])  * 100) + ((NAVtabdets["INV_LIPUT_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100)+ ((NAVtabdets["INV_SHARES_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"])  * 100) + ((NAVtabdets["INV_OTHERS_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100) + ((NAVtabdets["TOTAL_INV_PROP_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]  * 100))
		var txtfldInvestmentAssettTotCall = (txtfldInvestmentAssettTot).toFixed(2) +" % ";
        $('#txtfldInvestmentAssettTotId').html(txtfldInvestmentAssettTotCall); 

		//Insurance Cash Values
		var txtfldInsCashValSelf = Number(NAVtabdets["INS_CASHVAL_SELF"]);
        var txtfldInsCashValSelfCal = numberWithCommas(txtfldInsCashValSelf);
        $('#txtfldInsCashValSelfId').html(txtfldInsCashValSelfCal);

        var txtfldInsCashValSpouse = Number(NAVtabdets["INS_CASHVAL_SPOUSE"]);
        var txtfldInsCashValSpouseCal = numberWithCommas(txtfldInsCashValSpouse);
        $('#txtfldInsCashValSpouseId').html(txtfldInsCashValSpouseCal);
		
		var txtfldInsCashValFamily = Number(NAVtabdets["INS_CASHVAL_FAMILY"]);
        var txtfldInsCashValFamilyCal = numberWithCommas(txtfldInsCashValFamily);
        $('#txtfldInsCashValFamilyId').html(txtfldInsCashValFamilyCal);
		
		var txtfldInsTotalAsset = Number(NAVtabdets["INS_TOTAL_ASSET"]);
        var txtfldInsTotalAssetCal = numberWithCommas(txtfldInsTotalAsset);
        $('#txtfldInsTotalAssetId').html(txtfldInsTotalAssetCal);
		
		var txtfldInsTotalLiab = Number(NAVtabdets["INS_TOTAL_LIAB"]);
        var txtfldInsTotalLiabCal = numberWithCommas(txtfldInsTotalLiab);
        $('#txtfldInsTotalLiabId').html(txtfldInsTotalLiabCal);
		
		var txtfldInsNetWorth = Number(NAVtabdets["INS_NETWORTH"]);
        var txtfldInsNetWorthCal = numberWithCommas(txtfldInsNetWorth);
        $('#txtfldInsNetWorthId').html(txtfldInsNetWorthCal);
		
		var txtfldInstotalAssetSSFasset = (NAVtabdets["INS_TOTAL_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldInstotalAssetSSFassetCal = (txtfldInstotalAssetSSFasset).toFixed(2) +" % ";
        $('#txtfldInstotalAssetSSFassetId').html(txtfldInstotalAssetSSFassetCal);
		
		//Bonds
		var txtfldInsBondsSelf = Number(NAVtabdets["INV_BONDS_SELF"]);
        var txtfldInsBondsSelfCal = numberWithCommas(txtfldInsBondsSelf);
        $('#txtfldInsBondsSelfId').html(txtfldInsBondsSelfCal);
		
		var txtfldInsBondsSpouse = Number(NAVtabdets["INV_BONDS_SPOUSE"]);
        var txtfldInsBondsSpouseCal = numberWithCommas(txtfldInsBondsSpouse);
        $('#txtfldInsBondsSpouseId').html(txtfldInsBondsSpouseCal);
		
		var txtfldInsBondsFamily = Number(NAVtabdets["INV_BONDS_FAMILY"]);
        var txtfldInsBondsFamilyCal = numberWithCommas(txtfldInsBondsFamily);
        $('#txtfldInsBondsFamilyId').html(txtfldInsBondsFamilyCal);
		
		var txtfldInsBondsTotalAsset = Number(NAVtabdets["INV_BOND_TOTAL_ASSET"]);
        var txtfldInsBondsTotalAssetCal = numberWithCommas(txtfldInsBondsTotalAsset);
        $('#txtfldInsBondsTotalAssetId').html(txtfldInsBondsTotalAssetCal);
		
		var txtfldInsBondsNetWorth = Number(NAVtabdets["INV_BOND_NETWORTH"]);
        var txtfldInsBondsNetWorthCal = numberWithCommas(txtfldInsBondsNetWorth);
        $('#txtfldInsBondsNetWorthId').html(txtfldInsBondsNetWorthCal);
		
		var txtfldInvBondTotalAssetTotSSFasset = (NAVtabdets["INV_BOND_TOTAL_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldInvBondTotalAssetTotSSFassetCal = (txtfldInvBondTotalAssetTotSSFasset).toFixed(2) +" % ";
        $('#txtfldInvBondTotalAssetTotSSFassetId').html(txtfldInvBondTotalAssetTotSSFassetCal);

		//Unit Trust , ILPs
		var txtfldInvIlputSelf = Number(NAVtabdets["INV_ILPUT_SELF"]);
        var txtfldInvIlputSelfCal = numberWithCommas(txtfldInvIlputSelf);
        $('#txtfldInvIlputSelfId').html(txtfldInvIlputSelfCal);
		
		var txtfldInvIlputSpouse = Number(NAVtabdets["INV_ILPUT_SPOUSE"]);
        var txtfldInvIlputSpouseCal = numberWithCommas(txtfldInvIlputSpouse);
        $('#txtfldInvIlputSpouseId').html(txtfldInvIlputSpouseCal);
		
		var txtfldInvIlputFamily = Number(NAVtabdets["INV_ILPUT_FAMILY"]);
        var txtfldInvIlputFamilyCal = numberWithCommas(txtfldInvIlputFamily);
        $('#txtfldInvIlputFamilyId').html(txtfldInvIlputFamilyCal);
		
		var txtfldInvIlputAsset = Number(NAVtabdets["INV_LIPUT_ASSET"]);
        var txtfldInvIlputAssetCal = numberWithCommas(txtfldInvIlputAsset);
        $('#txtfldInvIlputAssetId').html(txtfldInvIlputAssetCal);
		
		var txtfldInvIlputNetWorth = Number(NAVtabdets["INV_ILPUT_NETWORTH"]);
        var txtfldInvIlputNetWorthCal = numberWithCommas(txtfldInvIlputNetWorth);
        $('#txtfldInvIlputNetWorthId').html(txtfldInvIlputNetWorthCal);
		
		var txtfldInvIlputAssetTotSSFasset = (NAVtabdets["INV_LIPUT_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldInvIlputAssetTotSSFassetCal = (txtfldInvIlputAssetTotSSFasset).toFixed(2) +" % ";
        $('#txtfldInvIlputAssetTotSSFassetId').html(txtfldInvIlputAssetTotSSFassetCal);
		
		//Shares
		var txtfldInvSharesSelf = Number(NAVtabdets["INV_SHARES_SELF"]);
        var txtfldInvSharesSelfCal = numberWithCommas(txtfldInvSharesSelf);
        $('#txtfldInvSharesSelfId').html(txtfldInvSharesSelfCal);
		
		var txtfldInvSharesSpouse = Number(NAVtabdets["INV_SHARES_SPOUSE"]);
        var txtfldInvSharesSpouseCal = numberWithCommas(txtfldInvSharesSpouse);
        $('#txtfldInvSharesSpouseId').html(txtfldInvSharesSpouseCal);
		
		var txtfldInvSharesFamily = Number(NAVtabdets["INV_SHARES_FAMILY"]);
        var txtfldInvSharesFamilyCal = numberWithCommas(txtfldInvSharesFamily);
        $('#txtfldInvSharesFamilyId').html(txtfldInvSharesFamilyCal);
		
		var txtfldInvSharesAsset = Number(NAVtabdets["INV_SHARES_ASSET"]);
        var txtfldInvSharesAssetCal = numberWithCommas(txtfldInvSharesAsset);
        $('#txtfldInvSharesAssetId').html(txtfldInvSharesAssetCal);

		var txtfldInvSharesNetWorth = Number(NAVtabdets["INV_SHARES_NETWORTH"]);
        var txtfldInvSharesNetWorthCal = numberWithCommas(txtfldInvSharesNetWorth);
        $('#txtfldInvSharesNetWorthId').html(txtfldInvSharesNetWorthCal);
		 
	    var txtfldInvSharesAssetTotSSFAsset = (NAVtabdets["INV_SHARES_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldInvSharesAssetTotSSFAssetCal = (txtfldInvSharesAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldInvSharesAssetTotSSFAssetId').html(txtfldInvSharesAssetTotSSFAssetCal);

	    //Other Investments
        var txtfldInvOtherSelf = Number(NAVtabdets["INV_OTHER_SELF"]);
        var txtfldInvOtherSelfCal = numberWithCommas(txtfldInvOtherSelf);
        $('#txtfldInvOtherSelfId').html(txtfldInvOtherSelfCal);

		var txtfldInvOtherSpouse = Number(NAVtabdets["INV_OTHER_SPOUSE"]);
        var txtfldInvOtherSpouseCal = numberWithCommas(txtfldInvOtherSpouse);
        $('#txtfldInvOtherSpouseId').html(txtfldInvOtherSpouseCal);

		var txtfldInvOtherFamily = Number(NAVtabdets["INV_OTHER_FAMILY"]);
        var txtfldInvOtherFamilyCal = numberWithCommas(txtfldInvOtherFamily);
        $('#txtfldInvOtherFamilyId').html(txtfldInvOtherFamilyCal);

		var txtfldInvOtherAsset = Number(NAVtabdets["INV_OTHERS_ASSET"]);
        var txtfldInvOtherAssetCal = numberWithCommas(txtfldInvOtherAsset);
        $('#txtfldInvOtherAssetId').html(txtfldInvOtherAssetCal);

		var txtfldInvOtherNetWorth = Number(NAVtabdets["INV_OTHERS_NETWORTH"]);
        var txtfldInvOtherNetWorthCal = numberWithCommas(txtfldInvOtherNetWorth);
        $('#txtfldInvOtherNetWorthId').html(txtfldInvOtherNetWorthCal);

		var txtfldInvOtherAssetTotSSFAsset = (NAVtabdets["INV_OTHERS_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldInvOtherAssetTotSSFAssetCal = (txtfldInvOtherAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldInvOtherAssetTotSSFAssetId').html(txtfldInvOtherAssetTotSSFAssetCal);

        //Investments Properties 
		var txtfldInvPropSelf = Number(NAVtabdets["INV_PROP_SELF"]);
        var txtfldInvPropSelfCal = numberWithCommas(txtfldInvPropSelf);
        $('#txtfldInvPropSelfId').html(txtfldInvPropSelfCal);

		var txtfldInvPropSpouse = Number(NAVtabdets["INV_PROP_SPOUSE"]);
        var txtfldInvPropSpouseCal = numberWithCommas(txtfldInvPropSpouse);
        $('#txtfldInvPropSpouseId').html(txtfldInvPropSpouseCal);

		var txtfldInvPropFamily = Number(NAVtabdets["INV_PROP_FAMILY"]);
        var txtfldInvPropFamilyCal = numberWithCommas(txtfldInvPropFamily);
        $('#txtfldInvPropFamilyId').html(txtfldInvPropFamilyCal);
		
		var txtfldTotalInvPropAsset = Number(NAVtabdets["TOTAL_INV_PROP_ASSET"]);
        var txtfldTotalInvPropAssetCal = numberWithCommas(txtfldTotalInvPropAsset);
        $('#txtfldTotalInvPropAssetId').html(txtfldTotalInvPropAssetCal);

		var txtfldInvPropLiab = Number(NAVtabdets["INV_PROP_LIAB"]);
        var txtfldInvPropLiabCal = numberWithCommas(txtfldInvPropLiab);
        $('#txtfldInvPropLiabId').html(txtfldInvPropLiabCal);
		
		var txtfldInvPropNetWorth = Number(NAVtabdets["INV_PROP_NETWORTH"]);
        var txtfldInvPropNetWorthCal = numberWithCommas(txtfldInvPropNetWorth);
        $('#txtfldInvPropNetWorthId').html(txtfldInvPropNetWorthCal);
		
		var txtfldTotalInvPropAssetTotSSFAsset = (NAVtabdets["TOTAL_INV_PROP_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalInvPropAssetTotSSFAssetCal = (txtfldTotalInvPropAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalInvPropAssetTotSSFAssetId').html(txtfldTotalInvPropAssetTotSSFAssetCal);

		//CPF
		var txtfldCpfOASAMASSFAsset = ((NAVtabdets["CPF_OA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100) + ((NAVtabdets["CPF_SA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100) + ((NAVtabdets["CPF_MA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100);                     
        var txtfldCpfOASAMASSFAssetCal = (txtfldCpfOASAMASSFAsset).toFixed(2) +" % ";
        $('#txtfldCpfOASAMASSFAssetId').html(txtfldCpfOASAMASSFAssetCal);
		
		//Ordinary
		var txtfldCPFOaSelf = Number(NAVtabdets["CPF_OA_SELF"]);
        var txtfldCPFOaSelfCal = numberWithCommas(txtfldCPFOaSelf);
        $('#txtfldCPFOaSelfId').html(txtfldCPFOaSelfCal);
		
		var txtfldCPFOaSpouse = Number(NAVtabdets["CPF_OA_SPOUSE"]);
        var txtfldCPFOaSpouseCal = numberWithCommas(txtfldCPFOaSpouse);
        $('#txtfldCPFOaSpouseId').html(txtfldCPFOaSpouseCal);
		
		var txtfldCPFOaTotal = Number(NAVtabdets["CPF_OA_TOTAL"]);
        var txtfldCPFOaTotalCal = numberWithCommas(txtfldCPFOaTotal);
        $('#txtfldCPFOaTotalId').html(txtfldCPFOaTotalCal);

		var txtfldCPFOaTotalNet = Number(NAVtabdets["CPF_OA_TOTAL"]);
        var txtfldCPFOaTotalNetCal = numberWithCommas(txtfldCPFOaTotalNet);
        $('#txtfldCPFOaTotalNetId').html(txtfldCPFOaTotalNetCal);

		
		var txtfldCPFOaTotalTotSSFAsset = (NAVtabdets["CPF_OA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldCPFOaTotalTotSSFAssetCal = (txtfldCPFOaTotalTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldCPFOaTotalTotSSFAssetId').html(txtfldCPFOaTotalTotSSFAssetCal);
		
		 //Special 
		var txtfldCPFSaSelf = Number(NAVtabdets["CPF_SA_SELF"]);
        var txtfldCPFSaSelfCal = numberWithCommas(txtfldCPFSaSelf);
        $('#txtfldCPFSaSelfId').html(txtfldCPFSaSelfCal);

		var txtfldCPFSaSpouse = Number(NAVtabdets["CPF_SA_SPOUSE"]);
        var txtfldCPFSaSpouseCal = numberWithCommas(txtfldCPFSaSpouse);
        $('#txtfldCPFSaSpouseId').html(txtfldCPFSaSpouseCal);

		var txtfldCPFSaTotal = Number(NAVtabdets["CPF_SA_TOTAL"]);
        var txtfldCPFSaTotalCal = numberWithCommas(txtfldCPFSaTotal);
        $('#txtfldCPFSaTotalId').html(txtfldCPFSaTotalCal);

		var txtfldCPFSaTotalSpe = Number(NAVtabdets["CPF_SA_TOTAL"]);
        var txtfldCPFSaTotalSpeCal = numberWithCommas(txtfldCPFSaTotalSpe);
        $('#txtfldCPFSaTotalSpeId').html(txtfldCPFSaTotalSpeCal);

		var txtfldCPFSaTotalTotSSFAsset = (NAVtabdets["CPF_SA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldCPFSaTotalTotSSFAssetCal = (txtfldCPFSaTotalTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldCPFSaTotalTotSSFAssetId').html(txtfldCPFSaTotalTotSSFAssetCal);

		//MediSave
		var txtfldCPFMASelf = Number(NAVtabdets["CPF_MA_SELF"]);
        var txtfldCPFMASelfCal = numberWithCommas(txtfldCPFMASelf);
        $('#txtfldCPFMASelfId').html(txtfldCPFMASelfCal); 
		
		//Retiremnt self
		var txtfldCPFRASelf = Number(NAVtabdets["CPF_RA_SELF"]);
        var txtfldCPFRASelfCal = numberWithCommas(txtfldCPFRASelf);
        $('#txtfldCPFRASelfId').html(txtfldCPFRASelfCal); 

		var txtfldCPFMASpouse = Number(NAVtabdets["CPF_MA_SPOUSE"]);
        var txtfldCPFMASpouseCal = numberWithCommas(txtfldCPFMASpouse);
        $('#txtfldCPFMASpouseId').html(txtfldCPFMASpouseCal); 
		
		//retirement spouse
		var txtfldCPFRASpouse = Number(NAVtabdets["CPF_RA_SPOUSE"]);
        var txtfldCPFRASpouseCal = numberWithCommas(txtfldCPFRASpouse);
        $('#txtfldCPFRASpouseId').html(txtfldCPFRASpouseCal); 

		var txtfldCPFMATotal = Number(NAVtabdets["CPF_MA_TOTAL"]);
        var txtfldCPFMATotalCal = numberWithCommas(txtfldCPFMATotal);
        $('#txtfldCPFMATotalId').html(txtfldCPFMATotalCal); 

		//retiremnt total
		var txtfldCPFRATotal = Number(NAVtabdets["CPF_RA_TOTAL"]);
        var txtfldCPFRATotalCal = numberWithCommas(txtfldCPFRATotal);
        $('#txtfldCPFRATotalId').html(txtfldCPFRATotalCal); 


		var txtfldCPFMATotalMedi = Number(NAVtabdets["CPF_MA_TOTAL"]);
        var txtfldCPFMATotalMediCal = numberWithCommas(txtfldCPFMATotalMedi);
        $('#txtfldCPFMATotalMediId').html(txtfldCPFMATotalMediCal); 

		var txtfldCPFRATotalMedi = Number(NAVtabdets["CPF_RA_TOTAL"]);
        var txtfldCPFRATotalMediCal = numberWithCommas(txtfldCPFRATotalMedi);
        $('#txtfldCPFRATotalMediId').html(txtfldCPFRATotalMediCal); 


		var txtfldCPFMATotalTotSSFAsset = (NAVtabdets["CPF_MA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldCPFMATotalTotSSFAssetCal = (txtfldCPFMATotalTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldCPFMATotalTotSSFAssetId').html(txtfldCPFMATotalTotSSFAssetCal);
		
		
		var txtfldCPFRATotalTotSSFAsset = (NAVtabdets["CPF_RA_TOTAL"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldCPFRATotalTotSSFAssetCal = (txtfldCPFRATotalTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldCPFRATotalTotSSFAssetId').html(txtfldCPFRATotalTotSSFAssetCal);

		//Other Assets
		
		var txtfldTotalOthersAssetTotSSFAsset = (NAVtabdets["TOTAL_OTHERS_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalOthersAssetTotSSFAssetCal = (txtfldTotalOthersAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalOthersAssetTotSSFAssetId').html(txtfldTotalOthersAssetTotSSFAssetCal);
	
		//Vehicles
		var txtfldTotalVehiAsset = Number(NAVtabdets["TOTAL_VEHI_ASSET"]);
        var txtfldTotalVehiAssetCal = numberWithCommas(txtfldTotalVehiAsset);
        $('#txtfldTotalVehiAssetId').html(txtfldTotalVehiAssetCal);

		var txtfldTotalVehiLiab = Number(NAVtabdets["TOTAL_VEHI_LIAB"]);
        var txtfldTotalVehiLiabCal = numberWithCommas(txtfldTotalVehiLiab);
        $('#txtfldTotalVehiLiabId').html(txtfldTotalVehiLiabCal);

		var txtfldVehicleNetWorth = Number(NAVtabdets["VEHICLE_NETWORTH"]);
        var txtfldVehicleNetWorthCal = numberWithCommas(txtfldVehicleNetWorth);
        $('#txtfldVehicleNetWorthId').html(txtfldVehicleNetWorthCal);

		var txtfldTotalVehiAssetTotSSFAsset = (NAVtabdets["TOTAL_VEHI_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalVehiAssetTotSSFAssetCal = (txtfldTotalVehiAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalVehiAssetTotSSFAssetId').html(txtfldTotalVehiAssetTotSSFAssetCal);

		//Personal Property (Residential)
		var txtfldSelfProResTotal = Number(NAVtabdets["SELF_PROP_RES_TOTAL"]);
        var txtfldSelfProResTotalCal = numberWithCommas(txtfldSelfProResTotal);
        $('#txtfldSelfProResTotalId').html(txtfldSelfProResTotalCal);
		 
		var txtfldSpousePropResTotal = Number(NAVtabdets["SPOUSE_PROP_RES_TOTAL"]);
        var txtfldSpousePropResTotalCal = numberWithCommas(txtfldSpousePropResTotal);
        $('#txtfldSpousePropResTotalId').html(txtfldSpousePropResTotalCal);
		 
		var txtfldJointPropResTotal = Number(NAVtabdets["JOINT_PROP_RES_TOTAL"]);
        var txtfldJointPropResTotalCal = numberWithCommas(txtfldJointPropResTotal);
        $('#txtfldJointPropResTotalId').html(txtfldJointPropResTotalCal);
		 
		var txtfldTotalResiAsset = Number(NAVtabdets["TOTAL_RESI_ASSET"]);
        var txtfldTotalResiAssetCal = numberWithCommas(txtfldTotalResiAsset);
        $('#txtfldTotalResiAssetId').html(txtfldTotalResiAssetCal);
		 
		var txtfldTotalResiLiab = Number(NAVtabdets["TOTAL_RESI_LIAB"]);
        var txtfldTotalResiLiabCal = numberWithCommas(txtfldTotalResiLiab);
        $('#txtfldTotalResiLiabId').html(txtfldTotalResiLiabCal);
		
		var txtfldResiPropNetWorth = Number(NAVtabdets["RESI_PROP_NETWORTH"]);
        var txtfldResiPropNetWorthCal = numberWithCommas(txtfldResiPropNetWorth);
        $('#txtfldResiPropNetWorthId').html(txtfldResiPropNetWorthCal);
		
		var txtfldTotalResiAssetTotSSFAsset = (NAVtabdets["TOTAL_RESI_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalResiAssetTotSSFAssetCal = (txtfldTotalResiAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalResiAssetTotSSFAssetId').html(txtfldTotalResiAssetTotSSFAssetCal);

		//Personal Items
		var txtfldOthasstSelfPers = Number(NAVtabdets["OTHASST_SELF_PERS"]);
        var txtfldOthasstSelfPersCal = numberWithCommas(txtfldOthasstSelfPers);
        $('#txtfldOthasstSelfPersId').html(txtfldOthasstSelfPersCal);

		var txtfldOthasstSpousePers = Number(NAVtabdets["OTHASST_SPOUSE_PERS"]);
        var txtfldOthasstSpousePersCal = numberWithCommas(txtfldOthasstSpousePers);
        $('#txtfldOthasstSpousePersId').html(txtfldOthasstSpousePersCal);

		var txtfldOthasstJointPers = Number(NAVtabdets["OTHASST_JOINT_PERS"]);
        var txtfldOthasstJointPersCal = numberWithCommas(txtfldOthasstJointPers);
        $('#txtfldOthasstJointPersId').html(txtfldOthasstJointPersCal);

		var txtfldTotalPersonalAssets = Number(NAVtabdets["TOTAL_PERSONAL_ASSETS"]);
        var txtfldTotalPersonalAssetsCal = numberWithCommas(txtfldTotalPersonalAssets);
        $('#txtfldTotalPersonalAssetsId').html(txtfldTotalPersonalAssetsCal);

		var txtfldTotalPersonalLiab = Number(NAVtabdets["TOTAL_PERSONAL_LIAB"]);
        var txtfldTotalPersonalLiabCal = numberWithCommas(txtfldTotalPersonalLiab);
        $('#txtfldTotalPersonalLiabId').html(txtfldTotalPersonalLiabCal);

		var txtfldPersonalItemNetWorth = Number(NAVtabdets["PERSONAL_ITEM_NETWORTH"]);
        var txtfldPersonalItemNetWorthCal = numberWithCommas(txtfldPersonalItemNetWorth);
        $('#txtfldPersonalItemNetWorthId').html(txtfldPersonalItemNetWorthCal);

		var txtfldTotalPersonalAssetsTotSSFAsset = (NAVtabdets["TOTAL_PERSONAL_ASSETS"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalPersonalAssetsTotSSFAssetCal = (txtfldTotalPersonalAssetsTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalPersonalAssetsTotSSFAssetId').html(txtfldTotalPersonalAssetsTotSSFAssetCal);		
			 
		//Club Ownership
		var txtfldOthasstSelfClub = Number(NAVtabdets["OTHASST_SELF_CLUB"]);
        var txtfldOthasstSelfClubCal = numberWithCommas(txtfldOthasstSelfClub);
        $('#txtfldOthasstSelfClubId').html(txtfldOthasstSelfClubCal);
		
		var txtfldOthasstSpouseClub = Number(NAVtabdets["OTHASST_SPOUSE_CLUB"]);
        var txtfldOthasstSpouseClubCal = numberWithCommas(txtfldOthasstSpouseClub);
        $('#txtfldOthasstSpouseClubId').html(txtfldOthasstSpouseClubCal);
		
		var txtfldOthasstJointClub = Number(NAVtabdets["OTHASST_JOINT_CLUB"]);
        var txtfldOthasstJointClubCal = numberWithCommas(txtfldOthasstJointClub);
        $('#txtfldOthasstJointClubId').html(txtfldOthasstJointClubCal);
		
		var txtfldTotalClubAsset = Number(NAVtabdets["TOTAL_CLUB_ASSET"]);
        var txtfldTotalClubAssetCal = numberWithCommas(txtfldTotalClubAsset);
        $('#txtfldTotalClubAssetId').html(txtfldTotalClubAssetCal);
		
		var txtfldTotalClubLiab = Number(NAVtabdets["TOTAL_CLUB_LIAB"]);
        var txtfldTotalClubLiabCal = numberWithCommas(txtfldTotalClubLiab);
        $('#txtfldTotalClubLiabId').html(txtfldTotalClubLiabCal);
		
		var txtfldClubNetWorth = Number(NAVtabdets["CLUB_NETWORTH"]);
        var txtfldClubNetWorthCal = numberWithCommas(txtfldClubNetWorth);
        $('#txtfldClubNetWorthId').html(txtfldClubNetWorthCal);
		
		var txtfldTotalClubAssetTotSSFAsset = (NAVtabdets["TOTAL_CLUB_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalClubAssetTotSSFAssetCal = (txtfldTotalClubAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalClubAssetTotSSFAssetId').html(txtfldTotalClubAssetTotSSFAssetCal);
		 
	    //Business Ownership
		var txtfldOthasstSelfBusi = Number(NAVtabdets["OTHASST_SELF_BUSI"]);
        var txtfldOthasstSelfBusiCal = numberWithCommas(txtfldOthasstSelfBusi);
        $('#txtfldOthasstSelfBusiId').html(txtfldOthasstSelfBusiCal);

		var txtfldOthasstSpouseBusi = Number(NAVtabdets["OTHASST_SPOUSE_BUSI"]);
        var txtfldOthasstSpouseBusiCal = numberWithCommas(txtfldOthasstSpouseBusi);
        $('#txtfldOthasstSpouseBusiId').html(txtfldOthasstSpouseBusiCal);

		var txtfldOthasstJointBusi = Number(NAVtabdets["OTHASST_JOINT_BUSI"]);
        var txtfldOthasstJointBusiCal = numberWithCommas(txtfldOthasstJointBusi);
        $('#txtfldOthasstJointBusiId').html(txtfldOthasstJointBusiCal);

		var txtfldTotalBusiAsset = Number(NAVtabdets["TOTAL_BUSI_ASSET"]);
        var txtfldTotalBusiAssetCal = numberWithCommas(txtfldTotalBusiAsset);
        $('#txtfldTotalBusiAssetId').html(txtfldTotalBusiAssetCal);
		
		var txtfldTotalBusiLiab = Number(NAVtabdets["TOTAL_BUSI_LIAB"]);
        var txtfldTotalBusiLiabCal = numberWithCommas(txtfldTotalBusiLiab);
        $('#txtfldTotalBusiLiabId').html(txtfldTotalBusiLiabCal);
		
		var txtfldBusiNetWorth = Number(NAVtabdets["BUSI_NETWORTH"]);
        var txtfldBusiNetWorthCal = numberWithCommas(txtfldBusiNetWorth);
        $('#txtfldBusiNetWorthId').html(txtfldBusiNetWorthCal);
		
		var txtfldTotalBusiAssetTotSSFAsset = (NAVtabdets["TOTAL_BUSI_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalBusiAssetTotSSFAssetCal = (txtfldTotalBusiAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalBusiAssetTotSSFAssetId').html(txtfldTotalBusiAssetTotSSFAssetCal);
		
		//Others Assets 
		var txtfldOthasstSelfOth = Number(NAVtabdets["OTHASST_SELF_OTH"]);
        var txtfldOthasstSelfOthCal = numberWithCommas(txtfldOthasstSelfOth);
        $('#txtfldOthasstSelfOthId').html(txtfldOthasstSelfOthCal);
		
		var txtfldOthasstSpouseOth = Number(NAVtabdets["OTHASST_SPOUSE_OTH"]);
        var txtfldOthasstSpouseOthCal = numberWithCommas(txtfldOthasstSpouseOth);
        $('#txtfldOthasstSpouseOthId').html(txtfldOthasstSpouseOthCal);
		
		var txtfldOthasstJointOth = Number(NAVtabdets["OTHASST_JOINT_OTH"]);
        var txtfldOthasstJointOthCal = numberWithCommas(txtfldOthasstJointOth);
        $('#txtfldOthasstJointOthId').html(txtfldOthasstJointOthCal);
		
		var txtfldTotalOtherAsset = Number(NAVtabdets["TOTAL_OTHER_ASSET"]);
        var txtfldTotalOtherAssetCal = numberWithCommas(txtfldTotalOtherAsset);
        $('#txtfldTotalOtherAssetId').html(txtfldTotalOtherAssetCal);
		
		var txtfldTotalOtherassLiab = Number(NAVtabdets["TOTAL_OTHERASS_LIAB"]);
        var txtfldTotalOtherassLiabCal = numberWithCommas(txtfldTotalOtherassLiab);
        $('#txtfldTotalOtherassLiabId').html(txtfldTotalOtherassLiabCal);
		
		var txtfldOtherassNetWorth = Number(NAVtabdets["OTHERASSET_NWTWORTH"]);
        var txtfldOtherassNetWorthCal = numberWithCommas(txtfldOtherassNetWorth);
        $('#txtfldOtherassNetWorthId').html(txtfldOtherassNetWorthCal);
		
		var txtfldTotalOtherAssetTotSSFAsset = (NAVtabdets["TOTAL_OTHER_ASSET"]/NAVtabdets["TOTAL_SSF_ASSET"]) * 100;
        var txtfldTotalOtherAssetTotSSFAssetCal = (txtfldTotalOtherAssetTotSSFAsset).toFixed(2) +" % ";
        $('#txtfldTotalOtherAssetTotSSFAssetId').html(txtfldTotalOtherAssetTotSSFAssetCal);
		
		 //Total Assets
		var txtfldTotalSelfAsset = Number(NAVtabdets["TOTAL_SELF_ASSET"]);
        var txtfldTotalSelfAssetCal = numberWithCommas(txtfldTotalSelfAsset);
        $('#txtfldTotalSelfAssetId').html(txtfldTotalSelfAssetCal);
		
		var txtfldTotalSpouseAsset = Number(NAVtabdets["TOTAL_SPOUSE_ASSET"]);
        var txtfldTotalSpouseAssetCal = numberWithCommas(txtfldTotalSpouseAsset);
        $('#txtfldTotalSpouseAssetId').html(txtfldTotalSpouseAssetCal);
		
		var txtfldTotalFamilyAsset = Number(NAVtabdets["TOTAL_FAMILY_ASSET"]);
        var txtfldTotalFamilyAssetCal = numberWithCommas(txtfldTotalFamilyAsset);
        $('#txtfldTotalFamilyAssetId').html(txtfldTotalFamilyAssetCal);
		
		var txtfldTotalSsfAsset = Number(NAVtabdets["TOTAL_SSF_ASSET"]);
        var txtfldTotalSsfAssetCal = numberWithCommas(txtfldTotalSsfAsset);
        $('#txtfldTotalSsfAssetId').html(txtfldTotalSsfAssetCal);
		
		var txtfldTotalLiabAsset = Number(NAVtabdets["TOTAL_LIAB_ASSET"]);
        var txtfldTotalLiabAssetCal = numberWithCommas(txtfldTotalLiabAsset);
        $('#txtfldTotalLiabAssetId').html(txtfldTotalLiabAssetCal);
		
		var txtfldTotalNWAsset = Number(NAVtabdets["TOTAL_NW_ASSET"]);
        var txtfldTotalNWAssetCal = numberWithCommas(txtfldTotalNWAsset);
        $('#txtfldTotalNWAssetId').html(txtfldTotalNWAssetCal);
		
		var txtfldTotalAssetAsset = (NAVtabdets["TOTAL_ASSET_PRCNT"]) * 100;
        var txtfldTotalAssetAssetCal = (txtfldTotalAssetAsset).toFixed(2) +" % ";
        $('#txtfldTotalAssetAssetId').html(txtfldTotalAssetAssetCal);

		//Liabilities
		//Short Term Liabilities
		
		var txtfldTotalOverDraftLiabTotSSFLiabShortloadLiab = ((NAVtabdets["TOTAL_OVERDRAFT_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["TOTAL_SHORTLOAD_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["TOTAL_TAX_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["TOTAL_OTHER_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100);
		var txtfldTotalOverDraftLiabTotSSFLiabShortloadLiabCal = (txtfldTotalOverDraftLiabTotSSFLiabShortloadLiab).toFixed(2) +" % ";
        $('#txtfldTotalOverDraftLiabTotSSFLiabShortloadLiabId').html(txtfldTotalOverDraftLiabTotSSFLiabShortloadLiabCal);
		
       //Overdraft
        var txtfldLiabSelfOverDraft = Number(NAVtabdets["LIAB_SELF_OVERDRAFT"]);
        var txtfldLiabSelfOverDraftCal = numberWithCommas(txtfldLiabSelfOverDraft);
        $('#txtfldLiabSelfOverDraftId').html(txtfldLiabSelfOverDraftCal);
		
		var txtfldLiabpsOverDraft = Number(NAVtabdets["LIAB_SPS_OVERDRAFT"]);
        var txtfldLiabpsOverDraftCal = numberWithCommas(txtfldLiabpsOverDraft);
        $('#txtfldLiabpsOverDraftId').html(txtfldLiabpsOverDraftCal);
		
		var txtfldTotalOverDraftLiab = Number(NAVtabdets["TOTAL_OVERDRAFT_LIAB"]);
        var txtfldTotalOverDraftLiabCal = numberWithCommas(txtfldTotalOverDraftLiab);
        $('#txtfldTotalOverDraftLiabId').html(txtfldTotalOverDraftLiabCal);
		
		var txtfldTotalOverDraftLiabSSFLiab = (NAVtabdets["TOTAL_OVERDRAFT_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalOverDraftLiabSSFLiabCal = (txtfldTotalOverDraftLiabSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalOverDraftLiabSSFLiabId').html(txtfldTotalOverDraftLiabSSFLiabCal);

		//Short term loans
		var txtfldLiabSelfShortLoan = Number(NAVtabdets["LIAB_SELF_SHORTLOAN"]);
        var txtfldLiabSelfShortLoanCal = numberWithCommas(txtfldLiabSelfShortLoan);
        $('#txtfldLiabSelfShortLoanId').html(txtfldLiabSelfShortLoanCal);
		
		var txtfldLiabSpsShortLoan = Number(NAVtabdets["LIAB_SPS_SHORTLOAN"]);
        var txtfldLiabSpsShortLoanCal = numberWithCommas(txtfldLiabSpsShortLoan);
        $('#txtfldLiabSpsShortLoanId').html(txtfldLiabSpsShortLoanCal);
		
		var txtfldTotalShortLoadLiab = Number(NAVtabdets["TOTAL_SHORTLOAD_LIAB"]);
        var txtfldTotalShortLoadLiabCal = numberWithCommas(txtfldTotalShortLoadLiab);
        $('#txtfldTotalShortLoadLiabId').html(txtfldTotalShortLoadLiabCal);
		
		var txtfldTotalShortLoadLiabSSFLiab = (NAVtabdets["TOTAL_SHORTLOAD_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalShortLoadLiabSSFLiabCal = (txtfldTotalShortLoadLiabSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalShortLoadLiabSSFLiabId').html(txtfldTotalShortLoadLiabSSFLiabCal);

		//Taxes
		
		var txtfldLiabSelfTaxes = Number(NAVtabdets["LIAB_SELF_TAXES"]);
        var txtfldLiabSelfTaxesCal = numberWithCommas(txtfldLiabSelfTaxes);
        $('#txtfldLiabSelfTaxesId').html(txtfldLiabSelfTaxesCal);
		
		var txtfldLiabSpsTaxes = Number(NAVtabdets["LIAB_SPS_TAXES"]);
        var txtfldLiabSpsTaxesCal = numberWithCommas(txtfldLiabSpsTaxes);
        $('#txtfldLiabSpsTaxesId').html(txtfldLiabSpsTaxesCal);
		
		var txtfldTotalTaxLiab = Number(NAVtabdets["TOTAL_TAX_LIAB"]);
        var txtfldTotalTaxLiabCal = numberWithCommas(txtfldTotalTaxLiab);
        $('#txtfldTotalTaxLiabId').html(txtfldTotalTaxLiabCal);

		var txtfldTotalTaxLiabSSFLiab = (NAVtabdets["TOTAL_TAX_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalTaxLiabSSFLiabCal = (txtfldTotalTaxLiabSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalTaxLiabSSFLiabId').html(txtfldTotalTaxLiabSSFLiabCal);
 
		//Others
		var txtfldLiabSelfOthers = Number(NAVtabdets["LIAB_SELF_OTHERS"]);
        var txtfldLiabSelfOthersCal = numberWithCommas(txtfldLiabSelfOthers);
        $('#txtfldLiabSelfOthersId').html(txtfldLiabSelfOthersCal);
 		
		var txtfldLiabSpsOthers = Number(NAVtabdets["LIAB_SPS_OTHERS"]);
        var txtfldLiabSpsOthersCal = numberWithCommas(txtfldLiabSpsOthers);
        $('#txtfldLiabSpsOthersId').html(txtfldLiabSpsOthersCal);

		var txtfldTotalOtherLiab = Number(NAVtabdets["TOTAL_OTHER_LIAB"]);
        var txtfldTotalOtherLiabCal = numberWithCommas(txtfldTotalOtherLiab);
        $('#txtfldTotalOtherLiabId').html(txtfldTotalOtherLiabCal);

		var txtfldTotalOtherLiabSSFLiab = (NAVtabdets["TOTAL_OTHER_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalOtherLiabSSFLiabCal = (txtfldTotalOtherLiabSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalOtherLiabSSFLiabId').html(txtfldTotalOtherLiabSSFLiabCal);


		//Other Liabilities

		var txtfldOtherLiabilitiesTotal = ((NAVtabdets["INS_TOTAL_ASSET"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["LOANS_ON_OTHASSET"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["TOTAL_VEHI_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100);
		var txtfldOtherLiabilitiesTotalCal = (txtfldOtherLiabilitiesTotal).toFixed(2) +" % ";
        $('#txtfldOtherLiabilitiesTotalId').html(txtfldOtherLiabilitiesTotalCal);

		//Life Insurance Loans
		var txtfldInsOsvalSelf = Number(NAVtabdets["INS_OSVAL_SELF"]);
        var txtfldInsOsvalSelfCal = numberWithCommas(txtfldInsOsvalSelf);
        $('#txtfldInsOsvalSelfId').html(txtfldInsOsvalSelfCal);
		
		var txtfldInsOsvalSpouse = Number(NAVtabdets["INS_OSVAL_SPOUSE"]);
        var txtfldInsOsvalSpouseCal = numberWithCommas(txtfldInsOsvalSpouse);
        $('#txtfldInsOsvalSpouseId').html(txtfldInsOsvalSpouseCal);
		
		var txtfldInsTotalAssett = Number(NAVtabdets["INS_TOTAL_ASSET"]);
        var txtfldInsTotalAssettCal = numberWithCommas(txtfldInsTotalAssett);
        $('#txtfldInsTotalAssettId').html(txtfldInsTotalAssettCal);

		var txtfldInsTotalAssettSSFLiab = (NAVtabdets["INS_TOTAL_ASSET"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldInsTotalAssettSSFLiabCal = (txtfldInsTotalAssettSSFLiab).toFixed(2) +" % ";
        $('#txtfldInsTotalAssettSSFLiabId').html(txtfldInsTotalAssettSSFLiabCal);

		//Loans on Other Asset
 		var txtfldLoansOnOthasset = Number(NAVtabdets["LOANS_ON_OTHASSET"]);
        var txtfldLoansOnOthassetCal = numberWithCommas(txtfldLoansOnOthasset);
        $('#txtfldLoansOnOthassetId').html(txtfldLoansOnOthassetCal);
         $('#txtfldLoansOnOthassetSId').html(txtfldLoansOnOthassetCal);

		var txtfldLoansOnOthassetper = (NAVtabdets["LOANS_ON_OTHASSET"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldLoansOnOthassetperCal = (txtfldLoansOnOthassetper).toFixed(2) +" % ";
        $('#txtfldLoansOnOthassetperId').html(txtfldLoansOnOthassetperCal);
        

		//Vehicle Financing
		var txtfldTotalVehiLiabFinanc = Number(NAVtabdets["TOTAL_VEHI_LIAB"]);
        var txtfldTotalVehiLiabFinancCal = numberWithCommas(txtfldTotalVehiLiabFinanc);
        $('#txtfldTotalVehiLiabFinancId').html(txtfldTotalVehiLiabFinancCal);
        $('#txtfldTotalVehiLiabFinancSId').html(txtfldTotalVehiLiabFinancCal);
        
		var txtfldTotalVehiLiabFinancSSFLiab = (NAVtabdets["TOTAL_VEHI_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalVehiLiabFinancSSFLiabCal = (txtfldTotalVehiLiabFinancSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalVehiLiabFinancSSFLiabId').html(txtfldTotalVehiLiabFinancSSFLiabCal);


       //Long Term Liabilities
		var txtfldTotalPersonalAssetsSSFLiabPropLiab = ((NAVtabdets["TOTAL_PERSONAL_ASSETS"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100) + ((NAVtabdets["INV_PROP_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100);
        var txtfldTotalPersonalAssetsSSFLiabPropLiabCal = (txtfldTotalPersonalAssetsSSFLiabPropLiab).toFixed(2) +" % ";
        $('#txtfldTotalPersonalAssetsSSFLiabPropLiabId').html(txtfldTotalPersonalAssetsSSFLiabPropLiabCal);

		//Mortgage on Residential Property
		var txtfldResiProLiabSelf = Number(NAVtabdets["RESI_PROP_LIAB_SELF"]);
        var txtfldResiProLiabSelfCal = numberWithCommas(txtfldResiProLiabSelf);
        $('#txtfldResiProLiabSelfId').html(txtfldResiProLiabSelfCal);

		var txtfldResiProLiabSpouse = Number(NAVtabdets["RESI_PROP_LIAB_SPOUSE"]);
        var txtfldResiProLiabSpouseCal = numberWithCommas(txtfldResiProLiabSpouse);
        $('#txtfldResiProLiabSpouseId').html(txtfldResiProLiabSpouseCal);

		var txtfldResiProLiabFamily = Number(NAVtabdets["RESI_PROP_LIAB_FAMILY"]);
        var txtfldResiProLiabFamilyCal = numberWithCommas(txtfldResiProLiabFamily);
        $('#txtfldResiProLiabFamilyId').html(txtfldResiProLiabFamilyCal);

		var txtfldTotalPersonalAssetsResi = Number(NAVtabdets["TOTAL_PERSONAL_ASSETS"]);
        var txtfldTotalPersonalAssetsResiCal = numberWithCommas(txtfldTotalPersonalAssetsResi);
        $('#txtfldTotalPersonalAssetsResiId').html(txtfldTotalPersonalAssetsResiCal);

		var txtfldTotalPersonalAssetsResiSSFLiab = (NAVtabdets["TOTAL_PERSONAL_ASSETS"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTotalPersonalAssetsResiSSFLiabCal = (txtfldTotalPersonalAssetsResiSSFLiab).toFixed(2) +" % ";
        $('#txtfldTotalPersonalAssetsResiSSFLiabId').html(txtfldTotalPersonalAssetsResiSSFLiabCal);
		
		//Mortgage on Residential Property
		var txtfldInvPropLiabSelf = Number(NAVtabdets["INV_PROP_LIAB_SELF"]);
        var txtfldInvPropLiabSelfCal = numberWithCommas(txtfldInvPropLiabSelf);
        $('#txtfldInvPropLiabSelfId').html(txtfldInvPropLiabSelfCal);

		var txtfldInvPropLiabSpouse = Number(NAVtabdets["INV_PROP_LIAB_SPOUSE"]);
        var txtfldInvPropLiabSpouseCal = numberWithCommas(txtfldInvPropLiabSpouse);
        $('#txtfldInvPropLiabSpouseId').html(txtfldInvPropLiabSpouseCal);
		
		var txtfldInvPropLiabFamily = Number(NAVtabdets["INV_PROP_LIAB_FAMILY"]);
        var txtfldInvPropLiabFamilyCal = numberWithCommas(txtfldInvPropLiabFamily);
        $('#txtfldInvPropLiabFamilyId').html(txtfldInvPropLiabFamilyCal);

		var txtfldInvPropLiabResi = Number(NAVtabdets["INV_PROP_LIAB"]);
        var txtfldInvPropLiabResiCal = numberWithCommas(txtfldInvPropLiabResi);
        $('#txtfldInvPropLiabResiId').html(txtfldInvPropLiabResiCal);
		
		
		var txtfldInvPropLiabResiSSFLiab = (NAVtabdets["INV_PROP_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldInvPropLiabResiSSFLiabCal = (txtfldInvPropLiabResiSSFLiab).toFixed(2) +" % ";
        $('#txtfldInvPropLiabResiSSFLiabId').html(txtfldInvPropLiabResiSSFLiabCal);

		//Total Liabilities
		var txtfldTotSelfLiab = Number(NAVtabdets["TOTAL_SELF_LIAB"]);
        var txtfldTotSelfLiabCal = numberWithCommas(txtfldTotSelfLiab);
        $('#txtfldTotSelfLiabId').html(txtfldTotSelfLiabCal);

		var txtfldTotSpouseLiab = Number(NAVtabdets["TOTAL_SPOUSE_LIAB"]);
        var txtfldTotSpouseLiabCal = numberWithCommas(txtfldTotSpouseLiab);
        $('#txtfldTotSpouseLiabId').html(txtfldTotSpouseLiabCal);

		var txtfldTotFamilyLiab = Number(NAVtabdets["TOTAL_FAMILY_LIAB"]);
        var txtfldTotFamilyLiabCal = numberWithCommas(txtfldTotFamilyLiab);
        $('#txtfldTotFamilyLiabId').html(txtfldTotFamilyLiabCal);

		var txtfldTTotalSSFLiab = Number(NAVtabdets["TTOTAL_SSF_LIAB"]);
        var txtfldTTotalSSFLiabCal = numberWithCommas(txtfldTTotalSSFLiab);
        $('#txtfldTTotalSSFLiabId').html(txtfldTTotalSSFLiabCal);

		var txtfldTTotalSSFLiabSSFLiab = (NAVtabdets["TTOTAL_SSF_LIAB"]/NAVtabdets["TTOTAL_SSF_LIAB"]) * 100;
        var txtfldTTotalSSFLiabSSFLiabCal = (txtfldTTotalSSFLiabSSFLiab).toFixed(2) +" % ";
        $('#txtfldTTotalSSFLiabSSFLiabId').html(txtfldTTotalSSFLiabSSFLiabCal);

				}	 
			});
			hideLoader();
			
			
			///////////////////////////////////////
			
			
	showLoader(); 
	//var fnaId = strFNAId;
	 
	var parameterchart = "DBCALLFOR=GET_FIPA_SP_NETWORTH_CHART_DETAILS&strFnaId="+ fnaId ;
	
	ajaxCall(parameterchart,servletName,function(ChartData){
	
			var LIFChartretval = ChartData;
      
		var GRSvalAssettblId = document.getElementById("grossValofAssetTablereport");
		var GRSvalAssettbody = GRSvalAssettblId.tBodies[0];
		
		 var GrossAssetArr=[];
         var GrossAssetPercentArr=[];
         
		for ( var LIFchartcont in LIFChartretval) {
			
			if (LIFChartretval.hasOwnProperty(LIFchartcont)) {
  
				var LIFcontvalue = LIFChartretval[LIFchartcont];
				
				if("ASSET" == LIFcontvalue["GROUPTITLE"] ){
					//GROUPTITLE
					//LIABILITY
				var rc = Number(LIFchartcont);
				
				var grosscrow = GRSvalAssettbody.insertRow(LIFchartcont);

				//var cell0 = grosscrow.insertCell(0);
				//cell0.innerHTML =  (rc + 1);
				//cell0.style.textAlign = "center";
				
				var cell0 = grosscrow.insertCell(0);		
				cell0.innerHTML= (isEmpty(LIFcontvalue["Title"])?" ":(LIFcontvalue["Title"])); 					
				cell0.style.textAlign = "center";
				cell0.style.borderStyle = "solid";
				
				
				var cell1 = grosscrow.insertCell(1);		
				cell1.innerHTML= (isEmpty(LIFcontvalue["GROSS"])?" ":(LIFcontvalue["GROSS"])); 					
				cell1.style.textAlign = "center";
				cell1.style.borderStyle = "solid";
				GrossAssetArr.push(isEmpty(LIFcontvalue["GROSS"])?"0":(LIFcontvalue["GROSS"]));
				
				var cell2 = grosscrow.insertCell(2);		
				cell2.innerHTML =(isEmpty(LIFcontvalue["NET"])?" ":(LIFcontvalue["NET"]));     						
				cell2.style.textAlign = "center";
				cell2.style.borderStyle = "solid";
				
				var cell3 = grosscrow.insertCell(3);								
				var gros=(isEmpty(LIFcontvalue["PRCNT"])?" ":(LIFcontvalue["PRCNT"])); 
				//cell3.innerHTML =(isEmpty(LIFcontvalue["PRCNT"])?" ":(LIFcontvalue["PRCNT"])); 
				//cell3.innerHTML =parseFloat(gros).toFixed(2)+ "%"
				//gros.toFixed(3);
				//var gross =parseFloat(gros).toFixed(2);
				//alert(gross);
				//gros = parseFloat(gros).toFixed(4);
				cell3.innerHTML =gros*100+ "%"
				cell3.style.textAlign = "center";
				cell3.style.borderStyle = "solid";
				GrossAssetPercentArr.push(isEmpty(LIFcontvalue["PRCNT"])?"0":(LIFcontvalue["PRCNT"]));
				
				}
				
			}
			
			}
		
		
		
		/*	Begin Chart*/
		
		 var GrossValAssetJSONArray=[];
		 var pieChartGrossValAsstDiv = document.getElementById("pieChartGrossValAsst");
		 pieChartGrossValAsstDiv.innerHTML="";
		 pieChartGrossValAsstDiv.innerHTML="<canvas id='canvaspieChartGrossValAsst' class=''></canvas>";
		   
		 var cashEquGrossAmt,invAsstGrossAmt,cpfGrossAmt,persAsstGrossAmt;
		 var cashEquGrossPercnt,invAsstGrossPercnt,cpfGrossPercnt,persAsstGrossPercnt;
		 
		 for(var i = 0; i <= 3; i++) {
			 cashEquGrossAmt=(isEmpty(GrossAssetArr[0]) ? "0" : GrossAssetArr[0]);
			 cashEquGrossPercnt=(isEmpty(GrossAssetPercentArr[0]) ? "0" : GrossAssetPercentArr[0]);
			 invAsstGrossAmt=(isEmpty(GrossAssetArr[1]) ? "0" : GrossAssetArr[1]);
			 invAsstGrossPercnt=(isEmpty(GrossAssetPercentArr[1]) ? "0" : GrossAssetPercentArr[1]);
			 cpfGrossAmt=(isEmpty(GrossAssetArr[2]) ? "0" : GrossAssetArr[2]);
			 cpfGrossPercnt=(isEmpty(GrossAssetPercentArr[2]) ? "0" : GrossAssetPercentArr[2]);
			 persAsstGrossAmt=(isEmpty(GrossAssetArr[3]) ? "0" : GrossAssetArr[3]);
			 persAsstGrossPercnt=(isEmpty(GrossAssetPercentArr[3]) ? "0" : GrossAssetPercentArr[3]);
			}
		 
		 if(cashEquGrossAmt == 0 && invAsstGrossAmt == 0 && cpfGrossAmt == 0 && persAsstGrossAmt == 0){
   		  $("#pieChartGrossValAsstNoDataFound").css('display','block');
   		  $("#pieChartGrossValAsst").css('display','none');
		   	}
		   	else{
		   		$("#pieChartGrossValAsstNoDataFound").css('display','none');
		   	    $("#pieChartGrossValAsst").css('display','block');
		   	}
		 
		   var NetAmountCashEquJSONObject 	= {"key":"GOSS AMOUNT CASH EQU","value":cashEquGrossAmt};
		   var NetAmountInvAsstJSONObject 	= {"key":"GOSS AMOUNT INVESTMENT ASSET","value":invAsstGrossAmt};
		   var NetAmountCpfJSONObject   	= {"key":"GOSS AMOUNT CPF","value":cpfGrossAmt};
		   var NetAmountPersonalJSONObject  = {"key":"GOSS AMOUNT PERSONAL ASSET","value":persAsstGrossAmt};
		   
	    	
		   GrossValAssetJSONArray.push(NetAmountCashEquJSONObject);
		   GrossValAssetJSONArray.push(NetAmountInvAsstJSONObject);
		   GrossValAssetJSONArray.push(NetAmountCpfJSONObject);
		   GrossValAssetJSONArray.push(NetAmountPersonalJSONObject);
		   
		   var labels = GrossValAssetJSONArray.map(function (e) {
		    return  e.key;
		 });

		 var datavalue = GrossValAssetJSONArray.map(function (e) {
		    return  e.value;
		 });

		 var canvaspieChart = document.getElementById("canvaspieChartGrossValAsst");
		 var randomColorGenerator = () => {
		    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
		 };
		   var len = datavalue.length;

		 bgColors = function (len) {
		    var bgArray = new Array(len);
		    for (var j = 0; j < len; j++) {
		        bgArray[j] = randomColorGenerator();
		    }
		    return bgArray;
		 }

		 chartTypeSelf = "Pie";
		 //Pie chart
		 if (chartTypeSelf == "Pie") { 
		 	configSelf = {
		            type: 'pie',
		            data: {
		                datasets: [{
		                    
		                    data: datavalue,
		                    backgroundColor: bgColors(len),
		                    borderWidth: 0.5,
		                    label: 'SRS (Investment Summary) ' 
		                }],
		                labels: labels 
		            },
		             
		            options: {
		                responsive: true,
		                legend: {
		                    position: 'left',
		                },
		                tooltips: {
		                    callbacks: {
		                        label: function (item, data) {
		                        	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
		                        }
		                    }
		                },
		                plugins: {
		                    labels: {
		 	              render: 'percentage',
		 	              fontColor: ['white','white'],
		 	              precision: 2
		 	            } 
		            }
		            },
		        };
		 }

		   
		 var ctxSelf = document.getElementById('canvaspieChartGrossValAsst').getContext('2d');
		 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
		 }});

		 selfmychart.destroy();
		 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
		 }});

		 window.resetZoom  = function () {
		 	selfmychart.resetZoom();
		 };

		 // let bgColor;
		 if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
		 	bgColor = bgColors(datavalue.length);
		 }
		 configSelf.data.datasets[0].data = datavalue;
		 if (bgColor != undefined) {
		 	configSelf.data.datasets[0].backgroundColor = bgColor;
		 }

		 selfmychart.update();
		 selfmychart.resetZoom();
		   
		  /* End of Chart*/
			
			//////
			
			var categoriesofLiabilitiestblId = document.getElementById("categoriesofLiabilitiesTablereport");
		        var categoriesofLiabilitiesttbody = categoriesofLiabilitiestblId.tBodies[0]; 
			
		        var GrossAmountArr=[];
	            var GrossPercentArr=[];
	            
			for ( var LIFchartLiabcont in LIFChartretval) {
			
			if (LIFChartretval.hasOwnProperty(LIFchartLiabcont)) {
  
				var LIFLiabcontvalue = LIFChartretval[LIFchartLiabcont];
				
				if("LIABILITY" == LIFLiabcontvalue["GROUPTITLE"] ){
					
				//var rc = Number(LIFchartLiabcont);
					var rc = 0;
				var Liabilitiescrow = categoriesofLiabilitiesttbody.insertRow(rc);
				
				var cell0 = Liabilitiescrow.insertCell(0);		
				cell0.innerHTML= (isEmpty(LIFLiabcontvalue["Title"])?"":(LIFLiabcontvalue["Title"])); 					
				cell0.style.textAlign = "center";
				cell0.style.borderStyle = "solid";
				
				var cell1 = Liabilitiescrow.insertCell(1);		
				cell1.innerHTML= (isEmpty(LIFLiabcontvalue["GROSS"])?" ":(LIFLiabcontvalue["GROSS"])); 					
				cell1.style.textAlign = "center";
				cell1.style.borderStyle = "solid";
				GrossAmountArr.push(isEmpty(LIFLiabcontvalue["GROSS"])?"0":(LIFLiabcontvalue["GROSS"]));
				
				
				var cell2 = Liabilitiescrow.insertCell(2);								
				//cell2.innerHTML =(isEmpty(LIFLiabcontvalue["PRCNT"])?" ":(LIFLiabcontvalue["PRCNT"])); 
				var liab =(isEmpty(LIFLiabcontvalue["PRCNT"])?" ":(LIFLiabcontvalue["PRCNT"])); 
				cell2.innerHTML =liab*100+ "%"
				cell2.style.textAlign = "center";
				cell2.style.borderStyle = "solid";
				 rc++;
				 GrossPercentArr.push(isEmpty(LIFLiabcontvalue["PRCNT"])?"0":(LIFLiabcontvalue["PRCNT"]));
				}
				
			}
			
			}
			
			
			/*	Begin Chart*/
				
				 var CatgOfLiabilityJSONArray=[];
				 var pieChartCatgLiabDiv = document.getElementById("pieChartCatgLiab");
				 pieChartCatgLiabDiv.innerHTML="";
				 pieChartCatgLiabDiv.innerHTML="<canvas id='canvaspieChartCatgLiab' class=''></canvas>";
				   
				 var shortTermLiabGrssAmt,otherLiabGrssAmt,longTermLiabGrssAmt;
				 var shortTermLiabGrssPercnt,otherLiabGrssPercnt,longTermLiabGrssPercnt;
				 
				 for(var i = 0; i <= 3; i++) {
					 shortTermLiabGrssAmt=(isEmpty(GrossAmountArr[0]) ? "0" : GrossAmountArr[0]);
					 shortTermLiabGrssPercnt=(isEmpty(GrossPercentArr[0]) ? "0" : GrossPercentArr[0]);
					 otherLiabGrssAmt=(isEmpty(GrossAmountArr[1]) ? "0" : GrossAmountArr[1]);
					 otherLiabGrssPercnt=(isEmpty(GrossPercentArr[1]) ? "0" : GrossPercentArr[1]);
					 longTermLiabGrssAmt=(isEmpty(GrossAmountArr[2]) ? "0" : GrossAmountArr[2]);
					 longTermLiabGrssPercnt=(isEmpty(GrossPercentArr[2]) ? "0" : GrossPercentArr[2]);
					 
					}
				 
				 if(shortTermLiabGrssAmt == 0 && otherLiabGrssAmt == 0 && longTermLiabGrssAmt == 0 ){
			   		  $("#pieChartCatgLiabNoDataFound").css('display','block');
			   		  $("#pieChartCatgLiab").css('display','none');
					   	}
					   	else{
					   		$("#pieChartCatgLiabNoDataFound").css('display','none');
					   	    $("#pieChartCatgLiab").css('display','block');
					   	}
				   var GrossAmountshortTermLiabJSONObject 	= {"key":"GROSS AMOUNT SHORT TERM LIABILITY","value":shortTermLiabGrssAmt};
				   var GrossAmountotherLiabJSONObject 		= {"key":"GROSS AMOUNT OTHER TERM LIABILITY","value":otherLiabGrssAmt};
				   var GrossAmountlongTermLiabJSONObject   	= {"key":"GROSS AMOUNT LONG TERM LIABILITY","value":longTermLiabGrssAmt};
				 
				   
				   CatgOfLiabilityJSONArray.push(GrossAmountshortTermLiabJSONObject);
				   CatgOfLiabilityJSONArray.push(GrossAmountotherLiabJSONObject);
				   CatgOfLiabilityJSONArray.push(GrossAmountlongTermLiabJSONObject);
				
				   
				   var labels = CatgOfLiabilityJSONArray.map(function (e) {
				    return  e.key;
				 });

				 var datavalue = CatgOfLiabilityJSONArray.map(function (e) {
				    return  e.value;
				 });

				 var canvaspieChart = document.getElementById("canvaspieChartCatgLiab");
				 var randomColorGenerator = () => {
				    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
				 };
				   var len = datavalue.length;

				 bgColors = function (len) {
				    var bgArray = new Array(len);
				    for (var j = 0; j < len; j++) {
				        bgArray[j] = randomColorGenerator();
				    }
				    return bgArray;
				 }

				 chartTypeSelf = "Pie";
				 //Pie chart
				 if (chartTypeSelf == "Pie") { 
				 	configSelf = {
				            type: 'pie',
				            data: {
				                datasets: [{
				                    
				                    data: datavalue,
				                    backgroundColor: bgColors(len),
				                    borderWidth: 0.5,
				                    label: 'SRS (Investment Summary) ' 
				                }],
				                labels: labels 
				            },
				             
				            options: {
				                responsive: true,
				                legend: {
				                    position: 'left',
				                },
				                tooltips: {
				                    callbacks: {
				                        label: function (item, data) {
				                        	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
				                        }
				                    }
				                },
				                plugins: {
				                    labels: {
				 	              render: 'percentage',
				 	              fontColor: ['white','white'],
				 	              precision: 2
				 	            } 
				            }
				            },
				        };
				 }

				   
				 var ctxSelf = document.getElementById('canvaspieChartCatgLiab').getContext('2d');
				 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
				 }});

				 selfmychart.destroy();
				 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
				 }});

				 window.resetZoom  = function () {
				 	selfmychart.resetZoom();
				 };

				 // let bgColor;
				 if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
				 	bgColor = bgColors(datavalue.length);
				 }
				 configSelf.data.datasets[0].data = datavalue;
				 if (bgColor != undefined) {
				 	configSelf.data.datasets[0].backgroundColor = bgColor;
				 }

				 selfmychart.update();
				 selfmychart.resetZoom();
				   
				  /* End of Chart*/
				 
			////////
			
			var netValofAssettblId = document.getElementById("netValofAssetTablereport");
		    var netValofAssettbody = netValofAssettblId.tBodies[0]; 
            var NetAmountArr=[];
            var PercentArr=[];
            
			for ( var LIFNetchartcont in LIFChartretval) {
			
			if (LIFChartretval.hasOwnProperty(LIFNetchartcont)) {
  
				var LIFNetcontvalue = LIFChartretval[LIFNetchartcont];
				
				if("ASSET" == LIFNetcontvalue["GROUPTITLE"] ){
					//GROUPTITLE
					//LIABILITY
				//var rc = Number(LIFNetchartcont);
					
				var rc = 0;
				var netcrow = netValofAssettbody.insertRow(rc);

				var cell0 = netcrow.insertCell(0);		
				cell0.innerHTML= (isEmpty(LIFNetcontvalue["Title"])?" ":(LIFNetcontvalue["Title"])); 					
				cell0.style.textAlign = "center";
				cell0.style.borderStyle = "solid";
				
				var cell1 = netcrow.insertCell(1);		
				cell1.innerHTML= (isEmpty(LIFNetcontvalue["GROSS"])?" ":(LIFNetcontvalue["GROSS"])); 					
				cell1.style.textAlign = "center";
				cell1.style.borderStyle = "solid";
				
				var cell2 = netcrow.insertCell(2);		
				cell2.innerHTML =(isEmpty(LIFNetcontvalue["NET"])?" ":(LIFNetcontvalue["NET"]));     						
				cell2.style.textAlign = "center";
				cell2.style.borderStyle = "solid";
				NetAmountArr.push(isEmpty(LIFNetcontvalue["NET"])?"0":(LIFNetcontvalue["NET"])); 
				
				var cell3 = netcrow.insertCell(3);								
				//cell3.innerHTML =(isEmpty(LIFNetcontvalue["PRCNT"])?" ":(LIFNetcontvalue["PRCNT"])); 
				var net =(isEmpty(LIFNetcontvalue["PRCNT"])?" ":(LIFNetcontvalue["PRCNT"])); 
				cell3.innerHTML=net*100+"%"
				cell3.style.textAlign = "center";
				cell3.style.borderStyle = "solid"; 
				PercentArr.push(isEmpty(LIFNetcontvalue["PRCNT"])?"0":(LIFNetcontvalue["PRCNT"])); 
				
				}
				
			}
			
			}
			
			
		/*	Begin Chart*/
			
			 var NetValAssetJSONArray=[];
			 var pieChartNetValAsstDiv = document.getElementById("pieChartNetValAsst");
			 pieChartNetValAsstDiv.innerHTML="";
			 pieChartNetValAsstDiv.innerHTML="<canvas id='canvaspieChartNetValAsst' class=''></canvas>";
			   
			 var cashEquNetAmt,invAsstNetAmt,cpfNetAmt,persAsstNetAmt;
			 var cashEquPercnt,invAsstPercnt,cpfPercnt,persAsstPercnt;
			 
			 for(var i = 0; i <= 3; i++) {
				 cashEquNetAmt=(isEmpty(NetAmountArr[0]) ? "0" : NetAmountArr[0]);
				 cashEquPercnt=(isEmpty(PercentArr[0]) ? "0" : PercentArr[0]);
				 invAsstNetAmt=(isEmpty(NetAmountArr[1]) ? "0" : NetAmountArr[1]);
				 invAsstPercnt=(isEmpty(PercentArr[1]) ? "0" : PercentArr[1]);
				 cpfNetAmt=(isEmpty(NetAmountArr[2]) ? "0" : NetAmountArr[2]);
				 cpfPercnt=(isEmpty(PercentArr[2]) ? "0" : PercentArr[2]);
				 persAsstNetAmt=(isEmpty(NetAmountArr[3]) ? "0" : NetAmountArr[3]);
				 persAsstPercnt=(isEmpty(PercentArr[3]) ? "0" : PercentArr[3]);
				}
			 
			 if(cashEquNetAmt == 0 && invAsstNetAmt == 0 && cpfNetAmt == 0 && persAsstNetAmt == 0 ){
		   		  $("#pieChartNetValAsstNoDataFound").css('display','block');
		   		  $("#pieChartNetValAsst").css('display','none');
				   	}
				   	else{
				   		$("#pieChartNetValAsstNoDataFound").css('display','none');
				   	    $("#pieChartNetValAsst").css('display','block');
				   	}
			 
			   var NetAmountCashEquJSONObject 	= {"key":"NET AMOUNT CASH EQU","value":cashEquNetAmt};
			   var NetAmountInvAsstJSONObject 	= {"key":"NET AMOUNT INVESTMENT ASSET","value":invAsstNetAmt};
			   var NetAmountCpfJSONObject   	= {"key":"NET AMOUNT CPF","value":cpfNetAmt};
			   var NetAmountPersonalJSONObject  = {"key":"NET AMOUNT PERSONAL ASSET","value":persAsstNetAmt};
			   
		    	//{"key":"NET AMOUNT","value":cashEquNetAmt, "Investment Asset Net Amount":invAsstNetAmt,"Cpf Net Amount":cpfNetAmt,"Personal Asset Net Amount":persAsstNetAmt};
			   //var PercentJSONObject = {"key":"PERCENT","value":cashEquPercnt,"Investment Asset Percent":invAsstPercnt,"Cpf Percent":cpfPercnt,"Personal Asset Percent":persAsstPercnt};
			 
			   NetValAssetJSONArray.push(NetAmountCashEquJSONObject);
			   NetValAssetJSONArray.push(NetAmountInvAsstJSONObject);
			   NetValAssetJSONArray.push(NetAmountCpfJSONObject);
			   NetValAssetJSONArray.push(NetAmountPersonalJSONObject);
			   
			   var labels = NetValAssetJSONArray.map(function (e) {
			    return  e.key;
			 });

			 var datavalue = NetValAssetJSONArray.map(function (e) {
			    return  e.value;
			 });

			 var canvaspieChart = document.getElementById("canvaspieChartNetValAsst");
			 var randomColorGenerator = () => {
			    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
			 };
			   var len = datavalue.length;

			 bgColors = function (len) {
			    var bgArray = new Array(len);
			    for (var j = 0; j < len; j++) {
			        bgArray[j] = randomColorGenerator();
			    }
			    return bgArray;
			 }

			 chartTypeSelf = "Pie";
			 //Pie chart
			 if (chartTypeSelf == "Pie") { 
			 	configSelf = {
			            type: 'pie',
			            data: {
			                datasets: [{
			                    
			                    data: datavalue,
			                    backgroundColor: bgColors(len),
			                    borderWidth: 0.5,
			                    label: 'SRS (Investment Summary) ' 
			                }],
			                labels: labels 
			            },
			             
			            options: {
			                responsive: true,
			                legend: {
			                    position: 'left',
			                },
			                tooltips: {
			                    callbacks: {
			                        label: function (item, data) {
			                        	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
			                        }
			                    }
			                },
			                plugins: {
			                    labels: {
			 	              render: 'percentage',
			 	              fontColor: ['white','white'],
			 	              precision: 2
			 	            } 
			            }
			            },
			        };
			 }

			   
			 var ctxSelf = document.getElementById('canvaspieChartNetValAsst').getContext('2d');
			 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
			 }});

			 selfmychart.destroy();
			 selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
			 }});

			 window.resetZoom  = function () {
			 	selfmychart.resetZoom();
			 };

			 // let bgColor;
			 if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
			 	bgColor = bgColors(datavalue.length);
			 }
			 configSelf.data.datasets[0].data = datavalue;
			 if (bgColor != undefined) {
			 	configSelf.data.datasets[0].backgroundColor = bgColor;
			 }

			 selfmychart.update();
			 selfmychart.resetZoom();
			   
			  /* End of Chart*/
			 
	});
	hideLoader();
			
			
			
}




$("#networthpdfPrint").click(function (){ 
	
	showLoader(); 
	
	$("#canvaspieChartCatgLiab").addClass("chartjs-render-monitor widthpixel");
	var pl ="portrait";  // landscape     portrait
	var fileSave ="Networth Analysis";
	
	var divAssetId ="genPdfNwAnalysisAsset";  //table id 
	var divLiabilityId ="genPdfNwAnalysisLiablty";  
	var divGrossvalAsstId ="genPdfNwAnalysisgrossValofAsset";  
	
	var divGrossvalAsstchartId ="genPdfNwAnalysisgrossValofAssetChart";  
	var divGrossvalAsstIdSection ="genPdfNwAnalysisgrossValofAssetSection"; 
	
	var divCatgLiabId ="genPdfNwAnalysiscategoriesofLiabil"; 
	var divCatgLiabChartId ="genPdfNwAnalysiscategoriesofLiabilchart"; 
	
	var divCatgLiabIdSection ="genPdfNwAnalysiscategoriesofLiabilSection"; 
	
	var divNetValAsstId ="genPdfNwAnalysisNetValAsst"; 
	var divNetValAsstchartId ="genPdfNwAnalysisNetValAsstchart"; 
	
	var divNetValAsstIdSection ="genPdfNwAnalysisNetValAsstSection"; 
	
	var pdfTitle ="";   
	var pdfTitle4 ="Gross value of Asset";  
	var pdfTitle6 ="Categories of Liabilities";  
	var pdfTitle8 ="Net value of Asset";  
	var screentittlefootername = "Networth Analysis Report";

	
	
	
	var jsonObject = 
	    [{"key":"Image","value":divAssetId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	     {"key":"Image","value":divLiabilityId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	    // {"key":"Image","value":divGrossvalAsstId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	    // {"key":"Image","value":divGrossvalAsstchartId,"Title":pdfTitle4,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
 {"key":"Image","value":divGrossvalAsstIdSection,"Title":pdfTitle4,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	    // {"key":"Image","value":divCatgLiabId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	   //  {"key":"Image","value":divCatgLiabChartId,"Title":pdfTitle6,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
{"key":"Image","value":divCatgLiabIdSection,"Title":pdfTitle6,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	 //    {"key":"Image","value":divNetValAsstId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	 //    {"key":"Image","value":divNetValAsstchartId,"Title":pdfTitle8,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},];
{"key":"Image","value":divNetValAsstIdSection,"Title":pdfTitle8,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},];	
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
	 },100);
	 
		hideLoader();
});



function SnaSelfSrch(strFNAId,strElderShield){
	showLoader(); 
var fnaId = strFNAId;
var parameter = "DBCALLFOR=GET_SNA_SELF&strFnaId="+ fnaId ;

ajaxCall(parameter,servletName,function(Data){
var retval = Data;
hideLoader()
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


/*1. Estate Needs*/
var inflationRate  = Number(tabdets["CA_GEN_INFRATE"]);
var inflaRate =inflationRate.toFixed(2);
$('#inflationRate').html(numberWithCommas(inflaRate));
//$('#inflationRate').html((inflationRate.toFixed(2)));
var inflationRateFamily = Number(tabdets["CA_FAM_ROI"]);
$('#investmentRate').html(numberWithCommas(inflationRateFamily.toFixed(2)));
var effectiveRate  = Number(tabdets["SPS_INV_ROI"]);
/*$('#effectiveRate').html(Math.round(effectiveRate));*/
$('#effectiveRate').html(numberWithCommas(effectiveRate.toFixed(2)));
var spouse = Number(tabdets["SD_ANNL_FIN_SPS"]);
 $('#spouse1').html((numberWithCommas(Math.round(spouse))));
var spouseYrs = Number(tabdets["CMN_SD_ANNL_FIN_SPS"]);
$('#spouse2').html(numberWithCommas(Math.round(spouseYrs))); 

var child = Number(tabdets["SD_ANNL_FIN_CHLD"]);
$('#children1').html(numberWithCommas(Math.round(child)));
var childYrs =  Number(tabdets["CMN_SD_ANNL_FIN_CHLD"]);
$('#children2').html(numberWithCommas(Math.round(childYrs)));

var family = Number(tabdets["SD_ANNL_FIN_FAM"]);
$('#family1').html(numberWithCommas(Math.round(family)));
var familyYrs = Number(tabdets["CMN_SD_ANNL_FIN_FAM"]);
$('#family2').html(numberWithCommas(Math.round(familyYrs)));

var dependants = Number(tabdets["TOTAL_DEP_BY_SELF"]);
$('#dependant1').html(numberWithCommas(Math.round(dependants)));
var dependantYrs = Number(tabdets["CMN_SD_ANNLFIN_DEP"]);
$('#dependant2').html(numberWithCommas(Math.round(dependantYrs)));

var totalCapNeedsSelfAnnl=Number(tabdets["SD_ANNL_CAPITAL_NEEDS"]);
$('#totalCapNeeds1').html(numberWithCommas(Math.round(totalCapNeedsSelfAnnl)));

var totalCapNeedsSelf=Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
$('#totalCapNeeds2').html(numberWithCommas(Math.round(totalCapNeedsSelf)));

/*B Immediate Cash Needs at Death*/
var Overdrafts=Number(tabdets["LIAB_OVERDRAFT"]);
$('#overdrafts').html(numberWithCommas(Math.round(Overdrafts)));

var overdraftsShortLoans=Number(tabdets["LIAB_SHORT_LOANS"]);
$('#shortTermLoans').html(numberWithCommas(Math.round(overdraftsShortLoans)));

var creditCardLoans=Number(tabdets["LIAB_CC_LOANS"]);
$('#creditCardLoans').html(numberWithCommas(Math.round(creditCardLoans)));

var liabTaxes=Number(tabdets["LIAB_TAXES"]);
$('#taxes').html(numberWithCommas(Math.round(liabTaxes)));

var lastExpSelf=Number(tabdets["LASTEXP_SELF_AMT"]);
$('#lastExp').html(numberWithCommas(Math.round(lastExpSelf)));

var vehiLoan=Number(tabdets["TOTAL_VEHI_LOANVAL"]);
$('#vehicleLoan').html(numberWithCommas(Math.round(vehiLoan)));


var mortLoan=Number(tabdets["TOTAL_MORTAGE_LOANVAL"]);
$('#mortageLoan').html(numberWithCommas(Math.round(mortLoan)));

var othrLiab=Number(tabdets["LIAB_OTHERS"]);
$('#otherLiab').html(numberWithCommas(Math.round(othrLiab)));

var eduFund=Number(tabdets["EDU_FUND"]);
$('#childEduFnds').html(numberWithCommas(Math.round(eduFund)));

var immCashNeeds=Number(tabdets["SD_IMMD_CASH_NEEDS"]);
$('#totalImmCashNeeds').html(numberWithCommas(Math.round(immCashNeeds)));

var totalEstateNeeds=Number(tabdets["SD_IMMD_CASH_NEEDS"])+Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
$('#totalEstNeeds').html(numberWithCommas(Math.round(totalEstateNeeds)));

/*C Available Assets*/
var cashAssets =Number(tabdets["CASST_SELF_TOTAL"]);
$('#cashAssets').html(numberWithCommas(Math.round(cashAssets)));

var bondSelf =Number(tabdets["INV_BONDS_SELF"]);
$('#bondSelf').html(numberWithCommas(Math.round(bondSelf)));

var unitsInvFunds =Number(tabdets["INV_UT_SELF"])+Number(tabdets["INV_ILP_SELF"]);
$('#unitsInvFunds').html(numberWithCommas(Math.round(unitsInvFunds)));

/*var stocksShares =Number(tabdets["INV_SHARES_SELF"])+Number(tabdets["INV_STOCKS_SELF"]);
$('#stocksShares').html(Math.round(stocksShares));*/

var stocksShares =Number(tabdets["INV_SHARES_SELF"]);
$('#stocksShares').html(numberWithCommas(Math.round(stocksShares)));

var invOthrSelf =Number(tabdets["INV_OTHER_SELF"]);
$('#otherInv').html(numberWithCommas(Math.round(invOthrSelf)));

var invSrsSelf =Number(tabdets["SRS_INV_SELF"]);
$('#invSrs').html(numberWithCommas(Math.round(invSrsSelf)));

var depantSumAssured=Number(tabdets["DEPENDANT_SUM_ASSURED"]);

var totDeathBenf =Number(tabdets["TOTAL_DEATHBENF_SELF"])+Number(tabdets["DEPENDANT_SUM_ASSURED"]);
$('#totDeathBenef').html(numberWithCommas(Math.round(totDeathBenf)));

var totCpfSelfBal =Number(tabdets["TOTAL_CPF_SELF_BAL"]);
$('#totCpf').html(numberWithCommas(Math.round(totCpfSelfBal)));

var totVehMartVal =Number(tabdets["TOTAL_VEHI_MRKTVAL"]);
$('#totVehMrkt').html(numberWithCommas(Math.round(totVehMartVal)));

var invPropSelf =Number(tabdets["INV_PROP_SELF"]);
$('#proInv').html(numberWithCommas(Math.round(invPropSelf)));

var othAsstTot =Number(tabdets["OTHASST_TOTAL"]);
$('#otherAsset').html(numberWithCommas(Math.round(othAsstTot)));

var currentAsst =Number(tabdets["TOTAL_CURRENT_ASSET"]);
$('#totalCurrentAsst').html(numberWithCommas(Math.round(currentAsst)));

var incAvail =Number(tabdets["CMN_SD_INCOME_AVAIL"]);
$('#cummIncAvailble').html(numberWithCommas(Math.round(incAvail)));


//var surDeficit =Number(tabdets["CMN_SD_INCOME_AVAIL"]+tabdets["TOTAL_CURRENT_ASSET"])-Number(tabdets["SD_IMMD_CASH_NEEDS"]+tabdets["CMN_SD_CAPITAL_NEEDS"]);
var sur=Number(tabdets["CMN_SD_INCOME_AVAIL"])+Number(tabdets["TOTAL_CURRENT_ASSET"]);
var deficit=Number(tabdets["SD_IMMD_CASH_NEEDS"])+Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
var surDeficit =sur-deficit
$('#totSurplusDeficit').html(numberWithCommas(Math.round(surDeficit)));



/*2.Disability Income Needs*/

var personalDisNeeds =Number(tabdets["TPD_ANNL_FIN_SELF"]);
$('#personalDisNeeds1').html(numberWithCommas(Math.round(personalDisNeeds)));

var personalDisNeedsComm =Number(tabdets["CMN_TPD_ANNL_FIN_SELF"]);
$('#personalDisNeeds2').html(numberWithCommas(Math.round(personalDisNeedsComm)));

var spouseDisNeeds =Number(tabdets["TPD_ANNL_FIN_SPS"]);
$('#spouseDidNeeds1').html(numberWithCommas(Math.round(spouseDisNeeds)));

var spouseDisNeedsComm =Number(tabdets["CMN_TPD_ANNL_FIN_SPS"]);
$('#spouseDidNeeds2').html(numberWithCommas(Math.round(spouseDisNeedsComm)));

var childDisNeeds =Number(tabdets["TPD_ANNL_FIN_CHLD"]);
$('#childDisNeeds1').html(numberWithCommas(Math.round(childDisNeeds)));

var childDisNeedsComm =Number(tabdets["CMN_TPD_ANNL_FIN_CHLD"]);
$('#childDisNeeds2').html(numberWithCommas(Math.round(childDisNeedsComm)));

var familyDisNeeds =Number(tabdets["TPD_ANNL_FIN_FAM"]);
$('#familyDisNeeds1').html(numberWithCommas(Math.round(familyDisNeeds)));

var familyDisNeedsComm =Number(tabdets["CMN_TPD_ANNL_FIN_FAM"]);
$('#familyDisNeeds2').html(numberWithCommas(Math.round(familyDisNeedsComm)));


var depnDisNeeds =Number(tabdets["TOTAL_DEP_BY_SELF"]);
$('#depnDisNeeds1').html(numberWithCommas(Math.round(depnDisNeeds)));

var depnDisNeedsComm =Number(tabdets["CMN_SD_ANNL_FIN_DEP"]);
$('#depnDisNeeds2').html(numberWithCommas(Math.round(depnDisNeedsComm)));

var tpdAnnlDisNeeds =Number(tabdets["CMN_TPD_ANNL_MED_EXP_SELF"]);
$('#annlMedExpProv').html(numberWithCommas(Math.round(tpdAnnlDisNeeds)));

var tpdIncomeNeeds =Number(tabdets["CMN_TPD_INCOME_NEEDED"]);
$('#comIncNeedDisblty').html(numberWithCommas(Math.round(tpdIncomeNeeds)));

var tpdAnnlIncRcvd =Number(tabdets["CMN_TPD_ANNL_INCOME_RCVD"]);
$('#comValOthIncRecEvnTPD').html(numberWithCommas(Math.round(tpdAnnlIncRcvd)));


/*var totAnnlBenVal =Number(tabdets["TOTAL_CMN_ANNL_BENF_VAL"]);
$('#commValAnnlPermntDisInc').html(Math.round(totAnnlBenVal));*/

var totAnnlBenVal =Number(tabdets["CMN_TPD_ANNL_INCOME_VAL"]);
$('#commValAnnlPermntDisInc').html(numberWithCommas(Math.round(totAnnlBenVal)));

var tpdAnlIncVal =Number(tabdets["CMN_TPD_ANNL_INCOME_VAL"])+Number(tabdets["DEPENDANT_SUM_ASSURED"]);
$('#tpd').html(numberWithCommas(Math.round(tpdAnlIncVal)));

var idAnnlIncVal =Number(tabdets["CMN_ID_ANNL_INCOME_VAL"]);
$('#disability').html(numberWithCommas(Math.round(idAnnlIncVal)));

//var ltdAnnlIncVal =Number(tabdets["CMN_LTD_ANNL_INCOME_VAL"]);
var eldershieldplan=strElderShield;
var ltdAnnlIncVal; 
if(eldershieldplan == 'ElderShield 300' ){
    ltdAnnlIncVal=Number(tabdets["CARESHIELD_PAYOUTMONTH"])+300;	
}
else if(eldershieldplan == 'ElderShield 400' ){
	ltdAnnlIncVal=Number(tabdets["CARESHIELD_PAYOUTMONTH"])+400;
}

$('#longdisability').html(numberWithCommas(Math.round(ltdAnnlIncVal)));


/*var netDisSurDeficit =Number(tabdets["TOTAL_CMN_ANNL_BENF_VAL"])+Number(tabdets["CMN_TPD_ANNL_INCOME_RCVD"])-Number(tabdets["CMN_TPD_INCOME_NEEDED"]);
$('#netDisIncNeedsSurDef').html(Math.round(netDisSurDeficit));*/

var netDisSurDeficit =Number(tabdets["CMN_TPD_ANNL_INCOME_VAL"])+Number(tabdets["CMN_TPD_ANNL_INCOME_RCVD"])-Number(tabdets["CMN_TPD_INCOME_NEEDED"]);
$('#netDisIncNeedsSurDef').html(numberWithCommas(Math.round(netDisSurDeficit)));

/*3.Major Medical Needs*/


var ciAnnlFinSelf =Number(tabdets["CI_ANNL_FIN_SELF"]);
$('#personalMajrMed1').html(numberWithCommas(Math.round(ciAnnlFinSelf)));


var cmnCiAnnlFinSelf =Number(tabdets["CMN_CI_ANNL_FIN_SELF"]);
$('#personalMajrMed2').html(numberWithCommas(Math.round(cmnCiAnnlFinSelf)));

var ciAnnlFinSpouse =Number(tabdets["CI_ANNL_FIN_SPS"]);
$('#spouseMajrMed1').html(numberWithCommas(Math.round(ciAnnlFinSpouse)));

var cmnCiAnnlFinSpouse =Number(tabdets["CMN_CI_ANNL_FIN_SPS"]);
$('#spouseMajrMed2').html((numberWithCommas(Math.round(cmnCiAnnlFinSpouse))));

var ciAnnlFinChild =Number(tabdets["CI_ANNL_FIN_CHLD"]);
$('#childMjrMed1').html(numberWithCommas(Math.round(ciAnnlFinChild)));

var cmnCiAnnlFinChild =Number(tabdets["CMN_CI_ANNL_FIN_CHLD"]);
$('#childMjrMed2').html(numberWithCommas(Math.round(cmnCiAnnlFinChild)));

var ciAnnlFinFamily =Number(tabdets["CI_ANNL_FIN_FAM"]);
$('#famMjrMed1').html(numberWithCommas(Math.round(ciAnnlFinFamily)));

var cmnCiAnnlFinFamily =Number(tabdets["CMN_CI_ANNL_FIN_FAM"]);
$('#famMjrMed2').html(numberWithCommas(Math.round(cmnCiAnnlFinFamily)));


var totDepSelf =Number(tabdets["TOTAL_DEP_BY_SELF"]);
$('#depMjrMed1').html(numberWithCommas(Math.round(totDepSelf)));

var totSdAnnlFinDep =Number(tabdets["CMN_SD_ANNL_FIN_DEP"]);
$('#depMjrMed2').html(numberWithCommas(Math.round(totSdAnnlFinDep)));

var ciSelfLumpsum =Number(tabdets["CI_SELF_LUMPSUMMC"]);
$('#lumpsum').html(numberWithCommas(Math.round(ciSelfLumpsum)));

var ciAnnlMedExpSelf =Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"]);
$('#comAnnlMedExpMajIllns').html(numberWithCommas(Math.round(ciAnnlMedExpSelf)));

/*var totalMjrMedNeeds =Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"])+Number(tabdets["CI_SELF_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
$('#totMajrMedNeeds').html(Math.round(totalMjrMedNeeds));*/


var totalMjrMedNeeds =Number(tabdets["CMN_CI_ANNL_FIN_SELF"])+Number(tabdets["CMN_CI_ANNL_FIN_SPS"])+Number(tabdets["CMN_CI_ANNL_FIN_CHLD"])+Number(tabdets["CMN_CI_ANNL_FIN_FAM"])+Number(tabdets["CMN_SD_ANNL_FIN_DEP"])+Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"])+Number(tabdets["CI_SELF_LUMPSUMMC"]);
$('#totMajrMedNeeds').html(numberWithCommas(Math.round(totalMjrMedNeeds)));

var disEarlyStageCov =Number(tabdets["CI_LI_ES_COVERAGE_SELF"]+tabdets["CI_LI_IS_COVERAGE_SELF"]);
$('#disEarlyStageCov').html(numberWithCommas(Math.round(disEarlyStageCov)));


var disAdvStageCov =Number(tabdets["CI_LI_AS_COVERAGE_SELF"]);
$('#disAdvStageCov').html(numberWithCommas(Math.round(disAdvStageCov)));

/*var netDisCovNeedSurDeficitEarly =Number(tabdets["CI_LI_ES_COVERAGE_SELF"]+tabdets["CI_LI_IS_COVERAGE_SELF"])-Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"]+tabdets["CI_SELF_LUMPSUMMC"]+tabdets["CMN_CI_NEEDED"]);*/
/*var surEarly=Number(tabdets["CI_LI_ES_COVERAGE_SELF"]+tabdets["CI_LI_IS_COVERAGE_SELF"]);
var deficitEarly=Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"])+Number(tabdets["CI_SELF_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitEarly=surEarly-deficitEarly;
$('#netDisCovNeedSurpDefEarlystag').html(Math.round(netDisCovNeedSurDeficitEarly));*/

var surEarly=Number(tabdets["CI_LI_ES_COVERAGE_SELF"]+tabdets["CI_LI_IS_COVERAGE_SELF"]);
var deficitEarly=Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitEarly=deficitEarly-surEarly;
$('#netDisCovNeedSurpDefEarlystag').html(numberWithCommas(Math.round(netDisCovNeedSurDeficitEarly)));

/*var netDisCovNeedSurDeficitAdv =Number(tabdets["CI_LI_AS_COVERAGE_SELF"])-Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"]+tabdets["CI_SELF_LUMPSUMMC"]+tabdets["CMN_CI_NEEDED"]);*/
/*var surAdv=Number(tabdets["CI_LI_AS_COVERAGE_SELF"]);
var defAdv=Number(tabdets["CMN_CI_ANNL_MED_EXP_SELF"])+Number(tabdets["CI_SELF_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitAdv =surAdv-defAdv;
$('#netDisCovNeedSurpDefAdvstag').html(Math.round(netDisCovNeedSurDeficitAdv));*/

var surAdv=Number(tabdets["CI_LI_AS_COVERAGE_SELF"]);
var defAdv=Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitAdv =defAdv-surAdv;
$('#netDisCovNeedSurpDefAdvstag').html(numberWithCommas(Math.round(netDisCovNeedSurDeficitAdv)));
}
});


}

$("#pdfPrintSNASelf").click(function (){ 
	
	showLoader(); 
	
	$("#canvaspieChartCatgLiab").addClass("chartjs-render-monitor widthpixel");
	var pl ="portrait";  // landscape     portrait
	var fileSave ="Survival Needs Analysis - Self";
	
	var divSnaSelfId ="pdfContent";  //table id 
	var pdfTitle ="";   
	var screentittlefootername = "Survival Needs Analysis - Self Report";

	
	
	
	var jsonObject = 
	    [{"key":"Image","value":divSnaSelfId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},];
	
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
	 },100);
	 
		hideLoader();
});


function SnaSpouseSrch(strFNAId){
	showLoader(); 
var fnaId = strFNAId;
var parameter = "DBCALLFOR=GET_SNA_SPOUSE&strFnaId="+ fnaId ;

ajaxCall(parameter,servletName,function(Data){
var retval = Data;
hideLoader()
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


/*1. Estate Needs*/
var inflationRate  = Number(tabdets["CA_GEN_INFRATE"]);
$('#inflationRatespouse').html(numberWithCommas(inflationRate.toFixed(2)));
var inflationRateFamily = Number(tabdets["CA_FAM_ROI"]);
$('#invstRateFamilySpouse').html(numberWithCommas(inflationRateFamily.toFixed(2)));
var effectiveRate  = Number(tabdets["FAMILY_INV_ROI"]);
/*$('#effRateSpouse').html(Math.round(effectiveRate));*/
$('#effRateSpouse').html(numberWithCommas(effectiveRate.toFixed(2)));

var personalspouse = Number(tabdets["SPD_ANNL_FIN_SELF"]);

 $('#personalSpouse1').html(numberWithCommas(Math.round(personalspouse)));
var personalspouseYrs = Number(tabdets["CMN_SPD_ANNL_FIN_SELF"]);
$('#personalSpouse2').html(numberWithCommas(Math.round(personalspouseYrs)));

var personalspouse = tabdets["SPD_ANNL_FIN_SPS"];
/*$('#spdspouse1').html(Math.round(personalspouse));*/
$('#spdspouse1').html(personalspouse);

var personalspouseYrs = tabdets["SPD_ANNL_FIN_SPS"];
/*$('#spdspouse2').html(Math.round(personalspouseYrs));*/
$('#spdspouse2').html(personalspouseYrs);

var child = Number(tabdets["SD_ANNL_FIN_CHLD"]);
$('#childSpouse1').html(numberWithCommas(Math.round(child)));
var childYrs =  Number(tabdets["CMN_SPD_ANNL_FIN_CHLD"]);
$('#childSpouse2').html(numberWithCommas(Math.round(childYrs)));

var family = Number(tabdets["SPD_ANNL_FIN_FAM"]);
$('#familySpouse1').html(numberWithCommas(Math.round(family)));
var familyYrs = Number(tabdets["CMN_SPD_ANNL_FIN_FAM"]);
$('#familySpouse2').html(numberWithCommas(Math.round(familyYrs)));

var dependants = Number(tabdets["TOTAL_DEP_BY_SPS"]);
$('#depenantspouse1').html(numberWithCommas(Math.round(dependants)));
var dependantYrs = Number(tabdets["CMN_SDS_ANNL_FIN_DEP"]);
$('#depenantspouse2').html(numberWithCommas(Math.round(dependantYrs)));

var totalCapNeedsSelfAnnl=Number(tabdets["SD_ANNL_CAPITAL_NEEDS"]);
$('#totCapNeeds1').html(numberWithCommas(Math.round(totalCapNeedsSelfAnnl)));

var totalCapNeedsSelf=Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
$('#totCapNeeds2').html(numberWithCommas(Math.round(totalCapNeedsSelf)));

/*B Immediate Cash Needs at Death*/
var Overdrafts=Number(tabdets["LIAB_OVERDRAFT"]);
$('#overdraftSpouse1').html(numberWithCommas(Math.round(Overdrafts)));

var overdraftsShortLoans=Number(tabdets["LIAB_SHORT_LOANS"]);
$('#shortTermLoanSpouse1').html(numberWithCommas(Math.round(overdraftsShortLoans)));

var creditCardLoans=Number(tabdets["LIAB_CC_LOANS"]);
$('#creditcardLoans').html(numberWithCommas(Math.round(creditCardLoans)));

var liabTaxes=Number(tabdets["LIAB_TAXES"]);
$('#taxesspouse1').html(numberWithCommas(Math.round(liabTaxes)));

var lastExpSelf=Number(tabdets["LASTEXP_SPS_AMT"]);
$('#lastExpSpouse').html(numberWithCommas(Math.round(lastExpSelf)));

var vehiLoan=Number(tabdets["TOTAL_VEHI_LOANVAL"]);
$('#vehLoanSpouse').html(numberWithCommas(Math.round(vehiLoan)));


var mortLoan=Number(tabdets["TOTAL_MORTAGE_LOANVAL"]);
$('#mortageLoanSpouse').html(numberWithCommas(Math.round(mortLoan)));

var othrLiab=Number(tabdets["LIAB_OTHERS"]);
$('#otherLiabSpouse').html(numberWithCommas(Math.round(othrLiab)));

var eduFund=Number(tabdets["EDU_FUND"]);
$('#childEduFundSpouse').html(numberWithCommas(Math.round(eduFund)));

var immCashNeeds=Number(tabdets["SD_IMMD_CASH_NEEDS"]);
$('#totImmCashNeedsspouse').html(numberWithCommas(Math.round(immCashNeeds)));

var totalEstateNeeds=Number(tabdets["SD_IMMD_CASH_NEEDS"])+Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
$('#totalEstNeedSpouse').html(numberWithCommas(Math.round(totalEstateNeeds)));

/*C Available Assets*/
var cashAssets =Number(tabdets["CASST_SPS_TOTAL"]);
$('#cashassetspouse').html(numberWithCommas(Math.round(cashAssets)));

var bondSelf =Number(tabdets["INV_BONDS_SPOUSE"]);
$('#bondspouse').html(numberWithCommas(Math.round(bondSelf)));

var unitsInvFunds =Number(tabdets["INV_UT_SPOUSE"])+Number(tabdets["INV_ILP_SPOUSE"]);
$('#unittrustspouse').html(numberWithCommas(Math.round(unitsInvFunds)));

var stocksShares =Number(tabdets["INV_STOCKS_SPOUSE"])+Number(tabdets["INV_SHARES_SPOUSE"]);
$('#stockSpouse').html(numberWithCommas(Math.round(stocksShares)));

var invOthrSelf =Number(tabdets["INV_OTHER_SPOUSE"]);
$('#othInvSpouse').html(numberWithCommas(Math.round(invOthrSelf)));

var invSrsSelf =Number(tabdets["SRS_INV_SPOUSE"]);
$('#srsSpouse').html(numberWithCommas(Math.round(invSrsSelf)));

var totDeathBenf =Number(tabdets["TOTAL_DEATHBENF_SPOUSE"]);
$('#lifeInsSpouse').html(numberWithCommas(Math.round(totDeathBenf)));

var totCpfSelfBal =Number(tabdets["TOTAL_CPF_SPS_BAL"]);
$('#cpfSpouse').html(numberWithCommas(Math.round(totCpfSelfBal)));

var totVehMartVal =Number(tabdets["TOTAL_VEHI_MRKTVAL"]);
$('#vechilespouse').html(numberWithCommas(Math.round(totVehMartVal)));

var invPropSelf =Number(tabdets["INV_PROP_SPOUSE"]);
$('#propInvSpouse').html(numberWithCommas(Math.round(invPropSelf)));

var othAsstTot =Number(tabdets["OTHASST_TOTAL"]);
$('#OtherAsstspouse').html(numberWithCommas(Math.round(othAsstTot)));

var currentAsst =Number(tabdets["TOTAL_CURRENT_ASSET"]);
$('#totCurrentAsstSpouse').html(numberWithCommas(Math.round(currentAsst)));

var incAvail =Number(tabdets["CMN_SPD_INCOME_AVAIL"]);
$('#cmmIncAvailSpouse').html(numberWithCommas(Math.round(incAvail)));

/*var surDeficit =Number(tabdets["CMN_SPD_INCOME_AVAIL"]+tabdets["TOTAL_CURRENT_ASSET"])-Number(tabdets["SD_IMMD_CASH_NEEDS"]+tabdets["CMN_SD_CAPITAL_NEEDS"]);*/
var surSpouse =Number(tabdets["CMN_SPD_INCOME_AVAIL"])+Number(tabdets["TOTAL_CURRENT_ASSET"]);
var defSpouse =Number(tabdets["SD_IMMD_CASH_NEEDS"])+Number(tabdets["CMN_SD_CAPITAL_NEEDS"]);
var surDeficit=surSpouse-defSpouse;
$('#totSurDefSpouse').html(numberWithCommas(Math.round(surDeficit)));



/*2.Disability Income Needs*/

var personalDisNeeds =Number(tabdets["TPDS_ANNL_FIN_SELF"]);
$('#perDisIncSpouse1').html(numberWithCommas(Math.round(personalDisNeeds)));

var personalDisNeedsComm =Number(tabdets["CMN_TPDS_ANNL_FIN_SELF"]);
$('#perDisIncSpouse2').html(numberWithCommas(Math.round(personalDisNeedsComm)));

var spouseDisNeeds =Number(tabdets["TPDS_ANNL_FIN_SPS"]);
$('#spoDisIncSpouse1').html(numberWithCommas(Math.round(spouseDisNeeds)));

var spouseDisNeedsComm =Number(tabdets["CMN_TPDS_ANNL_FIN_SPS"]);
$('#spoDisIncSpouse2').html(numberWithCommas(Math.round(spouseDisNeedsComm)));

var childDisNeeds =Number(tabdets["TPDS_ANNL_FIN_CHLD"]);
$('#childDisIncSpouse1').html(numberWithCommas(Math.round(childDisNeeds)));

var childDisNeedsComm =Number(tabdets["CMN_TPDS_ANNL_FIN_CHLD"]);
$('#childDisIncSpouse2').html(numberWithCommas(Math.round(childDisNeedsComm)));

var familyDisNeeds =Number(tabdets["TPDS_ANNL_FIN_FAM"]);
$('#familyDisIncSpouse1').html(numberWithCommas(Math.round(familyDisNeeds)));

var familyDisNeedsComm =Number(tabdets["CMN_TPDS_ANNL_FIN_FAM"]);
$('#familyDisIncSpouse2').html(numberWithCommas(Math.round(familyDisNeedsComm)));


var depnDisNeeds =Number(tabdets["TOTAL_DEP_BY_SPS"]);
$('#depDisIncSpouse1').html(numberWithCommas(Math.round(depnDisNeeds)));

var depnDisNeedsComm =Number(tabdets["CMN_SDS_ANNL_FIN_DEP"]);
$('#depDisIncSpouse2').html(numberWithCommas(Math.round(depnDisNeedsComm)));

var tpdAnnlDisNeeds =Number(tabdets["CMN_TPDS_ANNL_MED_EXP_SELF"]);
$('#annlMedExpDisIncSpouse1').html(numberWithCommas(Math.round(tpdAnnlDisNeeds)));

var tpdIncomeNeeds =Number(tabdets["CMN_TPDS_INCOME_NEEDED"]);
$('#commIncNeedDisIncSpouse1').html(numberWithCommas(Math.round(tpdIncomeNeeds)));

var tpdAnnlIncRcvd =Number(tabdets["CMN_TPDS_ANNL_INCOME_RCVD"]);
$('#commValOthrDisIncSpouse1').html(numberWithCommas(Math.round(tpdAnnlIncRcvd)));


var totAnnlBenVal =Number(tabdets["TOTAL_CMN_ANNL_BENF_VAL"]);
$('#commValAnnlTotDisIncSpouse1').html(numberWithCommas(Math.round(totAnnlBenVal)));

var tpdAnlIncVal =Number(tabdets["CMN_TPDS_ANNL_INCOME_VAL"]);
$('#tpdSpouse').html(numberWithCommas(Math.round(tpdAnlIncVal)));

var idAnnlIncVal =Number(tabdets["CMN_IDS_ANNL_INCOME_VAL"]);
$('#IncDisSpouse').html(numberWithCommas(Math.round(idAnnlIncVal)));


var netDisSurDeficit =Number(tabdets["TOTAL_CMN_ANNL_BENF_VAL"])+Number(tabdets["CMN_TPDS_ANNL_INCOME_RCVD"])-Number(tabdets["CMN_TPDS_INCOME_NEEDED"]);
$('#netDisIncSurDefSpouse').html(numberWithCommas(Math.round(netDisSurDeficit)));


/*3.Major Medical Needs*/


var ciAnnlFinSelf =Number(tabdets["CIS_ANNL_FIN_SELF"]);
$('#cisPersonalSpouse1').html(numberWithCommas(Math.round(ciAnnlFinSelf)));


var cmnCiAnnlFinSelf =Number(tabdets["CMN_CIS_ANNL_FIN_SELF"]);
$('#cisPersonalSpouse2').html(numberWithCommas(Math.round(cmnCiAnnlFinSelf)));

var ciAnnlFinSpouse =Number(tabdets["CIS_ANNL_FIN_SPS"]);
$('#cisSpouse1').html(numberWithCommas(Math.round(ciAnnlFinSpouse)));

var cmnCiAnnlFinSpouse =Number(tabdets["CMN_CIS_ANNL_FIN_SPS"]);
$('#cisSpouse2').html(numberWithCommas(Math.round(cmnCiAnnlFinSpouse)));

var ciAnnlFinChild =Number(tabdets["CIS_ANNL_FIN_CHLD"]);
$('#cischildSpouse1').html(numberWithCommas(Math.round(ciAnnlFinChild)));

var cmnCiAnnlFinChild =Number(tabdets["CMN_CIS_ANNL_FIN_CHLD"]);
$('#cischildSpouse2').html(numberWithCommas(Math.round(cmnCiAnnlFinChild)));

var ciAnnlFinFamily =Number(tabdets["CIS_ANNL_FIN_FAM"]);
$('#cisfamilySpouse1').html(numberWithCommas(Math.round(ciAnnlFinFamily)));

var cmnCiAnnlFinFamily =Number(tabdets["CMN_CIS_ANNL_FIN_FAM"]);
$('#cisfamilySpouse2').html(numberWithCommas(Math.round(cmnCiAnnlFinFamily)));


var totDepSelf =Number(tabdets["TOTAL_DEP_BY_SPS"]);
$('#cisDepSpouse1').html(numberWithCommas(Math.round(totDepSelf)));

var totSdAnnlFinDep =Number(tabdets["CMN_SDS_ANNL_FIN_DEP"]);
$('#cisDepSpouse2').html(numberWithCommas(Math.round(totSdAnnlFinDep)));

var ciSelfLumpsum =Number(tabdets["CIS_SPS_LUMPSUMMC"]);
$('#lumpsumMedCostIllSpouse').html(numberWithCommas(Math.round(ciSelfLumpsum)));

var ciAnnlMedExpSelf =Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"]);
$('#commAnnlMedExpSpouse').html(numberWithCommas(Math.round(ciAnnlMedExpSelf)));

var totalMjrMedNeeds =Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"])+Number(tabdets["CIS_SPS_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
$('#totMedExpSpouse').html(numberWithCommas(Math.round(totalMjrMedNeeds)));


var disEarlyStageCov =Number(tabdets["CI_LI_ES_COVERAGE_SPS"]);
$('#disElryCovSpouse').html(numberWithCommas(Math.round(disEarlyStageCov)));


var disAdvStageCov =Number(tabdets["CI_LI_AS_COVERAGE_SPS"]);
$('#disAdvCovSpouse').html(numberWithCommas(Math.round(disAdvStageCov)));


/*var netDisCovNeedSurDeficitEarly =Number(tabdets["CI_LI_ES_COVERAGE_SPS"]+tabdets["CI_LI_IS_COVERAGE_SPS"])-Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"]+tabdets["CIS_SPS_LUMPSUMMC"]+tabdets["CMN_CI_NEEDED"]);*/
var netDisCovNeedSurEarly=Number(tabdets["CI_LI_ES_COVERAGE_SPS"])+Number(tabdets["CI_LI_IS_COVERAGE_SPS"]);
var netDisCovNeedDeficitEarly =Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"])+Number(tabdets["CIS_SPS_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitEarly =netDisCovNeedSurEarly-netDisCovNeedDeficitEarly;
$('#netDisCovSurDefSpouse').html(numberWithCommas(Math.round(netDisCovNeedSurDeficitEarly)));

/*var netDisCovNeedSurDeficitAdv =-Number(tabdets["CI_LI_AS_COVERAGE_SPS"])-Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"]+tabdets["CIS_SPS_LUMPSUMMC"]+tabdets["CMN_CI_NEEDED"]);*/
var netDisCovNeedSurAdv =-Number(tabdets["CI_LI_AS_COVERAGE_SPS"]);
var netDisCovNeedDeficitAdv=Number(tabdets["CMN_CIS_ANNL_MED_EXP_SPS"])+Number(tabdets["CIS_SPS_LUMPSUMMC"])+Number(tabdets["CMN_CI_NEEDED"]);
var netDisCovNeedSurDeficitAdv =netDisCovNeedSurAdv-netDisCovNeedDeficitAdv;
$('#netdisCovSurDefAdvSpouse').html(numberWithCommas(Math.round(netDisCovNeedSurDeficitAdv)));


	
}
});
}





$("#pdfPrintSNASpouse").click(function (){ 
	
	showLoader(); 
	
	$("#canvaspieChartCatgLiab").addClass("chartjs-render-monitor widthpixel");
	var pl ="portrait";  // landscape     portrait
	var fileSave ="Survival Needs Analysis - Spouse";
	
	var divSnaSpouseId ="print";  //table id 
	
	var pdfTitle ="";   
	var screentittlefootername = "Survival Needs Analysis - Spouse Report";

	
	
	
	var jsonObject = 
	    [{"key":"Image","value":divSnaSpouseId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""},
	    /* {"key":"Image","value":divSnaSpousDisId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},
	     {"key":"Image","value":divSnaSpouseMedId,"Title":pdfTitle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"},*/];
	
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
	 },100);
	 
		hideLoader();
});



function childFlowSrch(strFNAId){
	showLoader(); 
var fnaId = strFNAId;
var parameter = "DBCALLFOR=GET_CHILD&strFnaId="+ fnaId ;

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

	for ( var tab in tabdets) {
		
		if (tabdets.hasOwnProperty(tab)) {
			var key = tab;
			var value = tabdets[tab];
			if (key == "ALL_CHILDS"){ 
				
				for ( var cont in value) { 
					
					var contvalue = value[cont]; 
					
					if(contvalue != null){
						createReportChildRows();
						var $lastRow = $("#childDetailsRepotTbl tbody tr:last");	
						var childName;
						var childAge;
						var childRelation;
						var tritoryAge;
						var nameofUniv;
						var annlEduCost;
						var noOfYrsStu;
						var InfRate;
						var totalEduCast;
						var inflationFactor;
						var totalCostEdu;
						var availEduFund;
						var balEduFund;
						var annlacc5percnt;
						var annlacc6percnt;
						var annlacc7percnt;
						var annlacc8percnt;
						var lumpsum7percnt;
						var lumpsum6percnt;
						var lumpsum5percnt;
						for(var data in contvalue){
							
							var col = contvalue[data];
							switch(data){
							
							case "CHILD_NAME": 
								//$('#childName').html(col);
								//$lastRow.find("td").find('input[name=childName]').val(col); 
								childName=col;
								var val=(isEmpty(col)) ? ' N/A;' : col;
								$lastRow.find("td:eq(1)").html(val);
								break; 
								
							case "CHILD_AGE": 
								//$('#childAge').html(col);
								 childAge=col;
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(3)").html(val);
								break; 
							case "CHILD_RELATION": 
								//$('#childRelation').html(col);
								childRelation=col;
								var val=(isEmpty(col)) ? ' N/A' : col;
								$lastRow.find("td:eq(5)").html(val);
								break; 
							case "CHILD_YRS2TERTIARY": 
								//$('#tritoryAge').html(col);
								tritoryAge=col;
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(7)").html(val);
								break; 
							case "CHILD_UNIVERSITY": 
								//$('#nameofUniv').html(col);
								nameofUniv=col;
								var val=(isEmpty(col)) ? 'N\A' : col;
								$lastRow.find("td:eq(9)").html(val); 
								break; 
							case "CHILD_PERANN_EDUCOST": 
								//$('#annlEduCost').html(col);
								annlEduCost=col;
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(11)").html(val);
								break; 
							case "CHILD_YRSOFEDUCATION": 
								noOfYrsStu=col;
								//$('#noOfYrsStu').html(col);
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(13)").html(val);
								break;
							case "CA_EDN_INFRATE": 
								//$('#InfRate').html(col);
								InfRate=col;
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(15)").html(val);
								break; 
							case "TOTAL_EDU_COST": 
								totalEduCast=col;
								var val=(isEmpty(col)) ? ' 0' : col;
								$lastRow.find("td:eq(34)").html(numberWithCommas(val));
								break;
							case "INFLATION_FACTOR": 
								inflationFactor=col;
								var val=(isEmpty(col)) ? '0' : col;
								$lastRow.find("td:eq(36)").html(numberWithCommas(val));
								break;
							
							case "AVAIL_EDN_FUND": 
								availEduFund=col;
								var val=(isEmpty(col)) ? '0' : col;
								$lastRow.find("td:eq(40)").html(numberWithCommas(val));
								break;
							
									
							}		 
							totalCostEdu=totalEduCast*inflationFactor;
							$lastRow.find("td:eq(38)").html(numberWithCommas(Math.round(totalCostEdu)));
							balEduFund=totalCostEdu-availEduFund;
							$lastRow.find("td:eq(42)").html(numberWithCommas(Math.round(balEduFund)));
							
							if(balEduFund>0){
								annlacc5percnt=PMT(5/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(64)").html(numberWithCommas(Math.round(annlacc5percnt)));
								
							}
							else{
								annlacc5percnt=0;
								$lastRow.find("td:eq(64)").html(numberWithCommas(annlacc5percnt));
								
							}
							if(balEduFund>0){
								annlacc6percnt=PMT(6/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(66)").html(numberWithCommas(Math.round(annlacc6percnt)));
							}
							else{
								annlacc6percnt=0;
								$lastRow.find("td:eq(66)").html(numberWithCommas(annlacc6percnt));
							}
							if(balEduFund>0){
								annlacc7percnt=PMT(7/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(68)").html(numberWithCommas(Math.round(annlacc7percnt)));							}
							else{
								annlacc7percnt=0;
								$lastRow.find("td:eq(68)").html(numberWithCommas(annlacc7percnt));
							}
							if(balEduFund>0){
								annlacc8percnt=PMT(8/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(70)").html(numberWithCommas(Math.round(annlacc8percnt)));
							}
							else{
								annlacc8percnt=0;
								$lastRow.find("td:eq(70)").html(numberWithCommas(annlacc8percnt));
							}
							if(balEduFund>0){
								lumpsum5percnt=PVCalculation(5/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(73)").html(numberWithCommas(Math.round(lumpsum5percnt)));
							}
							else{
								lumpsum5percnt=0;
								$lastRow.find("td:eq(73)").html(numberWithCommas(lumpsum5percnt));
							}
							if(balEduFund>0){
								lumpsum6percnt=PVCalculation(6/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(75)").html(numberWithCommas(Math.round(lumpsum6percnt)));
							}
							else{
								lumpsum6percnt=0;
								$lastRow.find("td:eq(75)").html(numberWithCommas(lumpsum6percnt));
							}
							if(balEduFund>0){
								lumpsum7percnt=PVCalculation(7/100,tritoryAge-childAge,0,(-1*balEduFund),1);
								$lastRow.find("td:eq(77)").html(numberWithCommas(Math.round(lumpsum7percnt)));
							}
							else{
								lumpsum7percnt=0;
								$lastRow.find("td:eq(77)").html(numberWithCommas(lumpsum7percnt));
							}
							if(balEduFund>0){
								lumpsum8percnt=PVCalculation(8/100,tritoryAge-childAge,0,(-1*balEduFund),1)
								$lastRow.find("td:eq(79)").html(numberWithCommas(Math.round(lumpsum8percnt)));
							}
							else{
								lumpsum8percnt=0;
								$lastRow.find("td:eq(79)").html(numberWithCommas(Math.round(lumpsum8percnt)));
							}
							
						}
						
						}
					
				}
				
			}
			
		}
	}
		
		
	
}



});
}


var count=1;
function createReportChildRows(){
	//var new_row ='<tr><td colspan="7">Name of Child</td><td colspan="3" id="childName" name=""></td></tr><tr><td colspan="7">Age of Child</td><td colspan="3" id="childAge"></td> </tr> <tr><td colspan="7">Relationship</td><td colspan="3" id="childRelation"></td></tr><tr><td colspan="7">Tertiary Age</td><td colspan="3" id="tritoryAge"></td></tr><tr><td colspan="7">Name of University</td><td colspan="3" id="nameofUniv"></td></tr><tr><td colspan="7">Annual Education cost</td><td colspan="3" id="annlEduCost"></td></tr><tr><td colspan="7">No. of yrs of Studies</td><td colspan="3" id="noOfYrsStu"></td></tr><tr><td colspan="7">Inflation rate (education)</td><td colspan="3" id="InfRate"></td></tr>';
	/*var new_row ='<tr><td colspan="7">Name of Child</td><td colspan="3" id="childName" name=""><input type="text" name="childName"></td><br><td colspan="7">Age of Child</td><td colspan="3" id="childAge"></td><br><td colspan="7">Relationship</td><td colspan="3" id="childRelation">Son</td></br><td colspan="7">Tertiary Age</td><td colspan="3" id="tritoryAge"></td></br><td colspan="7">Name of University</td><td colspan="3" id="nameofUniv"></td><br><td colspan="7">Annual Education cost</td><td colspan="3" id="annlEduCost"></td><br><td colspan="7">No. of yrs of Studies</td><td colspan="3" id="noOfYrsStu"></td><br><td colspan="7">Inflation rate (education)</td><td colspan="3" id="InfRate"></td></tr>';
	$('#childDetailsRepotTbl').append(new_row);*/
	/*$("#childDetailsRepotTbl").append( '<tbody style="margin-left:10px;">'+
			  '<tr><td colspan="7">Name of Child</td><td colspan="3" id="childName" name="childName"></td></tr><tr><td colspan="7">Age of Child</td><td colspan="3" id="childAge"></td> </tr>' +
			  '<tr><td colspan="7">Relationship</td><td colspan="3" id="childRelation"></td></tr><tr><td colspan="7">Tertiary Age</td><td colspan="3" id="tritoryAge"></td></tr>' +
			  '<tr><td colspan="7">Name of University</td><td colspan="3" id="nameofUniv"></td></tr><tr><td colspan="7">Annual Education cost</td><td colspan="3" id="annlEduCost"></td></tr>'+
			  '<tr><td colspan="7">No. of yrs of Studies</td><td colspan="3" id="noOfYrsStu"></td></tr><tr><td colspan="7">Inflation rate (education)</td><td colspan="3" id="InfRate"></td></tr>' +
			  '</tbody><thead><tr><th scope="col" colspan="10" style="background: #6578a3;color: #ffffff;"><div style="text-align:center;">Projection of Cost of Education</div></th></tr> </thead><tbody>'+
			  '<tr style="color: #ffffff;background:#a7abb3;"><th>Total Cost of Education</th> <th></th><th>Inflation Factor</th><th></th><th>Total Cost of Education</th><th></th> '+
			  '<th>Current Education Fund provided</th><th></th><th>Balance of Education Fund needed</th></tr><tr><td></td><td>*</td><td></td><td>=</td><td></td><td>-</td><td></td><td>=</td> <td></td> </tr>'+
			  '</tbody><thead><tr><th scope="col" colspan="10" style="background: #6578a3;color: #ffffff;"><div style="text-align:center;">Calculation of Funds to Accumulate</div></th></tr>'+
			  '</thead><tbody><tr style="color: #ffffff;background:#a7abb3;"><th colspan="2">Based on</th> <th colspan="2">5%</th><th colspan="2">6%</th> <th colspan="2">7%</th>'+
			  '<th>8%</th></tr><tr><td colspan="2">Annual</td><td colspan="2"></td><td colspan="2"></td><td colspan="2"></td><td>0</td></tr>'+
			  '<tr><td colspan="2">Lump Sum</td><td colspan="2"></td><td colspan="2"></td><td colspan="2"></td><td></td></tr></tbody><tr>');*/
			 
			  $("#childDetailsRepotTbl").append( '<tr id="row' + count + '"style="display: block;background-color: #e8e2e2;border-bottom: 2px solid #a7abb3;"><th><span style="text-align: center;padding-left: 570px;"> Child Education Planning Analysis </span></th>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Name of Child</td><td style="padding-left: 85px;border-top:none" id="childName" name=""></td></div>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Age of Child</td><td  style="padding-left: 100px;border-top:none" id="childAge"></td> </div>' +
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Relationship</td><td  style="padding-left: 100px;border-top:none" id="childRelation"></td></div>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Tertiary Age</td><td  style="padding-left: 102px;border-top:none" id="tritoryAge"></td></div>' +
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Name of University</td><td style="padding-left: 60px;border-top:none" id="nameofUniv"></td></div>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Annual Education cost</td><td style="padding-left: 37px;border-top:none" id="annlEduCost"></td></div>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">No. of yrs of Studies</td><td style="padding-left: 50px;border-top:none" id="noOfYrsStu"></td></div>'+
			  '<div class=""><td class="break"  style="padding-left: 600px;border-top:none">Inflation rate (education)</td><td style="padding-left: 25px;border-top:none" id="InfRate"></td></div>' +
			 
			  '<div class=""><td  class="break" style="color: #ffffff;background:#6578a3;width:200px;border:none"><div>&nbsp;</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;border:none"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;border:none"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:150px;border:none"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:250px;border:none"><div>Projection of Cost of Education</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;border:none"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;border:none"><div></div> </td></div> '+
			  '<div class=""><td   style="color: #ffffff;background:#6578a3;width:200px;border:none"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:100px;border:none"><div></div> </td> </div>'+
			  
			  '<div class=""><td  class="break" style="color: #ffffff;background:#a7abb3;"><div>Total Cost of Education</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:150px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>Inflation Factor</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:150px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>Total Cost of Education</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:135px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>Current Education Fund provided</div> </td></div> '+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:100px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:235px;"><div>Balance of Education Fund needed</div> </td> </div>'+
			  
			  '<div class=""><td  style="background:#e8e2e2;width:200px;" class="break"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;"><div>*</div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:250px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;"><div></div> =</td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:280px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;"><div></div> - </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:350px;text-align: center;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;"><div></div> = </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:280px;text-align: center;"><div></div> </td> </div>'+
			  
			  '<div class=""><td  class="break" style="color: #ffffff;background:#6578a3;width:200px;"><div>&nbsp;</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:150px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:350px;"><div>Calculation of Funds to Accumulate</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;"><div></div> </td></div> '+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:200px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#6578a3;width:100px;"><div></div> </td> </div>'+
			  
			  '<div class=""><td  class="break" style="color: #ffffff;background:#a7abb3;"><div>Based On</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:270px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>5%</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:250px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>6%</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:300px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>7%</div> </td></div> '+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:300px;"><div> </div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;"><div>8%</div> </td> </div>'+
			  '<div class=""><td  style="color: #ffffff;background:#a7abb3;width:100px;"><div> </div> </td> </div>'+
			  
			  '<div class=""><td  class="break" style="background:#e8e2e2;"><div>Annual</div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:270px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:50px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:250px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:50px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:270px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:50px;text-align: center;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:200px;"><div></div>  </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:230px;text-align: center;"><div></div> </td> </div>'+
			  
			  '<div class=""><td  class="break" style="background:#e8e2e2;"><div>Lump Sum</div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:250px;text-align: center;"><div> &nbsp;</div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:50px;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:250px;text-align: center;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:50px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:270px;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:50px;text-align: center;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;text-align: center;width:265px;"><div></div></td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:100px;text-align: center;"><div></div> </td> </div>'+
			  '<div class=""><td  style="background:#e8e2e2;width:60px;text-align: center;"><div></div> </td> </div>'+
			  '</tr>');
	count++;
}







$("#childEdupdfPrint").click(function (){ 
	 
	
	var rl = $('#childDetailsRepotTbl tbody tr:visible').length;
	if(rl == 0) {
		alert("No data to export")
		return false;
	}
	 
	var childparticularsdivId = 'pdfContent';
	var pl ="portrait";  // landscape     portrait
	var fileSave ="Child Education Analysis";
	
	 
	var childscreentittle =""; //Children Particulars
	var screentittlefootername = "Child Education Analysis - Report";

	var rowCount = $("#childDetailsRepotTbl tbody").find("tr").length;
	var childtblrowArr = [];
	var jsonObject =[];
	var jsonObjFrmt=[];
	if(rowCount >0){
		$('#childDetailsRepotTbl tbody').find('tr').each(function(){
			var tblerowid= $(this).attr('id');
			childtblrowArr.push(tblerowid);
		}); 
		for(var childr=0;childr<childtblrowArr.length;childr++) {		
			var rowid = childtblrowArr [childr];
			if(childr == 0){
				jsonObject.push({"key":"Image","value":rowid,"Title":childscreentittle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""});
				}
			else{
					jsonObject.push({"key":"Image","value":rowid,"Title":childscreentittle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":"yes"});
				}
		}
		

	}
console.log(jsonObject)
	/*var jsonObject = 
	    [{"key":"Image","value":childparticularsdivId,"Title":childscreentittle,"TitleFooter":screentittlefootername,"header":"","pdfaddnewPage":""}
	     
         ];*/
	
	var jsonObj = 
	    [{
				portraitlandscape: pl, 
				fileSave:fileSave 
	    }]
		
	var JsonData={"jsobj":jsonObj} // convert jsonObjecy
	var jsonArray=[];
	jsonArray.push(JSON.stringify(JsonData));// convert jsonArray
	var objArrayfilename = JSON.parse(jsonArray); // parse jsonArray to variable(objArray)
	// $("#Spousedtlstab").attr('checked', true).trigger('click');
	 showLoader();	
	 setTimeout(function(){
		 h2pcompfun(jsonObject,objArrayfilename); //function to start print pdf
	 },100);
	 
});
