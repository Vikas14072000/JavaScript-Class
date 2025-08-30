// freeze method in javascript

// const obj={
//     fname:"vikas",
//     lastname:"gadariya",
//     age:25,
//     data:{
//         email:"vikas@gamil.com",
//         contact:938732,
//     }
    

// }
// obj.city="khandwa"
// console.log("object in ",obj)

// Object.freeze(obj);
// obj.city="jabalpur" // it will not add any type of data and key
// delete obj.fname;// it will not delete 
// obj.age=2939;// it will not modify value in object
// console.log("after adding the property in object ",obj)


// seal method in javascript
// const obj={
//     fname:"vikas",
//     lastname:"gadariya",
//     age:25,
//     data:{
//         email:"vikas@gamil.com",
//         contact:938732,
//     }
    

// }
// obj.city="khandwa"
// console.log("object in ",obj)

// Object.seal(obj);
// obj.city="jabalpur" // it will not add any type of data and key
// delete obj.fname;// it will not delete 
// obj.age=2939;// it will not modify value in object
// console.log("after adding the property in object ",obj)




// Array Destruturing


// let arr =[[2,4,6],8,10,123]
// console.log("orignal arry",arr)
// const[firstvalue,secondvalue,_3rdvalue]=arr
// console.log(firstvalue,secondvalue,_3rdvalue);
 



// //object destructing
// let person={
//     fname:"vikas",
//      lastname:"gadariya",
//      age:25,
//      data:{
//         email:"vikas@gamil.com",
//         contact:938732,
//     }
// }

// const{ fname,lastname,age,data}=person;
// const{email}=data
// console.log("fname",fname,"lastname",lastname,"age",age,"email",email)


// for of loop is used for array and strings
// it gives more control like can use break continue

let arr1=[10,20,30,40,50,60,100]
for(value of arr1){
    console.log("-->",value)
}

//break key word used in for of loop
let arr2=[10,20,30,40,50,60,100]
for(value of arr2){
    if(value==50){
        break;
    }
    console.log("-->",value)
}

// continue key word used in for of loop
 let arr3=[10,20,30,40,50,60,100]
    for(value of arr3){
       if(value==50){
        continue;
    }
    console.log("-->",value)
}

// for in loop is used for object

let deatils={
    fname:"somesh",
    lastname:"gadariya",
    age:23,
}

for(value in deatils){
    console.log(value)// its give only key name of the objects
}

for(value in deatils){
    console.log(value,"-->",deatils[value])
}