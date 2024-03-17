import React from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container-fluid d-flex bg-mint col-12 pb-5 justify-content-center align-items-center float-start">
      <div className="text-center">
        <h1 className="poppins-regular heading1 font-white text-center mt-5">
          Iniciar sesión
        </h1>
        <form>
          <div class="mb-3 p-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu correo"
            ></input>
          </div>
          <div class="mb-3 p-2">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Contraseña"
            ></input>
            <div class="mb-2 forgot-password mt-3 font-white">
              Olvidaste tu contraseña?
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class="btn btn-primary btn-lg">
              Iniciar Sesión
            </button>
          </div>
          <div className="font-white pt-3">o iniciar sesión con</div>
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
        <p className="font-white mt-2 align-items-center">
          <Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
