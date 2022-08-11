interface House {
  street: string;
  number: number;
  city: string;
  printAddress(n:string): string;
}

class House {
  constructor(street: string, number:number, city: string) {
    this.street = street;
    this.number = number;
    this.city = city;
  }

  printAddress(name: string) {
    return `Olá, ${name}! Você mora na rua ${this.street}, nº ${this.number}, na cidade ${this.city}`;
  }
}

const House1 = new House('das Oliveiras', 560, 'Porto Alegre');

console.log(House1.printAddress('Mauro'));