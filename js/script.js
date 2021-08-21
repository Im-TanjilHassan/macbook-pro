// ***** Total price *****
// ***** Function For total price *****
function totalPrice(productPrice,){
    // debugger;
    // catch total price text feild
    const totalFeild = document.getElementById("total-price");
    const totalAmount = 1299;

    // overall total price calculate
    totalFeild.innerText = totalAmount + productPrice;
}

// _______________________________________________________________________



// ***** Functions of Memory Card *****
function memoryCardPricec(SmallMemory){
    debugger;

    // extra memory cost feild
    const memoryCostFeild = document.getElementById("memory-cost");
    let memoryPrice = 0;
    

    // calculate and showing the value in memory cost feild
    if(SmallMemory == true){
        const price = 0;
        memoryPrice = price
        memoryCostFeild.innerText = price;     
 
    }
    else{
        const price = 180;
        memoryPrice = price
        memoryCostFeild.innerText = price;
 
    }

    totalPrice(memoryPrice)
};


// ***** Add Event For Memory Card *****

// 8GB
document.getElementById("8GB-memory").addEventListener("click", function(){
    memoryCardPricec(true);

})

// 16Gb
document.getElementById("16GB-memory").addEventListener("click", function(){
    memoryCardPricec(false)

});



// ***** Function of Storage *****

function storagePrice(ssd){

    // catch storage cost feild
    const storageCostFeild = document.getElementById("storage-cost");
    let ssdPrice = 0;

    // calculate and showing the value in storage cost feild
    if(ssd == 256){
        const price = 0;
        ssdPrice = price
        storageCostFeild.innerText = price;
    }
    else if(ssd == 512){
        const price = 100;
        ssdPrice = price
        storageCostFeild.innerText = price;
    }
    else{
        const price = 180;
        ssdPrice = price
        storageCostFeild.innerText = price;
    }

    totalPrice(ssdPrice);
}


// ***** Add Event For Storage *****

// 256GB SSD storage
document.getElementById("256GB-SSD").addEventListener("click", function(){
    storagePrice(256);
})

// 512GB SSD storage
document.getElementById("512GB-SSD").addEventListener("click", function(){
    storagePrice(512);
})

// 1TB SSD storage
document.getElementById("1TB-SSD").addEventListener("click", function(){
    storagePrice(1);
});



// ***** Functions for Delivery cost *****
function deliveryCost(cost){

    // catch delivery charge feild
    const deliveryCharge = document.getElementById("delivery-charge");

    if(cost == 0){
        const Charge = 0;
        deliveryCharge.innerText = Charge;

    }
    else{
        const charge = 20;
        deliveryCharge.innerText = charge;
    }
}


// ***** Add Event For Delivery cost *****

// Fri, Aug Free Delivery
document.getElementById("free-delivery").addEventListener("click", function(){
    deliveryCost(0);
})

// Fri, Aug 21 Costed Delivery
document.getElementById("costed-delivery").addEventListener("click", function(){
    deliveryCost(20);
});