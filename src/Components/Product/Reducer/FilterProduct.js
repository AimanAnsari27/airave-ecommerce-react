export const FilterProduct = (
  product,
  { sort, categories, price, rating, search }
) => {
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
  if (categories.length) {
    sortedProduct = sortedProduct.filter((product) => {
      return categories.includes(product.categoryName.toLowerCase());
    });
  }
  if (search) {
    sortedProduct = sortedProduct.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(search.toLowerCase())
    );
    return sortedProduct;
  }
  //sort by rating
  if (rating) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.rating >= rating;
    });
    return sortedProduct;
  }

  return sortedProduct;
};
