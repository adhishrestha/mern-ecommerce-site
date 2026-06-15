export const getSimilarProducts = (products, currentProduct, limit = 8) => {
  if (!products || !currentProduct) return [];

  return products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id,
    )
    .slice(0, limit);
};
