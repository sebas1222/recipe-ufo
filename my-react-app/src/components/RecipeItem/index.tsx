import Button from "../Button";
import "./index.scss";

interface RecipeItemProps {
  title?: string;
  img_url?: string;
  author?: string;
}

const RecipeItem = ({
  author = "Sebastian Céspedes",
  title = "Receta",
  img_url = "https://veggienoob.com/wp-content/uploads/2019/09/lomo-saltdo-vegano-500x500.jpg",
}: RecipeItemProps) => {
  return (
    <div className="recipe--item--main--container">
      <img src={img_url}></img>
      <div className="recipe--item--mask--container">
        <div className="recipe--item--layout--container">
          <strong>{title}</strong>
          <Button
            btnClass="btn-primary-inner"
            borderRadius={2}
            text="Ver más"
          />
        </div>
        <p>
          <b>Por: </b>
          <span>{author}</span>
        </p>
      </div>
    </div>
  );
};

export default RecipeItem;
