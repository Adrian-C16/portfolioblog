import {Link} from 'react-router-dom';
import '../index.css';
import ReactLogo from './ReactLogo';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar () {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to = "/" className="navbar-logo">
                <ReactLogo size={26}/>
                <span>Portfolio</span>
                </Link>
                <div className='navbar-links'>
                    <Link to = "/">Inicio</Link>
                    <Link to = "/new">Crear Proyecto</Link>
                    <Link to = "/admin">Administrar</Link>
                    <button onClick={toggleTheme} className='theme-toggle-btn' aria-label='Cambiar tema'>
                        {theme === "light" ? (<svg width="20" height="20" fill='none' stroke='currentColor' strokeWidth="2">
                            <path d="M15 12A6 6 0 1 1 9 3a7 7 0 0 0 6 9Z"/>
                        </svg>) : (<svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5"/>
                                    <g>
                                        <line x1="12" y1="2" x2="12" y2="4"/>
                                        <line x1="12" y1="20" x2="12" y2="22"/>
                                        <line x1="2" y1="12" x2="4" y2="12"/>
                                        <line x1="20" y1="12" x2="22" y2="12"/>
                                        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
                                        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
                                        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
                                        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
                                    </g>
                            </svg>)
                            }
                    </button>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;