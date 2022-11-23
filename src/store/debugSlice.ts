import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

interface DebugState {
  on: boolean;
}

const initialState: DebugState = {
  on: true
};

export const debugSlice = createSlice({
  name: 'debug',
  initialState,
  reducers: {
    toggle: (state) => {
      state.on = !state.on;
    },
    turnOn: (state) => {
      state.on = true;
    },
    turnOff: (state) => {
      state.on = false;
    },
    setDebug: (state, { payload }) => {
      state.on = payload;
    }
  }
});

export const { toggle, turnOn, turnOff, setDebug } = debugSlice.actions;
export const selectDebug = (state: RootState) => state.debug.on;

export default debugSlice.reducer;
