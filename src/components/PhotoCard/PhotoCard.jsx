import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './PhotoCard.css';

function PhotoCard({ folder }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleViewPhotos = () => {
    navigate(`/folder/${folder.id}`);
  };

  const handleBuyFolder = () => {
    folder.photos.forEach(photo => addToCart(photo));
  };

  return (
    <div className="photo-card">
      <img src={folder.photos[0].url} alt={folder.title} className="photo-card__image" />
      <h3 className="photo-card__title">{folder.title}</h3>
      <p className="photo-card__date">Fecha: {folder.productionDate}</p>
      <p className="photo-card__count">{folder.photos.length} fotos</p>
      <div className="photo-card__buttons">
        <button className="photo-card__button" onClick={handleViewPhotos}>Ver Fotos</button>
        <button className="photo-card__button photo-card__button--buy" onClick={handleBuyFolder}>Comprar Carpeta</button>
      </div>
    </div>
  );
}

export default PhotoCard;
