var str;
function blankCheck(){
    str = document.getElementById("box_1").value;
    var err = document.getElementById("err");
    /*if(str == ""){
        err.innerHTML = "Fill this field...";
    }*/
    
    /*if(str.length == 0){
        err.innerHTML = "Fill this field...";
    }*/
    
    /*if(isEmpty){
        err.innerHTML = "Fill this field...";
    }*/
    
    if(isBlank(str)){
        err.innerHTML = "Fill this field...";
    }
    else {
        err.innerHTML = "Hello "+str;
    }
}

function isBlank(str){
    return (/^\s*$/.test(str))
}

function isEmpty(){
    return (str == undefined || str == null || str.length == 0) ? true : false
}