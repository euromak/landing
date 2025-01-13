<?php
require_once './class/DB.php';

$result_out = array();
$price_old = null;
$price = null;
$price_max = null;
$profit = null;

$db = new DB;
$result = $db->getAll('body');

// преобразование данных
foreach ($result as $row) {
    $price_old = $db->get_old_max_price($row['body_id']);
    $price = $db->get_min_price($row['body_id']);
    $price_max = $db->get_max_price($row['body_id']);
    $profit = $price_old - $price_max;
    $credit_payment = floor(($mountMinPercentPayment * (1 + $mountMinPercentPayment)**84 / ((1 + $mountMinPercentPayment)**84 - 1)) * ($price - $price*$first_payment));

    $result_out[] = [
        "id" => $row['body_id'],
        "id_model" => $row['model_id'],
        "id_mark" => $row['mark_id'],
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
        "complecation_data" => $db->get_complectation($row['body_id']),
        "colors_data" => $db->get_colors_data($row['body_id']),
        "live_photo_data" => json_decode($db->get_live_photo($row['model_id'])),
    ];
};

$data_front = json_encode($result_out);

require_once 'assets/temp/head.php';
require_once 'assets/temp/content.php';
require_once 'assets/temp/footer.php';