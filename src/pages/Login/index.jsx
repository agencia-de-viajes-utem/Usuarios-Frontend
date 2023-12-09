import Login from "../../components/Login";
import { useEffect, useContext } from "react";
import { useLocation } from "wouter";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
    const { isAuthenticated } = useContext(AuthContext);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation

    useEffect(() => {
        // 2. Usa useEffect
        if (isAuthenticated) {
            setLocation("/user/profile");
        }
    }, [setLocation, isAuthenticated]);
    return <Login />;
}
