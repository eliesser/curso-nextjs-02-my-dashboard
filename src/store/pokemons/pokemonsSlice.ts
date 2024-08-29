import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = () => {
  let favoritesPokemons;

  if (typeof localStorage === 'undefined') return {};

  favoritesPokemons = JSON.parse(
    localStorage.getItem('favoritesPokemons') ?? '{}'
  );

  return favoritesPokemons;
};

const initialState: PokemonsState = {
  ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
