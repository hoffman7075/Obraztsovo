$(document).ready(function () {
    // to second section
    $('.banner-button-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.about").offset().top
        }, 1000);
    })

    // adaptive map
    $('img[usemap]').rwdImageMaps();

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
        nav: true,
        dots: true,
        navText: ['<img src="img/arrow-left.png" >','<img src="img/arrow-left.png" >']
    });


})