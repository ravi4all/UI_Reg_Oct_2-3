var obj = {
    id : 0,
    productList : [],
    
    addProduct : function(name, price, details){
        this.id++;
        var product = new Product(this.id, name, price, details);
        this.productList.push(product);
        console.log(this.productList);
    },
    
    toggleProduct : function(id){
        var toggleList = this.productList.filter(function(obj){
	       return obj.id == id;
        });
        toggleList[0].selected = !toggleList[0].selected;
        console.log(toggleList);
    },
    
    deleteProduct : function(){
        this.productList = this.productList.filter(function(obj){
	       return obj.selected == false;
        });
    }
    
}