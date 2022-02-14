// estas funciones son de ejemplo
/* eslint-disable no-console */
import pokedata from './data/pokemon/pokemon.js';
//Función de arreglo de data
export const allPokemon = () => {
  return pokedata.pokemon;
};
//Función para mostrar tipos
export const poketypes = (pokemons)=>{
  const types=pokemons.pokemon.type;
  let singleTypes = [];
  for (let i=0;i<types.length;i++){
    if(!singleTypes.includes(types[i])){
      singleTypes.push(types[i])
    }
  }return singleTypes
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
}
