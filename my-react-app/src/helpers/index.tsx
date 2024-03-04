import {
  FiltersRecipe,
  IngredientData,
  IngredientInputTypes,
  RecipeAddFormTypes,
  RecipeData,
  RecipeStepTypes,
  RecipeToDB,
} from "../interfaces/index.t";

const CLOUDINARY_CLOUD_NAME = "dco8fbxso";
const CLOUDINARY_UPLOAD_PRESET = "ml_default";

export const uploadImageCloudinary = async (asset: Blob): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", asset);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const rsp = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const rspJson = await rsp.json();
    return rspJson.secure_url;
  } catch (error) {
    throw Error("Hubo un error al subir la imagen");
  }
};

export const recipeFormToDB = (recipeValues: {
  instruccionesPreparacion: RecipeStepTypes[];
  nombreReceta: string;
  url: string;
  usuarioId: number;
  urlVideo: string;
  ingredientes: IngredientInputTypes[];
}): RecipeToDB => {
  const steps = recipeValues.instruccionesPreparacion.map(
    (step) => step.description
  );
  const ingredients = recipeValues.ingredientes.map((ingredient) => ({
    ingredienteId: ingredient.ingredienteId,
    cantidad: ingredient.cantidad,
    unidadMedida: ingredient.unidadMedida,
  }));

  return {
    instruccionesPreparacion: steps.join("-"),
    nombreReceta: recipeValues.nombreReceta,
    test: recipeValues.url,
    test2: recipeValues.urlVideo,
    usuarioId: recipeValues.usuarioId,
    ingredientes: ingredients,
  };
};

export const filterByIngredients = (
  recipes: RecipeData[],
  filtersIngredients: IngredientData[]
): RecipeData[] => {
  if (filtersIngredients?.length > 0) {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ingredientes.some((ingredient) =>
        filtersIngredients.some(
          (ingredientF) =>
            ingredientF.ingredienteId === ingredient.ingredienteId
        )
      )
    );
    return filteredRecipes;
  } else {
    return recipes;
  }
};

function intersectArrays<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];

  // Tomar el primer array como referencia
  const referenceArray = arrays[0];

  // Filtrar los elementos que están presentes en todos los arrays
  const commonItems = referenceArray.filter((item) =>
    arrays.every((array) => array.includes(item))
  );

  return commonItems;
}

export const filterBySearch = (
  search: string,
  recipes: RecipeData[]
): RecipeData[] => {
  if (search.length > 0) {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.nombreReceta
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
    return filteredRecipes;
  } else {
    return recipes;
  }
};

export const filteredProducts = (
  recipes: RecipeData[],
  filters: FiltersRecipe
): RecipeData[] => {
  const productsByIngredients = filterByIngredients(
    recipes,
    filters.ingredients
  );
  const productsBySearch = filterBySearch(filters.query, recipes);
  const commonRecipes = intersectArrays(
    productsByIngredients,
    productsBySearch
  );
  return commonRecipes;
};

export function emptyFields(formulario: RecipeAddFormTypes): boolean {
  for (const prop in formulario) {
    if (formulario[prop] === null) {
      return true;
    }
    if (formulario[prop].length === 0) {
      return true;
    }
  }
  return false;
}
