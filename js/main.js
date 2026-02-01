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