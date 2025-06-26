import React from "react";
import PropTypes from 'prop-types';

const ReactAvatar = ({ className = "", style = {} }) => (
  <div 
    className={`react-avatar-container ${className}`}
    style={{
      display: 'inline-block',
      width: '120px',
      height: '120px',
      ...style
    }}
  >
    <svg
    width="100%"
    height="100%"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="react-avatar"
  >
  {/* Sombra suave y difusa */}
  <ellipse cx="70" cy="133" rx="30" ry="7" fill="#85e6fb" opacity="0.29"/>
  {/* Glow circular más suave detrás del logo */}
  <ellipse cx="70" cy="71" rx="44" ry="44" fill="#61dafb" opacity="0.11"/>
  {/* Cuerpo: React logo con sombra interior y gradiente*/}
  <g>
    <ellipse cx="70" cy="70" rx="23" ry="38" stroke="#61DAFB" strokeWidth="5.5" fill="url(#avatarBodyGrad)"/>
    <ellipse cx="70" cy="70" rx="38" ry="23" stroke="#61DAFB" strokeWidth="5.5" fill="url(#avatarBodyGrad)" transform="rotate(60 70 70)"/>
    <ellipse cx="70" cy="70" rx="38" ry="23" stroke="#61DAFB" strokeWidth="5.5" fill="url(#avatarBodyGrad)" transform="rotate(120 70 70)"/>
    {/* Brillo fuerte en el centro */}
    <circle cx="70" cy="70" r="14" fill="url(#avatarCenterGrad)" stroke="#1a2633" strokeWidth="2"/>
    <ellipse cx="75" cy="66" rx="4" ry="2.1" fill="#fff" opacity="0.7"/>
  </g>
  {/* Ojos grandes y expresivos con brillo */}
  <ellipse cx="62" cy="68" rx="6.2" ry="5.6" fill="white" stroke="#1a2633" strokeWidth="2"/>
  <ellipse cx="78" cy="68" rx="6.2" ry="5.6" fill="white" stroke="#1a2633" strokeWidth="2"/>
  <ellipse cx="62" cy="68.6" rx="2.4" ry="2.1" fill="#23272f"/>
  <ellipse cx="78" cy="68.6" rx="2.4" ry="2.1" fill="#23272f"/>
  <ellipse cx="63" cy="67" rx="0.7" ry="0.5" fill="#fff" opacity="0.8"/>
  <ellipse cx="79" cy="67" rx="0.7" ry="0.5" fill="#fff" opacity="0.8"/>
  {/* Cejas (más finas y expresivas) */}
  <path d="M58.5 64 Q62 61 65.5 64" stroke="#1a2633" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
  <path d="M74.5 64 Q78 61 81.5 64" stroke="#1a2633" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
  {/* Boca: sonrisa más estilizada */}
  <path d="M64 81 Q70 88 76 81" stroke="#1a2633" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
  {/* Mejillas con degradado */}
  <ellipse cx="57" cy="76" rx="2.2" ry="1.1" fill="url(#cheekGrad)" opacity="0.65"/>
  <ellipse cx="83" cy="76" rx="2.2" ry="1.1" fill="url(#cheekGrad)" opacity="0.65"/>
  {/* Piernas y pies más cartoon */}
  <g>
    <path d="M68 109 Q62 120 56 128" stroke="#1a2633" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M72 109 Q78 120 84 128" stroke="#1a2633" strokeWidth="5" fill="none" strokeLinecap="round"/>
    {/* Pies con sombra y ligera inclinación */}
    <ellipse cx="55" cy="131" rx="6" ry="2.1" fill="#61DAFB" stroke="#1a2633" strokeWidth="1.2" transform="rotate(-7 55 131)"/>
    <ellipse cx="85" cy="131" rx="6" ry="2.1" fill="#61DAFB" stroke="#1a2633" strokeWidth="1.2" transform="rotate(7 85 131)"/>
    <ellipse cx="55" cy="133.2" rx="3.2" ry="0.8" fill="#23272f" opacity="0.19"/>
    <ellipse cx="85" cy="133.2" rx="3.2" ry="0.8" fill="#23272f" opacity="0.19"/>
  </g>
  {/* Brazo izquierdo (más orgánico y cartoon) */}
  <g>
    <path d="M49 89 Q32 97 27 75 Q27 67 36 73" stroke="#1a2633" strokeWidth="5" fill="none" strokeLinecap="round"/>
    {/* Mano izquierda con más detalle */}
    <ellipse cx="24" cy="71" rx="4.1" ry="3.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="1.2"/>
    <ellipse cx="21.3" cy="67.5" rx="0.95" ry="1.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
    <ellipse cx="25.2" cy="66.5" rx="1" ry="1.8" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
    <ellipse cx="28.3" cy="68" rx="0.95" ry="1.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
  </g>
  {/* Brazo derecho saludando, con mano más cartoon y para animar */}
  <g className="react-avatar-hand-group">
    <path d="M91 89 Q112 67 118 68" stroke="#1a2633" strokeWidth="5" fill="none" strokeLinecap="round"/>
    {/* Mano derecha cartoon */}
    <ellipse className="react-avatar-hand" cx="121.5" cy="67" rx="4.1" ry="3.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="1.2"/>
    <ellipse className="react-avatar-hand" cx="124.2" cy="63.1" rx="0.95" ry="1.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
    <ellipse className="react-avatar-hand" cx="120.2" cy="61.5" rx="1" ry="1.8" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
    <ellipse className="react-avatar-hand" cx="117.8" cy="64.1" rx="0.95" ry="1.7" fill="#61DAFB" stroke="#1a2633" strokeWidth="0.9"/>
  </g>
  <defs>
    <linearGradient id="avatarBodyGrad" x1="70" y1="32" x2="70" y2="108" gradientUnits="userSpaceOnUse">
      <stop stopColor="#f8feff"/>
      <stop offset="0.5" stopColor="#eafcff"/>
      <stop offset="1" stopColor="#b2f0fb"/>
    </linearGradient>
    <radialGradient id="avatarCenterGrad" cx="70" cy="70" r="15" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ffffff" stopOpacity="0.9"/>
      <stop offset="0.7" stopColor="#61DAFB" stopOpacity="1"/>
      <stop offset="1" stopColor="#61DAFB" stopOpacity="1"/>
    </radialGradient>
    <linearGradient id="cheekGrad" x1="0" y1="0" x2="5" y2="2" gradientUnits="userSpaceOnUse">
      <stop stopColor="#fca5a5"/>
      <stop offset="1" stopColor="#f87171"/>
    </linearGradient>
  </defs>
  </svg>
  </div>
);


export default ReactAvatar;

ReactAvatar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    alt: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    tabIndex: PropTypes.number,
    role: PropTypes.string,
    ariaLabel: PropTypes.string
};