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
        $('.slider').attr('data-step', slideNum);

        if (slideNum > 0) {
            $('.disabled-link').removeClass('disabled-link').addClass('btn_back');
            $('.disabled_btn').removeClass('disabled_btn').addClass('active_btn_back');
        }

        let slideNumData = $('.slider').data('step');
        console.log('Номер слайда ' + slideNumData);


    });

    $('.active_btn_back').click(function (e) {
        e.preventDefault();

        let slideNumData = $('.slider').data('step');

        slideNumData - 1;

        console.log(slideNumData);

        $(slideList[slideNumData]).removeClass('form_wrapper_active');

        // $(slideList[slideNumData - 1]).addClass('form_wrapper_active');

        // if (slideNumData < slideList.length - 1) {
        //     $('.btn_get_result').text('Next Question').addClass('btn_forward').removeClass('btn_get_result');
        // } else if (slideNumData <= 0) {
        //     $('.btn_back').addClass('disabled-link').removeClass('btn_back');
        // }
        //else {
        //     slideNumData - 1;
        // }
    });