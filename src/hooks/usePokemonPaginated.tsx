import {useEffect, useRef} from 'react';
import {pokemonApi} from '../api/PokemonApi';

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemon = async () => {
    const res = await pokemonApi.get(nextPageUrl.current);
    console.log(res);
  };

  useEffect(() => {
    loadPokemon();
  }, []);
};
