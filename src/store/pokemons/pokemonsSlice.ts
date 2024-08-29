import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = () => {
  let favoritesPokemons;

  if (typeof window !== 'undefined')
    favoritesPokemons = JSON.parse(
      localStorage.getItem('favoritesPokemons') ?? '{}'
    );

  return favoritesPokemons;
};

const initialState: PokemonsState = {
  ...getInitialState(),
  /* '1': { id: '1', name: 'bulbasaur' },
  '2': { id: '2', name: 'ivysaur' },
  '3': { id: '3', name: 'venusaur' }, */
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

      localStorage.setItem('favoritesPokemons', JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
