import axios from "axios";
import { createContext, useContext,useState , useEffect} from "react";

const DataContext = createContext()

const useData = () => useContext(DataContext)

const DataProvider =  ({children} ) =>{
    const [category, setCategory] = useState([]);
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
    return(
        <DataContext.Provider value={{category}}>
            {children}
        </DataContext.Provider>
    )
}

export { useData , DataProvider}