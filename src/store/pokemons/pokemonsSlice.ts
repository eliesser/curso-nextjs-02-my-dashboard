import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const getInitialState = () => {
  let favoritesPokemons;

  favoritesPokemons = JSON.parse(
    localStorage.getItem('favoritesPokemons') ?? '{}'
  );

  return favoritesPokemons;
};

const initialState: PokemonsState = {
  //...getInitialState(),
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        'favoritesPokemons',
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
