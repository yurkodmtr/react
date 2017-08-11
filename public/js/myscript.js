$(window).load(function(){
	
	/* variants */
	$('.variants__open').click(function(){
		$(this).parent().parent().toggleClass('act');
	});
	
	
	/* rating */	
	$('.rating_act i').hover(function(){
		if (!$('.rating_act i').hasClass('actt')){
			$(this).addClass('act');
			$(this).prev().addClass('act');
			$(this).prev().prev().addClass('act');
			$(this).prev().prev().prev().addClass('act');
			$(this).prev().prev().prev().prev().addClass('act');
		}
	});								
	
	$('.rating_act i').mouseout(function(){
		$('.rating_act i').removeClass('act');
		return false;									
	});
	
	$('.rating_act i').click(function(){
		$('.rating_act i').removeClass('actt');
		$(this).addClass('actt');
		$(this).prev().addClass('actt');
		$(this).prev().prev().addClass('actt');
		$(this).prev().prev().prev().addClass('actt');
		$(this).prev().prev().prev().prev().addClass('actt');
		
		if ($(this).hasClass('text1')) {
			$(this).parent().next().html('текст 1');
		}
		if ($(this).hasClass('text2')) {
			$(this).parent().next().html('текст 2');
		}
		if ($(this).hasClass('text3')) {
			$(this).parent().next().html('текст 3');
		}
		if ($(this).hasClass('text4')) {
			$(this).parent().next().html('текст 4');
		}
		if ($(this).hasClass('text5')) {
			$(this).parent().next().html('текст 5');
		}
	});
	
	/* rating icon */
	$('.rating_icon span').click(function(){
		$('.rating_icon span').removeClass('act');
		$(this).addClass('act');
		if ($(this).hasClass('icon_1')) {
			$(this).parent().next().css('color','#ed1c24');
		}
		if ($(this).hasClass('icon_2')) {
			$(this).parent().next().css('color','#95792f');
		}
		if ($(this).hasClass('icon_3')) {
			$(this).parent().next().css('color','#233566');
		}
		if ($(this).hasClass('icon_4')) {
			$(this).parent().next().css('color','#2491ba');
		}
		if ($(this).hasClass('icon_5')) {
			$(this).parent().next().css('color','#83ed25');
		}
	});
	
	
	
	
});