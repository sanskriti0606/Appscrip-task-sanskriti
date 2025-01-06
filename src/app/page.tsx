import Link from 'next/link'
import { ProductGrid } from '@/components/ProductGrid'
import styles from './page.module.css'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Link href="/products" className={styles.cta}>
          {/* Add Hero Section Content here if needed */}
        </Link>
      </section>

      <ProductGrid products={products.slice(0, 8)} />
      
    
    </div>
  )
}
