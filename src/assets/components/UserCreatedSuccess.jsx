import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function UserCreatedSuccess() {
  return (
    <>
      <Header texto="Cuenta creada" className="container-fluid" />
      <i class="bi bi-person-circle poppins-regular font-white mb-5 h3 font-gray">
        Cuenta creada
      </i>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="poppins-regular font-gray">
          Su usuario fue creado con éxito
        </h2>
        <p className="poppins-regular">
          Inicie sesión con su correo y contraseña.
        </p>
        <Link to="/login" className="btn btn-primary poppins-regular">
          Iniciar Sesión
        </Link>
      </div>
    </>
  );
}

export default UserCreatedSuccess;
