import Navbar from "./components/Navbar";
import ProductContent from "./components/ProductContent";
import { product } from './Assets/constant';
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart] = useState([])
  
  return (
    <div>
      <Navbar cart={addToCart} />
      <ProductContent product={product} setAddToCart={setAddToCart} />
    </div>
  );
}

export default App;
