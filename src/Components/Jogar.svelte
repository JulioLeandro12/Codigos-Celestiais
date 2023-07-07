
<h1 class="header" >{turnoGlobal}</h1>

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
					width: {xy}px; 
					">
					{#if (linhaIndex == 0 && celulaIndex == 0)}
					<div id="celulaColuna1" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (linhaIndex > 0 && linhaIndex < 7 && celulaIndex == 0)}
					<div id="celulaArbusto" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (linhaIndex == 7 && celulaIndex == 0)}
					<div id="celulaColuna2" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (linhaIndex == 0 && celulaIndex > 0 && celulaIndex < 8)}
					<div id="celulaArbusto2" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (linhaIndex < 1 && celulaIndex === 8)}
					<div id="celulaColuna2Flor" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (linhaIndex === 7 && celulaIndex > 0 && celulaIndex < 8)}
					<div id="celulaArbusto2" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (celulaIndex === 8 && linhaIndex === 7)}
					<div id="celulaColuna2Sangue" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}

					{#if (celulaIndex === 8 && linhaIndex > 0 && linhaIndex < 7)}
					<div id="celulaArbusto" style="
					height: {xy}px; 
					width: {xy}px;">
					</div>
					{/if}


					</div>
				
					
					{/each}	
			{/each}




		{#if  lutadorVivo && $lutador.vida > 0}
			
			
			<div id="lutador" style="

			left: {$lutador.left * xy}px;
			top : {$lutador.top * xy}px;
			height: {xy}px; 
			width: {xy}px;
			background-image: url(/public/imagens/Clary.png); 
			background-size: cover;
			transform: scaleX({pRef == lutador && inverso ? -1 : 1})

			"> 
			
				<div class="HPbar">
					<span class= "HPtext"> HP:100/100</span>
				</div> 

				{#if (!seletor && pRef == lutador)}
					<div id="range-player1" class="lutador"></div>	
				{/if}
				

			

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
			transform: scaleX({pRef == atirador && inverso ? -1 : 1})
			
			
			">
		
			<div class="HPbar">
				<span class= "HPtext"> HP:100/100</span>
			</div>

			{#if (!seletor && pRef == atirador)}
				<div id="range-player1"></div>
			{/if}
			</div>
		{/if}

		{#if feiticeiroVivo && $feiticeiro.vida > 0}
			<div id="feiticeiro" style="
			top: {$feiticeiro.top * xy}px;
			left: {$feiticeiro.left * xy}px;
			height: {xy}px;
			width: {xy}px;
			background-image: url(/public/imagens/Magnus.png); 
			background-size: cover;
			transform: scaleX({pRef == feiticeiro && inverso ? -1 : 1})
			

			
			">
			<div class="HPbar">
				<span class= "HPtext"> HP:100/100</span>
			</div>


			{#if (!seletor && pRef == feiticeiro)}
				<div id="range-player1"></div>
			{/if}

			</div>
			
			
		{/if}

		{#if p4Vivo && $p4.vida > 0}
			<div id="izzy" style="
			top: {$p4.top * xy}px;
			left: {$p4.left * xy}px;
			height: {xy}px;
			width: {xy}px;
			background-image: url(/public/imagens/izzy.png); 
			transform: scaleX({pRef == p4 && inverso2 ? -1 : 1})

			

			">
			<div class="HPbar">
				<span class= "HPtext"> HP:100/100</span>
			</div> 

			{#if (!seletor && pRef == p4)}
				<div id="range-player2"></div>
			{/if}
			
		</div>
			
		{/if}

		{#if p5Vivo && $p5.vida > 0}
			<div id="simon" style="
			top: {$p5.top * xy}px;
			left: {$p5.left * xy}px;
			height: {xy}px;
			width: {xy}px;
			background-image: url(/public/imagens/simon.png); 
			transform: scaleX({pRef == p5 && inverso2 ? -1 : 1})


		">
		<div class="HPbar">
			<span class= "HPtext"> HP:100/100</span>
		</div> 

		{#if (!seletor && pRef == p5)}
		<div id="range-player2"></div>
			{/if}

		</div>
			
		{/if}

		{#if p6Vivo && $p6.vida > 0}
			<div id="jace" style="
			top: {$p6.top * xy}px;
			left: {$p6.left * xy}px;
			height: {xy}px;
			width: {xy}px;
			background-image: url(/public/imagens/jace.png); 
			transform: scaleX({pRef == p6 && inverso2 ? -1 : 1})


		">
		<div class="HPbar">
			<span class= "HPtext"> HP:100/100</span>
		</div> 

		{#if (!seletor && pRef == p6)}
		<div id="range-player2"></div>
			{/if}

		</div>
			
		{/if}

		<div id="seletor" style="
		left: {seletorLeft * xy}px; 
		top: {seletorTop * xy}px; 
		height: {xy}px; 
		width: {xy}px; 

		background-image: url({seletor == true ? seletorimg : seletorimg2})
		"></div>
		
</div>






<style>
	
	.header {
		position: absolute;
		top: 0cqmin;

	}

	.mapa {
	  /* Adicione as seguintes propriedades para centralizar o tabuleiro */
	  position: absolute; /* Posicionamento absoluto */
	  top: 50%; /* Coloca o topo do tabuleiro no meio da página */
	  left: 50%; /* Coloca a esquerda do tabuleiro no meio da página */
	  transform: translate(-50%, -50%); /* Translada o tabuleiro de volta para centralizar */
	  z-index: 1;

	}
	
	
	
	.celula {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url(/public/imagens/grama16x16.png);
		background-size: cover; /* Redimensiona a imagem para preencher a célula */
		background-position: center; /* Centraliza a imagem na célula */
	}

	#celulaColuna1 {
		background-image: url(/public/imagens/coluna1.png);
		background-size: cover;
	}
	
	#celulaColuna2 {
		background-image: url(/public/imagens/coluna2.png);
		background-size: cover;
	}

	#celulaColuna2Flor {
		background-image: url(/public/imagens/coluna1-flor.png);
		background-size: cover;
	}

	#celulaColuna2Sangue {
		background-image: url(/public/imagens/coluna2-sangue.png);
		background-size: cover;
	}

	#celulaArbusto {
		background-image: url(/public/imagens/arbusto1.png);
		background-size: cover;
	}

	#celulaArbusto2 {
		background-image: url(/public/imagens/arbusto2.png);
		background-size: cover;
	}


	
	
	#seletor {
		  position: absolute;
		  background-color: transparent;
		  transition: all 0.550s ease; 
		}
	

	#range-player1 {
		position: absolute;
		top: -100%;
		left: -100%;
		width: 300%;
		height: 300%;
		background-color: rgba(251, 255, 0, 0.055);
		border: solid 4px;
		border-color: rgba(101, 24, 91, 0.438);
		
	}	
	#range-player2 {
		position: absolute;
		top: -100%;
		left: -100%;
		width: 300%;
		height: 300%;
		background-color: rgba(0, 0, 255, 0.055);
		border: solid 4px;
		border-color: rgba(59, 8, 56, 0.438);
	}

	.HPbar {
	width: 126px; /* Largura da barra de HP */
	height: 16px; /* Altura da barra de HP */
	border: 1px solid #000; /* Borda preta para a barra de HP */
	background-color: #f00; /* Cor de fundo da barra de HP */
	position: relative;
	top: -20%;
	left: 7%;
	width: 110px;
	height: 16px;

	border-radius: 10px;
}
	.HPtext {
		position: absolute;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		  color: #fff; /* Cor do texto */
		  font-size: 12px; /* Tamanho do texto */
		font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		
	}



	#atirador, #feiticeiro, #lutador, #izzy, #simon, #jace{

		position: absolute;
		transition: all 0.550s ease; 


	}

	#trocar-Turno {
		position:absolute;
		left: 400px;
		top: 88%;
		width: 200px;
		height: 80px;
		border-radius: 30px;
		background-image: url("../../public/imagens/Next-turn.png");
		background-size: cover;
		background-position: center;

	}
	#trocar-Turno:hover{
		background-image: url("../../public/imagens/Next-turn-press.png");
		background-size: cover;
		background-position: center;
	}



