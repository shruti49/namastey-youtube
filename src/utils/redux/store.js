import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";

import { videosApi } from "./apiService";
import searchSlice from "./searchSlice";
import loaderSlice from "./loaderSlice";
import chatSlice from "./chatSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [videosApi.reducerPath]: videosApi.reducer,
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    loader: loaderSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
