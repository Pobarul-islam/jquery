$(document).ready(function(){
	
	$('#button1').click(function(){
		alert("Babul:"+ $(".text").text())
	});
	
	
		$('#button2').click(function(){
		alert("Text:"+ $(".text").html())
	});
	
	$(".butto").click(function(){
		alert($("#input").val());
	});
	
	$(".button4").click(function(){
		alert($(".input4").val());
	})
})