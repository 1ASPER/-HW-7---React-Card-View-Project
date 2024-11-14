import { ProductCard } from "./components/ProductCard"; 

const products = [
  {
    id: 0,
    name: "Product 1",
    price: 100,
    category: "Category 1",
    image: "https://pics.craiyon.com/2023-09-29/cc9c956c1a674b78a0c7e4f11cef1190.webp",
  },

  {
    id: 1,
    name: "Product 2",
    price: 200,
    category: "Category 2",
    image: "https://static.displate.com/857x1200/displate/2021-08-28/660ac65185e723aede15a0c413a4ca83_a96df10c8960ab9365eb04fd13e18105.jpg",
  },
]

function App() {
  return (
    <div>
      <h1>Products</h1>
      <div>

        {products.map((product) => (
          <ProductCard data={product} />
        ))}

      </div>
    </div>
  );
}

export default App;
