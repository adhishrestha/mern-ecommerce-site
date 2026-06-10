import React from 'react';
import Breadcrumb from '../components/navigation/Breadcrumb';
import Container from '../components/ui/Container';
import { Navigate, useParams } from 'react-router-dom';
import { products } from '../data/productData';
import ProductGallery from '../features/product-details/components/gallery/ProductGallery';
import ProductInfo from '../features/product-details/components/info/ProductInfo';
import SimilarProductsSection from '../features/product-details/components/sections/SimilarProductsSection';

const ProductDetailsPage = () => {
  const { id, slug } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Container>
        <h1>Product not found</h1>
      </Container>
    );
  }
  if (product.slug !== slug) {
    return <Navigate to={`/products/${product.id}/${product.slug}`} replace />;
  }
  return (
    <Container>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.name },
        ]}
      />
      <section
        className="mt-10 grid gap-10 lg:grid-cols-2"
        aria-label="Product Details"
      >
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </section>
      <SimilarProductsSection />
    </Container>
  );
};

export default ProductDetailsPage;
