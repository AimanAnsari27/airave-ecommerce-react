import { categories } from "../../backend/db/categories"
export default function Category(){
    return(
        <>
        <div class="flex-align-center m-2">
            <h4>Categories</h4>
        </div>
        <div class="flex-align-center gap-2">
            {categories.map((item)=>
                <div class="card box-shadow-bottom">
                    <img class="img-sm" src={item.image}/>
                    <div class="card-title flex-align-center pd--5">
                        {item.categoryName}
                    </div>
                </div>
            )}
        </div>
        </>
      )
}