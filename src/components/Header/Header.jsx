import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Photos Platform</h1>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/cart">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
