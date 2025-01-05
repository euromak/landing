<?php
// use PDO - нужно только в том случае, если вы
// Используете namespace выше. Далее по коду он будет
// Но если он вам не нужен - спокойно удаляйте
//getAll() - двумерный массив, индексированный числами по порядку
//getRow() - одномерный массив, первую строку результата
//getOne() - возвращает первый элемент первой строки результата
//getCol() - возвращает 1 колонку таблицы

use PDO;
class DB
{
    // Переменная, хранящая объект PDO
    private $db;

    public function __construct()
    {
        // Файл dbinfo.php возвращает массив для
        // Подключения к БД
        $dbinfo = require './config.php';
        // Подключение
        $this->db = new PDO('mysql:host=' . $dbinfo['host'] . ';dbname=' . $dbinfo['dbname'], $dbinfo['login'], $dbinfo['password']);
    }


    // Операции над БД
    public function query($sql, $params = [])
    {
        // Подготовка запроса
        $stmt = $this->db->prepare($sql);

        // Обход массива с параметрами
        // и подставление значений
        if ( !empty($params) ) {
            foreach ($params as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }
        }

        // Выполняем запрос
        $stmt->execute();
        // Возвращаем ответ
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAll($table, $sql = '', $params = [])
    {
        return $this->query("SELECT * FROM $table" . $sql, $params);
    }

    public function getRow($table, $sql = '', $params = [])
    {
        $result = $this->query("SELECT * FROM $table" . $sql, $params);
        return $result[0];
    }

}