import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import Header from "./Header";

function UserCreatedSuccess() {
  return (
    <>
      <Header
        texto={
          <>
            <Icon
              icon="bi:person-circle"
              className="poppins-regular font-white mr-2"
              width="30px"
              height="30px"
            />
            <span className="font-white" style={{ fontSize: "2rem" }}>
              {" "}
              &nbsp;Cuenta creada
            </span>
          </>
        }
        className="container-fluid"
      />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3 className="poppins-regular font-gray">
          ¡Felicidades!
          <br />
          Su cuenta de usuario fue creada con éxito.
        </h3>
        <p className="poppins-regular">
          Inicie sesión con su correo electrónico y contraseña.
        </p>
        <Link
          className="btn btn-primary btn-md mx-2 rounded-pill"
          to="/login"
          type="submit"
        >
          <iconify-icon
            icon="mdi:logout"
            width="19"
            height="19"
            style={{ marginRight: "5px" }}
          ></iconify-icon>
          Iniciar Sesión
        </Link>
      </div>
    </>
  );
}

export default UserCreatedSuccess;
