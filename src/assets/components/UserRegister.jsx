import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
//import useToken from "/src/assets/components/utilities/useToken.js";
import useUserId from "/src/assets/components/utilities/useUserId.js";
import useAvatar from "/src/assets/components/utilities/useAvatar.js";
//import { register } from "../../../services/user-services";

function UserRegister() {
  const id = useUserId();
  const avatar = useAvatar();

  const [token, setToken] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3000/api/usuario/";

  const postData = {
    nombre,
    apellido,
    email,
    password,
  };

  const handleClear = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
  };

  const CreateUserHandler = async () => {
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
        // Verifica si el token recibido es definido y no nulo
        if (typeof token !== "undefined" && token !== null) {
          setToken(token);
          localStorage.setItem("token", token);
        } else {
          setToken(null);
          localStorage.removeItem("token");
        }

        navigate("/usuario-exitoso");
      } else {
        console.log(response.status);
        setError(true);
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );

      // Restablecer el token local a null cuando se produce un error
      setToken(null);
      localStorage.setItem("token", null);
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
            <input
              type="password"
              className="form-control"
              id="inputpassword"
              placeholder="Contraseña*"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />

              <label
                className="form-check-label font-white forgot-password"
                htmlFor="flexCheckDefault"
              >
                He leído y acepto los términos y condiciones *
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                CreateUserHandler();
                handleClear();
              }}
            >
              Registrar cuenta
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
