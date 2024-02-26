import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import { APP_ROUTER_CONFIG } from "./config";
import RecipesPage from "../pages/Recipes";

export const router = createBrowserRouter([
  {
    path: APP_ROUTER_CONFIG["home"].path,
    element: <HomePage />,
  },
  {
    path: APP_ROUTER_CONFIG["recipes"].path,
    element: <RecipesPage />,
  },
]);
