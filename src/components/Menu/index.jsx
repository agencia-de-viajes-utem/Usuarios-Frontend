import "./Menu.css"; // Asegúrate de que la ruta del archivo CSS sea correcta
import { Link } from "wouter";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function UserMenu() {
    const { logoutContext } = useContext(AuthContext);

    return (
        <div className="user-menu">
            <ul className="horizontal-menu">
                <Link href="/user/profile">
                    <li>Perfil</li>
                </Link>
                <Link href="/user/profile/order">
                    <li>Mis Reservas</li>
                </Link>

                <li onClick={logoutContext}>Cerrar Sesión</li>
            </ul>
        </div>
    );
}

export default UserMenu;
