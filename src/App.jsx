import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (!isLoggedIn) {
    return <SignIn setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Home addToCart={addToCart} />
    </>
  );
}

export default App;
