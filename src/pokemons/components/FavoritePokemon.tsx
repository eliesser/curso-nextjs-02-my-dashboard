'use client';

import { useAppSelector } from '@/store/store';
import { PokemonGrid } from './PokemonGrid';
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemon = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons));
  const [favoritePokemons, setFavoritePokemons] = useState(pokemons);

  return (
    <>{favoritePokemons.length ? <PokemonGrid pokemons={favoritePokemons} /> : <NoFavorites />}</>
  );
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' /> <span>No favorites</span>
    </div>
  );
};
