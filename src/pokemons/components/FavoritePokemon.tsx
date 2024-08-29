'use client';
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store/store';
import { PokemonGrid } from './PokemonGrid';
import { selectPokemonsArray } from '@/store/pokemons/selectPokemonsArray';

export const FavoritePokemon = () => {
  const favoritePokemons = useAppSelector(selectPokemonsArray);
  /* const [pokemons, setPokemons] = useState(favoritePokemons);

  useEffect(() => {
    setFavoritePokemons(pokemons);
  }, [pokemons]); */

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
