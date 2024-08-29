import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  isInit: boolean;
}

const initialState: CounterState = {
  count: 0,
  isInit: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    init(state, action: PayloadAction<number>) {
      if (state.isInit) return;

      state.count = action.payload;
      state.isInit = true;
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;

      state.count--;
    },
    reset: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { init, increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
