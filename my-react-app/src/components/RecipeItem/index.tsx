import { RecipeData } from "../../interfaces/index.t";
import Button from "../Button";
import "./index.scss";

interface RecipeItemProps {
  dataRecipe: RecipeData;
}

const RecipeItem = ({ dataRecipe }: RecipeItemProps) => {
  const { nombreReceta, usuario, test } = dataRecipe;
  return (
    <div className="recipe--item--main--container">
      <img
        src={
          test ||
          "https://veggienoob.com/wp-content/uploads/2019/09/lomo-saltdo-vegano-500x500.jpg"
        }
      ></img>
      <div className="recipe--item--mask--container">
        <div className="recipe--item--layout--container">
          <strong>{nombreReceta || "Receta"}</strong>
          <Button
            btnClass="btn-primary-inner"
            borderRadius={2}
            text="Ver más"
          />
        </div>
        <p>
          <b>Por: </b>
          <span>
            {`${usuario.nombreUsuario} ${usuario.apellido}` ||
              "Sebastian Céspedes"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RecipeItem;
