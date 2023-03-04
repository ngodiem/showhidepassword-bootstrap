$(".showhide").click(function(event) {
	/* Act on the event */
	var type = $("[name=password]").attr("type");
	if (type == "text") {
		$("[name=password]").attr("type", "password");
		$(this).html('<i class="fas fa-eye"></i>');
		
	}
	else {
		$("[name=password]").attr("type", "text");
		$(this).html('<i class="fas fa-eye-slash"></i>');
	}
	
});

