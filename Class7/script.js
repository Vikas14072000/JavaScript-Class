// this keyword
// this keyword by default window object ko refer krta hai

console.log(this);  //

// this keyword used inside a function its refer to window.

function getUser(){
    console.log(this);
}
getUser();

//new keyword ka uske krke function banate hai tb empty object of refer krta hai

new getUser(); // empty object


// this keyword ka use object ke andr ek function  krte hai tb object of refer krta hai
let obj1={
    fname:"vikas",
    age:25,
    data:function(){
         console.log(this)
    }
}

obj1.data()


// ek object ke andr ek function hai uske andr ek or function (object ke andr ek nested function)  tb this keyword 
// window ko refer krega

let obj2={
    fname:"vikas",
    age:25,
    data:function(){
        function innear(){
           console.log(this)    //window object
         }

         innear();
    }

}

obj2.data();


//arrow function ke andr ek this key word use krte hai tb window ko refer krta hai-

const arrowFun = () =>{
    console.log(this)  // window object
}

arrowFun();



// Shallow copy-> when You make the changes in copy object change the orginal object

const object1 = {
    userName: "XYX",
    age: 21,
    city: {
        pincode: 483334
    }
}


// console.log("Orignal object can Crud on it", object1)

// const object2 = object1;//1st way of shallow copy 
// const object2 = Object.assign(object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)







// Deep Copy->// both objects are treat differently
// const object2 =JSON.parse(JSON.stringify(object1))// 1st way
// // const object2 = structuredClone(object1)
// object2.age = 26;
// object2.city.pincode = 452011;
// console.log("No change in original object", object1)
// console.log("changes only in   Duplicate object", object2)



//Edge Cases
//case-:1 =>1st pass the empty object in the Object.assign() method 
// const object2 = Object.assign({},object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)




//case-2: 
const object2 ={...object1};//2nd using spread
object2.age = 26;
object2.city.pincode = 452011;
console.log("I made change by duplicate, orignal change ho gya hai", object1)
console.log("Now  Duplicate object", object2)