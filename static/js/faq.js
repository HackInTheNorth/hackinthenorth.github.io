$(document).ready(function(){
	var boxes = $('.box');
	var questions = $('.question')
	boxes.slideToggle();
	$(".question").click(function(){
		$("#box"+$(this).data('box')).slideToggle();
		$(this).toggleClass('open');
		for (ques of questions) {
			if($(ques).data('box')!==$(this).data('box') && $(ques).hasClass('open')){
				$(ques).toggleClass('open');
				$("#box"+$(ques).data('box')).slideToggle();
			}
		}
	});

});