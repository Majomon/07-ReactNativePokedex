import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/PokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemon = async () => {
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = res.data.next;
    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    pokemonList.map(poke => console.log(poke.name));
  };

  useEffect(() => {
    loadPokemon();
  }, []);
};
