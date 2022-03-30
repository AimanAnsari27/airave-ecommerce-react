import { categories } from "../../backend/db/categories"
export default function Category(){
    return(
        <>
        <div className="flex-align-center m-2">
            <h4>Categories</h4>
        </div>
        <div className="flex-align-center gap-2">
            {categories.map((item)=>
                <div className="card box-shadow-bottom">
                    <img className="img-sm" src={item.image} alt={item.categoryName}/>
                    <div className="card-title flex-align-center pd--5">
                        {item.categoryName}
                    </div>
                </div>
            )}
        </div>
        </>
      )
}