import Main from '../components/Main.jsx'
import Layout from '../LAYOUT/Layout.jsx'
import dummyData from '../STORE/dummyData.js'
import ImageShowcase from '../components/UI/ImageShowcase.jsx'
import {useState,useEffect} from "react"
import {createBrowserRouter,RouterProvider,Link} from "react-router-dom"




function MainPage() {
  
  const [images,setImages]=useState([])
  const [grayscale,setGrayscale]=useState(false)
  const [loading,setLoading]=useState(true)
  
  const fetchData=(refreshDataBool)=>{
      refreshDataBool?  setImages([...dummyData]) :setImages(prevImages=> [...prevImages,...dummyData])  
      setLoading(false)               
  }

  const router=createBrowserRouter([
    {path:"/", element:<Layout context={{grayscale,setGrayscale,fetchData,loading,setLoading}}/>, 

      children:[{ index: true, 
          element: 
          <Main grayscale={grayscale}>
                {images.map((img,index)=>(
                  <ImageShowcase key={index} img={img}/>
              ))}
          </Main> 
                }]},


    {path:"*", element:
    <main className='page-container'><Link to="/">Return back to the main page</Link></main>
    },
  ])
      
      
      useEffect(()=>{
          fetchData(false)
      },[])

  return (
      <RouterProvider router={router}/>
  )
}

export default MainPage

