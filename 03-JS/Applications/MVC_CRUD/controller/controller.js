window.addEventListener("load", init);

var productName;
var productPrice;
var productDetails;

function init(){
    productName = document.getElementById("box_1");
    productPrice = document.getElementById("box_2");
    productDetails = document.getElementById("box_3");
    
    document.getElementById("add").addEventListener("click", addProduct);  
    document.getElementById("delete").addEventListener("click", deleteProduct);
    document.getElementById("save").addEventListener("click", saveList);
    document.getElementById("load").addEventListener("click", loadList);
}

function saveList(){
    if(window.localStorage){
        var json = JSON.stringify(obj.productList);
        /*console.log(json);*/
        localStorage.setItem('productData',json);
    }
    else {
        alert("Localstorage not supported...")
    }
}

function loadList(){
    if(window.localStorage){
        var data = localStorage.getItem('productData');
        var json = JSON.parse(data);
        /*console.log(json);*/
        obj.productList = json;
        printProduct();
    }
    else {
        alert("Localstorage not supported...")
    }
}

function addProduct(){
    var ul = document.getElementById("productList");
    
    var li = document.createElement("li");
    
    obj.addProduct(productName.value, productPrice.value, productDetails.value);
    
    li.innerHTML = obj.id + " " + productName.value + " " + productPrice.value + " " + productDetails.value;
    
    ul.appendChild(li);
    
    li.addEventListener("click", markProduct);
    
    productName.value = "";
    productPrice.value = "";
    productDetails.value = "";
    
}

function markProduct() {
    event.srcElement.classList.toggle("selected");
    var currentId = event.srcElement.innerHTML.split(" ")[0];
    obj.toggleProduct(currentId);
}

function deleteProduct(){
    obj.deleteProduct();
    printProduct();
}

function printProduct(){
    var ul = document.getElementById("productList");
    ul.innerHTML = "";
    obj.productList.forEach(function(obj){
        var li = document.createElement("li");

        li.innerHTML = obj.id + " " + obj.name + " " + obj.price + " " + obj.details;

        ul.appendChild(li);

        li.addEventListener("click", markProduct);
    })
}