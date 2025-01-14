<footer class="footer">
    <div class="container pt-5">
        <div class="row">
            <div class="logo col-12 col-lg-6">
				<a class="logo d-flex" href="#">
					<img class="logo__brand" src="<?= ASSETS . '/img/logo.svg'?>" alt="logo brand">
					<span></span>
					<img class="logo__avtohous" src="<?= ASSETS . '/img/logo_avt.svg'?>" alt="logo avtohous">
				</a>
			</div>
            <a class="phone col-12 col-lg-6 text-end" href="tel:<?=$phone?>"><?=$phone?></a>
        </div>
        <div class="row mt-3">
            <div class="col-9">
                <h3>Меню</h3>
				<div class="row">
                    <?php include 'assets/temp/menu.php'?>
					<h3>Модельный ряд</h3>
					<div class="row w-50 ">
						<div class="model col">ALSVIN</div>
						<div class="model col">EADOplus</div>
						<div class="model col">CS95NEW</div>
						<div class="model col">CS85COUPE</div>
						<div class="model col">LAMORE</div>
						<div class="model col">UNI-V</div>
					</div>
				</div>
            </div>
            <div class="col-3 d-flex justify-content-end flex-column align-items-end text-end">
                <span>Ежедневно с 9:00 до 22:00</span>
                <span class="my-3">г. Нижний Новгород, ул. Июльских Дней, д. 1г</span>
                <button class="callmodal d-none d-md-flex align-items-center justify-content-center"
						data-bs-toggle="modal" data-bs-target="#exampleModal">Заказать звонок</button>
            </div>
        </div>

        <hr class="my-4">
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
	let data_car = <?=$data_front?>;
    let saleTime = "<?=$sale_time?>";

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
<script src="<?= '/node_modules/swiper/swiper-bundle.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/bootstrap/js/bootstrap.bundle.min.js'?>"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.thumbs.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
<script src="<?= ASSETS . '/lib/just-validate.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/inputmask.min.js'?>"></script>
<script src="<?= ASSETS . '/lib/countdown.min.js'?>"></script>
<script src="<?= ASSETS . '/js/main.js'?>"></script>
</body>
</html>
