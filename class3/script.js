// function checkNumber(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i,"is Even Number")
//         }
//         else{
//             console.log(i,"is Odd Number")
//         }
//     }
// }

// checkNumber(10)



// function table(n){
//     console.log("tabel of " ,n)
//     for(let i=1;i<=10;i++){
//         console.log(n*i)
//     }
// }
// table(2)
// table(15)


// function  printTable(num){
//     // console.log("table of ",i)
//      for (let i=1;i<=10;i++){
//         console.log(num*i)
//      }
// }

// function table_one_to_n(n){

//     for(let i=1;i<=n;i++){
//         printTable(i)
//     }

// }

// table_one_to_n(10)


//wap to  prime number 

//  function isPrime(n) {
//     let v = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             v = 1;
//             break;
//         }

//     }
//     if (v == 0) {
//         console.log("This is primr no.");

//     }
//     else {
//         console.log("This is not prime no.");
//     }
//  }
// isPrime(99)
// isPrime(256)

// function checkNumber(num){
//     for(let j=1, j<=num;j++){
//         isPrime(j)
//     }
// }
// checkNumber(10)

// minimum b/w two no


// function check_minimum(num1,num2){
//     if(num1<num2){
//         console.log("num1 is minimum")
//     }
//     else if (num1 === num2){
//         console.log("num1 and num2 equal")
//     }
//     else{
//         console.log("num1 is max")
//     }
// }
// check_minimum(300,200)


// check number mini and max b/w three number

// function checkNumber(n1,n2,n3){
//     if(n1<n2 && n1<n3){
//         console.log(n1, "is minimum")
//     }
//     else if(n2<n1 && n2<n3){
//         console.log(n2,"is minimum")
//     }
//     else{
//         console.log(n3,"is minimum")
//     }

// }
// checkNumber(200,3400,500)

// check number max b/w three number

// function checkNumber1(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         console.log(n1, "is maximum")
//     }
//     else if(n2>n1 && n2>n3){
//         console.log(n2,"is maximum")
//     }
//     else{
//         console.log(n3,"is maximum")
//     }

// }
// checkNumber1(200,3400,500)

// factorial of any number
 
// function fact_num(n){
//     let fact=1
//     for(i=1;i<=n;i++){
        
//         fact=fact*i

//     }
//     console.log(fact)
// }
// fact_num(5)
// fact_num(6)



// swap a two number with any variable

// let a=10
// let b=20

// a=a+b
// b=a-b
// a=a-b
// console.log(a,b)


// fibonacci series

// let a=0;
// let b=1;
// function fibonacci(term){
    
//     console.log("fibonacci series")
//     for(i=1;i<=term;i++)
//         {
//         console.log(a)
//         let next_term=a+b
//         a=b
//         b=next_term
//        }

// }
 
// fibonacci(12)

// square of any number
// function square_of_n(n){
//     console.log(n*n)
// }

// square_of_n(12)
// square_of_n(23)

//  square root of any number

// function square_root(n){
//     let root=((n)**.5)
//     console.log(root)
// }
// square_root(16)


// postive and negative


// function checkNum(num){
//     if(num>0){
//         console.log(num,"is positive")
//     }
//     else{
//         console.log(num,"is negative")
//     }
// }
// checkNum(100)
// checkNum(-100009)
                         
// function hcf(num1,num2){
//     for(i=1;i<=num1;i++){
//         if(num1%i==0 && num2%i==0){
//             console.log(i,"is hcf of ", num1,num2)
//         }
//     }
// }
// hcf(100,300)


//  function isPrime(n) {
//     let v = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             v = 1;
//             break;
//         }

//     }
//     if (v == 0) {
//         console.log(i,"This is primr no.");

//     }
//     else {
//         console.log(i,"This is not prime no.");
//     }
//  }

//  fuction check(a,b){

//  }

// perfect Number program

function isPerfectNumber(n) {

    // Guard Clause for non-positive
    // or non-integer input
    if (!Number.isInteger(n) || n <= 0) {
        console.log("Please provide a valid positive integer.");
        return false;
    }
    
    // Start with 1 as all numbers have 1 as a divisor
    let sum = 1;

    // Loop to find proper divisors
    // and calculate the sum
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }

    // Check if the sum of proper divisors
    // equals the original number
    const isPerfect = sum === n;

    // Output the result
    if (isPerfect) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }

    return isPerfect;
}

// Example 1
isPerfectNumber(28);

// Example 2
isPerfectNumber(13);


// armstrong number program.

function armstrong(n) {
    // converting to string
    let number = n.toString();

    let length = number.length;
    let output = 0;

    for (let i of number) {
        output += Math.pow(parseInt(i), length);
    }

    // check if equal to number
    if (output === parseInt(number))
        return true;
    else
        return false;
}

// Driver Code
// let n = 153;
// if (armstrong(n)) {
//     console.log("true");
// } else {
//     console.log("false");
// }

let a=armstrong(153)
console.log(a)


// let arm = 153; 
let temp = arm; 
let length = arm.toString().length; 
let result = 0; 
while (temp > 0) { 
let d = temp % 10; 
result += Math.pow(d, length); 
temp = Math.floor(temp / 10); 
} 
console.log(result === arm ? "Armstrong" : "Not Armstrong");