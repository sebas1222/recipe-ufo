import Hero from "../../components/Hero";
import RecipeList from "../../components/RecipeList";

const HomeTemplate = () => {
  return (
    <div>
      <Hero />
      <RecipeList title="Recien agregados" />
      <RecipeList title="Selección para ti" />
    </div>
  );
};

export default HomeTemplate;
