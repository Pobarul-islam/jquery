$(document).ready(function(){
	$('button').click(function(){
		$('h3').css('background','green')
			.slideUp(1000)
			.slideDown(1000)
			.hide(1000);
	})
})