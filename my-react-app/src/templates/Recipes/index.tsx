import { useState } from "react";
import IngredientstInputList from "../../components/IngredientstInputList";
import Input from "../../components/Input";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegSadCry } from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";
import {
  FiltersRecipe,
  IngredientData,
  RecipeData,
} from "../../interfaces/index.t";
import RecipeItem from "../../components/RecipeItem";
import { filteredProducts } from "../../helpers";
import AlertInfo from "../../components/AlertInfo";
import { initialValuesFiltersRecipe } from "../../interfaces/initials";
import "./index.scss";

interface RecipeTemplateProps {
  data: RecipeData[];
}

const RecipesTemplate = ({ data }: RecipeTemplateProps) => {
  const [filters, setFilters] = useState<FiltersRecipe>(
    initialValuesFiltersRecipe
  );

  const handleSelecIngredient = (ingredientToAdd: IngredientData) => {
    if (
      !filters.ingredients.some(
        (ingredient) =>
          ingredient.ingredienteId === ingredientToAdd.ingredienteId
      )
    ) {
      setFilters({
        ...filters,
        ingredients: [...filters.ingredients, ingredientToAdd],
      });
    }
  };

  const handleDeleteIngredient = (id: number) => {
    setFilters({
      ...filters,
      ingredients: filters.ingredients.filter(
        (ingredient) => ingredient.ingredienteId !== id
      ),
    });
  };
  console.log({ filters });

  const filteredRecipes = filteredProducts(data, filters);

  const handleCleanFilters = () => {
    setFilters(initialValuesFiltersRecipe);
  };

  return (
    <div className="recipes--template--main--container">
      <div className="recipes--template--content--container content--container">
        <div className="recipes--template--side--container">
          <strong>Filtrar por ingrediente</strong>
          <IngredientstInputList
            onSelect={(value) => handleSelecIngredient(value)}
          />
          {filters.ingredients && filters.ingredients.length > 0 ? (
            filters.ingredients.map((ingredient) => {
              return (
                <div
                  key={ingredient.ingredienteId}
                  className="filter--ingredient--item"
                >
                  <p>{ingredient.nombreIngrediente}</p>
                  <IoMdCloseCircleOutline
                    onClick={() =>
                      handleDeleteIngredient(ingredient.ingredienteId)
                    }
                  />
                </div>
              );
            })
          ) : (
            <p className="non--filters--ingredients">
              Aún no se han seleccionado ingredientes <FaRegSadCry />
            </p>
          )}
        </div>
        <div className="recipes--template--recipes--list">
          <div className="recipes--template--recipes--list--search">
            <strong>Resultados: {filteredRecipes.length} receta(s)</strong>
            <div className="recipe--search">
              <strong>Buscar</strong>
              <Input
                type="text"
                value={filters.query}
                onChange={(value) => setFilters({ ...filters, query: value })}
                placeholder="¿Qué se te antoja?"
              />
            </div>
          </div>

          {filteredRecipes && filteredRecipes.length > 0 ? (
            <div className="recipes--template--recipes--list--items">
              {filteredRecipes.map((recipe) => {
                return <RecipeItem key={recipe.recetaId} dataRecipe={recipe} />;
              })}
            </div>
          ) : (
            <AlertInfo
              textBtn="Limpiar filtros"
              text="Al parecer no hubo suerte con tu búsqueda"
              icon={<MdOutlineSearchOff />}
              onScape={handleCleanFilters}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesTemplate;
