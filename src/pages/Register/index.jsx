import Register from "../../components/Register/Register";
import { useEffect, useContext } from "react";
import { useLocation } from "wouter";
import { AuthContext } from "../../context/AuthContext";
export default function RegisterPage() {
    const { isAuthenticated } = useContext(AuthContext);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation

    useEffect(() => {
        // 2. Usa useEffect
        if (isAuthenticated) {
            setLocation("/user/profile");
        }
    }, [setLocation, isAuthenticated]);
    return <Register />;
}
