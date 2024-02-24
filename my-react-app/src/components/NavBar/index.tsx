import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import "./index.scss";
const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar--main--container">
      <div className="navbar--content--container content--container">
        <div className="logo--image--container">
          <h2>PLATO VOLADOR</h2>
        </div>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={location.pathname === "/recipes" ? "active" : ""}>
            <Link to="/">Recetas</Link>
          </li>
          <li>
            <Link to="/">Crear</Link>
          </li>
        </ul>
        <div>
          <Button
            text="Iniciar sesión"
            styles={{ padding: "12px 30px" }}
            borderRadius={10}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
