// Libraries
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [""],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    toggleTag: (state, action) => {
      if (state.tags.includes(action.payload)) {
        state.tags = [...state.tags.filter((tag) => tag !== action.payload)];
      } else {
        state.tags = [...state.tags, action.payload];
      }
    },
  },
});

export const { toggleTag } = tagsSlice.actions;
export default tagsSlice.reducer;
