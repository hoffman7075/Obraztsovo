$(document).ready(function () {
    // fixed menu
    var headerHeight = $('header').innerHeight();
    $('.banner:not(.footer)').css('padding-top',headerHeight);
    $('.banner:not(.footer)').css('background-position','center '+ headerHeight+'px, center');

    $( window ).resize(function() {
        headerHeight = $('header').innerHeight();
        $('.banner:not(.footer)').css('padding-top',headerHeight);
        $('.banner:not(.footer)').css('background-position','center '+ headerHeight+'px, center');
    });
    
    // open modal
    $('.banner-button, .plan .plan-help .button').on('click', function () {
        openModal($('.modal-form'));
    })

    $('.overlay, .close-modal').on('click',function () {
        closeModal();
    });

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
    $('.fil5').on('click', function (event) {
        $('.fil5').removeClass('active');
        $(this).addClass('active');
        var x = event.pageX - $('.plan').offset().left;
        var y = event.pageY - $('.plan').offset().top;
        var popupHeight = $('.plan-popup').innerHeight();

        // if popup ne vlazit v blok
        if (y < ($('.kuchastku').offset().top - $('.plan').offset().top)/2) {
            $('.plan').find('.plan-popup').css('top',y);
        }
        else {
            $('.plan').find('.plan-popup').css('top',y-popupHeight);
        }
        $('.plan').find('.plan-popup').css('left',x);
        $('.plan').find('.plan-popup').addClass('active');

        // add info to popup
        $('.plan').find('.plan-popup .ploshad > span').html($(this).attr('sotki'));
        $('.plan').find('.info span.green.price').html($(this).attr('cost')+' <small>рублей</small>');
        $('.plan').find('.info span.green.sotka').html($(this).attr('weaving')+' рублей');
        $('.plan').find('.info span.green.address').html($(this).attr('address'));
        $('.plan').find('.plan-popup .plan-popup-wrapper p font').html($(this).attr('vygoda')+' <small>рублей</small>');
    })
    $('.plan .plan-popup .close').on('click', function () {
        $('.plan').find('.plan-popup').removeClass('active');
        $('.fil5').removeClass('active');
    })

    // scroll events
    function scrollMeHarder(object,scrollStart,velocity,rotate) {
        $(window).scroll(function(){
            $(object).css('top',$('body').scrollTop()*velocity-scrollStart)
            if (rotate!=0) {
                $(object).css("-webkit-transform","rotate("+rotate*$('body').scrollTop()*0.01+"deg)");
                $(object).css("-moz-transform","rotate("+rotate*$('body').scrollTop()*0.01+"deg)");
                $(object).css("-ms-transform","rotate("+rotate*$('body').scrollTop()*0.01+"deg)");
                $(object).css("-o-transform","rotate("+rotate*$('body').scrollTop()*0.01+"deg)");
                $(object).css("transform","rotate("+rotate*$('body').scrollTop()*0.01+"deg)");
            };
        })
    }

    //ajax send email
    $('form').submit(function(e) {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            // $(this).fadeOut();
            // $('.after-send').delay(400).fadeIn();
            setTimeout(function () {
                // Done Functions
                $(this).trigger("reset");
                //     $('.after-send').fadeOut();
                //     $('#room-form, #contact-form').delay(400).fadeIn();
            }, 1000);
            alert('Сообщение отправлено!');
        });
        return false;
    });
})

function openModal(element) {
    $('.overlay').addClass('active');
    element.css('display', 'block').animate({
        opacity: 1,
        top: '50%'
    }, 200);
}

function closeModal() {
    $('.modal')
        .animate({
                opacity: 0,
                top: '45%'
            }, 200,
            function () {
                $(this).css('display', 'none');
                $('.overlay').removeClass('active');
                $('.mobile-menu').removeClass('active');
            }
        );
}