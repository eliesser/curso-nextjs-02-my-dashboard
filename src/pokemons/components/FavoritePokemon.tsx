'use client';

import { useAppSelector } from '@/store/store';
import { PokemonGrid } from './PokemonGrid';

export const FavoritePokemon = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons));
  return <PokemonGrid pokemons={pokemons} />;
};
