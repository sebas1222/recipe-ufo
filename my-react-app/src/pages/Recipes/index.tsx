/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import RecipesTemplate from "../../templates/Recipes";
import AccountRecipeService from "../../api/recipes";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    AccountRecipeService.getRecipes()
      .then((response) => setRecipes(response))
      .catch((_error) => setRecipes([]));
  }, []);

  console.log({ recipes });
  return (
    <MainContainer>
      <RecipesTemplate />
    </MainContainer>
  );
};

export default RecipesPage;
