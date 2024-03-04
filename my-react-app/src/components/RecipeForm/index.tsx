import { initialValuesRecipeForm } from "../../interfaces/initials";
import {
  IngredientData,
  RecipeAddFormTypes,
  RecipeStepTypes,
  RecipeToDB,
} from "../../interfaces/index.t";
import TextInputList from "../TextInputList";
import { useState } from "react";
import InputImage from "../InputImage";
import Input from "../Input";
import Button from "../Button";
import { recipeFormToDB, uploadImageCloudinary } from "../../helpers";
import { useUserTokenState } from "../../store/userToken";
import IngredientstInputList from "../IngredientstInputList";
import IngredientInput from "../IngredientInput";
import { useMutation, useQueryClient } from "react-query";
import "./index.scss";
import { toast } from "react-toastify";
import RecipeService from "../../api/recipes";

const RecipeForm = () => {
  const [form, setForm] = useState<RecipeAddFormTypes>(initialValuesRecipeForm);
  const queryClient = useQueryClient();
  const userId = useUserTokenState((state) => state.userToken);
  const { mutate: createRecipe } = useMutation({
    mutationFn: (data: RecipeToDB) => RecipeService.createRecipe(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]),
        toast.success("Receta creada");
    },
  });

  const handleSubmitRecipe = async () => {
    if (form.url) {
      const url = await uploadImageCloudinary(form.url);
      const dataToSend = recipeFormToDB({
        ...form,
        url,
        usuarioId: Number(userId),
      });
      console.log({ dataToSend });
      createRecipe(dataToSend);
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
      !form.ingredientes.some(
        (ingredient) =>
          ingredient.ingredienteId === ingredientToAdd.ingredienteId
      )
    ) {
      setForm({
        ...form,
        ingredientes: [
          ...form.ingredientes,
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
      ingredientes: form.ingredientes.map((ingredient) =>
        ingredient.ingredienteId === id
          ? { ...ingredient, cantidad: value }
          : ingredient
      ),
    });
  };
  const handleChangeUnityIngredient = (value: string, id: number) => {
    setForm({
      ...form,
      ingredientes: form.ingredientes.map((ingredient) =>
        ingredient.ingredienteId === id
          ? { ...ingredient, unidadMedida: value }
          : ingredient
      ),
    });
  };
  const handleDeleteIngredient = (id: number) => {
    setForm({
      ...form,
      ingredientes: form.ingredientes.filter(
        (ingredient) => ingredient.ingredienteId !== id
      ),
    });
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
        <InputImage
          value={form.url}
          onChange={(image) => handleChangeForm("url", image)}
        />
      </div>
      <div className="recipe--form--secondary--info">
        <IngredientstInputList onSelect={handleAddIngredient} />
        <div className="ingredients--list--container">
          {form?.ingredientes.map((ingredient) => {
            return (
              <IngredientInput
                onChangeMeasure={(value, id) =>
                  handleChangeMeasureIngredient(value, id)
                }
                onChangeUnity={(value, id) =>
                  handleChangeUnityIngredient(value, id)
                }
                onDelete={(id) => handleDeleteIngredient(id)}
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
