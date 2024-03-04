import HomeTemplate from "../../templates/Home";
import MainContainer from "../../components/MainContainer";
import { useQuery } from "react-query";
import { RecipeData } from "../../interfaces/index.t";
import RecipeService from "../../api/recipes";
import Spinner from "../../components/Spinner";

const HomePage = () => {
  const { data, isLoading } = useQuery<RecipeData[]>({
    queryKey: ["recipes"],
    queryFn: () => RecipeService.getRecipes(),
  });

  return (
    <MainContainer>
      {isLoading ? <Spinner /> : <HomeTemplate data={data} />}
    </MainContainer>
  );
};

export default HomePage;
