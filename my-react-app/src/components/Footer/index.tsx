import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import "./index.scss";
import Button from "../Button";

interface FooterSectionProps {
  titleSection: string;
  paths: { label: string; path: string }[];
}

const FooterSection = ({ titleSection, paths }: FooterSectionProps) => {
  return (
    <ul className="footer--paths--list">
      <li className="footer--section--item--container">
        <strong className="footer--section--title">{titleSection}</strong>
        <ul>
          {paths &&
            paths?.map((path, index) => {
              return (
                <li key={index}>
                  <a href="/">
                    <span>{path.label}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="footer--main--container">
      <div className="footer--main--content--container content--container">
        <div className="footer--main--related--info">
          <div className="footer--about--us--container">
            <strong>Plato volador</strong>
            <p>
              ¡Bienvenido a nuestra comunidad culinaria! En nuestra plataforma,
              explorarás un mundo de sabores, texturas y creatividad.
            </p>
            <ul className="footer--social--links--container">
              <li>
                <a href="/">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer--paths--container">
            <FooterSection
              paths={[
                { label: "Contacto", path: "/" },
                { label: "Políticas de la empresa", path: "/" },
                { label: "Políticas de privacidad", path: "/" },
              ]}
              titleSection="Información"
            />
            <FooterSection
              paths={[
                { label: "¿Quiénes somos?", path: "/" },
                { label: "¿Qué buscamos?", path: "/" },
                { label: "Trabaja con nosotros", path: "/" },
              ]}
              titleSection="Nosotros"
            />
            <FooterSection
              paths={[
                { label: "Preguntas Frecuentes", path: "/" },
                { label: "Como subir una receta", path: "/" },
              ]}
              titleSection="Ayuda"
            />
            <div className="footer--subscribe--container">
              <strong>Suscribase para obtener beneficios.</strong>
              <div className="footer--subscribe--input">
                <input placeholder="Ingrese su correo" type="email"></input>
                <Button text="Suscribirse" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer--copy--container">
          <p>
            Copyright © 2024, Plato Volador. Todos los derechos reservados
            Consulte nuestras condiciones de uso y el aviso de privacidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
