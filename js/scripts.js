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

    // end fixed menu

    // plugins

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

    // maskedinput
    $('input[name="tel"]').mask("+7 (999) 999-9999",{placeholder:"+7 (___) ___-____"});

    // end plugins
    
    // modal
    $('.banner-button, .plan .plan-help .button').on('click', function () {
        openModal($('.modal-form'));
    })

    $('.overlay, .close-modal').on('click',function () {
        closeModal();
    });

    // end modal

    // to second section
    $('.banner-button-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.about").offset().top - headerHeight
        }, 1000);
    })

    // from svg map to houses section
    $('.dom31, .dom19, .dom15, .dom11').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.houses").offset().top
        }, 1000);
    });

    // desktop menu
    $('nav ul li').on('click', function () {
        goToSection($(this).attr('to'), false);
    })

    // mobile menu
    $('.mobile-menu ul li').on('click', function () {
        goToSection($(this).attr('to'), true);
    })

    // hide-close mobile menu
    $('.mobile-menu-trigger').on('click', function () {
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })
    $('.mobile-menu .close').on('click', function () {
        $('body').find('.mobile-menu').toggleClass('active');
        $('body').find('.overlay').toggleClass('active');
    })

    // hide/close help svg map
    $('.plan .plan-help .hide').on('click', function () {
        $(this).parent().toggleClass('close');

        $(this).html(function(i, text){
            return text === 'Свернуть<img src=\"img/arrow-small.png\" alt=\"\">' ? 'Развернуть справку<img src=\"img/arrow-small.png\" alt=\"\">' : 'Свернуть<img src=\"img/arrow-small.png\" alt=\"\">';
        })
    })

    // svg map
    $('.fil5:not(.no)').on('click', function (event) {
        $('.fil5').removeClass('active');
        $(this).addClass('active');
        $('.plan').find('.plan-popup-wrapper').removeClass('house');
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
        // popup for uchastok with house
        // if ($(this).hasClass('dom') || $(this).hasClass('dom31') || $(this).hasClass('dom19') || $(this).hasClass('dom15') || $(this).hasClass('dom11')) {
        //     var img1 = $(this).attr('img1');
        //     var img2 = $(this).attr('img2');
        //     var img3 = $(this).attr('img3');
        //     $('.plan').find('.plan-popup-wrapper').addClass('house');
        //     $('.plan .plan-popup .plan-popup-wrapper.house .images img:nth-child(1)').attr('src',img1);
        //     $('.plan .plan-popup .plan-popup-wrapper.house .images img:nth-child(2)').attr('src',img2);
        //     $('.plan .plan-popup .plan-popup-wrapper.house .images img:nth-child(3)').attr('src',img3);
        // }
        $('.plan').find('.plan-popup').addClass('active');

        // add info to popup
        $('.plan').find('.plan-popup .ploshad > span').html($(this).attr('sotki'));
        $('.plan').find('.info span.green.price').html($(this).attr('cost')+' <small>рублей</small>');
        $('.plan').find('.info span.green.sotka').html($(this).attr('weaving')+' рублей');
        $('.plan').find('.info span.green.address').html($(this).attr('address'));
        var vygoda = parseFloat($(this).attr('sotki'))*5000;
        $('.plan').find('.plan-popup .plan-popup-wrapper p font').html(vygoda.toFixed(0)+' <small>рублей</small>');
    })

    $('.plan .plan-popup .close').on('click', function () {
        $('.plan').find('.plan-popup').removeClass('active');
        $('.plan').find('.plan-popup-wrapper').removeClass('house');
        $('.fil5').removeClass('active');
    });

    //ajax send email
    $('form').submit(function(e) {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            // $(this).fadeOut();
            // $('.after-send').delay(400).fadeIn();
            alert('Сообщение отправлено!');
            setTimeout(function () {
                // Done Functions
                $(this).trigger("reset");
                //     $('.after-send').fadeOut();
                //     $('#room-form, #contact-form').delay(400).fadeIn();
            }, 1000);
        });
        return false;
    });

    console.log('%c Author: hoffman.ozr@gmail.com ', 'background: #222; color: #bada55');

    // functions

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

    function goToSection (to, mobile) {
        $('html, body').animate({
            scrollTop: $('.'+to).offset().top - headerHeight
        }, 1000);
        if (mobile) {
            $('body').find('.mobile-menu').toggleClass('active');
            $('body').find('.overlay').toggleClass('active');
        }
    }
})