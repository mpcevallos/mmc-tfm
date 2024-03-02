import React from "react";
import Login from "./Login";

function NavBar() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg bg-light sticky-top shadowtop col-12">
      <div class="container align-items-center justify-content-center">
        <div class="col">
          <div className="navbar navbar-expand-lg">
            <div className="container align-items-center justify-content-center">
              <div className="col container align-items-center justify-content-center">
                <img
                  src="./src/assets/img/logo.png"
                  alt="Logo Metabolic Medical Center"
                ></img>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Quiénes Somos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Registrate Gratis
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Como paciente
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Como especialista
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col">
            <div className="row">
              <form className="d-flex" role="search"></form>
              <div className="col">
                <div className="col d-flex justify-content-space-between mb-3">
                  <button
                    className="btn btn-outline-primary btn-lg rounded-pill"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
