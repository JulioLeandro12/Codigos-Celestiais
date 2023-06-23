export class Personagem {
  constructor(nome, vida, defesa, ataque, alcance, left, top, selecionado) {
    this.nome = nome;
    this.vida = vida;
    this.defesa = defesa;
    this.ataque = ataque;
    this.alcance = alcance;
    this.left = left;
    this.top = top;
    this.selecionado = selecionado
  }
}

export let lutador = new Personagem('lutador', 10, 3, 2, 1, 0, 3, false);
export let atirador = new Personagem('atirador', 10, 2, 4, 2, 7, 3, false);
export let feiticeiro = new Personagem('feiticeiro', 10, 2, 2, 3, 0, 4, false);
