
//bronze
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var healthFruit = [];

// for(let i=0; i <fruit.length; i+2 ) {
//     healthFruit.push(fruits[i]);
//     console.log(fruit[i])
// }
//Bronze Medal
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const breakfast = [];

for( let i=0; i <fruit.length; i++ ) {
  if(i % 2 === 0) {
    breakfast.push( fruit[i])
  }
}
console.log(breakfast);