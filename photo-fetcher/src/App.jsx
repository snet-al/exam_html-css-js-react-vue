import Layout from './LAYOUT/Layout.jsx'
import MainPage from './PAGES/MainPage.jsx'
import {useState,useEffect,createContext,useContext} from "react"
import dummyData from "./STORE/dummyData.js"

const AppContext=createContext()

export default function App(){
    
    // Logic of the website
    const [images,setImages]=useState([])
    const [grayscale,setGrayscale]=useState(false)
    const [loading,setLoading]=useState(true)

    
    const fetchData=(refreshDataBool)=>{
        let fetchedData=dummyData
        refreshDataBool?  setImages([...fetchedData]) :setImages(i=> [...i,...fetchedData]) 
        setLoading(false)               
    }
    console.log(images);
    
    useEffect(()=>{
        fetchData(false)
    },[])

    return(
        <AppContext.Provider value={{loading,images,fetchData,grayscale,setGrayscale,setLoading}}>
        <Layout>
            <MainPage/>
        </Layout>
        </AppContext.Provider>
    )
}
export const useAppContext=()=>{
    return useContext(AppContext)
}
