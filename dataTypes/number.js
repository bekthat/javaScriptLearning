number = Math.PI;
console.log(number.toFixed(2));
console.clear();


const numbers = [15, 11, 16, 12, 51, 12, 13, 51];
const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);
console.log(maxValue);
console.log(minValue);
console.clear();

number = Math.random();
console.log(number.toFixed(2));

number2 = Math.random() * 10 + 1;
console.log(Math.floor(number2));
console.clear();


number = parseFloat(0.6 + 0.7).toFixed(1);
console.log(number);
console.clear();

str = parseInt('100$');
console.log(str);