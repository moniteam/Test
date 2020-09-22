$(document).ready(function () {
    //Tabs
    $('.tab_trigger').click(function (e) {
        e.preventDefault();

        $('.tab_image').removeClass('tab_active');
        $('.trigger_btn').removeClass('trigger_btn_active');

        $(this).find('.trigger_btn').addClass('trigger_btn_active');
        $($(this).attr('href')).addClass('tab_active');
    });

    $('#active_call').click();
    //end tabs

    //slider form
    let slideNum = 0;
    const slideList = $('.form_wrapper');

    $('.btn_forward').click(function (e) {
        e.preventDefault();
        $(slideList[slideNum]).removeClass('form_wrapper_active');

        if (slideNum == slideList.length - 1) {
            $(this).text('Get Result').removeClass('btn_forward').addClass('btn_get_result');
            console.log(slideNum);
        } else {
            slideNum++;
        }

        $(slideList[slideNum]).addClass('form_wrapper_active');


    });

    if (slideNum > slideList.length) {
        $('.disabled-link').removeClass('disabled-link').addClass('btn_back');
        $('.disabled_btn').attr('disabled', 'nul');
    }

    $('.btn_back').click(function (e) {
        e.preventDefault();

        $(slideList[slideNum]).removeClass('form_wrapper_active');

        if (slideNum < slideList.length - 2) {
            $('.btn_get_result').text('Next Question').removeClass('btn_get_result').addClass('btn_forward');
        } else if (slideNum == slideList.length) {
            $(this).addClass('disabled-link');
        }

        slideNum--;

        $(slideList[slideNum]).addClass('form_wrapper_active');

        console.log(slideNum);
    });

});