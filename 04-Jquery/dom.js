$(document).ready(function(){
    $("button").click(function(){
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        $("#showname").html(fname.toUpperCase() + " " + lname.toUpperCase());
    });
});