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
				<!-- <li><button id="networthpdfPrint" class="btn btn-info">Pdf</button></li> -->
					<li><button type="button" id="networthpdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button></li>
					 
				</ul>
			
			</div>
		</nav>
	</header>
</section>
<aside>
	<nav class="rad-sidebar rad-nav-min">
		
	</nav>
</aside>
<main>
	<section>
		<div class="rad-body-wrapper rad-nav-min">
			<div class="container-fluid">
				<header class="rad-page-title">
					<!-- <span>Income and Expenses</br>(Cash Flow Analysis)</span> -->
					<span style="text-align:center;"> Net Worth Analysis </span>
						<div id="pdfContent">
						<div class="row">
				 
				<div class="col-lg-8 col-lg-8" style="width:98.666667%" >
				
				
            <div class="table-responsive" id='genPdfNwAnalysisAsset'>
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                <tr>
							<th colspan="12" style="color: #ffffff;"><div style="text-align:center;">Your Assets</div></th>  
						</tr>
                  <tr style="background:#6578a3;">
                  <th colspan="2"></th>
                    <th style="color: #ffffff;"colspan="2">Self</th>
                   
                    <th style="color: #ffffff;"colspan="2">Spouse</th>
                    <th style="color: #ffffff;"colspan="2">Joint</th>
                    <th style="color: #ffffff;">Total</th>
                    <th style="color: #ffffff;">Liability</th>
                    <th style="color: #ffffff;">Net Worth</th>
                    <th style="color: #ffffff;">% of</th>
                  </tr>
                  <tr>
                  <th colspan="2" style="color: #ffffff;">Cash/Cash Equivalents</th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th id="txtfldTotalCashAssetId"> </th>
                 
                 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">cash</td>
                    <td colspan="2" id="txtfldSelfCashId"> </td>
                    <td colspan="2" id="txtfldSpouseCashId"> </td>
                    <td colspan="2" id="txtfldFamilyCashId"> </td>
                    <td id="txtfldTotalCashAssetTotId"> </td>
                    <td id="txtfldTotalCashLiabId"> </td>
                    <td id="txtfldCashNetworthId"> </td>
                    <td id="txtfldTotalCashAssettId"> </td>
                    
                  </tr>
                  <tr>
                    <td colspan="2">SRS</td>
                    <td colspan="2" id="txtfldCashSelfSRSId"> </td>
                    <td colspan="2" id="txtfldCasstSPSSRSId"> </td>
                    <td colspan="2" id="txtfldCasstSRSFamilyId"> </td>
                    <td id="txtfldTotalSRSAssetId"> </td>
                    <td id="txtfldTotalSRSLiabId"> </td>
                    <td id="txtfldSRSNetWorthId"> </td>
                    <td id="txtfldTotalSRSAssettId"> </td>
                    
                  </tr>
                   <thead style="background:#6578a3;">
                  <tr>
                  <th style="color: #ffffff;">Investment Assets</th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th></th>
                  <th id="txtfldInvestmentAssettTotId"> </th>
                  
                  </tr>
                  </thead>
                  <tr>
                  <td colspan="2">Insurance Cash Values</td>
                  <th colspan="2" id="txtfldInsCashValSelfId"> </th>
                  <th colspan="2" id="txtfldInsCashValSpouseId"> </th>
                  <th colspan="2" id="txtfldInsCashValFamilyId"> </th>
                  <th id="txtfldInsTotalAssetId"> </th>
                  <th id="txtfldInsTotalLiabId"> </th>
                  <th id="txtfldInsNetWorthId"> </th>
                  <th id="txtfldInstotalAssetSSFassetId"> </th>
                   
                  </tr>
                  <tr>
                  <td colspan="2">Bonds</td>
                    <td colspan="2" id="txtfldInsBondsSelfId"> </td>
                    <td colspan="2" id="txtfldInsBondsSpouseId"> </td>
                    <td colspan="2" id="txtfldInsBondsFamilyId"> </td>
                    <td id="txtfldInsBondsTotalAssetId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldInsBondsNetWorthId"> </td>
                    <td id="txtfldInvBondTotalAssetTotSSFassetId"> </td>
                    
                  </tr>
                  <tr>
                  <td colspan="2">Unit Trust , ILPs</td>
                    <td colspan="2" id="txtfldInvIlputSelfId"> </td>
                    <td colspan="2" id="txtfldInvIlputSpouseId"> </td>
                    <td colspan="2" id="txtfldInvIlputFamilyId"> </td>
                    <td id="txtfldInvIlputAssetId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldInvIlputNetWorthId"> </td>
                    <td id="txtfldInvIlputAssetTotSSFassetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Shares</td>
                    <td colspan="2" id="txtfldInvSharesSelfId"> </td>
                    <td colspan="2" id="txtfldInvSharesSpouseId"> </td>
                    <td colspan="2" id="txtfldInvSharesFamilyId"> </td>
                    <td id="txtfldInvSharesAssetId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldInvSharesNetWorthId"> </td>
                    <td id="txtfldInvSharesAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Other Investments</td>
                    <td colspan="2" id="txtfldInvOtherSelfId"> </td>
                    <td colspan="2" id="txtfldInvOtherSpouseId"> </td>
                    <td colspan="2" id="txtfldInvOtherFamilyId"> </td>
                    <td id="txtfldInvOtherAssetId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldInvOtherNetWorthId"> </td>
                    <td id="txtfldInvOtherAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Investments Properties</td>
                    <td colspan="2" id="txtfldInvPropSelfId"> </td>
                    <td colspan="2" id="txtfldInvPropSpouseId"> </td>
                    <td colspan="2" id="txtfldInvPropFamilyId"> </td>
                    <td id="txtfldTotalInvPropAssetId"> </td>
                    <td id="txtfldInvPropLiabId"> </td>
                    <td id="txtfldInvPropNetWorthId"> </td>
                    <td id="txtfldTotalInvPropAssetTotSSFAssetId"> </td>
                  </tr>
                  <thead style="background:#6578a3;">
                  <tr>
                  <th colspan="2" style="color: #ffffff;">CPF</th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th id="txtfldCpfOASAMASSFAssetId"> </th>
                  </tr>
                  </thead>
                  <tr>
                  <td colspan="2">Ordinary</td>
                    <td colspan="2" id="txtfldCPFOaSelfId"> </td>
                    <td colspan="2" id="txtfldCPFOaSpouseId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldCPFOaTotalId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldCPFOaTotalNetId"> </td>
                    <td id="txtfldCPFOaTotalTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Special</td>
                    <td colspan="2" id="txtfldCPFSaSelfId"> </td>
                    <td colspan="2" id="txtfldCPFSaSpouseId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldCPFSaTotalId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldCPFSaTotalSpeId"> </td>
                    <td id="txtfldCPFSaTotalTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">MediSave</td>
                    <td colspan="2" id="txtfldCPFMASelfId"> </td>
                    <td colspan="2" id="txtfldCPFMASpouseId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldCPFMATotalId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldCPFMATotalMediId"> </td>
                    <td id="txtfldCPFMATotalTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Retirement</td>
                    <td colspan="2" id="txtfldCPFRASelfId"> </td>
                    <td colspan="2" id="txtfldCPFRASpouseId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldCPFRATotalId"> </td>
                    <td>-N/A-</td>
                    <td id="txtfldCPFRATotalMediId"> </td>
                    <td id="txtfldCPFRATotalTotSSFAssetId"> </td>
                  </tr>
                  <thead style="background:#6578a3;">
                  <tr>
                  <th colspan="2" style="color: #ffffff;">Other Assets</th>
	                  <th colspan="2"></th>
	                  <th colspan="2"></th>
	                  <th colspan="2"></th>
	                  <th></th>
	                  <th></th>
	                  <th></th>
	                  <th id="txtfldTotalOthersAssetTotSSFAssetId"> </th>
                  </tr>
                  </thead>
                  <tr>
                  <td colspan="2">Vehicles</td>
                    <td colspan="2">-N/A-</td>
                    <td colspan="2">-N/A-</td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldTotalVehiAssetId"> </td>
                    <td id="txtfldTotalVehiLiabId"> </td>
                    <td id="txtfldVehicleNetWorthId"> </td>
                    <td id="txtfldTotalVehiAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Personal Property (Residential)</td>
                  	<td colspan="2" id="txtfldSelfProResTotalId"> </td>
                    <td colspan="2" id="txtfldSpousePropResTotalId"> </td>
                    <td colspan="2" id="txtfldJointPropResTotalId"> </td>
                    <td id="txtfldTotalResiAssetId"> </td>
                    <td id="txtfldTotalResiLiabId"> </td>
                    <td id="txtfldResiPropNetWorthId"> </td>
                    <td id="txtfldTotalResiAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Personal Items</td>
                    <td colspan="2" id="txtfldOthasstSelfPersId"> </td>
                    <td colspan="2" id="txtfldOthasstSpousePersId"> </td>
                    <td colspan="2" id="txtfldOthasstJointPersId"> </td>
                    <td id="txtfldTotalPersonalAssetsId"> </td>
                    <td id="txtfldTotalPersonalLiabId"> </td>
                    <td id="txtfldPersonalItemNetWorthId"> </td>
                    <td id="txtfldTotalPersonalAssetsTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Club Ownership</td>
                  	<td colspan="2" id="txtfldOthasstSelfClubId"> </td>
                    <td colspan="2" id="txtfldOthasstSpouseClubId"> </td>
                    <td colspan="2" id="txtfldOthasstJointClubId"> </td>
                    <td id="txtfldTotalClubAssetId"> </td>
                    <td id="txtfldTotalClubLiabId"> </td>
                    <td id="txtfldClubNetWorthId"> </td>
                    <td id="txtfldTotalClubAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Business Ownership</td>
                  	<td colspan="2" id="txtfldOthasstSelfBusiId"> </td>
                    <td colspan="2" id="txtfldOthasstSpouseBusiId"> </td>
                    <td colspan="2" id="txtfldOthasstJointBusiId"> </td>
                    <td id="txtfldTotalBusiAssetId"> </td>
                    <td id="txtfldTotalBusiLiabId"> </td>
                    <td id="txtfldBusiNetWorthId"> </td>
                    <td id="txtfldTotalBusiAssetTotSSFAssetId"> </td>
                  </tr>
                  <tr>
                  <td colspan="2">Others Assets</td>
                  	<td colspan="2" id="txtfldOthasstSelfOthId"> </td>
                    <td colspan="2" id="txtfldOthasstSpouseOthId"> </td>
                    <td colspan="2" id="txtfldOthasstJointOthId"> </td>
                    <td id="txtfldTotalOtherAssetId"> </td>
                    <td id="txtfldTotalOtherassLiabId"> </td>
                    <td id="txtfldOtherassNetWorthId"> </td>
                    <td id="txtfldTotalOtherAssetTotSSFAssetId"> </td>
                  </tr>
                  
                  <tr>
                  <td colspan="2">Total Assets</td>
                  	<td colspan="2" id="txtfldTotalSelfAssetId"> </td>
                    <td colspan="2" id="txtfldTotalSpouseAssetId"> </td>
                    <td colspan="2" id="txtfldTotalFamilyAssetId"> </td>
                    <td id="txtfldTotalSsfAssetId"> </td>
                    <td id="txtfldTotalLiabAssetId"> </td>
                    <td id="txtfldTotalNWAssetId"> </td>
                    <td id="txtfldTotalAssetAssetId"> </td>
                  </tr>
                  
                  
                  
                </tbody>
              </table>
              <div class="clearspace40"></div>
              <div class="clearspace40"></div>
            </div>
            
            <div class="table-responsive" style="margin-top:15px" id='genPdfNwAnalysisLiablty'>
              <table class="table table-striped">
                <thead class="thead-inverse thead-inverse flat-theme teal rad-logo-container" style="float:none;background: #6578a3;">
                <tr>
							<th colspan="12" style="color: #ffffff;"><div style="text-align:center;">Liabilities</div></th>  
						</tr>
                  <tr style="background:#6578a3;">
                    <th colspan="2"></th>
                    <th style="color: #ffffff;"colspan="2">Self</th>
                    <th style="color: #ffffff;"colspan="2">Spouse</th>
                    <th style="color: #ffffff;" colspan="2">Joint</th>
                    <th style="color: #ffffff;">Total</th>
                    <th style="color: #ffffff;">% of</th>
                  </tr>
                  <tr>
                  <th colspan="2" style="color: #ffffff;">Short Term Liabilities</th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th id="txtfldTotalOverDraftLiabTotSSFLiabShortloadLiabId"> </th>
                  </tr>
                </thead>
                <tr>
                <td colspan="2">Overdraft</td>
                	<td colspan="2" id="txtfldLiabSelfOverDraftId"> </td>
                    <td colspan="2" id="txtfldLiabpsOverDraftId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldTotalOverDraftLiabId"> </td>
                    <td id="txtfldTotalOverDraftLiabSSFLiabId"> </td>
                </tr>
                <tr>
                <td colspan="2">Short term loans</td>
                	<td colspan="2" id="txtfldLiabSelfShortLoanId">3</td>
                    <td colspan="2" id="txtfldLiabSpsShortLoanId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldTotalShortLoadLiabId"> </td>
                    <td id="txtfldTotalShortLoadLiabSSFLiabId"> </td>
                </tr>
                <tr>
                <td colspan="2">Taxes</td>
                	<td colspan="2" id="txtfldLiabSelfTaxesId"> </td>
                    <td colspan="2" id="txtfldLiabSpsTaxesId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldTotalTaxLiabId"> </td>
                    <td id="txtfldTotalTaxLiabSSFLiabId"> </td>
                </tr>
                <tr>
                <td colspan="2">Others</td>
                	<td colspan="2" id="txtfldLiabSelfOthersId"> </td>
                    <td colspan="2" id="txtfldLiabSpsOthersId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldTotalOtherLiabId"> </td>
                    <td id="txtfldTotalOtherLiabSSFLiabId"> </td>
                </tr>
                <thead style="background: #6578a3;">
                <tr>
                <th style="color: #ffffff;" colspan="2">Other Liabilities</th>
                <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th id="txtfldOtherLiabilitiesTotalId"> </th>
                </tr>
                </thead>
                <tr>
                <td colspan="2">Life Insurance Loans</td>
                    <td colspan="2" id="txtfldInsOsvalSelfId"> </td>
                    <td colspan="2" id="txtfldInsOsvalSpouseId"> </td>
                    <td colspan="2">-N/A-</td>
                    <td id="txtfldInsTotalAssettId"> </td>
                    <td id="txtfldInsTotalAssettSSFLiabId"> </td>
                </tr>
                <tr>
                <td colspan="2">Loans on Other Asset</td>
                    <td colspan="2">-N/A-</td>
                    <td colspan="2">-N/A-</td>
                    <td colspan="2" id="txtfldLoansOnOthassetId"> </td>
                    <td id="txtfldLoansOnOthassetSId"> </td>
                    <td id="txtfldLoansOnOthassetperId"> </td>
                </tr>
                <tr>
                <td colspan="2">Vehicle Financing</td>
                 	<td colspan="2" >-N/A- </td>
                    <td colspan="2">-N/A-</td>
                    <td colspan="2" id="txtfldTotalVehiLiabFinancId"> </td>
                    <td id="txtfldTotalVehiLiabFinancSId"> </td>
                    <td id="txtfldTotalVehiLiabFinancSSFLiabId">3</td>
                </tr>
                <thead style="background: #6578a3;">
                <tr>
                <th style="color: #ffffff;" colspan="2">Long Term Liabilities</th>
                  <th colspan="2" ></th>
                  <th colspan="2"></th>
                  <th colspan="2"></th>
                  <th></th>
                  <th id="txtfldTotalPersonalAssetsSSFLiabPropLiabId"> </th>
                </tr>
                </thead>
                <tr>
                <td colspan="2">Mortgage on Residential Property</td>
                 	<td colspan="2" id="txtfldResiProLiabSelfId"> </td>
                    <td colspan="2" id="txtfldResiProLiabSpouseId"> </td>
                    <td colspan="2" id="txtfldResiProLiabFamilyId"> </td>
                    <td id="txtfldTotalPersonalAssetsResiId"> </td>
                    <td id="txtfldTotalPersonalAssetsResiSSFLiabId"> </td>
                </tr>
                <tr>
                <td colspan="2">Mortgage on Residential Property</td>
                    <td colspan="2" id="txtfldInvPropLiabSelfId"> </td>
                    <td colspan="2" id="txtfldInvPropLiabSpouseId"> </td>
                    <td colspan="2" id="txtfldInvPropLiabFamilyId"> </td>
                    <td id="txtfldInvPropLiabResiId"> </td>
                    <td id="txtfldInvPropLiabResiSSFLiabId"> </td>
                </tr>
                
                <tr>
                <td colspan="2"> Total Liabilities</td>
                    <td colspan="2" id="txtfldTotSelfLiabId"> </td>
                    <td colspan="2" id="txtfldTotSpouseLiabId"> </td>
                    <td colspan="2" id="txtfldTotFamilyLiabId"> </td>
                    <td id="txtfldTTotalSSFLiabId"> </td>
                    <td id="txtfldTTotalSSFLiabSSFLiabId"> </td>
                </tr>
                
                
                
             </table>
             <div class="clearspace40"></div>
             <div class="clearspace40"></div>
          </div>
          
          <div id='genPdfNwAnalysisgrossValofAssetSection'><!-- aravindh -->
          <div class="clearspace40"></div>
          <div class="table-responsive" id='genPdfNwAnalysisgrossValofAsset'>
          <span style="text-align:center;">Gross Values of Asset</span>
          <table id="grossValofAssetTablereport" style="border: 2px solid ;margin-left:326px; width:50%">
          <thead>
			  <tr style="border: 2px solid ">
			    <th style="border: 2px solid ;text-align: center;">Asset/Liab</th>
			    <th style="border: 2px solid ;text-align: center;">Gross Amount</th> 
			    <th style="border: 2px solid ;text-align: center;">Net Amount</th>
			    <th style="border: 2px solid ;text-align: center;">PRCNT</th>
			  </tr>
			  <tr>
			  <th style="border: 2px solid ;text-align: center;">ASSET</th>
			  <th style="border: 2px solid ;text-align: center;"></th>
			  <th style="border: 2px solid ;text-align: center;"></th>
			  <th style="border: 2px solid ;text-align: center;"></th>
			  </tr>
			  </thead>
			  
			  <tbody></tbody> 
			  
			  <!-- <tr>
			    <td style="border: 1px solid black">Cash Equ</td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			  </tr>
			  <tr>
			    <td style="border: 1px solid black">Investment Asset</td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			  </tr>
			  <tr>
			    <td style="border: 1px solid black">CPF</td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			    <td style="border: 1px solid black"></td>
			  </tr>
			  <tr>
			  <td style="border: 1px solid black">Personal Asset</td>
			  <td style="border: 1px solid black"></td>
			  <td style="border: 1px solid black"></td>
			  <td style="border: 1px solid black"></td>
			  </tr> -->
			</table>
