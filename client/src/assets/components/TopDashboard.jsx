import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function TopDashboard() {
  return (
    <div className="container-fluid col-12 bg-mint p-4 w-100 m-0">
      <div className="container mt-5 w-100 mx-auto mb-5">
        <div className="container text-center">
          <div className="row">
            <div className="container text-center">
              <div className="row">
                <div className="col poppins-sm-semibold font-white mt-3 font-header-dash">
                  <Link to="/">
                    <Icon
                      icon="ion:home-outline"
                      width="70"
                      height="70"
                      style={{ color: "#ffffff" }}
                    />
                    <br />
                    Inicio
                  </Link>
                </div>
                <div className="col poppins-sm-semibold font-white mt-3 font-header-dash">
                  <Link to="/dashboard">
                    <Icon
                      icon="carbon:user-avatar"
                      width="70"
                      height="70"
                      style={{ color: "#ffffff" }}
                    />
                    <br />
                    Mi Cuenta
                  </Link>
                </div>
                <div className="col poppins-sm-semibold font-white mt-3 font-header-dash">
                  <Link to="/agendacita">
                    <Icon
                      icon="carbon:reminder-medical"
                      width="70"
                      height="70"
                      style={{ color: "#ffffff" }}
                    />
                    <br />
                    Agendar Citas
                  </Link>
                </div>
                <div className="col poppins-sm-semibold font-white mt-3 font-header-dash">
                  <Link to="/especialidades">
                    <Icon
                      icon="tabler:heart-search"
                      width="70"
                      height="70"
                      style={{ color: "#ffffff" }}
                    />
                    <br />
                    Especialidades
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDashboard;
