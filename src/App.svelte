
<script>
import Ajuda from "./Components/Ajuda.svelte";
import Jogar from "./Components/Jogar.svelte";
import Menu from "./Components/Menu.svelte";
import Sobre from "./Components/Sobre.svelte";
import { estado } from "./stores/estado";
</script>

{#if $estado == "menu"}  <!--serve para criar a rotas do menu-->
<Menu></Menu>

{:else if $estado == "ajuda"} 
<Ajuda></Ajuda>

{:else if $estado == "jogar"}
<Jogar></Jogar>
  
{:else if $estado == "sobre"}
<Sobre></Sobre>

{/if}