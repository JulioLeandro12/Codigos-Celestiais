<script>
    import { trocadeestado } from "../stores/estado";
    import Ajuda from "./Ajuda.svelte";
    import Sobre from "./Sobre.svelte";
    import Jogar from "./Jogar.svelte";
</script>

<button class="ajuda" on:click={() => trocadeestado("ajuda")}> <!--tag em html que serve para criar os botões de acordo com o nome-->
 Ajuda
</button>

<button class="sobre" on:click={() => trocadeestado("sobre")}> 
 Sobre
</button>

<button class="jogar" on:click={() => trocadeestado("jogar")}> 
 Jogar
</button>

<style>

.jogar{background-color:lightsteelblue;}

.sobre {background-color:lightsteelblue;}

.ajuda {background-color:lightsteelblue;}

</style>
