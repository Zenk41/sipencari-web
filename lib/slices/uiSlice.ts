import { createSlice } from "@reduxjs/toolkit";

// Function to check if localStorage is available
const isLocalStorageAvailable = () => {
  try {
    const testKey = "__test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

// Initial state setup
const initialState = {
  isDarkMode: isLocalStorageAvailable() ? 
    (localStorage.getItem("isDarkMode") !== null ? JSON.parse(localStorage.getItem("isDarkMode") as any) : false) 
    : false
};

// Create slice
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (isLocalStorageAvailable()) {
        localStorage.setItem("isDarkMode", state.isDarkMode);
      }
    },
  },
});

// Export actions and reducer
export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;
