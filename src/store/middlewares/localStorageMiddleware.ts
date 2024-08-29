import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      const pokemons = state.getState() as RootState;
      localStorage.setItem('favoritesPokemons', JSON.stringify(pokemons));
      return;
    }
  };
};
