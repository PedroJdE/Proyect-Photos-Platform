import { useParams } from 'react-router-dom';
import { folders } from '../../data/photos';
import { useCart } from '../../contexts/CartContext';
import './PhotoFolder.css';

function PhotoFolder() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const folder = folders.find(f => f.id === parseInt(id));

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
            <img src={photo.url} alt={photo.title} className="photo-item__image" />
            <h4 className="photo-item__title">{photo.title}</h4>
            <p className="photo-item__description">{photo.description}</p>
            <p className="photo-item__price">${photo.price}</p>
            <button className="photo-item__button" onClick={() => handleAddToCart(photo)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoFolder;