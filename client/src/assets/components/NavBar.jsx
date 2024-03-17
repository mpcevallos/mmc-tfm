import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Login from "./Login";
// import Faqs from "./Faqs";
import { useStore } from "../context/store";

function NavBar() {
  const location = useLocation();
  const { user, logout } = useStore();

  // const { state } = useLocation();
  // console.log(state);
  // const navigate = useNavigate();

  // const onLogOut = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login", { replace: true });
  // };

  // // Verificar si hay un token presente
  // const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
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
                    <li className="nav-item ">
                      <Link to="/register" className="nav-link active">
                        Registrate Gratis
                      </Link>
                    </li>
                    <li className="nav-link">
                      <Link to="/preguntas-frecuentes">
                        Preguntas Frecuentes
                      </Link>
                    </li>
                    <li className="nav-item">
                      {location.pathname !== "/login" ? (
                        <Link className="nav-link" to="/dashboard">
                          Mi Cuenta
                        </Link>
                      ) : (
                        <a
                          className="nav-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Mi Cuenta
                        </a>
                      )}
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
                        {/* Botón de inicio de sesión condicional */}
                        {!user && (
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
                        )}
                        {/* Botón de cerrar sesión */}
                        {user && (
                          <>
                            <button
                              type="button"
                              className="btn btn-secondary btn-md mx-2 rounded-pill"
                              onClick={logout}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span
                                type="button"
                                className="btn-close btn-close-white"
                                aria-label="Close"
                              ></span>
                              &nbsp;Cerrar Sesión
                            </button>

                            {/* Icono de cuenta */}
                            <Link to="/dashboard">
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
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
