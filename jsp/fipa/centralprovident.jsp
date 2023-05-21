<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 <%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<div  class="panel-group">
	<div id="providentdiv" class="accord-content">

<!-- 		<span class="panelHeaderTitle"> Central Provident Fund</span> <br> -->
		<!-- <span class="panelHeaderSubTitle"> Please refer to <a>www.cpf.gov.sg</a>
			for latest contributions rate
		</span> -->
		
		<div class="panel-body">
		<div class="table-responsive" id="cpfBalAnnulDiv">
		<div class="table-responsive" id="cpfTypesDiv">
		
		<div class="" role="group" style="display: block;">
		&nbsp;&nbsp; 
			<button type="button" style="display: none;" class="btn btn-info"  id="btnCpfBalancePrint" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
			
			<!-- <button type="button" class="btn btn-info" id="btnCpfBalanceTablePrint" style="margin-left: 0%;" >
			 						<span>&nbsp;Generate Report&nbsp;</span><i class=""></i></button> -->
			 						
		</div>
		
		
			<%--  <table class="display nowrap">

				<tr valign="middle" class="fipaFldLblText">
					<td rowspan="5">
					
					<img src="images/menuicons/cpfbalc.png" class="pagelefticons" /> 
					 <br/>
						<span>CPF Balance</span>
						
						</td>
					
					<td style="text-decoration: underline; font-weight: bold;">
						Client</td>
				</tr>
				<tr valign="middle"> 
					<td>
					 	<table class="table table-bordered display" style="width:70vw;">
						

							<tr valign="middle" class="even">
								<c:if test="${not empty CPF_ACCTYPES}">
									<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<td class="fipaFldLblText" valign="middle" width="12%">
											<div style="text-align: right;">${acctypes.accType}:</div>
										</td>
										<td valign="middle" width="12%">
										<div class="fld-resp-mm input-group input-group-sm" >
							<span class="input-group-addon">
					               <span class="glyphicon" id="symbolUsd"></span>
					       </span> 
					              <input type="hidden" name="hTxtFldSlfAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					                <input type="hidden" name="hTxtFldSlfPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
								<input type="text" name="txtFldCpfSlf${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd" size="10" />
											</div>
										</td>
									</c:forEach>
								</c:if>
							</tr>
						</table>
						 
					</td>
				</tr>
				
				<tr valign="middle" class="fipaFldLblText">
					<td style="text-decoration: underline; font-weight: bold;">
						Spouse</td> 
				</tr>

				<tr valign="middle" class="even"> 
					<td> 
						<table class="table table-bordered display"  style="width:70vw;" >
							<tr >
								<c:if test="${not empty CPF_ACCTYPES}">
									<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<td class="fipaFldLblText">
											<div style="text-align: right;">${acctypes.accType}:</div>
										</td>
										<td  valign="middle" width="12%"><div class="fld-resp-mm input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									       <input type="hidden"	name="hTxtFldSpsAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
									       <input type="hidden"	name="hTxtFldSpsPkId${acctypes.cpfAcId}" id="hTxtFldSpsPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
									       <input type="text" name="txtFldCpfSps${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control  numbers clsfipaSpouse applyEvntUsd" size="10"/>
											 </div>
										</td>
									</c:forEach>
								</c:if>
							</tr>
						</table>
						 
				</tr>
			</table>  --%>
			
			
			<table class="display nowrap table table-borderless" style="margin-bottom: 0px;">
			<div class="middle-line"></div>
						<tr valign="middle">
							<td colspan="2">
								<table class="dataTable table-bordered display" width="100%" >
								<tr class="even">
										<td class="fipaFldLblText text-left" colspan="2"><b>CPF Opening Balance&nbsp;</b></td>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle" width="12%" style="border-right: 1px solid #34495E;"></td>
										<td class="fipaFldLblText text-left" colspan="2"><b>CPF Annual Contribution&nbsp;</b></td>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle" width="12%"></td>
									</tr>
								<tr class="even">
										<td class="fipaFldLblText text-right">Self&nbsp;</td>
										<td valign="middle" width="12%"></td>
										<td class="fipaFldLblText text-right">Spouse&nbsp;</td>
										<td valign="middle" width="12%" style="border-right: 1px solid #34495E;"></td>
										<td class="fipaFldLblText text-right">Self&nbsp;</td>
										<td valign="middle" width="12%"></td>
										<td class="fipaFldLblText text-right">Spouse&nbsp;</td>
										<td valign="middle" width="12%"></td>
									</tr>
									<tr class="even">
									<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFOrdinaryDisp" value="Ordinary" />
											<c:if test="${acctypes.accType == CPFOrdinaryDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSlfAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSlfPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSlf${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  style="text-align: right;"/>
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
									<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFOrdinaryDisp" value="Ordinary" />
											<c:if test="${acctypes.accType == CPFOrdinaryDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%" style="border-right: 1px solid #34495E;">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSpsAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSpsPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSps${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control  numbers clsfipaSpouse applyEvntUsd" style="text-align: right;" />
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
										
										<td class="fipaFldLblText text-right">Employee&nbsp;</td>
										<td valign="middle" width="12%">
										<input type="hidden" name="ccSelfOrSps" id="ccSelfOrSps" class="form-control fld-resp-sm selfcontr" value="Self" readonly="true" />
										 <input type="hidden" name="ccPkIdSelf" id="ccPkId" class="cpfpkid"/>
										   <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									      <input type="text" name="ccEmpleContrbSelf"	id="ccEmpleContrbSelf" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="callSumOfCpfMth();" />
											</div>
											</td>
											
									
										<td class="fipaFldLblText text-right">Employee&nbsp;</td>
										<td valign="middle" width="12%">
										 <input type="hidden" name="ccSelfOrSps"	id="ccSelfOrSps" class="form-control fld-resp-sm spscontr"	value="Spouse" readonly="true" />
									       <input type="hidden" name="ccPkIdSps" id="ccPkIdSps" class="cpfpkid"/> 
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="ccEmpleContrbSps" id="ccEmpleContrbSps" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="callSumOfCpfMth();" />
											</div>
										</td> 
										
									</tr>
									<tr class="even">
										<!-- <td class="fipaFldLblText text-right">Special&nbsp;</td>
										<td valign="middle" width="12%">
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="" />
											</div>
										</td> -->
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFSpecialDisp" value="Special" />
											<c:if test="${acctypes.accType == CPFSpecialDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSlfAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSlfPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSlf${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  />
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
									
										<!-- <td class="fipaFldLblText text-right">Special&nbsp;</td>
										<td valign="middle" width="12%" style="border-right: 1px solid #34495E;">
										   <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									       <input type="text" name=""	id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="" />
											</div>
										</td> -->
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFSpecialDisp" value="Special" />
											<c:if test="${acctypes.accType == CPFSpecialDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%" style="border-right: 1px solid #34495E;">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSpsAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSpsPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSps${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control  numbers clsfipaSpouse applyEvntUsd" />
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
										<td class="fipaFldLblText text-right">Employer&nbsp;</td>
										<td valign="middle" width="12%">
										   <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									      <input type="text" name="ccEmplrContrbSelf"	id="ccEmplrContrbSelf" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="callSumOfCpfMth();" />
											</div>
											</td>
											
											
										<td class="fipaFldLblText text-right">Employer&nbsp;</td>
										<td valign="middle" width="12%">
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span>  <input type="text" name="ccEmplrContrbSps"	id="ccEmplrContrbSps" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="callSumOfCpfMth();" />
											</div>
										</td>
									</tr>
									<tr class="even">
								
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFMedisaveDisp" value="Medisave" />
											<c:if test="${acctypes.accType == CPFMedisaveDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSlfAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSlfPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSlf${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  />
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
										
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFMedisaveDisp" value="Medisave" />
											<c:if test="${acctypes.accType == CPFMedisaveDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%" style="border-right: 1px solid #34495E;">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSpsAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSpsPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSps${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control  numbers clsfipaSpouse applyEvntUsd"  />
												</div>
											</td>
											</c:if>
										</c:forEach>
										</c:if>
										<td class="fipaFldLblText text-right">Total&nbsp;</td>
										<td valign="middle" width="12%">
										   <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									        <input type="text" name="txtFldTotalCCSelf"	id="txtFldTotalCCSelf" value="0" onmouseover="fipaTooltip(this);" class="form-control applyNoDecimal readOlyCursor" readonly="true" maxlength="126" style="text-align: right;"/>
											</div>
											</td>
										<td class="fipaFldLblText text-right">Total&nbsp;</td>
										<td valign="middle" width="12%">
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span>  <input type="text" name="txtFldTotalCCSps" value="0"	id="txtFldTotalCCSps" onmouseover="fipaTooltip(this);" class="form-control  readOlyCursor applyNoDecimal" readonly="true" maxlength="126" style="text-align: right;"/>
											</div>
										</td>
									</tr>
									<tr class="even" style="border-bottom: 1px solid #34495E;">
									
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFRetirementDisp" value="Retirement" />
											<c:if test="${acctypes.accType == CPFRetirementDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSlfAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSlfPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSlf${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyEvntUsd"  />
												</div>
											</td>
											</c:if>
										</c:forEach>
									</c:if>
										
										<c:if test="${not empty CPF_ACCTYPES}">
										<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
										<c:set var="CPFRetirementDisp" value="Retirement" />
											<c:if test="${acctypes.accType == CPFRetirementDisp}">
											<td class="fipaFldLblText text-right">${acctypes.accType}:&nbsp;</td>
											<td valign="middle" width="12%" style="border-right: 1px solid #34495E;">
												<div class="fld-resp-md input-group input-group-sm" >
												<span class="input-group-addon">
										               <span class="glyphicon" id="symbolUsd"></span>
										       </span> <input type="hidden" name="hTxtFldSpsAccType${acctypes.accType}"	value="${acctypes.cpfAcId}" />
					               					   <input type="hidden" name="hTxtFldSpsPkId${acctypes.cpfAcId}" class="cpfpkid"/> 
													   <input type="text" name="txtFldCpfSps${acctypes.accType}" id="txtFldCpfSlf${acctypes.accType}" onmouseover="fipaTooltip(this);" class="form-control  numbers clsfipaSpouse applyEvntUsd"  />
												</div>
											</td>
											</c:if>
										</c:forEach>
										</c:if>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle" width="12%"></td>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle" width="12%"></td>
									</tr>
								</table>
							</td>
						</tr>
					</table> 
</div> 
			<div class="middle-line"></div>
			<div class="clearspace40"></div>


			<div class="table-responsive">
				<div class="btn-group pull-right hidden" role="group">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" onclick="CpfMthlyContbAddRow(null);"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" onclick="CpfMthlyContbEditRow();"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" onclick="CpfMthlyContbDelRow();"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" onclick="CpfMthlyContbViewRow();"></button> -->
				</div>
<div id="cpfEmpContribution">
				<div class="table-responsive ">
					<!-- <table class="display nowrap table table-borderless">
						<tr valign="middle" class="fipaFldLblText">
							<td rowspan="5">
							
							<img src="images/menuicons/cpfcont.png" width="25%"/>
							 <span><br>CPF Annual <br> Contribution</span>
							 <br/><span class="pull-left">
							 	<button type="button" class="btn btn-info"  id="btnCPFContrib">
			 						<span>Fill&nbsp;</span><i class="fa fa-percent"></i></button>
							 </span>
							
							
							 
							</td>
							<td style="text-decoration: underline; font-weight: bold;">
								Client</td>
						</tr>

						<tr valign="middle">
							
							<td colspan="2">
								<table class="dataTable table-bordered display" width="100%">
									<tr class="even">
										
										<td class="fipaFldLblText text-right">Employee:&nbsp;</td>
										<td>  
										 <input type="hidden" name="ccSelfOrSps" id="ccSelfOrSps" class="form-control fld-resp-sm selfcontr" value="Self" readonly="true" />
										 <input type="hidden" name="ccPkIdSelf" id="ccPkId" class="cpfpkid"/>
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span>  
											<input type="text" name="ccEmpleContrbSelf"	id="ccEmpleContrbSelf" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="callSumOfCpfMth();" />
											
											  
											
											</div>
										</td>
										
										<td class="fipaFldLblText text-right">Employer:&nbsp;</td>
										<td><div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="ccEmplrContrbSelf"	id="ccEmplrContrbSelf" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="callSumOfCpfMth();" />
											</div>
										</td>
										
										<td class="fipaFldLblText text-right">Total:&nbsp;</td>
										<td><div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									       <input type="text" name="txtFldTotalCCSelf"	id="txtFldTotalCCSelf" value="0" onmouseover="fipaTooltip(this);" class="form-control applyNoDecimal readOlyCursor" readonly="true" />
											</div>
										</td>

									</tr>
								</table>
							</td>
						</tr>

						<tr valign="middle">
							<td>&nbsp;</td>
							<td>&nbsp;</td>
						</tr>

						<tr valign="middle" class="fipaFldLblText">
							<td style="text-decoration: underline; font-weight: bold;">
								Spouse</td>
							<td style="text-align: center">&nbsp;</td>

						</tr>

						<tr valign="middle">
							
							<td colspan="2">
								<table class="dataTable table-bordered display" width="100%">
									<tr class="even">
										<td class="fipaFldLblText text-right">Employee:&nbsp;</td>
										<td>
									       <input type="hidden" name="ccSelfOrSps"	id="ccSelfOrSps" class="form-control fld-resp-sm spscontr"	value="Spouse" readonly="true" />
									       <input type="hidden" name="ccPkIdSps" id="ccPkIdSps" class="cpfpkid"/> 
											<div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="ccEmpleContrbSps" id="ccEmpleContrbSps" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="callSumOfCpfMth();" />
											</div>
										</td>
										<td class="fipaFldLblText text-right">Employer:&nbsp;</td>
										<td><div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									       <input type="text" name="ccEmplrContrbSps"	id="ccEmplrContrbSps" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="callSumOfCpfMth();" />
											</div>
											</td>
										<td class="fipaFldLblText text-right">Total:&nbsp;</td>
										<td><div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> 
									       <input type="text" name="txtFldTotalCCSps" value="0"	id="txtFldTotalCCSps" onmouseover="fipaTooltip(this);" class="form-control  readOlyCursor applyNoDecimal" readonly="true" />
											</div>
											</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>  -->
					
					  <div class="btnStyle" style="float:right;margin-left: 10px;">
								 <button type="button" id="btnColpAllCpf" style="border-radius: 5px; background-color: #ddd; display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="1" aria-describedby="qtip-1">
						      			<span class="txt" style="color: #243665;">Collapse All</span>
						      			<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-minus"></i></span>
						    	</button>   
		   			  </div>
					  <div class="btnStyle" style="float:right;">
											<button type="button" id="btnExpAllCpf" style="border-radius: 5px; background-color: #ddd; display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="0" aria-describedby="qtip-0">
												<span class="txt" style="color: #243665;">Expand All</span>
												<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-plus"></i></span>
											</button>   
					 </div>
					 
					 <div class="container" style="margin-top: -20px;">
						 <ul class="breadcrumb wizard">
							<li class="completed"><a href="javascript:void(0);">Financial Info</a></li>
							<li class="completed"><a href="javascript:void(0);">CPF</a></li>
							<li class=""><a href="javascript:void(0);"id="cpfbreadcrumb" style="width: 255px;display:none"></a></li>
						</ul>
			  		 </div>
				 <div class="clearspace40"></div>
			 
					 <div class="row" style="margin-left: 0px;margin-right: 0px;">
						   <span class="panelHeaderTitle"> Government Scheme</span>
		       		</div>
       		
       		<div class="panel-group" role="tablist" aria-multiselectable="true">
       		 <div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapsecpfLife" aria-expanded="true" aria-controls="collapsecpfLife" role="tab" id="headingcpfLife" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsecpfLife" aria-expanded="true" aria-controls="collapsecpfLife">CPF Life
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
					<div id="collapsecpfLife" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingcpfLife">
						<div class="panel-body">
							<table class="dataTable table-bordered display" width="100%" >
								<tr class="even">
										<td class="fipaFldLblText text-right" style="width: 10%;">Age 55 at year&nbsp;</td>
										<td valign="middle">
											 <!-- <div class="fld-resp-md input-group input-group-sm">
																	<input id="cpfLifeYear" name="cpfLifeYear" class="form-control clsfipaClient numbers " type="text" maxlength="4" style="text-align: right;">
																	
												                </div> -->
												  <div class="input-group input-group-sm fld-resp-sm"> 
														<input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="cpfLifeYear" onmouseover="fipaTooltip(this);" id="cpfLifeYear" maxlength="4" data-hasqtip="243">
														<div class="input-group-addon"> <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
												  </div>
										</td>
										<td valign="middle"></td>
										<td class="fipaFldLblText text-left"></td>
										<td class="fipaFldLblText text-right"></td>
										<td valign="middle"></td>
									</tr>
								<tr class="even">
										<td class="fipaFldLblText text-right" style="width: 10%;">BRS Amount&nbsp;</td>
										<td valign="middle" >
											<div class="fld-resp-md input-group input-group-sm">
										      <div class="input-group-addon">
										       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
						                		<input type="text" name="cpfLifeBrsamt" id="cpfLifeBrsamt" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
												<a class="btn btn-default syncicon" id="brsAmtCPFLifeBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
								             </div>
										</td>
										<td class="fipaFldLblText text-right" style="width: 10%;">FRS Amount&nbsp;</td>
										<td valign="middle">
											<div class="fld-resp-md input-group input-group-sm">
										      <div class="input-group-addon">
										       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
						                		<input type="text" name="cpfLifeFrsamt" id="cpfLifeFrsamt" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
												<a class="btn btn-default syncicon" id="frsAmtCPFLifeBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
								             </div>
										</td>
										<td class="fipaFldLblText text-right" style="width: 10%;">ERS Amount&nbsp;</td>
										<td valign="middle">
											<div class="fld-resp-md input-group input-group-sm">
										      <div class="input-group-addon">
										       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
						                		<input type="text" name="cpfLifeErsamt"  id="cpfLifeErsamt"style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
												<a class="btn btn-default syncicon" id="ersAmtCPFLifeBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
								             </div>
										</td>
									</tr>
									<tr valign="middle" class="fipaFldLblText">
									 <td class="fipaFldLblText text-right" colspan="4">
										 <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">I have pledged my property to CPF&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="cpfLifeProptocpf" id="cpfLifeProptocpf" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="Y">Yes</option> 
																	<option value="N">No</option>
																</select>
																</div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Withdrawal of excess RA savings above BRS&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="cpfLifeRasavings" id="cpfLifeRasavings" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="Y">Yes</option> 
																	<option value="N">No</option>
																</select>
																</div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">CPF Life Plan&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="cpfLifePlan" id="cpfLifePlan" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="BP">Basic</option> 
																	<option value="SP">Standard</option>
																	<option value="EP">Escalating</option>
																</select>
																</div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Monthly Payout Amount&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="cpfLifePayoutamt" id="cpfLifePayoutamt"style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="payAmtCPFLifeBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
														</tr>
												   </tbody>
												</table>
									 </td>
									   <td colspan="2" style="border: 1px solid #34495E;">
									   <div>
									   <span class="panelHeaderTitle">Disclaimer</span>
									   <ul>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;Assuming the property pledge is sufficient</li>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;Members who didn't choose their CPF Life plans, would by default, be under Standard Plan</li>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;The CPF Life pay out is assumed to be paid out once member reaches the pay out eligibility age</li>
										  <li><img src="images/menuicons/bullets.png" width="1%">
										  		&nbsp;The CPF Life pay out is an estimated amount, taking the minimum amount of the range given by CPF for the respective plans</li>
										</ul>
									   </div>
									   </td>
										
									</tr>
									
									<tr class="even">
										<td class="fipaFldLblText text-right" colspan="1">
										<button type="button" class="btn btn-info" id="cpfLifeCalcBtn" style="margin-left: 0%;">
			 							<span>&nbsp;<u>CPF Life Calculator</u>&nbsp;</span><i class=""></i></button>
										</td>
										<td  colspan="5"></td>
									</tr>
									<tr class="even">
										<td class="fipaFldLblText text-left" colspan="2">
										<span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="30">
										<small>&nbsp;&nbsp;Note:The CPF Life Calculator is for those Aged 55 & above</small></span>
										</td>
										<td  colspan="4"></td>
									</tr>
								</table>
	  
	  	
							
						</div>
					</div>
			</div>
			
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapseretSumScheme" aria-expanded="true" aria-controls="collapseretSumScheme" role="tab" id="headingSumScheme" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseretSumScheme" aria-expanded="true" aria-controls="collapseretSumScheme">Retirement Sum Scheme
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapseretSumScheme" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingSumScheme">
					<div class="panel-body">
						<table class="dataTable table-bordered display" width="100%" >
								<tr class="even"></tr>
								<tr class="even"></tr>
									<tr valign="middle" class="fipaFldLblText">
									 <td class="fipaFldLblText text-right" colspan="4">
										 <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Age on 1 July 2020&nbsp;</td>
															<td>
															  <!--  <div class="fld-resp-md input-group input-group-sm">
																	<input id="txtFldAgeinJuly2020Year" name="txtFldAgeinJuly2020Year" class="form-control clsfipaClient numbers " type="text" maxlength="3" style="text-align: right;">
												                </div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldAgeinJuly2020Year" onmouseover="fipaTooltip(this);" id="txtFldAgeinJuly2020Year" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Payouts will last until RA runs out&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<input id="txtFldRssPayOutAge" name="txtFldRssPayOutAge" class="form-control clsfipaClient numbers" type="text" maxlength="3" style="text-align: right;">
												                </div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldRssPayOutAge" onmouseover="fipaTooltip(this);" id="txtFldRssPayOutAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																</div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">RSS Monthly Pay Out Amount&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input name="txtFldRssPayOutAmt" id="txtFldRssPayOutAmt" type="text" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div>
															</td>
														</tr>
												   </tbody>
												</table>
									 </td>
									   <td colspan="1" style="">
									    <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-left" colspan="1">
															<button type="button" class="btn btn-info" id="cpfRetSchSingPassBtn" style="margin-left: 0%;">
			 												<span>&nbsp;<u>SingPass Login</u>&nbsp;</span><i class=""></i></button>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-left" colspan="1">
															<span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="30">
															<small>&nbsp;&nbsp;Note: RSS Pay Out amount can be checked under SingPass</small></span>
															</td>
														</tr>
												   </tbody>
												</table>
									   </td>
										
									</tr>
									
								</table>
					</div>
		 </div>
			</div>
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapsecareshiledLife" aria-expanded="true" aria-controls="collapsecareshiledLife" role="tab" id="headingCareshiledLife" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsecareshiledLife" aria-expanded="true" aria-controls="collapsecareshiledLife">CareShield Life
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapsecareshiledLife" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingCareshiledLife">
					<div class="panel-body">
					<table class="dataTable table-bordered display" width="100%" >
								<tr class="even"></tr>
								<tr class="even"></tr>
									<tr valign="middle" class="fipaFldLblText">
									 <td class="fipaFldLblText text-right" colspan="4">
										 <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Age 30 in Year&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	
																	<div class="fld-resp-md input-group input-group-sm">
																		<input id="txtFldCareShieldYear" name="txtFldCareShieldYear" class="form-control clsfipaClient numbers " type="text" maxlength="4" style="text-align: right;">
													                </div>
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldCareShieldYear" onmouseover="fipaTooltip(this);" id="txtFldCareShieldYear" maxlength="4" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Annual Premium&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldCareShieldAnnlPrem" id="txtFldCareShieldAnnlPrem" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="careShieldAnnlPremBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Monthly Pay Out&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldCareShieldPayout" id="txtFldCareShieldPayout" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="careShieldPayoutBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Has made a claim?&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="fld-resp-md input-group input-group-sm">
																<select name="txtFldCareShieldClaim" id="txtFldCareShieldClaim" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="Y">Yes</option> 
																	<option value="N">No</option>
																</select>
																</div>
															</td>
														</tr>
												   </tbody>
												</table>
									 </td>
									   <td colspan="1" style="">
									    <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-left" colspan="1">
															<button type="button" class="btn btn-info" id="cpfCareShieldLifeBtn" style="margin-left: 0%;">
			 												<span>&nbsp;<u>CareShield Life Calculator</u>&nbsp;</span><i class=""></i></button>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-left" colspan="1">
															<span class="fipaFldLblText"><img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="30">
															<small>&nbsp;&nbsp;Note: Personalised Premium will only be made available closer to member's 30th birthday</small></span>
															</td>
														</tr>
												   </tbody>
												</table>
									   </td>
										
									</tr>
									<tr class="even">
										<td class="fipaFldLblText text-right" style="width: 18%;" colspan="2">Current Premium Increment Rate&nbsp;</td>
										<td valign="middle">
											<!-- <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="" />
											</div> -->
											<div class="fld-resp-sm input-group input-group-sm">  
									                <input name="txtFldCareShieldPremIncRate" onmouseover="fipaTooltip(this);" id="txtFldCareShieldPremIncRate" class="form-control numbers clsfipaClient applyEvntpCent3" maxlength="3" data-hasqtip="226" aria-describedby="qtip-226" style="text-align: right;">
											 		<span class="input-group-addon">
									              	  <span class="glyphicon addPercentSign" id="symbolprCent"></span>
									                </span>
											</div>
										</td>
									</tr>
									<tr class="even">
										<td class="fipaFldLblText text-right" style="width: 18%;" colspan="2">Current Pay Out Increment Rate&nbsp;</td>
										<td valign="middle">
											<!-- <div class="fld-resp-md input-group input-group-sm" >
											<span class="input-group-addon">
									               <span class="glyphicon" id="symbolUsd"></span>
									       </span> <input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaSpouse applyEvntUsd applyNoDecimal" onchange="" />
											</div> -->
											<div class="fld-resp-sm input-group input-group-sm">  
									                <input name="txtFldCareShieldPayIncRate" onmouseover="fipaTooltip(this);" id="txtFldCareShieldPayIncRate" class="form-control numbers clsfipaClient applyEvntpCent3" maxlength="3" data-hasqtip="226" aria-describedby="qtip-226" style="text-align: right;">
											 		<span class="input-group-addon">
									              	  <span class="glyphicon addPercentSign" id="symbolprCent"></span>
									                </span>
											</div>
										</td>
									</tr>
								</table>
					</div>
		 </div>
			</div>
			
			
			
			
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapseeldershield" aria-expanded="true" aria-controls="collapseeldershield" role="tab" id="headingEldershield" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeldershield" aria-expanded="true" aria-controls="collapseeldershield">ElderShield
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapseeldershield" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingEldershield">
					<div class="panel-body">
					 <table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Current Age&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">																	
																	<div class="fld-resp-md input-group input-group-sm">	
																	<input id="txtFldEldershieldAge" name="txtFldEldershieldAge" class="form-control clsfipaClient numbers " type="text" maxlength="3" style="text-align: right;">	  
																	</div>
																</div> -->
																	<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldEldershieldAge" onmouseover="fipaTooltip(this);" id="txtFldEldershieldAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right" colspan="2">Annual Premium&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldElderShieldAnnlPrem" id="txtFldElderShieldAnnlPrem" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="elderShieldAnnlPremBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">ElderShield Plan Type&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="txtFldElderShieldPlan" id="txtFldElderShieldPlan" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																    <option value="ElderShield 300">ElderShield 300</option>
																	<option value="ElderShield 400">ElderShield 400</option>
																</select>
																</div>
															</td>
															<td class="fipaFldLblText text-right" colspan="2">Remaining Number Of Premium Payment&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">																	
																	<div class="fld-resp-md input-group input-group-sm">	
																	<input id="txtFldElderShieldPremPayment" name="txtFldElderShieldPremPayment" class="form-control clsfipaClient numbers " type="text" maxlength="126" style="text-align: right;">	  
																	</div>
																</div>
															</td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" colspan="2">Gender&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="fld-resp-md input-group input-group-sm">
																<select name="txtFldElderShieldGender" id="txtFldElderShieldGender" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																    <option value="M">Male</option>
																	<option value="F">Female</option>
																</select>
																</div>
															</td>
															<td class="fipaFldLblText text-right" colspan="2"></td>
															<td></td>
														</tr>
												   </tbody>
												</table>
					</div>
		 </div>
			</div>
			
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapsemediShield" aria-expanded="true" aria-controls="collapsemediShield" role="tab" id="headingMedishield" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsemediShield" aria-expanded="true" aria-controls="collapsemediShield">MediShield Life
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapsemediShield" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingMedishield">
					<div class="panel-body">
					<table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" width="18%">Current Age Next Birthday&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<!-- <div class="fld-resp-md input-group input-group-sm">																	
																	<div class="fld-resp-md input-group input-group-sm">	
																	<input id="txtFldMediShieldaAge" name="txtFldMediShieldaAge" class="form-control clsfipaClient numbers " type="text" maxlength="3" style="text-align: right;">	  
																	</div>
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldMediShieldaAge" onmouseover="fipaTooltip(this);" id="txtFldMediShieldaAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" width="18%">Current Annual Premium&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="" id="" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldMediShieldAnnlPrem"  id="txtFldMediShieldAnnlPrem" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="220">
																	<a class="btn btn-default syncicon" id="mediShieldAnnlPremBtn" style="margin-left: 3px;" data-hasqtip="32" aria-describedby="qtip-26"></a>
													            </div>
													            
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
												   </tbody>
												</table>
					</div>
		 </div>
			</div>
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapsedeptproscheme" aria-expanded="true" aria-controls="collapsedeptproscheme" role="tab" id="headingDeptproScheme" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsedeptproscheme" aria-expanded="true" aria-controls="collapsedeptproscheme">Dependent's Protection Scheme
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapsedeptproscheme" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingDeptproScheme">
					<div class="panel-body">
					<table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right" width="18%">Current Age&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldDepntProtectCurrAge" id="txtFldDepntProtectCurrAge" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="3" style="text-align: right;">
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldDepntProtectCurrAge" onmouseover="fipaTooltip(this);" id="txtFldDepntProtectCurrAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" width="18%">Current Annual Premium&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldDepntProtectAnnlPrem" id="txtFldDepntProtectAnnlPrem" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="depntProtectAnnlPremBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even">
															<td class="fipaFldLblText text-right" width="18%">Current Sum Assured&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
															      <div class="input-group-addon">
															       <span class="glyphicon addDollarSign" id="symbolUsd"></span> </div>
											                		<input type="text" name="txtFldDepntProtectSumAssured" id="txtFldDepntProtectSumAssured" style="width: 135px; text-align: right;" onmouseover="fipaTooltip(this);" id="" class="form-control numbers applyEvntUsd" maxlength="126" data-hasqtip="194">
																	<a class="btn btn-default syncicon" id="depntProtectSumAssuredBtn" style="margin-left: 3px;" data-hasqtip="26" aria-describedby="qtip-26"></a>
													             </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
												   </tbody>
												</table>
					</div>
		 </div>
			</div>
			
			<div class="panel panel-default">
		            <div class="panel-headingscpf" data-toggle="collapse" data-parent="#accordion" href="#collapsehouseproscheme" aria-expanded="true" aria-controls="collapsehouseproscheme" role="tab" id="headingHouseproScheme" style="color: #fff;background-color: #7f9acf;border-color: #7f9acf;font-size: 14px;padding: 13px 8px;">
							<h4 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsehouseproscheme" aria-expanded="true" aria-controls="collapsehouseproscheme">House Protection Scheme
									 <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
								</a>
							</h4>
					</div>
						
			<div id="collapsehouseproscheme" class="panel-collapsescpf collapse" role="tabpanel" aria-labelledby="headingHouseproScheme">
					<div class="panel-body">
					 							<table class="dataTable table-bordered display" width="100%">
													<tbody>
														<tr class="even">
															<td class="fipaFldLblText text-right">Insured Before 1 March 2001?&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="txtFldHouseProtectYear" id="txtFldHouseProtectYear" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="Y">Yes</option> 
																	<option value="N">No</option>
																</select>
																</div>
															</td>
															<td class="fipaFldLblText text-left" colspan="2"><button type="button" class="btn btn-info" id="cpfHouseProtSchBtn" style="margin-left: 0%;">
			 												<span>&nbsp;<u>House Protection Scheme Calculator</u>&nbsp;</span><i class=""></i></button></td>
			 												<td></td>
														</tr>
														<tr style="display:none" id="houseProtectPremium"><td class="fipaFldLblText text-right" width="18%">Single Premium&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectPremium" id="txtFldHouseProtectPremium" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div>
															</td>
														</tr>
														<tr class="even" style="display:none" id="houseProtectCovPeriodAge">
															<!-- <td class="fipaFldLblText text-right" width="18%">Entry Age&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectCovPeriodAge" id="txtFldHouseProtectCovPeriodAge" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td> -->
															<td class="fipaFldLblText text-right">Coverage Period to Age&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																<select name="txtFldHouseProtectCovPeriodAge" id="txtFldHouseProtectCovPeriodAge" onmouseover="fipaTooltip(this);" class="form-control fld-resp-sm clsfipaClient" data-hasqtip="233">
																	<option value="">--SELECT--</option>
																	<option value="Age 55">Age 55</option> 
																	<option value="Age 60">Age 60</option>
																</select>
																</div>
															</td>
														</tr>
														<tr class="even" style="display:none"  id="houseProtectAmount">
															<td class="fipaFldLblText text-right" width="18%">Annual Premium Amount&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectAmount" id="txtFldHouseProtectAmount" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even" style="display:none" id="houseProtectAge">
															<td class="fipaFldLblText text-right" width="18%">Entry Age&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectAge" id="txtFldHouseProtectAge" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="3" style="text-align: right;">
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldHouseProtectAge" onmouseover="fipaTooltip(this);" id="txtFldHouseProtectAge" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even" style="display:none" id="houseProtectCoverage">
															<td class="fipaFldLblText text-right" width="18%">Coverage Period&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectCoverage" id="txtFldHouseProtectCoverage" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="126" style="text-align: right;">
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldHouseProtectCoverage" onmouseover="fipaTooltip(this);" id="txtFldHouseProtectCoverage" maxlength="4" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even" style="display:none"  id="houseProtectTerm">
															<td class="fipaFldLblText text-right" width="18%">Remaining Premium Term&nbsp;</td>
															<td>
																<div class="fld-resp-md input-group input-group-sm">
																	<!-- <span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span> -->  
																	<input type="text" name="txtFldHouseProtectTerm" id="txtFldHouseProtectTerm" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="6" style="text-align: right;">
																</div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
														<tr class="even" style="display:none" id="houseProtectPremiumEnds">
															<td class="fipaFldLblText text-right" width="18%">Age When Premium Period Ends&nbsp;</td>
															<td>
																<!-- <div class="fld-resp-md input-group input-group-sm">
																	<span class="input-group-addon">
															               <span class="glyphicon addDollarSign" id="symbolUsd"></span>
															       </span>  
																	<input type="text" name="txtFldHouseProtectPremiumEnds" id="txtFldHouseProtectPremiumEnds" onmouseover="fipaTooltip(this);" class="form-control numbers clsfipaClient applyNoDecimal applyEvntUsd" onchange="" maxlength="3" style="text-align: right;">
																</div> -->
																<div class="input-group input-group-sm fld-resp-sm"> 
																	  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs" name="txtFldHouseProtectPremiumEnds" onmouseover="fipaTooltip(this);" id="txtFldHouseProtectPremiumEnds" maxlength="3" data-hasqtip="243">
																	 <div class="input-group-addon"> 
																	  <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
																	 </div>
															</td>
															<td class="fipaFldLblText text-right"></td>
															<td></td>
														</tr>
													</tbody>
												</table>
					</div>
		 </div>
			</div>
       </div>		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
       		
					<div class="table-responsive">
					<table id="cpfMontlyContbTable" class="hidden" style="width: 80%">
						<thead class="fipaFldLblTextbold">
							<tr>
								<th width="4%" class="hidden">#</th>
								<th width="6%" class="hidden">Mode</th>
								<th width="6%" class="hidden">Select</th>
								<th width="6%">Self/Spouse</th>
								<th width="6%">Employee</th>
								<th width="10%">Employer</th>
								<th width="10%">Total</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
				</div>
				
				<input id="ccCrtdBy" name="ccCrtdBy" type="hidden">
				<input id="ccCrtdDate" name="ccCrtdDate" type="hidden">
				</div>
				</div>
			</div> 
			<div style="display:none">
			<table width="100%" >
			<tr valign="top" class="fipaFldLblText">
						<td rowspan="3"  colspan="2" width="10%">
						<div class="container">
						<img src="images/menuicons/cpf1.png" class="img-rounded" width="50" height="50"/>
						</div>
						 <span
							class="fipaFldLblTextbold"
							style="color: #50907C; font-size: 30px">+</span><br> <span>CPF Top Up
						</span>
						</td>
						<td><span
							style="text-decoration: underline; font-weight: bold">CPF
								Account: Annual Additions </span> <small>(Exclude Annual Top Up
								for Investment)</small></td>
								<tr> 
						<td>
					<div class="btn-group pull-right " role="group" style="display:none">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" onclick="cpfAccTpupAddRow(null);"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" onclick="cpfAccTpupEditRow();"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" onclick="cpfAccTpupDelRow();"></button>
				  	</div>
						</td>
					</tr>
					<tr valign="top">
						<td > 
							<div class="">  
	<div class="col-md-12" >
								<table id="cpfAccTpupTable" class="display dataTable table-bordered table-striped" style="width:100%" >
									<thead>
										<tr>
											<th><div style="width:30px;">#</div></th> 
											<th><div style="width:50px;">Select</div></th>
											<th><div style="width:120px;">Types of Top-Up</div></th>
											<th><div style="width:130px;">CPF Account</div></th>
											<th><div style="width:100px;">Payment Term</div></th>
											<th><div style="width:80px;">Amount</div></th>
											<th><div style="width:120px;">Intended Period<br><small>(yrs)</small></div></th>
										</tr>
									</thead>

									<tbody>
									</tbody>
								</table>
							  </div>
							  </div>
						</td>
					</tr>
					 </table> 

			</div> 
			<div style="display:none">
			<table width="100%">
			<tr valign="top" class="fipaFldLblText">
					<td rowspan="3"  colspan="2" width="10%">
					<div class="container"> 
					<img src="images/menuicons/cpf1.png"  class="img-rounded" width="50" height="50"/> </div><span
						class="fipaFldLblTextbold" style="color: #50907C; font-size: 30px">-</span>
						<br /> <span>CPF<br /> Deductions
					</span></td>
					<td valign="baseline" style="text-align: left">&nbsp;&nbsp; <span
						style="text-decoration: underline; font-weight: bold"> CPF
							Account: Others Deductions </span> <small>(Exclude Annual
							Deduction for Insurance Products)</small>
					</td>
				</tr>
					<tr>
					<td >
					  <div class="btn-group pull-right" role="group"  style="display:none">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" onclick="cpfAccDedtAddRow(null);"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" onclick="cpfAccDedtEditRow();"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" onclick="cpfAccDedtDelRow();"></button>
				  	  </div>
					</td>
				</tr>
				<tr>
					<td > 
					<div class="">  
	<div class="col-md-12" >
							<table id="cpfAccDeductTable"
								class="display dataTable table-bordered table-striped" style="width:100%" >
								<thead>
									<tr>
										<th><div style="width:25px;">#</div></th>
										<th class="hidden"><div style="width:35px;">Mode</div></th>
										<th><div style="width:50px;">Select</div></th>
										<th><div style="width:60px;">Applicant</div></th>
										<th><div style="width:130px;">Types of Deduction</div></th>
										<th><div style="width:40px;">Types</div></th>
										<th><div style="width:100px;">CPF Account</div></th>
										<th><div style="width:100px;">Payment Term</div></th>
										<th><div style="width:50px;">Amount</div></th>
										<th><div style="width:100px;">Balance Term<br><small>(yrs)</small></div></th>
									</tr>

								</thead>

								<tbody>

								</tbody>

							</table>
							</div>
						 </div>
					</td>
				</tr>
			</table>
			</div>
			<div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>   

			 <div class="table-responsive">
			 <div class="col-md-8 pull-left">
			 <img src="images/menuicons/cpf1.png" class="img-rounded" width="50" height="50" />
					<span class="panelHeaderTitle"> CPF Account -  Additions & Deductions of funds into CPF a/c</span>
					
					<a class="btn btn-default addpropertyicon" id="backcpfadddec" onclick="openBackToProperty();"></a>
			 </div>
			 <div class="col-md-4 pull-right">
			 
			 <div class="pull-right" role="group" style="display: none;">
		&nbsp;&nbsp; 
			<button type="button" class="btn btn-info"  id="" ><i class="fa fa-file-pdf-o "></i><span>&nbsp;PDF&nbsp;</span></button>
		</div>
		<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
		&nbsp;&nbsp;
						<button type="button"  class="btn btn-info delRow-icon1"  id="CpfADDRow"><i class="fa fa-trash"></i><span>&nbsp;Delete</span></button>
  				 </div>
  				 <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="CpfADERow"><i class="fa fa-edit"></i><span>&nbsp;Edit</span></button>
  				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
				&nbsp;&nbsp;
						<button type="button"  class="btn btn-info addRow-icon1"   id="CpfADARow"><i class="fa fa-plus"></i><span>&nbsp;Add</span></button>
  				 </div>
  				 
				 
			 </div>
				
				</div>  
	<div class="col-md-12" id='cpfaccid' tabindex='1'>		
		<div class="btnStyle"> 
					    <button type="button" id="btnCPFProjection" class="btn BtnFIPASRCH StylishSRCH floatbtn rp-cf-btn-float"  
					    style="position: fixed;top: 100px;">
					      <span class="txt">CPF Projections</span>
					      <span class="round"><i class="fa fa-balance-scale"></i></span>
					    </button> 
			    	</div>
			    	
			    	
			    	
	<div id="CPF_APD" > 
   <div id="cpfMandatoryFlds">
				<table id="cpfAccAddDedTable"
								class="dataTable table-bordered table-striped display" style="width:100%" >
								<thead>
									<tr>
										<th>#</th> 
										<!-- <th>Select</th> -->
										<!-- <th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelcpfAccAddDed" name="SelcpfAccAddDed" onclick="SelAllcpfAccAddDed(this)"><label for="SelcpfAccAddDed">&nbsp;</label></div></th>
										<th><div style="width:170px;">Name Of Account Holder<span class="mandFldastrks">*</span></div></th> 
										<th><div style="width:75px;">Applicant Type</div></th> 
										<th><div style="width:170px;">Description of Transaction</div></th>
										<th><div style="width:90px;">Type of transaction<span class="mandFldastrks">*</span></div></th>
										<th><div style="width:90px;">Type of CPF Account<span class="mandFldastrks">*</span></div></th>
										<th><div style="width:80px;">Age From</div></th>
										<th><div style="width:80px;">Age To</div></th>
										<th><div style="width:100px;">Amount<small>($)</small></div></th>
										<th><div style="width:110px;">Frequency of Transaction</div></th> 
										<th><div style="width:110px;">Amount to be transferred  from OA to RA</div></th> -->
										<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelcpfAccAddDed" name="SelcpfAccAddDed" onclick="SelAllcpfAccAddDed(this)"><label for="SelcpfAccAddDed">&nbsp;</label></div></th>
										<th><div style="width:150px;">Description</div></th> 
										<th><div style="width:150px;">Transaction Tag</div></th> 
										<th><div style="width:150px;">CPF Account Type</div></th>
										<th><div style="width:150px;">Payment Period</div></th>
										<th><div style="width:150px;">Payment Amount</div></th>
									</tr>

								</thead>

								<tbody>

								</tbody>

							</table>
							<div class="row">
	  <hr class="border"/>
	  </div> 
							</div>
							</div>
 				</div>
		



  <div class="panel-body" id="divforCpfSummary" style="display:none">   
  		<span class="panelHeaderTitle"></span>
		<div class="clearspace10"></div>
		<span class="panelHeaderTitle">Investment Summary</span> 
		<small>Investment through CPF  </small>
		<div class="clearspace10"></div>
		<span class="panelHeaderSubTitle">&nbsp;</span> 
		<div class="table-responsive">
		
		<div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="..." id="invcpfbtngrp">
	        <div class="btn-group" role="group">
	            <button type="button"  class="btn btn-primary" href="#tabselfinvCpf" data-toggle="tab"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
	                <div class="hidden-xs">Self</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button"  class="btn btn-default" href="#tabspouseinvCpf" data-toggle="tab"><i class="fa fa-user-plus" aria-hidden="true"></i>
	                <div class="hidden-xs">Spouse</div>
	            </button>
	        </div>
	        <div class="btn-group" role="group">
	            <button type="button" class="btn btn-default" href="#tabfamilyinvCpf" data-toggle="tab"><i class="fa fa-users" aria-hidden="true"></i>
	                <div class="hidden-xs">Joint/Family</div>
	            </button>
	        </div>
    	</div>
    	
    	<div class="well">
	      <div class="tab-content">
	        <div class="tab-pane fade in active" id="tabselfinvCpf" style="min-height:300px;">
	          <div id="genCpfSummarySelf"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabspouseinvCpf" style="min-height:300px;">
	          <div id="genCpfSummarySpouse"></div>
	        </div>
	        <div class="tab-pane fade in" id="tabfamilyinvCpf" style="min-height:300px;">
	          <div id="genCpfSummaryFamily"></div>
	        </div>
	      </div>
	    </div>
		 
		</div>
	</div>
		
		
		<!-- Start -->

<div class="row">
	  <hr class=""/>
	  </div> 
	  
<div class="clearspace40"></div>
<div class=" " style="display: none">
 <span class="headerlabel">CPF Life & Top-Up Details</span><br>
	
	<div class="form-group">  
		<div class="clearspace20"></div> 
		<div class="row">
	 	<div class="clearspace10"></div> 
		 <div class="col-md-3 col-sm-3 col-xs-3 text-right">
		<label class="control-label">I have pledged my property to CPF</label>
		</div>
		 <div class="col-md-2 col-sm-2 col-xs-2">
		 <select class="form-control fld-resp-sm"
							id="retPropToCPF"
							name="retPropToCPF" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>           
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-right">
          <label class="control-label">Under Medical Grounds Scheme?</label>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         <select class="form-control fld-resp-sm" id="retMedGround" name="retMedGround" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>
       </div> 
       
      <div class="col-md-2 col-sm-2 col-xs-2">
          <label class="control-label">&nbsp;</label>
      </div> 
      </div>  
      </div>
      
      
      
      
      
      <div class="form-group">  
	<div class="row">
	 <div class="clearspace10"></div> 
		 <div class="col-md-3 col-sm-3 col-xs-3 text-right">
		<label class="control-label">Top up RA to ERS</label>
		</div>
		 <div class="col-md-2 col-sm-2 col-xs-2">
		 <select class="form-control fld-resp-sm"
							id="retTopUpRAERS"
							name="retTopUpRAERS" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>           
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-right">
          <label class="control-label">Has existing annuity/ pension?</label>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         <select class="form-control fld-resp-sm" id="retExistAnnuity" name="retExistAnnuity" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>
						<input type="hidden" name="retFromSrsAge" id="retFromSrsAge"/><input type="hidden" name="retFromSrsAmount" id="retFromSrsAmount"/>
       </div> 
       
      <div class="col-md-2 col-sm-2 col-xs-2">
          <label class="control-label">&nbsp;</label>
         </div> 
         
      </div>  
      </div>
      
       
	
		<div class="row">
	  <hr class="border"/>
	  </div> 
	  
	<div class="row">    
    <div class="col-md-12">
	<div class="clearspace10"></div> 
     <span class="headerlabel">Funds Transfer from CPF Account to CPF Life</span> 
    <div class="table-responsive">
		<div class="btn-group pull-right funcToDisable hidden" role="group"> 
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="CpfLifeDRow"></button>
				</div>
				<div class="btn-group pull-right funcToDisable hidden" role="group" style="margin-right: 10px;"> 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="CpfLifeARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="CpfLifeERow"></button>
  				 </div>
			</div>	  
			<div class="col-md-12">
		<table id="retCpfPayoutTable" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead> 
						<tr>
							<th>#</th>
							<th>Select</th>
							<th><div style="width:50px">Age</div></th> 
							<th><div style="width:150px">CPF Life Type</div></th>
							<th><div style="width:150px">CPF Life Premium&nbsp;<small>($)</small></div></th>
							<th><div style="width:150px">CPF Life Pay Out Income&nbsp;<small>($)</small></div></th>
				 			<th><div style="width:150px">Funds Transferred From&nbsp;RA ($)</div></th> 
						</tr> 
						  
					</thead> 
					<tbody>   
					</tbody> 
				</table> 
				</div>
				
		</div>
		
		<div class="col-md-12">
		<div class="clearspace10"></div> 
		<span class="panelHeaderTitle">Disclaimer</span><br> 
		<ul>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;Assuming the property pledge made is sufficient.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;Members who didn't choose what CPF Life plans, would by default, fall under the Standard Plan.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;The CPF Life pay out is assumed to be paid out once member reaches the pay out eligibility age.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;The CPF Life pay out is an estimated amount, taking the minimum amount of the range given by CPF for the respective CPF Life plans.</li>
		</ul>  
		 
		</div> 
		</div> 

	<div class="row">
	  <hr class="border"/>
	  </div> 
	  
	  
	  <div class="row">
	
	  
    <div class="col-md-12"   id="retcpflifpayIncome">
    
    <span class="headerlabel">CPF Life Pay Out Income</span>
    
	<div class="clearspace10"></div> 
     
     <div class="col-md-9"> 
		<table id="retCpfPayoutTableReplica" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead> 
						<tr>
							<th><div style="width:20px">#</div></th> 
								<th><div style="width:100px">Retirement Scheme</div></th>
								<th><div style="width:130px">Pay out year</div></th>
								<th><div style="width:130px">Monthly<small>($)</small></div></th> 
								<th><div style="width:130px">Annually<small>($)</small></div></th>
						</tr> 
						  
					</thead> 
					<tbody>
						 <c:if test="${not empty CPF_LIFE_PAYOUT}">
						 <c:forEach var="mastdata" items='${CPF_LIFE_PAYOUT}'  varStatus="mc">
						 	<tr>
								<td>${mc.count}</td>
								<td>${mastdata.retScheme}</td>
								<td>${mastdata.payoutYear}</td>
								<td><fmt:formatNumber type="number" pattern="$###.###" value="${mastdata.monthlyAmt}" />  
								</td>
								<td><fmt:formatNumber type="number" pattern="$###.###" value="${mastdata.yearlyAmt}" /></td>
							</tr>
						 </c:forEach>
						
						</c:if>  
					</tbody> 
				</table>
		</div> 
		</div>
		
		 
		</div> 
	
</div>
<!-- end -->
		
	</div>
</div>

</div>

						 



<div class="font_dialogbox" id="cpfMthlyContb_Dialog" style="display: none">

	<fieldset class="fieldsetClsborder" style="height: auto">
		<table class="dialogTblStyle">
			<col width="20%" valign="top" align="right">
			<col width="30%" valign="top" align="left">
			<col width="20%" valign="top" align="right">
			<col width="30%" valign="top" align="left">
			<tr>
				<td align='right'><label class="fipaFldLblText"
					for="txtFldDlgCCEmpleContrb"><font color="maroon">Employee
							: </font></label></td>
				<td align='left'><input type="text" id="txtFldDlgCCEmpleContrb"
					name="txtFldDlgCCEmpleContrb" class="form-control numbers applyEvntUsd" ></td>

				<td align='right'><label class="fipaFldLblText"
					for="txtFldDlgCCEmplrContrb"><font color="maroon">Employer
							: </font></label></td>
				<td align='left'><input id="txtFldDlgCCEmplrContrb"
					name="txtFldDlgCCEmplrContrb" class="form-control numbers applyEvntUsd" type="text">
				</td>

			</tr>


			<tr>
				<td align='right'><input type="hidden"
					name="txtFldDlgCCSlfOrSps" id="txtFldDlgCCSlfOrSps" /> <input
					type="hidden" name="txtFldDlgCCCrtdBy" /></td>
				<td align='left'><input type="hidden"
					name="txtFldDlgCCCrtdDate" /> <input type="hidden"
					name="txtFldDlgCCPkId" /></td>

			</tr>

		</table>
	</fieldset>
</div>




<div class="font_dialogbox" id="cpfTopUp_Dialog" style="display: none"> 
	<fieldset class="fieldsetClsborder">
		<!-- col1 -->
		<div class="col-md-6">    
			<div class="form-group required">
		     <label class="fipaFldLblText"
					for="selmasterCpfAcctype"> <font color="maroon">CPF
							Account</font></label>
                     <select class="form-control fld-resp-md"
					id="selDlgmasterCpfAcctype" name="selDlgmasterCpfAcctype"
					onmouseover="fipaTooltip(this);"   >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCTYPES}">
							<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
								<option value="${acctypes.cpfAcId}">${acctypes.accType}</option>
							</c:forEach>
						</c:if>
				</select>
                </div>
                
                
                <div class="form-group required">
                    <label class="fipaFldLblText"
					for="txtFldDlgCtPaymentTerm"><font color="maroon">Payment
							Term </font></label>
			 <input type="text" id="txtFldDlgCtPaymentTerm"
					name="txtFldDlgCtPaymentTerm" class="form-control fld-resp-sm"
					onmouseover="fipaTooltip(this);" maxlength="20"    >  
                </div>
           
					
		 
			<div class="form-group">
			 <label class="fipaFldLblText"
					for="txtFldDlgCtIntendedYr"> Intended Period </label>
					<div class="input-group input-group-sm fld-resp-mm" >  
					<input type="text" id="txtFldDlgCtIntendedYr"
					name="txtFldDlgCtIntendedYr" class="form-control numbers applyEvntYrs"   
					onmouseover="fipaTooltip(this);" />
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
						</div>
           </div>
                
                
            </div>
             
					    
            
            <!-- col2 -->
       <div class="col-md-6">    
			 
      	<div class="form-group required">
			<label class="fipaFldLblText"
					for="txtFldDlgCtType"><font color="maroon">Types of
							Top-Ups </font></label>
			<input type="text" id="txtFldDlgCtType"
					name="txtFldDlgCtType" class="form-control fld-resp-md"
					onmouseover="fipaTooltip(this);" maxlength="60"  >
       </div>
					
					
					         
       	<div class="form-group">
			 <label class="fipaFldLblText"
					for="txtFldDlgCtTopupAmt"> Amount </label>
					<div class="input-group input-group-sm" style="width:100px">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input type="text" onmouseover="fipaTooltip(this);"  id="txtFldDlgCtTopupAmt" 
					name="txtFldDlgCtTopupAmt" class="form-control numbers applyEvntUsd" />
					</div>
                </div>
					
					         
                
       <div class="form-group">
			  <input type="hidden" name="txtFldDlgCtCrtdBy" />
			 <input type="hidden"
					name="txtFldDlgCtCrtdDate" /> <input type="hidden"
					name="txtFldDlgCtPkid" />
	  </div>         
      </div>     
            
	</fieldset>
</div>






<div class="font_dialogbox" id="cpfDedt_Dialog" style="display: none">

	<fieldset class="fieldsetClsborder">
	   <!-- col1 -->
		<div class="col-md-6"  >    
			<div class="form-group required">
			 <label class="fipaFldLblText" 
					for="selmasterCpfAcctype"> <font color="maroon">CPF
							Account</font></label> 
							<select class="form-control fld-resp-md"
					id="selDlgdtmasterCpfAcctype" name="selDlgdtmasterCpfAcctype"
					onmouseover="fipaTooltip(this);" >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCTYPES}">
							<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
								<option value="${acctypes.cpfAcId}">${acctypes.accType}</option>
							</c:forEach>
						</c:if>
				</select> 
              </div>
				 
			<div class="form-group required">
			  <label class="fipaFldLblText"
					for="txtFldDlgCdDedtType"><font color="maroon">Types
							of Deduction   </font></label> 
				 <input type="text" id="txtFldDlgCdDedtType"
					name="txtFldDlgCdDedtType" class="form-control fld-resp-md"
					onmouseover="fipaTooltip(this);" maxlength="60" > 
              </div>		      
              
       
       	<div class="form-group"> 
       	<label class="fipaFldLblText"
					for="txtFldDlgCdPayTerm"> Payment Term   </label> 
                     <input type="text" id="txtFldDlgCdPayTerm"
					name="txtFldDlgCdPayTerm" class="form-control fld-resp-xs"
					onmouseover="fipaTooltip(this);" maxlength="20"   > 
              </div>		      
					
		
		<div class="form-group">
			 <label class="fipaFldLblText"
					for="txtFldDlgCdBalTerm"> Balance Term </label> 
					<div class="input-group input-group-sm fld-resp-mm" >  
				 	<input type="text" id="txtFldDlgCdBalTerm"
					name="txtFldDlgCdBalTerm" class="form-control fld-resp-xs numbers applyEvntYrs" 
					onmouseover="fipaTooltip(this);" > 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
						</div>
        </div>		      
	  </div>
        <!-- col2 -->
		<div class="col-md-6">    
		 
          <div class="form-group">
			  <label class="fipaFldLblText"
					for="txtFldDlgCdApplicant"><font color="maroon">Applicant
							 </font></label>  
				     <input type="text" id="txtFldDlgCdApplicant"
					name="txtFldDlgCdApplicant" class="form-control fld-resp-md"
					onmouseover="fipaTooltip(this);" maxlength="60"  > 
              </div>		      
          
          
           <div class="form-group">
			  <label class="fipaFldLblText"
					for="txtFldDlgCdType"> Types </label> 
				 <input type="text" id="txtFldDlgCdType"
					name="txtFldDlgCdType" class="form-control fld-resp-md"
					onmouseover="fipaTooltip(this);" maxlength="60" > 
              </div>		      

           
            <div class="form-group">
				<label class="fipaFldLblText"
					for="txtFldDlgCdDedtAmt"> Amount </label>
					<div class="input-group input-group-sm" style="width:100px">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input type="text" onmouseover="fipaTooltip(this);"  id="txtFldDlgCdDedtAmt"
					name="txtFldDlgCdDedtAmt" class="form-control fld-resp-sm numbers applyEvntUsd"  /> 
					</div>
                 
              </div>		      
					
					
					
           <div class="form-group"> 
           <input type="hidden" name="txtFldDlgCdCrtdBy" />
			 <input type="hidden"
					name="txtFldDlgCdCrtdDate" /> <input type="hidden"
					name="txtFldDlgCdPkid" />
		   </div>
              
              
              
          </div>  
          
          
              
                   
	</fieldset>
</div>


 
 
 <!-- Modal  -->
<div class="modal fade" id="cpfAddDed_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1300" role="document">
    <div class="modal-content">
      <div class="modal-header">
     <!--  <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="cpfCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
        
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
      
     <!-- Col 1 -->
		<div class="col-md-6">
		
		<div class="form-group hidden" id="lifeplannamediv" style="border-bottom: 1px solid #becee0;">
		<div class="form-group bold">Life Insurance Details</div>
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label for="txtFldDlglifeplannamediv" class="control-label pull-right text-right">
			 Plan Name  
			  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <span class="blueStrong" id="lifeplannamespan"></span>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label for="txtFldDlgCADDescription" class="control-label pull-right text-right" >
			  <span >Description</span>
			 <!-- <a class="btn btn-default addinfoicon" id="poptxtFldDlgCADDescription"></a> -->
			  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <input class="form-control" id="txtFldDlgCADDescription" name="txtFldDlgCADDescription" class="form-control fld-resp-md" maxlength="60" >  
            </div> 
            </div>
      </div>
      
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label for="txtFldDlgCADApplicant" class="control-label pull-right text-right">
			  <span class="mandFldastrks">Name of Account Holder*</span>
			 <a class="btn btn-default addinfoicon" id="poptxtFldDlgCADApplicant"></a>
			  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control " id="txtFldDlgCADApplicant"
					name="txtFldDlgCADApplicant" >
					<option value="">--SELECT--</option>
					</select>  
            </div> 
            </div>
      </div>
      
			 
			<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label for="selDlgCADApplicantType" class="control-label pull-right text-right">
			  Applicant Type</label>
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control fld-resp-sm" id="selDlgCADApplicantType"
					name="selDlgCADApplicantType"  >
					<option value="">--SELECT--</option>
					<option value="Self">Self</option>
					<option value="Spouse">Spouse</option>
					</select>  
			</div>
      </div>
			</div>
			 


				<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label for="selDlgCADType" class="control-label pull-right text-right">
				Transaction Tag</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control fld-resp-md" id="selDlgCADType"
					name="selDlgCADType"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty DESC_OF_TRANS_LIST}">
						<c:forEach var="descoftrans" items="${DESC_OF_TRANS_LIST}">
							<option value="${descoftrans}">${descoftrans}</option>
						</c:forEach>
					</c:if>
				</select>
			</div>
      </div>
      </div>
      
      
 <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label class="control-label mandFldastrks pull-right text-right" for="selDlgCADCpfAcctype">
			       CPF Account Type*</label>
			       </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control fld-resp-sm"
					id="selDlgCADCpfAcctype" name="selDlgCADCpfAcctype"
					onmouseover="fipaTooltip(this);" >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCTYPES}">
							<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
								<option value="${acctypes.cpfAcId}">${acctypes.accType}</option>
							</c:forEach>
						</c:if>
				</select> 
			</div>
      </div>
      </div>      
			
      
			