</style>
	

<button id="trocar-Turno" on:click={proximoTurno} ></button>
<svelte:window on:keydown|preventDefault={funcoes}/>



<script>
	import { lutador, atirador, feiticeiro } from "../stores/personagens";
	import { p4, p5, p6 } from "../stores/personagens";
	import { player1, player2 } from "../stores/jogador";
	// @ts-ignore
	// @ts-ignore
	import { trocadeestado } from "../stores/estado";
    // @ts-ignore
    // @ts-ignore
    import { prevent_default } from "svelte/internal";

	player1.update(v => {
		v.personagens.push(lutador)
		v.personagens.push(atirador) 
		v.personagens.push(feiticeiro) 
		return v;
	})

	player2.update(v => {
		v.personagens.push(p4)
		v.personagens.push(p5)
		v.personagens.push(p6)
		return v;
	})

	function funcoes(e) {
			selecionar(e);
			seletorMovimento(e);
			mover(e);
			xuxu(e)
			combate(e)

	}

	
	let xy = 128 // tamanho das celulas e do seletor
	let linhas = 8
	let colunas = 9
	let mapa = Array(linhas).fill(null).map(() => Array(colunas).fill(null));

	function cellPos(linha, coluna) {
		return function	() {
			console.log(`Posição da célula (${coluna}, ${linha})`); // função para mostrar coordenada da celula
		}
	}

	let seletor = true;
	let seletorimg = '/public/imagens/seletor.png'
	let seletorimg2 = '/public/imagens/select.png'
	let seletorTop = 3;
  	let seletorLeft = 3;

	let passo = 1; 

	function seletorMovimento(e) {

			if(seletor){
			console.log('inv', inverso)
			console.log(pRef)
			seletorimg = '/public/imagens/seletor.png'
				
				switch (e.keyCode) {
				case 38: // Seta para cima
					if (seletorTop - passo > 0){
						seletorTop -= passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;

				case 40: // Seta para baixo
					if (seletorTop + passo <= passo * linhas - 2){
						seletorTop += passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;


				case 37: // Seta para a esquerda
					if (seletorLeft - passo > 0){
						seletorLeft -= passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;

				case 39: // Seta para a direita
					if (seletorLeft + passo <= passo * colunas - 2){
						seletorLeft += passo;
						console.log(`X: ${seletorLeft} Y: ${seletorTop}`)
					}
				break;

  			}}

}	

	let pRef;
	
	// @ts-ignore
	// @ts-ignore
	let perAtq;
	// @ts-ignore
	// @ts-ignore
	let perAlvo;

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

	let positions = [
		[], [], [], [], [], []
	]

	
	

	atirador.subscribe(value => {
		positions[0][0] = value.top
		positions[0][1] = value.left

		atiradorTop = value.top
		atiradorLeft = value.left
		atiradorSelecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]
		return value
	})

	console.log($atirador.alcance)

	lutador.subscribe(value => {
		positions[1][0] = value.top
		positions[1][1] = value.left


		lutadorTop = value.top
		lutadorLeft = value.left
		lutadorSelecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]

		return value
	})

	feiticeiro.subscribe(value => {
		positions[2][0] = value.top
		positions[2][1] = value.left


		feiticeiroTop = value.top
		feiticeiroLeft = value.left
		feiticeiroSelecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]

		return value
	})

	p4.subscribe(value => {
		positions[3][0] = value.top
		positions[3][1] = value.left

		p4Top = value.top
		p4Left = value.left
		p4Selecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]
		
		return value
	})

	p5.subscribe(value => {
		positions[4][0] = value.top
		positions[4][1] = value.left

		p5Top = value.top
		p5Left = value.left
		p5Selecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]
		
		return value
	})

	p6.subscribe(value => {
		positions[5][0] = value.top
		positions[5][1] = value.left

		p6Top = value.top
		p6Left = value.left
		p6Selecionado = value.selecionado

		value.alcance = [
			[[(value.top - 1), value.left - 1], [(value.top - 1), value.left], [(value.top - 1), value.left + 1]],
			[[value.top, (value.left - 1)], [value.top, value.left], [value.top, (value.left + 1)]],
			[[(value.top + 1), value.left - 1], [(value.top + 1), value.left], [(value.top + 1), value.left + 1]]
		]
		
		return value
	})

	
	let p1;
			let p2;

	function xuxu(e){
		if(e.keyCode == 88 ){
			

			if(turnoGlobal == 'ataque' && $player1.turno == 'ataque'){

				$player1.personagemSelecionado.subscribe(
					v => {
						p1 = v.nome
						return v
					}
				)
			$player1.personagemAlvo.subscribe(
				v => {
					p2 = v.nome
					return v
				}
			) 
			console.log(p1, p2)

			}


	if(turnoGlobal == 'ataque' && $player2.turno == 'ataque'){

					$player2.personagemSelecionado.subscribe(
						v => {
							p1 = v.nome
							return v
						}
					)
				$player2.personagemAlvo.subscribe(
					v => {
						p2 = v.nome
						return v
					}
				) 
				console.log(p1, p2)

				}	else {
					console.log('nao ha personagens selecionados ou não está no turno de ataque')
				}			
				
	}
	}
	
	

	function selecionar(e) { 	
	if(seletor){	

		if(seletorTop === atiradorTop && seletorLeft === atiradorLeft && seletor){
			
			if(e.keyCode == 90){

				if(turnoGlobal == 'Movimento'){
					pRef = atirador
					seletor = false
				}

				else {
					if($player1.turno == 'ataque'){
							$player1.personagemSelecionado = atirador
							console.log('personagem selecionado:', atirador)
					} else {
						$player2.personagemAlvo = atirador
					}
					
				}
				
			}
		}

		 if(seletorTop === lutadorTop && seletorLeft === lutadorLeft){
			if(e.keyCode == 90 ){
				
				if(turnoGlobal == 'Movimento'){
					pRef = lutador
					seletor = false
				}

				else {
					if($player1.turno == 'ataque'){
							$player1.personagemSelecionado = lutador
							console.log('personagem selecionado:', lutador)
					} else {
						$player2.personagemAlvo = lutador
					}
					
				}

			}

		}

		if(seletorTop === feiticeiroTop && seletorLeft === feiticeiroLeft){
			if(e.keyCode == 90 ){
				
				if(turnoGlobal == 'Movimento'){
					pRef = feiticeiro
					seletor = false
				}

				else {
					if($player1.turno == 'ataque'){
						
							$player1.personagemSelecionado = feiticeiro
							console.log('personagem selecionado:', feiticeiro)
						
					} else {
						$player2.personagemAlvo = feiticeiro
					}
					
				}

			}

		}

		if(seletorTop === p4Top && seletorLeft === p4Left){
			if(e.keyCode == 90 ){
				
				if(turnoGlobal == 'Movimento'){
					pRef = p4
					seletor = false
				}

				else {
					if($player2.turno == 'ataque'){
							$player2.personagemSelecionado = p4
							console.log('personagem selecionado:', p4)
					} else {
						$player1.personagemAlvo = p4

						console.log('personagem alvo:', p4)

					}
					
				}
			}

		}

		if(seletorTop === p5Top && seletorLeft === p5Left){
			if(e.keyCode == 90 ){


				if(turnoGlobal == 'Movimento'){
					pRef = p5
					seletor = false
				}

				else {
					if($player2.turno == 'ataque'){
							$player2.personagemSelecionado = p5
							console.log('personagem selecionado:', p5)
					} else {
						$player1.personagemAlvo = p5

						console.log('personagem alvo:', p5)

					}
					
				}

			}

		}

		if(seletorTop === p6Top && seletorLeft === p6Left){
			if(e.keyCode == 90 ){
				
				if(turnoGlobal == 'Movimento'){
					pRef = p6
					seletor = false
				}

				else {
					if($player2.turno == 'ataque'){
							$player2.personagemSelecionado = p6
							console.log('personagem selecionado:', p6)
					} else {
						$player1.personagemAlvo = p6

						console.log('personagem alvo:', p6)

					}
					
				}
			}

		}


		} else if (e.keyCode === 90){
			seletor = true
			pRef = undefined
			inverso = false
			inverso2 = false

			$player1.personagemSelecionado = null
			$player2.personagemSelecionado = null
			$player1.personagemAlvo = null
			$player2.personagemAlvo = null

			p1 = null
			p2 = null
			
		}
	}
	
	let inverso = false
	let inverso2 = false

