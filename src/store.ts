// Libraries
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import menuReducer from "./features/menu/menuSlice.tsx";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
