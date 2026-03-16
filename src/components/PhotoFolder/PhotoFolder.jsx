import React, { useState } from 'react'; // Importamos useState
import { useParams } from 'react-router-dom';
import { folders } from '../../data/photos';
import { useCart } from '../../contexts/CartContext';
import './PhotoFolder.css';

function PhotoFolder() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const folder = folders.find(f => f.id === parseInt(id));
  
  // Estado para la foto que se ve en grande
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!folder) {
    return <div>Carpeta no encontrada</div>;
  }

  const handleAddToCart = (photo) => {
    addToCart(photo);
  };

  return (
    <div className="photo-folder">
      <h2 className="photo-folder__title">{folder.title}</h2>
      <div className="photo-folder__grid">
        {folder.photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            {/* Al hacer clic en la imagen, la seteamos como seleccionada */}
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="photo-item__image" 
              onClick={() => setSelectedPhoto(photo)}
              style={{ cursor: 'zoom-in' }}
            />
            <h4 className="photo-item__title">{photo.title}</h4>
            <p className="photo-item__description">{photo.description}</p>
            <p className="photo-item__price">${photo.price}</p>
            <button className="photo-item__button" onClick={() => handleAddToCart(photo)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      {/* MODAL DE VISTA PREVIA CON MARCA DE AGUA */}
      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setSelectedPhoto(null)}>&times;</button>
            
            <div className="watermark-wrapper">
              <img src={selectedPhoto.url} alt="Vista previa" className="photo-modal-img" />
              
              {/* Capa de marca de agua */}
              <div className="watermark-overlay">
                <span className="watermark-text">MUESTRA</span>
                <span className="watermark-text">NO COPIAR</span>
                <span className="watermark-text">{folder.title}</span>
              </div>
            </div>
            
            <div className="photo-modal-info">
              <p>{selectedPhoto.title} - ${selectedPhoto.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoFolder;