import React from "react";
import ReactDOM from "react-dom";

import "../styles/load-wrapper.sass";

export default function LoadWrapper({ ready }) {
  return ReactDOM.createPortal(
    <div className={`load-wrapper ${ready === "ready" ? "d-none" : ""}`}>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>,
    document.getElementById("wrapper")
  );
}
