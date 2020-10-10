$(document).foundation();

$(document).ready(function(){

    // добавить на нужной странице
	// enquire.register("screen and (max-width:1440px)", {
    //
	// 	match : function() {
	// 		$('#desktop-appendPrice .price-box').appendTo('#device-appendPrice');
	// 	},
	// 	unmatch : function() {
	// 		$('#device-appendPrice .price-box').appendTo('#desktop-appendPrice');
	// 	}
    //
	// });
	
    
    $(document).mouseup(function (e){
		var div = $(".page-column.page-column--left, .device-fixed-box"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.removeClass('active'); 
			$('.page-wrapper').removeClass('active'); 
            $('.device-fixed-box').removeClass('search');
            $('.device-fixed-box').removeClass('contact');
            $('body').css({
                overflow: 'auto',
            });
			$('.favorites-product').removeClass('active');
		}
	});
    
	$('.add-favorites').on('click', function(){
		var $this = $(this);
		if($this.hasClass('add')){
			$this.parent('.anons-product__price').siblings('.anons-product__hide').children('.favorites-product').toggleClass('active');
			$this.parent('.favorites-box').toggleClass('active');
		} else{
			$this.addClass('add');
		}
	});
	
	$('.favorites-product__item--clean').on('click', function(){
		var $this = $(this);
		$this.parent('.favorites-product').removeClass('active');
		$this.parents('.anons-product__hide').siblings('.anons-product__price').children('.add-favorites').removeClass('add');
	});
	
	$('.favorites-product__item--clean').on('click', function(){
		var $this = $(this);
		$this.parents('.favorites-box').removeClass('active');
		$this.parents('.favorites-box').children('.add-favorites').removeClass('add');
	});
	
	
	$('.anons-product-wrapper').matchHeight();
	$('.catalog-menu-wrapper').matchHeight();
    

    var productSlider = $('.product-slider');
	productSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: false,
        arrows: false,
        asNavFor: '.product-sliderNavigation',
    });
    
    var productSliderNavigation = $('.product-sliderNavigation');
	productSliderNavigation.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
		dots: false,
        arrows: false,
        verticalSwiping: true,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.product-slider',
		responsive: [{
			breakpoint: 750,
			settings: {
				verticalSwiping: false,
				vertical: false,
			}
			},{
			breakpoint: 700,
			settings: {
                variableWidth: true,
                verticalSwiping: false,
                vertical: false,
			}
		}]
    });

    
    var headerSlider = $('.header-slider');
	headerSlider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow-slider--main .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--main .arrow-slider__item--next'),
		dots: true,
		appendDots: $('.header-slider-controll__item--dots'),
        fade: true,
        cssEase: 'linear'
    });
    
    var historyDates = $('.history-dates');
	historyDates.slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        prevArrow: $('.arrow-slider--history .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--history .arrow-slider__item--next'),
        asNavFor: '.history-slider',
        focusOnSelect: true,
		dots: true,
		appendDots: $('.slider-controll__dots--history'),
    });
    
    var historySlider = $('.history-slider');
	historySlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow-slider--history .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--history .arrow-slider__item--next'),
        asNavFor: '.history-dates',
		dots: true,
		appendDots: $('.slider-controll__dots--history'),
    });
    
    $('.partners-slider1').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.arrow-slider--partners1 .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--partners1 .arrow-slider__item--next'),
		dots: true,
		appendDots: $('.slider-controll__dots--partners1'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }},{
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }}
        ]
    });

    $('.partners-slider2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.arrow-slider--partners2 .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--partners2 .arrow-slider__item--next'),
        dots: true,
        appendDots: $('.slider-controll__dots--partners2'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }},{
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }}
        ]
    });
    
    $('.personal-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.arrow-slider--personal .arrow-slider__item--prev'),
        nextArrow: $('.arrow-slider--personal .arrow-slider__item--next'),
		dots: true,
		appendDots: $('.slider-controll__dots--personal'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }},{
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }},{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }}
        ]
    });
	
	// $('.footer-masonry').masonry({
	// 	itemSelector: '.footer-masonry__item',
	// 	columnWidth: '.footer-masonry__sizer',
	// 	percentPosition: true
	// });
    
    $('ul.tabs-title').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.tabs-wrapper').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    $('.left-menu__item--dropdown > i').on('click', function(){
        var $this = $(this);
        if($this.parent('.left-menu__item').hasClass('active')){
            $this.siblings('.left-menu-dropdown').slideUp();
            $this.parent('.left-menu__item').removeClass('active');
        } else{
            $('.left-menu__item').removeClass('active');
            $('.left-menu-dropdown').slideUp();
            $this.siblings('.left-menu-dropdown').slideDown();
            $this.parent('.left-menu__item').addClass('active');
        }
    });
    
    $('.device-head-controll__item').on('click', function(){
        if($(this).hasClass('device-head-controll__item--search')){
            $('.device-fixed-box').addClass('search');
        } else{
            $('.page-column.page-column--left, .page-wrapper').addClass('active');
            $('body').css({
                overflow: 'hidden',
            });
        }
    });
    
    $('.header-box__panel .short-contact__icon').on('click', function(){
        $('.device-fixed-box').addClass('contact');
    });
    
    
    $('.catalog-menu__front').on('click', function(){
        var $this = $(this);
        if($this.parent('.catalog-menu-wrapper').hasClass('active')){
            $('.catalog-menu-wrapper').removeClass('active');
        } else{
            $('.catalog-menu-wrapper').removeClass('active');
            $this.parent('.catalog-menu-wrapper').addClass('active');
        }
    });
    
    
    $('.filter-box.selected .filter-box__title i').on('click', function(e){
        var $this = $(this);
        $this.parents('.filter-box').removeClass('selected');
        console.log(1);
        return false;
        e.preventDefault();
    });
	
    $('.filter-box__title').on('click', function(){
        var $this = $(this);
        if($this.parent('.filter-box').hasClass('active')){
            $this.parent('.filter-box').removeClass('active');
        } else{
            $this.parent('.filter-box').addClass('active');
        }
    });
    $('.filter-box__button a').on('click', function(){
        var $this = $(this);
        if($this.parent('.filter-box__button').hasClass('active')){
            $this.parent('.filter-box__button').removeClass('active');
            $this.parent('.filter-box__button').siblings('.filter-box__sorts').slideUp();
        } else{
            $this.parent('.filter-box__button').addClass('active');
            $this.parent('.filter-box__button').siblings('.filter-box__sorts').slideDown();
        }
    });

    // подключить только на нужной странице
	// $(".my-rating").starRating({
    //     starSize: 25,
    //     callback: function(currentRating, $el){
    //         // make a server call here
    //     }
    // });


    var header_fixed = $('.header-wrapper'),
        scrollIn = 0;

    function headerScroll() {
        var scrolled = $(this).scrollTop(),
            scrollOut = header_fixed.outerHeight() + 15,
            heightHeaderWrapper = ($('.header-box').outerHeight() + $('.crumbs-box-wrapper').outerHeight());
        if (scrolled > scrollOut) {
            if (scrolled < scrollIn) {
                header_fixed.addClass('is-fixed');
                header_fixed.removeClass('header-wrapper--slide');
            } else if (scrolled > scrollIn) {
                header_fixed.removeClass('is-fixed');
                header_fixed.removeClass('header-wrapper--slide');
                header_fixed.addClass('is-ready');
            }
        } else {
            header_fixed.removeClass('is-fixed is-ready');
			if($('.header-wrapper').hasClass('slide')){
            	header_fixed.addClass('header-wrapper--slide');
			}
        }
        scrollIn = scrolled;
        $('.header-wrapper').css({
            paddingTop: heightHeaderWrapper
        });
        $('.header-content').css({
            marginTop: -heightHeaderWrapper
        });
        $('.header-slider__item').css({
            paddingTop: heightHeaderWrapper + 50,
            paddingBottom: heightHeaderWrapper + 50
        });
    }

    headerScroll();
	
	function headerDevice(){
		if($('.header-wrapper').hasClass('slide')){
			if($(window).innerWidth() <= 1024){
				$('.header-wrapper').removeClass('header-wrapper--slide');
			} else{
				$('.header-wrapper').addClass('header-wrapper--slide');
			}
		}
	}

	$(window).on('resize load', function () {
		headerDevice();
	});

	$(window).on('resize scroll', function () {
		headerScroll();
	});
});


// main js
$('.down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.btn-cabinet-menu').click(function () {
   $(this).parents('.cabinet-left-column').toggleClass('open').find('.cabinet-menu').slideToggle();
});

$('.tabs-mobile-dropdown').click(function () {
    $('.tabs-mobile-dropdown').removeClass('active');
   $(this).toggleClass('active').next('.tabs__content').toggleClass('active');
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

if ($(".outer-content-product .product-content").length){
    $('.outer-content-product .product-content').clone().appendTo('#device-appendContent');
}

if ($("#desktop-appendPrice .price-box").length){
    $('#desktop-appendPrice .price-box').clone().appendTo('.device-appendPrice');
}

$(".catalog-view__item").click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');

    $('.catalog-view__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});