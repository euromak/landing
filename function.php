<?php
$db = new mysqli('localhost', 'root', 'root', 'u430500_novgorod_avtohous');
if($db->connect_error) die('Ошибка соединения');

function get_min_price($db,$id){
    $query = "SELECT MIN(price) AS price_min FROM price WHERE body_id = $id";
    $query = $db->query($query);

    foreach ($query as $row){
        return $row;
    }

}
function get_old_price($db,$id){
    $query = "SELECT price_old FROM price WHERE body_id = $id";
    $query = $db->query($query);

    foreach ($query as $row){
        return  $row;
    }
}
function get_data_catalog($db){
    $query = "SELECT body.id AS 'body_id',
       mark.name AS 'mark',
       model.name AS 'model',
       body.image AS 'image',
       body.preview AS 'preview',
       body.live_photo AS 'live_photo'
FROM mark
         INNER JOIN model ON mark.id = model.mark_id
         INNER JOIN body ON model.id = body.model_id
WHERE
      mark.name = 'changan' AND model.active = 1 AND body.active = 1";
    $query = $db->query($query);
    $data = [];

    foreach($query as $row){

        $data[]=array(
            "id" => $row["body_id"],
            "mark" => $row["mark"],
            "model" => $row["model"],
            "image" => $row["image"],
            "preview" => $row["preview"],
            "live_photo" => $row["live_photo"],
            "price" => get_min_price($db,$row["body_id"]),
            "price_old" => get_old_price($db,$row["body_id"])
        );
    }


// перебор данных из запроса БД
    if(!$query) die('Ошибка запроса');

// закрытие соединения с БД
    $db->close();

    return $data;
}

$res = get_data_catalog($db);
