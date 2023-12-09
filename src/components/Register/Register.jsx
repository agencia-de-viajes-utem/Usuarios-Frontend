import "./Register.css";
import "./ErrorMessage.css";
import Input from "../Form/Input";
import ButtonSubmit from "../Form/ButtonSubmit";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Link, useLocation } from "wouter";
import { register } from "../../api";
import { RegisterSchema } from "../../utils/schemas/registerSchema";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
    const [password, setPassword] = useState(true);
    const [res, setRes] = useState(null);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation

    const handleSubmit = async (values) => {
        const result = await register({
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmpassword,
            nombre: values.nombre,
            apellido: values.apellido,
            apellido2: values.apellido2,
            rut: values.rut,
            telefono: values.telefono,
        });
        setRes(result);
        // Ahora, utiliza result en lugar de res para la comparación
        const passwordMatch = comparacion(
            values.password,
            values.confirmpassword
        );
        setPassword(passwordMatch);
    };

    function comparacion(password, confirmpassword) {
        if (password === confirmpassword) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="registro-login">
            <div className="registro-logo">
                <img src="/logo.png" />
            </div>
            <div className="registro-form">
                <Formik
                    initialValues={{
                        nombre: "",
                        apellido: "",
                        apellido2: "",
                        email: "",
                        rut: "",
                        telefono: "",
                        password: "",
                        confirmpassword: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={RegisterSchema}
                >
                    <Form>
                        <div>
                            <h1 className="titulo">Registro</h1>
                            <p className="titulo">Ingrese sus datos</p>
                        </div>
                        <Input
                            name="nombre"
                            type="text"
                            content="Nombre"
                            placeholder="Ej: Diego Andres"
                        />
                        <Input
                            name="apellido"
                            type="text"
                            content="Apellido paterno"
                            placeholder="Ej: Hernandez "
                        />
                        <Input
                            name="apellido2"
                            type="text"
                            content="Apellido materno"
                            placeholder="Ej: Garcia"
                        />
                        <Input
                            name="email"
                            type="email"
                            content="Email"
                            placeholder="Ingrese su correo electrónico"
                        />
                        <Input
                            name="telefono"
                            type="text"
                            content="Telefono"
                            placeholder="+56977172355"
                        />
                        <Input
                            name="rut"
                            type="text"
                            content="Rut"
                            placeholder="11111111-1"
                        />
                        <Input
                            name="password"
                            type="password"
                            content="Contraseña"
                            placeholder="********"
                        />
                        <Input
                            name="confirmpassword"
                            type="password"
                            content="Confirmar contraseña"
                            placeholder="********"
                        />

                        <ButtonSubmit content="Registrarse" />
                        {password ? null : (
                            <div className="error-message">
                                <div>Las contraseñas no coincide</div>
                            </div>
                        )}
                        {res === 400 ? (
                            <div className="error-message">
                                <div>El correo ya se encuentra registrado</div>
                            </div>
                        ) : null}
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
