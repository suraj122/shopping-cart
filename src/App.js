import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ProductWrapper from "./components/ProductWrapper";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

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
