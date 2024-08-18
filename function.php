<?php

function db($query=''){
    $connection = new mysqli('localhost', 'root', 'root', 'temp_lp');

    if($connection->connect_error) die('Ошибка соединения');

    $query = "
            SELECT body.id AS 'body_id',
                   mark.name AS 'mark',
                   model.name AS 'model' ,
                   modification.name AS 'modification',
                   price.price AS 'price',
                   price.price_old AS 'price_old',
                   complectation.name AS 'complectation',
                   body.image AS 'image',
                   body.preview AS 'preview',
                   body.live_photo AS 'live_photo',
                   body.active AS 'active'
            FROM mark
                     INNER JOIN model ON mark.id = model.mark_id
                     INNER JOIN body ON model.id = body.model_id
                     INNER JOIN modification ON body.id = modification.body_id
                     INNER JOIN price ON body.id = price.body_id
                     INNER JOIN complectation ON body.id = complectation.body_id
            WHERE mark.name = 'lixiang';
                ";

    $result = $connection->query($query);

    $rows = $result->num_rows;
    $arr = [];

    for($j=0; $j<$rows; ++$j) {
        $data = $result->fetch_array(MYSQLI_ASSOC);

        $arr[] = [
            'id' => $data['body_id'],
            'mark' => $data['mark'],
            'model' => $data['model'],
            'price' =>$data['price'],
            'old_price' => $data['price_old'],
        ];
    }


// перебор данных из запроса БД
    if(!$result) die('Ошибка запроса');

// закрытие соединения с БД
    $result->close();
    $connection->close();

    return $arr;
}

$res = db();
$summ_info = [];

// собираем id
foreach ($res as $item) {
    $summ_info[] = $item['id'];
}

// уникальные id
$summ_info = array_unique($summ_info);


array_reduce($res, function($item){

});

foreach ($res as $item) {
//    var_dump($item);
    foreach ($summ_info as $id) {
//        if($id == $item['id']);

    }
}


