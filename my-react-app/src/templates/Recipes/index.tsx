import React, { useState } from "react";

const RecipesTemplate = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const options = [
    { id: 1, name: "arroz" },
    { id: 2, name: "papa" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setIngredients([...ingredients, value]);
    } else {
      setIngredients(ingredients.filter((ingredient) => ingredient !== value));
    }
  };

  //   const filteredProducts = products.filter((product) => {
  //     // Verificar si todos los ingredientes del producto están incluidos en el estado ingredients
  //     return product.ingredients.every((ingredient) =>
  //       ingredients.includes(ingredient.name)
  //     );
  //   });

  console.log({ ingredients });

  return (
    <div>
      <p>Lista de ingredientes</p>
      {options &&
        options.map((option) => {
          return (
            <div key={option.id}>
              <input
                onChange={handleChange}
                checked={ingredients.includes(option.name)}
                value={option.name}
                type="checkbox"
                id={option.name}
                name={option.name}
              />
              <label htmlFor={option.name}>{option.name}</label>
            </div>
          );
        })}
    </div>
  );
};

export default RecipesTemplate;
