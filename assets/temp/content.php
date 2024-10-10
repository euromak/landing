<body>
<header class="header fixed-top bg-white    ">
    <div class="container-fluid container-lg ">
        <div class="header__top d-flex justify-content-between text-center">
            <a class="logo d-flex" href="#">
                <img class="logo__brand" src="<?= ASSETS . '/img/logo.svg'?>" alt="logo brand">
                <span></span>
                <img class="logo__avtohous" src="<?= ASSETS . '/img/logo_avt.svg'?>" alt="logo avtohous">
            </a>

            <div class="hamburger hamburger--spring d-md-none"">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>

            <div class="header__adress d-none d-xl-flex text-start">
                г. Нижний Новгород,<br>ул. Июльских Дней, д. 1г
            </div>

            <div class="header__work d-none d-xl-flex flex-column text-start align-items-start">
                <span>Ежедневно с 9:00 до 22:00</span>
                <a class="phone phone__header" href="tel:+79112223344">+7 (911) 222-33-44</a>
            </div>

            <div class="callmodal d-none d-md-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Заказать звонок
            </div>

        </div>
        <hr class="hr m-1">
        <div class="header__bottom d-flex align-items-center d-md-none">
            <a class="phone " href="tel:+79112223344"> +7 (911) 222-33-44</a>
        </div>
        <nav class="navbar d-none d-md-flex justify-content-around">
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Модельный ряд
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Действие</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                </ul>
            </div>
            <div class="nav-item">Авто в наличии</div>
            <div class="nav-item">Комплектации</div>
            <div class="nav-item">Автокредит</div>
            <div class="nav-item">Трейд-in</div>
            <div class="nav-item">Контакты</div>
        </nav>
    </div>
