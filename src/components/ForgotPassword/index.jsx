import "./ForgotPassword.css";
import Input from "../Form/Input";
import ButtonSubmit from "../Form/ButtonSubmit";
import { Formik, Form } from "formik";
import { resetPassword } from "../../api";
export default function ForgotPasword() {
    const handleSubmit = async (values) => {
        const status = await resetPassword({ email: values.email });
    };
    return (
        <main className="container-forgotPassword">
            <div className="container_text">
                <h1>¿OLVIDASTE TU CONTRASEÑA?</h1>
                <p>
                    Ingrese su direccion de correo electronico y le enviaremos
                    un enlace para restablecer su contraseña
                </p>
            </div>
            <div className="container_form">
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Input
                            name="email"
                            type="email"
                            content="Correo electronico"
                            placeholder="Introduce tu correo electronico"
                        />
                        <ButtonSubmit content="Continuar" />
                    </Form>
                </Formik>
            </div>
        </main>
    );
}
