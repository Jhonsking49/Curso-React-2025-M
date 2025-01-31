// importaciones

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritesPage from "../pages/FavouritesPage";
import Home from "../pages/Home";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import SearchPage from "../pages/SearchPage";
import { ROUTES } from "./path";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME, // "/"
        element: <Home />,
      },
      {
        path: ROUTES.SEARCH, //"/search"
        element: <SearchPage />,
      },
      {
        path: ROUTES.FAVORITES, //"/favorites"
        element: <FavoritesPage />,
      },
      {
        path: ROUTES.POKEMON_DETAIL, //"/search"
        element: <PokemonDetailPage />,
        errorElement: <ErrorPage />,
        //loader: // el loader permite hacer un fetch
        // directamente en la ruta
        loader: async ({ params }) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
          if(!response.ok) {
            throw new Error("Pokemon not found");
          }
          return await response.json();
        },
      },
      {
        path: ROUTES.ABOUT, //"/about"
        element: <AboutPage />,
      },
    ],
  },
]);