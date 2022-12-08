$(document).ready(function() {
    if(window.matchMedia("(max-width:1020px)").matches){
        $('.menu-row__menu-item_click').click(function(event){
            $('.menu-row__sub-menu-list').toggleClass('active');
            $('.menu-row__arrow').toggleClass('active');
        });
    };
    if(window.matchMedia("(max-width:1020px)").matches){
        $('.catalog-row__menu-title').click(function(){
            $(this).toggleClass('active');
            $(this).next('ul').toggleClass('active');
            $(this).children('.catalog-row__arrow').toggleClass('active');
        });
    };
    $('.menu-row__catalog-btn, .catalog-row__cross').click(function(){
        $('.catalog-row').toggleClass('active');
        $('.mobile-catalog-row').toggleClass('active');
    });
    $('.main-row__menu-btn, .mobile-menu-row__cross').click(function(event){
        $('body').toggleClass('lock');
        $('.header').toggleClass('active-mobile');
        $('.menu-row').toggleClass('active');
        $('.mobile-menu-row').toggleClass('active');
    });
    $('.main-row__catalog-btn, .mobile-catalog-row__cross').click(function(event){
        $('body').toggleClass('lock');
        $('.header').toggleClass('active-mobile');
        $('.catalog-row').toggleClass('active');
        $('.mobile-catalog-row').toggleClass('active');
    });
    $('.menu-row__question').click(function(event){
        $('.popup-form').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.popup-form__cross').click(function(event){
        $('.popup-form').removeClass('active');
        $('body').removeClass('lock');
    });
});
