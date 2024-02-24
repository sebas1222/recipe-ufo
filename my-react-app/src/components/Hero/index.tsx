import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { BiFoodMenu } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./index.scss";
import Button from "../Button";
const Hero = () => {
  return (
    <div className="hero--main--container">
      <div className="hero--carrousel--container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="hero--carrousel--swiper"
        >
          <SwiperSlide>
            <img
              className="hero--carrousel--item--image"
              src="https://veggienoob.com/wp-content/uploads/2019/09/lomo-saltdo-vegano-500x500.jpg"
              alt="receta"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero--carrousel--item--image"
              src="https://morenacocina.com/wp-content/uploads/2022/03/Causa-limena-con-camarones_MG_1084-scaled.jpg"
              alt="receta"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero--carrousel--item--image"
              src="https://www.paulinacocina.net/wp-content/uploads/2021/12/arroz-chaufa-peruano-receta.jpg"
              alt="receta"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero--carrousel--item--image"
              src="https://www.gourmet.cl/wp-content/uploads/2016/09/Aji-Gallina-web-570x458.jpg"
              alt="receta"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero--carrousel--item--image"
              src="https://elcomercio.pe/resizer/xT_dkJixACO0gBnIOP_mTuN0YF8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QLFEJCGWOREPLBYFE7H2FOPXFY.jpg"
              alt="receta"
            ></img>
          </SwiperSlide>
        </Swiper>
        <div className="hero--layout--container">
          <h1>¿Tienes ingredientes pero no sabes que cocinar?</h1>
          <p>
            Gracias a nuestro filtrado por ingrediente, te ayudaremos a
            descubrir recetas que no conocias y asi puedas disfrutar preparando
            nuevos platos que te dejaran asombrado.
          </p>
          <Button
            text="Explorar recetas!"
            icon={<BiFoodMenu />}
            borderRadius={10}
            styles={{ alignSelf: "center", padding: "15px 30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
