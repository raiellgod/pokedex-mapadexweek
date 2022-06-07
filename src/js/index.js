/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1- listagem
2 - cartao do pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usúario na listagem de pokemons

- remover a classe aberto só do cartao que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartao mostrar 
- remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/
/*
titulo: site
data 25/4/22
Autor: Raiel Godinho
*/

// precismaos crirar variaveis no JS pra trabalhar com os elementos da tel
const listaSecaopokemons =  document.querySelectorAll(".Pokemon")
const pokemonscard = document.querySelectorAll("cartao-pokemon")

listaSecaopokemons.forEach(Pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usúario na listagem de pokemons

    Pokemon.addEventListener("click", () => {  
    // - remover a classe aberto só do cartao que está aberto     
    const cartaoPokemonAberto = document.querySelector(".aberto")
    cartaoPokemonAberto.classList.remove('aberto') 
    // - ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartao mostrar 
    const idPokemonSelecionado = Pokemon.attributes.id.value
    
    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add("aberto")

    // - remover a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    console.log(pokemonAtivoNaListagem.classList )
    pokemonAtivoNaListagem.classList.remove("ativo")

    // -adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaLiStagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaLiStagem.classList.add("ativo")
    })
})
