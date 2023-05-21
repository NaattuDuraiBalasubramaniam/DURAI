<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.net.URL"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
  <meta charset="UTF-8">
  <title>CodePen - Dashboard</title>
 <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css?ver=2201.1">
<link rel="stylesheet" type="text/css" href="plugins/fipa/css/reportstyle.css?ver=2201.1" />
<link rel="stylesheet" href="plugins/fipa/css/Chart.min.css?ver=2201.1"> 
<link rel="stylesheet" href="plugins/fipa/css/font-awesome.min.css?ver=2201.1"> 	
</head>
<body>
<section>
	<header>
		<nav class="rad-navigation">
			<div class="rad-logo-container rad-nav-min" style="background: #337ab7;">
				<img src="images/fipa_admin_logo.png" alt="FIPA Logo" style="width: 170px;height: 64px;padding: 12px 1px 1px;">
			</div>
			<a href="#" class="rad-logo-hidden"></a>
			<div class="rad-top-nav-container">
				<a href="" class="brand-icon"><i class="fa fa-recycle"></i></a>
				<ul class="pull-right links">
			<!-- 	<li><button id="childEdupdfPrint" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button" id="childEdupdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li>
				</ul>
			
			</div>
		</nav>
	</header>
</section>
<aside>
	<nav class="rad-sidebar rad-nav-min">
		
	</nav>
</aside>
<aside>
	<nav class="rad-sidebar rad-nav-min">
		
	</nav>
</aside>
 <main>
	<section>
		<div class="rad-body-wrapper rad-nav-min">
			<div class="container-fluid">
				<header class="rad-page-title">
					 
					<!-- <span style="text-align:center;"> Child Education Planning Analysis </span> -->
						<div id="pdfContent">
<table class="table table-striped" id="childDetailsRepotTbl" >
  <thead>
    <tr style="background: #6578a3;color: #ffffff;display: block">
      <td style="background: #6578a3;color: #ffffff;"><div style="text-align:center;padding-left: 650px;">Child Education Profile</div></td>
    </tr>
  </thead>
  <tbody style="margin-left:10px;">
    <!-- <tr>
      <td colspan="7">Name of Child</td>
      <td colspan="3" id="childName"></td>
    </tr>
    <tr>
      <td colspan="7">Age of Child</td>
      <td colspan="3" id="childAge"></td>
    </tr>
    <tr>
      <td colspan="7">Relationship</td>
      <td colspan="3" id="childRelation"></td>
    </tr>
    <tr>
      <td colspan="7">Tertiary Age</td>
      <td colspan="3" id="tritoryAge"></td>
    </tr>
    <tr>
      <td colspan="7">Name of University</td>
      <td colspan="3" id="nameofUniv"></td>
    </tr>
    <tr>
      <td colspan="7">Annual Education cost</td>
      <td colspan="3"  id="annlEduCost"></td>
    </tr>
    <tr>
      <td colspan="7">No. of yrs of Studies</td>
      <td colspan="3" id="noOfYrsStu"></td>
    </tr>
    <tr>
      <td colspan="7">Inflation rate (education)</td>
      <td colspan="3" id="InfRate"></td>
    </tr> -->
  <!-- </tbody>
  <thead>
    <tr>
      <th scope="col" colspan="10" style="background: #6578a3;color: #ffffff;"><div style="text-align:center;">Projection of Cost of Education</div></th>
      
    </tr>
  </thead>
  <tr style="color: #ffffff;background:#a7abb3;">
  <th>Total Cost of Education</th>
  <th></th>
  <th>Inflation Factor</th>
  <th></th>
  <th>Total Cost of Education</th>
  <th></th>
  <th>Current Education Fund provided</th>
  <th></th>
  <th>Balance of Education Fund needed</th>
  </tr>
  <tr>
  <td>0</td>
  <td>*</td>
  <td>0</td>
  <td>=</td>
  <td>0</td>
  <td>-</td>
  <td>0</td>
  <td>=</td>
  <td>0</td>
  </tr>
  <thead>
    <tr>
      <th scope="col" colspan="10" style="background: #6578a3;color: #ffffff;"><div style="text-align:center;">Calculation of Funds to Accumulate</div></th>
      
    </tr>
  </thead>
  <tr style="color: #ffffff;background:#a7abb3;">
  <th colspan="2">Based on</th>
  <th colspan="2">5%</th>
  <th colspan="2">6%</th>
  <th colspan="2">7%</th>
  <th>8%</th>
  </tr>
  <tr>
  <td colspan="2">Annual</td>
  <td colspan="2">0</td>
  <td colspan="2">0</td>
  <td colspan="2">0</td>
  <td>0</td>
  </tr>
  <tr>
  <td colspan="2">Lump Sum</td>
  <td colspan="2">0</td>
  <td colspan="2">0</td>
  <td colspan="2">0</td>
  <td>0</td>
  </tr> -->
  </tbody>
