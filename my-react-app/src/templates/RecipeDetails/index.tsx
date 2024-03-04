import "./index.scss";
import { MdOndemandVideo } from "react-icons/md";
import { RecipeData } from "../../interfaces/index.t";

interface RecipeDetailsProps {
  data: RecipeData | undefined;
}

const RecipeDetails = ({ data }: RecipeDetailsProps) => {
  console.log({ data });
  const steps = data?.instruccionesPreparacion.split("-");

  return (
    <div className="recipe--details--container">
      <div className="recipe--details--content--container content--container">
        <div className="recipe--details--image">
          <img src={data?.test} alt={data?.nombreReceta}></img>
          <a href={data?.test2} target="_blank">
            Ver video de receta <MdOndemandVideo />{" "}
          </a>
        </div>
        <div className="recipe--details--layout">
          <div className="recipe--details--author">
            <strong>{data?.nombreReceta}</strong>
            <span>
              Por:{" "}
              {data?.usuario &&
                data.usuario.nombreUsuario + " " + data.usuario.apellido}
            </span>
          </div>
          <div className="recipe--details--ingredients">
            <strong>Ingredientes y cantidades</strong>
            <div className="recipe--details--measures">
              <strong>Nombre</strong>
              <strong>Cantidad</strong>
              <strong>Medida</strong>
            </div>
            <ul className="recipe--details--ingredients--list">
              {data?.ingredientes.map((ingredient) => {
                return (
                  <li>
                    <span>{ingredient.nombreIngrediente}</span>
                    <span>{ingredient.cantidad}</span>
                    <span>{ingredient.unidadMedida || "unidad"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recipe--details--steps">
            <strong>Preparación</strong>
            <ul className="recipe--details--steps--list">
              {steps &&
                steps.map((step, index) => {
                  return (
                    <li>
                      <b> {index + 1}- </b>
                      <span>{step}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
