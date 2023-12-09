import { Formik, Form } from "formik";
import InputProfile from "./InputProfile";
import { ChangeData } from "../../utils/schemas/changeData";
import ButtonSubmit from "../Form/ButtonSubmit";
import "./Access.css";
export default function FormAcess({ children }) {
    const submit = () => {
        console.log("a");
    };
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={submit}
                validationSchema={ChangeData}
            >
                <Form className="form_access">
                    <div className="back">{children}</div>
                    <div className="container_form1">
                        <label>Correo: test1@sldls.com</label>
                        <InputProfile
                            name="password"
                            type="text"
                            content="Contraseña Actual"
                            placeholder="********"
                        />
                    </div>
                    <div className="container_form2">
                        <InputProfile
                            name="newpassword"
                            type="text"
                            content="Contraseña nueva"
                            placeholder="********"
                        />
                        <InputProfile
                            name="repeatnewpassword"
                            type="text"
                            content="Repite nueva contraseña"
                            placeholder="********"
                        />
                    </div>
                    <div className="container_form3">
                        <ButtonSubmit content="Guardar cambios" />
                    </div>
                </Form>
            </Formik>
        </>
    );
}
