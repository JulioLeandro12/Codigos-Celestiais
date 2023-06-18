
<div class="mapa" style="
		display: grid;
		grid-template-columns: repeat({colunas}, 1fr);
		grid-template-rows: repeat({linhas}, 1fr);
		background-color: black;
">
	

			{#each mapa as linha, linhaIndex}
				{#each linha as celula, celulaIndex}

					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div class="celula" on:mouseover={xyPos(linhaIndex, celulaIndex)} style="
					height: {xy}px; 
					width: {xy}px; "></div>
					
				{/each}	
			{/each}

			<div id="warrior" style="
			left: {(personagemLeft * xy)}px;
			top : {(personagemTop * xy)}px;
			height: 120px; 
			width: 120px; 
			">p</div>

			<div id="seletor" style="
			left: {(seletorLeft * xy)}px; 
			top: {(seletorTop * xy)}px; 
			height: {xy}px; 
			width: {xy}px; 
			"></div>
		

</div>


<style>
	
	
	.mapa {

	
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
	

		border: -1px solid #ff0303; 
	
		background-color: #731515;
		background-size: cover; /* Redimensiona a imagem para preencher a célula */
		background-position: center; /* Centraliza a imagem na célula */
	}
	
	
	#seletor {
		  position: absolute;
		  background-color: transparent;
		  border: 1px white solid;
		  transition: all 0.550s ease; 
		}
	
	#warrior {
		position: absolute;
		background-color: #1a187c;
	}
	</style>
	
	


<svelte:window on:keydown|preventDefault={alli} />



<script>
	let personagemTop = 0;
	let personagemLeft = 0;

	let personagemSelecionado = false;

	function alli(e) {
		selecionar(e)
		mover(e)
		seletorMovimento(e)

	}


	function selecionar(e) {
		if (seletorTop === personagemTop && seletorLeft === personagemLeft || !sel){
			if (e.keyCode === 13) {
				personagemSelecionado = !personagemSelecionado
				seletor = !seletor
				console.log(personagemSelecionado ? 'w' : 'n')
				console.log(personagemTop, personagemLeft)
			}
		}
	}
	
	function mover(e){
		if(personagemSelecionado) {
			switch (e.keyCode) {
				
				case 38: // Seta para cima
					if (personagemTop - speed >= 0){
						personagemTop -= speed;
						console.log(`top: ${personagemTop} left: ${personagemLeft}`)

					}
				break;

				case 40: // Seta para baixo
					if (personagemTop + speed <= speed * linhas - 1){
						personagemTop += speed;
							console.log(`top: ${personagemTop} left: ${personagemLeft}`)
					}
				break;


				case 37: // Seta para a esquerda
					if (personagemLeft - speed >= 0){
						personagemLeft -= speed;
						console.log(`top: ${personagemTop} left: ${personagemLeft}`)

					}
				break;

				case 39: // Seta para a direita
					if (personagemLeft + speed <= speed * colunas - 1){
						personagemLeft += speed;
						console.log(`top: ${personagemTop} left: ${personagemLeft}`)

					}
				break;

  }

		}
	}


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	
	let xy = 120
	let linhas = 8
	let colunas = 12

	let mapa = Array(linhas).fill(null).map(() => Array(colunas).fill(null));


	function xyPos(linha, coluna) {
		return function	() {
			console.log(`Posição da célula (${linha}, ${coluna})`);
		}
	}

	let seletor = true
	let seletorTop = 0;
  	let seletorLeft = 0;
	let speed = 1; 

	function seletorMovimento(e) {

			if(!personagemSelecionado){
				switch (e.keyCode) {
				case 38: // Seta para cima
					if (seletorTop - speed >= 0){
						seletorTop -= speed;
						console.log(`top: ${seletorTop} left: ${seletorLeft}`)

					}
				break;

				case 40: // Seta para baixo
					if (seletorTop + speed <= speed * linhas - 1){
						seletorTop += speed;
							console.log(`top: ${seletorTop} left: ${seletorLeft}`)
					}
				break;


				case 37: // Seta para a esquerda
					if (seletorLeft - speed >= 0){
						seletorLeft -= speed;
						console.log(`top: ${seletorTop} left: ${seletorLeft}`)

					}
				break;

				case 39: // Seta para a direita
					if (seletorLeft + speed <= speed * colunas - 1){
						seletorLeft += speed;
						console.log(`top: ${seletorTop} left: ${seletorLeft}`)

					}
				break;

  			}}

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
