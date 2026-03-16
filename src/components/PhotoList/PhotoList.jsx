import './PhotoList.css';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotoList({ folders, dateFilter }) {
  const filteredFolders = dateFilter
    ? folders.filter(folder => folder.productionDate === dateFilter)
    : folders;

  return (
    <div className="photo-list">
      <h2 className="photo-list__title">Catálogo de Carpetas de Fotos</h2>
      <div className="photo-list__grid">
        {filteredFolders.map((folder) => (
          <PhotoCard key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
