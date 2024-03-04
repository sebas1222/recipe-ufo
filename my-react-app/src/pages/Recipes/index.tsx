import { useQuery } from "react-query";
import RecipeService from "../../api/recipes";
import MainContainer from "../../components/MainContainer";
import RecipesTemplate from "../../templates/Recipes";

const RecipesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => RecipeService.getRecipes(),
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <MainContainer>
      <RecipesTemplate data={data} />
    </MainContainer>
  );
};

export default RecipesPage;
