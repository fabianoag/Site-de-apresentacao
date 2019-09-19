// JavaScript Document
$(document).ready(function(e) {
	$("#img-mini1").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-layout.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no CorelDraw, modelo de layout de uma Web site.");  
    });	
	
		$("#img-mini2").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-layout2.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no DreamWeaver, estrutura utilizada no site da<br/>Side Company Treinamentos.");  
    });	
	
		$("#img-mini3").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-photoshop.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no PhotoShop, efeitos mascara.");  
    });	
	
	$("#img-mini4").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-photoshop2.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no PhotoShop, cartaz de surf.");  
    });	
	
		$("#img-mini5").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-photoshop3.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no PhotoShop, Lista de efeitos <BR/> da Galeria de Filtros.");  
    });	
	
	$("#img-mini6").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/elaboracao-de-photoshop4.JPG",
			width:"600"
		});		
		$("#conteudo").html("Feito no PhotoShop, tratamento de imagem antiga.");  
    });	
	
	$("#img-mini7").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/exemplo-capa-de-revista.JPG",
			width:"300"
		});		
		$("#conteudo").html("Feito no CorelDraw, um modelo<br/> de uma capa, da revista info");  
    });	
	
	$("#img-mini8").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/exemplo-capa-de-revista2.JPG",
			width:"300"
		});		
		$("#conteudo").html("Feito no CorelDraw, Capa de revista da Caras.");  
    });	
	
	$("#img-mini9").click(function(e) {
		limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/logo-linux.JPG",
			width:"600"
		});		
		$("#conteudo").html("Este e um exemplo de uma das logo marca <br/> do sistema operacional Linux feito no CorelDraw.");  
    });
	
		$("#img-mini10").click(function(e) {
			limpa();
		$("#mostra-img")
		.attr({
			src:"imagens/portfolio/logo-linux2.JPG",
			width:"600"
		});			
		$("#conteudo").html("Aqui esta um outro exemplo de logo feito no CorelDraw, <br/> o logo do sistema operacional Mandriva.");  
    });
		
	function limpa(a){
		$("#mostra-img")
		.attr({
			src:"",
			width:""
		});			
		$("#conteudo").html("");  
		
	}
	
});