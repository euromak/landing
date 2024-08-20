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
    let countDownDate = (timeNow.getDate() >= 15) ?
            new Date(timeNow.getFullYear(),timeNow.getMonth()+1,1,24,0).getTime():
            new Date(timeNow.getFullYear(),timeNow.getMonth(),15,24,0).getTime();

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
timer();
window.addEventListener('submit', function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);

    fetch("mail.php", {
        method: "POST",
        body: formValues
    })
        .then((response) => {
        return response.text();
    })
        .then((data) => {
        checkedForm(e.target,data);
    })


})

window.addEventListener('load', function(e) {
    const swiperActions = new Carousel(document.getElementById("actionsCarousel"), {
        Dots: true,
        Thumbs: {
            type: "classic",
        },
        infinite: true,
        center: false,
        slidesPerPage: 'auto',
        transition: true,
    }, { Thumbs }),
        cartSwiper = new Carousel(document.getElementById("myCarousel"), {
        Dots: false,
        Thumbs: {
            type: "classic",
        },
    }, { Thumbs });

    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
    })

    setInputMask();
})