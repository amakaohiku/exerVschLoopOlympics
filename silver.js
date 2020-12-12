//Silver

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor" 
    },
    {
        name: "Justine Bieber",
        occupation: "Singer"
    },  
    {
        name: "Vladmir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for(i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

function namesArr(max){
var names = [];
for(var i = 0; i < peopleArray.length; i++){
    names[i] = peopleArray[i].name;
}
return names;
}

let names = [];
let occupations = [];

for( let i=0; i < peopleArray.length; i++ ) {
  names.push(peopleArray[i].name );
  occupations.push(peopleArray[i].occupation );
}
console.log( occupations )
console.log( names );




