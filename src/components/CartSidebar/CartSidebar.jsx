import { useCart } from '../../contexts/CartContext';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {isOpen && <div className="cart-sidebar-overlay" onClick={onClose}></div>}
      <div className={`cart-sidebar ${isOpen ? 'cart-sidebar--open' : ''}`}>
        <div className="cart-sidebar__header">
          <h2>Carrito de Compras</h2>
          <button className="cart-sidebar__close" onClick={onClose}>×</button>
        </div>
        <div className="cart-sidebar__content">
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <div className="cart-sidebar__items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-sidebar__item">
                    <img src={item.url} alt={item.title} className="cart-sidebar__item-image" />
                    <div className="cart-sidebar__item-details">
                      <h4>{item.title}</h4>
                      <p>${item.price}</p>
                    </div>
                    <button className="cart-sidebar__remove" onClick={() => removeFromCart(item.id)}>×</button>
                  </div>
                ))}
              </div>
              <div className="cart-sidebar__total">
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartSidebar;