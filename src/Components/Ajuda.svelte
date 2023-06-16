<script>
    import {trocadeestado} from "../stores/estado";
    
</script>

<main>
    <div class = "ajuda">
        <h1>Como jogar:</h1>
        <h2>Usando as setas do teclado
            <br><br>
            <div class ="setinhas"> 
                <img src="..\..\public\imagens\Setinhas150-97.png" alt="Setinhas">
            </div>
            <br>
            Selecione o personagem com a <br> tecla Enter
            <br><br>
            <div class = "enter">
                <img src="../../public/imagens/Enter150-150.png" alt="Enter">
            </div>
            <br>

            Escolha a ação do seu personagem.<br><br>
            Good Game!!
        </h2>
    </div>
    <div> 
        <button class= "voltar" on:click={()=> trocadeestado ("menu")}>
        </button>
    </div>
</main>


<style>
    button {
      background-image: url(../../public/imagens/voltar_botao.png) no repeat;
      background-size: cover;
      padding: auto;
      height: 20px;
      width: 100px;
      border-radius: 15px;


    }
    .ajuda{
        background-color: #000000aa ;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
        font-family: inherit;
        font-size: 20px;
        color: rebeccapurple;
        box-shadow: 0 2px 4px rgba(249, 248, 248, 0.1);
        border:3px solid #39393984
        

    }
    
    .voltar {
        background-image: url(../../public/imagens/voltar_botao.png);
        background-size: cover;
    }


    
</style>