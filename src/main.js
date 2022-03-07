/* eslint-disable no-console */
import * as data from './data.js';
//import Chart from 'chart.js/auto';
//import pokemon from './data/pokemon/pokemon.js';

//Constante de data de todos los pokemones
const allPokemon =data.allPokemon ()
const root = document.getElementById('root');
const typeSelect=document.getElementById("typeSelect");
const weaknessSelect = document.getElementById("weaknessSelect");
const resistSelect = document.getElementById("resistSelect");
const pokemonSearch = document.getElementById('topBarSearch');
//const interactiveCards = document.getElementsByTagName('article');
//let pokemonToShow=[];
//const modal = document.getElementById('modalContainer');
/* let modalC = document.getElementById('modalContent')
const close = document.getElementById('closeModal'); */

// const modalPokemon = document.getElementById("modalCobtainer")
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
        pokemonCard.setAttribute ('id',pokemon.num)
        pokemonCard.setAttribute ('class', pokemon.type)
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
root.appendChild(showCards(allPokemon))

//Interaccion con tarjetas
/* for (let interactiveCard of interactiveCards) {
    interactiveCard.addEventListener('click', (e) => {
        pokemonToShow = e.target.id
        root.innerHTML = '';
        root.appendChild(showStats(pokemonToShow,allPokemon))
        return false
    });

} */

//Función para imprimir en pantalla los stats de pokemones
/* const showStats = (pokemonToShow,pokemons) =>{
    const pokedexSection = document.createElement('section');
    const pokedexArticle = document.createElement('article')
    const pokedexTitle = document.createElement('h1');
    const pokedexData = document.createElement('div');
    pokedexTitle.innerText = pokemonToShow
    pokedexData.innerHTML = '<canvas id="myChart"></canvas>'
    pokedexSection.appendChild = pokedexArticle
    pokedexArticle.appendChild = pokedexTitle
    pokedexArticle.appendChild = pokedexData
    root.appendChild(pokedexSection)
} 
 */
//Funcionalidad boton ordenar de A a Z
document.getElementById('sortAToZ').addEventListener('click', () => {
    root.innerHTML = '';
    root.appendChild(showCards(data.sortAlphabetically(allPokemon)));
});

//Funcionalidad boton ordenar de Z a A
document.getElementById('sortZToA').addEventListener('click', () => {
    root.innerHTML = '';
    root.appendChild(showCards(data.sortAlphabetically(allPokemon).reverse()));
});

//Funcionalidad botón ordenar x num descendente
document.getElementById('sortByNum').addEventListener('click', ()=>{
    root.innerHTML = '';
    root.appendChild(showCards(data.sortByNumber(allPokemon).reverse()));
});

//Función al botón del menu para tipos
typeSelect.addEventListener('change', (e)=>{
    let typeToFilter = e.target.value;
    root.innerHTML='';
    root.appendChild(showCards(data.typeFilter(typeToFilter,allPokemon)));
});
weaknessSelect.addEventListener('change', (e)=>{
    let weaknessToFilter = e.target.value;
    root.innerHTML='';
    root.appendChild(showCards(data.weaknessFilter(weaknessToFilter,allPokemon)));
});
resistSelect.addEventListener('change', (e)=>{
    let resistanceToFilter = e.target.value;
    root.innerHTML='';
    root.appendChild(showCards(data.resistanceFilter(resistanceToFilter,allPokemon)));
});

//Función de buscador
pokemonSearch.addEventListener('keyup',(e)=>{
    let pokemonToSearch = e.target.value.toLowerCase();
    root.innerHTML='';
    root.appendChild(showCards(data.pokemonFind(pokemonToSearch, allPokemon)));
});

//Función modal
/* pokemonCard.addEventListener('click', (e)=>{
    e.preventDefault();
    let pokemonToModal = e.target.id;
    modal.style.opacity = "1";
    modal.style.visibility = "1"; */
    //modalContainer.appendChild(data.stats(pokemonToModal));
//}) 