import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderDash from "./HeaderDash";
import { useStore } from "../context/store";
import useToken from "/src/assets/components/utilities/useToken.js";
import { postCita } from "../../../services/post-cita";

function CreateAppointment({ onLoginComplete }) {
  const token = useToken();
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState("");
  const [consultorio, setConsultorio] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [registro, setRegistro] = useState("");
  const [estatus, setEstatus] = useState("");
  const [error, setError] = useState(false);
  const [citas, setCitas] = useState([]);

  const apiUrl = "http://localhost:3000/api/cita/";

  const handleClear = () => {
    setId("");
    setUsuario("");
    setConsultorio("");
    setEspecialidad("");
    setFecha("");
    setHora("");
    setRegistro("");
    setEstatus("");
  };

  const postData = {
    id,
    usuario,
    consultorio,
    especialidad,
    fecha,
    hora,
  };

  const navigate = useNavigate();

  const CreateAppointmentHandler = async () => {
    console.log({ postData });
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
        setError(false);
        const token = data.token;
        // Almacena el token en el localStorage
        localStorage.setItem("token", token);

        // Actualiza el estado del token
        //setToken(token);

        // Redirige a la página principal FUNCIONANDO...
        navigate("/dashboard", {
          replace: true,
          state: {
            message: "Credenciales correctas. Por favor, inicia sesión.",
          },
        });
      } else {
        console.log(response.status);
        setError(true);

        // Mostrar una alerta
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);

      // Mostrar una alerta
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <>
      <HeaderDash texto="Panel del usuario" className="container-fluid" />
      <div className="container-fluid d-flex col-12 pb-5 justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="d-flex poppins-regular heading1 font-white text-center mt-5 align-items-center">
            <iconify-icon
              icon="mdi:user-add-outline"
              width="40"
              height="40"
            ></iconify-icon>
            &nbsp;&nbsp;
            <span className="text-center">Registrar usuario</span>
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              CreateAppointmentHandler();
            }}
          >
            <label htmlFor="id" className="mt-3">
              ID:&nbsp;
            </label>
            <div className="mb-3 p-3">
              <input
                type="text"
                id="id"
                className="form-control"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <label htmlFor="usuario" className="mt-3">
              Usuario:&nbsp;
            </label>
            <div className="mb-3 p-3">
              <input
                className="form-control"
                id="usuario"
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <label htmlFor="searchdatetime" className="mt-3">
              Fecha y Hora:&nbsp;
            </label>
            <div className="mb-3 p-3">
              <input
                type="datetime-local"
                id="cita"
                name="agendar-cita"
                min="2024-04-01"
                max="2024-12-31"
                value="2024-04-01T10:00"
                className="form-select ml-2"
              />
            </div>
            <label htmlFor="search-date" className="mt-3">
              Consultorio:&nbsp;
            </label>
            <div className="mb-3 p-3">
              <select
                name="especialidad"
                className="form-select"
                id="consultorio"
                type="select"
                placeholder="Consultorio"
                value={consultorio}
                onChange={(e) => setConsultorio(e.target.value)}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value={1}>Consultorio 1</option>
                <option value={2}>Consultorio 2</option>
                <option value={3}>Consultorio 3</option>
              </select>
            </div>
            <div className="col-md-12 col-lg-6 poppins-medium d-flex align-items-center">
              <label htmlFor="especialidad-select">Especialidad:&nbsp;</label>

              <select
                name="especialidad"
                id="especialidad"
                className="form-select"
                style={{ width: "9em" }}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value={1}>Cardiologia</option>
                <option value={2}>Alergologia</option>
                <option value={3}>Cirugia General</option>
              </select>
            </div>
            <div className="mb-3 p-3">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={CreateAppointmentHandler}
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <></>
      <div className="container-fluid d-flex col-12 pb-5 justify-content-center align-items-center float-start">
        <div className="text-center">
          <div className="col table poppins-regular font-gray text-center mt-5 align-items-center ">
            <tbody>
              <tr>
                <th>Id:</th>
                <th>Usuario:</th>
                <th>Consultorio:</th>
                <th>Especialidad:</th>
                <th>Fecha:</th>
                <th>Hora:</th>
                <th>Registro:</th>
                <th>Estatus:</th>
              </tr>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.id}</td>
                  <td>{cita.usuario}</td>
                  <td>{cita.consultorio}</td>
                  <td>{cita.especialidad}</td>
                  <td>{cita.fecha}</td>
                  <td>{cita.hora}</td>
                  <td>{cita.registro}</td>
                  <td>{cita.estatus}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAppointment;
