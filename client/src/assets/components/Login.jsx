import React, { useState, useEffect } from "react";
import { services } from "../../../services/post-services";

function Login({ onLoginComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [token, setToken] = useState(null);

  const apiUrl = "http://localhost:3000/api/usuario/login";

  useEffect(() => {
    // Verifica si hay un token almacenado en el localStorage al cargar el componente
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Si hay un token, establece el estado del token
      setToken(storedToken);
    }
  }, []);

  const loginHandler = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setError(false);
        const token = data.token;
        localStorage.setItem("token", token);
        setToken(token);

        // Después de obtener el token, obtén los posts
        const posts = await services(); // Esto asume que getPost devuelve los posts
        console.log("Posts obtenidos:", posts);

        if (typeof onLoginComplete === "function") {
          onLoginComplete(false, token);
        }
      } else {
        console.log(response.status);
        setError(true);

        // Muestra mensajes de error específicos según la respuesta del servidor
        const errorData = await response.json();
        console.error("Error:", errorData.message);

        onLoginComplete(true, null);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);

      // Muestra un mensaje de error genérico
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );

      onLoginComplete(true, null);
    }
  };

  return (
    <>
      <div className="container-fluid col-lg-6 col-md-12 order-lg-2 order-md-1 d-flex justify-content-center m-0 p-0 float-end">
        <img
          src="./src/assets/img/brand/medico.png"
          alt="Fotografía de un médico"
          className="img-fluid m-0 p-0" // Eliminamos padding y margen
          style={{ width: "100%", height: "41.15em" }}
        />
      </div>
      <div className="container-fluid col-lg-6 col-md-12 order-lg-1 order-md-2 d-flex justify-content-center m-0 p-0 float-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
          className="bg-mint w-100 p-0 m-0" // Establecemos ancho al 50% y eliminamos padding y margen
        >
          <div className="d-flex col-12 pb-5 justify-content-center align-items-center float-left bg-mint"></div>
          <h1 className="poppins-regular heading1 font-white text-center mt-5">
            Iniciar sesión
          </h1>
          <div className="mb-3 p-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email1"
              aria-describedby="emailHelp"
              autoComplete="username"
              placeholder="Ingresa tu correo"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></input>
          </div>
          <div className="mb-3 p-3">
            <label htmlFor="password" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="current-password"
              placeholder="******"
            />
            <div className="mb-2 forgot-password mt-3 font-white">
              Olvidaste tu contraseña?
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={loginHandler}
            >
              Iniciar Sesión
            </button>
          </div>
          <br></br>
          <div className="font-white text-center">o iniciar sesión con</div>
          <div className="pt-3 text-center">
            <iconify-icon
              icon="logos:facebook"
              width="35"
              height="35"
            ></iconify-icon>
            &nbsp;
            <iconify-icon
              icon="ri:apple-fill"
              width="40"
              height="40"
              style={{ color: "#283544" }}
            ></iconify-icon>
            &nbsp;
            <iconify-icon
              icon="devicon:google"
              width="33"
              height="33"
            ></iconify-icon>
            <div>&nbsp; &nbsp;</div>
          </div>
        </form>
      </div>
      <div>&nbsp; &nbsp;</div>
    </>
  );
}

export default Login;
