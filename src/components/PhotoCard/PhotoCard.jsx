import './PhotoCard.css';

function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} className="photo-card__image" />
      <h3 className="photo-card__title">{photo.title}</h3>
      <p className="photo-card__price">${photo.price}</p>
      <button className="photo-card__button">Ver Detalles</button>
    </div>
  );
}

export default PhotoCard;
