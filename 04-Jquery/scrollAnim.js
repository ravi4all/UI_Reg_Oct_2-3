$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPos = window.scrollY;
        console.log(scrollPos);
        
        if(scrollPos >= 300){
            $("#header").addClass("active");
        }
        else {
            $("#header").removeClass("active");
        }
        
    })
})