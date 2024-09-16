//reference equality //interview questions

//types
//comparison by value
//comparison by reference

//1.comparison by value (primitive data)

const a = "aryan";
const b = "raktim";
const c = a;
const d = b;
console.log(a === c); //true
console.log(b === a); //false

//2.comparison by reference (complex data)

const aa = { name: "raktim" };
const bb = { name: "raktim" };
const cc = aa;
const dd = bb;

console.log(aa === bb); //false
console.log(cc === aa); //true
