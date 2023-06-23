
<div class="mapa" style="
		display: grid;
		grid-template-columns: repeat({colunas}, 1fr);
		grid-template-rows: repeat({linhas}, 1fr);
		background-color: black;
">
	

			{#each mapa as linha, linhaIndex}
				{#each linha as celula, celulaIndex}

					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div class="celula" on:mouseover={cellPos(linhaIndex, celulaIndex)} style="
					height: {xy}px; 
					width: {xy}px; "></div>
					
				{/each}	
			{/each}


			<div id="seletor" style="
			left: {(seletorLeft * xy)}px; 
			top: {(seletorTop * xy)}px; 
			height: {xy}px; 
			width: {xy}px; 
			"></div>

			

			
			<div id="lutador" style="
			left: {(lutador.left * xy)}px;
			top : {(lutador.top * xy)}px;
			height: {xy}px; 
			width: {xy}px;
			z-index: 1;
			background-image: url(/public/imagens/temp.png); 
			background-size: cover;
			"> <!-- eh temporario ok nao me matem -->
		
				<div id="range-lutador"></div>
			</div>
		
			<div id="atirador" style="
			left: {(atirador.left * xy)}px;
			top: {(atirador.top * xy)}px;
			height: {xy}px;
			width: {xy}px;
			background-image: url(/public/imagens/temp2.png); 
			background-size: cover;
			
			
			"></div>
		

</div>


<style>
	
	.mapa {
	  /* Adicione as seguintes propriedades para centralizar o tabuleiro */
	  position: absolute; /* Posicionamento absoluto */
	  top: 50%; /* Coloca o topo do tabuleiro no meio da página */
	  left: 35%; /* Coloca a esquerda do tabuleiro no meio da página */
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
	
	#lutador {
		position: absolute;
	}

	#range-lutador {
		position: absolute;
		top: -100%;
		left: -100%;
		width: 300%;
		height: 300%;
		background-color: rgba(0,0,255,0.2);
		
	}

	#atirador {
		position: absolute;
	}



	</style>
	
	


<svelte:window on:keydown|preventDefault={funcoes} />



<script>
	import { lutador } from "../stores/personagens";
	import { atirador } from "../stores/personagens";
	import { feiticeiro } from "../stores/personagens";


	function funcoes(e) {
			selecionar(e)
			mover(e)
			seletorMovimento(e)

	}

	
	let xy = 128 // tamanho das celulas e do seletor
	let linhas = 7
	let colunas = 8
	let mapa = Array(linhas).fill(null).map(() => Array(colunas).fill(null));

	function cellPos(linha, coluna) {
		return function	() {
			console.log(`Posição da célula (${coluna}, ${linha})`); // função para mostrar coordenada da celula
		}
	}

	let seletor = true
	let seletorTop = 3;
  	let seletorLeft = 3;
	let passo = 1; 

	function seletorMovimento(e) {
		console.log("a", personagemSelecionado)

			if(seletor){
				switch (e.keyCode) {
				case 38: // Seta para cima
					if (seletorTop - passo >= 0){
						seletorTop -= passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;

				case 40: // Seta para baixo
					if (seletorTop + passo <= passo * linhas - 1){
						seletorTop += passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;


				case 37: // Seta para a esquerda
					if (seletorLeft - passo >= 0){
						seletorLeft -= passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)

					}
				break;

				case 39: // Seta para a direita
					if (seletorLeft + passo <= passo * colunas - 1){
						seletorLeft += passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)

					}
				break;

  			}}

}				






	let personagemSelecionado = false;



	function selecionar(e) { 				// seleciona os personagens
		if(seletor && seletorTop === atirador.top && seletorLeft === atirador.left){
			if(e.keyCode == 90 && personagemSelecionado == false){
			personagemSelecionado = true
			atirador.selecionado = true

			lutador.selecionado = false	// desativa a seleção de outros personagens

			console.log("aee", atirador.selecionado)
			}
			else if(personagemSelecionado && e.keyCode == 90){
				personagemSelecionado = false
				atirador.selecionado = false
				console.log("a", atirador.selecionado)
			}
		}

		if(seletor && seletorTop === lutador.top && seletorLeft === lutador.left){
			if(e.keyCode == 90 && personagemSelecionado == false){
			personagemSelecionado = true
			lutador.selecionado = true

			atirador.selecionado = false

			console.log("aee", lutador.selecionado)

			}
			else if(personagemSelecionado && e.keyCode == 90){
				personagemSelecionado = false
				lutador.selecionado = false
				console.log("a", atirador.selecionado)
			}
		}

}



function mover(e) {
  if (atirador.selecionado) {
    switch (e.keyCode) {
      	case 38: // Seta para cima
        	if (atirador.top - passo >= 0) {
          		atirador.top -= passo;        
			}
        break;

      	case 40: // Seta para baixo
        	if (atirador.top + passo <= passo * linhas - 1) {
          	atirador.top += passo;
        	}
        break;															/// move o atirador

      	case 37: // Seta para a esquerda
        	if (atirador.left - passo >= 0) {
				atirador.left -= passo;
        	}
        break;

      	case 39: // Seta para a direita
        	if (atirador.left + passo <= passo * colunas - 1) {
          	atirador.left += passo;
        	}
        break;
		
		
    } 
  }

  if (lutador.selecionado) {
    switch (e.keyCode) {
      	case 38: // Seta para cima
        	if (lutador.top - passo >= 0) {
          		lutador.top -= passo;        
			}
        break;

      	case 40: // Seta para baixo
        	if (lutador.top + passo <= passo * linhas - 1) {
          	lutador.top += passo;
        	}
        break;															/// move o lutador

      	case 37: // Seta para a esquerda
        	if (lutador.left - passo >= 0) {
				lutador.left -= passo;
        	}
        break;

      	case 39: // Seta para a direita
        	if (lutador.left + passo <= passo * colunas - 1) {
          	lutador.left += passo;
        	}
        break;
		
		
    } 
  }
}



</script>


