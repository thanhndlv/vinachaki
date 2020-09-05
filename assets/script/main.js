$(window).resize(function(){
	$('head meta[name="viewport"]').prop("content","width=device-width, user-scalable=no");
	if($(window).width() < 1024 && $(window).width() >= 768){
		$('head meta[name="viewport"]').prop("content","width=1024, shrink-to-fit=no");
    }
});
$(window).trigger("resize");