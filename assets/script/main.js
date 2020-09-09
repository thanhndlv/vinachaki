$(window).resize(function(){
	$('head meta[name="viewport"]').prop("content","width=device-width, user-scalable=no");
	if($(window).width() < 1024 && $(window).width() >= 768){
		$('head meta[name="viewport"]').prop("content","width=1024, shrink-to-fit=no");
	}
	if($(window).width() < 767 && $(window).width() >= 500){
		$('head meta[name="viewport"]').prop("content","width=500, shrink-to-fit=no");
	}
});
$(window).trigger("resize");
$(document).ready(function(){
	if($('.js-popup').length> 0){
		$('.js-popup').click(function(e){
			e.preventDefault();
			$('body').addClass('has-popup');
			$('[data-target]').hide();
			$('[data-target="'+$(this).data('options')+'"]').show();
		});
		$('.popup-close').click(function(){
			$('body').removeClass('has-popup');
		})
	}
});