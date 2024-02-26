import { Formik } from "formik";
import { LoginFormTypes } from "../../interfaces/index.t";
import InputForm from "../InputForm";
import Button from "../Button";
import { initialValuesLoginForm } from "../../interfaces/initials";
import { loginFormSchema } from "../../schemas";
import "./index.scss";
import AccountUserService from "../../api/account";
import { toast } from "react-toastify";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const handleSubmitLogin = async (values: LoginFormTypes) => {
    console.log(values);
    await AccountUserService.loginAccount(values)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        toast.success(`Bienvenido ${response.nombreUsuario}`);
        localStorage.setItem("token", response.usuarioId);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => toast.error(error));
    onLogin();
  };

  return (
    <div className="login--form--main--container">
      <div className="login--form--header--container">
        <strong>Iniciar Sesión.</strong>
        {true && <span className="login--form--error--message">{}.</span>}
      </div>

      <form>
        <Formik
          initialValues={initialValuesLoginForm}
          onSubmit={handleSubmitLogin}
          validationSchema={loginFormSchema}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <InputForm
                  type="email"
                  placeholder="Email"
                  name="correoElectronico"
                />
                <InputForm
                  type="password"
                  placeholder="Contraseña"
                  name="contraseña"
                />
                <Button
                  text="Iniciar sesión"
                  styles={{ padding: "15px 0" }}
                  btnClass="btn-primary"
                  onClick={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
      </form>
      <div></div>
    </div>
  );
};

export default LoginForm;
