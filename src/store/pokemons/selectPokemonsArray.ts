import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectPokemonsState = (state: RootState) => state.pokemons;

export const selectPokemonsArray = createSelector(
  [selectPokemonsState],
  (pokemonsState) => Object.values(pokemonsState)
);
