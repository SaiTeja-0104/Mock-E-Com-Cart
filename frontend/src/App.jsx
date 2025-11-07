import { Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import CartPage from "./pages/CartPage"
import Navbar from "./components/Navbar"
import CheckoutForm from "./pages/CheckoutForm"
import ReceiptPage from "./pages/ReceiptPage"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className=''>
      <ToastContainer autoClose={1000} />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/checkout' element={<CheckoutForm />}/>
        <Route path='/receipt' element={<ReceiptPage />}/>
      </Routes>
    </div>
  )
}

export default App
