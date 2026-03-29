$(document).ready(function () {
  var $carousel = $(".eacl-carousel");

  $carousel.owlCarousel({
    autoWidth: true,
    loop: true,
    nav: true,
    dots: false,
    // margin: 10,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    ],
    autoplay: false, // অটো চলবে
    autoplayTimeout: 1000, // ৪ সেকেন্ড বিরতি
    smartSpeed: 800, // স্লাইড হওয়ার গতি (মসৃণতা)
    // nav: true,
    lazyLoad: true,
    // rtl: true,
  });

  $carousel.on("wheel", function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
      $carousel.trigger("next.owl.carousel");
    } else {
      $carousel.trigger("prev.owl.carousel");
    }
  });

  $carousel.on("click", ".eacl-card", function () {
    $(".eacl-carousel .eacl-card").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
