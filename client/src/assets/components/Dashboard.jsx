import React from "react";
import HeaderDash from "./HeaderDash";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

function Dashboard(onLoginComplete, token) {
  const [toDashboard, setToDashboard] = React.useState(false);

  if (toDashboard) {
    return (
      <Navigate
        to="/dashboard"
        onLoginComplete={onLoginComplete}
        token={token}
      />
    );
  }

  const data = [
    {
      id: 1,
      usuario: 14,
      especialidad: "Cirugía general",
      consultorio: "Consultorio 2",
      hospital: "Hospital central",
      fecha: "2024-04-01T06:00:00.000Z",
      hora: "10:00:00",
      registro: "2024-03-13T05:03:52.000Z",
      estatus: "Cita activa",
    },
    {
      id: 3,
      usuario: 14,
      especialidad: "Cardiología",
      consultorio: "Consultorio 3",
      hospital: "Hospital central",
      fecha: "2024-04-04T06:00:00.000Z",
      hora: "17:00:00",
      registro: "2024-03-13T05:43:20.000Z",
      estatus: "Cita activa",
    },
  ];

  return (
    <>
      <HeaderDash texto="Panel del usuario" className="container-fluid" />
      <div className="container fluid col-12 mt-5 pb-5">
        <div className="row mt-5">
          <div className="col mt-5 align-items-justify">
            <ul className="mt-5">
              <h3 className="poppins-medium poppins-sm-semibold mt-5">
                <Icon
                  icon="tabler:calendar-month"
                  className="small-mint-icons"
                  style={{ color: "#5c5c5c" }}
                />
                &nbsp;&nbsp;Mis Citas
              </h3>
              <p className="poppins-regular">Ver citas</p>
              <p>Agendar cita</p>
              <p>Cancelar cita</p>
            </ul>
            <ul className="mt-5">
              <h3 className="poppins-medium poppins-sm-semibold mt-5">
                {" "}
                <Icon
                  icon="uil:heart-medical"
                  className="small-mint-icons"
                  style={{ color: "#5c5c5c", width: "20px", height: "20px" }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especialidades
              </h3>
              <br />
              <Link to="/especialidades">Ver especialidades</Link>
              <p className="poppins-semibold red">Nuevo</p>
            </ul>
            <h3 className="poppins-medium poppins-sm-semibold mt-5">
              {" "}
              <Icon
                icon="ri:hospital-line"
                className="small-mint-icons"
                style={{ color: "#5c5c5c", paddingLeft: "30px" }}
              />
              &nbsp;&nbsp;Centro Médico
            </h3>
            <ul className="mt-5">
              <p>Ubicación</p>
              <p>Información de contacto</p>
            </ul>
          </div>
          <div className="container-fluid col-12 col-md-6 mt-5 m-4">
            <p className="poppins-semibold font-gray">Información Personal</p>
            <p className="poppins-regular font-gray">*Campo Obligatorio</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-3 p-3">
                <input
                  type="name"
                  class="form-control"
                  id="inputname"
                  aria-describedby="nameHelp"
                  placeholder="Nombre"
                  required
                ></input>
              </div>
              <div className="mb-3 p-3">
                <input
                  type="lastname"
                  class="form-control"
                  id="inputlastname"
                  aria-describedby="lastnameHelp"
                  placeholder="Apellido"
                  required
                ></input>
              </div>
              <div className="mb-3 p-3">
                <input
                  type="email"
                  class="form-control"
                  id="inputemail"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu correo"
                  required
                ></input>
              </div>
              <div className="mb-3 p-3">
                <label for="inputpassword" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputpassword"
                  placeholder="*****"
                  required
                ></input>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />

                  <label
                    className="form-check-label font-gray forgot-password"
                    for="flexCheckDefault"
                  >
                    He leído y acepto los términos y condiciones *
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onSubmit={() => toDashboard(true)}
                >
                  Registra mi cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <tbody>
          <tr>
            <th>Usuario:</th>
            <th>Especialidad:</th>
            <th>Consultorio:</th>
            <th>Hospital:</th>
            <th>Fecha:</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.usuario}</td>
              <td>{item.especialidad}</td>
              <td>{item.consultorio}</td>
              <td>{item.hospital}</td>
              <td>{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}

export default Dashboard;
