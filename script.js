const fs = require('fs');
const path = require('path');
const delimiter = '\r\n';
const topCount = 3;

const data = fs.readFileSync(path.join(__dirname, 'data'), {
  encoding: 'utf-8'
});
const calories = data.split(delimiter);

let highestElves = [];
let currentElf = {
  calories: 0,
  index: 0
};
const stringify = (elf) => `\nElf ${elf.index} with ${elf.calories} calories`;

const higherThanSome = (elf, elves) => {
  for (let i = 0; i < elves.length; i++) {
    if (elf.calories > elves[i].calories) return true;
  }
  return false;
};

const elfCopy = (elf) => JSON.parse(JSON.stringify(elf));

for (let i = 0; i < calories.length; i++) {
  const calorieCount = calories[i];
  if (calorieCount === '') {
    if (highestElves.length < topCount) {
      highestElves.push(elfCopy(currentElf));
    } else if (higherThanSome(currentElf, highestElves)) {
      console.log(
        `Is ${currentElf.calories} greater than ${highestElves.map((elf) => elf.calories)}?`
      );
      highestElves = highestElves.sort((e1, e2) =>
        e1.calories > e2.calories ? -1 : e1.calories < e2.calories ? 1 : 0
      );
      highestElves[topCount - 1] = elfCopy(currentElf);
    }

    console.log(
      `\nEnd of calory count! Current: ${stringify(
        currentElf
      )} and top ${topCount} highest: ${highestElves.map((elf) => stringify(elf))}`
    );
    currentElf.index++;
    currentElf.calories = 0;
  } else {
    currentElf.calories += parseInt(calorieCount);
  }
}

console.log(`\nTop ${topCount} elves: ${highestElves.map((elf) => stringify(elf))}`);
console.log(
  `Solution: their sum is ${highestElves.reduce((prev, curr) => prev + curr.calories, 0)}`
);
