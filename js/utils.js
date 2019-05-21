$(document).ready(function() {

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    // Init LightBox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    // Auto Play Modal Video
    $('.video').click(function() {
        var theModal = $(this).data('target');
        var videoSRC = $(this).attr('data-video');
        var videoSRCAuto = videoSRC + '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';

        $(theModal + ' iframe').attr('src', videoSRCAuto);
        
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });

    // Initialize Slick Slider
    $(document).ready(function(){
        $('.slider').slick({
            infinite: true,
            slideToShow: 1,
            slideToScroll: 1
        });
    });

});
