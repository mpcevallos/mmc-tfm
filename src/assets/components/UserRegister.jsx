import React from "react";
import { Icon } from "@iconify-icon/react";
import "../../assets/styles/styles.css";

function UserRegister() {
  return (
    <div className="container-fluid bg-mint d-flex col-12 mt-4 pb-5 justify-content-center align-items-center float-start">
      <div className="text-center">
        <h1 className="d-flex poppins-regular heading1 font-white text-center mt-5 align-items-center">
          <iconify-icon
            icon="mdi:user-add-outline"
            width="40"
            height="40"
          ></iconify-icon>
          &nbsp;&nbsp;
          <span className="text-center">Iniciar sesión</span>
        </h1>
        <form>
          <div className="mb-3 p-3">
            <input
              type="name"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Nombre*"
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="lastname"
              class="form-control"
              id="exampleInputLastname"
              aria-describedby="lastnameHelp"
              placeholder="Apellido*"
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu correo"
            ></input>
          </div>
          <div className="mb-3 p-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Contraseña"
            ></input>
            <div className="mb-2 forgot-password mt-3 font-white">
              He leído y acepto los términos y condiciones del servicio *
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary btn-lg">
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
