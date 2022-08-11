var House = /** @class */ (function () {
    function House(street, number, city) {
        this.street = street;
        this.number = number;
        this.city = city;
    }
    House.prototype.printAddress = function (name) {
        return "Ol\u00E1, ".concat(name, "! Voc\u00EA mora na rua ").concat(this.street, ", n\u00BA ").concat(this.number, ", na cidade ").concat(this.city);
    };
    return House;
}());
var House1 = new House('das Oliveiras', 560, 'Porto Alegre');
console.log(House1.printAddress('Mauro'));
