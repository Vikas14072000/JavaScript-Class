const promise = new Promise((resolve, reject) => {
    let age = Math.floor(Math.random() * 100)
    setTimeout(() => {
        if (age >= 18) {
            resolve("you can vote")
        }
        else {
            console.log("you can not vote")
        }
    }, 2000)

})
let sf = promise.then((op) => console.log(op)).catch((i) => console.log(i));

console.log(sf);
setTimeout(() => {
    console.log(sf);
}, 3000)



