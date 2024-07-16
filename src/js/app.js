import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
    dots: true,
    slidesToShow: 1, //кол. одноврименно
    infinite: false, // отключ зацикленность
    slidesToScroll: 1, // сколько при  клейке на скрол -?
    fade: true, // затенялись отзыва один появлялся другой исчезал
    arrows: true, // стрелки
});