</table>



</div>
</header>
</div>
</div>
</section>
</main>
<!-- <main>
	<section>
		<div class="rad-body-wrapper rad-nav-min">
			<div class="container-fluid">
				<header class="rad-page-title">
					 
					<span> Child Education Planning Analysis </span>
						<div id="pdfContent">
				 
				 
				<div class="row">
				 
				
				
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
                  <th></th>
                    <th style="color: #ffffff;text-align:center;" colspan="6">Child Education Profile</th>
                   
                     
                  </tr>
                </thead>
                <tbody>
                 <tr>
                 
                    <td>Name of Child</td>
                    <td id="">12</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td>Age of Child</td>
                    <td id="">23</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td>Relationship</td>
                    
                    <td id="">cmsncm</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Tertiary Age</td>
                    <td id="">b</td>
                    
                  </tr>
                   
                  <tr>
                    <td></td>
                    <td>Name of University</td>
                    <td></td>
                   
                  </tr>
                  <tr>
                    <td></td>
                    <td>Annual Education cost</td>
                    <td id="">h</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td>No. of yrs of Studies</td>
                    <td  id="">43</td>
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td>Inflation rate (education)</td>
                    <td  id="">34</td>
                    
                  </tr>
                  
                
               
               <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                  <tr>
							<th colspan="10" style="color: #ffffff;"><div style="text-align:center;">Projection of Cost of Education</div></th>  
						</tr>
				</thead>		
						<tr>
						<th>Total Cost of Education</th>
						<th>Inflation Factor</th>
						<th>Total Cost of Education</th>
						<th>Current Education Fund provided</th>
						<th>Balance of Education Fund</th>
						<th>needed</th>
						</tr>
               
               </table>
              </div>
               
              
            </div>
           </div>
         </div>
      </header>
	</div>
	</div>
</section>
</main>		 -->		
<script type="text/javascript" src="plugins/jsPDF2/reportscript.js?ver=2201.1"></script>  
    <!--  <script src="plugins/fipa/js/cpfdetails.js"></script> -->
    <script src="plugins/fipa/js/fipa.common.js?ver=2201.1"></script>
   <!--  <script type="text/javascript" src="plugins/fipa/js/Chart.min.js"></script> 
    <script type="text/javascript" src="plugins/fipa/js/hammer.min.js"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-zoom.js"></script>
    <script type="text/javascript" src="plugins/fipa/js/utils.js"></script> 
    <script type="text/javascript" src="plugins/fipa/js/moment.min.js"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-labels.js"></script> 
    <script type="text/javascript" src="plugins/fipa/js/fipa.html2pdf.js"></script> -->
    <script src="plugins/jsPDF2/jspdf.debug.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/jspdf.plugin.autotable.js?ver=2201.1"  type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/html2canvas.min.js?ver=2201.1" type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/rgbcolor.js?ver=2201.1" type="text/javascript"></script>
	<script src="plugins/jsPDF2/StackBlur.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/canvg.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/d3SvgToPng.js?ver=2201.1" type="text/javascript" ></script> 
 <script type="text/javascript" src="plugins/fipa/js/fipa.html2pdf.js?ver=2201.1"></script>
 <script>
	 jQuery(document).ready(function() {
		//hideLoader(); 
		parameter_fnaId = "<%=request.getParameter("strFNAId")%>";
		childFlowSrch(parameter_fnaId);
		 hideLoader();
	});  
	

	  
	  
</script>
</body>
</html>