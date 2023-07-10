<script>
    import { trocadeestado } from "../stores/estado";
    import Ajuda from "./Ajuda.svelte";
    import Sobre from "./Sobre.svelte";
    import Jogar from "./Jogar.svelte";
</script>

<main>
    <!--<link href=" https://fonts.cdnfonts.com/css/common-pixel " rel="stylesheet">-->
    <link href="https://fonts.cdnfonts.com/css/hiskyflipper" rel="stylesheet">


    <h1 class="titulo">Codigos <br> Celestiais</h1>
    <!--titulo do jogo-->

    <div class="div-posicao">
        <!--serve para mudar a posição do botão-->

        <button class="jogar" on:click={() => trocadeestado("jogar")}>
            Jogar
        </button>

        <button class="ajuda" on:click={() => trocadeestado("ajuda")}>
            <!--tag em html que serve para criar os botões de acordo com o nome-->
            Ajuda
        </button>

        <button class="sobre" on:click={() => trocadeestado("sobre")}>
            Sobre
        </button>
    </div>
</main>

<style>

  /* @import url('https://fonts.cdnfonts.com/css/common-pixel');*/
  @import url('https://fonts.cdnfonts.com/css/hiskyflipper');




    .titulo {
        /*chamando a classe do titulo**/
        text-align: center; /*alinhamento do texto**/
        font-size: 60px; /*tamanho da fonte**/
        color: #a07ba2; /*cor da fonte**/
        margin-bottom: 50px; /*margem do titulo**/
        top: 10px; /*posição do titulo**/ 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 100);
        font-weight: bold; /* Define o texto em negrito*/
        letter-spacing: 2px; /* Define um espaçamento de 2 pixels entre as letras */
        text-transform: uppercase; /*texto fica em negrito*/
       /* font-family: 'Common Pixel', sans-serif;*/
       font-family: 'HISKYFLIPPERHIBOLD', sans-serif;
    }
    .div-posicao button {
        /*chamando a div da posição dos botões**/
        display: block; /**bloco*/
        width: 100%; /*margem do botão**/
        margin-bottom: 20px;
    }

    
    .jogar {
        background-color: rgb(186, 157, 214);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .sobre {
        background-color: rgb(186, 157, 214);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .ajuda {
        background-color: rgb(186, 157, 214);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>