<div class="clearspace40"></div>
<div class="clearspace40"></div>
</div>
<legend class="control-label" style="color:#50907C;font-weight: bold;padding-left: 45%;border-bottom: none;font-size: 15px;">Gross value of Asset</legend>
			 <div style="width:auto;padding-left: 1%;" id='genPdfNwAnalysisgrossValofAssetChart'>
                 <div  class="chart-container">
                 <div id="pieChartGrossValAsstNoDataFound" class="" style="display: none;color: red;margin-left: 25rem;font-size: 25px;"; >
                 No Data Found
                 </div>
                 <div id="pieChartGrossValAsst" style="height: 305px; width: 610px;margin-left: 17%;">
               
                 </div>
                 
             
                 
                 <label style="margin-left: 10%;">Chart type :</label>
	            <select id="" onchange=""> 
	                <option value="Pie">Pie Chart</option>
	               <!--  <option value="Doughnut">Doughnut chart</option> -->
	            </select>
	            </div>
             </div>
             <div class="clearspace40"></div>
             </div><!-- aravindh -->
<div class="chart">
  
  
  <div class="clearspace40"></div>
  <div class="clearspace40"></div>
  </div>

<div id="genPdfNwAnalysiscategoriesofLiabilSection"><!-- aravindh -->
<div class="clearspace40"></div>
<div class="" id="genPdfNwAnalysiscategoriesofLiabil"> 
<span style="text-align:center;">Categories of Liabilities</span>
<table id="categoriesofLiabilitiesTablereport" style="border: 2px solid ;margin-left:326px; width:50%; margin-top: 24px;">
<thead>
  <tr style="border: 2px solid ">
    <th style="border: 2px solid;text-align: center; ">Asset/Liab</th>
    <th style="border: 2px solid;text-align: center; ">Gross Amount</th> 
    <th style="border: 2px solid;text-align: center; ">PRCNT</th>
  </tr>
  <tr>
  <th style="border: 2px solid;text-align: center; ">LIABILITY</th>
  <th style="border: 2px solid;text-align: center; "></th>
  <th style="border: 2px solid;text-align: center;"></th>
  </tr>
  </thead>
  <tbody>
  <!-- <tr>
    <td style="border: 1px solid black">Short Term Liab</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
    
  </tr>
  <tr>
    <td style="border: 1px solid black">Other Liab</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
  </tr>
   <tr>
    <td style="border: 1px solid black">Long Term Liab</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
   
  </tr> -->
  </tbody> 
  
  
  </table>
  <div class="clearspace40"></div>
  <div class="clearspace40"></div>
  </div>
  
  <legend class="control-label" style="color:#50907C;font-weight: bold;padding-left: 45%;border-bottom: none;font-size: 15px;">Categories of Liabilities </legend>
			 <div style="width:auto;padding-left: 1%;" id="genPdfNwAnalysiscategoriesofLiabilchart">
                 <div  class="chart-container">
                 <div id="pieChartCatgLiabNoDataFound" class="" style="display: none;color: red;margin-left: 25rem;font-size: 25px;"; >
                 No Data Found
                 </div>
                 <div id="pieChartCatgLiab" style="height: 305px; width: 610px;margin-left: 17%;">
               
                 </div>
                 
             
                 
                 <label style="margin-left: 10%;">Chart type :</label>
	            <select id="" onchange=""> 
	                <option value="Pie">Pie Chart</option>
	                <!-- <option value="Doughnut">Doughnut chart</option> -->
	            </select>
	            </div>
             </div>
              <div class="clearspace40"></div>
            </div> <!-- aravindh -->
  <div class="container">
  
  <div class="clearspace40"></div>
  <div class="clearspace40"></div>
  </div>
  <div id="genPdfNwAnalysisNetValAsstSection"><!-- aravindh -->
  <div class="table-responsive" id='genPdfNwAnalysisNetValAsst'>
  <span style="text-align:center;">Net Values of Asset</span>
   <table id="netValofAssetTablereport" style="border: 2px solid;margin-left:326px; width:50%; margin-top: 24px;">
   <thead>
  <tr style="border: 2px solid ">
    <th style="border: 2px solid;text-align: center; ">Asset/Liab</th>
    <th style="border: 2px solid;text-align: center; ">Gross Amount</th> 
    <th style="border: 2px solid;text-align: center; ">Net Amount</th>
    <th style="border: 2px solid;text-align: center; ">PRCNT</th>
  </tr>
  <tr>
  <th style="border: 2px solidp;text-align: center;">ASSET</th>
  <th style="border: 2px solid;text-align: center;"></th>
  <th style="border: 2px solid;text-align: center;"></th>
  <th style="border: 2px solid;text-align: center;"></th>
  </tr>
  </thead>
  <tbody></tbody> 
  <!-- 
  <tr>
    <td style="border: 1px solid black">Cash Equ</td>
    <td style="border: 1px solid black">1220</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
  </tr>
  <tr>
    <td style="border: 1px solid black">Investment Asset</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
  </tr>
  <tr>
    <td style="border: 1px solid black">CPF</td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
    <td style="border: 1px solid black"></td>
  </tr>
  <tr>
  <td style="border: 1px solid black">Personal Asset</td>
  <td style="border: 1px solid black"></td>
  <td style="border: 1px solid black"></td>
  <td style="border: 1px solid black"></td>
  </tr> -->
