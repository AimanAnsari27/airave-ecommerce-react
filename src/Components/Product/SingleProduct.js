import './Product.css'
export const SingleProducts  = ({product}) =>{
    return(
        <>
            {product.map(({name, image, price, description }) =>
                <div class="card">
                    <i class="bi bi-heart wishlist"></i>
                        <img src={image} alt={name} className="img-sm"/>
                        <div class="card-body">
                            <div class="card-title">{name}</div>
                            <div class="card-description">{description}</div>
                            <div class="price">{price}</div>
                            <button className='btn btn-primary width-100 mt-1'>Add to cart</button>
                        </div>
                </div>   
            )}
        </>                         
    )
}