export function losango(dMaior: number, dMenor: number): number {
  return (dMaior * dMenor) / 2;
}

export function trapezio (altura: number, bMaior: number, bMenor: number): number {
  return ((bMaior + bMenor) * altura) / 2;
}

export function circulo(raio: number): number {
  return 3.14 * Math.pow(raio, 2);
}

export function soma(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}