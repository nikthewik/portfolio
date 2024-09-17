// Libraries
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import menuReducer from "./features/menu/menuSlice.tsx";
import tagsReducer from "./features/tags/tagsSlice.tsx";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tags: tagsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
