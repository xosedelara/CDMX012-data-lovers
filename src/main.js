/* eslint-disable no-console */
import * as data from './data.js';

//Constante de data de todos los pokemones
const allPokemon =data.allPokemon ()
//Función para mostrar Pokemones
const showCards = (pokemons) =>{
    const pokemonSection = document.createElement ('section')
    /* for (let i=0; i <= pokemons.length; i++)
    //pokemons[i].name */
    for (const pokemon of pokemons) {
        const pokemonCard = document.createElement ('article')
        const pokemonName = document.createElement ('h2')
        const pokemonInfo = document.createElement ('p')
        const pokemonImage = document.createElement ('img')
        const pokemonType = document.createElement ('h3')
        pokemonName.textContent = pokemon.name
        pokemonType.textContent = pokemon.type
        pokemonInfo.textContent = pokemon.about
        pokemonImage.src = pokemon.img
        pokemonCard.appendChild (pokemonName)
        pokemonCard.appendChild (pokemonImage)
        pokemonCard.appendChild (pokemonType)
        pokemonCard.appendChild (pokemonInfo)
        pokemonSection.appendChild (pokemonCard)
    }return pokemonSection
    
}
document.getElementById ('root').appendChild(showCards(allPokemon))

//Funcionalidad boton ordenar de A a Z
document.getElementById('sortAToZ').addEventListener('click', () => {
    document.getElementById('root').innerHTML = '';
    document.getElementById ('root').appendChild(showCards(data.sortAlphabetically(allPokemon)));
});

//Funcionalidad boton ordenar de Z a A
document.getElementById('sortZToA').addEventListener('click', () => {
    document.getElementById('root').innerHTML = '';
    document.getElementById ('root').appendChild(showCards(data.sortAlphabetically(allPokemon).reverse()));
});

//Funcionalidad botón ordenar x num descendente
document.getElementById('sortByNum').addEventListener('click', ()=>{
    document.getElementById('root').innerHTML = '';
    document.getElementById('root').appendChild(showCards(data.sortByNumber(allPokemon).reverse()));
});

//Función al botón del menu para tipos
document.getElementById('typeSelect').addEventListener('change', (e)=>{
    let typeToFilter = e.target.value;
    document.getElementById('root').innerHTML='';
    document.getElementById ('root').appendChild(showCards(data.typeFilter(typeToFilter,allPokemon)));
});

/* //Función para mostrar menú de tipos 
const showTypes = (singleTypes) =>{
    const typeSection = document.createElement ('section')
    //for (let i=0; i <= pokemons.length; i++)
    //pokemons[i].name 
    for (const type of singleTypes) {
        const typeCard = document.createElement ('article')
        const pokemonType = document.createElement ('h3')
        pokemonType.textContent = type
        typeCard.appendChild (pokemonType)
        typeSection.appendChild (typeCard)
    }return typeSection
}
document.getElementById ('root').appendChild(showTypes(allPokemon))
//Función para asignar atributos a los botones creados para tipos
 const typeAtributes = (typeSection)=>{

} */