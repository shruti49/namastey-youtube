import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import store from "./utils/redux/store";

import { setLoadingBarProgress } from "./utils/redux/loaderSlice";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/SearchResults";
import WatchPage from "./components/WatchPage";
import Header from "./components/Header";
import Body from "./components/Body";
import Demo from "./components/Demo";
import "./App.css";

const Layout = () => {
  const progress = useSelector((store) => store.loader.progress);
  const dispatch = useDispatch();

  return (
    <>
      <LoadingBar
        progress={progress}
        onLoaderFinished={() => dispatch(setLoadingBarProgress(0))}
      />
      <Header />
      <Body />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRoute} />
    </Provider>
  );
}

export default App;