</table>
<div class="clearspace40"></div>
<div class="clearspace40"></div>
</div>

 <legend class="control-label" style="color:#50907C;font-weight: bold;padding-left: 45%;border-bottom: none;font-size: 15px;">Net value of Asset</legend>
			 <div style="width:auto;padding-left: 1%;" id='genPdfNwAnalysisNetValAsstchart'>
                 <div  class="chart-container">
                 <div id="pieChartNetValAsstNoDataFound" class="" style="display: none;color: red;margin-left: 25rem;font-size: 25px;"; >
                 No Data Found
                 </div>
                 <div id="pieChartNetValAsst" style="height: 305px; width: 610px;margin-left: 17%;">
               
                 </div>
                 
             
                 
                 <label style="margin-left: 10%;">Chart type :</label>
	            <select id="" onchange="loadDynamicChartNetValAsst();"> 
	                <option value="Pie">Pie Chart</option>
	                <!-- <option value="Doughnut">Doughnut chart</option> -->
	            </select>
	            </div>
             </div>
            </div> <!-- aravindh -->
<div class="asset">

<div class="clearspace40"></div>
<div class="clearspace40"></div>
</div>
          </div>
          </div>
        </div>
      </header>
     </div>
     </div>
     </section>
   </main>
<script type="text/javascript" src="plugins/jsPDF2/reportscript.js?ver=2201.1"></script>  
    <!--  <script src="plugins/fipa/js/cpfdetails.js"></script> -->
    <script src="plugins/fipa/js/fipa.common.js?ver=2201.1"></script>
     <script type="text/javascript" src="plugins/fipa/js/Chart.min.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/hammer.min.js?ver=2201.1"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-zoom.js?ver=2201.1"></script>
    <script type="text/javascript" src="plugins/fipa/js/utils.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/moment.min.js?ver=2201.1"></script>  
    <script type="text/javascript" src="plugins/fipa/js/chartjs-plugin-labels.js?ver=2201.1"></script> 
    <script type="text/javascript" src="plugins/fipa/js/fipa.html2pdf.js?ver=2201.1"></script>
    <script src="plugins/jsPDF2/jspdf.debug.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/jspdf.plugin.autotable.js?ver=2201.1"  type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/html2canvas.min.js?ver=2201.1" type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/rgbcolor.js?ver=2201.1" type="text/javascript"></script>
	<script src="plugins/jsPDF2/StackBlur.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/canvg.js?ver=2201.1" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/d3SvgToPng.js?ver=2201.1" type="text/javascript" ></script> 

 <script>
	 jQuery(document).ready(function() {
		//hideLoader(); 
		parameter_fnaId = "<%=request.getParameter("strFNAId")%>";
		//cashFlowSrch(parameter_fnaId);
	     netWorthAnalysisRptSrch(parameter_fnaId);
		 hideLoader();
	});  
	

	 
	  
</script>
</body>
</html>