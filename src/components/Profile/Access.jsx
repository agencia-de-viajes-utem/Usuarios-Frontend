import "./Data.css";
import { resetPassword } from "../../api";
import { useState } from "react";
export default function Acces({ children, email }) {
    const [res, setRes] = useState(null);
    const onClick = async (values) => {
        const status = await resetPassword({ email: email });
        setRes(status);
    };
    return (
        <div className="container_data">
            <div className="info_box">
                <div className="info_item">
                    <label>Correo</label>
                    <span>{email}</span>
                </div>
                <div className="info_item">
                    <label>Contraseña</label>
                    <span>******</span>
                </div>
            </div>
            <div
                className="button_data"
                onClick={onClick}
            >
                {children}
            </div>
            {res === 200 ? (
                <span className="msg_resetPassword">
                    Se envio el correo de reestablecimiento
                </span>
            ) : null}
        </div>
    );
}
