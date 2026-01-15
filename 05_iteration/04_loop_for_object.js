const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
    // console.log(programming[key]);
// }

/*for...in works on enumerable properties of objects
Map is NOT a plain object
Map stores data internally, not as enumerable properties
So for...in finds no keys to iterate over
👉 Therefore, loop body never runs.
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}