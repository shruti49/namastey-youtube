import store from "./redux/store";
import { setLoadingBarProgress } from "./redux/loaderSlice";

export const beginTheBar = () => {
  let i = Math.floor(Math.random() * 40) + 10
  store.dispatch(setLoadingBarProgress(i))
}

export const endTheBar = () => {
  store.dispatch(setLoadingBarProgress(100))
}