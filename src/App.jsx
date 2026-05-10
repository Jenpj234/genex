import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import Nearby from './pages/Nearby'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/nearby" element={<Nearby />} />
        </Routes>
        <Navbar />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App