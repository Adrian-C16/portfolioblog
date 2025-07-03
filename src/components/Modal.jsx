import { createPortal } from 'react-dom';
import { useEffect, useState, useRef } from 'react';

function Modal ({ children, onClose }) {

    const [isActive, setIsActive] = useState(false);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;
        const closeButton = closeButtonRef.current;

        const timer = setTimeout(() => {
            setIsActive(true);
        }, 10);

        const handleKeyDown = (e) => {
            if(e.key === 'Escape') {
                handleClose();
            }

            else if (isActive && e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll (
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                if (focusableElements.length === 0) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        if (closeButton) {
            closeButton.focus();
        }

        document.body.style.overflow = 'hidden';

        return () => {
            clearTimeout(timer);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isActive]);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return createPortal (
        <div
            className={`modal-overlay ${isActive ? 'active' : ''}`}
            onClick={handleClose}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
            ref={modalRef}
        >
            <div
                className='modal-content'
                onClick={e => e.stopPropagation()}
                role='document'
            >
                <button
                    ref={closeButtonRef}
                    className='modal-close'
                    onClick={handleClose}
                    aria-label='Cerrar modal'
                >
                    &times;
                </button>
                <h2 id='modal-title' className='sr-only'>Detalles del proyecto</h2>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;