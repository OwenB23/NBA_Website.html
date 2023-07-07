"use strict";

function getFirstValue(arr) {
  return arr[0];
}

const owen = [5, 3, 4, 5];
const firstValue = getFirstValue(owen);

console.log(firstValue);

function getSecondValue(arr2) {
  return arr2[1];
}

const deez = [34, 56, 89, 23];
const secondValue = getSecondValue(deez);

console.log(secondValue);

// oooooooooooooooooooooooooooooooo

function howManySeconds(hours) {
  return hours * 3600;
}

const hours = 8;
const seconds = howManySeconds(hours);

console.log(seconds);

// ooooooooooooooooooooooooooooooooooo

function minToSeconds(mins) {
  return mins * 60;
}

const mins = 2;
const newSeconds = minToSeconds(mins);
console.log(`${mins} minutes is equal to ${newSeconds} seconds! Cool right?`);

// oooooooooooooooooooooooooooooooooo

function nameString(name) {
  return name + " Edabit";
}

const result = nameString("Owen");
console.log(result);

// oooooooooooooooooooooooooooooooo

function squared(b) {
  return a * a;
}

let a = 9;
const result2 = squared(a);
console.log(result2);

// ooooooooooooooooooo

function giveMeSomething(c) {
  return "Something " + c;
}

let c = "is better than nothing";

console.log(giveMeSomething(c));

// ooooooooooooooooooooooooo

let n = 4;

function lessThanOrEqualToZero(n) {
  if (n <= 0) return true;
  else {
    return false;
  }
}

console.log(lessThanOrEqualToZero(n));

// oooooooooooooooooooooooo

function sumOfTwo(num, num2) {
  return num + num2 <= 100;
}

let num = 25;
let num2 = 34;

console.log(sumOfTwo(num, num2));

// ooooooooooooooooooooooooooo

function addUp(numm) {
  return (numm * (numm + 1)) / 2;
}

let numm = 4;

console.log(addUp(numm));

// ooooooooooooooooooooooooo

function minMax(arrr) {
  return [Math.min(...arrr), Math.max(...arrr)];
}

let arrr = [17, 38, 40, 59, 3];

console.log(minMax(arrr));

// oooooooooooooooooooooooooooo

function totalOddNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddSum = totalOddNumbers(numbers);
console.log(oddSum);

// oooooooooooooooooooooooooo

function sumArrayElements(narr) {
  let summ = 0n;

  for (let i = 0; i < narr.length; i++) {
    summ += BigInt(narr[i]);
  }

  return summ;
}

const newNumbers = [
  2999484363633655253274949474, 5, 44, 7834563456345634563456,
  2343565467543425646, 754356435634563456,
];
const superSum = sumArrayElements(newNumbers);

console.log(superSum);

// ooooooooooooooooooooooooooooooooo

function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputStr = "Hello World!";
const reversedString = reverseString(inputStr);

console.log(reversedString);

function newReverseStr(nnarr) {
  return nnarr.split("").reverse().join("");
}

const newInputStr = "Owen Bond";
const reveredStrrr = newReverseStr(newInputStr);

console.log(reveredStrrr);

// oooooooooooooooooooooooooooooooooooooo

function removeRepeatedLetters(string) {
  let result = "";
  let encounteredLetters = new Set();

  for (let letter of string) {
    if (!encounteredLetters.has(letter)) {
      result += letter;
      encounteredLetters.add(letter);
    }
  }

  return result;
}

const inputString = "Hello World";
const outputString = removeRepeatedLetters(inputString);

console.log(outputString);

// ooooooooooFIZZBUZZZZZZZZZZZZ

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
