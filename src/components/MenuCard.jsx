import { useCart } from './CartContext.jsx'

export default function MenuCard({ item }) {
  const { addToCart } = useCart()
  return (
    <div className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition">
      <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.desc}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-rose-600 font-bold">₹{item.price}</span>
        <button onClick={() => addToCart(item)} className="px-3 py-1 rounded-lg bg-rose-600 text-white">Add</button>
      </div>
    </div>
  )
}