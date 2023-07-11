<script>
    import {trocadeestado} from "../stores/estado";
    
</script>

<main>
    <div class = "ajuda">
        <h1>Como jogar:
        </h1>
        <h2>Use as setas do teclado para
             movimentar seu personagem:
            <br><br>
            <div class ="setinhas"> 
                <img src="..\..\public\imagens\KeyArrow.png" alt="Setinhas" style=
                "height: 135px
                ">
            </div>
           
            Para selecionar os personagens, aperte a tecla "Z":
            <br>
            <br>
            <div id = "Z">
                <img src="../../public/imagens/KeyZ.png" alt="Z" style=
                "height: 80px;
                margin-top: -30px
                ">
            </div>
            
            Aperte a tecla "C" para mudar de turno (ataque ou movimento). <br> Se mova ou ataque de acordo com sua energia.<br><br>
            
            <div id="C">
                <img src="../../public/imagens/keyC.png" alt="C" style="
                height: 80px;
                margin-top: -30px
                ">
            </div>

            Use a tecla "X" para atacar o personagem alvo.<br> (OBS: selecione seu personagem<br> e o adversário que você quer atacar)<br><br>
            <div id="X">
                <img src="../../public/imagens/keyX.png" alt="X" style="
                height: 80px;
                margin-top: -30px
                ">
                <br>
            ATENÇÃO!! - Para você atacar, o adversário precisa estar dentro da sua área de ataque.<br>
                        TENHA NO MÍNIMO 2 ENERGIAS PARA ATACAR!!
            </div>
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
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
        color: rgb(254, 253, 255);
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