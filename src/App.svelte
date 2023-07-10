
<script>
import Ajuda from "./Components/Ajuda.svelte";
import Jogar from "./Components/Jogar.svelte";
import Menu from "./Components/Menu.svelte";
import Sobre from "./Components/Sobre.svelte";
import { estado } from "./stores/estado";
</script>
<body style="background-image: url('/public/imagens/{$estado != 'jogar' ? 'bumbum.gif' : 'chao.png'}')">
 
  <div class="overlay">
    {#if $estado == "menu"}  <!--serve para criar a rotas do menu-->
    <Menu></Menu>
    
    {:else if $estado == "ajuda"} 
    <Ajuda></Ajuda>
    
    {:else if $estado == "jogar"}
    <Jogar></Jogar>
      
    {:else if $estado == "sobre"}
    <Sobre></Sobre>
    
    {/if}

  </div>
 
    
</body>

<style>
body {
  background-size: 100% 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>