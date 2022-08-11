class Dogs {
  raca: string;
  nome: string;
  peso: number;

  constructor( raca: string, nome: string, peso: number) {
    this.raca = raca;
    this.nome = nome;
    this.peso = peso;
  }
}

const dog1 = new Dogs('Vira-Lata', 'Marvin', 15);

console.log(`Meu cachorro é um ${dog1.raca}, se chama ${dog1.nome} e pesa ${dog1.peso} kg`);
