let n1=7;
let n2="7";
console.log(n1 == n2);
console.log(n1 === n2);

console.log("Start");

setTimeout(() => {
  console.log("Done (after 1 second)");
}, 1000);

console.log("End");