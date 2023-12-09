const baseURL = import.meta.env.VITE_API_URL;

//añadir env
export async function loginWithGoogle() {
    try {
        // Haciendo una solicitud GET a la ruta /login-google en tu servidor
        const response = await fetch(baseURL + "/login-google");
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // Parseando la respuesta JSON para obtener la URL de redirección
        const data = await response.json();
        const redirectURL = data.url;

        if (redirectURL) {
            // Redirigiendo al usuario a la página de autenticación de Google
            window.location.href = redirectURL;
        } else {
            console.error("No se pudo obtener la URL de redirección");
        }
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
    }
}
/*
export async function handleLoginFacebook() {
    // Construir la URL para la autorización de Facebook.
    const clientId = "888423156034975"; // Asegúrate de usar tu propio client ID.
    const redirectUri = encodeURIComponent(
        "http://localhost:3000/callback-facebook"
    );
    const authUrl = `https://www.facebook.com/v3.2/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=public_profile,email&access_type=offline`;

    // Redirigir al usuario a la URL de autorización de Facebook.
    window.location.href = authUrl;
}

*/
export async function login({ email, password }) {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        const response = await fetch(baseURL + "/user/login", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}

export async function register({
    email,
    password,
    confirmPassword,
    nombre,
    apellido,
    apellido2,
    telefono,
    rut,
}) {
    try {
        console.log(
            email,
            password,
            confirmPassword,
            nombre,
            apellido,
            apellido2,
            telefono,
            rut
        );
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("Nombre", nombre);
        formData.append("Apellido", apellido);
        formData.append("SegundoApellido", apellido2);
        formData.append("Rut", rut);
        formData.append("Fono", telefono);

        const response = await fetch(baseURL + "/user/register", {
            method: "POST",
            body: formData,
        });

        return response.status;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}
export async function getUser({ token }) {
    try {
        const response = await fetch(baseURL + "/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`, // Reemplaza 'TU_TOKEN_AQUI' con tu token real
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error al recibir al usuario:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}

export async function resetPassword({ email }) {
    try {
        const formData = new FormData();
        formData.append("email", email);

        const response = await fetch(baseURL + "/user/reset-password", {
            method: "POST",
            body: formData,
        });

        return response.status;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}
export async function updateUser(token, data) {
    try {
        const res = await fetch(baseURL + "/user/update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data), // Convierte los datos a JSON
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
    } catch (e) {
        console.error("Error al actualizar los datos del usuario", e);
        throw e; // Relanzar el error para que pueda ser manejado por el llamador
    }
}
