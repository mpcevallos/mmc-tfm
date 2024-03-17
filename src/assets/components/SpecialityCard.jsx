import React from "react";

function SpecialityCard({ imgSrc, title, description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          src={imgSrc}
          className="card-img-top"
          alt={"Card image for ${title}"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description || "Descripción por defecto "}
          </p>
          <button href="#" className="btn btn-primary rounded-pill">
            Ver más...
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialityCard;
