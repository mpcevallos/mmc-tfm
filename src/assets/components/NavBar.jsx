import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../context/store";

function NavBar() {
  const location = useLocation();
  const { token, user, logout } = useStore();
  const navigate = useNavigate();

  console.log({ user });

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
      <nav className="container-fluid navbar navbar-expand-lg bg-light shadowtop col-12">
        <div className="container align-items-center justify-content-center">
          <div className="col">
            <div className="navbar navbar-expand-lg">
              <div className="container align-items-center justify-content-center">
                <div className="col container align-items-center justify-content-center">
                  <Link to={"/"}>
                    <img
                      src="https://res.cloudinary.com/cloudpaudev/image/upload/v1725926113/logo_b5fceh.png"
                      alt="Logo Metabolic Medical Center"
                      style={{
                        maxWidth: "200px",
                        marginLeft: "-80px",
                        marginRight: "100px",
                      }}
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
                      className="nav-link"
                      aria-current="page"
                      aria-expanded="false"
                      to="/quienes-somos"
                    >
                      Quiénes Somos
                    </Link>
                  </li>
                  <li className="nav-item">
                    {!token && (
                      <Link className="nav-link" to="/register">
                        Registrate Gratis
                      </Link>
                    )}
                    {user && location.pathname !== "/login" && (
                      <Link className="nav-link" to="/login">
                        Registrate Gratis
                      </Link>
                    )}
                  </li>
                  <li className="nav-item">
                    <Link to="/preguntas-frecuentes" className="nav-link">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                  <li className="nav-item">
                    {location.pathname !== "/login" ? (
                      <Link className="nav-link" to="/login">
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
                  <div className="col">
                    <div className="col justify-content-end mb-3">
                      {/* Botón de inicio de sesión condicional */}
                      {!token && (
                        <Link
                          className="btn btn-outline-primary btn-md rounded-pill"
                          to="/login"
                          type="submit"
                        >
                          <iconify-icon
                            icon="mdi:logout"
                            width="20px"
                            height="16px"
                            style={{ marginRight: "5px" }}
                          ></iconify-icon>
                          <span style={{ fontWeight: "600" }}>
                            Iniciar Sesión
                          </span>
                        </Link>
                      )}
                      {/* Botón de cerrar sesión */}
                      {token && (
                        <>
                          <button
                            type="button"
                            className="btn btn-secondary btn-md mx-2 rounded-pill"
                            onClick={() => logout(navigate)}
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
    </>
  );
}

export default NavBar;
