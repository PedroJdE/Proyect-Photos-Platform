import { Link, useLocation } from 'react-router-dom'; // Importamos useLocation
import { useCart } from '../../contexts/CartContext';
import './Header.css';

function Header({ onCartClick, onDateChange }) {
  const { cart } = useCart();
  const location = useLocation(); // Esto nos dice en qué página estamos

  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Photos Platform</Link>
      </h1>

      {/* Solo mostramos el buscador si NO estamos en el portfolio (Inicio) */}
      {location.pathname !== '/' && (
        <div className="header__search">
          <input
            type="date"
            className="header__date-input"
            onChange={handleDateChange}
          />
        </div>
      )}

      <nav className="header__nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          
          {/* Nuevo botón destacado para ir a la plataforma de búsqueda */}
          {location.pathname !== '/buscar' && (
            <li>
              <Link to="/buscar" className="header__search-btn">
                <span className="header__search-text-full">Buscar </span>
                <i className="bi bi-search" aria-hidden="true"></i>
                mis fotos
              </Link>
            </li>
          )}

          {location.pathname === '/buscar' && (
            <li>
              <button className="header__cart-button" onClick={onCartClick}>
                <i className={cart.length > 0 ? 'bi bi-cart-check-fill' : 'bi bi-cart-plus'} aria-hidden="true" />
                <span className="header__cart-text">Carrito</span>
                <span className="header__cart-count">({cart.length})</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;