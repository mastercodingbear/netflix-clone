import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "../styles/mouse.sass";

export default function Mouse() {
  const mouse = useRef(null);

  const body = document.body;
  body.addEventListener("pointermove", (e) => {
    console.log(e.pageX);
    console.log(e.pageY);
    mouse.current.style.left = `${e.pageX - 15}px`;
    mouse.current.style.top = `${e.pageY - 15}px`;
  });

  return ReactDOM.createPortal(
    <span ref={mouse} className="mouse"></span>,
    document.querySelector("body")
  );
}
