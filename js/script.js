$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
});

jQuery(document).ready(function($) {

	"use strict";


$('.fancybox').on('click', function() {
    var visibleLinks = $('.fancybox');

    $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

    return false;
  });

});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    margin:10,
    nav:true,
    items:1,
})


















