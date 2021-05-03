$('.category-slider-container').slick({
    arrows: true,
    autoplay: false,
    draggable: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
    responsive: [{
        breakpoint: 1499,
        settings: {
            slidesToShow: 6,
        }
    },
    {
        breakpoint: 1199,
        settings: {
            slidesToShow: 5,
        }
    },
    {
        breakpoint: 991,

        settings: {
            slidesToShow: 4,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 2,
        }
    }
    ]
});