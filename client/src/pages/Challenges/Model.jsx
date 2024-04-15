import React from 'react';
import './Model.css';

const Modal = ({ show, onClose, children }) => {
    // Si la modal n'est pas affichée, ne rien rendre
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Create New Team</h4>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
