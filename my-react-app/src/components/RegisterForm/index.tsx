import { Formik } from "formik";
import { registerFormSchema } from "../../schemas";
import { initialValuesRegisterForm } from "../../interfaces/initials";
import InputForm from "../InputForm";
import { toast } from "react-toastify";
import Button from "../Button";
import { RegisterFormTypes } from "../../interfaces/index.t";
import "./index.scss";
import AccountUserService from "../../api/account";

interface RegisterFormProps {
  onRegister: () => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const handleSubmitRegister = async (values: RegisterFormTypes) => {
    console.log({ values });
    AccountUserService.registerAccount(values)
      .then((response) => toast.success(JSON.stringify(response)))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => toast.error(error));
    onRegister();
  };

  return (
    <div className="register--form--main--container">
      <div className="register--form--header--container">
        <strong>Registrarse.</strong>
      </div>
      <form>
        <Formik
          validationSchema={registerFormSchema}
          onSubmit={handleSubmitRegister}
          initialValues={initialValuesRegisterForm}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <InputForm
                  type="text"
                  placeholder="Nombres"
                  name="nombreUsuario"
                />
                <InputForm
                  type="text"
                  placeholder="Apellidos"
                  name="apellido"
                />
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
                  text="Crear cuenta"
                  styles={{ padding: "15px 0" }}
                  btnClass="btn-primary"
                  onClick={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
      </form>
    </div>
  );
};

export default RegisterForm;
