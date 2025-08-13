import { useCart } from '../components/CartContext.jsx'

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (!cart.length) {
    return <p>Your cart is empty.</p>
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <h3 className="font-semibold">{item.name} × {item.qty}</h3>
              <span className="text-gray-500">₹{item.price}</span>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-gray-200 rounded-lg">Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center font-bold text-lg">
        <span>Total: ₹{total}</span>
        <button onClick={clearCart} className="px-4 py-2 bg-rose-600 text-white rounded-lg">Checkout</button>
      </div>
    </section>
  )
}