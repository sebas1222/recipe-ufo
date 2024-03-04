import { useState } from "react";
import IngredientstInputList from "../../components/IngredientstInputList";
import Input from "../../components/Input";
import RecipeItem from "../../components/RecipeItem";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IngredientData } from "../../interfaces/index.t";
import "./index.scss";
const RecipesTemplate = () => {
  const [search, setSearch] = useState<string>("");
  const [filtersIngredients, setFiltersIngredients] = useState<
    IngredientData[]
  >([]);

  const handleSelecIngredient = (ingredient: IngredientData) => {
    console.log(ingredient);
  };

  const filterByIngredients = () => {};

  return (
    <div className="recipes--template--main--container">
      <div className="recipes--template--content--container content--container">
        <div className="recipes--template--side--container">
          <strong>Filtrar por recetas</strong>
          <IngredientstInputList
            onSelect={(value) => handleSelecIngredient(value)}
          />
          <div className="filter--ingredient--item">
            <p>TOMATE</p>
            <IoMdCloseCircleOutline />
          </div>
        </div>
        <div className="recipes--template--recipes--list">
          <div className="recipes--template--recipes--list--search">
            <strong>Resultados:</strong>
            <div className="recipe--search">
              <strong>Buscar</strong>
              <Input
                type="text"
                value={search}
                onChange={(value) => setSearch(value)}
                placeholder="¿Qué se te antoja?"
              />
            </div>
          </div>
          <div className="recipes--template--recipes--list--items">
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesTemplate;
