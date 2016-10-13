
	

	/*for last one 600px
		for first two 400px;
		then all 200px;
	*/
	$(window).scroll(function() {
		$('#firefox').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
		$('#google_developers').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
		$('#image3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
		$('#image6').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
		$('#image4').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
		$('#image5').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideUp");
			}
		});
	});