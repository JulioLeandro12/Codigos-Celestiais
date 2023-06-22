export class Personagem {
    constructor (vida, defesa, ataque, alcance, left, top, img) {
        this.vida = vida;
        this.defesa = defesa;
        this.ataque = ataque;
        this.alcance = alcance;
        this.left = left;
        this.top = top;
        this.img = img;
    }
}
 export let lutador = new Personagem(10, 3, 2, 1, 0, 4, 'temp.png');
 export let atirador = new Personagem(10, 1, 1, 3, 0, 3, '');
 export let feiticeiro = new Personagem(10, 2, 2, 3, 0, 4, '');