window.addEventListener("load", init);

var name;
var pwd;
var cpwd;

function init(){
    name = document.getElementById("box_1");
    pwd = document.getElementById("box_2");
    cpwd = document.getElementById("box_3");
    
    cpwd.addEventListener("keyup", conf_pwd);
}

function conf_pwd(){
    var span = document.getElementById("cpwd");
    if(cpwd.value == ""){
        span.innerHTML = "";
    }
    else if(pwd.value == cpwd.value){
        span.innerHTML = "Password Match";
    }
    else {
        span.innerHTML = "Password do not Match";
    }
}