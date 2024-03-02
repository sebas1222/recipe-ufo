import { initialValuesRecipeForm } from "../../interfaces/initials";
import { RecipeAddFormTypes, RecipeStepTypes } from "../../interfaces/index.t";
import TextInputList from "../TextInputList";
import { useState } from "react";
import InputImage from "../InputImage";
import Input from "../Input";
import Button from "../Button";
import { recipeFormToDB, uploadImageCloudinary } from "../../helpers";
import "./index.scss";
import AccountRecipeService from "../../api/recipes";
import { useUserTokenState } from "../../store/userToken";

const RecipeForm = () => {
  const [form, setForm] = useState<RecipeAddFormTypes>(initialValuesRecipeForm);
  const userId = useUserTokenState((state) => state.userToken);
  const handleSubmitRecipe = async () => {
    console.log(form);
    if (form.url) {
      const url = await uploadImageCloudinary(form.url);
      await AccountRecipeService.createRecipe(
        recipeFormToDB({ ...form, url, usuarioId: Number(userId) })
      );
    }
  };
  const handleChangeForm = (
    field: string,
    value: string | Blob | RecipeStepTypes[]
  ) => {
    setForm({ ...form, [field]: value });
  };
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
        <TextInputList
          placeholderForTextInput="Paso a agregar"
          textInputData={form.instruccionesPreparacion}
          handleChangeData={(steps) =>
            handleChangeForm("instruccionesPreparacion", steps)
          }
          textAddBtn="Agregar paso +"
        />
      </div>
      <InputImage
        value={form.url}
        onChange={(image) => handleChangeForm("url", image)}
      />
      <Button text="Subir receta" onClick={handleSubmitRecipe} />
    </form>
  );
};

export default RecipeForm;
