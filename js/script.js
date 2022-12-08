
$(document).ready(function(){
    $('.boxes__slider').slick({
        slidesToShow:1,
        arrows:false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.history__slider').slick({
        adaptiveHeight: true,
        slidesToShow:2,
        appendArrows:$('.history__arrows-row'),
        responsive:[
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:1,
                    
                }
            }
        ]
    });
});


