import { createContext, useEffect, useState, useCallback } from "react";
import { login } from "../api";

import { setCookie, removeCookie, getCookie } from "../utils/cookies";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenCookie, setTokenCookie] = useState(getCookie("Token"));

    useEffect(() => {
        // Esta función se llama cada vez que el componente se monta
        // y también cada vez que el valor de tokenCookie cambia.
        if (tokenCookie) {
            console.log("Si hay cookie");
            setIsAuthenticated(true);
        } else {
            console.log("No hay cookie");
            setIsAuthenticated(false);
        }
    }, [tokenCookie]); // Dependencias del useEffect

    const loginContext = async ({ email, password }) => {
        const res = await login({ email: email, password: password });
        if (res.status === "200") {
            setCookie("Token", res.token, { secure: true });
            // Ahora actualizamos el tokenCookie que a su vez actualizará isAuthenticated
            setTokenCookie(res.token);
        }
        return res;
    };

    const logoutContext = useCallback(() => {
        removeCookie("Token");
        // No dependas de tokenCookie aquí para setIsAuthenticated, solo ponlo en false
        setIsAuthenticated(false);
        // Además, asegúrate de limpiar tokenCookie también.
        setTokenCookie(null);
    }, []);

    // ... resto de tu contexto ...

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                tokenCookie,
                loginContext,
                logoutContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
