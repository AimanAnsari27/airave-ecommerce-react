export default function Product({prod}){
    return(
                <div className="card box-shadow-bottom">
                    <img className="img-sm" src={prod.image} alt={prod.title}/>
                    <div className="card-title flex-align-center pd--5">
                       Upto {prod.discount} OFF
                    </div>
                </div>
    )
}