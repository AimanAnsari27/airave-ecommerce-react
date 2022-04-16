import { useData } from "../../Context/DataContext/DataContext"

export default function Category({item}){

   const {dispatch} = useData()
    return(
                <div className="card box-shadow-bottom"
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
                    <div className="card-title flex-align-center pd--5">
                        {item.categoryName}
                    </div>
                </div>
      )
}