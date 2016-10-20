
$(document).ready(function(){
$(".dropdownbutton").click(function(){
	if($("ul.form").hasClass("active")){
		$(".main-body").css("padding-left","0px");
		$("ul.form").removeClass("active");
	}
	else
	{
		$(".main-body").css("padding-left","0px");
		$("ul.form").addClass("active");	
	}
	console.log("hello world");

});
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('ul.form li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul.form li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

});