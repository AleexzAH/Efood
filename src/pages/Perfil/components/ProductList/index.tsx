import { useState } from 'react'

import { products } from '../../../../data/product'

import Product from '../Product'
import ProductModal from '../ProductModal'

import type { Product as ProductType } from '../../../../types/product'

import { Container } from './styles'

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductType | null>(null)

  return (
    <>
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </Container>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}

export default ProductList