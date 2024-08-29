import { Metadata } from 'next';

import { FavoritePokemon } from '@/pokemons';

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Generated 151 Pokemons',
};

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        List Favorites Pokemon <small className='text-blue-500'>Global State</small>
      </span>

      <FavoritePokemon />
    </div>
  );
}
