

	//Toggle menu
    $('.header__nav-toggle').on('click' , function(){
        $('.header__nav-list').slideToggle(500);
    });

	//Search field

    $('.search__field').removeClass('search__field_open');
    $('.search__button-toggle').on('click' , function(){
        $('.search__field').toggleClass('search__field_open');
    })

	//Vide-block/ Height setting

   /* $('.container__button').on('click' , function(){
        const contentHeight = $(this).prev('.slick-list').height();
        const itemHeight =  $('.video-slider__item').height() + 30;
        const content = $(this).prev('.video-slider').children();
        const fullContentHeight = itemHeight * content.children().length ;

        if (Math.floor(fullContentHeight) === Math.floor(contentHeight)) {
            $(this).prev('.video-slider').css('height', itemHeight * 3);

        } else {
            $(this).prev('.video-slider').css('height', fullContentHeight);
        }
    });*/

    function slickSlider(){
        $('.video-slider').slick({
            infinite:false,
            speed: 300,
            adaptiveHeight:true,
            slidesToShow: 3,
            slidesToScroll: 2,

            prevArrow: ' <button id="prev" class="container__prev"></button>',
            nextArrow: ' <button id="next" class="container__next"></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1

                    }
                },

                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                }
            ]
        });
    }

    if(screen.width > 640){
        console.log(screen.width);
        slickSlider();
    }
