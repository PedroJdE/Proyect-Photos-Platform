import './PhotoList.css';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotoList({ photos }) {
  return (
    <div className="photo-list">
      <h2 className="photo-list__title">Catálogo de Fotos</h2>
      <div className="photo-list__grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
