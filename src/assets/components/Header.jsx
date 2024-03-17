import React from "react";

function Header(props) {
  return (
    <div className="container-fluid col-12 bg-mint p-5 w-100 m-0">
      <div className="container mt-5 w-100 mx-auto mb-5">
        <h1 className="poppins-regular font-white mb-5">{props.texto}</h1>
      </div>
    </div>
  );
}

export default Header;
