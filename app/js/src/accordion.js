// новая версия аккордеона

$(document).ready(function () {
    $('.start-steps__list > li').click(function (e) {
        $(".start-steps__list > li").not($(this)).removeClass("active").find(".answer").slideUp();
        $(this).toggleClass("active").find(".answer").slideToggle();
    });
});