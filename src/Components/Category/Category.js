export default function Category({item}){
    return(
                <div className="card box-shadow-bottom">
                    <img className="img-sm" src={item.image} alt={item.categoryName}/>
                    <div className="card-title flex-align-center pd--5">
                        {item.categoryName}
                    </div>
                </div>
      )
}