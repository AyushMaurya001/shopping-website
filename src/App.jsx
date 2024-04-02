import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { CustomerSignin, CustomerSignup, ErrorElement, Home, SellerAddProduct, SellerDashboard, SellerSignin, SellerSignup } from "./pages"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Outlet />} errorElement={<ErrorElement />} >

        {/* customer routes */}
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/login" element={<CustomerSignin />} />
        <Route path="/home" element={<Home />} />

        {/* seller routes */}
        <Route path="/seller/signup" element={<SellerSignup />} />
        <Route path="/seller/login" element={<SellerSignin />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/add-product" element={<SellerAddProduct />} />
        {/* need to add respective pages to each path */}
        <Route path="/seller/inventory" element={<SellerAddProduct />} />
        <Route path="/seller/orders" element={<SellerAddProduct />} />
        <Route path="/seller/customers" element={<SellerAddProduct />} />
        <Route path="/seller/analytics" element={<SellerAddProduct />} />

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
