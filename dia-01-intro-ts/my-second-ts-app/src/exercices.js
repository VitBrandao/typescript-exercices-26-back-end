"use strict";
exports.__esModule = true;
exports.soma = exports.circulo = exports.trapezio = exports.losango = void 0;
function losango(dMaior, dMenor) {
    return (dMaior * dMenor) / 2;
}
exports.losango = losango;
function trapezio(altura, bMaior, bMenor) {
    return ((bMaior + bMenor) * altura) / 2;
}
exports.trapezio = trapezio;
function circulo(raio) {
    return 3.14 * Math.pow(raio, 2);
}
exports.circulo = circulo;
function soma(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
exports.soma = soma;