function mover(e) {

  let pleft = 0;
  let ptop = 0;
  

  if (pRef != undefined) {
    pRef.subscribe(value => {
      pleft = value.left;
      ptop = value.top;
      return value;
    });

	let jogadorAtual = player1


    if ($player1.turno === 'movimento' && $player1.stamina > 0 && $player1.personagens.includes(pRef)) {
      jogadorAtual = player1;
    } else if ($player2.turno === 'movimento' && $player2.stamina > 0 && $player2.personagens.includes(pRef)) {
      jogadorAtual = player2;
    } else {
      return;
    }

    function movePersonagem(top, left) {
      pRef.update(v => {
        v.top += top;
        v.left += left;
        return v;
      });

      jogadorAtual.update(v => {
        v.stamina--;
        return v;
      });

		console.log($pRef.alcance)

    }

	function moveValido(top, left){
			return !positions.some(([ptop, pleft]) => ptop === top && pleft === left)
        
    }

    if (e.keyCode == 38 && ptop - passo > 0) {
		if (moveValido((ptop - 1), pleft)){
			movePersonagem(-passo, 0);

		}

	}	
    if (e.keyCode == 40 && ptop + passo <= passo * linhas - 2) {
		if (moveValido((ptop + 1), pleft)){

    	movePersonagem(passo, 0);
		}
    }
    if (e.keyCode == 37 && pleft - passo > 0) {
		if (moveValido(ptop , (pleft - 1))){
			inverso = true
			inverso2 = false
		movePersonagem(0, -passo);
		}
    }
    if (e.keyCode == 39 && pleft + passo <= passo * colunas - 2) {
		if (moveValido(ptop, (pleft + 1))){
			inverso = false
			inverso2 = true

		movePersonagem(0, passo);
		}
    }
  
}
}


