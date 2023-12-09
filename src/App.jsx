import "./App.css";
import Layout from "./components/Layout";
import { Route } from "wouter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPasword from "./pages/ForgotPassword";
import ChangedPassword from "./pages/ForgotPassword/passwordChanged";
import Profile from "./pages/Profile";
import Order from "./pages/Profile/Order";
function App() {
    return (
        <>
            <Layout>
                <Route
                    component={Home}
                    path="/"
                />
                <Route
                    component={Login}
                    path="/login"
                />
                <Route
                    component={Register}
                    path="/register"
                />
                <Route
                    component={ForgotPasword}
                    path="/forgot-password"
                />
                <Route
                    component={ChangedPassword}
                    path="/forgot-password/changed-password"
                />
                <Route
                    component={Profile}
                    path="/user/profile"
                />
                <Route
                    component={Order}
                    path="/user/profile/order"
                />
            </Layout>
        </>
    );
}

export default App;
