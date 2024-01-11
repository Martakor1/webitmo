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

    function highlightCurrentLinkNav() {
        var webItmoAppend = 1
        var ulElem = document.getElementsByClassName("left-aside")[0]
        .getElementsByTagName("ul")[0];
        var currentSectionName = location.pathname.split("/")[1 + webItmoAppend]
        var aElems = Array.from(ulElem.getElementsByTagName("a"))
        aElems.forEach(element => {
            if (element.getAttribute("href").split("/")[0] == currentSectionName) {
                element.classList.add("selected");
            }
        });
    }

    highlightCurrentLinkNav();
});

