 

	//Toggle menu
    $('.header__nav-list').removeClass('header__nav-list_open');

    $('.header__nav-toggle').on('click' , function(){
        $('.header__nav-list').toggleClass('header__nav-list_open');
    });

	//Search field

    $('.search__field').removeClass('search__field_open');
    $('.search__button-toggle').on('click' , function(){
        $('.search__field').toggleClass('search__field_open');
    });

	//Vide-block/ Height setting


    $('.container__button').on('click' , function(){
        const contentHeight = $(this).prev('.video-slider').height();
        const itemHeight =  $('.video-slider__item').height() + 30;
        const content = $(this).prev('.video-slider').children();
        const fullContentHeight = itemHeight * content.children().length ;

        if (Math.floor(fullContentHeight) === Math.floor(contentHeight)) {
            $(this).prev('.video-slider').css('height', itemHeight * 3);

        } else {
            $(this).prev('.video-slider').css('height', fullContentHeight);
        }
    });



    $(document).ready(function() {
        $('.video-slider').slick({
            infinite:false,
            speed: 300,
            adaptiveHeight:true,
            slidesToShow: 3,
            slidesToScroll: 1,

            prevArrow: ' <button id="prev" class="container__prev"></button>',
            nextArrow: ' <button id="next" class="container__next"></button>',
            responsive: [
                {
                    breakpoint: 1111,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1

                    }
                }
            ]
        });

    });
