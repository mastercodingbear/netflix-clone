import React, { useState, useEffect } from "react";

import "../styles/score.sass";

export default function WorkScore({ score }) {
  const [color, setColor] = useState("#adb5bd");

  useEffect(() => {
    if (score > 10 && score < 40) {
      setColor("#dc3545");
    } else if (score >= 40 && score < 70) {
      setColor("#ffc107");
    } else if (score >= 70) {
      setColor("#198754");
    }
  }, [score]);
  return (
    <div className="work-rating mt-2">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          style={{ stroke: color }}
          className="circle"
          strokeDasharray={`${score}, 100`}
          d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="8" y="21.35" className="percentage">
          {`${score}%`}
        </text>
      </svg>
    </div>
  );
}
