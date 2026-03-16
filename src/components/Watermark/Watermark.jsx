// components/Watermark/Watermark.jsx
import React from 'react';
import './Watermark.css'; // Asegúrate de crear este archivo CSS

const Watermark = ({ imageUrl, watermarkText }) => {
    return (
        <div className="watermark-container">
            {/* Imagen original de fondo */}
            <img src={imageUrl} alt="Foto con marca de agua" className="watermarked-image" />

            {/* Capa superpuesta con la marca de agua */}
            <div className="watermark-overlay">
                {/* Puedes repetir el texto o usar un patrón */}
                {[...Array(5)].map((_, index) => (
                    <span key={index} className="watermark-text">{watermarkText}</span>
                ))}
            </div>
        </div>
    );
};

export default Watermark;