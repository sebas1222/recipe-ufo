import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  contraseña: Yup.string().required("Completar campo"),
  correoElectronico: Yup.string().required("Completar campo"),
});

export const registerFormSchema = Yup.object().shape({
  nombreUsuario: Yup.string().required("Completar campo"),
  apellido: Yup.string().required("Completar campo"),
  correoElectronico: Yup.string().required("Completar campo"),
  contraseña: Yup.string()
    .required("Porfavor digite una contraseña")
    .test("len", "Digite una contraseña válida", (val) => val.length <= 20),
});
