export const FilterProduct = (product, { sort, categories, price, rating }) => {
  let sortedProduct;
  // sort by price
  if ({ sort }) {
    sortedProduct = product.sort((item1, item2) =>
      sort === "LowToHigh"
        ? item1.price - item2.price
        : item2.price - item1.price
    );
  }

  //sort by category
  if (!categories.length) return sortedProduct;
  sortedProduct = sortedProduct.filter((product) => {
    return categories.includes(product.categoryName.toLowerCase());
  });
  //sort by rating
  if (rating) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.rating >= rating;
    });
    return sortedProduct;
  }
  // sort by price range will work later
  //   if (price) {
  //     sortedProduct = sortedProduct.filter((product) => {
  //       return product.price <= price;
  //     });
  //     return sortedProduct;
  //   }
  // sort by categories
  return sortedProduct;
};
