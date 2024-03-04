import React from "react";
import { Icon } from "@iconify-icon/react";

function Specialist() {
  return (
    <>
      <div className="col-md-4">
        <img
          src="http://localhost:5173/src/assets/img/profile.png"
          class="img-fluid rounded-start"
          alt="..."
        ></img>
      </div>
      <div className="col-md-8 bg-mint rounded">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="col">Columna 2</div>
      <div className="col">Columna 3</div>
    </>
  );
}

export default Specialist;
