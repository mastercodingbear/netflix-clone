import React, { useRef, useState } from "react";
import "../styles/grid_test.sass";
export default function GridTest() {
  const [gridShow, setGridShow] = useState(false);
  return (
    <>
      <div className="grid">
        <input
          type="checkbox"
          id="grid-btn"
          onClick={() => {
            setGridShow(!gridShow);
          }}
        />
        <div id="bs-grid" className={!gridShow ? "d-none" : " "}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
              <div className="col">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
