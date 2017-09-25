$(document).ready(function () {
    // to second section
    $('.banner-button-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.about").offset().top
        }, 1000);
    })

    // menu -- TREBUET OPTIMIZACII !!
    $('nav ul li:nth-child(1), .mobile-menu ul li:nth-child(1)').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })

    $('nav ul li:nth-child(2), .mobile-menu ul li:nth-child(2)').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".plan").offset().top
        }, 1000);
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })

    $('nav ul li:nth-child(3), .mobile-menu ul li:nth-child(3)').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".two-years").offset().top
        }, 1000);
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })

    // hide/close help
    $('.plan .plan-help .hide').on('click', function () {
        $(this).parent().toggleClass('close');

        $(this).html(function(i, text){
            return text === 'Свернуть<img src=\"img/arrow-small.png\" alt=\"\">' ? 'Развернуть справку<img src=\"img/arrow-small.png\" alt=\"\">' : 'Свернуть<img src=\"img/arrow-small.png\" alt=\"\">';
        })
    })

    // owl carousel
    $('.owl').owlCarousel({
        items:2,
        loop:false,
        margin:15,
        lazyLoad:true,
        nav: true,
        dots: true,
        navText: ['<img src="img/arrow-left.png" >','<img src="img/arrow-left.png" >'],
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            }
        }
    });

    // hide-close mobile menu
    $('.mobile-menu-trigger').on('click', function () {
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })
    $('.mobile-menu .close').on('click', function () {
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })
    
    // svg map
    $('.fil5').on('click', function () {
        $('.plan').find('.plan-popup').addClass('active');
    })
    $('.plan .plan-popup .close').on('click', function () {
        $('.plan').find('.plan-popup').removeClass('active');
    })
})
