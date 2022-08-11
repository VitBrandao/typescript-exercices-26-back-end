"use strict";
const numbers = [1, 2, 3, 4];
const list = ['Vitor', 'Brandao', 'Silva'];
const bool = [true, false];
function getRandomElement(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(list));
console.log(getRandomElement(bool));