<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
				<label for="selDlgCADTypesOfTrans" class="control-label mandFldastrks pull-right text-right">
			       Transaction Type*</label> 
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select class="form-control fld-resp-sm" id="selDlgCADTypesOfTrans"
					name="selDlgCADTypesOfTrans"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty TYPES_OF_TRANS_LIST}">
						<c:forEach var="typesoftrans" items="${TYPES_OF_TRANS_LIST}">
							<option value="${typesoftrans}">${typesoftrans}</option>
						</c:forEach>
					</c:if>
				</select>
			</div>
      </div>
      </div>


	



      </div>
      <div class="col-md-6">
      
      	<div class="form-group hidden" id="lifepolicynodiv"  style="border-bottom: 1px solid #becee0;">
      	<div class="form-group bold">&nbsp;</div>
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label for="txtFldDlglifepolicynodiv" class="control-label pull-right text-right">
			 Policy number
			  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <span class="blueStrong" id="lifepolicynospan"></span>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right"
					for="txtFldDlgCADAmt">Annual Amount </label>
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input type="text" id="txtFldDlgCADAmt"
					name="txtFldDlgCADAmt" onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntUsd" maxlength="126" /> 
					</div>
 					</div>
			</div>
      </div>
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="selDlgCADPayTerm">Frequency of Transaction</label>
				 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-mm" id="selDlgCADPayTerm"
					name="selDlgCADPayTerm" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty FREQUENCY_LIST}">
										  <c:forEach var="frequency" items="${FREQUENCY_LIST}">
										    <option value="${frequency.key}">${frequency.value}</option>
										  </c:forEach>
										</c:if>	 
				</select>
 					</div>
			</div>
      </div>
      
        <div class="form-group">
			<div class="row" >
			<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label for="txtFldDlgCADIncRate" class="control-label pull-right text-right">
			  <span >Increment Rate</span>
			<!--  <a class="btn btn-default addinfoicon" id="poptxtFldDlgCADIncRate"></a> -->
			  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <input class="form-control" id="txtFldDlgCADIncRate" name="txtFldDlgCADIncRate" class="form-control fld-resp-md" maxlength="3">  
            </div> 
            </div>
      </div>
      
      
				<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="txtFldDlgCADPerFrom">Age at Payment Period
			</label>
					
			</div> 
           <div class="col-md-1"> 
           <div class="input-group input-group-sm fld-resp-sm date hidden" id="CADPerFrmpicker">
							<input type="text" id="txtFldDlgCADPerFrom" name="txtFldDlgCADPerFrom" 
							 class="form-control" 
				type="text" maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div>  
				
				 <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgCADAgeFrom" id="txtFldDlgCADAgeFrom"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
					
 					</div>
 			<div class="col-md-2 ">
			<label class="control-label pull-right text-right" for="txtFldDlgCADPerTo">to</label>	
			</div> 
			<div class="col-md-1"> 
		            <div class="input-group input-group-sm fld-resp-sm date hidden" id="CADPerTopicker">
							<input id="txtFldDlgCADPerTo" name="txtFldDlgCADPerTo" 
							 class="form-control" 
				type="text" maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div>   
				
				
				<div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgCADAgeTo" id="txtFldDlgCADAgeTo"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
		 		</div>
			</div>
      </div>
			
			
		<!-- <div class="form-group">
			<div class="row" >
			<div class="col-md-6 col-sm-6 col-xs-6 ">
					<label class="control-label pull-right text-right" for="txtFldDlgCADPerTo">Age To
					</label> 
					
							 </div> 
		           <div class="col-md-6 col-sm-6 col-xs-6"> 
		            <div class="input-group input-group-sm fld-resp-mm date hidden" id="CADPerTopicker">
							<input id="txtFldDlgCADPerTo" name="txtFldDlgCADPerTo" 
							 class="form-control" 
				type="text" maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div>   
				
				
				<div class="input-group input-group-sm fld-resp-mm"> 
				 <input type="text" name="txtFldDlgCADAgeTo" id="txtFldDlgCADAgeTo"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
		          
		 			</div>
					</div>
		      </div>
 -->


      

			
      
 
 
 <div class="form-group" style="display:none">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">
			<label class="control-label pull-right text-right" for="selDlgCADRetrAccAge"> 
				  Amount to be transferred from OA to RA</label>
					 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
          <select class="form-control fld-resp-sm" id="selDlgCADRetrAccAge"
					name="selDlgCADRetrAccAge"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty RET_ACC_AGE_LIST}">
						<c:forEach var="retaccage" items="${RET_ACC_AGE_LIST}">
							<option value="${retaccage}">${retaccage}</option>
						</c:forEach>
					</c:if>
				</select>
 					</div>
			</div>
      </div>
      
       <div class="form-group hidden" id="col_cpf_prcnt_ret">
      	<div class="row" >
				
					 <div class="form-group">
					 <div class="col-md-6 col-sm-6 col-xs-6 ">
					 	<label for="txtFldDlgCADPrcnt" class="control-label pull-right text-right">% for Retirement/Education </label>
					 	</div>
					 	 <div class="col-md-6 col-sm-6 col-xs-6"> 
					 	 <div class="input-group input-group-sm fld-resp-sm"> 
							<input id="txtFldDlgCpfRetrmntPrcnt" name="txtFldDlgCpfRetrmntPrcnt"  
							class="form-control numbers applyEvntpCent26" type="text"  />
							<div class="input-group-addon" > 
			               	<span class="glyphicon" id="symbolprCent"></span> </div>
						</div>
					 	 </div>
					 	
					 </div>				 
				
				
				
				
			  
		   </div>
		   </div>
		   
		    <div class="form-group hidden" id="col_cpf_child_name">
      	<div class="row" >
		    
					 <div class="form-group">
					 <div class="col-md-6 col-sm-6 col-xs-6">
					 	<label class="control-label pull-right text-right" for="selDlgCPFNameOfChild">Name of child</label>
					 	</div>
					 	<div class="col-md-6 col-sm-6 col-xs-6 ">
					 	<select name="selDlgCPFNameOfChild"
					id="selDlgCPFNameOfChild" class="form-control"  >
					<option value="">--SELECT--</option>
					</select>
					</div>
					 </div>				 
				
				</div>
				
				
				
				
      <div class="row">
	 <div class="col-md-6 col-sm-6 col-xs-6">
             <label id="objofinvlabelchange" class="control-label pull-right text-right" for="selDlgCpfYrToRet">
                   Yrs in Tertiary Education
                    
                   </label>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-6 ">
				<div class="input-group input-group-sm fld-resp-mm"> 
                <input type="text" onmouseover="fipaTooltip(this);"  name="selDlgCpfYrToRet"
					id="selDlgCpfYrToRet" class="form-control numbers applyEvntYrs" 
					 />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>      
				</div>	
				<div id="alertRetyrMsgCPF" class="hidden">
      <span class="alertmessage"><img src="images/menuicons/canvas.png" width="6%"/>
      Yr to Retirement value exceeds from Retirement Screen value</span>
      <div class="clearspace20"></div>
      </div> 
            </div> 
            
				
				</div>

			<div class="form-group"> 
           <input type="hidden" name="txtFldDlgCADCrtdBy" id="txtFldDlgCADCrtdBy"/>
			 <input type="hidden" name="txtFldDlgCADCrtdDate" id="txtFldDlgCADCrtdDate" />  
					<input type="hidden" name="txtFldDlgCADPkid"  id="txtFldDlgCADPkid" />
					<input type="hidden" name="txtFldDlgCADRefId" id="txtFldDlgCADRefId"/>
					<input type="hidden" name="txtFldDlgCADMode"  id="txtFldDlgCADMode" />
		   </div>

		</div>
  
	</fieldset>  
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					   <!--  <button type="button" id="cpfCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>



