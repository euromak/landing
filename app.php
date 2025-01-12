<?php
require_once './class/DB.php';

$ids = array();
$params=array();
$result_out = array();
$db = new DB;
$result = $db->getAll('body',);
$result1 = $db->activeModals();


// преобразование данных
foreach ($result as $row) {
    $ids[] = $row['body_id'];
    $result_out[] = [
        "id" => $row['body_id'],
        "mark" => $row['mark_name'],
        "model" => $row['model'],
        "body" => $row['body_name'],
        "preview" => $row['preview'],
        "images" =>  (!empty($row['image'])) ? json_decode($row['image']) : false,
        "marks_logo1" => $row['mark_logo1'],
        "marks_logo2" => $row['mark_logo2'],
        "marks_video" => $row['video_link'],
        "body_video" => $row['video_link'],
        "model_picture" => $row['picture'],
        "mark_picture" => $row['banner'],
        "live_photo" =>  (!empty($row['live_photo'])) ? json_decode($row['live_photo']) : false,
    ];
};

// получение цветов
foreach ($ids as $row) {
    $params[] = $row;
}

$arr2 = implode(',', $params);
$result2 = $db->query("SELECT * FROM color WHERE body_id IN($arr2)");
$colors = array();

foreach($result2 as $index => $item) {
    $colors[$item['body_id']][] = [
        "id" => $item['body_id'],
        "name" => $item['name'],
        "hex" => $item['hex'],
        "picture" => $item['picture'],
    ];

}

// добавление цвета в массив
foreach ($result_out as $index => $item) {
    if($colors[$item['id']]) {
        $result_out[$index]["colors"] = $colors[$item['id']];
    }
}



// добавление цен
$price_info = $db->query("SELECT * FROM price WHERE body_id IN($arr2) ");

$arr5 = [];
foreach ($price_info as $ind => $value) {

}

$old_price = $db->get_old_price('1097');
$min_price = $db->get_min_price('1097');
var_dump($old_price[0]['max(price_old)']);
var_dump($min_price[0]['price_min']);
var_dump($old_price[0]['max(price_old)'] - $min_price[0]['price_min']);
//exit();
require_once 'assets/temp/head.php';
require_once 'assets/temp/content.php';
require_once 'assets/temp/footer.php';