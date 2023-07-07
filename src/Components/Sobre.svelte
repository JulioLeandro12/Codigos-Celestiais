<script>
    import { trocadeestado } from "../stores/estado";
</script>

<main>
  <link href="https://fonts.cdnfonts.com/css/hiskyflipper" rel="stylesheet">
    <div class="sobre">
        <h2>Sobre o Jogo Rpg Tático <br> (Códigos Celestiais):</h2>
        <p>
            Este projeto de RPG Tático foi desenvolvido como parte do trabalho de conclusão da disciplina 
            de Lógica de Programação e Estrutura de Dados. 
            O jogo foi desenvolvido com o objetivo de proporcionar uma
            experiência envolvente e estratégica para os fãs da série de livros
            "Instrumentos Mortais" (Shadowhunters) escrita por Cassandra Clare.
        </p>
        <p>
            Neste jogo, os jogadores assumem o papel de caçadores de sombras e
            enfrentam desafios táticos em batalhas estratégicas contra demônios,
            vampiros, lobisomens e outras criaturas sobrenaturais. Os jogadores
            devem usar suas habilidades, magias e armas para proteger o mundo
            dos mundanos e manter o equilíbrio entre a luz e as sombras.
        </p>
        
      <p>
          Discentes: Izes Stella, Júlio Leandro, Rafael Paulo e Jobson Rafael <br>
          Doscente: Allan Diego <br>
          Instituto Federal De Pernambuco, Campus Igarassu
        
      </p>
     
        <p>
            Para mais informações sobre o nosso projeto, acesse nosso repositório no
            <a href="https://github.com/JulioLeandro12/Projeto_Game.git" >
         Github.
        </a>

      </p>
        
    </div>
    <div><button class="voltar" on:click={() => trocadeestado("menu")}>
    </button></div>
</main>

<style>
    @import url('https://fonts.cdnfonts.com/css/hiskyflipper');

    button {
      background-image: url(../../public/imagens/voltar_botao.png) no repeat;
      background-size: cover;
      padding: auto;
      height: 20px;
      width: 100px;
      border-radius: 15px;
    }
    .voltar {
      background-image: url(../../public/imagens/voltar_botao.png);
      background-size: cover; /*Preencher o botão com imagem*/
      background-position: center;  /*Centralizar a imagem no botão*/
    }

  .sobre {
    background-color: #000000aa;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: 'HISKYFLIPPERHIBOLD', sans-serif;
    color: rgb(186, 157, 214);
    font-size: 25px;
    box-shadow: 0 2px 4px rgba(249, 248, 248, 0.1);
    border: 3px solid #39393984
    
  }

  p {
    margin-bottom: 20px; /* Margem inferior */
    line-height: 2; /* Altura da linha */
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color:aliceblue;
    
  
  }
  h2 {
    font-size: 44px;
    margin-bottom: 20px;
    
  }

</style>

