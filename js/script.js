$(document).ready(function () {
    //Tabs
    if ($(window).width() < 992) {
        $('.all_com_content').addClass('all_com_content_disabled');
        $('.all_com_content_slick').removeClass('all_com_content_disabled');
        $('.tabs_slick').slick({
            arrows: false,
            dots: true,
        });
    } else {
        $('.all_com_content_slick').addClass('all_com_content_disabled');
        $('.all_com_content').removeClass('all_com_content_disabled');
    }

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

    const setNonActimeProgress = function (step) {
        $('.slide_progress_mark[data-progress-step="' + step + '"]').removeClass('slide_progress_mark_active');
        $('.progress_line[data-line-step="' + step + '"]').removeClass('progress_line_active');
    }



    const setActiveSlide = function (slide) {
        $('.form_wrapper').removeClass('form_wrapper_active');
        $('.form_wrapper[data-slide="' + slide + '"]').addClass('form_wrapper_active');
    }

    const changeSlide = function (sliderCurrentStep) {

        let prevButton = $('.slider_move_btn[data-batton="prev"]');
        let nextButton = $('.slider_move_btn[data-batton="next"]');
        let slidesCount = $('.form_wrapper').length;

        if (sliderCurrentStep == 0) {
            prevButton.addClass('disabled_btn');
            prevButton.removeClass('btn_back');
        } else {
            prevButton.removeClass('disabled_btn');
            prevButton.addClass('btn_back');
        }

        if (sliderCurrentStep == (slidesCount - 1)) {
            nextButton.text('Get Result');
            nextButton.removeClass('btn_forward');
            nextButton.addClass('btn_get_result');
        } else {
            nextButton.text('Next Question');
            nextButton.removeClass('btn_get_result');
            nextButton.addClass('btn_forward');
        }

        if (sliderCurrentStep > (slidesCount - 1)) {
            $('#slider').addClass("slider_hidden");
            $('#result').removeClass('result_hidden');
            $('#result').addClass('result');
        } else {
            $('#slider').removeClass("slider_hidden");
            setActiveProgress(sliderCurrentStep);
            setActiveSlide(sliderCurrentStep);
        }

        setCurrentSliderStep(sliderCurrentStep);
    }

    $('.slider_move_btn').click(function () {
        let sliderCurrentStep = getCurrentSliderStep();

        if ($(this).attr('data-batton') == 'prev') {

            if (sliderCurrentStep == 0) {
                return;
            }
            setNonActimeProgress(sliderCurrentStep);
            sliderCurrentStep--;
        } else {
            sliderCurrentStep++;
            setActiveProgress(sliderCurrentStep);
        }

        changeSlide(sliderCurrentStep);
    });
    // slider form end

});