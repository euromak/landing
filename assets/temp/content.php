<body>
<header class="header">
    <div class="container-fluid container-lg">
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

            <div class="callmodal d-none d-md-flex align-items-center justify-content-center">
                Заказать звонок
            </div>

        </div>
        <hr class="hr m-1">
        <div class="header__bottom d-flex align-items-center d-md-none">
            <a class="phone " href="tel:+79112223344"> +7 (911) 222-33-44</a>
        </div>
        <nav class="navbar d-none d-md-flex justify-content-around">
            <div class="nav-item">Модельный ряд</div>
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
            <div class="action">
                <div class="action__slide">
                    <span>Большая семья</span>
                    <span>Дарим скидку 7% на покупку нового CHANGAN многодетным семьям</span>
                    <button>Получить предложение</button>
                </div>
                <div class="action__slide">
                    <span>Военным</span>
                    <span>Дарим скидку 5% на покупку нового CHANGAN военнослужащим</span>
                    <button>Получить предложение</button>
                </div>
                <div class="action__slide">
                    <span>Песнионерам</span>
                    <span>Дарим скидку 10% на покупку нового CHANGAN пенсионерам</span>
                    <button>Получить предложение</button>
                </div>
                <div class="action__slide">
                    <span>Медработникам</span>
                    <span>Дарим скидку 10% на покупку нового CHANGAN медицинским работникам</span>
                    <button>Получить предложение</button>
                </div>
            </div>
        </div>
    </section>
    <section id="form">
        <div class="container">
            <form class="row g-3 my-5 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Имя</label>
                        <input type="text" class="form-control" id="validationCustom01" value="Иван" required>
                        <div class="valid-feedback">
                            Все хорошо!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Фамилия</label>
                        <input type="text" class="form-control" id="validationCustom02" value="Петров" required>
                        <div class="valid-feedback">
                            Все хорошо!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Имя пользователя</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback">
                                Пожалуйста, выберите имя пользователя.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Город</label>
                        <input type="text" class="form-control" id="validationCustom03" required>
                        <div class="invalid-feedback">
                            Укажите действующий город.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Область</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Выберите...</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                            Пожалуйста, выберите корректный город.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Индекс</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                        <div class="invalid-feedback">
                            Пожалуйста, предоставьте действующий почтовый индекс.
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label" for="invalidCheck">
                                Примите условия и соглашения
                            </label>
                            <div class="invalid-feedback">
                                Вы должны принять перед отправкой.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Отправить форму</button>
                    </div>
                </form>
        </div>
    </section>
    <section id="catalog-grid">
        <div class="container">
            <div class="row">
                <h2>Модельный ряд CHANGAN</h2>
                <div class="cart_action__block">
                    <span>Акция до 01.02</span>
                    <span>Авто в наличии</span>
                </div>
            </div>
            <div class="row">
                <div class="model_item" data-car="">
                    <div class="row">
                        <div class="model_item__info col-12 col-lg-6">
                            <div class="model_item__name">
                                <span>Changan</span> <span>UNI-T</span>
                            </div>
                            <div class="model_item__price">
                                <span>от 1 922 000 Р</span><span><s>от 2 922 000 Р</s></span>
                            </div>
                            <div class="model_item__credit-rate">
                                <span>в кредит от 18 990 Р</span>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <button>Получить спец. цену</button>
                                    <button>Рассчитать кредит от 6,5%</button>
                                    <button>В рассрочку 0%</button>
                                    <button>Подобрать комплектацию</button>
                                </div>
                                <div class="col">
                                    <span>1.5 л.</span><span>Двигатель</span>
                                    <span>7 DCT</span><span>КПП</span>
                                    <span>280 h/m</span><span>Крут. момент</span>
                                    <span>167 л.с.</span><span>Мощность</span>
                                </div>

                            </div>
                        </div>
                        <div class="model_item__info col-12 col-lg-6">
                            <div class="swiper__big">
                                <img src="assets/img/cars/0.png" alt="">
                            </div>
                            <div class="f-carousel" id="myCarousel">
                                <div class="f-carousel__viewport">
                                    <div class="f-carousel__track">
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/1.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/1.jpg"
                                            />
                                        </div>
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/2.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/2.jpg"/>
                                        </div>
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/3.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/3.jpg"/>
                                        </div>
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/4.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/4.jpg"/>
                                        </div>
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/5.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/5.jpg"/>
                                        </div>
                                        <div class="f-carousel__slide" data-thumb-src="assets/img/cars/6.jpg" >
                                            <img height="400"
                                                 alt=""
                                                 data-lazy-src="assets/img/cars/6.jpg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row utp">
                        <h4>Подарки при покупке:</h4>
                        <div class="utp_list">
                            <div class="utp_list__i n1">Скидка 100 000₽ в день звонка</div>
                            <div class="utp_list__i n2">Полис КАСКО</div>
                            <div class="utp_list__i n3">Зимние шины</div>
                            <div class="utp_list__i n4">Видеорегистратор</div>
                            <div class="utp_list__i n5">3 года гарантии</div>
                            <div class="utp_list__i n6">Сигнализация</div>
                        </div>
                    </div>
                </div>
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
    <section>
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

<script src="<?= ASSETS . '/lib/bootstrap/js/bootstrap.js'?>"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.thumbs.umd.js"></script>
<script src="<?= ASSETS . '/lib/just-validate.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/inputmask.min.js'?>"></script>
<script src="<?= 'app.js'?>"></script>
<script src="<?= ASSETS . '/js/main.js'?>"></script>
</body>
