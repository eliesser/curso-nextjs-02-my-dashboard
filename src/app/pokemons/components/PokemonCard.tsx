import Link from 'next/link';
import Image from 'next/image';

import { SimplePokemon } from '@/app/pokemons';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
          <Image
            className='w-auto'
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{name}</p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              More info
            </Link>
          </div>
        </div>
        <div className='border-b px-4 py-2 hover:bg-gray-100'>
          <Link className='flex flex-row items-center' href='/account/campaigns'>
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>not a favorite</p>
              <p className='text-xs text-gray-500'>Favorite</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};