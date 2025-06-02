import Main from '../components/Main.jsx'
import Layout from '../LAYOUT/Layout.jsx'
import {createBrowserRouter,RouterProvider,Link} from "react-router-dom"




const router=createBrowserRouter([
  {path:"/", element:<Layout/>, children:[{ index: true, element: <Main></Main> }]},
  {path:"*", element:    <main className='page-container'><Link to="/">Return back to the main page</Link></main>},
])
function MainPage() {

  return (
      <RouterProvider router={router}/>
  )
}

export default MainPage
