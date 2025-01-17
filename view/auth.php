<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">Имя</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Иван" required>
    <div class="valid-feedback">
Все хорошо!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Фамилия</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Петров" required>
    <div class="valid-feedback">
Все хорошо!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Имя пользователя</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
Пожалуйста, выберите имя пользователя.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Город</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
Укажите действующий город.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">Область</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Выберите...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
Пожалуйста, выберите корректный город.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Индекс</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
Пожалуйста, предоставьте действующий почтовый индекс.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
Примите условия и соглашения
</label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
Вы должны принять перед отправкой.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Отправить форму</button>
  </div>
</form>