console.log('p1: ',$player1.turno, 'p2: ',$player2.turno, $player1.stamina, $player2.stamina)

let turnoGlobal = 'Movimento'

function proximoTurno() {

  if ($player1.turno === 'movimento') {
    player1.update(v => {
      v.turno = 'ataque';
      return v;
    });
	turnoGlobal = 'Ataque'

} else if ($player1.turno === 'ataque') {
	player1.update(v => {
		v.turno = 'inativo'
		return v
	})
	player2.update(v => {
		v.turno = 'movimento';
		v.stamina = 200
		return v;
	})

	turnoGlobal = 'Movimento'

} else if ($player2.turno === 'movimento') {
	player2.update(v => {
		v.turno = 'ataque'
		return v
	})
	turnoGlobal = 'Ataque'

} else if ($player2.turno === 'ataque') {
	player2.update(v => {
		v.turno = 'inativo'
		return v
	})
	player1.update(v => {
		v.turno = 'movimento'
		v.stamina = 200
		return v
	})
	turnoGlobal = 'Movimento'
}

console.log('p1: ',$player1.turno, 'p2: ',$player2.turno, $player1.stamina, $player2.stamina)

}

function combate(e) {
	let stamina;
	let dados;
	let range;
	let dadosB;
	let location = []
	if(turnoGlobal == 'ataque'){
		if($player1.turno == 'ataque'){

			player1.subscribe(v => {
				stamina = v.stamina
				return v
			})

			if($player1.personagemSelecionado && $player1.personagemAlvo){

				$player1.personagemSelecionado.subscribe(v => {
				dados = v
				range = dados.alcance
				return v
			}) 
				$player1.personagemAlvo.subscribe(v => {
				dadosB = v
				location = [dadosB.top, dadosB.left]
				return v	
			})
				if(e.keyCode == 88){
					if(inRange(range, location)){
						// @ts-ignore
						if(dadosB.vida > 0 && stamina > 0){
								// @ts-ignore
								player1.update(v => {
									v.stamina--
									return v
								})
								console.log(stamina)
								$player1.personagemAlvo.update(v => {
								v.vida -= dados.ataque
								console.log(`${dados.nome} atacou ${dadosB.nome} com ${dados.ataque} pontos de força.`)
								console.log(`${dadosB.nome} possui ${dadosB.vida} pontos de vida.`)
								return v
								})
						}
					}
				}
			}


		} else {

			player2.subscribe(v => {
				stamina = v.stamina
				return v
			})

			if($player2.personagemSelecionado && $player2.personagemAlvo){

				$player2.personagemSelecionado.subscribe(v => {
				dados = v
				range = dados.alcance
				return v
			}) 
				$player2.personagemAlvo.subscribe(v => {
				dadosB = v
				location = [dadosB.top, dadosB.left]
				return v	
			})

			if(e.keyCode == 88){
				console.log(dados)
				console.log(dadosB)
				console.log(stamina)
					if(inRange(range, location)){
						// @ts-ignore
						if(dadosB.vida > 0 && stamina > 0){
								// @ts-ignore
								player2.update(v => {
									v.stamina--
									return v
								})
								console.log(stamina)
								$player2.personagemAlvo.update(v => {
								v.vida -= dados.ataque
								console.log(`${dados.nome} atacou ${dadosB.nome} com ${dados.ataque} pontos de força.`)
								console.log(`${dadosB.nome} possui ${dadosB.vida} pontos de vida.`)
								return v
								})
						}
					}
				}

			}
		}



		function inRange(arr, pos){
			for(let i = 0; i < arr.length; i++){
				for(let j = 0; j < arr[i].length; j++){
					if(arr[i][j][0] == pos[0] && arr[i][j][1] == pos[1]){//return arr.some(item => item[0] === pos[0] && item[1] === pos[1]); nao funciona :(
						return true
					}
				}
			} return false
		} 	
	}
}

			



</script>


