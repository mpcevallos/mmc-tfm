import React from "react";
import { Icon } from "@iconify-icon/react";

function Appointment() {
  return (
    <>
      <div className="container text-center mt-5 shadowsearchdate rounded">
        <div className="row">
          <div className="col-md-12 col-lg-6 poppins-semibold color-text-mint">
            <div className="d-flex align-items-center">
              <Icon icon="tabler:calendar-month" className="small-mint-icons" />
              <span
                className="ml-2 "
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                &nbsp;&nbsp;Agenda una cita
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
              min="2024-01-01"
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
              <option value="consultorio1">Consultorio 1</option>
              <option value="consultorio2">Consultorio 2</option>
              <option value="consultorio3">Consultorio 3</option>
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
              <option value="cardiologia">Cardiologia</option>
              <option value="alergologia">Alergologia</option>
              <option value="cirugia-general">Cirugia General</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 float-end">
          <div className="col poppins-semibold">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              type="submit"
            >
              <i className="bi bi-search"></i>
              &nbsp;&nbsp;<b>Buscar</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
