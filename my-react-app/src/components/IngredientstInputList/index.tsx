import { useEffect, useState } from "react";
import { IngredientData } from "../../interfaces/index.t";
import Input from "../Input";
import IngredientsService from "../../api/ingredients";
import "./index.scss";

interface IngredientstInputListProps {
  ingredientsData?: IngredientData[];
  onSelect: (ingredient: IngredientData) => void;
}

const IngredientstInputList = ({ onSelect }: IngredientstInputListProps) => {
  const [search, setSearch] = useState<string>("");
  const [ingredients, setIngredients] = useState<IngredientData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await IngredientsService.getAllIngredients();
      setIngredients(data);
      setLoading(false);
    };
    fetchIngredients();
  }, []);

  const handleSelectIngredient = (ingredient: IngredientData) => {
    onSelect(ingredient);
    setSearch("");
  };
  const filterData = ingredients?.filter((ingredient) =>
    ingredient.nombreIngrediente
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  );

  if (loading) return <p>Loading...</p>;

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
          {search?.length > 0 && (
            <div className="ingredients--input--list--search--results">
              {filterData?.length === 0 ? (
                <p>No hay resultados.</p>
              ) : (
                filterData?.map((ingredient) => {
                  return (
                    <p
                      onClick={() => handleSelectIngredient(ingredient)}
                      key={ingredient?.ingredienteId}
                    >
                      {ingredient?.nombreIngrediente}
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
