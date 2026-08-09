import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut'
import Home from './components/Home'
import Products from './components/Products'
import Brands from './components/Brands'
import Catrgories from './components/Catrgories'
import WishList from './components/WishList'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import ForgetPassword from './components/ForgetPassword'
import VerifyCodePass from './components/VerifyCodePass'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import UpdatePass from './components/UpdatePass'
import AuthContextPovider from './context/AuthContextPovider'
import ProductRouting from './components/ProductRouting'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails'
import CartContextProvider from './context/CartContextProvider'

import ChackOut from './components/ChackOut'
import AllOrders from './components/AllOrders'
import WishListContextProvider from './context/WishListContextProvider'
import SpecificCartOrder from './components/SpecificCartOrder'

export default function App() {
  let Route = createBrowserRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        { path: "", element: <Home /> },
        { path: "wishlist", element: <WishList /> },
        { path: "products", element: <Products /> },
        { path: "categories", element: <Catrgories /> },
        { path: "brands", element: <Brands /> },
        { path: "cart", element: <Cart />},
        { path: "chackout/:id", element: <ChackOut/> },
        { path: "allorders", element:<AllOrders/> },
        { path: "specificcartorder/:id", element: <SpecificCartOrder/> },
        { path: "signup", element: <SignUp /> },
        { path: "productdetails/:id", element: <ProductDetails/>},
        { path: "login", element: <LogIn /> },
        { path: "forgetPassword", element: <ForgetPassword /> },
        { path: "verifyCodePass", element: <VerifyCodePass /> },
        { path: "updatePass", element: <UpdatePass /> },
        { path: "*", element: <NotFound /> },

      ]
    }
  ])

  let client = new QueryClient()
  return (
    <QueryClientProvider client={client}>

      <AuthContextPovider>

        <CartContextProvider>

          <WishListContextProvider>

          <RouterProvider router={Route}></RouterProvider>

          </WishListContextProvider>

        </CartContextProvider>
        
      </AuthContextPovider>

    </QueryClientProvider>


  )
}
