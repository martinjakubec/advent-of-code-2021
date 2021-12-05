const fs = require('fs');

var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
counter = 0;
input = input.split('\n');
for (let i = 1; i < input.length; i++) {
  counter = Number(input[i - 1]) < Number(input[i]) ? counter + 1 : counter;
}
console.log(counter);
