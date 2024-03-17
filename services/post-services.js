export async function services() {
  try {
    let token = localStorage.getItem("token");

    // token = token.replace(/^"|"$/g, "");

    if (!token) {
      throw new Error("No hay token en el localStorage");
    }
    //await sleep(2000);
    console.log(token);
    const url = "http://localhost:3000/api/usuario";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ok: true,
        status: 200,
        statusText: "OK",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 401) {
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

        const retryResponse = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (retryResponse.ok) {
          const data = await retryResponse.json();
          return data;
        } else {
          throw new Error(
            "Error en la solicitud GET después de la actualización del token"
          );
        }
      } else {
        throw new Error("Error al refrescar el token");
      }
    } else {
      throw new Error("Error en la solicitud GET");
    }
  } catch (error) {
    console.error("Error en la función services:", error);
    throw error;
  }
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John",
      });
    }, 5000);
  });
}

export async function getUsers() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/usuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al obtener los usuarios:", response.statusText);
      throw new Error("Error al obtener los usuarios");
    }
  } catch (error) {
    console.error("Error en la función getUsers:", error);
    throw error;
  }
}
