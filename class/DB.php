<?php
// use PDO - нужно только в том случае, если вы
// Используете namespace выше. Далее по коду он будет
// Но если он вам не нужен - спокойно удаляйте
//$sql - переменная с текстом SQL запроса.
//$params - переменная с какими-то параметрами для запроса.
//getAll() - двумерный массив, индексированный числами по порядку
//getRow() - одномерный массив, первую строку результата
//getOne() - возвращает первый элемент первой строки результата
//getCol() - возвращает 1 колонку таблицы

//use PDO;

class DB
{
    // Объект класса PDO
    private $db;

    // Соединение с БД
    public function __construct()
    {
        $dbinfo = require './dbinfo.php';
        $this->db = new PDO('mysql:host=' . $dbinfo['db_host'] . ';dbname=' . $dbinfo['db_name'], $dbinfo['db_user'], $dbinfo['password']);
    }

    // Операции над БД
    public function query($sql, $params = [])
    {
        // Подготовка запроса
        $stmt = $this->db->prepare($sql);

        // Обход массива с параметрами
        // и подставляем значения
        if ( !empty($params) ) {
//            var_dump($params);
            foreach ($params as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }
        }

        // Выполняя запрос
        $stmt->execute();
        // Возвращаем ответ
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    function activeModals(){
        return $this->query("SELECT 
            body.id AS 'id',
            mark.name AS 'Марка', 
            model.name AS 'Модель', 
            modification.name AS 'Модификация', 
            price.price AS 'Цена', price.price_old AS 'Старая цена', 
            complectation.name AS 'Комплектация',body.active
            FROM mark
            INNER JOIN model ON mark.id = model.mark_id
            INNER JOIN body ON model.id = body.model_id
            INNER JOIN modification ON body.id = modification.body_id
            INNER JOIN price ON body.id = price.body_id
            INNER JOIN complectation ON body.id = complectation.body_id
            WHERE body.active = 1 AND  mark.name = 'changan'"
        );
    }
    public function getAll($table, $sql = '', $params = [])
    {
        return $this->query("SELECT body.id AS 'body_id',
            mark.id AS 'mark_id',
            mark.name AS 'mark_name',
            mark.image AS 'mark_logo1',
            mark.image2 AS 'mark_logo2',
            mark.video_link AS 'video',
            mark.banner AS 'banner',
            model.id AS 'model_id   ',
            model.name AS 'model',
            model.picture AS 'picture',
            body.name AS 'body_name',
            body.image AS 'image',
            body.preview AS 'preview',
            body.live_photo AS 'live_photo',
            body.video_link AS 'video_link'
            FROM mark
         INNER JOIN model ON mark.id = model.mark_id
         INNER JOIN body ON model.id = body.model_id
            WHERE
      mark.name = 'changan' AND model.active = 1 AND body.active = 1" . $sql, $params);
    }

    public function getRow($table, $sql = '', $params = [])
    {
        $result = $this->query("SELECT * FROM $table" . $sql, $params);
        return $result[0];
    }

    public function get_old_price($id){

        return $this->query("SELECT max(price_old) FROM price WHERE body_id = $id");
    }

    function get_min_price($id){
        return $this->query("SELECT MIN(price) AS price_min FROM price WHERE body_id = $id");

    }

}