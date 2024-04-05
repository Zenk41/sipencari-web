import { createSlice } from '@reduxjs/toolkit';

interface UISliceState {
  darkMode: boolean;
}

const initialState: UISliceState = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;