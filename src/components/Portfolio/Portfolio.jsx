import React from 'react';
import Masonry from 'react-masonry-css';
import './Portfolio.css';

// 1. IMPORTACIÓN MÁSIVA (Vite)
// Esto busca todos los archivos en la carpeta assets/portfolio
// Cambia la ruta por esta:
const images = import.meta.glob('/src/assets/portfolio/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { 
  eager: true,
  query: '?url',
  import: 'default'
});

// 2. CONVERSIÓN A ARRAY
const portfolioPhotos = Object.entries(images).map(([path, url], index) => {
  // Sacamos el nombre del archivo para usarlo de título (opcional)
  const fileName = path.split('/').pop().split('.')[0];
  
  return {
    id: index,
    url: url,
    title: fileName.replace(/-/g, ' ') // Cambia guiones por espacios
  };
});

function Portfolio() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio__title">
        <h1>PORTAFOLIO</h1>
        <p>Galería Creativa</p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="portfolio-masonry-grid"        // <--- Cambiado para coincidir con tu CSS
        columnClassName="portfolio-masonry-grid_column" // <--- Cambiado para coincidir con tu CSS
      >
        {portfolioPhotos.map((photo) => (
          <div key={photo.id} className="portfolio-item"> {/* <--- Coincide con tu CSS */}
            <div className="portfolio-item__image-wrapper">
              <img
                src={photo.url}
                alt={photo.title}
                className="portfolio-item__image" // <--- Esta clase es la que achica la foto
              />
              <div className="portfolio-item__overlay">
                <h4 className="portfolio-item__title">{photo.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Portfolio;