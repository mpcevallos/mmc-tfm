//import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function NotFound(props) {
  return (
    <>
      <Header texto={props.texto} />
    </>
  );
}

NotFound.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default NotFound;
