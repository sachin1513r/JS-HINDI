// 1️⃣ this.username
// Here, this refers to the object that is calling the function
// The function is called using user.welcomeMessage()
// So, this === user

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

 //user.welcomeMessage()
 //this always picks the latest value from the object at runtime.
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}


chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// // chai()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


//Arrow function does NOT have its own this
//So it inherits this from its surrounding scope,

// console.log(addTwo(3, 4))


// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()