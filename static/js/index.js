function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav-buttons a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-buttons a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
$(document).ready(function() {
    $(".dropdownbutton").click(function() {
        if ($("ul.form").hasClass("active")) {
            $(".main-body").css("padding-left", "0px");
            $("ul.form").removeClass("active");
        } else {
            $(".main-body").css("padding-left", "30px");
            $("ul.form").addClass("active");
        }
        console.log("hello world");

    });
    $(document).on("scroll", onScroll);
    // $('a[href^="#"]').on('click', function(e) {
    //     e.preventDefault();
    //     $(document).off("scroll");

    //     $('a').each(function() {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');

    //     var target = this.hash,
    //         menu = e.target;
    //     $target = $(e.target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top + 2
    //     }, 500, 'swing', function() {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

    max_scroll = ($(".landing-footer").position()).top + $(".landing-footer").outerHeight() - $(".nav-buttons").height();
    //console.log(($(".nav-buttons").position()).top);
    $(window).scroll(function() {
        var navbar = $(".nav-buttons");

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > max_scroll && !navbar.is(".navbuttonFixed")) {
            navbar.addClass("navbuttonFixed");
            $(".main-header")
        } else if (scrollTop < max_scroll && navbar.is(".navbuttonFixed")) {
            navbar.removeClass("navbuttonFixed");
        }

    });


    $('body').css('overflow','hidden');
    $('body').css('position','fixed');
    $('body').css('overflow','visible');
    $('body').css('position','static');
        $('body').css('overflow','visible');
        $('body').css('position','static');
});
