import React from "react";
import { Icon } from "@iconify-icon/react";
import Especialidades from "./Specialities";
import Header from "./Header";

function SearchServices({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      
      <div className="container-fluid bg-search col-12 mt-5 mb-5 pt-5">
        <div className="d-flex container-fluid col-12 mt-4 pb-5 align-items-center justify-content-center">
          <div
            className="row pt-5 pb-5 col-12 col-md-6 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#BAD8FF",
              width: "-webkit-fill-available",
            }}
          >
            <div className="d-flex row poppins-semibold color-text-blue justify-content-center title">
              Buscar una especialidad
            </div>
            <div className="d-flex col-12 col-md-6 poppins-semibold align-items-center justify-content-center">
              <iconify-icon
                icon="tabler:heart-search"
                style={{
                  color: "#3A87E9",
                  fontSize: "74px",
                  marginRight: "15px",
                }}
              ></iconify-icon>
              <form
                className="d-flex align-items-center justify-content-center"
                style={{ maxWidth: "450px", width: "100%" }}
              >
                <div
                  className="mb-3 p-3"
                  style={{ maxWidth: "450px", width: "100%" }}
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control rounded-pill"
                    aria-describedby="emailHelp"
                    placeholder="Buscar por especialidad"
                  />
                </div>
                <div className="col d-flex align-items-end">
                  <div className="d-grid col-6 mx-auto">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchServices;
