<body>
<section>
    <?php foreach ($result_out as $index => $value): ?>
        <?php


		if(isset($value['live_photo_data'])) {
            echo $value['mark'] . ' ' . $value['model'] .  "<br>";
            var_dump($value['live_photo_data']);
            foreach ($value['live_photo_data'] as $photo) {
                echo "<img src='$photo.webp' alt='' width='200'>";
            }
            echo "<br>";
        } ?>
    <?php endforeach; ?>
</section>

<header class="header fixed-top bg-white">
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
                <span><?=$work_time?></span>
                <a class="phone phone__header" href="tel:+79112223344"><?=$phone?></a>
            </div>

            <div class="callmodal d-none d-md-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Заказать звонок
            </div>

        </div>
        <hr class="hr m-1">
        <div class="header__bottom d-flex align-items-center d-md-none">
            <a class="phone " href="tel:<?=$phone?>"><?=$phone?></a>
        </div>
        <nav id="navbar-example2" class="navbar nav-underline d-none d-md-flex justify-content-around">
            <a class="nav-link" href="#s1" aria-current="page">Модельный ряд</a>
            <a class="nav-link" href="#s2">Авто в наличии</a>
            <a class="nav-link" href="#s3">Комплектации</a>
            <a class="nav-link" href="#s4">Автокредит</a>
            <a class="nav-link" href="#s5">Трейд-in</a>
            <a class="nav-link" href="#s6">Контакты</a>
        </nav>
    </div>
</header>

<main class="main" data-bs-spy="scroll" data-bs-target="#navbar-example2">
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
                <form method="post" id="callback_form" class="form gap-3 p-4" enctype="multipart/form-data">
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
                <h2>До <span class="timeless-value">01.02</span> держим выгоды на <?=$mark?> <b>до 25%!</b></h2>
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
    <section id="s1" class="catalog">
        <div class="container p-4 my-4">
            <div class="row">
                <h2>Модельный ряд <span><?=$mark?></span></h2>
            </div>
            <div class="row">
                <?php foreach ($result_out as $index => $value): ?>
                <div class="model_item" data-car="<?=$value['id']?>">
                    <div class="row cart_action__block">
                        <div class="col-12 col-md-6 order-2 order-md-0">
                            <div class="model_item__name">
                                <h3 class="mt-3 mb-1"><span class="n1"><?=$value['mark']?></span> <span class="n2"><?=$value['model']?></span> <?=$value['body']?></h3>
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
                                <span class="price-value">от <?= $value['price'] ?> Р</span>
                                <span class="price-old-value d-flex align-items-center"><s>от <?= $value['price_old']?> Р</s></span>
                            </div>
							<div class="model_item__profit">
								<span>выгода до <b><?= $value['profit']?> Р</b></span>
							</div>
                            <div class="model_item__credit-rate">
                                <span>в кредит от <b><?= $value['credit_payment']?> Р</b></span>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-8 cart-btns-block">
                                    <button class="btn btn-lg w-100 cart-btn n1" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить спец. цену</button>
                                    <button class="btn btn-lg w-100 cart-btn n2" data-bs-toggle="modal" data-bs-target="#exampleModal">Рассчитать кредит от <?=$credit_rate?>%</button>
                                    <button class="btn btn-lg w-100 cart-btn n3" data-bs-toggle="modal" data-bs-target="#exampleModal">В рассрочку 0%</button>
                                    <button class="btn btn-lg w-100 cart-btn n4" data-bs-toggle="modal" data-bs-target="#exampleModal">Подобрать комплектацию</button>
                                </div>
                                <div class="d-flex d-lg-block col-12 col-lg-4 info-car__block ps-3 ps-xl-5">
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1"><?= $value['complecation_data'][0]['engine_displacement']?> л.</span>
                                        <span class="n2">Двигатель</span>
									</div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1"><?= $value['complecation_data'][0]['gearbox']?></span>
                                        <span class="n2">КПП</span>
									</div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1"><?= $value['complecation_data'][0]['max_speed']?> км/ч</span>
                                        <span class="n2">Макс. скорость</span>
									</div>
                                    <div class="row mt-3 info-car__item">
                                        <span class="n1"><?= $value['complecation_data'][0]['power']?> л.с.</span>
                                        <span class="n2">Мощность</span>
									</div>
                                </div>

                            </div>
                        </div>
                        <div class="model_item__info col-12 col-lg-6">
                            <div class="swiper__big text-center py-5">
                                <img src="<?=$value['preview']?>" alt="" class="car_photo">
                                <img src="assets/img/cars/unit_lable.png" alt="" class="label">
                            </div>
                            <div class="f-carousel" id="myCarousel<?=$index?>">
                                <div class="f-carousel__viewport">
                                    <div class="f-carousel__track">
										<?php if(!empty($value['live_photo_data'])):?>
											<?php foreach($value['live_photo_data'] as $img):?>
												<a href="<?=$img?>.webp" class="f-carousel__slide" data-fancybox="gallery">
													<img alt="" src="<?=$img?>.webp" />
												</a>
											<?php endforeach; ?>
                                        <?php elseif(empty($value['live_photo_data']) && !empty($value['live_photo'])): ?>
                                            <?php foreach($value['live_photo'] as $img):?>
												<a href="<?=$img?>" class="f-carousel__slide" data-fancybox="gallery">
													<img alt="" src="<?=$img?>" />
												</a>
                                            <?php endforeach; ?>
                                        <?php else: ?>
                                            <?php foreach($value['images'] as $img):?>
												<a href="<?=$img?>" class="f-carousel__slide" data-fancybox="gallery">
													<img alt="" src="<?=$img?>" />
												</a>
                                            <?php endforeach; ?>
                                        <?php endif; ?>
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
    <section id="s2" data-section="s2">
        <div class="container banner_block">
            <p>Значимость этих проблем настолько очевидна, что выбранный нами инновационный путь требует определения и уточнения новых предложений. Кстати, ключевые особенности структуры проекта набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке набирают популярность среди определенных слоев населения, а значит, должны быть представлены в исключительно положительном свете. Равным образом, внедрение современных методик способствует повышению качества как самодостаточных, так и внешне зависимых концептуальных решений. В рамках спецификации современных стандартов, активно развивающиеся страны третьего мира разоблачены. Однозначно, сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. С учётом сложившейся международной обстановки, сложившаяся структура организации напрямую зависит от своевременного выполнения сверхзадачи. Приятно, граждане, наблюдать, как многие известные личности объединены в целые кластеры себе подобных. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса описаны максимально подробно! А также предприниматели в сети интернет, превозмогая сложившуюся непростую экономическую ситуацию, функционально разнесены на независимые элементы.</p>
            <h4 >Второй заголовок</h4>
            <h3>Уже есть предложение?</h3>
            <p>Оставьте заявку и мы сделаем выгоднее!</p>
            <form action="/" method="post">
                <input type="tel" name="telephone" value="Ваш телефон">
                <input type="submit" placeholder="Получить предложение">
                <span>* Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных.</span>
            </form>
        </div>
    </section>
    <section id="s3"data-section="s3">
        <div class="container">
            <h2>Подберите комплектацию</h2>
            <div class="row">
                <span>Выберите модель</span>
                <span>Выберите комплектацию</span>
            </div>
        </div>
    </section>
    <section id="s4">
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
    <section id="s5">
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
                    <p>и получите выгоду до <?=$trade_in?> ₽!</p>
                </div>
                <div class="row">
                    <div class="item">Скидка 100 000 ₽ в день звонка</div>
                    <div class="item">Ставка от <?=$credit_rate?>%</div>
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
    <section id="s6" class="contact">
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