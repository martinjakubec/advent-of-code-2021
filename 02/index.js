const fs = require('fs');

{
  let horPos = 0;
  let verPos = 0;
  fs.readFileSync('./input.txt', {encoding: 'utf-8'})
    .split('\n')
    .map((el) => el.split(' '))
    .forEach(([direction, amount]) => {
      switch (direction) {
        case 'forward':
          horPos += parseInt(amount);
          break;
        case 'down':
          verPos += parseInt(amount);
          break;
        case 'up':
          verPos -= parseInt(amount);
          break;
      }
    });

  console.log(horPos * verPos);
}

{
  let horPos = 0;
  let verPos = 0;
  let aim = 0;
  fs.readFileSync('./input.txt', {encoding: 'utf-8'})
    .split('\n')
    .map((el) => el.split(' '))
    .forEach(([direction, amount]) => {
      switch (direction) {
        case 'forward':
          horPos += parseInt(amount);
          verPos += aim * amount;
          break;
        case 'down':
          aim += parseInt(amount);
          break;
        case 'up':
          aim -= parseInt(amount);
          break;
      }
    });

  console.log(horPos * verPos);
}
