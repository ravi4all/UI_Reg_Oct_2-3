/*
1. Get button by ID
2. Do event binding - bind click event with a function i.e., callback function
*/

/*alert("I will be executed before html...")*/

/*window.addEventListener("load", function(){
    
    document.getElementById("btn_1").addEventListener("click", function(){
        
        var userName = document.getElementById("box_1");
        document.getElementById("result").innerHTML = userName.value;
    
    })
})*/


window.addEventListener("load", init);

function init(){
    console.log("Window loaded...")
    document.getElementById("btn_1").addEventListener("click", helloUser);
}

function helloUser(){
    console.log("Clicked on button...")
    var userName = document.getElementById("box_1");
    document.getElementById("result").innerHTML = userName.value;
}