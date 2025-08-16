import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Area from "./Components/Area/Area";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "area", element: <Area /> },
        { path: "details/:id", element: <Details /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
