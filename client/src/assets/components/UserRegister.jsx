import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import "/src/assets/styles/styles.css";
import { register } from "../../../services/user-services";
import Footer from "./Footer";

function UserRegister() {
  const [token, setToken] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const apiUrl = "http://localhost:3000/api/usuario/";

  const postData = {
    nombre,
    apellido,
    email,
    password,
  };

  const navigate = useNavigate();

  const CreateUserHandler = async () => {
    //setNombre("Marco");
    console.log({ postData });
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
        setError(false);
        const token = data.token;
        // Almacena el token en el localStorage
        localStorage.setItem("token", token);

        // Actualiza el estado del token
        http: setToken(token);

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
    } catch (error) {
      console.error("Error:", error);
      setError(true);

      // Mostrar una alerta
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="container-fluid bg-mint d-flex col-12 pb-5 justify-content-center align-items-center float-start">
      <div className="text-center">
        <h1 className="d-flex poppins-regular heading1 font-white text-center mt-5 align-items-center">
          <iconify-icon
            icon="mdi:user-add-outline"
            width="40"
            height="40"
          ></iconify-icon>
          &nbsp;&nbsp;
          <span className="text-center">Registrar usuario</span>
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateUserHandler();
          }}
        >
          <div className="mb-3 p-3">
            <input
              type="name"
              class="form-control"
              id="inputname"
              aria-describedby="nameHelp"
              placeholder="Nombre*"
              required
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="lastname"
              class="form-control"
              id="inputlastname"
              aria-describedby="lastnameHelp"
              placeholder="Apellido*"
              required
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="email"
              class="form-control"
              id="inputemail"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu correo"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="password"
              class="form-control"
              id="inputpassword"
              placeholder="Contraseña"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />

              <label
                className="form-check-label font-white forgot-password"
                for="flexCheckDefault"
              >
                He leído y acepto los términos y condiciones *
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onSubmit={CreateUserHandler}
            >
              Registra mi cuenta
            </button>
          </div>
          <div className="font-white pt-3"></div>
          <div className="pt-3">
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