<div class="modal modal-fullscreen fade" id="cpfProjection_Dlg"	style="margin: 10px;" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<!-- <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4>
					 <i class="fa fa-balance-scale"></i>					
				</h4>
			</div> -->
			<div class="modal-body" style="max-height:90vh;overflow:auto;">
			
			 <div class="nav-tabs-custom">
			 	 <ul class="nav nav-tabs">
			 	 	<li class="active"><a href="#Before_Retirement" data-toggle="tab" id="beforeRetrmntTab">Before Retirement</a><br></li>
			 	 	<li><a href="#After_Retirement" data-toggle="tab" id="afterRetrmntTab">After Retirement</a><br></li>
			 	 	
			 	 	<li class="pull-right header"><button type="button"  class="btn BtnFIPACAN StylishCAN" id="btn_close_pdf"  data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					    
					  
  						
  					</li>
			 	 	<li class="pull-right header"><i class="fa fa-balance-scale"></i> CPF Projections</li>
			 	<li class="pull-left header"><button type="button" id="btCPFpdfPrint" class="btn btn-info" style="width: 130px;background-color: #243665; border-color: #243665;"><span>&nbsp;PDF&nbsp;</span></button> </li>
			 	 </ul>
			 </div>
			 
			 <div class="tab-content">
			 	<div class="tab-pane active" id="Before_Retirement">
			 	
			 		<div class="col-md-12">
						<div class="col-md-4" id="cpf_proj_oa1_div" style="page-break-after: always;">
							<table id="cpf_proj_oa1" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
		    			
		    			<div class="col-md-4" id="cpf_proj_sa1_div" style="page-break-before: always;">
							<table id="cpf_proj_sa1" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
		    			
		    			<div class="col-md-4" id="cpf_proj_ma1_div" style="page-break-before: always;">
							<table id="cpf_proj_ma1" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
					</div>
					<div class="col-md-12" id="before_retire_chart_div" style="page-break-before: always;">
					<div class="clearspace40"></div>
						<div id="before_retire_chart" style="text-align:center;overflow-x: auto;page-break-after: always;" ><div class="clearspace40"></div></div>
						
					</div>
					<div class="col-md-12 hide" id="pdfshowhide" style="page-break-before: always;">
						<div id="after_retire_charts" style="text-align:center;overflow-x: auto;page-break-after: always;" ></div>
					</div>
			 	</div>
			 	
			 	
			 	<div class="tab-pane" id="After_Retirement">
			 		<div class="col-md-12">
						<div class="col-md-3" style="page-break-after: always;">
							<table id="cpf_proj_ra1" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
		    			
						<div class="col-md-3" style="page-break-before: always;">
							<table id="cpf_proj_oa2" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
		    			
		    			<div class="col-md-3" style="page-break-before: always;">
							<table id="cpf_proj_sa2" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
		    			
		    			<div class="col-md-3" style="page-break-before: always;">
							<table id="cpf_proj_ma2" class="dataTable table-bordered table-striped display hover"  style="width:100%;"> 
			    			</table>
		    			</div>
					</div>
					
					<div class="col-md-12" style="page-break-before: always;">
					<div class="clearspace40"></div>
						<div id="after_retire_chart" style="text-align:center;overflow-x: auto;" ><div class="clearspace40"></div></div>
					</div>
			 	
			 	</div>
			 </div>
			
			</div>
			
			<!-- <div class="modal-footer">
      			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      		</div> -->
      
      
		</div>
	</div>
</div>
