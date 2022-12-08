$(document).ready(function() {
    $('.catalog__item-img, .catalog__item-title').click(function(){
        $(this).parents('.catalog__item').toggleClass('active');
    });
    $('.catalog__item-show-hide').click(function(){
        $(this).parents('.catalog__item').toggleClass('active');
    });
    $('.catalog__mobile-btn').click(function(){
        $('.mobile-filter').toggleClass('active');
        $('body').addClass('lock');
    });
    $('.mobile-filter__cross').click(function(){
        $('.mobile-filter').toggleClass('active');
        $('body').removeClass('lock');
    });
});