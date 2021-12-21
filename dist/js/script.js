
$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 300,
        slidesToShow: 1,
     
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prevArrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/nextArrow.png" alt="arrow"></button>',
        responsive: [    
            {
            breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'dots',
                   
                }
          },
        
        ]

    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($
            (this).index()).addClass('catalog__content_active');
      });
       
        
   
    function toggleSlide(item) {
        $(item).each(function(i)  {
            $(this).on('click',function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    toggleSlide ('.catalog-item__content')
    toggleSlide ('.catalog-item__link_back')

    //modal

    

    $('[data-modal=consultation]').on('click',function(){
        $('.overlay , #consultation').fadeIn();
    });

    $('.modal__close').on('click',function(){
        $('.overlay , #consultation ,#thanks,#order').fadeOut();    
    });

    $('.button_mini').each(function(i){
        $(this).on('click',function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay , #order').fadeIn();
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
  });


