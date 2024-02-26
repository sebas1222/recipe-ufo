import { useState } from "react";
import "./index.scss";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";

interface AuthModalProps {
  onAuth: () => void;
}

const AuthModal = ({ onAuth }: AuthModalProps) => {
  const [authOption, setAuthOption] = useState<string>("login");
  return (
    <div className="auth--modal--main--container">
      <div className="auth--modal--forms--container">
        <div
          className={
            authOption === "login"
              ? "auth--modal--login--container visible"
              : "auth--modal--login--container"
          }
        >
          <LoginForm onLogin={onAuth} />
          <p className="auth--modal--login--options">
            <span>¿Olvidaste tu contraseña?</span>
            <br></br>
            <span>-</span>
            <br></br>
            <span onClick={() => setAuthOption("register")}>
              ¿No tienes una cuenta? Registrate{" "}
            </span>
          </p>
        </div>
        <div
          className={
            authOption !== "login"
              ? "auth--modal--register--container visible"
              : "auth--modal--register--container"
          }
        >
          <RegisterForm onRegister={onAuth} />
          <p
            className="auth--modal--register--options"
            onClick={() => setAuthOption("login")}
          >
            <MdOutlineKeyboardDoubleArrowLeft /> Regresar
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
