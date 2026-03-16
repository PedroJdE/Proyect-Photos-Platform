import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './Header.css';

function Header({ onCartClick, onDateChange }) {
  const { cart } = useCart();

  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="header__title">Photos Platform</h1>
      <div className="header__search">
        <input
          type="date"
          className="header__date-input"
          onChange={handleDateChange}
          placeholder="Buscar por fecha de producción"
        />
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li>
            <button className="header__cart-button" onClick={onCartClick}>
              <i className={cart.length > 0 ? 'bi bi-cart-check-fill' : 'bi bi-cart-plus'} aria-hidden="true" />
              <span className="header__cart-text">Carrito</span>
              <span className="header__cart-count">({cart.length})</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
