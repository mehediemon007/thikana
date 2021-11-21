;(function($){

    $(".single-slider").owlCarousel({
        items: 1,
        dots:false,
        nav:true,
        navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });

})(jQuery);
