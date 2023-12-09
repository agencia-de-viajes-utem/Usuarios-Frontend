import { Formik, Form } from "formik";
import InputProfile from "./InputProfile";
import { ChangeData } from "../../utils/schemas/changeData";
import ButtonSubmit from "../Form/ButtonSubmit";
import InputFile from "../Form/InputFile";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateUser } from "../../api";
import "./FormData.css";
export default function FormData({
    children,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fono,
    setUpdate,
}) {
    const [user, _] = useState({
        Nombre: nombre,
        Apellido: apellidoPaterno,
        SegundoApellido: apellidoMaterno,
        Fono: fono,
    });
    const { tokenCookie } = useContext(AuthContext);

    const submit = async (values) => {
        const updatedUser = {
            Nombre: values.name,
            Apellido: values.lastName,
            SegundoApellido: values.lastName2,
            Fono: values.cellPhone,
        };

        const response = await updateUser(tokenCookie, updatedUser);
        setUpdate(false);
        console.log("Usuario actualizado con éxito:", response);
    };
    return (
        <>
            <div className="button_back"> {children}</div>
            <Formik
                initialValues={{
                    name: user.Nombre,
                    lastName: user.Apellido,
                    lastName2: user.SegundoApellido,
                    cellPhone: user.Fono,
                }}
                onSubmit={submit}
                validationSchema={ChangeData}
            >
                <Form className="container_form_perfil">
                    <div className="container_avatar">
                        <InputFile />
                    </div>
                    <div className="container_names">
                        <InputProfile
                            name="name"
                            type="text"
                            content="Nombre"
                            placeholder={user.Nombre}
                        />
                        <InputProfile
                            name="lastName"
                            type="text"
                            content="Apellido Paterno"
                            placeholder={user.Apellido}
                        />
                    </div>
                    <div className="container_data_form1">
                        <InputProfile
                            name="lastName2"
                            type="text"
                            content="Apellido Materno"
                            placeholder={user.SegundoApellido}
                        />
                        <InputProfile
                            name="cellphone"
                            type="text"
                            content="Telefono"
                            placeholder={user.Fono}
                        />
                    </div>
                    <div className="container_data_form2">
                        <InputProfile
                            name="fechanacimiento"
                            type="date"
                            content="Fecha de nacimiento"
                        />
                        <ButtonSubmit content="Guardar cambios" />
                    </div>
                </Form>
            </Formik>
        </>
    );
}
