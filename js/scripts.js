console.log("hello");



$(".b1").on("click", function () {
    $(this).hide();
    $(".b2").show();
    $("#three").hide();
    $("#one").show();
})

$(".b2").on("click", function () {
    $(this).hide();
    $(".b3").show();
    $("#one").hide();
    $("#two").show();
})

$(".b3").on("click", function () {
    $(this).hide();
    $(".b1").show();
    $("#two").hide();
    $("#three").show();
})
