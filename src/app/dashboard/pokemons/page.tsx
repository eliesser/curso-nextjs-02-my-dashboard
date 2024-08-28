import { Metadata } from 'next';

import { SimplePokemon, PokemonsResponse, PokemonGrid } from '@/pokemons';

export const metadata: Metadata = {
  title: '151 Pokemons',
  description: 'Generated 151 Pokemons',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const pokemonsResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = pokemonsResponse.results.map((pokemon) => {
    return {
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    };
  });

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        List Pokemon <small>static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
