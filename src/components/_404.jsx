import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function _404() {
  useEffect(() => {
    document.title = `NETFLIX | 404 NOT FOUND`;
  }, []);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <p className="m-0" style={{ fontSize: "8rem", fontWeight: "900" }}>
          404
        </p>
        <Link
          to={"/"}
          style={{
            color: "#fff",
            background: "#FF2530",
            padding: ".75rem 2.25rem",
            borderRadius: ".3rem",
          }}
        >
          Back To Homepage
        </Link>
      </div>
    </>
  );
}
