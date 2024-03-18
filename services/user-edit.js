export async function userEdit(id, nombre, apellido, email, password) {
  try {
    let token = localStorage.getItem("token");

    //token = token.replace(/^"|"$/g, "");

    if (!token) {
      throw new Error("No hay token en el localStorage");
    }

    const patchData = {
      id,
      nombre,
      apellido,
      email,
      password,
    };

    const apiUrl = `http://localhost:3000/api/usuario/`;

    const patchResponse = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(patchData),
    });

    if (patchResponse.ok) {
      const updatedData = await patchResponse.json();
      return updatedData;
    } else if (patchResponse.status === 401) {
      // Si la solicitud PATCH devuelve un error 401 (no autorizado), puedes intentar refrescar el token
      const refreshResponse = await fetch(
        "https://authentication-server.com/refresh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (refreshResponse.ok) {
        const { access_token } = await refreshResponse.json();
        localStorage.setItem("token", access_token);
        token = access_token;

        // Después de refrescar el token, intenta nuevamente la solicitud PATCH
        const retryPatchResponse = await fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(patchData),
        });

        if (retryPatchResponse.ok) {
          const updatedData = await retryPatchResponse.json();
          return updatedData;
        } else {
          throw new Error(
            "Error al intentar la solicitud PATCH después de refrescar el token"
          );
        }
      } else {
        throw new Error("Error al refrescar el token");
      }
    } else {
      throw new Error("Error en la solicitud PATCH");
    }
  } catch (error) {
    console.error("Error en la función userEdit:", error);
    throw error;
  }
}
