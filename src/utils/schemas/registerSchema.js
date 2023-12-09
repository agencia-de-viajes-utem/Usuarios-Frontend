import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    apellido2: Yup.string().required("El segundo apellido es requerido"),
    rut: Yup.string().required("El rut es requerido"),
    telefono: Yup.string().required("El numero de celular es requerido"),
    email: Yup.string()
        .email("El correo es invalido")
        .required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
    confirmpassword: Yup.string().required("La contraseña es requerida"),
});
