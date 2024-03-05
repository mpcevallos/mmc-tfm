import React from "react";
import { Icon } from "@iconify-icon/react";

function Specialities() {
  return (
    <div className="container text-center">
      <div className="row">
        <div class="col-12 col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../src/assets/img/Especialidad1.png"
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">Especialidad 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Especialidad 1
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../src/assets/img/Especialidad2.png"
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">Especialidad 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Especialidad 2
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./src/assets/img/Especialidad3.png"
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">Especialidad 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Especialidad 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialities;
