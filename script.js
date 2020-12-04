$(() => {
    $('.menu-item').click(function() {
        $(this).parent().children().each(function() {
            $(this).removeClass('menu-item__active');
        })

        $(this).addClass('menu-item__active');

        $('.menu').removeClass('hideRightLine').removeClass('hideLeftLine');

        $('.menu').each(function(idx) {
            if ($('.menu').eq(idx + 1).length) {
                if ($('.menu').eq(idx + 1).find('.menu-item__active')) {
                    if ($(this).find('.menu-item__active').index() >= $('.menu').eq(idx + 1).find('.menu-item__active').index())
                        $(this).addClass('hideRightLine');
                    else {
                        $(this).removeClass('hideRightLine');

                        if ($(this).find('.menu-item__active').index() <= $('.menu').eq(idx + 1).find('.menu-item__active').index())
                            $('.menu').eq(idx + 1).addClass('hideLeftLine');
                    }
                }
            }
        })
    })
})