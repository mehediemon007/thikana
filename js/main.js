;(function($){

    $(".nav-toggle").click(function(){
        $(".thk-main-menu").slideToggle("100");
    })

    $(".single-slider").owlCarousel({
        items: 1,
        dots:false,
        nav:false,
        navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
           1200:{
               nav:true
           }
        }
    });

     // Magnifig Popup
     $('.videolink').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

})(jQuery);
