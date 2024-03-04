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
  ingredientesPreparacion: IngredientInputTypes[];
  url: Blob | null;
}

export interface RecipeStepTypes {
  id: string;
  description: string;
}

export interface RecipeToDB {
  nombreReceta: string;
  instruccionesPreparacion: string;
  url: string;
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
