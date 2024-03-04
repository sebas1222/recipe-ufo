import RecipeItem from "../RecipeItem";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import Button from "../Button";
import "./index.scss";
import { RecipeData } from "../../interfaces/index.t";

interface RecipeListProps {
  data: RecipeData[];
  title?: string;
}
const RecipeList = ({ title, data }: RecipeListProps) => {
  const carrouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const scrollLeft = () => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollLeft -= 340;
    }
  };
  const scrollRight = () => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollLeft += 340;
    }
  };

  return (
    <div className="recipe--list--main--container">
      <div className="recipe--list--content--container content--container">
        <strong className="recipe--list--title" >{title}</strong>
        <div className="recipe--list--carrousel--container">
          <div
            onClick={scrollLeft}
            className="recipe--list--scroll-btn left--btn"
          >
            <FaArrowLeftLong />
          </div>
          <div
            onClick={scrollRight}
            className="recipe--list--scroll-btn right--btn"
          >
            <FaArrowRightLong />
          </div>
          <div ref={carrouselRef} className="recipe--list--carrousel--mask">
            <div className="recipe--list--carrousel">
              {data &&
                data.map((recipe) => {
                  return (
                    <RecipeItem key={recipe.recetaId} dataRecipe={recipe} />
                  );
                })}

              <Button
                text="Explorar más recetas"
                textSize="35px"
                styles={{ width: "290px", padding: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
