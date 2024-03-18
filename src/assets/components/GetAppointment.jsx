import React from "react";
import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";
import HeaderDash from "./HeaderDash.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";
import useToken from "/src/assets/components/utilities/useToken.js";
import useUserId from "/src/assets/components/utilities/useUserId.js";

function GetAppointment() {
  const token = useToken();
  const id = useUserId();
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  /*const data = [
    {
      id: 1,
      usuario: 14,
      especialidad: "Cirugía general",
      consultorio: "Consultorio 2",
      hospital: "Hospital central",
      fecha: "2024-04-01T05:00:00.000Z",
      hora: "10:00:00",
      registro: "2024-03-13T10:03:52.000Z",
      estatus: "Cita activa",
    },
    {
      id: 3,
      usuario: 14,
      especialidad: "Cardiología",
      consultorio: "Consultorio 3",
      hospital: "Hospital central",
      fecha: "2024-04-04T05:00:00.000Z",
      hora: "17:00:00",
      registro: "2024-03-13T10:43:20.000Z",
      estatus: "Cita activa",
    },
    {
      id: 4,
      usuario: 14,
      especialidad: "Cardiología",
      consultorio: "Consultorio 3",
      hospital: "Hospital central",
      fecha: "2024-04-04T05:00:00.000Z",
      hora: "17:00:00",
      registro: "2024-03-15T06:46:21.000Z",
      estatus: "Cita activa",
    },
  ];*/

  const apiUrl = `http://localhost:3000/api/cita/${id}`;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken);
  }, []);

  const getAppointment = async () => {
    try {
      // Definir las variables con los valores correspondientes
      //const usuario = 14;
      //const consultorio = 2;
      //const especialidad = 3;
      //const fecha = "2024-04-01";
      //const hora = "10:00:00";
      //const estatus = 1;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Asegúrate de incluir el token aquí
        },
      });

      // Verifica si la respuesta es exitosa
      if (response.ok) {
        // Si es exitosa, obtiene los datos de la respuesta
        const data = await response.json();
        setData(data.data);
        console.log({ data });
        setError(false);
      } else {
        // Si la respuesta no es exitosa, establece el estado de error en true
        setError(true);
      }
    } catch (error) {
      // Maneja los errores de la petición
      console.error("Error:", error);
      // Establece el estado de error en true
      setError(true);
    }
  };

  return (
    <>
      <HeaderDash texto="Panel del usuario" className="container-fluid" />
      <div className="container text-center mt-5 shadowsearchdate rounded">
        <div className="row">
          <div className="col-md-12 col-lg-6 poppins-semibold color-text-mint">
            <div className="d-flex align-items-center">
              <Icon icon="tabler:calendar-month" className="small-mint-icons" />
              <span
                className="ml-2 "
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                &nbsp;&nbsp;Consultar citas
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 poppins-medium d-flex align-items-center">
            <label htmlFor="search-date" className="mt-3">
              Fecha y Hora:&nbsp;
            </label>
            <input
              type="datetime-local"
              id="cita"
              name="agendar-cita"
              min="2024-04-01"
              max="2024-12-31"
              className="form-select ml-2"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-6 poppins-medium d-flex align-items-center">
            <label htmlFor="place-select">Lugar:&nbsp;</label>
            <select name="place" id="place-select" className="form-select ml-2">
              <option value="select-place">Seleccionar</option>
              <option value={1}>Consultorio 1</option>
              <option value={2}>Consultorio 2</option>
              <option value={3}>Consultorio 3</option>
            </select>
          </div>
          <div className="col-md-12 col-lg-6 poppins-medium d-flex align-items-center">
            <label htmlFor="especialidad-select">Especialidad:&nbsp;</label>
            <select
              name="especialidades"
              id="especialidad-select"
              className="form-select ml-2"
            >
              <option value="">Seleccionar</option>
              <option value={1}>Cardiologia</option>
              <option value={2}>Alergologia</option>
              <option value={3}>Cirugia General</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 float-end">
          <div className="col poppins-semibold">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              type="submit"
              onClick={getAppointment}
            >
              <i className="bi bi-search"></i>
              &nbsp;&nbsp;<b>Buscar</b>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-striped table-hover mx-auto">
          <thead>
            <tr>
              <th>Especialidad:</th>
              <th>Consultorio:</th>
              <th>Hospital:</th>
              <th>Fecha:</th>
              <th>Hora:</th>
              <th>Registro:</th>
              <th>Estatus:</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.especialidad}</td>
                <td>{item.consultorio}</td>
                <td>{item.hospital}</td>
                <td>{item.fecha}</td>
                <td>{item.hora}</td>
                <td>{item.registro}</td>
                <td>{item.estatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GetAppointment;
