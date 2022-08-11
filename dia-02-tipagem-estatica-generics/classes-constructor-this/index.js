var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
// usamos a palavra reservada class para definir uma classe
var Person = /** @class */ (function () {
    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    function Person(name, birthDate, eyeColor) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
// Feito isso... A classe Person pode ser reutilizada para criar qualquer
// quantidade de novos objetos Person, cada um com suas próprias características.
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
var person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
var person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);
console.log(person1);
person1.speak();
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."
console.log(person2);
person2.walk();
// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."
// E podemos adicionar informações, mesmo depois de criar
person1.eyeColor = EyeColor.Brown;
console.log(person1);
person1.eat();
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
