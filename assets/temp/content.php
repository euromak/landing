<body>
	<main class="main" data-bs-spy="scroll" data-bs-target="#navbar-example2">
	    <section class="banner">
	        <div class="swiper banner__block" id="main-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide n1">
							<picture>
								<source srcset="<?= ASSETS . '/img/banner/slide_1/banner_main_sm.webp'?>" media="(max-width: 640px)" />
								<source srcset="<?= ASSETS . '/img/banner/slide_1/banner_main_md.webp'?>" media="(max-width: 1000px)" />
								<source srcset="<?= ASSETS . '/img/banner/slide_1/banner_main_lg.webp'?>" media="(max-width: 1400px)" />
								<source srcset="<?= ASSETS . '/img/banner/slide_1/banner_main.webp'?>" media="(max-width: 1920px)" />
								<img class="img-fluid" src="<?= ASSETS . '/img/banner/slide_1/banner_main_4k.webp'?>" alt="banner" />
							</picture>
						<div class="swiper-data n1 hidden">
							<div class="container">
								<h1 class="">Эксклюзивные кредитные условия по программе CHANGAN FINANCE!</h1>
								<p>+ РАССРОЧКА 0% на 24 месяца!</p>
								<div class="sale">Скидка 100 000 ₽ в день звонка!</div>
							</div>
						</div>
						<div class="row banner_utp">
							<div class="col n1">Ставка от 6.5%!</div>
							<div class="col n2">
								<p class="n1">Одобряем 99%</p>
								<p class="n2">при наличии первого взноса</p>
							</div>
							<div class="col n3">
								<p class="n1">Одобряем 99%</p>
								<p class="n2">при наличии первого взноса</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide n2">
						<picture>
							<source srcset="<?= ASSETS . '/img/banner/slide_2/sm.webp'?>" media="(max-width: 640px)" />
							<source srcset="<?= ASSETS . '/img/banner/slide_2/md.webp'?>" media="(max-width: 960px)" />
							<source srcset="<?= ASSETS . '/img/banner/slide_2/lg.webp'?>" media="(max-width: 1200px)" />
							<source srcset="<?= ASSETS . '/img/banner/slide_2/1920.webp'?>" media="(max-width: 1920px)" />
							<img class="img-fluid" src="<?= ASSETS . '/img/banner/slide_2/full.webp'?>" alt="banner" />
						</picture>
						<div class="swiper-data n2 hidden">
							<div class="container">
								<h5>Эксклюзивные условия до <?=$sale_date?></h5>
								<h1>Держим старый курс цены на новые <span><?=$mark?>!</span> </h1>
								<p>Ограниченная партия с выгодой до 25%!</p>
							</div>
						</div>
					</div>
				</div>

	            <div class="banner__data d-none d-xl-flex">
	                <form method="post" id="callback_form" class="form gap-3 p-4" enctype="multipart/form-data">
	                    <input
	                            name="form_subject"
	                            type="hidden"
	                            value="Обратная связь">
						<input
								name="check"
								type="hidden"
								value="">
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
	                    <input type="submit" class="form-control btn btn-lg btn-primary mt-1" value="Получить предложение">
	                    <span class="form__politic-text">* Отправляя данную форму, вы соглашаетесь с <u>политикой
	                            обработки персональных данных.</u>
	                    </span>
	                </form>
	            </div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
	        </div>
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
					<a class="phone phone__header" href="tel:<?=$phone?>"><?=$phone?></a>
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
				<a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">Модельный ряд</a>
				<a class="nav-link" href="#s1">Авто в наличии</a>
				<a class="nav-link" href="#s3">Комплектации</a>
				<a class="nav-link" href="#s4">Автокредит</a>
				<a class="nav-link" href="#s5">Трейд-in</a>
				<a class="nav-link" href="#s6">Контакты</a>
			</nav>
			</div>
		</header>
	    <section id="timer-block" class="h-100">
	        <div class="container n1">
	            <div class="timer p-3 hidden">
	                <h3>До <span class="timeless-value"><?=$sale_date?></span> держим выгоды на <?=$mark?> <b>до 25%!</b></h3>
	                <div class="row d-flex flex-row-reverse">
	                    <div class="col-lg-6 d-flex align-items-center">
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
	                            <span class="timer__block-value "></span>
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
			<div class="container n2">
				<div class="action swiper" id="actionsCarousel">
					<div class="swiper-wrapper">
						<div class="swiper-slide action__slide d-flex flex-column n1 rounded-4">
							<h3 class="action__slide-title">Большая семья</h3>
							<span class="action__slide-desc">Дарим скидку 7% на покупку нового CHANGAN многодетным семьям</span>
							<button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
						</div>
						<div class="swiper-slide action__slide d-flex flex-column n2 rounded-4">
							<h3 class="action__slide-title">Военным</h3>
							<span class="action__slide-desc">Дарим скидку 5% на покупку нового CHANGAN военнослужащим</span>
							<button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
						</div>
						<div class="swiper-slide action__slide d-flex flex-column n3 rounded-4">
							<h3 class="action__slide-title">Песнионерам</h3>
							<span class="action__slide-desc">Дарим скидку 10% на покупку нового CHANGAN пенсионерам</span>
							<button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
						</div>
						<div class="swiper-slide action__slide d-flex flex-column n4 rounded-4">
							<h3 class="action__slide-title">Медработникам</h3>
							<span class="action__slide-desc">Дарим скидку 10% на покупку нового CHANGAN медицинским работникам</span>
							<button class="action__slide-btn btn btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Получить предложение</button>
						</div>
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
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
	                <div id="<?=$value['id']?>" class="model_item my-2 my-lg-3 p-4" data-bs-spy="scroll"  data-bs-target="#navbar-example3" data-car="<?=$value['id']?>">
	                    <div class="row cart_action__block">
	                        <div class="col-12 col-md-6 order-2 order-md-0">
	                            <div class="model_item__name">
	                                <h3 class="m-0"><span class="n1"><?=$value['mark']?></span> <span class="n2"><?=$value['model']?></span> <?=$value['body']?></h3>
	                            </div>
	                        </div>
	                        <div class="col-12 col-md-6 d-flex justify-content-end align-items-center gap-2 order-1">
	                            <span class="d-flex cart_action__item red h-md-50 col-auto">Акция до <?=$sale_date?></span>
	                            <span class="d-flex cart_action__item green h-md-50 col-auto">Авто в наличии</span>
	                        </div>
	                    </div>
	                    <div class="row ">
	                        <div class="model_item__info col-12 col-lg-5">
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
	                                <div class="d-flex d-lg-block col-12 col-lg-4 info-car__block">
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
	                        <div class="model_item__info col-12 col-lg-7">
								<div class="row h-100 d-flex align-items-center">
									<div class="swiper__big col-lg-9 p-0">
										<img src="<?=$value['preview']?>" alt="preview" class="car_photo">
										<img src="<?=$value['model_picture']?>" alt="model" class="label">
									</div>
									<div class="swiper col-lg-3"  id="myCarousel<?=$index?>">
										<div class="swiper-wrapper">
	                                        <?php if(!empty($value['live_photo_data'])):?>
	                                            <?php foreach($value['live_photo_data'] as $img):?>
													<a href="<?=$img?>.webp" class="swiper-slide" data-fancybox="gallery">
														<img class="img-fluid" alt="" width="150" height="85" src="<?=$img?>.webp"/>
													</a>
	                                            <?php endforeach; ?>
	                                        <?php elseif(empty($value['live_photo_data']) && !empty($value['live_photo'])): ?>
	                                            <?php foreach($value['live_photo'] as $img):?>
													<a href="<?=$img?>" class="swiper-slide" data-fancybox="gallery">
														<img class="img-fluid" alt="" width="150" height="85" src="<?=$img?>" />
													</a>
	                                            <?php endforeach; ?>
	                                        <?php else: ?>
	                                            <?php foreach($value['images'] as $img):?>
													<a href="<?=$img?>" class="swiper-slide" data-fancybox="gallery">
														<img class="img-fluid" alt="" width="150" height="85" src="<?=$img?>" />
													</a>
	                                            <?php endforeach; ?>
	                                        <?php endif; ?>
										</div>
										<div class="swiper-pagination"></div>
										<div class="swiper-button-prev"></div>
										<div class="swiper-button-next"></div>
									</div>
								</div>

	                        </div>
	                    </div>
	                    <div class="row utp">
	                        <h4 class="my-3 my-lg-1">Подарки при покупке:</h4>
	                        <div class="utp_list d-flex flex-wrap justify-content-between">
	                            <div class="utp_list__i n1 py-1">Скидка 100 000₽ в день звонка</div>
	                            <div class="utp_list__i n2 py-1">Полис КАСКО</div>
	                            <div class="utp_list__i n3 py-1">Зимние шины</div>
	                            <div class="utp_list__i n4 py-1">Видеорегистратор</div>
	                            <div class="utp_list__i n5 py-1">3 года гарантии</div>
	                            <div class="utp_list__i n6 py-1">Сигнализация</div>
	                        </div>
	                    </div>
	                </div>
	                <?php endforeach; ?>
	            </div>
	        </div>
	    </section>
	    <section id="s2" class="offer-banner" data-section="s2">
	        <div class="container banner__block">
				<div class="banner__data">
					<h2>Уже есть предложение?</h2>
					<p>Оставьте заявку и мы сделаем выгоднее!</p>
	                <?php include 'assets/temp/form.php'?>
				</div>

	        </div>
	    </section>
	    <section id="s3" data-section="s3" class="complectation-block active">
	        <div class="container complectation-filter">
	            <h2 class="mt-5 mb-3">Подберите комплектацию</h2>
				<form class="form gap-lg-4 grid" method="get">
					<select class="w-100 form-select form-select-lg mb-3" aria-label="form-select-lg">
						<option selected>Модель</option>
					<?php foreach($compl_data as $item):?>
						<option value="<?=$item['id_model']?>"><?=$item['model_name']?></option>
					<?php endforeach; ?>				
					</select>
					<select class="w-100 form-select form-select-lg mb-3" id="modlSelect" aria-label="modlSelect" disabled>
						<option selected>Двигатель</option>
					<?php foreach($compl_data as $item):?>
						<option data-model="<?=$item['id_model']?>" data-body="<?=$item['body_id']?>" data-body="<?=$item['slug']?>" value="<?=$item['modification_id']?>"><?=$item['modification_id']?></option>
					<?php endforeach; ?>
					</select>
					<select class="w-100 form-select form-select-lg mb-3" id="complSelect" aria-label="complSelect" disabled>
						<option selected>Комплектация</option>
					<?php foreach($compl_data as $item):?>
						<option value="<?=$item['complectation_id']?>"><?=$item['complectation_id']?></option>
					<?php endforeach; ?>
					</select>
				</form>
	        </div>
			<div class="container complectation-result">
				<?php foreach ($result_out as $value): ?>
                    <?php foreach ($value['complecation_data'] as $item): ?>
				<div class="rounded-3 row my-4 mx-1 shadow-sm complectation-value my-3 px-1 px-md-3 3 py-4"
					id="<?=$value['id']?>-<?=$value['id_model']?>-<?=$item['modification_id']?>-<?=$item['complectation_id']?>" data-id="<?=$value['id']?>"
					data-model="<?=$value['id_model']?>" 
					data-body="<?=$item['body_id']?>"
					data-idmod="<?=$item['modification_id']?>"
					data-idcomp="<?=$item['id']?>"
					>
					<div class="col-12 col-lg-4">
						<img src="assets/img/modification/1.png" alt="">
					</div>
					<div class="col-12 col-lg-5">
						<div class="row complectation-data">
							<div class="name"><?=$value['mark']?> <?=$value['model']?></div>

							<div class="name_compl"><?=$item['name']?></div>
							<div class="info d-flex mt-3">
								<div class="item col d-flex flex-column justify-content-center align-items-start">
									<span class="n1">Двигатель:</span>
									<span class="n2"><?=$item['engine_displacement']?> л.</span>
								</div>
								<div class="item col d-flex flex-column justify-content-center align-items-start">
									<span class="n1">Мощность:</span>
									<span class="n2"><?=$item['power']?> л.с.</span>
								</div>
								<div class="item col d-flex flex-column justify-content-center align-items-start">
									<span class="n1">Привод:</span> 
									<span class="n2"><?=$item['drive']?></span>
								</div>
								<div class="item col d-flex flex-column justify-content-center align-items-start">
									<span class="n1">КПП:</span>
									<span class="n2"><?=$item['gearbox']?></span>
								</div>
							</div>

						</div>
					</div>
					<div class="col-12 col-lg-3 my-4">
						<button class="btn btn-lg fs-5 btn-primary w-100 calmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Рассчитать кредит</button>
						<button class="btn btn-lg btn-outline-primary w-100 mt-2 calmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Узнать цену</button>
					</div>
				</div>
                    <?php endforeach; ?>
                <?php endforeach; ?>
			</div>
	    </section>
	    <section id="s4" class="offer-banner my-5">
	        <div class="banner_credit">
	            <div class="container">
	                <div class="row">
	                    <h2 class="mt-5 w-75"><span class="d-block">Предоставим выгодные кредитные условия!</span><span class="color-text my-3">на новые <?=strtoupper($mark)?>!</span></h2>
	                </div>

	                <?php include 'assets/temp/form.php'?>
	            </div>
	        </div>
	    </section>
	    <section id="s5" class="offer-banner">
	        <div class="banner_tradein">
	            <div class="container">
	                <div class="row">
	                    <h2 class="mt-5"><span class="d-block">Сдайте старый авто</span><span class="color-text my-3">в TRADE-IN</span></h2>
	                    <p>и получите выгоду до <?=$trade_in?> ₽!</p>
	                </div>
	                <div class="row banner_tradein-utp">
	                    <div class="item">Скидка 100 000 ₽ в день звонка</div>
	                    <div class="item">Ставка от <?=$credit_rate?>%</div>
	                    <div class="item">3 платежа по кредиту в подарок</div>
	                    <div class="item">Подарки на выбор</div>
	                    <div class="item">Срок кредитования до 84 месяцев</div>
	                </div>

	                <?php include 'assets/temp/form.php'?>
	            </div>
	        </div>
	    </section>
	    <section id="s6" class="contact d-flex justify-content-center">
	        <div id="map">
				<div class="container py-3">
					<div class="contacts-info col-12 col-lg-4 text-start px-3 py-4 rounded-4 shadow scroll-item">
						<h2 class="mb-3">Контакты</h2>
						<div class="phone mb-3">
							<span>Телефон:</span>
							<span><?=$phone?></span>
						</div>
						<div class="adress mb-3">
							<span>Адрес:</span>
							<span><?=$adress?></span>
						</div>
						<div class="work mb-4">
							<span>Режим работы:</span>
							<span><?=$work_time?></span>
						</div>
						<button class="w-100 callmodal d-md-flex align-items-center justify-content-center"
								data-bs-toggle="modal" data-bs-target="#exampleModal">Заказать звонок</button>
					</div>
				</div>

	        </div>
	    </section>
	</main>