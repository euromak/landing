<?php
require_once './class/DB.php';

$db = new DB;
$result = $db->getAll('body',);
$result1 = $db->activeModals();
$ids = array();
$result_out = array();

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



$params=array();
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
    $result_out[$index]['colors'] = $colors[$item['id']];
}


include_once 'assets/temp/head.php';
include_once 'assets/temp/content.php';