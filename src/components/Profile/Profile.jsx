import "./Profile.css";
import Menu from "../Menu/index";
import Data from "./Data";
import FormData from "./FormData";
import Access from "./Access";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getUser } from "../../api";
export default function Profile() {
    const [user, setUser] = useState({
        Nombre: "",
        ApellidoMaterno: "",
        ApellidoPaterno: "",
        Fono: "",
        Email: "",
    });

    const { isAuthenticated, tokenCookie } = useContext(AuthContext);

    useEffect(() => {
        const get_user = async () => {
            setUser(await getUser({ token: tokenCookie }));
        };
        // 2. Usa useEffect
        if (isAuthenticated) {
            get_user();
        }
    }, [isAuthenticated, tokenCookie]);

    const [toggle, setToggle] = useState(false);
    const changeToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="main_container">
            <Menu />

            <div className="sub-container">
                <h1 className="title">Datos personales</h1>
                <div className="information">
                    <h1 className="title_data">Datos basicos</h1>
                    {toggle ? (
                        <FormData
                            nombre={user.Nombre}
                            apellidoMaterno={user.SegundoApellido}
                            apellidoPaterno={user.Apellido}
                            fono={user.Fono}
                            img={user.img}
                            setUpdate={setToggle}
                        >
                            <svg
                                viewBox="0 0 32 32"
                                width={20}
                                height={20}
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={changeToggle}
                            >
                                <g
                                    data-name="Layer 2"
                                    id="Layer_2"
                                >
                                    <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
                                </g>
                            </svg>
                        </FormData>
                    ) : (
                        <Data
                            nombre={user.Nombre}
                            apellidoMaterno={user.SegundoApellido}
                            apellidoPaterno={user.Apellido}
                            fono={user.Fono}
                        >
                            <button
                                onClick={changeToggle}
                                className="button_basic_data"
                            >
                                Editar datos
                            </button>
                        </Data>
                    )}
                </div>

                <div className="information">
                    <h1 className="title_data">Datos de acceso</h1>

                    <Access email={user.Email}>
                        <button className="button_basic_data">
                            Cambiar contraseña
                        </button>
                    </Access>
                </div>
            </div>
        </div>
    );
}
