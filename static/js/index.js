function scrollTo() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
}

$(document).ready(function() {
    var currentURL = location.href;
    
    var sections = $('.section'),
        nav = $('nav'),
        nav_height = nav.outerHeight(),
        sponsorsSecondLink = $('#sponsor-link2');

    /*updates active link according to current location, if the URL has some hash link to some section*/
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            if ($(this).attr('id') != 'home') {
                nav.addClass('not-landing');
            } else {
                nav.removeClass('not-landing');
            }
        }


    });


    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                if ($(this).attr('id') != 'home') {
                    nav.addClass('not-landing');
                } else {
                    nav.removeClass('not-landing');
                }
            }
        });
    });
    nav.find('a').on('click', scrollTo);
    sponsorsSecondLink.on('click', scrollTo);
    // $('.subscribe-box btn1').on('click', )
});
