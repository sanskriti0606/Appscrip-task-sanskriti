'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import styles from './ProductGrid.module.css'

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
  dateAdded: string // Assuming products have a dateAdded field for sorting by latest
  popularity: number // Assuming products have a popularity field for sorting by popular
}

export function ProductGrid({ products }: { products: Product[] }) {
  const [sortBy, setSortBy] = useState('default')
  const [showSort, setShowSort] = useState(false)

  const sortedProducts = useMemo(() => {
    switch (sortBy) {
      case 'recommended':
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate)
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price)
      case 'popular':
        return [...products].sort((a, b) => b.popularity - a.popularity)
      case 'latest':
        return [...products].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      default:
        return products
    }
  }, [products, sortBy])

  const toggleSort = () => {
    setShowSort(!showSort)
  }

  const handleSortClick = (sortOption: string) => {
    setSortBy(sortOption)
    setShowSort(false)
  }

  return (
    <div className={styles.productsContainer}>
      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <button onClick={toggleSort} className={styles.filterBtn}>
            RECOMMENDED {showSort ? '▲' : '▼'}
          </button>
          {showSort && (
            <div className={styles.dropdown}>
              <button
                onClick={() => handleSortClick('recommended')}
                className={`${styles.dropdownItem} ${sortBy === 'recommended' ? styles.active : ''}`}
              >
                RECOMMENDED
              </button>
              <button
                onClick={() => handleSortClick('price-low')}
                className={`${styles.dropdownItem} ${sortBy === 'price-low' ? styles.active : ''}`}
              >
                PRICE: LOW TO HIGH
              </button>
              <button
                onClick={() => handleSortClick('price-high')}
                className={`${styles.dropdownItem} ${sortBy === 'price-high' ? styles.active : ''}`}
              >
                PRICE: HIGH TO LOW
              </button>
              <button
                onClick={() => handleSortClick('popular')}
                className={`${styles.dropdownItem} ${sortBy === 'popular' ? styles.active : ''}`}
              >
                POPULAR
              </button>
              <button
                onClick={() => handleSortClick('latest')}
                className={`${styles.dropdownItem} ${sortBy === 'latest' ? styles.active : ''}`}
              >
                LATEST
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.productGrid}>
        {sortedProducts.map((product) => (
          <article key={product.id} className={styles.productCard}>
            <Image 
              src={product.image} 
              alt={product.title}
              width={200}
              height={200}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <div className={styles.productRating}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
