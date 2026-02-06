// accordian
$(function () {

    $(".faq-answer").hide();
    $(".slideUp").hide();
    $(".slideDown").on("click", function () {
        $(".faq-answer").slideDown();
        $(".slideUp").show();
        $(".slideDown").hide();
    });

    $(".slideUp").on("click", function () {
        $(".faq-answer").slideUp();
        $(".slideUp").hide();
        $(".slideDown").show();
    });




    $(".faq-answer1").hide();
    $(".slideUp1").hide();
    $(".slideDown1").on("click", function () {
        $(".faq-answer1").slideDown();
        $(".slideUp1").show();
        $(".slideDown1").hide();
    });

    $(".slideUp1").on("click", function () {
        $(".faq-answer1").slideUp();
        $(".slideUp1").hide();
        $(".slideDown1").show();
    });






    $(".faq-answer2").hide();
    $(".slideUp2").hide();
    $(".slideDown2").on("click", function () {
        $(".faq-answer2").slideDown();
        $(".slideUp2").show();
        $(".slideDown2").hide();
    });

    $(".slideUp2").on("click", function () {
        $(".faq-answer2").slideUp();
        $(".slideUp2").hide();
        $(".slideDown2").show();
    });




    $(".faq-answer3").hide();
    $(".slideUp3").hide();
    $(".slideDown3").on("click", function () {
        $(".faq-answer3").slideDown();
        $(".slideUp3").show();
        $(".slideDown3").hide();
    });

    $(".slideUp3").on("click", function () {
        $(".faq-answer3").slideUp();
        $(".slideUp3").hide();
        $(".slideDown3").show();
    });
})
// GALLERY SWIPER 
var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});


// INSTAGRAM SWIPER 
var instagramSwiper = new Swiper(".instagramSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});
// Sticky Navbar
$(document).ready(function () {
    var header = $("#mainHeader");
    var headerOffset = header.offset().top;

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > headerOffset) {
            header
                .removeClass("absolute top-10")
                .addClass("fixed top-0 bg-black shadow-lg");
        } else {
            header
                .removeClass("fixed top-0 bg-black shadow-lg")
                .addClass("absolute top-10");
        }
    });
    $("#menuBtn").click(function () {
        $("#mobileMenu").slideToggle();
    });
    $("#mobileService").click(function () {
        $("#mobileDropdown").slideToggle();
    });

});






