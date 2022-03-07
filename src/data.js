// estas funciones son de ejemplo
/* eslint-disable no-console */
//import pokemon from './data/pokemon/pokemon.js';
import pokedata from './data/pokemon/pokemon.js';
//Función de arreglo de data
export const allPokemon = () => {
  return pokedata.pokemon;
};
//Función para mostrar x tipos
export const typeFilter = (typeToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.type).includes(typeToFilter));
  console.log(newPokemons)
  return newPokemons;
};
export const weaknessFilter = (weaknessToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.weaknesses).includes(weaknessToFilter));
  console.log (newPokemons)
  return newPokemons;
};
export const resistanceFilter = (resistanceToFilter,pokemons)=>{
  console.log(pokemons)
  let newPokemons=pokemons.filter(pokemon=>(pokemon.resistant).includes(resistanceToFilter));
  console.log(newPokemons)
  return newPokemons;
};
//Función para ordenar A-Z
export const sortAlphabetically = (pokemons) => {
  pokemons.sort((a, b) => a.name.localeCompare(b.name));
  return pokemons;
};
//Función para ordenar por número descendente
export const sortByNumber = (pokemons) => {
  pokemons.sort((a,b)=>a.num.localeCompare(b.num));
  return pokemons;
};
/* //Función para ordenar por frecuencia de aparición
export const sortBySpawnChance = (pokemons) => {
  pokemons.sort((a,b)=>(a['spawn-chance']).localeCompare(b(['spawn-chance'])));
  return pokemons; 
};   */
//Función de búsqueda por buscador
export const pokemonFind = (pokemonToSearch, pokemons) =>{
  let pokeFind = pokemons.filter(pokemon=>(pokemon.name).includes(pokemonToSearch));
  console.log(pokeFind);
  return pokeFind;
};

//Función de calculo de stats
/* export const dataCalculation = (pokemonToCalculate) => {
  let stats
} */