import { useState } from "react";
import { IngredientData } from "../../interfaces/index.t";
import Input from "../Input";
import "./index.scss";

interface IngredientstInputListProps {
  ingredientsData?: IngredientData[];
  onSelect: (ingredient: IngredientData) => void;
}

const dataFake: IngredientData[] = [
  { ingredienteId: 1, nombreIngrediente: "papa" },
  { ingredienteId: 2, nombreIngrediente: "tomate" },
  { ingredienteId: 3, nombreIngrediente: "paprika" },
];

const IngredientstInputList = ({
  ingredientsData = dataFake,
  onSelect,
}: IngredientstInputListProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSelectIngredient = (ingredient: IngredientData) => {
    onSelect(ingredient);
  };
  const filterData = ingredientsData.filter((ingredient) =>
    ingredient.nombreIngrediente.includes(search)
  );

  return (
    <div className="ingredients--input--list--container">
      <div className="ingredients--input--list--search">
        <Input
          placeholder="Buscar ingrediente y añadir"
          type="text"
          value={search}
          onChange={(value) => setSearch(value)}
        />
        <div className="ingredients--input--list--search--results--mask">
          {search.length > 0 && (
            <div className="ingredients--input--list--search--results">
              {filterData.length === 0 ? (
                <p>No hay resultados.</p>
              ) : (
                filterData.map((ingredient) => {
                  return (
                    <p
                      onClick={() => handleSelectIngredient(ingredient)}
                      key={ingredient.ingredienteId}
                    >
                      {ingredient.nombreIngrediente}
                    </p>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientstInputList;
