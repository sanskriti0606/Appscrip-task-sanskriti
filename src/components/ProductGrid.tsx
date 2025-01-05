// ProductGrid.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './ProductGrid.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductGridProps {
  category: string; // Accept category as a prop
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the selected category
  const filteredProducts = products.filter((product) => {
    if (category === 'recommended') {
      return product.category === 'electronics'; // Example condition, you can modify it
    }
    return true; // If not "recommended", show all products
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.gridContainer}>
      {filteredProducts.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productTitle}>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
