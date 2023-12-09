import Profile from "../../components/Profile/Profile";
import { useEffect, useContext } from "react";
import { useLocation } from "wouter";
import { AuthContext } from "../../context/AuthContext";

export default function ProfilePage() {
    const { isAuthenticated } = useContext(AuthContext);
    const [, setLocation] = useLocation();

    useEffect(() => {
        if (!isAuthenticated) {
            setLocation("/login");
        }
    }, [setLocation, isAuthenticated]);
    return <Profile />;
}
