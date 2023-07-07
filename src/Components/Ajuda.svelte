<script>
    import {trocadeestado} from "../stores/estado";
    
</script>

<main>
    <div class = "ajuda">
        <h1>Como jogar:
        </h1>
        <h2>Use as setas do teclado para<br>
             movimentar seu personagem:
            <br><br>
            <div class ="setinhas"> 
                <img src="..\..\public\imagens\KeyArrow.png" alt="Setinhas" style=
                "height: 135px
                ">
            </div>
           
            Para selecionar seu personagem <br> 
            aperte a tecla "Z"
            <br>
            <br>
            <div id = "Z">
                <img src="../../public/imagens/KeyZ.png" alt="Z" style=
                "height: 80px;
                margin-top: -30px
                ">
            </div>
            
            Movimente o personagem e ataque!!<br><br>
            Good Game :D
        </h2>
    </div>
    <div> 
        <button class= "voltar" on:click={()=> trocadeestado ("menu")}>
        </button>
    </div>
</main>


<style>
    .ajuda{
        background-color: #000000aa ;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
        font-family: 'HISKYFLIPPERHIBOLD', sans-serif;
        font-size: 20px;
        color: rgb(186, 157, 214);
        box-shadow: 0 2px 4px rgba(249, 248, 248, 0.1);
        border:3px solid #39393984
        

    }
    
    .voltar {
        background-image: url(../../public/imagens/voltar_botao.png);
        background-size: cover;
        padding: auto;
        height: 20px;
        width: 100px;
        border-radius: 15px;

    
    }

    
</style>