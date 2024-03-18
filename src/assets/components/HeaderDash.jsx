import React from "react";
import TopDashboard from "./TopDashboard";
import useAvatar from "/src/assets/components/utilities/useAvatar.js";
import useName from "/src/assets/components/utilities/useName.js";
import useEmail from "/src/assets/components/utilities/useEmail.js";

function HeaderDash(props) {
  const avatar = useAvatar();
  const name = useName();
  const correo = useEmail();
  console.log({ avatar });
  console.log({ name });
  console.log({ correo });
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
                src={`../src/assets/img/avatar/${avatar}`}
                alt="Avatar"
                style={{ width: "140px", height: "140px", marginLeft: "100px" }}
              />
            </div>
            <div class="col float-end mt-5">
              <div>
                <p className="poppins-regular color-text-mint float-inline-start title bold">
                  {name}
                </p>
              </div>
              <br />
              <div className="poppins-regular font-gray float-inline-start">
                <strong>Email: {correo}</strong>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDash;
