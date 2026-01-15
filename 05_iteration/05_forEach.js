const coding= ["js","cpp","html","java","pyton"]
coding.forEach(function(key,value){
    console.log(key,"-",value)
})
// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

//  coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

/*One rule to remember (INTERVIEW GOLD ⭐)
Array.forEach → (value, index)
Map.forEach → (value, key)
✔ Value is ALWAYS first*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");

map.forEach((key,value) => {
    console.log(key, ":-", value);
});
