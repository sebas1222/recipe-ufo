import MainContainer from "../../components/MainContainer";
import RecipeDetails from "../../templates/RecipeDetails";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import RecipeService from "../../api/recipes";
import { RecipeData } from "../../interfaces/index.t";
import Spinner from "../../components/Spinner";

const RecipeDetailsPage = () => {
  const params = useParams();
  const idRecipe = params.recipeId;
  const { data, isLoading } = useQuery<RecipeData>({
    queryKey: ["receta", idRecipe],
    queryFn: () => RecipeService.getOneRecipe(Number(idRecipe)),
  });

  return (
    <MainContainer>
      {isLoading ? <Spinner /> : <RecipeDetails data={data} />}
    </MainContainer>
  );
};

export default RecipeDetailsPage;
