import { allPokemon, sortAlphabetically, sortByNumber, typeFilter , pokemonFind, resistanceFilter, weaknessFilter} from '../src/data.js';
import data from '../src/data/pokemon/pokemon';
const pokemons = data.pokemon

describe('allPokemon', () => {
  it('is a function', () => {
    expect(typeof allPokemon).toBe('function');
  });
  it('el array allPokemon contiene 251 pokemones', () => {
    expect(allPokemon()).toHaveLength(251);
  }); 
});  

describe('sortAlphabetically', () => {
  it('is a function', () => {
    expect(typeof sortAlphabetically).toBe('function');
  }),
  it('returns pokemons in alphabetical order', () => {
    expect(sortAlphabetically(pokemons)).toHaveLength(251);
  });  
});

describe('sortByNumber', () => {
  it('is a function', () => {
    expect(typeof sortByNumber).toBe('function');
  });
  it('returns array de 251 objetos',()=>{
    expect(sortByNumber(pokemons)).toHaveLength(251);
  });
/*   it('returns ``', () => {
    const pokes = {
      a: {
        "num": "001",
        "name": "bulbasaur"
      },
      b: {
        "num": "004",
        "name": "charmander"
      }
    };
    expect(sortByNumber(pokes)).toBe(pokes.b,pokes.a);
  }); */
});

describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });

  it('returns un array de 17 elementos al filtrar "electric"', () => {
    expect(typeFilter('electric',pokemons)).toHaveLength(17);
  });
});

describe('pokemonFind', () => {
  it('is a function', () => {
    expect(typeof pokemonFind).toBe('function');
  });
  it('returns caterpie by searching cat', () => {
    expect(pokemonFind('cater',pokemons)).toMatchObject([{num: '010', name: 'caterpie'}]);
  }); 
});

describe('resistanceFilter', () => {
  it('is a function', () => {
    expect(typeof resistanceFilter).toBe('function');
  });
  it('es un arreglo de 28 objetos', () => {
    expect(resistanceFilter ('normal', pokemons)).toHaveLength(28);
  });
});

describe('weaknessFilter', () => {
  it('is a function', () => {
    expect(typeof weaknessFilter).toBe('function');
  });
  it('es un arreglo de 54 objetos', () => {
    expect(weaknessFilter ('fire', pokemons)).toHaveLength(54);
  });
});