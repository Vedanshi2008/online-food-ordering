import { menuItems } from '../data/menuData.js'
import MenuCard from '../components/MenuCard.jsx'

export default function Menu() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map(item => <MenuCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}