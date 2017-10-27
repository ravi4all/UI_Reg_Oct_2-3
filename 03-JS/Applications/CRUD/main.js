window.addEventListener("load", init);

var productName;
var productPrice;
var productDetails;

function init(){
    productName = document.getElementById("box_1");
    productPrice = document.getElementById("box_2");
    productDetails = document.getElementById("box_3");
    
    document.getElementById("add").addEventListener("click", addProduct);   
}

function addProduct(){
    var ul = document.getElementById("productList");
    
    var li = document.createElement("li");
    
    li.innerHTML = productName.value + " " + productPrice.value + " " + productDetails.value;
    
    ul.appendChild(li);
    
    li.addEventListener("click", markProduct);
    
    productName.value = "";
    productPrice.value = "";
    productDetails.value = "";
    
}

function markProduct() {
    event.srcElement.classList.toggle("selected");
}