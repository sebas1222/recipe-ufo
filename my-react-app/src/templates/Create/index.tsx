import RecipeForm from "../../components/RecipeForm";
import "./index.scss";
const CreateTemplate = () => {
  return (
    <div className="create--recipe--content--container content--container">
      <strong>Crea tu receta</strong>
      <RecipeForm />
    </div>
  );
};

export default CreateTemplate;
