import {
  IngredientInputTypes,
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
