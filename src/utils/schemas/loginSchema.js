import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("El correo es invalido")
        .required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
});
