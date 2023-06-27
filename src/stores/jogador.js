import { writable } from "svelte/store";

class Jogador{
    constructor(turno){
        this.personagens = [];
        this.turno = turno
        this.stamina = 8
    }


}

export let player1 = writable(new Jogador(true));
export let player2 = writable(new Jogador(false));




