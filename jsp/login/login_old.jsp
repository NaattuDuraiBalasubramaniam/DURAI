<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

 <div class="loginpge-inner-bg" 
 style="margin: 3px;background-image: url('images/singapore (2).jpg'); background-repeat: no-repeat;background-size: 100% 100%;"> 
 


	<div class="col-sm-5" style="padding-top:100px;float: right;">
		<form action="FipaHome.do" name="fipaLogin" method="post">
			<table 
				style="border-collapse: separate; border-spacing: 1.02em;
				height: 50%;background-color: white;border-radius: 75px;width: 80%;">
				<tbody>
					<tr>
						<td><c:if test="${not empty message}">
								<div id="loginmsgdiv"
									class="alert alert-danger alert-dismissible fade in"
									role="alert" style="z-index: 1000;position:absolute;">
									<button type="button" class="close" data-dismiss="alert"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									${message}
								</div>
							</c:if>
						</td>
					</tr>
					<tr>
						<td><img src="images/fipa_admin_logo.png"
						style="max-width: 46%; margin-top: 0px;  margin-left: 100px;">
							</td>
					</tr>
					<tr>
					 	<td>&nbsp;</td>
					</tr>
					 
					<tr>
					<td align="center">
						<div class="floating-form">
						    <div class="floating-label">      
						      <input class="floating-input" type="text" placeholder=" " 
						      id="txtFldUserId" name="txtFldUserId" data-toggle="popover" 
						      required="required" title="Login"  autocomplete="off" data-content="Key-in User Id" style="font-size: 18px;">
						      <span class="highlight"></span>
						      <label style="font-size: 18px;">User ID</label>
						    </div>
						</div>

					</td>
					</tr>
					
					<tr>
					<td align="center">
						<div class="floating-form">
							<div class="floating-label">      
								      <input class="floating-input" type="password" placeholder=" " id="txtFldUserPassword"	name="txtFldUserPassword" required="required" data-toggle="popover" title="Login" data-content="Key-in Password" style="font-size: 18px;" >
								      <span class="highlight"></span>
								      <label style="font-size: 18px;">Password</label>
							</div>
					    </div>
					</td>
					</tr>

					 
					<tr  >
						<td align="center"> 
						<button type="button" id="btnloginId"  class="button button-4 button-4a icon-arrow-right" 
						style="background: #243665;" onclick="submitLogin()">
						<i class="fa fa-arrow-right"></i>Log in</button>
						 <img src="images/loginload.gif" id="loadit" width="15%" class="hidden"> 
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>

</div> 


