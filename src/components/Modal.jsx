import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal ({ children, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return createPortal (
        <div
            className='modal-overlay'
            onClick={onClose}
            role='dialog'
            aria-modal='true'
        >
            <div
                className='modal-content'
                onClick={e => e.stopePropagation()}
            >
                <button
                    className='modal-close'
                    onClick={onClose}
                    aria-label='Cerrar modal'
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;