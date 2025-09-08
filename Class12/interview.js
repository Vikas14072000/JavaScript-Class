


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("hey"); //hey
// {
//   let a = 1;
//   let b = 2;
//   console.log(a); //1
//   console.log(b); //2
// }
// console.log(a); //reference error (block mein let and const ka use karke varrible banta hai to block ke bahar access nahi kar skate hai)
// console.log(b); //not excuted
// Ans=>
    

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("hey"); //hey
// {
//   var a = 1;
//   var b = 2;
//   console.log(a);//1
//   console.log(b);//2
// }
//agar koi varible var se banate hai to use block ke bahar access kar sakte hai bcs var ka scope local/function hota hai
// console.log(a);//1
// console.log(b);//2
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(a);
//undefined(hoisting ka use ho rha hai agar koi cheej var se banate hai and use banane ke pahle access karte hai tovha par undefined aata hai ==)
//  var a=()=>{
//      console.log("hello");
//      }
// Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(a);//function kee puri body store hoti hai function ke name me kuoki yha par function hoisting ho rhi hai
// a();// js me function ko pahle call kar sakte hai due to function hoisting koi error nhi aaega agar vo normal function hai to
// function hoisting - 

// function a(){
//     console.log("hello");
// }
// Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// var x=20;
// function printValue(){
//     console.log(x);   
//      /* reference error(x is not define)(due to TDZ)
//         let or const se banaye gaye variable agar pahle use karte hai or banate baad me hai to vo TDZ me store
//         hote hai or vha se access nhi kar sakte inko */
//     let x=10;
// }
// printValue();
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let x1=9;
// {
// x1=80
// }
// console.log(x1)//80



//  var x=20;
// function printValue1(){
//     console.log(x);//20
//      x=10;
//      console.log(x);//10

// }
// console.log(x);//20
// printValue1();
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//      var x=20;
// function printValue1(){
//     console.log(x);//undefined
//      var x=10;
//      console.log(x);//10

// }
// console.log(x);//20
// printValue1();



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("start ");
// setTimeout(()=>{
//     console.log("setTime");
// },0);
// console.log("end");
// Ans=>start, end, setTime


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(y);//referece error
// console.log(typeof(y));
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function abc() {
//   a = 10;
//   b = 20;
//   console.log(a);//10
//   console.log(b);//20
// }
// abc();
// console.log(a);//10
// console.log(b);//20
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let u1=[1,2,3]
// let u2=[1,2,3]
// console.log(u1===u2);//false


// console.log({ name: "a" } == { name: "a" });//false(object ke case me address  compare hote hai  or do object ka address hamesa alag hota hai) 
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// console.log(name);
// var name = "John";
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// let a = 10; 
// console.log(typeof typeof typeof a);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let a=10;
// console.log(++a)
// console.log(a)
// let a1=10;
// console.log(a1++)
// console.log(a1)
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(1<2<3)
// console.log(3>2>0)
// console.log(3>2>1)
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const z=null;
// console.log(typeof z)
// const a=undefined;
// console.log(typeof a)
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function printVal(){
//   var x=10;
//   console.log(x);//10
// }
// printVal();
// console.log(x);
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function demo(){
//   console.log("hey");//hey print
// }
// const ans=demo();
// console.log(ans);
// function demo1(){
//   return "hey";
// }
// const ans1=demo1();
// console.log(ans1);
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(a);
// console.log(b);
// var a=b=5;
// Ans=>
// Output_Based_Js_Quizz_1.txt
// External
// Displaying Output_Based_Js_Quizz_1.txt.




// ######################## MOST IMP QUESTION ####################################################
// Q.
// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 = user1;
// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1); 
// console.log("user2", user2);
// Ans=>


// ##############################################################################################
// Q.
//  const user11 = {
//    userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };




//  const user12 = { ...user11};
//  user12.userName = "Raghav";
//  user12.address.city = "Jab"; 
//  console.log("user11", user11); 
//  console.log("user12", user12); 


// 2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user12 has newly assign city which in user11", user12); 
// 3rd category


// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 
// Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" });
// Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2));
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);
// Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });


// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);
// Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function values(a,...args,c){//error
//   console.log(a,args,c);
// }


// function values(a, c, ...args) {
//   console.log(a, c, args);//ans-: 1 10 [ 2, 4, 5, 6, 8 ]
// }
// values(1, 10, 2, 4, 5, 6, 8);
// Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
console.log(name);
var name = "John";
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function PrintValue() {
//   return "Hello world";
// }
// let ans = PrintValue();
// console.log(ans);
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();
//  async function PrintValue() {
//   return "Hello world";
// }
// let ans =  PrintValue();
// console.log(ans);
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();
// //Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let result = PrintValue();
// console.log(result);
// //Ans=>
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.-------
// console.log([1,2]==[1,2])
// console.log([1,2]===[1,2])
// //Ans=> 






// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!536+
// 9+++++----!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.26
// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 10;
//   return inner;
// }
// const result = outer();
// result();
// //Ans=>




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)
//    },1000);
//  }
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){
//   function ab(i){
//       setTimeout(()=>{
//       console.log(i)
//   },1000);}
//   ab(i);
// }
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// const foo=()=>{
//   console.log(this.name);
//  }
//  //Ans




//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  function foo1(){
//   console.log(this.name);
// }
// foo1.call({name:"mohan"})
//  //Ans




//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// function foo1() {
//   console.log(this.name); 
  
//   const bar = () => {
//     console.log(this.name); 
//   };
//   bar();
// }
// foo1.call({ name: "Mahi" });
//  //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Freeze the object 
// const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };
//  //Ans






// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. 
// fool();
// var fool=20;
// function fool(){
//     console.log("Calling ")
// }
// fool();
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.


// async function foo23() {
//   throw new Error("Hello");
//   return "hello";
// }
// const result12 = foo23();
// console.log("Reject the Promise ",result12);




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function greet() {
//   return new Promise(() => {});
// }
// const ans = greet();
// console.log("Pending the promise",ans);
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Flatten an given below an array 
// // let arr= [1,[2,3],[[4,5]],[[[6]]]];
// //Ans




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// // console.log(typeof(NaN));// this is number
// // console.log(Nan===NaN);// it can anything  so return false




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// // Destructure the property from the object
// const user = { userNamename: "ramesha", age: 24 };
