import React from "react";

const CardSpecialist = () => {
  return (
    <div className="container-lg d-flex mt-5 mx-auto">
      <div className="row">
        <div className="col" style={{ width: "600px" }}>
          <div className="card mb-3" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4 gradient-background rounded">
                <img
                  src="/src/assets/img/avatar/doctor1.png"
                  className="img-fluid rounded-start p-3 mt-5"
                  alt="Fotografía de una mujer"
                />
              </div>
              <div className="col-md-8 mt-3">
                <div
                  className="card-body shadow mt-3 rounded-3"
                  style={{ height: "200px" }}
                >
                  <h5 className="card-title poppins-semibold">
                    Dra. Camila Herrera
                  </h5>
                  <p className="card-text poppins-regular">Médico Internista</p>
                  <p className="card-text">
                    <small className="text-body-secondary poppins-regular">
                      <i class="bi bi-star-fill yellow"></i> 4.9
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col md-6" style={{ width: "600px" }}>
          <div className="card mb-3" style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div
                className="col-md-4 rounded"
                style={{ backgroundColor: "#ACFBE1" }}
              >
                <img
                  src="/src/assets/img/avatar/doctor2.png"
                  className="img-fluid rounded-start p-3 mt-5"
                  alt="Fotografía de una hombre"
                />
              </div>
              <div className="col-md-8 mt-3">
                <div
                  className="card-body shadow mt-3 rounded-3"
                  style={{ height: "200px" }}
                >
                  <h5 className="card-title poppins-semibold">
                    Dr. Javier Morales
                  </h5>
                  <p className="card-text poppins-regular">
                    Endocrinólogo & Gastroenterólogo
                  </p>
                  <p className="card-text poppins-regular">
                    <small className="text-body-secondary poppins-regular">
                      <i class="bi bi-star-fill yellow"></i> 4.9
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4 gradient-background rounded">
                <img
                  src="/src/assets/img/avatar/doctor3.png"
                  className="img-fluid rounded-start p-3 mt-5"
                  alt="Fotografía de un hombre"
                />
              </div>
              <div className="col-md-8 mt-3">
                <div
                  className="card-body shadow mt-3 rounded-3"
                  style={{ height: "200px" }}
                >
                  <h5 className="card-title poppins-semibold">
                    Dr. Rodrigo Silva
                  </h5>
                  <p className="card-text poppins-regular">Médico Internista</p>
                  <p className="card-text poppins-regular">
                    <small className="text-body-secondary poppins-regular">
                      <i class="bi bi-star-fill yellow"></i> 4.9
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
