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


  attack(alvo){
    alvo.vida -= this.ataque
    console.log(alvo.vida)
  }

}

export let lutador = writable(new Personagem('Clary', 10, 3, 2, 1, 0, 1, false))
export let atirador = writable(new Personagem('Alec', 10, 2, 4, 2, 0, 3, false))
export let feiticeiro = writable(new Personagem('Magnus', 10, 2, 2, 3, 0, 5, false))

export let p4 = writable(new Personagem('Izzy', 10, 3, 2, 1, 7, 1, false))
export let p5 = writable(new Personagem('Simon', 10, 3, 2, 1, 7, 3, false))
export let p6 = writable(new Personagem('Jace', 10, 3, 2, 1, 7, 5, false))
