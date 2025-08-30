// make all th primitive data types
let obj={
    S_name :"vikas",
    id : 2000,
    age: 25,
    email:"vikas@gmail.com",
    stutes: "yes"

}
// console.log("name of student",obj.S_name)

// try to use some function and object inside object

let obj1={
    sname:"somesh",
    age:23,
    email:"some@gmail.com",
    istraining :function(){
           console.log(" i am taking training in grow tech & i'm learn javaScript")
    
    },
    // object inside object creation
    additionalInfo:{
        contactnum:1234567890,
        alternum:98325373,


    }

}

// console.log("contact number",obj1.additionalInfo.contactnum)

// advanced type of object creation
let obj2={
    sname:"somesh",
    age:23,
    email:"some@gmail.com",
    istraining :function(){
           console.log(" i am taking training in grow tech & i'm learn javaScript")
    
    },
    // object inside object creation
    additionalInfo:{
        contactnum:1234567890,
        alternum:98325373,
        myfun:function(){
            console.log("today we are learning javaScript")
           }, 
        mydetail:"full stack developer",
        myinfo:{
            who_are_you:"man",
            what_you_do:"i'm trainee",

    }
        


    }

}
// console.log(obj2.additionalInfo.contactnum) 
// console.log(obj2.additionalInfo.mydetail) 
// console.log(obj2.additionalInfo.myinfo["who_are_you"]) 
// console.log(obj2.additionalInfo.myinfo["what_you_do"])
// obj2.additionalInfo.myfun()

let object = {
     
        fname:"somesh",
        lname:"Gadariya",
        agee:23,
        email:"somy@gamil.com",
        
    
   
    

}

console.log(object.fname)
console.log(object.lname)
 
 