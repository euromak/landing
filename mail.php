<?php
$result = [];
// проверка на полученнные данные с фронта
if(isset($_POST['telephone']) && !empty($_POST['telephone']) && $_POST['telephone'] != "") {
    echo 1;
} else {
    echo 0;
}

function db($query,$options) {

}