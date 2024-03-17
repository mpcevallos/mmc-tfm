import React from "react";
import { useState, useEffect } from "react";
import { getSpecialities } from "../../../services/service.js";
import SearchServices from "./SearchServices.jsx";

function Specialities({ search }) {
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
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {specialities
        .filter(
          (speciality) =>
            speciality.imgSrc?.toLowerCase()?.includes(search.toLowerCase()) ||
            speciality.title?.toLowerCase()?.includes(search.toLowerCase()) ||
            speciality.description
              ?.toLowerCase()
              ?.includes(search.toLowerCase())
        )
        .map((speciality, i) => (
          <div key={i} className="col col-lg-4 col-md-4">
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
                  className="btn btn-primary rounded-pill btn-lg"
                >
                  Ver más...
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Specialities;
