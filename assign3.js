let purchase = 1001
if(purchase <= 1000 ){
    let receipt =   (purchase*0.1) + purchase
    console.log(`no discount price is ${receipt}`)
}else if(purchase>1000){
    let receipt = purchase*0.5 + purchase
    console.log(`price after discount is ${receipt}` )
}