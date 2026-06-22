import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/navigation/Breadcrumb';
import ShopToolbar from '../features/shop/components/ShopToolbar';
import { products } from '../data/products';
import FilterSidebar from '../features/shop/components/sidebar/FilterSidebar';
import MobileFilterDrawer from '../features/shop/components/mobile/MobileFilterDrawer';
import ProductGrid from '../components/product/ProductGrid';
import Pagination from '../features/shop/components/Pagination';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const productsPerPage = 9;

  const filteredProducts = products; // future filters

  const sortedProducts = [...filteredProducts];

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const startItem = totalProducts ? startIndex + 1 : 0;
  const endItem = Math.min(endIndex, totalProducts);
  return (
    <Container>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />

      <ShopToolbar
        startItem={startItem}
        endItem={endItem}
        totalProducts={products.length}
        sortBy={sortBy}
        onSortChange={(e) => setSortBy(e.target.value)}
        onFilterClick={() => setIsFilterOpen(true)}
      />

      {/* Shop Content */}
      <div className="flex gap-10">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>
        {/* Mobile Drawer */}
        <MobileFilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        >
          <FilterSidebar />
        </MobileFilterDrawer>

        {/* Product Area */}
        <div className="flex-1">
          <ProductGrid
            products={currentProducts}
            gridClass="grid-cols-2 lg:grid-cols-3"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="lg:justify-end"
          />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
