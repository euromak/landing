/* основной функционал приложения */
const app = {
    element: document.querySelector('body'),
    currentCordY: 0,
    data: [],
    scrollWatch: function(){
        if(this.currentCordY > window.pageYOffset && window.pageYOffset > 300) {
            // $('.navbar').removeClass('d-md-flex');
            // $('.navbar').fadeOut();
        }

        this.currentCordY = window.pageYOffset;

    },
    init: function() {
        window.addEventListener('scroll',(e)=>{
            this.scrollWatch();
        });
    }
};

/* установка маски на инпуты формы */
function setInputMask(el) {
    let inputPhone = document.querySelectorAll('input[type="tel"]');
    let inputMask = new Inputmask({"mask" : '+7 (999) 999-99-99'}, "9", { repeat: 11 });
    inputMask.mask(inputPhone);

    inputPhone.forEach(function(item){

        item.addEventListener('input',function(e){
            validateInput(this);
        })

    })
    return true;
}

/* фильтр формы фронт */
function validateInput(field) {
    if(field.value.match(/[0-9]/g).length == 11) {
        console.log(field.value);
    }
    console.log(field.value.match(/[0-9]/g).length);
    console.log(field.value.replace(/[0-9]/g, "0"));

    return true;
}

/* проверка статуса ответа от сервера*/
function checkedForm(form,status) {
    if(status != 1) {
        form.telephone.classList.add('is-invalid');
    } else {
        form.telephone.classList.remove('is-invalid');
        form.telephone.classList.add('is-valid');
    }
}

/* Таймер обратного счета */
function setCountdown(saleDate){

    countdown(
        new Date(saleDate),
        function(ts) {
            $('.date .timer__block-value').text(ts.days.toString().padStart(2,'0'))
            $('.hour .timer__block-value').text(ts.hours.toString().padStart(2,'0'))
            $('.minute .timer__block-value').text(ts.minutes.toString().padStart(2,'0'))
            $('.second .timer__block-value').text(ts.seconds.toString().padStart(2,'0'))
        },
        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

}

/* фильтр комплектаций */
function filterComp(value,status){

    $.each($('.complectation-value'), function( index, item ) {
        ($(this).data('model') == value || $(this).data('idcomp') == value || $(this).data('idmod') == value) ? $(this).show() : $(this).hide();

    });

    if(status == 0) {
        $.each($('.opt1'),function( index, item ){
            console.log($(this).data('id'));
            console.log(value);
            $('#modlSelect').removeAttr('disabled');
            ($(this).data('id') == value) ? $(this).show() : $(this).hide();
        });
    } else if(status == 1) {
        $('#complSelect').removeAttr('disabled');
        $.each($('.opt2'),function( index, item ){
            ($(this).data('id') == value) ? $(this).show() : $(this).hide();
        });
    }
    status++

    return status;
}

/* анимация при скроле */
function scrollAnimation () {
    let scrollItems = document.querySelectorAll('.scroll-item');
    let windowCenter = (window.innerHeight / 2) + window.scrollY;

    if(window.map != "load") {
        if((document.querySelector('#map').offsetTop - 1000) <= window.scrollY) {
            window.map="load";
            initYandexMap();
        }
    }

    scrollItems.forEach(el => {


        let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
        // console.log(scrollOffset)
        if (windowCenter >= scrollOffset) {
            el.classList.add('animation-controller');
        } else {
            el.classList.remove('animation-controller');
        }
    });
}

/* создание карты */
function initYandexMap() {

    ymaps.ready(function () {
        var _ball_bg = 'assets/img/map_point.svg';
        var _ball_Offset = [0, -35];
        var _ball_Size = [50, 50];
        var myMap = new ymaps.Map('map', {
            center: [56.305988, 43.943823],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
        var myPlacemark1 = new ymaps.Placemark([56.306693, 43.944308], {
            hintContent: "г. Нижний Новгород, ул. Июльских Дней, 1г"
        }, {
            iconLayout: 'default#image',
            iconImageHref: _ball_bg,
            iconImageSize: _ball_Size,
            iconImageOffset: _ball_Offset
        });

        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                position: {
                    top: 0,
                    left: 'auto',
                    right: 0,
                }
            }
        });
        myMap.geoObjects.add(myPlacemark1);
        // myMap.controls.add(zoomControl);
        myMap.behaviors.disable('scrollZoom');
    })
}

window.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target);
    let formValues = new FormData(e.target);

    fetch("mail.php", {
        method: "POST",
        body: formValues
    }).then((response) => {
        return response.text();
    }).then((data) => {
        checkedForm(e.target,data);
    })


})
window.addEventListener('load', function(e) {
    const swiperMain = new Swiper('#main-swiper',{
        speed: 4000,
        // autoplay: {
        //     delay: 5000
        // },
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: '#main-swiper .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },

        breakpoints: {
            992: {
                navigation: {
                    nextEl: '#main-swiper .swiper-button-next',
                    prevEl: '#main-swiper .swiper-button-prev',
                }
            }
        },
    });
    const swiperAction = new Swiper('#actionsCarousel',{
        speed: 3000,
        spaceBetween: 10,
        // autoplay: {
        //     delay: 5000
        // },
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: '#actionsCarousel .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.5,
                navigation: {
                    nextEl: '#actionsCarousel .swiper-button-next',
                    prevEl: '#actionsCarousel .swiper-button-prev',
                }
            }
        },
    });
    let swiper1 = new Swiper(".model_item__info .swiper",{
        speed: 4000,
        spaceBetween: 10,
        // autoplay: {
        //     delay: 5000
        // },
        loop: true,
        slidesPerView: 3.5,
        freeMode: true,
        // autoHeight: true,
        breakpoints: {
            991: {
                direction: 'vertical',
                slidesPerView: 4,
                navigation: {
                    nextEl: '.model_item__info .swiper-button-next',
                    prevEl: '.model_item__info .swiper-button-prev',
                }
            }
        },
    })
    let hamburger = document.querySelector('.hamburger');
    let status = 0;

    $('.hidden, h1').animate({'opacity':'1','top':'5%'},'slow',"linear");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs : {
            type: "classic",
        }
    },{ Thumbs });

    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
    })
    window.addEventListener('keydown',(e)=>{
        document.body.classList.toggle('line');
    })
    window.addEventListener('scroll',(e)=>{
        scrollAnimation();
    })
    $('form').on('change',(e)=>{
        console.log(status);
        status += filterComp(e.target.value,status);
        console.log(status);
    })

    app.init();
    setCountdown(saleTime);
    setInputMask();
    scrollAnimation();
})
