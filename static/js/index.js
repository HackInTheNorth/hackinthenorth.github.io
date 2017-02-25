function scrollTo() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
}

$(document).ready(function() {
    //     var currentURL = location.href;

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

    /*update active link on basis of section in current viewport*/
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

    /*scroll to section on click*/
    nav.find('a').on('click', scrollTo);
    
    /*play trailer on click*/
    $("#trailer-button").magnificPopup({
        items: {
            src: 'https://drive.google.com/file/d/0B7IJhC8PF-c9RzFLRjZkYXVsdkE/preview?autoplay=1'
        },
        type: 'iframe'
    });

});
