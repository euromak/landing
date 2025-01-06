<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="logo"></div>
            <a class="phone" href="tel:+7(831)2117651">+7 (831) 211-76-51</a>
        </div>
        <div class="row">
            <div class="col-6">
                <h3>Меню</h3>
                <div class="nav-item">Модельный ряд</div>
                <div class="nav-item">Авто в наличии</div>
                <div class="nav-item">Комплектации</div>
                <div class="nav-item">Автокредит</div>
                <div class="nav-item">Трейд-in</div>
                <div class="nav-item">Контакты</div>
            </div>
            <div class="col-6">
                <span>Ежедневно с 9:00 до 22:00</span>
                <span>г. Нижний Новгород, ул. Июльских Дней, д. 1г</span>
                <button>Заказать звонок</button>
            </div>
        </div>
        <div class="row">
            <h3>Модельный ряд</h3>
            <div class="row">
                <div class="model">ALSVIN</div>
                <div class="model">EADOplus</div>
                <div class="model">CS95NEW</div>
                <div class="model">CS85COUPE</div>
                <div class="model">LAMORE</div>
                <div class="model">UNI-V</div>
            </div>
        </div>
        <hr>
        <div class="info">
            <p>ООО «АВТОХАУС», ОГРН 1186658046222, ИНН 6658517825 Юр. адрес: 300012,
                Тульская область, г. Тула, ул. Рязанская, д. 28б, помещ. 1</p>
            <p>Стоимость подарка не зависит от стоимости купленного а/м, покупатель может выбрать любой подарок из
                перечисленных при покупке а/м. Обращаем Ваше внимание на то, что данный сайт носит
                исключительно информационный характер и ни при каких условиях не является публичной
                офертой, определяемой положениями статьи 437 Гражданского кодекса Российской Федерации.
                Для получения более подробной информации об указанных акциях, а также о стоимости
                автомобилей обращайтесь к менеджерам по продажам.</p>
            <p>
                Наш сайт использует файлы cookies для повышения удобства пользователей.
                Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов
                cookies и принимаете нашу Политику конфиденциальности.
            </p>
        </div>`
    </div>
</footer>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Заказать звонок</h1>
                    <p>Получите эксклюзивное предложение на автомобиль Changan</p>
                    <div class="form-floating mb-3">
                        <input type="tel" class="form-control" id="floatingInput" placeholder="999-99-99">
                        <label for="floatingInput">Ваш телефон</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="submit" value="Получить предложение" class="btn btn-lg btn-form">
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    var data_car = <?=json_encode($result_out)?>;
    data_car.forEach((value)=>{

    })
    console.log(data_car)

    // // сортировка
    // var data_car1 = data_car.sort((a,b)=>a.price.price_min-b.price.price_min);
    // var data_car2 = data_car.sort((a,b)=>b.price.price_min-a.price.price_min);
    //
    // // агрегирование значения из все значений
    // var summ = data_car.reduce((aggregator,item)=> aggregator + +item.price.price_min,0);
    //
    // // Возвращаяет первый объект где выполнен поиск по значению поля model
    // var data_car3 = data_car.find((item)=>{
    //     return item.model == "CS35PLUS";
    // });
    //
    // // Возвращаяет первый объект где выполнен поиск по значению поля model
    // var data_car4 = data_car.filter((item) => item.model == "CS35PLUS");

</script>
<script src="<?= 'app.js'?>"></script>
<script src="<?= '/node_modules/jquery/dist/jquery.min.js'?>"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="<?= ASSETS . '/lib/bootstrap/js/bootstrap.min.js'?>"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.thumbs.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
<script src="<?= ASSETS . '/lib/just-validate.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/inputmask.min.js'?>"></script>
<script src="<?= ASSETS . '/js/main.js'?>"></script>
</body>
</html>
