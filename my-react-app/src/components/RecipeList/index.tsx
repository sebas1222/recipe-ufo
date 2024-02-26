import RecipeItem from "../RecipeItem";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import Button from "../Button";
import "./index.scss";

interface RecipeListProps {
  title?: string;
}
const RecipeList = ({ title }: RecipeListProps) => {
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
        <strong>{title}</strong>
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
              <RecipeItem title="Lomo saltado" />
              <RecipeItem
                title="Causa Limeña"
                img_url="https://morenacocina.com/wp-content/uploads/2022/03/Causa-limena-con-camarones_MG_1084-scaled.jpg"
              />
              <RecipeItem
                title="Arroz chaufa"
                img_url="https://www.paulinacocina.net/wp-content/uploads/2021/12/arroz-chaufa-peruano-receta.jpg"
              />
              <RecipeItem
                title="Ají de gallina"
                img_url="https://www.gourmet.cl/wp-content/uploads/2016/09/Aji-Gallina-web-570x458.jpg"
              />
              <RecipeItem
                title="Pollo la brasa"
                img_url="https://elcomercio.pe/resizer/xT_dkJixACO0gBnIOP_mTuN0YF8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QLFEJCGWOREPLBYFE7H2FOPXFY.jpg"
              />
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
