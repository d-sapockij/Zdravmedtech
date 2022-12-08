$(document).ready(function() {
    $('.popup__link').click(function(event){
        $('.popup').addClass('open');
        $('body').addClass('lock');
    });
    $('.popup__cross').click(function(event){
        $('.popup').removeClass('open');
        $('body').removeClass('lock');
    });
});


