
<div class="mapa">
	<div class="seletor" style="left: {newLeft}px; top: {newTop}px"></div>


			{#each mapa as linha, linhaIndex}
				{#each linha as celula, celulaIndex}

					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div class="celula" 
					on:mouseover={xyPos(linhaIndex, celulaIndex)} ></div>
					
				{/each}	
			{/each}

</div>


<style>
	
	
	.mapa {
	  display: grid;
	  grid-template-columns: repeat(15, 1fr);
	  grid-template-rows: repeat(8, 1fr);
	  background-color: black;
	
	
	  /* Adicione as seguintes propriedades para centralizar o tabuleiro */
	  position: absolute; /* Posicionamento absoluto */
	  top: 50%; /* Coloca o topo do tabuleiro no meio da página */
	  left: 50%; /* Coloca a esquerda do tabuleiro no meio da página */
	  transform: translate(-50%, -50%); /* Translada o tabuleiro de volta para centralizar */
	}
	
	
	.celula {
		display: flex;
		align-items: center;
		justify-content: center;

		-webkit-box-shadow:inset 0px 0px 0px 1px rgb(0, 0, 0);
    		-moz-box-shadow:inset 0px 0px 0px 1px rgb(0, 0, 0);
    		box-shadow:inset 0px 0px 0px 1px rgb(0, 0, 0);
	
		height: 90px;
		width: 90px;
		border: -1px solid #ff0303; 
	
		background-color: #731515;
		background-size: cover; /* Redimensiona a imagem para preencher a célula */
		background-position: center; /* Centraliza a imagem na célula */
	}
	
	
	.seletor {
		  position: absolute;
		  height: 90px;
		  width: 90px;
		  background-color: transparent;
		  border: 1px white solid;
		  transition: all 0.550s ease; 
		}
	
	
	</style>
	
	


<svelte:window on:keydown|preventDefault={onKeyDown} />



<script>

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////

	let linhas = 10
	let colunas = 15

	let mapa = Array(linhas).fill(null).map(() => Array(colunas).fill(null));


	function xyPos(linha, coluna) {
		return function	() {
			console.log(`Posição da célula (${linha}, ${coluna})`);
		}
	}

	
	let newTop = 0;
  	let newLeft = 0;

	function onKeyDown(e) {
  		const speed = 90; // Tamanho de cada célula do tabuleiro

			switch (e.keyCode) {
				case 38: // Seta para cima
					if (newTop - speed >= 0){
						newTop -= speed;
						console.log(`top: ${newTop} left: ${newLeft}`)

					}
				break;

				case 40: // Seta para baixo
					if (newTop + speed <= speed * linhas - 1){
						newTop += speed;
							console.log(`top: ${newTop} left: ${newLeft}`)
					}
				break;


				case 37: // Seta para a esquerda
					if (newLeft - speed >= 0){
						newLeft -= speed;
						console.log(`top: ${newTop} left: ${newLeft}`)

					}
				break;

				case 39: // Seta para a direita
					if (newLeft + speed <= speed * colunas - 1){
						newLeft += speed;
						console.log(`top: ${newTop} left: ${newLeft}`)

					}
				break;

  }

}					


	


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////


    let player1 = null
    let player2 = null
    let resultado = 'Escolha os personagens'

   /* function start() {
        if (player1 && player2) {
            attack(player1, player2)
            resultado = player2.hp <= 0 ? 
                `${player2.name} foi derrotado.` 
            : `${player2.name} HP: ${player2.hp}`
        } else {
            resultado
        }
    }
*/
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////

	let src = "imgs/grama.png"

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////


</script>
