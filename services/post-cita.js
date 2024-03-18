export async function postCita() {
  //console.log({ id });
  try {
    let token = localStorage.getItem("token");
    console.log({ token });

    if (!token) {
      throw new Error("No hay token en el localStorage");
    }

    //const url = `http://localhost:3000/api/cita/${id}`; //Devuelve el listado de citas con ID
    const apiUrl = "http://localhost:3000/api/cita";

    const responseCita = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (responseCita.ok) {
      return await responseCita.json();
    } else if (responseCita.status === 401) {
      console.log();
    }
  } catch {
    console.log();
  }
}

/*const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return await response.json();
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
          return await retryResponse.json();
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
    console.error("Error en la función postCita:", error);
    throw error;
  }
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 5000);
  });
}

export async function getUsers(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/cita/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error al obtener los usuarios:", response.statusText);
      throw new Error("Error al obtener los usuarios");
    }
  } catch (error) {
    console.error("Error en la función getUsers:", error);
    throw error;
  }
}*/
