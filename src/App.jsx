import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import { CartProvider } from './components/CartContext.jsx'

function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition ${isActive ? 'bg-rose-600 text-white' : 'hover:bg-rose-100 text-gray-800'}`
  return (
    <header className="bg-white shadow">
      <div className="container flex justify-between items-center h-16">
        <NavLink to="/" className="text-xl font-bold text-rose-600">QuickBite</NavLink>
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/menu" className={linkClass}>Menu</NavLink>
          <NavLink to="/cart" className={linkClass}>Cart</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} QuickBite. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}