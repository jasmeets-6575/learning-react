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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
