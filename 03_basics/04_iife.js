// Immediately Invoked Function Expressions (IIFE)
//An IIFE is a function that runs immediately after it is defined.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/*Why do we use IIFE? 🔥
✔ Avoid polluting global scope
✔ Create a private scope
✔ Run setup / initialization code once
✔ Used a lot before ES6 modules*/