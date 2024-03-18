import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderDash from "./HeaderDash";
import { Icon } from "@iconify-icon/react";
import { userEdit } from "../../../services/user-edit";
import useToken from "/src/assets/components/utilities/useToken.js";
import useUserId from "/src/assets/components/utilities/useUserId.js";
import useAvatar from "/src/assets/components/utilities/useAvatar.js";

function Dashboard({ onLoginComplete }) {
  const token = useToken();
  const id = useUserId();
  const avatar = useAvatar();

  console.log(id);
  console.log(avatar);
  //const [id, setId] = useState("");
  //const [token, setToken] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [error, setError] = useState(false);

  /*const patchData = {
    id: 4,
    nombre: "Jorge",
    apellido: "Campos",
    email: "jorge.campos@gmail.com",
    password: "123",
  };*/

  const patchData = {
    id,
    nombre,
    apellido,
    email,
    password,
    avatar: newAvatar,
  };

  const navigate = useNavigate();

  const handleClear = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
  };

  const apiUrl = `http://localhost:3000/api/usuario/`;
  //const apiUrl = `http://localhost:3000/api/usuario/${id}`;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken);
  }, []);

  const CreateUserEditHandler = async () => {
    console.log({ patchData });
    try {
      if (!token) {
        throw new Error("No hay token en el localStorage");
      }
      console.log("Token utilizado:", token);
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluye el token aquí
        },
        body: JSON.stringify(patchData),
      });

      //token = token.replace(/^"|"$/g, "");

      if (response.ok) {
        const data = await response.json();
        setError(false);
        //const token = data.token;
        //localStorage.setItem("token", token);
        alert("Usuario actualizado correctamente");
        //Actualiza el estado del token
        //setToken(token);

        // Después de obtener el token, obtén el usuario
        const posts = await userEdit(
          id,
          nombre,
          apellido,
          email,
          password,
          newAvatar
        );
        console.log("Usuario editado:", posts);

        // Llama a la función onLoginComplete con el token almacenado en el localStorage y el estado de error falso
        //y el token obtenido al iniciar sesión correctamente
        if (typeof onLoginComplete === "function") {
          onLoginComplete(false, token);
        }

        // Redirige a la página principal FUNCIONANDO...
        navigate("/dashboard", {
          replace: true,
          state: {
            logged: true,
            token: token,
          },
        });
      } else {
        console.log(response.status);
        setError(true);

        // Mostrar una alerta
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
      // Cierre de catch para el error de redirección a la página principal
    } catch (error) {
      console.error("Error:", error);
      setError(true);

      // Mostrar una alerta de error
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo."
      );
    }
  };

  // const data = [
  //   {
  //     id: 1,
  //     usuario: 14,
  //     especialidad: "Cirugía general",
  //     consultorio: "Consultorio 2",
  //     hospital: "Hospital central",
  //     fecha: "2024-04-01T06:00:00.000Z",
  //     hora: "10:00:00",
  //     registro: "2024-03-13T05:03:52.000Z",
  //     estatus: "Cita activa",
  //   },
  //   {
  //     id: 3,
  //     usuario: 14,
  //     especialidad: "Cardiología",
  //     consultorio: "Consultorio 3",
  //     hospital: "Hospital central",
  //     fecha: "2024-04-04T06:00:00.000Z",
  //     hora: "17:00:00",
  //     registro: "2024-03-13T05:43:20.000Z",
  //     estatus: "Cita activa",
  //   },
  // ];

  return (
    <>
      <HeaderDash texto="Panel del usuario" className="container-fluid" />
      <div className="container fluid col-12 mt-5 pb-5">
        <div className="row mt-5">
          <div className="col mt-5 align-items-justify">
            <ul className="mt-5">
              <h3 className="poppins-medium poppins-sm-semibold mt-5">
                <Icon
                  icon="tabler:calendar-month"
                  className="small-mint-icons"
                  style={{ color: "#5c5c5c" }}
                />
                &nbsp;&nbsp;Mis Citas
              </h3>
              <Link to="/consultarcitas" className="poppins-regular">
                Consultar citas
              </Link>
              <br />
              <Link to="/citas" className="poppins-regular">
                Agendar cita
              </Link>
            </ul>
            <ul className="mt-5">
              <h3 className="poppins-medium poppins-sm-semibold mt-5">
                {" "}
                <Icon
                  icon="uil:heart-medical"
                  className="small-mint-icons"
                  style={{ color: "#5c5c5c", width: "20px", height: "20px" }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especialidades
              </h3>
              <br />
              {/* <Link to="/especialidades">Ver especialidades</Link> */}
              <p className="poppins-semibold red">Proximamente</p>
            </ul>
            <h3 className="poppins-medium poppins-sm-semibold mt-5">
              {" "}
              <Icon
                icon="ri:hospital-line"
                className="small-mint-icons"
                style={{ color: "#5c5c5c", paddingLeft: "30px" }}
              />
              &nbsp;&nbsp;Centro Médico
            </h3>
            <ul className="mt-5">
              <p>Ubicación</p>
              <p>Información de contacto</p>
            </ul>
          </div>
          <div className="container-fluid col-12 col-md-6 mt-5 m-4">
            <p className="poppins-semibold font-gray">Información Personal</p>
            <p className="poppins-regular font-gray">*Campo Obligatorio</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                CreateUserEditHandler();
              }}
            >
              <div className="mb-3 p-3">
                <label htmlFor="inputname" className="form-label">
                  Nombre:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="inputname"
                  aria-describedby="nameHelp"
                  placeholder="Nombre*"
                  required
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                ></input>
              </div>
              <div className="mb-3 p-3">
                <label htmlFor="inputlastname" className="form-label">
                  Apellido:
                </label>
                <input
                  type="lastname"
                  className="form-control"
                  id="inputlastname"
                  aria-describedby="lastnameHelp"
                  placeholder="Apellido*"
                  required
                  onChange={(e) => setApellido(e.target.value)}
                  value={apellido}
                ></input>
              </div>
              <div className="mb-3 p-3">
                <label htmlFor="inputemail" className="form-label">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu correo*"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
              </div>
              <div className="mb-3 p-3">
                <label htmlFor="inputpassword" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword"
                  placeholder="*****"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></input>
                <div className="mb-3 p-3">
                  <label htmlFor="inputavatar" className="form-label">
                    Selecciona un avatar:
                  </label>
                  <select
                    name="avatar"
                    id="avatar"
                    className="form-select"
                    type="select"
                    placeholder="Selecciona tu avatar"
                    onChange={(e) => setNewAvatar(e.target.value)}
                  >
                    &nbsp;
                    <option value="Seleccionar">Seleccionar</option>
                    <option value={1}>Avatar Default</option>
                    <option value={2}>Avatar Mujer</option>
                    <option value={3}>Avatar Hombre</option>
                    <option value={4}>Avatar Gato</option>
                  </select>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />

                  <label
                    className="form-check-label font-gray forgot-password"
                    htmlFor="flexCheckDefault"
                  >
                    He leído y acepto los términos y condiciones *
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto w-50">
                <button
                  type="submit"
                  className="container-fluid btn btn-primary w-50 rounded-pill"
                  onSubmit={CreateUserEditHandler}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="container-fluid btn btn-outline-primary w-50 rounded-pill"
                  onClick={handleClear}
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
