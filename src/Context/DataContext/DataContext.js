import axios from "axios";
import { createContext, useContext,useState , useEffect,useReducer } from "react";
import { filterReducer } from "../../Components/Product";

const initialState = {
    sort:"",
    categories: [],
    price: 1000,
}

const DataContext = createContext()

const useData = () => useContext(DataContext)

const DataProvider =  ({children} ) =>{
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [state, dispatch] = useReducer( filterReducer , initialState)

// getting categories
    useEffect(()=>{
        try{
            (async () =>{
                let res = await axios.get('/api/categories');
                setCategory(res.data.categories)
            })()
        }
        catch(err){
            console.log('something went wrong')
        }
        
    },[])
    if(category === undefined)
        {  
            setCategory('loading')
        }

// getting products        
        useEffect(()=>{
            try{
                (async () =>{
                    let productResponse = await axios.get('/api/products');
                    setProduct(productResponse.data.products)
                })()
            }
            catch(err){
                console.log('something went wrong')
            }
            
        },[])    
    return(
        <DataContext.Provider value={{category, product, state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export { useData , DataProvider}