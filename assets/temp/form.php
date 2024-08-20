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