import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import useScrollY from "../../hooks/useScrollY";
import { useState } from "react";
import "./index.scss";
import Modal from "../Modal";
import AuthModal from "../AuthModal";
import { useUserTokenState } from "../../store/userToken";

const NavBar = () => {
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const token = useUserTokenState((state) => state.userToken);
  const setToken = useUserTokenState((state) => state.setToken);
  const location = useLocation();
  const scrollY = useScrollY();
  const handleAuth = () => {
    if (token?.length === 0) {
      setShowAuthModal(true);
    } else {
      setToken("");
    }
  };

  return (
    <>
      <nav
        className={
          scrollY >= 85
            ? "navbar--main--container sticky"
            : "navbar--main--container"
        }
      >
        <div className="navbar--content--container content--container">
          <div className="logo--image--container">
            <h2>PLATO VOLADOR</h2>
          </div>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === "/recipes" ? "active" : ""}>
              <Link to="/recipes">Recetas</Link>
            </li>
            <li>
              <Link to="/">Crear</Link>
            </li>
          </ul>
          <div>
            <Button
              onClick={handleAuth}
              text={token?.length > 0 ? "Cerrar sesión" : "Iniciar sesión"}
              styles={{ padding: "12px 30px" }}
              borderRadius={10}
            />
          </div>
        </div>
      </nav>
      <Modal
        maxWidth={500}
        isOpen={showAuthModal}
        content={<AuthModal onAuth={() => setShowAuthModal(false)} />}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default NavBar;
