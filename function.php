<?php
define('ASSETS' , '/assets');
function get_time_end_action(){
    $lstDate = date('Y-m-d', strtotime('first day of next month'));
    $date = strtotime(date("Y-m-d"));
    $date = (date('j',$date) >= 15) ? strtotime($lstDate) : strtotime(date('Y-m-15'));
    $result = date("Y-m-d H:i:s", $date-1);

    return $result;
}
function get_date_end_action(){
    $monthRussian = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];
    $lstDate = date('Y-m-d', strtotime('first day of next month'));
    $date = strtotime(date("Y-m-d"));
    $date = (date('j',$date) >= 15) ? $date = strtotime($lstDate)-1 : strtotime(date('Y-m-15'));
    $result = date('j',$date) . ' ' . $monthRussian[ intval(date("m", $date)-1) ];

    return $result;
}