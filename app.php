<?php
require_once './class/DB.php';

$ids = array();
$params=array();
$result_out = array();
$price_old = null;
$price = null;
$price_max = null;
$profit = null;

$db = new DB;
$result = $db->getAll('body');

// преобразование данных
foreach ($result as $row) {
    $ids[] = $row['body_id'];
    $price_old = $db->get_old_max_price($row['body_id']);
    $price = $db->get_min_price($row['body_id']);
    $price_max = $db->get_max_price($row['body_id']);
    $profit = $price_old - $price_max;
    $credit_payment = floor(($mountMinPercentPayment * (1 + $mountMinPercentPayment)**84 / ((1 + $mountMinPercentPayment)**84 - 1)) * ($price - $price*$first_payment));
    $complectation_data = $db->get_complectation($row['body_id']);

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
        "price_old" => number_format($price_old, 0,'', ' '),
        "price" => number_format($price, 0,'', ' '),
        "profit" => number_format($profit, 0,'', ' '),
        "credit_payment" => number_format($credit_payment,0, '', ' '),
        "complecation_data" => $complectation_data,
        "colors_data" => [],
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

$data_front = json_encode($result_out);

require_once 'assets/temp/head.php';
require_once 'assets/temp/content.php';
require_once 'assets/temp/footer.php';