import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuStatus: "",
    componentName: "",
  },
  reducers: {
    setComponentName: (state, actions) => {
      state.componentName = actions.payload;
    },
    toggleMenu: (state, actions) => {
      switch (actions.payload) {
        case "full":
          state.menuStatus = "full";
          break;

        case "short":
          state.menuStatus = "short";
          break;

        default:
          state.menuStatus = "close";
          break;
      }
    },
  },
});

export const { toggleMenu, setComponentName } = appSlice.actions;
export default appSlice.reducer;
