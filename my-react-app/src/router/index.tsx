import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import { APP_ROUTER_CONFIG } from "./config";
import RecipesPage from "../pages/Recipes";
import CreatePage from "../pages/Create";
import ProtectedRoute from "../components/ProtectedRoute";
import RecipeDetailsPage from "../pages/RecipeDetails";

export const router = createBrowserRouter([
  {
    path: APP_ROUTER_CONFIG["home"].path,
    element: <HomePage />,
  },
  {
    path: APP_ROUTER_CONFIG["recipes"].path,
    element: <RecipesPage />,
  },
  {
    path: APP_ROUTER_CONFIG["create"].path,
    element: <ProtectedRoute component={<CreatePage />} />,
  },
  {
    path: `${APP_ROUTER_CONFIG["recipes"].path}/:recipeId`,
    element: <RecipeDetailsPage />,
  },
]);
