 

/**
  * common compounds html2pdf/table2pdf  version 1.0
  * released date 30-03-2021 by S.B.Vignesh
  * 
  * 
  * */



//common components pdf print


function h2pcompfun(jsonObject,objArrayfilename,file){

	var pdf;
 
		 pdf = new jsPDF(objArrayfilename.jsobj[0].portraitlandscape,'mm',"a2",true); 
 
	//	 pdf = new jsPDF('p','mm',"a2",true); 
	    pdf.setFont("Calibri");
		pdf.setFontSize(13);
		pdf.page=1; 
 	//new
 	//var NORMAL_FONTSIZE = ['11pt','11pt'];
 	//var HIGHRES_FONTSIZE = ["10pt","7pt"];
 	
 //	function setFonSize(elm,fontsize){ 
 	//		$(elm).find("label").css("font-size",fontsize[0]);
 	//		$(elm).find(".headerlabel").css("font-size",fontsize[1]);
 	//	}
  
    // var $wrapper = document.getElementById('printHtmlPdf');
 	 //  var setFonSizeOfWrapper = setFonSize.bind(null, $wrapper);

 	 //  $("#printHtmlPdf").css("visibility","visible");
		 
 	  html2pdf(pdf,jsonObject,objArrayfilename,file);
	 
} 


function html2pdf(pdf,jsonObject,objArrayfilename,file){
  
	var totallen =jsonObject.length;
	// console.log('totallen  --->',totallen);
	     var jsonobj = jsonObject[0];
		
		if(jsonobj.key == "Image")
		{
		  h2pimage(pdf, jsonObject, jsonobj,totallen,0,objArrayfilename,file);
		}
		else if(jsonobj.key == "Table")
		{
		  h2ptable(pdf, jsonObject, jsonobj,totallen,0,objArrayfilename,file);
		}
	 
	 //h2psavePdf(pdf);  
		 
}


/*function h2pimage(pdf, fullobj, jsonobj, totallen, curind,objArrayfilename,file){
     
		var newind = curind + 1;
	 		html2canvas(document.getElementById(jsonobj.value),
		   			{
		   		scale:1,
		   	 useCORS:true,
			 	 allowTaint:true,
			 	 windowWidth:'100%', 
			 	 windowHeight:'100%', 
			 	 logging:true 
			 	 
		        }).then(function(canvas) {
		        	
		        document.body.appendChild(canvas);
		        
		   	 var img = canvas.toDataURL('image/png'); 
			     
			     var widthT = 330;   
		  	   	 var heightT = 350;
		  	     
		  	   	 var imgData = canvas.toDataURL("image/png", 1.0);
		  	   
			  	   if(jsonobj.pdfaddnewPage.length > 0){
		  	   	       pdf.addPage("a2","portrait"); 
				      }
			  	
			 
			 
			  	
			  	 h2pTitle(pdf,50,30,jsonobj.Title);
			  	 h2pheader(pdf,170,jsonobj);
		  	    
                 pdf.text(180+0,pdf.internal.pageSize.height - 40,"Avallis Financial Pte Ltd");
				 pdf.text(145+0,pdf.internal.pageSize.height-35,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
			     pdf.setFontType(13);
			    
		  	   	     
		  	   if(curind == 8){  
	 			pdf.addImage(imgData,'JPEG',20,40,widthT-8,20);
	 		    }else{
		  	   	 try{
		  	  
		  	     pdf.addImage(imgData,'JPEG',50,45,widthT-10,200); 
		  	     } catch(err) {
		  	 	 
		  	     pdf.addImage(imgData,'png',50,45,widthT-10,200); 
		  	     }
	 		    }
		  	   	 document.body.removeChild(canvas);
		  	 
		  	   
			  if(totallen != newind)
			  {
		        var newidobj = fullobj[newind];
				if(newidobj.key == "Image")
				{
					h2pimage(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
				else if(newidobj.key == "Table")
				{
					h2ptable(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
			  }
			  else {
			        h2psavePdf(pdf,objArrayfilename,jsonobj);  	  
			  }
		});

}*/

