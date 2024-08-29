'use client';

import { Provider } from 'react-redux';

import { store } from './store';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemons/pokemonsSlice';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favoritesPokemons') ?? '{}');

    store.dispatch(setFavoritePokemons(favoritesPokemons));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
