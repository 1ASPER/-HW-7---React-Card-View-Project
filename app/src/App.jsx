import { ProductCard } from "./components/ProductCard";
import { useState, useEffect } from "react"; 
import "./index.css";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // UseEffect -> Calls some function when the component is updated by State change
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(() => setLoading(false));  
  }, []);

  return (
    <div>
      
      <div className="product-list">
        {loading && <div className="loading-wrapper"> <div>Loading...</div> </div>}
        {products.map((product) => (
          <ProductCard data={product} />
        ))}

      </div>
    </div>
  );
}

export default App