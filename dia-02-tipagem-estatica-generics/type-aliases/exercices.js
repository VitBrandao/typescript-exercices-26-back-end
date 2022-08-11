function birdNames(bds) {
    console.log("O primeiro p\u00E1ssaro \u00E9: ".concat(bds.birdOne));
    console.log("O segundo p\u00E1ssaro \u00E9: ".concat(bds.birdTwo));
}
birdNames({ birdOne: 'Águia', birdTwo: 'Fênix' });
function sum(nbs) {
    return nbs.nOne + nbs.nTwo;
}
console.log(sum({ nOne: 14, nTwo: 15 }));
function printAddress(ads) {
    console.log("Seu endere\u00E7o \u00E9 rua ".concat(ads.street, ", n\u00FAmero: ").concat(ads.number));
}
printAddress({ street: 'Felipe de Noronha', number: 547 });
