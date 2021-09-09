$('document').ready(function(){
	$('.pobarul').click(function(){
		$('.lorem').slideToggle(2000);
		
	})
	
	$('button').click(function(){
		$('.lorem').stop();
	})
})