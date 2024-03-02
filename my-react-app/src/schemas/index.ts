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

export const recipeFormSchema = Yup.object().shape({
  nombreReceta: Yup.string().required("Completar campo"),
  url: Yup.string().required("Completar campo"),
  instruccionesPreparacion: Yup.string().required("Completar campo"),
});
