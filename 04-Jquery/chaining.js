$(document).ready(function(){
    $("input").blur(function(){
        $(this).css('border', '1px solid red');
    });
    $("input").keyup(function(){
        var boxValue = $(this).val();
        /*$("span").html(boxValue);*/
        $(this).next("h2").html(boxValue);
    })
});