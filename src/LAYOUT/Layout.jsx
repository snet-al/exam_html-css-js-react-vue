
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import {Outlet} from "react-router-dom"

export default function Layout({context}){
    const {setGrayscale,fetchData,loading,setLoading} = context

    return(
    <main className='page-container'>
        <Header context={{setGrayscale,fetchData,loading,setLoading}}/>
        <Outlet/>
        <Footer context={{fetchData,loading,setLoading}}/>       
    </main>
    )
}
