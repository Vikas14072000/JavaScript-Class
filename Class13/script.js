// for accessing single element
const sH1=document.getElementById("heading-one");
// console.log("h1 element is ",sH1)


//for getting the attribute we use getAttribute()
// console.log("h1 element is ",sH1.getAttribute())


//if you wanna set the attribute we use setAttribute() method
// sH1.setAttribute("id","one-one")


// //for accessing the part of element that means attibutes or content
// //for content

// //ui me jaisa show hoga vaisa hee innerText me dikhega
// console.log(sH1.innerText)
// // jaisa content aapne tag ke andar likha hai including space bhi show karega
// console.log(sH1.textContent)




//agar html code ke andar mujhe kisi particular name ke sabhi tag/element ko nikalna hai to me
// getElementsByTagName() ka use karte hai

// let allH1 = document.getElementsByTagName("h1");
// console.log("all h1 element is ", allH1)
// for(let i=0;i<allH1.length;i++){
//     console.log("=>",allH1[i])
// }


//agar aapko kisi specific class ke andar sabhi child kko chaheaye tab aap getElementsByClassName()
//  use karte hai or ye html collection return karti hai getElementsByTagName() method ke jaise


// let allElementOfClass = document.getElementsByClassName("xyz");
// console.log("all child of class xyz is ", allElementOfClass)

//this code print all the parent which has same class 
// for (let i = 0; i < allElementOfClass.length; i++) {
//     console.log("=>", allElementOfClass[i])
// }
//this code print all the childer of particular class single parent 
// for (let i = 0; i < allElementOfClass.length; i++) {
//     for (let j = 0; j < allElementOfClass[i].children.length;j++) {
//         console.log("=>", allElementOfClass[i].children[j])
//     }
// }



//agar aapko first matching element chaheaye to aap query ka selector use karte hai
// const fMatching=document.querySelector("h1");
// console.log("first matching heading is ",fMatching)


// //sabhi matching element chaheaye so use querySelectorAll()
// let allMatching=document.querySelectorAll("h1");
// console.log("all matching heading is ",allMatching)

// //get the attribute of single element 
// console.log("our Attribute value is",allMatching[0].getAttribute("id"))
// // allMatching=allMatching[1].setAttribute("class","yyyy")

// console.log(allMatching)

// for (let i = 0; i < allMatching.length; i++) {
//     console.log("=>", allMatching[i])
// }

// const h1Ele=document.getElementsByTagName("h1");
// console.log("h1 element is ",h1Ele)



//access all the elements of the class
// const allofclassEle=document.getElementsByClassName("div2");
// console.log("h1 element is ",allofclassEle)


//access things using quesrSelector
// const fMatch=document.querySelector("div");
// console.log("first matching element is ",fMatch)


//access things using quesrSelectorAll

// const allMatch=document.querySelectorAll("div");
// console.log("all matching element is ",allMatch)


// const classTag=document.getElementsByClassName("mno");
// console.log("class child is",classTag)
let h3Ele=document.getElementById("h3-heading");
console.log(h3Ele)

//for adding the css via js using below command
// h3Ele.style.backgroundColor="red"