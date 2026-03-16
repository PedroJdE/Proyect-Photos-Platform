import { useCart } from '../../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="cart__items">
            {cart.map((item) => (
              <div key={item.id} className="cart__item">
                <img src={item.url} alt={item.title} className="cart__item-image" />
                <div className="cart__item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <button className="cart__remove-button" onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
