$(document).ready(function(){
	$("span").parentsUntil("div").css({
		"color" : "green",
		"border": "2px solid green"
	});
});