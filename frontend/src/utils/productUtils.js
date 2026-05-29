export const getBestSeller = (products) =>
  products.filter((p) => p.isBestSeller);

export const getNewArrivals = (products) =>
  [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
