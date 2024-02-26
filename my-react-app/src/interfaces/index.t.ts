export interface LoginFormTypes {
  correoElectronico: string;
  contraseña: string;
}

export interface RegisterFormTypes {
  correoElectronico: string;
  contraseña: string;
  apellido: string;
  nombreUsuario: string;
}
export interface RecipeAddFormTypes {
  nombreReceta: string;
  instruccionesPreparación: string;
  usuarioId: number;
}
