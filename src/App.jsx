import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage, Body, CountryPage } from "./components/index";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: ":name",
        element: <CountryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
