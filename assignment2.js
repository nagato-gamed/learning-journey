'use strict';
function flyingcalc(speed,distance){
    return speed/distance
}
function costcalc(costperhour,usageperhour){
    annualcostincents=costperhour*usageperhour
    annualcost=annualcostincents/100
    return annualcost 
}
/*function treescalc(width,lenght){
    area = width*lenght
    numberofpossibletrees= Math.floor(area/50)
return numberofpossibletrees
}
console.log(`number of trees that could be planted ${treescalc(40,44)}`)*/

/*function pythagorth(m,n){
    let array=[m,n]
    array.sort((a,b)=> b-a)
    console.log(`a=${array[0]**2-array[1]**2}`)
}
pythagorth(3,5)*/
let dollar = 0
let quarters = 0
let dimes = 0
let nickles =0 
function money(cents){
    for(let i = cents; i>=100 ; i=i-100)
    {
        dollar =dollar+1
        cents = cents-100
    }
    for(let n = cents ; 25<=n && n<100 ;n=n-25){
       quarters = quarters +1
        cents= cents-25
     }
    
    for(let j = cents ; 10<=j && j<25;j=j-10){ 
        dimes = dimes+1
        cents = cents -10
    }
    for(let m= cents; 5<=m && m<10; m=m-5){
        nickles= nickles+1
        cents= cents-1
    }
    console.log(`dollars:${dollar},quarters:${quarters},dimes:${dimes},nickles:${nickles}`)
}
money(265)
console.log(dollar)
console.log(quarters)
console.log(dimes)
console.log(nickles)