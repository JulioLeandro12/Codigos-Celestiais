//essa pasta é um arquivo onde serão feitas as mudanças de troca de estado da página;

import { writable } from "svelte/store"; //esta função serve para transformar uma variável q MUDA AS COISAS em tempo real 
export let estado = writable("menu");

export function trocadeestado(novoestado){
    estado.set(novoestado)
}
