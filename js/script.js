
$(document).ready(function () {
    $('a').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});
$(document).ready(function () {
    $('li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});
