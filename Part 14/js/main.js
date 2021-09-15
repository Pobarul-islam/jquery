$(document).ready(function(){
	//$('button').click(function(){
	//	$('p').append('<b>Pobarul islam</b>')
//	})
	
	$(".button1").click(function(){
		$("img").after("<b>Pobarul isalm</b>")
	})
	$(".button2").click(function(){
		$("img").before("<b>Pobarul isalm</b>")
	})
})