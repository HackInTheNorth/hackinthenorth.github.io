$(document).ready(function() {

    // Mix It Up Plugin for JQuery
    var images = $("div.lazy");
    $('#cardframe').mixItUp({
        callbacks: {
            onMixEnd: function() {
                $("div.lazy").trigger('scroll');
            }
        }
    });


    $(".button").click(function() {
        $('html,body').animate({
                scrollTop: $("#cardframe").offset().top - 60
            },
            'slow');
    });
    var navBar = $('#nav_bar');
    var navBarPosition = navBar.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > navBarPosition) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < navBarPosition) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });


    // Lazy Load plugin for JQuery
    images.lazyload({
        effect: "fadeIn"
    });

});
