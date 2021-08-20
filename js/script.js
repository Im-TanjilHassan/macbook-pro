// ***** Functions of Memory Card *****
function memoryCardPricec(SmallMemory){

    // extra memory cost feild
    const memoryCostFeild = document.getElementById("memory-cost");

    // calculate and showing the value in memory cost feild
    if(SmallMemory == true){
        const price = 0;
        memoryCostFeild.innerText = price
    }
    else{
        const price = 180;
        memoryCostFeild.innerText = price;

    }

}


// ***** Add Event For Memory Card *****

// 8GB
document.getElementById("8GB-memory").addEventListener("click", function(){
    memoryCardPricec(true)
})

// 16Gb
document.getElementById("16GB-memory").addEventListener("click", function(){
    memoryCardPricec(false)
});



// ***** Function of Storage *****

function storagePrice(ssd){

    // catch storage cost feild
    const storageCostFeild = document.getElementById("storage-cost");

    // calculate and showing the value in storage cost feild
    if(ssd == 256){
        const price = 0;
        storageCostFeild.innerText = price;
    }
    else if(ssd == 512){
        const price = 100;
        storageCostFeild.innerText = price;
    }
    else{
        const price = 180;
        storageCostFeild.innerText = price;
    }
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
})