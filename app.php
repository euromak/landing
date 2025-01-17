<?php
require_once 'config.php';
require_once 'function.php';
require_once './controller/DB.php';

if(isset($_GET['controller']) && !empty($_GET['controller'])) {
    $json = file_get_contents('customization.json');
    $_SESSION['mapData'] = json_decode($json, true);
    echo $json;
};

if(isset($_POST['phone']) && !empty($_POST['phone'])) {

    return true;
};

$result_out = array();
$price_old = null;
$price = null;
$price_max = null;
$profit = null;
$sale_time = get_time_end_action();
$sale_date = get_date_end_action();
$data_id = array();

$db = new DB;
$result = $db->getAll('body');

//exit();
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
        "slug" => "{$row['mark_name']} {$row['model']} {$row['body_name']}",
        "images" =>  (!empty($row['image'])) ? json_decode($row['image']) : null,
        "marks_logo1" => $row['mark_logo1'],
        "marks_logo2" => $row['mark_logo2'],
        "marks_video" => $row['video_link'],
        "body_video" => $row['video_link'],
        "model_picture" => $row['picture'],
        "mark_picture" => $row['banner'],
        "live_photo" =>  (!empty($row['live_photo'])) ? json_decode($row['live_photo']) : null,
        "price_old" => number_format($price_old, 0,'', ' '),
        "price" => number_format($price, 0,'', ' '),
        "profit" => number_format($profit, 0,'', ' '),
        "credit_payment" => number_format($credit_payment,0, '', ' '),
        "complecation_data" => $db->get_complectation($row['body_id']),
        "colors_data" => $db->get_colors_data($row['body_id']),
        "live_photo_data" => json_decode($db->get_live_photo($row['model_id'])),
    ];
};

foreach ($result_out as $ind => $value) {
    foreach ($value['complecation_data'] as $index => $item) {
        $value['complecation_data'][$index] = [
                "modname"=>$item['modname'],
                "compname"=>$item['compname'],
                "speed"=>$item['max_speed'],
                ];
    }
}
//var_dump($result_out[0]);
$data_front = json_encode($result_out);

require_once 'assets/temp/head.php';
require_once 'assets/temp/content.php';
require_once 'assets/temp/footer.php';