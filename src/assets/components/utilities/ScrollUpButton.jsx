import React from "react";
import { Icon } from "@iconify-icon/react";

const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="btn-scrollup btn rounded-pill" onClick={handleClick}>
      <iconify-icon
        icon="fa6-solid:arrow-up"
        width="1.5em"
        height="1.5em"
        style={{ verticalAlign: "middle" }}
      ></iconify-icon>
    </button>
  );
};

export default ScrollUpButton;
