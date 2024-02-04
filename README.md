
# Códigos Celestiais

Este é um browser-game desenvolvido em Javascript, como projeto de conclusão da matéria 'Lógica de programação e estrutuda de dados' do curso técnico 'INFORMÁTICA PARA INTERNET' do IFPE.

![](https://64.media.tumblr.com/593b2a6404a2a9260143a41d77092740/c20ed9f3fef789d9-53/s640x960/a2f281ebb643f53bb3aefe86d64562f105917cb7.pnj)
## Como funciona

Códigos Celestiais é um jogo 1v1 local, ou seja, os dois jogadores jogam no mesmo computador.

Cada jogador controla 3 personagens, ganha aquele que derrotar todos os personagens do adversário.

Cada jogador possui 2 turnos: movimentação e ataque.

![](https://64.media.tumblr.com/0ee3c84a1fcb4e23e5b7248d38f3ff1d/98b022a04afa8fae-31/s1280x1920/da26b3488f9d4d847e9bfbb031dad7fe429974df.jpg)
## Controles

Os 2 jogadores compartilham do mesmo teclado, como é um jogo de turno, cada jogador deve esperar seu turno para jogar.

A movimentação, ataque, e troca de turno se dão pelas teclas, respectivamente:

**'Arrows'** (setas): movimentam o seletor, ou o personagem selecionado (se estiver no turno de movimentação).

**'Z'**: Seleciona o personagem, tanto para movimenta-lo, ou para selecionar como alvo no turno de ataque.

**'X'**: Ataca o Personagem selecionado no turno de ataque.

**'C'**: Finaliza seu turno.
## Energia

Cada jogador possui 8 energias, e que devem ser usadas com inteligência, pois elas so recarregam no fim do turno do oponente.

Movimentar um personagem para uma casa/direção gasta 1 de energia, e não é recuperada caso o personagem retroceda para a casa anterior.

Atacar gasta 2 de energia e dá 2 de dano.
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/JulioLeandro12/Codigos-Celestiais.git
```

Entre no diretório do projeto

```bash
  cd Codigos-Celestiais
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run dev
```


## Stack utilizada

**Framework front-end:** Svelte
+ Desenvolvimento rápido e eficiente de interfaces do usuário.
+ Reatividade declarativa e eficiente.
+ Compilação para código JavaScript otimizado.

**Estilização:** 
+ CSS puro.
+ Aseprite para criação dos sprites.


## Aprendizados

Desenvolvemos esse jogo ainda no primeiro período do curso, onde não dominavamos totalmente tudo que utilizamos. Foi um grande desafio ter que aprender como funciona a reatividade do Javascript e como ela é aplicada juntamente com o Svelte.


## Autores

- Rafael Paulo [@fwrw](https://www.github.com/fwrw)
- Julio Leandro [@JulioLeandro12](https://www.github.com/JulioLeandro12)
- Izes Stella [@IzesStella](https://www.github.com/IzesStella)
- Jobson Rafael [@jbrafael](https://www.github.com/jbrafael)

