import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import BookDetails from "./pages/BookDetails";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { getBooks } from "./util";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: getBooks },
      { path: "books/:bookId", element: <BookDetails /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
