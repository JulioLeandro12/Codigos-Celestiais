
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
			left: {seletorLeft * xy}px; 
			top: {seletorTop * xy}px; 
			height: {xy}px; 
			width: {xy}px; 
			"></div>

		{#if  lutadorVivo && $lutador.vida > 0}
			
			
			<div id="lutador" style="

			left: {$lutador.left * xy}px;
			top : {$lutador.top * xy}px;
			height: {xy}px; 
			width: {xy}px;
			z-index: 1;
			background-image: url(/public/imagens/Clary.png); 
			background-size: cover;
			"> <!-- eh temporario ok nao me matem -->
		
					<div id="range-lutador"></div>
		</div>

		{/if}


		{#if  atiradorVivo && $atirador.vida > 0}
			<div id="atirador" style="

			top: {$atirador.top * xy}px;
			left: {$atirador.left * xy}px;
			height: {xy}px;
			width: {xy}px;

		

			background-image: url(/public/imagens/Alec.png); 
			background-size: cover;
			
			
			"></div>
			
		{/if}

		{#if feiticeiroVivo && $feiticeiro.vida > 0}
			<div id="feiticeiro" style="

			top: {$feiticeiro.top * xy}px;
			left: {$feiticeiro.left * xy}px;
	
			height: {xy}px;
			width: {xy}px;

		
		
			background-image: url(/public/imagens/Magnus.png); 
			background-size: cover;
			
			
			"></div>
			
		{/if}

		{#if p4Vivo && $p4.vida > 0}
			<div id="p4" style="
			top: {$p4.top * xy}px;
			left: {$p4.left * xy}px;

			height: {xy}px;
			width: {xy}px;

			background-color: blue;

			"></div>
			
		{/if}

		{#if p5Vivo && $p5.vida > 0}
			<div id="p5" style="
			top: {$p5.top * xy}px;
			left: {$p5.left * xy}px;

			height: {xy}px;
			width: {xy}px;

			background-color: orange;

		"></div>
			
		{/if}

		{#if p6Vivo && $p6.vida > 0}
			<div id="p6" style="
			top: {$p6.top * xy}px;
			left: {$p6.left * xy}px;

			height: {xy}px;
			width: {xy}px;

			background-color: gray;

		"></div>
			
		{/if}
		

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
	

	#range-lutador {
		position: absolute;
		top: -100%;
		left: -100%;
		width: 300%;
		height: 300%;
		background-color: rgba(0,0,255,0.2);
		
	}

	#atirador, #feiticeiro, #lutador, #p4, #p5, #p6{

		position: absolute;
		transition: all 0.550s ease; 


	}


	


	</style>
	
	


<svelte:window on:keydown|preventDefault={funcoes} />



<script>
	import { lutador, atirador, feiticeiro } from "../stores/personagens";
	import { p4, p5, p6 } from "../stores/personagens";
	import { player1, player2 } from "../stores/jogador";

	player1.update(v => {
		v.personagens.push(lutador)
		v.personagens.push(atirador) 
		v.personagens.push(feiticeiro) 
		return v
	})

	player2.update(v => {
		v.personagens.push(p4)
		v.personagens.push(p5)
		v.personagens.push(p6)
		return v
	})

	console.log($player2.stamina)

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
		console.log("personagem selecionado?", personagemSelecionado)

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
	let pRef;

	let atiradorTop;
	let atiradorLeft;
	let atiradorSelecionado;
	let atiradorVivo = ($atirador.vida > 0);

	let lutadorTop;
	let lutadorLeft;
	let lutadorSelecionado;
	let lutadorVivo = ($lutador.vida > 0);

	let feiticeiroTop;
	let feiticeiroLeft;
	let feiticeiroSelecionado;
	let feiticeiroVivo = ($feiticeiro.vida > 0);

	let p4Top;
	let p4Left;
	let p4Selecionado;
	let p4Vivo = ($p4.vida > 0);

	let p5Top;
	let p5Left;
	let p5Selecionado;
	let p5Vivo = ($p5.vida > 0);

	let p6Top;
	let p6Left;
	let p6Selecionado;
	let p6Vivo = ($p6.vida > 0);


	atirador.subscribe(value => {
		atiradorTop = value.top
		atiradorLeft = value.left
		atiradorSelecionado = value.selecionado

		return value
	})

	lutador.subscribe(value => {
		lutadorTop = value.top
		lutadorLeft = value.left
		lutadorSelecionado = value.selecionado

		return value
	})

	feiticeiro.subscribe(value => {
		feiticeiroTop = value.top
		feiticeiroLeft = value.left
		feiticeiroSelecionado = value.selecionado

		return value
	})

	p4.subscribe(value => {
		p4Top = value.top
		p4Left = value.left
		p4Selecionado = value.selecionado
		
		return value
	})

	p5.subscribe(value => {
		p5Top = value.top
		p5Left = value.left
		p5Selecionado = value.selecionado
		
		return value
	})

	p6.subscribe(value => {
		p6Top = value.top
		p6Left = value.left
		p6Selecionado = value.selecionado
		
		return value
	})

	if($player1.stamina <= 0){
		player1.update(v => {
			v.turno = false
			return v
		})

		player2.update(v => {
			v.turno = true
			v.stamina = 8
			return v
		})

	}


	

	function selecionar(e) { 	
	if(seletor){	
	// seleciona os personagens



		if(seletorTop === atiradorTop && seletorLeft === atiradorLeft && seletor){
			
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = atirador


			console.log("atirador selecionado? ", atiradorSelecionado, pRef)
			}
		}

		 if(seletorTop === lutadorTop && seletorLeft === lutadorLeft){
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = lutador

			console.log("lutador selecionado? ", pRef)
			}

		}

		if(seletorTop === feiticeiroTop && seletorLeft === feiticeiroLeft){
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = feiticeiro

			console.log("lutador selecionado? ", pRef)
			}

		}

		if(seletorTop === p4Top && seletorLeft === p4Left){
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = p4

			console.log("lutador selecionado? ", pRef)
			}

		}

		if(seletorTop === p5Top && seletorLeft === p5Left){
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = p5

			console.log("lutador selecionado? ", pRef)
			}

		}

		if(seletorTop === p6Top && seletorLeft === p6Left){
			if(e.keyCode == 90 && personagemSelecionado == false){
				personagemSelecionado = true
				seletor = false

				pRef = p6

			console.log("lutador selecionado? ", pRef)
			}

		}


		} else if (e.keyCode === 90){
			seletor = true
			pRef = undefined;
			personagemSelecionado = false
		}
	}
	


function mover(e) {
		let pleft = 0;
		let ptop = 0;

	if (pRef != undefined && personagemSelecionado) {
		
	pRef.subscribe(value => {
		 pleft = value.left
		 ptop = value.top
		return value
	})


	if($player1.turno && $player1.stamina > 0 && $player1.personagens.includes(pRef)){
		if (e.keyCode == 38 && ptop - passo >= 0 ){
			pRef.update(v => {
				v.top -= passo
				return v
			})
			player1.update(v => {
				v.stamina --
				return v
			})
			
		}
		if (e.keyCode == 40 ){
			if((ptop + passo <= passo * linhas - 1)){
			pRef.update(v => {
				v.top += passo
				return v
			})
			player1.update(v => {
				v.stamina --
				return v
			})
		}
		}
		if (e.keyCode == 37 && pleft - passo >= 0){
			pRef.update(v => {
				v.left -= passo
				return v
			})
			player1.update(v => {
				v.stamina --
				return v
			})
		}
		if (e.keyCode == 39 && pleft + passo <= passo * colunas - 1){
			
			pRef.update(v => {
				v.left += passo
				return v
			})
			player1.update(v => {
				v.stamina --
				return v
			})
		}
		
	

	}
    
	}
}

</script>


