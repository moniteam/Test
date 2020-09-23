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

    const getCurrentSliderStep = () => $('#slider').attr('data-slide-step');
    console.log(getCurrentSliderStep());

    const setCurrentSliderStep = function (step) {
        $('#slider').attr('data-slide-step', step);
    }
    
    const setActiveProgress = function (step) {
        $('.slide_progress_mark[data-progress-step="' + step + '"]').addClass('slide_progress_mark_active');
        $('.progress_line[data-line-step="' + step + '"]').addClass('progress_line_active');
    }

    const setActiveSlide = function (slide) {
        $('.form_wrapper').removeClass('form_wrapper_active');
        $('.form_wrapper[data-slide="' + slide + '"]').addClass('form_wrapper_active');
    }

    const changeSlide = function (sliderCurrentStep) {

        let prevButton = $('.btn_back[data-batton="prev"]');
        let nextButton = $('.btn_forward[data-batton="next"]');
        let slidesCount = $('.form_wrapper').legth;

        if (sliderCurrentStep == 0) {
            prevButton.addClass('disabled_btn');
        } else {
            prevButton.romoveClass('disabled_btn');
        }

        if (sliderCurrentStep == (slidesCount - 1)) {
            nextButton.text('Get Result');
        } else {
            nextButton.text('Next Question');
        }


    }

});