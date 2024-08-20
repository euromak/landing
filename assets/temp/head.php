<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Автосалон Автохаус {{mark_name}}</title>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.css"
    />
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.thumbs.css"
    />
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
    />
    <link rel="stylesheet" href="<?= ASSETS . '/css/style.css' ?>">
    <style>
        img {
            max-width: 100%;
            height: auto;
        }

        #myCarousel {
            max-width: 640px;
            margin: 0 auto;
        }

        #myCarousel .f-carousel__slide {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>