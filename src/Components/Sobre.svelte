<script>
    import { trocadeestado } from "../stores/estado";
</script>

<main>
    <div class="sobre">
        <h2>Sobre: Jogo Rpg Tático (Caçadores de Sombras)</h2>
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
            Para mais informações sobre o projeto, acesse nosso repositório no GitHub:
            <a href="https://github.com/JulioLeandro12/Projeto_Game.git" >
         Github
        </a>
        </p>
     
        

        <button class="voltar" on:click={() => trocadeestado("menu")}>
            Voltar
        </button>
    </div>
</main>

<style>
    button {
        background-color: lightsteelblue;
        position: fixed;
        top: 10px;
        left: 15px;
        height: auto;
        width: 150px;
    }

  .sobre {
    text-align: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
    color: #700476;
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(249, 248, 248, 0.1);
    border: 1px solid #e7e3e3
  }

  p {
    margin-bottom: 20px; /* Margem inferior */
    line-height: 2; /* Altura da linha */
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  }
  h2 {
    font-size: 44px;
    margin-bottom: 20px;

  }

</style>