</header>
<main class="main">
    <section class="banner">
        <div class="banner__block">
            <picture>
                <source srcset="<?= ASSETS . '/img/1.webp'?>" media="(max-width: 640px)" />
                <source srcset="<?= ASSETS . '/img/2.webp'?>" media="(max-width: 960px)" />
                <source srcset="<?= ASSETS . '/img/3.webp'?>" media="(max-width: 1200px)" />
                <source srcset="<?= ASSETS . '/img/4.webp'?>" media="(max-width: 1920px)" />
                <img class="img-fluid" src="<?= ASSETS . '/img/4.webp'?>" alt="banner" />
            </picture>
            <div class="banner__data d-none d-xl-flex">
                <form method="post" id="callback_form" class="form gap-3 p-4">
                    <input
                            name="form_subject"
                            type="hidden"
                            value="Обратная связь">
                    <input
                            name="check_bot"
                            type="hidden"
                            id="form_name"
                            value="false"
                    >
                    <div class="form-floating">
                        <input
                                name="tele`phone"
                                type="tel"
                                id="telephone"
                                class="form-control w-100"
                                placeholder="Ваш телефон"
                                autocomplete="off"
                        >
                        <label for="phone">Ваш телефон</label>
                    </div>
                    <input type="submit" class="form-control" value="Получить предложение">
                    <span class="form__politic-text">* Отправляя данную форму, вы соглашаетесь с <u>политикой
                            обработки персональных данных.</u>
                    </span>
                </form>
            </div>
        </div>
    </section>
    <section id="timer-block">
        <div class="container">
            <div class="timer p-3">
                <h2>До 01.02 держим выгоды на CHANGAN до 25%!</h2>
                <div class="row d-flex flex-row-reverse">
                    <div class="col-lg-6 d-flex align-items-start">
                        <div class="timer__block date">
                            <span class="timer__block-value"></span>
                            <span class="timer__block-name">дней</span>
                        </div>
                        <span class="timer__block-dec h-50"></span>
                        <div class="timer__block hour">
                            <span class="timer__block-value"></span>
                            <span class="timer__block-name">часов</span>
                        </div>
                        <span class="timer__block-dec h-50"></span>
                        <div class="timer__block minute">
                            <span class="timer__block-value"></span>
                            <span class="timer__block-name">минут</span>
                        </div>
                        <span class="timer__block-dec h-50"></span>
                        <div class="timer__block second">
                            <span class="timer__block-value"></span>
                            <span class="timer__block-name">секунды</span>
                        </div>
                    </div>
                    <div class="col-lg-6 my-3">
                        <form method="post" id="callback_form" class="form gap-3 d-flex flex-column">
                            <input
                                    name="form_subject"
                                    type="hidden"
                                    value="Обратная связь">
                            <input
                                    name="check_bot"
                                    type="hidden"
                                    id="form_name"
                                    value="false"
                            >
                            <div class="form-floating">
                                <input
                                        name="tele`phone"
                                        type="tel"
                                        id="telephone"
                                        class="form-control w-100"
                                        placeholder="Ваш телефон"
                                        autocomplete="off"
                                >
                                <label for="phone">Ваш телефон</label>
                            </div>
                            <input type="submit" class="form-control" value="Получить предложение">
                            <span class="form__politic-text">* Отправляя данную форму, вы соглашаетесь с <u>политикой
                            обработки персональных данных.</u>
                    </span>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section id="swiper-actions">
        <div class="container">
            <div class="action d-flex f-carousel" id="actionsCarousel">
                <div class="f-carousel__viewport">
                    <div class="f-carousel__track">
                        <div class="f-carousel__slide action__slide d-flex flex-column n1 rounded-4">
                            <h3 class="action__slide-title">Большая семья</h3>
                            <span class="action__slide-desc">Дарим скидку 7% на покупку нового CHANGAN многодетным семьям</span>
                            <button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
                        </div>
                        <div class="f-carousel__slide action__slide d-flex flex-column n2 rounded-4">
                            <h3 class="action__slide-title">Военным</h3>
                            <span class="action__slide-desc">Дарим скидку 5% на покупку нового CHANGAN военнослужащим</span>
                            <button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
                        </div>
                        <div class="f-carousel__slide action__slide d-flex flex-column n3 rounded-4">
                            <h3 class="action__slide-title">Песнионерам</h3>
                            <span class="action__slide-desc">Дарим скидку 10% на покупку нового CHANGAN пенсионерам</span>
                            <button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
                        </div>
                        <div class="f-carousel__slide action__slide d-flex flex-column n4 rounded-4">
                            <h3 class="action__slide-title">Медработникам</h3>
                            <span class="action__slide-desc">Дарим скидку 10% на покупку нового CHANGAN медицинским работникам</span>
                            <button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>



    <section class="catalog">
        <div class="container p-4 my-4">
            <div class="row">
                <h2>Модельный ряд CHANGAN</h2>
            </div>

            <div class="row">
                <?php foreach ($res as $value): ?>
                <div class="model_item" data-car="">
                    <div class="row cart_action__block">
                        <div class="col-12 col-md-6 order-2 order-md-0">
                            <div class="model_item__name">
                                <h3 class="mt-3 mb-1"><span class="n1"><?=$value['mark']?></span> <span class="n2"><?=$value['model']?></span></h3>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-end align-items-center gap-2 order-1">
                            <span class="d-flex cart_action__item red h-md-50 col-auto">Акция до 01.02</span>
                            <span class="d-flex cart_action__item green h-md-50 col-auto">Авто в наличии</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="model_item__info col-12 col-lg-6">
                            <div class="model_item__price d-flex">
                                <span class="price-value">от <?=$value['price']['price_min']?> Р</span>
                                <span class="price-old-value d-flex align-items-center"><s>от <?=$value['price_old']['price_old']?> Р</s></span>
                            </div>
                            <div class="model_item__credit-rate">
                                <span>в кредит от 18 990 Р</span>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-8 cart-btns-block">
                                    <button class="btn btn-lg w-100 cart-btn n1" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить спец. цену</button>
                                    <button class="btn btn-lg w-100 cart-btn n2" data-bs-toggle="modal" data-bs-target="#exampleModal">Рассчитать кредит от 6,5%</button>
                                    <button class="btn btn-lg w-100 cart-btn n3" data-bs-toggle="modal" data-bs-target="#exampleModal">В рассрочку 0%</button>
                                    <button class="btn btn-lg w-100 cart-btn n4" data-bs-toggle="modal" data-bs-target="#exampleModal">Подобрать комплектацию</button>
                                </div>
                                <div class="d-flex d-lg-block col-12 col-lg-4 info-car__block ps-3 ps-xl-5">
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1">1.5 л.</span>
                                        <span class="n2">Двигатель</span></div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1">7 DCT</span>
                                        <span class="n2">КПП</span></div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1">280 h/m</span>
                                        <span class="n2">Крут. момент</span></div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1">167 л.с.</span>
                                        <span class="n2">Мощность</span></div>
                                </div>

                            </div>
                        </div>
                        <div class="model_item__info col-12 col-lg-6">
                            <div class="swiper__big text-center py-5">
                                <img src="assets/img/cars/unit.png" alt="" class="car_photo">
                                <img src="assets/img/cars/unit_lable.png" alt="" class="label">
                            </div>
                            <div class="f-carousel" id="myCarousel">
                                <div class="f-carousel__viewport">
                                    <div class="f-carousel__track">
                                        <a href="assets/img/cars/1.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt="" src="assets/img/cars/1.jpg" />
                                        </a>
                                        <a href="assets/img/cars/2.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt=""  src="assets/img/cars/2.jpg" />
                                        </a>
                                        <a href="assets/img/cars/3.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt=""  src="assets/img/cars/3.jpg" />
                                        </a>
                                        <a href="assets/img/cars/4.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt=""  src="assets/img/cars/4.jpg" />
                                        </a>
                                        <a href="assets/img/cars/5.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt=""  src="assets/img/cars/5.jpg" />
                                        </a>
                                        <a href="assets/img/cars/6.jpg" class="f-carousel__slide" data-fancybox="gallery">
                                            <img alt=""  src="assets/img/cars/6.jpg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row utp">
                        <h4 class="my-3 my-lg-1">Подарки при покупке:</h4>
                        <div class="utp_list d-flex flex-wrap justify-content-between">
                            <div class="utp_list__i n1">Скидка 100 000₽ в день звонка</div>
                            <div class="utp_list__i n2">Полис КАСКО</div>
                            <div class="utp_list__i n3">Зимние шины</div>
                            <div class="utp_list__i n4">Видеорегистратор</div>
                            <div class="utp_list__i n5">3 года гарантии</div>
                            <div class="utp_list__i n6">Сигнализация</div>
                        </div>
                    </div>
                </div>
                <? endforeach; ?>
            </div>
        </div>
    </section>
    <section>
        <div class="container banner_block">
            <h3>Уже есть предложение?</h3>
            <p>Оставьте заявку и мы сделаем выгоднее!</p>
            <form action="/" method="post">
                <input type="tel" name="phone" value="Ваш телефон">
                <input type="submit" placeholder="Получить предложение">
                <span>* Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных.</span>
            </form>
        </div>
    </section>
    <section>
        <div class="container">
            <h2>Подберите комплектацию</h2>
            <div class="row">
                <span>Выберите модель</span>
                <span>Выберите комплектацию</span>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <img src="assets/img/modification/1.png" alt="">
            </div>
            <div class="row">
                <div class="name">Changan UNI-V</div>
                <div class="name">LUXE</div>
                <div class="info">
                    <div>
                        <span>Двигатель:</span>
                        <span>1.5T (147 л.с)</span>
                    </div>
                    <div>
                        <span>Привод:</span>
                        <span>Передний</span>
                    </div>
                    <div>
                        <span>КПП:</span>
                        <span>7 DCT</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <button>Рассчитать кредит</button>
                <button>Узнать цену</button>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="banner_credit">
                <div class="row">
                    <h2>Предоставим выгодные кредитные условия! <span>на новые CHANGAN!</span></h2>
                </div>

                <form action="/" method="post">
                    <input type="tel" name="phone" value="Ваш телефон">
                    <input type="submit" placeholder="Получить предложение">
                    <span>* Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных.</span>
                </form>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="banner_tradein">
                <div class="row">
                    <h2>Сдайте старый авто <span>в TRADE-IN</span></h2>
                    <p>и получите выгоду до 250 000 ₽!</p>
                </div>
                <div class="row">
                    <div class="item">Скидка 100 000 ₽ в день звонка</div>
                    <div class="item">Ставка от 6,5%</div>
                    <div class="item">3 платежа по кредиту в подарок</div>
                    <div class="item">Подарки на выбор</div>
                    <div class="item">Срок кредитования до 84 месяцев</div>
                </div>
                <form action="/" method="post">
                    <input type="tel" name="phone" value="Ваш телефон">
                    <input type="submit" placeholder="Получить предложение">
                    <span>* Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных.</span>
                </form>
            </div>
        </div>
    </section>
    <section class="contact">
        <div class="container">
            <div class="map row">
                <h2>Контакты</h2>
                <div class="phone">
                    <span>Телефон:</span>
                    <span>+7 (831) 211-76-51</span>
                </div>
                <div class="adress">
                    <span>Адрес:</span>
                    <span>г. Нижний Новгород, ул. Июльских Дней, 1г</span>
                </div>
                <div class="work">
                    <span>Режим работы:</span>
                    <span>Ежедневно с 9:00 до 22:00</span>
                </div>
                <button>Заказать звонок</button>
            </div>
        </div>
    </section>
</main>
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

<script src="<?= ASSETS . '/lib/bootstrap/js/bootstrap.js'?>"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.thumbs.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
<script src="<?= ASSETS . '/lib/just-validate.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/inputmask.min.js'?>"></script>
<script src="<?= 'app.js'?>"></script>
<script src="<?= ASSETS . '/js/main.js'?>"></script>
</body>
