import {
  FiltersRecipe,
  LoginFormTypes,
  RecipeAddFormTypes,
  RegisterFormTypes,
} from "./index.t";

export const initialValuesLoginForm: LoginFormTypes = {
  contraseña: "",
  correoElectronico: "",
};

export const initialValuesRegisterForm: RegisterFormTypes = {
  nombreUsuario: "",
  apellido: "",
  contraseña: "",
  correoElectronico: "",
};

export const initialValuesRecipeForm: RecipeAddFormTypes = {
  nombreReceta: "",
  instruccionesPreparacion: [],
  ingredientes: [],
  url: null,
  urlVideo: "",
};

export const initialValuesFiltersRecipe: FiltersRecipe = {
  ingredients: [],
  query: "",
};
