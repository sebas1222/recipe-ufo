import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import { APP_ROUTER_CONFIG } from "./config";

export const router = createBrowserRouter([
  {
    path: APP_ROUTER_CONFIG["home"].path,
    element: <HomePage />,
  },
]);
