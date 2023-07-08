import { writable } from "svelte/store";

 class Personagem {
  constructor(nome, vida, defesa, ataque, left, top, selecionado) {
    this.nome = nome;
    this.vida = vida;
    this.defesa = defesa;
    this.ataque = ataque;
    this.left = left;
    this.top = top;
    this.selecionado = 
    this.location = [top, left]
    this.alcance = []

  }

}

export let lutador = writable(new Personagem('Clary', 10, 3, 2, 1, 1, false))
export let atirador = writable(new Personagem('Alec', 10, 2, 3, 1, 3, false))
export let feiticeiro = writable(new Personagem('Magnus', 10, 2, 3, 1, 5, false))

export let p4 = writable(new Personagem('Izzy', 10, 3, 2, 7, 1, false))
export let p5 = writable(new Personagem('Simon', 10, 3, 2, 7, 3, false))
export let p6 = writable(new Personagem('Jace', 10, 3, 2, 7, 5, false))
