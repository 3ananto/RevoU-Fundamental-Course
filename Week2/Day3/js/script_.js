var variable = 'A';
let letible = 'B';
const constanta = 'C';
var arrayData = [];

// Looping For
for (let index = 0; index <=5; index++) {
    console.log('Index For-> ' + index);
}

let calculate = () => {
    console.log('Calculate')
}

calculate();

// Looping For Terbalik
for (let index = 5; index >=0; index--) {
    console.log('Index For (-)-> ' + index);
}

// Looping While
let index = 0;
while (index <=5) {
    console.log('Index While-> ' + index);
    index++;
}

// Looping While Terbalik
// let index = 5;
// while (index >=0) {
//     console.log('Index While (-)-> ' + index);
//     index--;
// }

// Ini Standart
if (variable == 'A') {
    console.log(variable)
}

// Tanpa Tanda Kurung
if (letible == 'B') console.log(letible);

// Operator If
constanta == 'C' ? console.log(constanta) : console.log('Bukan C')

// Operator If 2
constanta == 'D'
    ? console.log(constanta)
    : console.log('Bukan C')