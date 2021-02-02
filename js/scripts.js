console.log("hello");



$(".b1").on("click", function () {
    $(this).hide();
    $(".b2").show();
    $("#three").hide();
    $("#one").show();
    $("body").css("background", "radial-gradient(#5DA9B6, #A68481)");
})

$(".b2").on("click", function () {
    $(this).hide();
    $(".b3").show();
    $("#one").hide();
    $("#two").show();
    $("body").css("background", "radial-gradient(#F1E099, #5DA9B6)");
})

$(".b3").on("click", function () {
    $(this).hide();
    $(".b1").show();
    $("#two").hide();
    $("#three").show();
    $("body").css("background", "url(../images/headphones.png), radial-gradient(#A68481, #F1E099)");
})
