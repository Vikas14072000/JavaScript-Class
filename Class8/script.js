// square pattern 
/*
####
####
####
####
*/

// for(let i=1;i<=4;i++)
//    {
//     let ans="";
//     for(let j=1;j<=4;j++)
//      {
//         ans += "#"
//      }
//      console.log(ans);
//    }

//tringle pattern
/*
*
**
***
****
***** 
*/

// for(let i=0;i<5;i++){
//     let value=" "
//     for(let j=0; j<=i; j++ ){
//         value +="*"
//     }
//     console.log(value)
// }

// tringle pattern

/*
*****
****
***
**
*

*/

// console.log("ulta tringle")

// for(let i=0;i<5;i++){
//     let value=" "
//     for(let j=1; j<=5-i;j++ ){
//         value +="*"
//     }
//     console.log(value)
// }

// 1 to 5 decriment tringle pattern

/*
12345
1234
123
12
1 */

// for(let i=0;i<  5;i++){
//     let ans=""
//     for(let j=1;j<=5-i;j++){
//         ans +=j
//     }
//     console.log(ans)
// }



// 5 to 1 decriment tringle pattern

/*
54321
5432
543
54
5
*/

// for(let i=1;i<=5;i++){
//     let value= ""
//     for(j=5;j>=i;j--){
//         value +=j
//     }
//     console.log(value)
// }


/*
54321
 4321
  321
   21
    1
    */

// for(let i=0;i<5;i++){
//     let sp=" "
//     let value =""
//     for(let space=0;space<i;space++)
//     {
//         sp +=" "
//     }
//     for(let j=0;j<5-i;j++){
//         value = value + (5-i-j)
//     }
//     console.log(sp + value)
// }

/*

       *
     * * *
   * * * * *
 * * * * * * *
* * * * * * * * *
*/


for(let i=1;i<=5;i++){
    let space = " "
    let ans = " "
    for(let sp=1;sp<=5-i;sp++){
        space +=" "
    }
    for(let j=1;j<= (2*i-1) ;j++){
        ans +="*"

    }
    console.log(space + ans)

}

/*

      *
     * *
    * * * 
   * * * * 
  * * * * *
 */

// for(let i= 1;i<=5;i++){
//     let value=" "
//     let space=" "
//     for(let sp=1;sp<=5-i;sp++){
//         space +=""
//     }
//     for(let j=1;j<=i;j++){
//         value += "*"
//     }
//     console.log( space + value)
// }

// holo space wale pattern program

/*
+ + + +
+     +
+     +
+ + + +

*/

for(let i=1;i<=4;i++){
    let ans= ""
      
    for(j=1;j<=4;j++){
        if((i==1)||(j==1)||(j==4)||(i==4))
            ans +="+"
        else{
            ans += " ";
        }
    }
    console.log(ans)
}


// holo tringle pattern

/*
              +
            +   +
          +        +
        +            + 
      + + + + + + + + +
*/ 

// for(let i=1;i<=5;i++){
//     let ans = ""
//     let space = ""
//     for(let sp=1;sp<=5-i;sp++){
//         space += " "
//     }
//     let sp2=" "
//     for(let j=1;j<=2*i-1;j++){
//         if( j==1 || j== 2*i-1 )
//             ans += "+"
//         else{
//             sp2=" "
//             ans  = ans + sp2}
//     }
//     console.log(space + ans)
// }


 const fruits = ["Banana", "Orange", "Apple", "Mango","aam"];
 let value= fruits.includes("banana",1);
 console.log(value)

 const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text = fruit.indexOf("shyam");
console.log(text)