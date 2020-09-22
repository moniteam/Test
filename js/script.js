$(document).ready(function () {
    $('.tab_trigger').click(function (e) {
        e.preventDefault();

        $('.tab_image').removeClass('tab_active');
        $('.trigger_btn').removeClass('trigger_btn_active');

        $(this).find('.trigger_btn').addClass('trigger_btn_active');
        $($(this).attr('href')).addClass('tab_active');
    });

    $('#active_call').click();

    $('.btn_forward').click(function (e) {
        e.preventDefault();

        $('.form_wrapper').removeClass('form_wrapper_active');

        $(this).

        console.log("1");
    });

    
});