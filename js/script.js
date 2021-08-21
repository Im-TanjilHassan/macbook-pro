// per product cost
function productPricec(item,product){
    // debugger;

    // All extra product cost feild
    const productCostFeild = document.getElementById(item);

    // calculate and showing the value in per product cost feild
    if(product == 0){

       	const price = 0;
       	productCostFeild.innerText = price;     
 
    }
    else if(product == 180){

        const price = 180;
        productCostFeild.innerText = price;
    }

    else if(product == 100){

        const price = 100;
        productCostFeild.innerText = price;
    }

	else if(product == 20){

	    const charge = 20;
        productCostFeild.innerText = charge;

	}

    totalPrice()

};


// ***** Total price *****
// ***** Function For total price *****
function totalPrice(){
    // debugger;

    // memory price
    const memory = document.getElementById("memory-cost");
    const memoryPrice = parseInt(memory.innerText);

    // storage price
    const storage = document.getElementById("storage-cost");
    const storagePrice = parseInt(storage.innerText)

    // delivery cost
    const delivery = document.getElementById("delivery-charge");
    const deliveryprice = parseInt(delivery.innerText)

    // catch total price text feild
    const totalFeild = document.getElementById("total-price");
    const calculate = 1299 + memoryPrice + storagePrice + deliveryprice; 
    totalFeild.innerText = calculate;

    const totalWithDiscount = document.getElementById("total-with-discount");
    totalWithDiscount.innerText = calculate;
}


// ***** Add Event For Memory Card *****

// 8GB
document.getElementById("8GB-memory").addEventListener("click", function(){
    // productPricec("memory-cost", "memory", true);
    productPricec("memory-cost", 0)
})

// 16Gb
document.getElementById("16GB-memory").addEventListener("click", function(){
    // productPricec("memory-cost", "memory", false)
    productPricec("memory-cost", 180)

});



// ***** Add Event For Storage *****

// 256GB SSD storage
document.getElementById("256GB-SSD").addEventListener("click", function(){
    // productPricec("storage-cost", "ssd", 256);
    productPricec("storage-cost", 0);
})

// 512GB SSD storage
document.getElementById("512GB-SSD").addEventListener("click", function(){
    // productPricec("storage-cost", "ssd", 512);
    productPricec("storage-cost", 100);
})

// 1TB SSD storage
document.getElementById("1TB-SSD").addEventListener("click", function(){
    // productPricec("storage-cost", "ssd", 1);
    productPricec("storage-cost", 180);
});



// ***** Add Event For Delivery cost *****

// Fri, Aug Free Delivery
document.getElementById("free-delivery").addEventListener("click", function(){
    // productPricec("delivery-charge", "delivery", true);
    productPricec("delivery-charge", 0);
})

// Fri, Aug 21 Costed Delivery
document.getElementById("costed-delivery").addEventListener("click", function(){
    // productPricec("delivery-charge", "delivery", false);
    productPricec("delivery-charge", 20);
});


// promo code

// promo code input value
function promoCode(){
    const inputFeild = document.getElementById("promo-input");
    const inputValue = inputFeild.value
    // console.log("nothig")
    if(inputValue == "stevekaku"){
        // console.log("yes")
        const totalAmount = document.getElementById("total-with-discount");
        const amount =  parseInt(totalAmount.innerText);
        const discount = amount - (amount * 0.2);
        totalAmount.innerText = discount;
    }
    inputFeild.value = ""
}


// applu button event
document.getElementById("apply-btn").addEventListener("click", function(){
    promoCode()
})