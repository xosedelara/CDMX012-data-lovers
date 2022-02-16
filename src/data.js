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
  return newPokemons;
};
export const weaknessFilter = (weaknessToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.weaknesses).includes(weaknessToFilter));
  return newPokemons;
};
export const resistanceFilter = (resistanceToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.resistant).includes(resistanceToFilter));
  return newPokemons;
};
/* //Función para mostrar x debilidad
export const typeFilter = (typeToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.weakness).includes(typeToFilter));
  return newPokemons;
};
//Función para mostrar por resistencia
export const typeFilter = (typeToFilter,pokemons)=>{
  let newPokemons=pokemons.filter(pokemon=>(pokemon.resistant).includes(typeToFilter));
  return newPokemons;
}; */
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
export const pokemonFind = (pokemonToSearch, pokemons) =>{
  let pokeFind = pokemons.filter(pokemon=>(pokemon.name).includes(pokemonToSearch));
  return pokeFind;
};
