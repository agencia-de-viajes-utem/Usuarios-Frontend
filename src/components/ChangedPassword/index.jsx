import "./ChangedPassword.css";
import Input from "../Form/Input";
import { Formik, Form } from "formik";
import ButtonSubmit from "../Form/ButtonSubmit";
export default function ChangedPassword() {
    const handleSubmit = (values) => {
        if (values.password != values.passwordConfirm) {
            return;
        }
        console.log("god");
    };

    return (
        <div className="container-changed-password">
            <div className="tittle">
                <h1>RESTABLECER CONTRASEÑA</h1>
            </div>
            <div>
                <p>Ingrese su nueva contraseña</p>
            </div>
            <div className="container-form-cp">
                <Formik
                    initialValues={{
                        password: "",
                        passwordConfirm: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Input
                            type="password"
                            name="password"
                            content="Nueva Contraseña"
                            placeholder="********"
                        />
                        <Input
                            name="passwordConfirm"
                            type="password"
                            content="Confirmar nueva Contraseña"
                            placeholder="********"
                        />
                        <div className="container-requeriment">
                            <p>La contraseña debe requerir lo siguiente</p>
                            <ul>
                                <li>Longitud minima de 8</li>
                                <li>Al menos una mayuscula</li>
                                <li>Al menos una minuscula</li>
                                <li>Al menos un numero</li>
                            </ul>
                        </div>
                        <ButtonSubmit content="Continuar" />
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
