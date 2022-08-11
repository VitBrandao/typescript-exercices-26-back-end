// Crie um type para um objeto que represente um pássaro.
type Birds = {
    birdOne: string,
    birdTwo: string,
};

function birdNames(bds: Birds) {
    console.log(`O primeiro pássaro é: ${bds.birdOne}`);
    console.log(`O segundo pássaro é: ${bds.birdTwo}`);
}

birdNames({ birdOne: 'Águia', birdTwo: 'Fênix'});

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Numbers = {
    nOne: number,
    nTwo: number,
};

function sum(nbs: Numbers) {
    return nbs.nOne + nbs.nTwo;
}

console.log(sum({nOne: 14, nTwo: 15}));

// Crie um type para um objeto que represente um endereço.
type Address = {
    street: string,
    number: number,
};

function printAddress(ads: Address) {
    console.log(`Seu endereço é rua ${ads.street}, número: ${ads.number}`);
}

printAddress({ street: 'Felipe de Noronha', number: 547});