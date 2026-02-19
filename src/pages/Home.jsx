import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Leather Handbag",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
    {
      id: 2,
      name: "Classic Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Brown Sneakers",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  return (
    <div className="home">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;
