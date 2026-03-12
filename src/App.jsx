import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhotoList from './components/PhotoList/PhotoList';
import PhotoDetail from './components/PhotoDetail/PhotoDetail';
import Cart from './components/Cart/Cart';
import { photos } from './data/photos';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<PhotoList photos={photos} />} 
        />
        <Route 
          path="/photo/:id" 
          element={
            <div>
              {photos.length > 0 && (
                <PhotoDetail photo={photos[0]} />
              )}
            </div>
          } 
        />
        <Route 
          path="/cart" 
          element={<Cart />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
