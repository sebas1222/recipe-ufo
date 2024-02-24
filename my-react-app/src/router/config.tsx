type RouterProps = {
  path: string;
  label: string;
};
type AppRouterTypes = {
  [key: string]: RouterProps;
};

export const APP_ROUTER_CONFIG: AppRouterTypes = {
  home: {
    path: "/",
    label: "Inicio",
  },
  recipes: {
    path: "/recipes",
    label: "Recetas",
  },
};
