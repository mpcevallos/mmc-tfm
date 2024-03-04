import React from "react";
import { Icon } from "@iconify-icon/react";

function FindDate() {
  return (
    <>
      <div className="container text-center mt-5 shadowsearchdate rounded">
        <div className="row">
          <div
            className="col poppins-semibold color-text-mint"
            style={{ color: "#16bfa3" }}
          >
            <iconify-icon
              icon="tabler:calendar-month"
              class="small-mint-icons"
            ></iconify-icon>
            {"Agenda una cita"}
          </div>
          <div className="col poppins-medium">
            <label for="search-date mt-3">Fecha:&nbsp;</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <div className="col poppins-medium">
            <label for="place-select">Lugar:&nbsp;</label>

            <select name="place" id="place-select">
              <option value="select-place">Seleccionar</option>
              <option value="consultorio1">Consultorio 1</option>
              <option value="consultorio2">Consultorio 2</option>
              <option value="consultorio3">Consultorio 3</option>
            </select>
          </div>
          <div className="col poppins-medium">
            <label for="especialidad-select">&nbsp;</label>
            <select name="especialidades" id="especialidad-select">
              <option value="">Especialidad</option>
              <option value="cardiologia">Cardiologia</option>
              <option value="alergologia">Alergologia</option>
              <option value="cirugia-general">Cirugia General</option>
            </select>
          </div>
          <div className="col poppins-medium">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              type="submit"
            >
              <i className="bi bi-search"></i>
              &nbsp;&nbsp;Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindDate;
