export const CartProduct = () =>{
    return(
        <div>
                <div class="flex box-shadow-light pd-1">
                    <img class=" img-md" src="/Images/Shoes/adidas.webp"/>
                    <div class="flex-col card-body ml-1">
                        <div class="flex gap-3">
                            <div>
                                <div class="card-title text-sm">American Tourister </div>
                                <div class="card-description">Americn tourister bag </div>
                            </div>
                            <div>
                                <i class="fa fa-trash fa-1x text-accent"></i>
                            </div>
                        </div>
                        <div class="price">Rs 2500
                            <del class="gray-text h6 ml-1">Rs. 5000</del>
                            <span class="text-accent h6"> (50% oFF)</span>
                        </div>                            
                        <div class="quantity-btn mt-1 gap-2">
                            <button class="btn-icon-round btn-icon-sm box-shadow-bottom">
                                <i class="fa fa-plus"></i>
                            </button> 
                            <span class="bold-text pd--5">1</span>
                            <button class="btn-icon-round btn-icon-sm box-shadow-bottom">
                                <i class="fa fa-minus"></i>
                            </button> 
                        </div>
                        <a href="/Wishlist/wishlist.html">
                            <button class="btn btn-outline-primary width-100 mt-1">
                                <span>Add to Wishlist</span>
                                <span class="btn-icon"><i class="bi bi-heart"></i></span>
                            </button>
                        </a>
                    </div> 
                </div>
                </div>
    )
}