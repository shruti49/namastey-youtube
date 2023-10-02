import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    progress: 0,
  },
  reducers: {
    setLoadingBarProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { setLoadingBarProgress } = loaderSlice.actions;
export default loaderSlice.reducer;
