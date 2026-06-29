import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CollectionPage from './pages/CollectionPage';
import About from './pages/About';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="shop" element={<Shop />} />
        <Route path="products/:id/:slug" element={<ProductDetailsPage />} />
        <Route path="collections/:id/:slug" element={<CollectionPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
