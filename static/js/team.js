$(document).ready(function() {

    // Mix It Up Plugin for JQuery
    $('#cardframe').mixItUp();

    
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
    $("div.lazy").lazyload({
        effect : "fadeIn"
    });

});
