import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Homelayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
