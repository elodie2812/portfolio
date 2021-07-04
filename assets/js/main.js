$(function() {
$('.mockup').mouseover (function () {
    $('.mockup').css('width', '+=30%');
    //$(this).css('width', '+=20%');
});
$('.mockup').mouseleave (function () {
    $('.mockup').css('width', '-=30%');
});
});