var Dogs = /** @class */ (function () {
    function Dogs(raca, nome, peso) {
        this.raca = raca;
        this.nome = nome;
        this.peso = peso;
    }
    return Dogs;
}());
var dog1 = new Dogs('Vira-Lata', 'Marvin', 15);
console.log("Meu cachorro \u00E9 um ".concat(dog1.raca, ", se chama ").concat(dog1.nome, " e pesa ").concat(dog1.peso));
