// Coding Challenge #1
console.log(`Code Challenge #1`)
// your tasks 1
mark = [78, 1.69]
john = [92, 1.95]

function bmi(mass, height) {
    return mass / height ** 2
}

var bmiMark = bmi(mark[0], mark[1])
var bmiJohn = bmi(john[0], john[1])

console.log(bmiMark.toFixed(2))
console.log(bmiJohn)

// your task 3
var markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

// Code Challenge #2
console.log(`Code Challenge #2`)

// your task 1
function HigherBMI(bmi1, bmi2) {
    if (bmi1 > bmi2)
        return true
    else return false
}

if (HigherBMI(bmiMark, bmiJohn)) {
    console.log('Mark\'s BMI is heigher than John\'s')
} else console.log('John\'s BMI is heigher than Mark\'s')

// your task 2
if (HigherBMI(bmiMark, bmiJohn)) {
    console.log(`Mark\'s BMI (${bmiMark.toFixed(1)}) is heigher than John\'s (${bmiJohn.toFixed(1)})`)
} else console.log(`John\'s BMI (${bmiJohn.toFixed(1)}) is heigher than Mark\'s (${bmiMark.toFixed(1)}) `)

//Coding challenge #3

console.log(`Code Challenge #3`)

//your task 1
var dolphins = [96, 108, 89]
var koalas = [88, 91, 110]

function totalArr(arr){
    return arr.reduce((acc,num) => { return acc + num},0)
}

var totalDolphins = totalArr(dolphins)
var avgDolphins = totalDolphins/dolphins.length
console.log(`avg of Dophins: `+avgDolphins)

var totalKoalas = totalArr(koalas)
var avgKoalas = totalKoalas/koalas.length
console.log(`avg of Koalas: `+ avgKoalas)

// your task 2
if(avgDolphins>avgKoalas){
    console.log(`Dolphins win`)
} else if(avgDolphins==avgKoalas){
    console.log(`draw`)
} else console.log(`Kolas win`)

//your task 3
if (totalArr(dolphins)>totalArr(koalas) && totalArr>(dolphins)>=100){
    console.log(`Dolphins win`)
} else if(totalArr(dolphins)<totalArr(koalas) && totalArr(koalas)>=100){
    console.log(`Koalas win`)
} else if(totalArr(dolphins)==totalArr(koalas) && totalArr(dolphins)>=100 && totalArr(koalas)>=100){
    console.log(`draw`)
} else console.log(`Không có đội nào win`)

// Coding Challenge #4
console.log(`Coding Challenge #4`)
// your task 1
billValue = 275
function calulateTip(billValue){
    return tip = billValue >= 50 && billValue <=300 ? 0.15* billValue : 0.2 * billValue;
}
console.log(`Tiền tip của hóa đơn là: ${calulateTip(billValue)}`)
// your task 2
function calulateTotalBillAfterTip(billValue){
    return billValue + calulateTip(billValue) 
}
console.log(`The bill was ${billValue}, the tip was ${calulateTip(billValue)}, and the total value ${calulateTotalBillAfterTip

(billValue)}`)

// Coding Challenge #5
console.log(`Coding Challenge #5`)
// your task 1
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3)/3
}
avgDolphins = calcAverage(44,23,71)
avgKoalas = calcAverage(65,54,49)

// your task 3
 function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>=2 * avgKoalas){
       return `Dolphins (${avgDolphins} vs. ${avgKoalas})`
    } else if(avgKoalas>= 2*avgDolphins){
        return `Koalas (${avgKoalas} vs. ${avgKoalas})`
    } else return `Không có đội nào thắng`
 }
// your task 4
//data1
winner = checkWinner(avgDolphins,avgKoalas)
console.log(`Data1:`,winner)
//data2
avgDolphins2 = calcAverage(85,54,41)
avgKoalas2 = calcAverage(23,34,27)
console.log(`Data2: `, checkWinner(avgDolphins2,avgKoalas2))

// Coding Challenge #6
// your task 1
console.log(`Coding Challenge #6`)
function calcTip(bill){
    if(bill >=50 && bill <= 300)
        return bill * 0.15
    else return bill * 0.2
}
// your task 2
bills = [124,555,44]
//your task 3
tips = bills.map(calcTip)
const totals = []
for(let i = 0; i <bills.length;i++){
    bill = bills[i];
    tip = tips[i]
    total = bill + tip
    totals.push(total)
}
//your task 4
for(let i=0;i<bills.length;i++){
    console.log(`bill: ${bills[i]} tip: ${tips[i]} total: ${totals[i]}`)
}

// Coding Challenge #7
console.log(`Coding Challenge #7`)
// your task 1
var mark = {
    fullName:'Mask Jr',
    mass: 78,
    height: 1.69
}
var john = {
    fullName:'John Smith',
    mass: 92,
    height: 1.95
}
// your task 2
function calcBMI(mass, height){
    bmi = mass/(height**2)
    return bmi
}
// your task 3
mark.bmi = calcBMI(mark.mass,mark.height)
john.bmi = calcBMI(john.mass,john.height)

if(mark.bmi>john.bmi){
    console.log(`Mask's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
} else if(bmi.john>mark.bmi){
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
} else {
    console.log(`Mask's BMI and John's BMI (${john.bmi})!`)
}

// Coding Challenge #8
console.log(`Coding Challenge #8`)
// your task 1
var bills = [22,295,176,440,37,105,10,1100,86,52]

var tips =[]
var totals2 =[]
for(let i =0;i<bills.length;i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);
    let total = bills[i] + tip;
    totals2.push(total);
}

function calcAverage(arr){
    let sum = 0
    for(let i = 0; i< arr.length;i++){
        sum+= arr[i];
    }
    return sum/arr.length;
}
average = calcAverage(totals2)

console.log(`Bills arr:`, bills)
console.log(`Tips arr:`, tips)
console.log(`Totals arr:`, totals2)
console.log(`Average:`, average)

// Coding Challenge #9
console.log(`Coding Challenge #9`)
data1 = [17, 21, 23]
data2 = [12, 5, -5, 0, 4]

function printForecast(arr){
    for(let i= 0;i<arr.length; i++){
        temperature = arr[i];
        day = i+1;
        console.log(`${temperature} in ${day} days`)
    }
}
console.log(`Data 1:`, printForecast(data1))
console.log(`Data 2:`, printForecast(data2))
