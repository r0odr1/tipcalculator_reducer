import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/ds"
import useOrder from "./hooks/useOrder"

function App() {
  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-emerald-800 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="py-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-emerald-400 p-5 rounnded-lg space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
          />
          <OrderTotals
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
