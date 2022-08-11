const numbers: number[] = [1, 2, 3, 4];
const list: string[] = ['Vitor', 'Brandao', 'Silva'];
const bool: boolean[] = [true, false];

function getRandomElement<T>(items: T[]): T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(list));
console.log(getRandomElement<boolean>(bool));