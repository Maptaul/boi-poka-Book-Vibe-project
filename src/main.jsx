import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetails from "./Components/BookDetails/BookDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import ErrorPage from "./Components/Error/ErrorPage";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import Root from "./Components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"), //do not load all the book for one book
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
        //worst way to load data
        loader: () => fetch("/booksData.json"), //do not load all book for some
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
