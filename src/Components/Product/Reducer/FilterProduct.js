export const FilterProduct = (product, state) => {
  // console.log("product", product);
  // console.log("state", state);
  const { sort, categories, price, rating, search } = state;
  // console.log("sort", sort);
  // console.log("categories", categories);
  let sortedProduct;
  // sort by price
  // if ({ sort }) {
  //   sortedProduct = product.data.sort((item1, item2) =>
  //     sort === "LowToHigh"
  //       ? item1.price - item2.price
  //       : item2.price - item1.price
  //   );
  // }
  if (sort) {
    // sortedProduct =
    //   product &&
    //   product.data.slice().sort((item1, item2) => {
    //     sort === "LowToHigh"
    //       ? Number(item1.price) - Number(item2.price)
    //       : Number(item2.price) - Number(item1.price);
    //   });
    sortedProduct = sortedProduct.map((item) => console.log(item.price));
  }

  // //sort by category
  if (categories.length) {
    sortedProduct = sortedProduct.filter((product) => {
      return categories.includes(product.categoryName.toLowerCase());
    });
    console.log("selected categories", sortedProduct);

    return sortedProduct;
  }

  if (search) {
    sortedProduct =
      sortedProduct &&
      sortedProduct.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.categoryName.toLowerCase().includes(search.toLowerCase())
      );
    return sortedProduct;
  }
  // //sort by rating
  if (rating) {
    sortedProduct =
      sortedProduct &&
      sortedProduct.filter((product) => {
        return Number(product.rating) >= rating;
      });
  }
  console.log("sortedProduct", sortedProduct);

  return sortedProduct;
};
