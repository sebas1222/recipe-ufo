import Hero from "../../components/Hero";
import RecipeList from "../../components/RecipeList";
import { RecipeData } from "../../interfaces/index.t";

interface HomeTemplateDataProps {
  data: RecipeData[] | undefined;
}

const HomeTemplate = ({ data }: HomeTemplateDataProps) => {
  return (
    <div>
      <Hero />
      <RecipeList data={data || []} title="Recien agregados" />
      <RecipeList data={data || []} title="Selección para ti" />
    </div>
  );
};

export default HomeTemplate;
