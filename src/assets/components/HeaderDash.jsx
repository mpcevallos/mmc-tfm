import React from "react";
import TopDashboard from "./TopDashboard";

function HeaderDash(props) {
  return (
    <>
      <TopDashboard />
      <div className="container-fluid col-12 w-100 shadowtop">
        <div class="container mt-5">
          <div class="row">
            <div class="col w-50 mt-5">
              <i class="bi bi-person-circle poppins-regular font-white mb-5 h3 font-gray">
                &nbsp;&nbsp;{props?.texto}
              </i>
            </div>
            <div class="col w-50"></div>
            <div class="col">
              <img
                src="../src/assets/img/avatar/profile.png"
                alt="Avatar"
                style={{ width: "140px", height: "140px", marginLeft: "100px" }}
              />
            </div>
            <div class="col float-end mt-5">
              <p className="poppins-regular color-text-mint float-inline-start title bold">
                Jorge Campos
              </p>
              <div className="poppins-regular font-gray float-inline-start">
                <strong>Email: </strong>
                <span>jcampos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDash;
