import React from "react";
import { Icon } from "@iconify-icon/react";

const CardSpecialist = () => {
  return (
    <div className="container-lg mt-5">
      <div className="row">
        <div className="col-12 d-flex align-items-center mb-5">
          <Icon
            icon="fa6-solid:user-doctor"
            style={{
              color: "#16bfa3",
              fontSize: "42px",
              marginRight: "10px",
            }}
          />
          <h2 className="poppins-semibold color-text-mint title">
            Especialistas destacados
          </h2>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 gradient-background rounded">
                <img
                  src="https://res.cloudinary.com/cloudpaudev/image/upload/v1725926127/doctor1_o7kale.png"
                  className="img-fluid rounded-start p-3"
                  alt="Fotografía de una mujer"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body shadow-sm rounded-3">
                  <h5 className="card-title poppins-semibold">
                    Dra. Camila Herrera
                  </h5>
                  <p className="card-text poppins-regular">Médico Internista</p>
                  <p className="card-text poppins-regular">
                    <small className="text-body-secondary poppins-regular">
                      <i className="bi bi-star-fill yellow"></i> 4.9
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4 rounded"
                style={{ backgroundColor: "#ACFBE1" }}
              >
                <img
                  src="https://res.cloudinary.com/cloudpaudev/image/upload/v1725926129/doctor2_vb9obn.png"
                  className="img-fluid rounded-start p-3"
                  alt="Fotografía de una hombre"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body shadow-sm rounded-3">
                  <h5 className="card-title poppins-semibold">
                    Dr. Javier Morales
                  </h5>
                  <p className="card-text poppins-regular">
                    Endocrinólogo & Gastroenterólogo
                  </p>
                  <p className="card-text poppins-regular">
                    <small className="text-body-secondary poppins-regular">
                      <i className="bi bi-star-fill yellow"></i> 4.9
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 gradient-background rounded">
                <img
                  src="https://res.cloudinary.com/cloudpaudev/image/upload/v1725926128/doctor3_misuyn.png"
                  className="img-fluid rounded-start p-3"
                  alt="Fotografía de un hombre"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body shadow-sm rounded-3">
                  <h5 className="card-title poppins-semibold">
                    Dr. Rodrigo Silva
                  </h5>
                  <p className="card-text poppins-regular">Médico Internista</p>
                  <p className="card-text poppins-regular">
                    <small className="text-body-secondary poppins-regular">
                      <i className="bi bi-star-fill yellow"></i> 4.9
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSpecialist;
