import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/navigation/Breadcrumb';
import ShopToolbar from '../features/shop/components/ShopToolbar';
import { products } from '../data/productData';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const productsPerPage = 9;
  const totalProducts = products.length;

  const startItem = (currentPage - 1) * productsPerPage + 1;

  const endItem = Math.min(currentPage * productsPerPage, totalProducts);
  return (
    <Container>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />

      <ShopToolbar
        startItem={startItem}
        endItem={endItem}
        totalProducts={products.length}
        sortBy={sortBy}
        onSortChange={(e) => setSortBy(e.target.value)}
        onFilterClick={() => setIsSidebarOpen(true)}
      />
    </Container>
  );
};

export default Shop;
