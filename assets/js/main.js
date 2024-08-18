
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
/**/
function checkedForm(form,status) {
    if(status != 1) {
        form.telephone.classList.add('is-invalid');
    } else {
        form.telephone.classList.remove('is-invalid');
        form.telephone.classList.add('is-valid');
    }
}

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

    let cartSwiper = new Carousel(document.getElementById("myCarousel"), {
        // Your custom options
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