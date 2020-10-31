var instance = M.Carousel.init({
    fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
    fullWidth: true
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, null);
});

// Or with jQuery

$(document).ready(function() {
    $('.parallax').parallax();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 400)
})

$('.close').click(function() {
    $(this).closest('.card').remove();
})