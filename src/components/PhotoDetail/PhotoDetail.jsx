import './PhotoDetail.css';

function PhotoDetail({ photo }) {
  return (
    <div className="photo-detail">
      <img src={photo.url} alt={photo.title} className="photo-detail__image" />
      <div className="photo-detail__info">
        <h1 className="photo-detail__title">{photo.title}</h1>
        <p className="photo-detail__description">{photo.description}</p>
        <p className="photo-detail__price">${photo.price}</p>
        <button className="photo-detail__button">Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default PhotoDetail;
