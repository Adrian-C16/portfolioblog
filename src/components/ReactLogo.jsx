import React from "react";

const ReactLogo = (props) => (
  <svg
    className={`react-logo-rotate ${props.className || ""}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 841.9 595.3"
    width={props.width || 40}
    height={props.height || 40}
    {...props}
  >
    <g>
      <circle cx="420.9" cy="296.5" r="50" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="30" fill="none">
        <ellipse
          rx="300"
          ry="115"
          cx="420.9"
          cy="296.5"
          transform="rotate(60 420.9 296.5)"
        />
        <ellipse
          rx="300"
          ry="115"
          cx="420.9"
          cy="296.5"
          transform="rotate(120 420.9 296.5)"
        />
        <ellipse rx="300" ry="115" cx="420.9" cy="296.5" />
      </g>
    </g>
  </svg>
);

export default ReactLogo;