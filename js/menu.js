	  $( document ).ready(function() {
	  	  
	  var size = document.body.clientWidth;
	  $('.body').animate({ scrollLeft:(size+4)}, 1);

	$('.menu>button').click(function() {
		if(!$(this).hasClass('active')){
		$('.menu>button').removeClass('active');
		$(this).addClass('active');
		$('.body').animate({ scrollLeft:(	$('.body').scrollLeft() + $('.body').find('#'+$(this).attr('id')).position().left)	}, 300);
		

		
 }
 
 });
 });