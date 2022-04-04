export const FilterProduct = (product, {sort, categories, price}) =>{
    let sortedProduct;

    // sort by price
    if({sort}) {
    sortedProduct =  product.sort((item1,item2)=>
    sort === 'LowToHigh' ? item1.price - item2.price : item2.price- item1.price)
    }

        // sort by price range
        if(price){
            sortedProduct = sortedProduct.filter((product)=>
            product.price > price
            )
        }
    // sort by categories
    if (!categories.length) 
        return sortedProduct;
        sortedProduct = sortedProduct.filter((product) => {
            return categories.includes(product.categoryName.toLowerCase());
    });


    return sortedProduct
}

