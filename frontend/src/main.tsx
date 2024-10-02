import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./pages/categories";
import TopMovies from "./pages/TopMovies";
import Navbar from "./components/Navbar.tsx";
import MoviesCategories from "./pages/MoviesCategories.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: (
      <>
        <Navbar />
        <Categories />
      </>
    ),
  },
  {
    path: "/topmovies",
    element: (
      <>
        <Navbar />
        <TopMovies />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/categories/:categorie",
    element: (
      <>
        <Navbar />
        <MoviesCategories />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
