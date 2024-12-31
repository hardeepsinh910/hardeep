var cartIncrement = document.getElementsByClassName("cartIncrement");
var cartDecrement = document.getElementsByClassName("cartDecrement");
var productQuantity = document.getElementsByClassName("productQuantity");

for (let i = 0; i < cartIncrement.length; i++) {
    cartIncrement[i].addEventListener("click", function() {
        Increment(i); 
    });

    cartDecrement[i].addEventListener("click", function() {
        Decrement(i); 
    });
}

function Increment(index){
    var currentQuantity = parseInt(productQuantity[index].innerHTML) || 0; 
    currentQuantity++; 
    productQuantity[index].innerHTML = currentQuantity; 
}

function Decrement(index){
    var currentQuantity = parseInt(productQuantity[index].innerHTML) || 0; 
    if (currentQuantity > 0) { 
        currentQuantity--; 
        productQuantity[index].innerHTML = currentQuantity; 
    }
}