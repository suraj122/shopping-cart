import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ProductWrapper from "./components/ProductWrapper";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  // State
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ProductWrapper />} />
        <Route
          path="/:id"
          element={<ProductDetails cart={cartItems} setCart={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
