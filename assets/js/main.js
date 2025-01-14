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
function timer($value){
    let timeNow = new Date();
    console.log(new Date()+3)
    let countDownDate = (timeNow.getDate() >= 15) ?
            new Date(timeNow.getFullYear(),timeNow.getMonth()+1,1,24,0).getTime():
            new Date(timeNow.getFullYear(),timeNow.getMonth(),15,0,0).getTime();

    let result,
        elDate = document.querySelector('.date .timer__block-value'),
        elDateName = document.querySelector('.date .timer__block-name'),
        elHour = document.querySelector('.hour .timer__block-value'),
        elHourName = document.querySelector('.hour .timer__block-name'),
        elMin = document.querySelector('.minute .timer__block-value'),
        elMinName = document.querySelector('.minute .timer__block-name'),
        elSec = document.querySelector('.second .timer__block-value'),
        elSecName = document.querySelector('.second .timer__block-name');

    let period = setInterval(function(){
        let dateNow = new Date().getTime(),
            difference = countDownDate - dateNow,
            days = Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((difference % (1000 * 60)) / 1000);

        elDate.textContent = days;
        elHour.textContent = hours;
        elMin.textContent = minutes;
        elSec.textContent = seconds;

        if (difference < 0) {
            clearInterval(period);
        }

    },1000)

    return result;
}

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

window.addEventListener('submit', function(e){
    e.preventDefault();
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
        autoplay: {
            delay: 5000
        },
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: '#main-swiper .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        navigation: {
            nextEl: '#main-swiper .swiper-button-next',
            prevEl: '#main-swiper .swiper-button-prev',
        },
        breakpoints: {

        },
    });
    const swiperAction = new Swiper('#actionsCarousel',{
        speed: 3000,
        spaceBetween: 10,
        autoplay: {
            delay: 5000
        },
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: '#actionsCarousel .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        navigation: {
            nextEl: '#actionsCarousel .swiper-button-next',
            prevEl: '#actionsCarousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.5,
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
        slidesPerView: 3.5,

        freeMode: true,
        // autoHeight: true,
        breakpoints: {
            991: {
                direction: 'vertical',
                slidesPerView: 4,
            }
        },
    })
    let hamburger = document.querySelector('.hamburger');


    $('.hidden, h1').animate({'opacity':'1','top':'5%'},'slow',"linear");
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs : {
            type: "classic",
        }
    },{ Thumbs });



    app.init();
    setCountdown(saleTime);
    setInputMask();
    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
    })
    window.addEventListener('keyup',(e)=>{
        document.body.classList.toggle('debug');
    });
    window.addEventListener('keydown',(e)=>{
        document.body.classList.add('line');
    })
})