$(function(){
	$("#tabela input").keyup(function(){		

		var index = $(this).parent().index();
		var nth = "#tabela li:nth-child("+(index+1).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tabela tbody ul").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#tabela input").blur(function(){
		$(this).val("");
	});	
});