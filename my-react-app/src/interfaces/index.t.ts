export interface LoginFormTypes {
  correoElectronico: string;
  contraseña: string;
}

export interface RegisterFormTypes {
  correoElectronico: string;
  contraseña: string;
  apellido: string;
  nombreUsuario: string;
}
export interface RecipeAddFormTypes {
  nombreReceta: string;
  instruccionesPreparacion: RecipeStepTypes[];
  ingredientes: IngredientInputTypes[];
  url: Blob | null;
  urlVideo: string;
}

export interface RecipeStepTypes {
  id: string;
  description: string;
}

export interface RecipeToDB {
  nombreReceta: string;
  instruccionesPreparacion: string;
  ingredientes: {
    ingredienteId: number;
    cantidad: number;
    unidadMedida: string;
  }[];
  test: string;
  test2: string;
  usuarioId: number;
}

export interface IngredientData {
  ingredienteId: number;
  nombreIngrediente: string;
}

export interface IngredientInputTypes {
  ingredienteId: number;
  nombreIngrediente: string;
  cantidad: number;
  unidadMedida: string;
}

export interface RecipeData {
  instruccionesPreparacion: string;
  nombreReceta: string;
  recetaId: number;
  test: string;
  test2: string;
  usuario: {
    apellido: string;
    nombreUsuario: string;
    usuarioId: number;
  };
  ingredientes: IngredientInputTypes[];
}

export interface FiltersRecipe {
  query: string;
  ingredients: IngredientData[];
}
