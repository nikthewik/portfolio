// Libraries
import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = initialState.isOpen;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
