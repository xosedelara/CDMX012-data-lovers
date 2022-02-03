/* eslint-disable no-console */
import * as data from './data.js';

//secciones para retornar info:
// const pokemonImage=document.getElementById(pokemonImage);
// const pokemonName=document.getElementById(pokemonName);
// const pokemonInfo=document.getElementById(pokemonInfo);

/* document.getElementById("pokemonName").innerText= data.allPokemon()[150].name
document.getElementById("pokemonInfo").innerText= data.allPokemon()[150].about
document.getElementById("pokemonImage").src = data.allPokemon()[150].img */
const allPokemon =data.allPokemon ()

const showCards = (pokemons) =>{
    const pokemonSection = document.createElement ('section')
    /* for (let i=0; i <= pokemons.length; i++)
    pokemons[i].name */
for (const pokemon of pokemons) {
    const pokemonCard = document.createElement ('article')
    const pokemonName = document.createElement ('h2')
    const pokemonInfo = document.createElement ('p')
    const pokemonImage = document.createElement ('img')
    pokemonName.textContent = pokemon.name
    pokemonInfo.textContent =pokemon.about
    pokemonImage.src=pokemon.img
    pokemonCard.appendChild (pokemonName)
    pokemonCard.appendChild (pokemonImage)
    pokemonCard.appendChild (pokemonInfo)
    pokemonSection.appendChild (pokemonCard)
}
return pokemonSection
}

document.getElementById ('root').appendChild(showCards(allPokemon))












console.log(data.allPokemon());
