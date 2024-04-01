import React from "react";
import { useState, useEffect } from "react";
import { getSpecialities } from "../../../services/service.js";
import Header from "./Header.jsx";
import { useLocation } from "react-router-dom";

function Specialities({ search }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [specialities, setSpecialities] = useState(null);

  useEffect(() => {
    getSpecialities()
      .then((specialitiesData) => {
        setSpecialities(specialitiesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching specialities:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <h4 className="text-center text-secondary">Loading...</h4>
      </div>
    );
  }

  return (
    <>
      {location.pathname === "/especialidades" && (
        <Header texto="Especialidades" className="container-fluid" />
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        {specialities
          .filter((speciality) => {
            const lowerSearch = search.toLowerCase();
            return (
              (speciality.imgSrc &&
                speciality.imgSrc.toLowerCase().includes(lowerSearch)) ||
              (speciality.title &&
                speciality.title.toLowerCase().includes(lowerSearch)) ||
              (speciality.description &&
                speciality.description.toLowerCase().includes(lowerSearch))
            );
          })
          .map((speciality) => (
            <div key={speciality.id} className="col col-lg-4 col-md-4">
              <div className="card m-3">
                <img
                  src={speciality.imgSrc}
                  className="card-img-top"
                  alt={speciality.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{speciality.title}</h5>
                  <p className="card-text">{speciality.description}</p>
                  <button
                    href="#"
                    className="btn btn-primary rounded-pill btn-md"
                  >
                    Saber más...
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Specialities;
