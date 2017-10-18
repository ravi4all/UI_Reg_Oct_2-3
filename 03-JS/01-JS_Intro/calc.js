window.addEventListener("load", init);

var f_num;
var s_num;
var result = 0;

function init(){
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    
    /*document.getElementById("btn_1").addEventListener("click", calc);
    document.getElementById("btn_2").addEventListener("click", calc);
    document.getElementById("btn_3").addEventListener("click", calc);
    document.getElementById("btn_4").addEventListener("click", calc);*/
    
    buttons = document.getElementsByTagName("button");
    /*buttons.addEventListener("click", calc);*/
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
}

function add(){
    console.log("Numbers are", f_num.value,s_num.value);
    result  = parseInt(f_num.value) + parseInt(s_num.value);
    document.getElementById("result").innerHTML = result;
}


function calc(){
    console.log(event.srcElement.innerHTML);
}