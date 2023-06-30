import { writable } from "svelte/store";

 class Personagem {
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

export let lutador = writable(new Personagem('lutador', 10, 3, 2, 1, 0, 1, false))
export let atirador = writable(new Personagem('atirador', 10, 2, 4, 2, 0, 3, false))
export let feiticeiro = writable(new Personagem('feiticeiro', 10, 2, 2, 3, 0, 5, false))

export let p4 = writable(new Personagem('4', 10, 3, 2, 1, 7, 1, false))
export let p5 = writable(new Personagem('5', 10, 3, 2, 1, 7, 3, false))
export let p6 = writable(new Personagem('6', 10, 3, 2, 1, 7, 5, false))
