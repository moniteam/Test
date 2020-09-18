$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 3) {
            $(".header").css('background-color', 'white');
            $(".logo_white").attr('src', 'img/icon/header/dSTAR LAB BLACK.svg');
        } else if (scroll_pos = 0) {
            $(".header").css('background-color', 'none');
        }
    });
});