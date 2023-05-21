<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="tabset" style="background: white;">


<ul id="paritculars" class="nav nav-pills fipa_common_tab" role="tablist"	data-tabs="tabs" style="height: 30px">
	<li class="active"><a href="#clientParticulars" data-toggle="tab" id="Clientdtlstab">
			<label class="tablabel" id="Clientdtlstablbl"><i
				class="fa fa-user" title="Client Details"></i>&nbsp;&nbsp;&nbsp;&nbsp;Client</label>
	</a></li>
	<li><a href="#spouseParticulars" data-toggle="tab" id=""> <label
			class="tablabel" id="Spousedtlstablbl"><i
				class="fa fa-user-plus" title="Spouse Details"></i>&nbsp;&nbsp;&nbsp;&nbsp;Spouse</label>
	</a></li>

	<li><a href="#childParticulars" data-toggle="tab" id="" class=""> <label
			class="tablabel" id="Childdtlstablbl"><i class="fa fa-child"
				title="Children Details"></i>&nbsp;&nbsp;&nbsp;&nbsp;Children</label>
	</a></li>

	<li><a href="#dependantParticulars" data-toggle="tab" id=""> <label
			class="tablabel" id="Dependtlstablbl"><i class="fa fa-users"
				title="Dependent Details"></i>&nbsp;&nbsp;&nbsp;&nbsp;Dependent's
				Info</label>
	</a></li>
</ul>

<hr class="border"/>

<div class="clearspace5"></div>

<div class="tab-content">
	<div role="tabpanel" class="tab-pane fade in active" id="clientParticulars">
		<jsp:include page="/jsp/fipa/clientdetails.jsp"></jsp:include>
	</div>

	<div role="tabpanel" class="tab-pane fade" id="spouseParticulars">
		<jsp:include page="/jsp/fipa/spousedetails.jsp"></jsp:include>
	</div>

	<div role="tabpanel" class="tab-pane fade" id="childParticulars">
		<jsp:include page="/jsp/fipa/childparticular_new.jsp"></jsp:include>
	</div>

	<div role="tabpanel" class="tab-pane fade" id="dependantParticulars">
		<jsp:include page="/jsp/fipa/dependants_new.jsp"></jsp:include>
	</div>

</div>


</div>