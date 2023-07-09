import { writable } from "svelte/store";

class Jogador{
    constructor(turno){
        this.personagens = [];
        this.turno = turno;;
        this.stamina = 8;
        this.personagemSelecionado = null
        this.personagemAlvo = null
        this.abates = 0;
    }


}

export let player1 = writable(new Jogador('movimento'));
export let player2 = writable(new Jogador('inativo'));




