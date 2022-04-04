import { useData } from "../../Context/DataContext/DataContext"

export const Filter = () =>{
    const{state : {categories, sort, price}, dispatch, category} = useData()
    return(
        <div>
            <div class=""> 
                <div class="flex pd-1 gap-4">
                    <span>Filter</span>
                    <span class="filter-text"
                        onClick={()=>{
                            dispatch({
                                type:'CLEAR_ALL',
                                payload: 'clear'
                            })
                        }}>
                        Clear All
                    </span>
                </div>
            <hr />
            <div class="pd-1">
                <p class="text-dark">Price</p>
                    <input 
                        type="range"
                        min="1000"
                        max="15000"
                        step="20"
                        value={price}
                        label={price}
                        onChange = {(e)=>{
                            dispatch({
                                type:'FILTER_BY_PRICE_RANGE',
                                payload:e.target.value
                            })
                        }}
                    />
                    <p id="price" class="text-gray text-xsm">{price}</p>
            </div>
            <hr />
            <div class="mt-1">    
                <ul class="list-item">
                    <li>Sort By</li>
                    <li>
                        <input type="radio" 
                            name="rating" 
                            id="high-to-low" 
                            onChange = {() =>
                                dispatch({
                                    type:'SORT_BY_PRICE',
                                    payload: 'HighToLow'
                                })}
                            checked={sort === 'HighToLow' ? true :  false}
                        >
                        </input>
                        <span>Price - High to Low</span>
                    </li>
                    <li>
                        <input 
                            type="radio"
                            name="rating"
                            id="low-to-high"
                            onChange = {() =>
                                dispatch({
                                    type:'SORT_BY_PRICE',
                                    payload: 'LowToHigh'
                                })}
                            checked={sort === 'LowToHigh' ? true :  false}
                            >
                        </input>
                        <span>Price - Low to high</span>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="mb-1 mt-1">
                <ul class="list-item">
                    <li>Categories</li>
                        {category.map(({categoryName}) =>
                            <li>
                                <input 
                                    type="checkbox"
                                    value={categoryName.toLocaleLowerCase()}
                                    aria-label={category}
                                    onChange={(e) => {
                                        dispatch({
                                            type: "FILTER_BY_CATEGORY",
                                            payload: {
                                                isChecked: e.target.checked,
                                                value: e.target.value,
                                            },
                                        });
                                    }}
                                    checked={categories.includes(categoryName.toLowerCase())}
                                />
                                <span>{categoryName}</span>
                            </li>
                        )}
                </ul>
            </div>   
            <hr />
            
        </div>
    </div>
    )
}