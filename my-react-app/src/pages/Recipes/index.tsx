import { useQuery } from "react-query";
import RecipeService from "../../api/recipes";
import MainContainer from "../../components/MainContainer";
import RecipesTemplate from "../../templates/Recipes";
import Spinner from "../../components/Spinner";

const RecipesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => RecipeService.getRecipes(),
  });

  return (
    <MainContainer>
      {isLoading ? <Spinner /> : <RecipesTemplate data={data} />}
    </MainContainer>
  );
};

export default RecipesPage;
