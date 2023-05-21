<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div  class="panel-group">
	<div id="estateplansection" class="accord-content">
<!-- 	<span class="panelHeaderTitle"> Estate Planning</span><br>  -->
	 <!-- <fieldset class="fieldsetClsborder height480"> -->
<!-- 	table-borderless -->
			<table class="display nowrap table  table-bordered" style="width:100%">
				<col style="width: 15%;"></col>
				<col style="width: 15%;"></col>
				<col style="width: 15%;"></col>
				
				<thead>
					<tr valign="top" align="left" class="fipaFldLblTextbold" style="border-bottom:1px solid #465a65">
						 
						<td><!-- &nbsp; -->
							<div class="panel-heading" style="background-color: #1D655C;">
								  <span class="custompanelHeaderTitle"><small> </small></span>  
							    </div>
						</td>
						<td>
							<!-- <div class="fipaFldLblTextbold" style="text-align: center;">Self</div> -->
							<div class="panel-heading" style="background-color: #1D655C;text-align: center;">
							  <span class="custompanelHeaderTitle"><small> Self</small></span>  
						    </div>
						</td>
						<td>
							<!-- <div class="fipaFldLblTextbold" style="text-align: center;">Spouse</div> -->
							<div class="panel-heading" style="background-color: #1D655C;text-align: center;">
							  <span class="custompanelHeaderTitle"><small> Spouse</small></span>  
						    </div>
						</td>
					</tr>

				</thead>
				<tbody>
					<tr valign="top" style="text-align: left" >
					 <td rowspan>
					 <input id="txtFldEstTrstDesc" name="txtFldEstTrstDesc"  
					 value="Have any Will or Trust been set up?"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="outline: none;text-align: right;border:hidden;background:transparent"  
                    readonly="true" /> 
					 </td> 
					<td align="center"> 
					<select name="txtFldEstSlfTrstFlg" id="txtFldEstSlfTrstFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaClient" >
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center" >
					<select name="txtFldEstSpsTrstFlg" id="txtFldEstSpsTrstFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					
					
					</tr>
					<tr>
					<td colspan=3><label for="exampleInputEmail1" style="margin-left: 25px;">Remark</label><textarea name="txtFldEstTrstRmrks" id="txtFldEstTrstRmrks"   onmouseover="fipaTooltip(this);" 
					class="form-control fld-resp"  rows="1" maxlength="300" style="margin-left: 26px; width: 97%;"></textarea></td>
					</tr>
				 
					<tr valign="top" style="text-align: left">
					  <td rowspan>
					 <input id="txtFldEstLPOADesc" name="txtFldEstLPOADesc"  
					 value="Have any LPOA been set up?"  
                    class="fipaFldLblText fld-resp readOlyCursor"  style="outline: none;text-align: right;border:hidden;background:transparent"  
                     readonly="true" /> 
					 </td> 
					 
					<td  align="center">
					<select name="txtFldEstSlfLPOAFlg" id="txtFldEstSlfLPOAFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsLPOAFlg" id="txtFldEstSpsLPOAFlg"  onmouseover="fipaTooltip(this);"
					 class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					
					</tr>
					<tr>
					
					<td colspan=3><label for="exampleInputEmail1" style="margin-left: 25px;">Remark</label><textarea name="txtFldEstLPOARmrks" id="txtFldEstLPOARmrks"    onmouseover="fipaTooltip(this);"
					class="form-control fld-resp"  rows="1" maxlength="300" style="margin-left: 26px; width: 97%;"></textarea></td>
					</tr>
					
					<tr valign="top" style="text-align: left"> 
					 <td rowspan>
					 <input id="txtFldEstCharityDesc" name="txtFldEstCharityDesc"  
					 value="Do you intend to provide gift to charity"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="outline: none;text-align: right;border:hidden;background:transparent" 
                     readonly="true" /> 
					 </td> 
					 
					<td  align="center">
					<select name="txtFldEstSlfCharityFlg" id="txtFldEstSlfCharityFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsCharityFlg" id="txtFldEstSpsCharityFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					
					</tr>
					<tr>
					<td colspan=3><label for="exampleInputEmail1" style="margin-left: 25px;">Remark</label><textarea name="txtFldEstCharityRmrks" id="txtFldEstCharityRmrks"    onmouseover="fipaTooltip(this);"
					class="form-control fld-resp"  rows="1" maxlength="300" style="margin-left: 26px; width: 97%;"></textarea></td>
					</tr>
					
					<tr valign="top" style="text-align: left">
					  
					 <td rowspan>
					 <input id="txtFldEstOverseasDesc" name="txtFldEstOverseasDesc" 
					  value="Do you have any assets overseas"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="outline: none;text-align: right;border:hidden;background:transparent"  
                    readonly="true" /> 
					 </td> 
					 
					 
					<td  align="center">
					<select name="txtFldEstSlfOverseasFlg" id="txtFldEstSlfOverseasFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsOverseasFlg" id="txtFldEstSpsOverseasFlg"  onmouseover="fipaTooltip(this);"
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					
					</tr>
					<tr>
					<td colspan=3><label for="exampleInputEmail1" style="margin-left: 25px;">Remark</label><textarea name="txtFldEstOverseasRmrks" id="txtFldEstOverseasRmrks"    onmouseover="fipaTooltip(this);"
					class="form-control fld-resp"  rows="1" maxlength="300" style="margin-left: 26px; width: 97%;"></textarea></td>
					</tr>
					
					<tr>
					<td><input type="hidden" name="estId"
							id="estId" />
							<input type="hidden" name="txtFldEstCrtdBy"
							id="txtFldEstCrtdBy" />
							<input type="hidden" name="txtFldEstCrtdDate"
							id="txtFldEstCrtdDate" /></td>
					</tr>
				</tbody>
			</table>	
			<!-- </fieldset>			 -->
 </div>
 </div> 
 


 
