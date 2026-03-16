import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [notification, setNotification] = useState('');

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    setShowSidebar(true);
    setNotification(`"${item.title}" agregado al carrito`);
    setTimeout(() => setNotification(''), 3000); // Ocultar notificación después de 3 segundos
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      showSidebar,
      setShowSidebar,
      toggleSidebar,
      notification
    }}>
      {children}
    </CartContext.Provider>
  );
};