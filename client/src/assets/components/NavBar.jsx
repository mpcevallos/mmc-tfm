import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Faqs from "./Faqs";

function onLogOut() {
  localStorage.removeItem("token");
  window.location.reload();
}

function NavBar() {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg bg-light sticky-top shadowtop col-12">
        <div className="container align-items-center justify-content-center">
          <div className="col">
            <div className="navbar navbar-expand-lg">
              <div className="container align-items-center justify-content-center">
                <div className="col container align-items-center justify-content-center">
                  <Link to={"/"}>
                    <img
                      src="./src/assets/img/brand/logo.png"
                      alt="Logo Metabolic Medical Center"
                      style={{ maxWidth: "200px" }}
                    />
                  </Link>
                </div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item col-lg">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      aria-expanded="false"
                      to="/quienes-somos"
                    >
                      Quiénes Somos
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Registrate Gratis
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/register">
                          Como paciente
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Como especialista
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-link active">
                    <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="#">
                      Mi Cuenta
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col">
                <div className="row">
                  <form className="d-flex" role="search"></form>
                  <div className="col">
                    <div className="col d-flex justify-content-end mb-3">
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

                      <button
                        className="btn btn-secondary btn-md mx-2 rounded-pill"
                        onClick={() => onLogOut(true)}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button
                          type="button"
                          class="btn-close btn-close-white"
                          aria-label="Close"
                        ></button>
                        &nbsp;Cerrar Sesión
                      </button>
                      <iconify-icon
                        icon="mdi:account-circle"
                        width="35"
                        height="35"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#5C5C5C",
                          marginLeft: "10px",
                        }}
                      ></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
