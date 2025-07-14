import { createPortal } from 'react-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import TechIcon from './TechIcon';

function Modal ({ project, onClose }) {

    const [isActive, setIsActive] = useState(false);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    const handleClose = useCallback(() => {
        setIsActive(false);
        setTimeout(onClose, 300);
    }, [onClose]);

    useEffect(() => { //manejo teclado
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleClose]);

    // Asegurar que la modal se muestre al montar
    useEffect(() => {
        setIsActive(true);
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            handleClose();
        }
    };

    
    if (!project) {
        console.log('Modal recibiendo project null');
        return null;
    }

    console.log('Modal recibiendo project:', project);

    return createPortal (
        <div
            className={`modal-overlay ${isActive ? 'active' : ''}`}
            onClick={handleBackdropClick}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
            ref={modalRef}
            style={{ display: isActive ? 'flex' : 'none' }} // Asegurar que se muestre
        >
            <div className='modal-content'>
                <button
                    ref={closeButtonRef}
                    className='modal-close'
                    onClick={handleClose}
                    aria-label='Cerrar modal'
                >
                    <FaTimes />
                </button>
                <div className='modal-header'>
                    <h2 id='modal-title' className='sr-only'>{project.title}</h2>
                    <div className='modal-links'>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='modal-link'
                                aria-label='Ver código en Github'
                            > <FaGithub /> Código</a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='modal-link'
                                aria-label='Ver demo en vivo'
                            > <FaExternalLinkAlt />Demo</a>
                        )}
                    </div>
                    
                </div>

                <div className='modal-image-container'>
                    <img
                        src={project.image}
                        alt={project.title}
                        className='modal-image'
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = 'https://placehold.co/800x400/1a1a1a/ffffff?text=Imagen+no+disponible'
                        }}
                    />
                </div>

                <div className='modal-body'>
                    <div className='modal-description'>
                        <h3>Descripción</h3>
                        <p>{project.content || project.excerpt || 'Sin descripción'}</p>
                    </div>

                    <div className='modal-details'>
                        <div className='modal-features'>
                            <h3>Características</h3>
                            <ul>
                                {project.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='modal-technologies'>
                            <h3>Tecnologías</h3>
                            <div className='tech-stack'>
                                {project.technologies?.map((tech, index) => (
                                    <TechIcon key={index} tech={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;