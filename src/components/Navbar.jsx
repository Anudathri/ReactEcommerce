import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">BeigeBloom</h2>
      <div className="cart">
        🛒 Cart
        <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
