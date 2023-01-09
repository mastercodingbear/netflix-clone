import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/works_classification_btns.sass";

export default function WorksClassificationBtns({ btns, pathname }) {
  const location = useLocation();
  const ref = useRef();
  let path;
  useEffect(() => {
    path = location.pathname.split("/")[2];
    setCurrent(path, ref);
  }, [location]);
  const setCurrent = (path, ref) => {
    if (!path) {
      [...ref.current.children].forEach((el) => {
        el.classList.remove("current");
      });
      ref.current.children[0].classList.add("current");
    } else {
      [...ref.current.children].forEach((el) => {
        el.classList.remove("current");
        if (el.href.split("/")[4] === path) {
          el.classList.add("current");
        }
      });
    }
  };
  return (
    <div className="col">
      <div className="class-btns-group" ref={ref}>
        {btns.map((btn) => {
          return (
            <Link
              key={btn}
              to={`/${pathname}${
                btn === "popular" ? "" : `/${btn.split(" ").join("_")}`
              }`}
            >
              {btn}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