function h2pimage(pdf, fullobj, jsonobj, totallen, curind,objArrayfilename,file){
	console.log("jsonobj.value  rpt5 " + jsonobj.value)
		var newind = curind + 1;
		// console.log('curind  --->',curind);//1268
		// console.log(" --------->  newind " + newind );//633
	 		html2canvas(document.getElementById(jsonobj.value),
		   			{
		   		scale:1,
		   	 useCORS:true,
			 	 allowTaint:true,
			 	 windowWidth:'100%', // 1342
			 	 windowHeight:'100%', // 677
			 	 logging:true 
			 	 
		        }).then(function(canvas) {
		        	
		        document.body.appendChild(canvas);
		        
		   	 var img = canvas.toDataURL('image/png'); 
			     
			     var widthT = 330; //pdf.internal.pageSize.width   
		  	   	 var heightT = 350;//pdf.internal.pageSize.height;550
		  	     
		  	   	 var imgData = canvas.toDataURL("image/png", 1.0);
		  	   
			  	   if(jsonobj.pdfaddnewPage.length > 0){
		  	   	       pdf.addPage("a2","portrait"); //pdf.addPage("a2", 'landscape');
				      }
			  	
			  //	 var width = pdf.internal.pageSize.getWidth();
			  //	var height = pdf.internal.pageSize.getHeight();
			  //	console.log("AT#1: width=" + width + ", height=" + height);
			 
			  	
			  	 h2pTitle(pdf,50,30,jsonobj.Title);
			  	 h2pheader(pdf,170,jsonobj);
		  	    // h2pfooter(pdf,0,jsonobj,totallen);
                 pdf.text(180+0,pdf.internal.pageSize.height - 40,"Avallis Financial Pte Ltd");
				 pdf.text(145+0,pdf.internal.pageSize.height-35,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
			     pdf.setFontType(13);
			    
		  	   	     
		  	  // if(curind == 8){  //hard coded values
			     
		  		  if(jsonobj.value === "rpt5") { // for the purpose of changing this value it will set for some low size image so you don't do any thing here
	 			pdf.addImage(imgData,'JPEG',20,40,widthT-8,20);
	 		    }else{
		  	   	 try{
		  	  
		  	     pdf.addImage(imgData,'JPEG',50,45,widthT-10,200); //180 //heightT
		  	     } catch(err) {
		  	 	 
		  	     pdf.addImage(imgData,'png',50,45,widthT-10,200); //180 //heightT
		  	     }
	 		    }
		  	   	 document.body.removeChild(canvas);
		  	 
		  	   
			  if(totallen != newind)
			  {
		        var newidobj = fullobj[newind];
				if(newidobj.key == "Image")
				{
					h2pimage(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
				else if(newidobj.key == "Table")
				{
					h2ptable(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
			  }
			  else {
				 // h2psavePdf(pdf,objArrayfilename);
			        h2psavePdf(pdf,objArrayfilename,jsonobj);  	  
			  }
		});

}
function h2ptable(pdf, fullobj, jsonobj, totallen, curind,objArrayfilename,file){
     
		    var newind = curind + 1;
		   // console.log(" --------->  t " + curind );
			if($("#"+jsonobj.value+" tbody tr:first td:first")){
				 	// pdf.addPage("a2","portrait");	// pdf.addPage("a2", 'landscape'); 
				
					if(jsonobj.pdfaddnewPage.length > 0){
						pdf.addPage("a2", 'landscape');
					} 
					
					h2pTitle(pdf,10,15,jsonobj.Title);
					h2pheader(pdf,260,jsonobj); 
				    //h2pfooter(pdf,80,jsonobj,totallen);
                pdf.text(180+80,pdf.internal.pageSize.height - 40,"Avallis Financial Pte Ltd");
				pdf.text(145+80,pdf.internal.pageSize.height-35,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
				  	
				    h2paddAutoTbl(pdf,20,jsonobj); //arrange the table structure and preparing for print
				 
				     }
				     
			if(totallen != newind)
			  {
		        var newidobj = fullobj[newind];
				if(newidobj.key == "Image")
				{
					h2pimage(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
				else if(newidobj.key == "Table")
				{
					h2ptable(pdf, fullobj, newidobj, totallen, newind,objArrayfilename,file);
				}
			  }
			  else {
				 // h2psavePdf(pdf,objArrayfilename);  
			        h2psavePdf(pdf,objArrayfilename,jsonobj);  		
			  }
		
}


function h2pTitle(doc,hAlign,vAlign,title){ 
	doc.setFontSize(14.04);
	doc.setFontType("bold");
	doc.setTextColor(80,144,124,1);
	doc.text(hAlign,vAlign,title);
	doc.setFontSize(13);
	doc.setFontType("normal");
	doc.setTextColor(0,0,0,1);
};


//vignesh
function h2pheader(doc,LeftAlign,jsonobj){ 
	doc.setFontSize(18);
	doc.setFontType("bold");
	
	doc.text(LeftAlign,14,jsonobj.TitleFooter);   
	doc.setFontSize(13);
	doc.setFontType("normal");
};


function h2pfooter(doc,jsonobj,j,pages){ 
  
	//doc.text(doc.internal.pageSize.width-30,doc.internal.pageSize.height - 10, 'Page ' + doc.page +' / ' + totallen);
	doc.text(doc.internal.pageSize.width-30,doc.internal.pageSize.height - 40, 'Page ' + j +' / ' + pages);
	//doc.text(180+leftAlign,doc.internal.pageSize.height - 10,"Avallis Financial Pte Ltd");
	//doc.text(145+leftAlign,doc.internal.pageSize.height-5,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
	 
	var today=new Date();
 
	doc.text(10,doc.internal.pageSize.height - 40,"Report Printed on : "+ moment(today).format("DD/MM/YYYY HH:mm:ss"));
	doc.text(10,doc.internal.pageSize.height-35,jsonobj.TitleFooter);  
	
	doc.page ++;
};


function h2psavePdf(pdf,objArrayfilename,jsonobj){   
	
	var dte=new Date();  
	var pages = pdf.internal.getNumberOfPages();
	        
	for (let j = 1; j < pages + 1 ; j++) {
		   pdf.setPage(j);
		  // h2pfooter(pdf, j, pages);
		   h2pfooter(pdf,jsonobj,j,pages);
		  // pdf.text(pdf.internal.pageSize.width-30,pdf.internal.pageSize.height - 10, 'Page ' + j +' / ' + pages);
	} 
	 
  var fileName=objArrayfilename.jsobj[0].fileSave+dte.getDate()+(dte.getMonth()+1)+dte.getFullYear()+"_"+dte.getHours()+dte.getMinutes()+dte.getSeconds();
   
  pdf.save(''+fileName+'.pdf');
  hideLoader();

 // $("#rpCashFlwAnlys_Dialog .btn-group").show();
 // $("#rpCashFlwAnlys_Dialog .pdf-hide").show();
}


function h2pcapitalizeWords(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function h2paddAutoTbl(doc,position,jsonobj){
	var col=[],columns =[];
	//var coll;
	var rows = []; 
	
	//col.push(jsonobj.header); // table header can not use here // directly pass the values in (head:)
	 
		//$("#"+jsonobj.value+" tbody tr:visible").each(function(){
		$("#"+jsonobj.value).DataTable().rows().iterator('row', function(context, index)
		{ 
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
				}
 
				if(elem.is("select")){
					data= elem.find('option:selected').html();
					if(data == "--SELECT--"){
						data="";
					} 
					
				}
				/*if(span.is("span")){
					data= span.text();
				}*/
				rowdata.push(data)
				 
			});
			
			rows.push(rowdata);
			 
		}
		);

	 
		  	
	doc.autoTable({
		//startY: doc.lastAutoTable.finalY + 50,
		head:jsonobj.header,
        body:rows,
        theme:'grid',
	    startY:(isEmpty(position)?20:position),  // remove by vignesh reg:-continous table printing required by asik
       // startY: doc.previousAutoTable,
        
        margin:{left:10,right:10,top:30,bottom:50},
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap',cellWidth:'auto'},
        headStyles: {
        	lineWidth: .1,
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 15,
           // lineColor: [255, 0, 0],
            lineColor: [44, 44, 44],
           // lineColor:[255,255,255],
        },
        bodyStyles: { valign: 'top',fontSize:8},
      //  tableWidth: 'auto',
       // columnWidth: 'wrap',
        columnStyles	: {text:{cellWidth:17 }},
       // tableWidth		:'wrap'
       
	});
	 
	
}
 
