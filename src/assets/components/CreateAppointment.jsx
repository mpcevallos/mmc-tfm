import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderDash from "./HeaderDash";
//import { useStore } from "../context/store";
import { Icon } from "@iconify-icon/react";
import useToken from "/src/assets/components/utilities/useToken.js";
import { postCita } from "../../../services/post-cita";
import useUserId from "/src/assets/components/utilities/useUserId.js";

function CreateAppointment({ onLoginComplete }) {
  const token = useToken();
  const id = useUserId();
  //const [id, setId] = useState("");
  const [usuario, setUsuario] = useState("");
  const [consultorio, setConsultorio] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [registro, setRegistro] = useState("");
  const [estatus, setEstatus] = useState("");
  const [error, setError] = useState(false);
  const [citas, setCitas] = useState([]);

  const postData2 = {
    usuario: 14,
    consultorio: 3,
    especialidad: 1,
    fecha: "20/03/2024",
    hora: "10:00",
  };

  const postData = {
    //id,
    usuario: id, // ID del usuario
    consultorio, // ID del consultorio
    especialidad, // ID de la especialidad
    fecha,
    hora,
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken);
  }, []);

  const navigate = useNavigate();

  const handleClear = () => {
    setConsultorio("");
    setEspecialidad("");
    setFecha("");
    setHora("");
  };

  const apiUrl = "http://localhost:3000/api/cita/";

  const CreateAppointmentHandler = async () => {
    console.log({ postData, postData2, token });
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Su cita fue creada con exito");
        console.log({ data });
        setError(false);
        navigate("/consultarcitas", {
          replace: true,
        });
      } else {
        console.log(response.status);
        setError(true);
        alert("No se puede crear la cita. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(true);
      console.error(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <>
      <HeaderDash texto="Panel del usuario" className="container-fluid" />
      <div className="container-fluid d-flex col-12 col-md-9 pb-5 mt-5 justify-content-center float-space-between mt-5 poppins-medium font-gray">
        <div className="row mt-5">
          <Icon
            icon="tabler:calendar-month"
            className="small-mint-icons"
            style={{ color: "#5c5c5c", width: "20px", height: "20px" }}
          />
          <span
            className="ml-2 poppins-regular mb-4"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agendar
            nueva cita
          </span>
          <div className="col">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                CreateAppointmentHandler();
              }}
            >
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
                  className="form-select ml-2"
                  onChange={(e) => {
                    console.log(e.target.value);

                    const fecha = e.target.value;
                    const date = new Date(fecha);
                    console.log(date.toLocaleDateString("en-GB"));
                    console.log(date.toLocaleTimeString("en-GB"));

                    setFecha(date.toLocaleDateString("en-GB"));
                    setHora(date.toLocaleTimeString("en-GB"));
                  }}
                />
              </div>
              <label htmlFor="search-place" className="mt-3">
                Consultorio:&nbsp;
              </label>
              <div className="mb-3 p-3">
                <select
                  name="consultorio"
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
                <label htmlFor="especialidad-select" className="mt-3">
                  Especialidad:&nbsp;
                </label>
                <div className="mb-3 p-3">
                  <select
                    name="especialidad"
                    id="especialidad"
                    className="form-select"
                    type="select"
                    placeholder="Seleccionar"
                    onChange={(e) => setEspecialidad(e.target.value)}
                  >
                    &nbsp;
                    <option value="Seleccionar">Seleccionar</option>
                    <option value={1}>Endocrinología</option>
                    <option value={2}>Medicina Interna</option>
                    <option value={3}>Gastroenterología</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 p-3">
                <div className="col mx-auto">
                  &nbsp;&nbsp;&nbsp;{" "}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "600px" }}
                  >
                    Enviar
                  </button>
                </div>
                <div className="mb-3 p-3">
                  <div className="col mx-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      onClick={handleClear}
                      style={{ width: "600px" }}
                    >
                      Limpiar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAppointment;
