$(function(){
    $("#change-color").on("click", function () {
        $("#target").css("color","#FFCC99");
    });

    $("#change-text").on("click",function(){
        $("p").text("Hello!");
    });

    $("#fade-out").on("click",function(){
        $("#target").fadeOut();
    });

    $("#fade-in").on("click",function(){
        $("#target").fadeIn();
    });
})