export default function Home() {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold text-rose-600">Welcome to QuickBite 🍕</h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Your favorite meals delivered fast at your door. Explore our menu, fill your cart, and enjoy delicious food.
      </p>
      <a href="/menu" className="mt-6 inline-block px-6 py-3 rounded-lg bg-rose-600 text-white">Order Now</a>
    </section>
  )
}