<?php
session_start();

$_SESSION['username'] = 'user';
$_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
$_SESSION['utm'] = explode('&',str_replace('/?','',$_SERVER['REQUEST_URI']));
$_SESSION['time'] = date('H.m.y H:i:s',time());
//unset($_SESSION['username']);
$controller = $_GET['controller'] ?? 'index';

$routes = require 'routes.php';

require_once $routes[$controller] ?? "view/404.php";