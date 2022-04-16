import { useData } from "../../Context/DataContext/DataContext"
import '../../App.css'
export default function Category({item}){

   const {dispatch} = useData()
    return(
                <div className="category-card box-shadow"
                onClick={() => {
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: {
                        isChecked: true,
                        value: item.categoryName.toLowerCase(),
                      },
                    });
                  }}
                  >
                    <img className="img-sm" src={item.image} alt={item.categoryName}/>
                    <div className="card-title flex-align-center pd-1 bg-light-gray-2">
                        {item.categoryName}
                    </div>
                </div>
      )
}