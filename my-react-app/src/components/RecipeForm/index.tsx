import { initialValuesRecipeForm } from "../../interfaces/initials";
import {
  IngredientData,
  RecipeAddFormTypes,
  RecipeStepTypes,
} from "../../interfaces/index.t";
import TextInputList from "../TextInputList";
import { useState } from "react";
import InputImage from "../InputImage";
import Input from "../Input";
import Button from "../Button";
import { recipeFormToDB, uploadImageCloudinary } from "../../helpers";
import "./index.scss";
import AccountRecipeService from "../../api/recipes";
import { useUserTokenState } from "../../store/userToken";
import IngredientstInputList from "../IngredientstInputList";
import IngredientInput from "../IngredientInput";

const RecipeForm = () => {
  const [form, setForm] = useState<RecipeAddFormTypes>(initialValuesRecipeForm);
  const userId = useUserTokenState((state) => state.userToken);
  const handleSubmitRecipe = async () => {
    console.log(form);
    if (form.url) {
      const url = await uploadImageCloudinary(form.url);
      const dataToSend = recipeFormToDB({
        ...form,
        url,
        usuarioId: Number(userId),
      });
      await AccountRecipeService.createRecipe(dataToSend);
    }
  };
  const handleChangeForm = (
    field: string,
    value: string | Blob | RecipeStepTypes[]
  ) => {
    setForm({ ...form, [field]: value });
  };
  const handleAddIngredient = (ingredientToAdd: IngredientData) => {
    if (
      !form.ingredientesPreparacion.some(
        (ingredient) =>
          ingredient.ingredienteId === ingredientToAdd.ingredienteId
      )
    ) {
      setForm({
        ...form,
        ingredientesPreparacion: [
          ...form.ingredientesPreparacion,
          {
            ...ingredientToAdd,
            cantidad: 1,
            unidadMedida: "",
          },
        ],
      });
    }
  };

  const handleChangeMeasureIngredient = (value: number, id: number) => {
    setForm({
      ...form,
      ingredientesPreparacion: form.ingredientesPreparacion.map((ingredient) =>
        ingredient.ingredienteId === id
          ? { ...ingredient, cantidad: value }
          : ingredient
      ),
    });
  };
  const handleChangeUnityIngredient = (value: string, id: number) => {
    setForm({
      ...form,
      ingredientesPreparacion: form.ingredientesPreparacion.map((ingredient) =>
        ingredient.ingredienteId === id
          ? { ...ingredient, unidadMedida: value }
          : ingredient
      ),
    });
  };
  console.log(form);
  return (
    <form>
      <div className="recipe--form--primary--info">
        <Input
          type="text"
          placeholder="Nombre de la receta"
          value={form.nombreReceta}
          onChange={(name) => handleChangeForm("nombreReceta", name)}
          name="nombreReceta"
        />
        <InputImage
          value={form.url}
          onChange={(image) => handleChangeForm("url", image)}
        />
      </div>
      <div className="recipe--form--secondary--info">
        <IngredientstInputList onSelect={handleAddIngredient} />
        <div className="ingredients--list--container">
          {form.ingredientesPreparacion.map((ingredient) => {
            return (
              <IngredientInput
                onChangeMeasure={(value, id) =>
                  handleChangeMeasureIngredient(value, id)
                }
                onChangeUnity={(value, id) =>
                  handleChangeUnityIngredient(value, id)
                }
                key={ingredient.ingredienteId}
                ingredientInfo={ingredient}
              />
            );
          })}
        </div>
        <TextInputList
          placeholderForTextInput="Paso a agregar"
          textInputData={form.instruccionesPreparacion}
          handleChangeData={(steps) =>
            handleChangeForm("instruccionesPreparacion", steps)
          }
          textAddBtn="Agregar paso +"
        />
      </div>
      <Button text="Subir receta" onClick={handleSubmitRecipe} />
    </form>
  );
};

export default RecipeForm;
