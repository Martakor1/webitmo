$(function () {
    isOpenBurger = false;
    $('body header').on('click', function (e) {
        if (e.target.className == "burger-button" && !isOpenBurger) {
            //берём с запасом +150
            // (вроде бы это надо чтобы на мобилках заполнить пробел)
            $('.left-aside').animate({height: $(window).height()+150}, 200, function () {
                $(this).css('overflow', 'auto');
            });
            $('body').css('overflow', 'hidden');
            isOpenBurger=true;
        }
        else {
            if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON') {
                if (isOpenBurger) {
                    $('.left-aside').animate({height: '0'}, 200).css('overflow', 'hidden');
                    $('body').css('overflow', 'auto');
                    isOpenBurger=false;
                }
            }
        }
    });
});