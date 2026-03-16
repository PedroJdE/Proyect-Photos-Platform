import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider, useCart } from './contexts/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhotoList from './components/PhotoList/PhotoList';
import PhotoFolder from './components/PhotoFolder/PhotoFolder';
import Cart from './components/Cart/Cart';
import Notification from './components/Notification/Notification';
import CartSidebar from './components/CartSidebar/CartSidebar';
import { folders } from './data/photos';

function AppContent() {
  const { showSidebar, toggleSidebar, notification } = useCart();
  const [dateFilter, setDateFilter] = useState('');

  return (
    <>
      <Header onCartClick={toggleSidebar} onDateChange={setDateFilter} />
      <Routes>
        <Route 
          path="/" 
          element={<PhotoList folders={folders} dateFilter={dateFilter} />} 
        />
        <Route 
          path="/folder/:id" 
          element={<PhotoFolder />} 
        />
        <Route 
          path="/cart" 
          element={<Cart />} 
        />
      </Routes>
      <Footer />
      <CartSidebar isOpen={showSidebar} onClose={toggleSidebar} />
      {notification && <Notification message={notification} />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
