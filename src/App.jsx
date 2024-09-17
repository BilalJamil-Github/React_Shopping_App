import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Applayout from './Components/Applayout/Applayout'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Contact from './Components/Contact/Contact'
import Eachproduct from './Components/Product/Eachproduct'
import myproducts from './Components/Product/data.json';
import Cart from './Components/Cart/Cart'
function App() {

  const Router = createBrowserRouter([
    {
      path:'/',
      element: <Applayout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        } , 
        {
          path:'/product',
          element:<Product />,
        },
        {
          path: '/product/:id',
          element: <Eachproduct  products={myproducts} />,
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
    }  
  ])

  return (
    <>
       <RouterProvider router={Router}/>
    </>
  )
}

export default App
