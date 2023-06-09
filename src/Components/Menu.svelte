<script>
    import { trocadeestado } from "../stores/estado";
    import Ajuda from "./Ajuda.svelte";
    import Sobre from "./Sobre.svelte";
    import Jogar from "./Jogar.svelte";
</script>

<div class="div-posicao"> <!--serve para mudar a posição do botão-->

    <button class="jogar" on:click={() => trocadeestado("jogar")}> 
        Jogar
        </button>

    <button class="ajuda" on:click={() => trocadeestado("ajuda")}> <!--tag em html que serve para criar os botões de acordo com o nome-->
        Ajuda
       </button>
       
    <button class="sobre" on:click={() => trocadeestado("sobre")}> 
        Sobre
       </button>
       
       
</div>

<style>

.div-posicao button{ /*chamando a div da posição dos botões**/
    display: block; /**bloco*/
    width: 100%; /*margem do botão**/
    margin-bottom: 20px; 
}

.jogar{background-color:lightsteelblue;}

.sobre {background-color:lightsteelblue;}

.ajuda {background-color:lightsteelblue;}

</style>



