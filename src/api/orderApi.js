const baseURL = import.meta.env.VITE_API_URL;

export async function getPedidos(token) {
    try {
        const response = await fetch(baseURL + "/user/mis_reservas", {
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
