import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/ds"
import useOrder from "./hooks/useOrder"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const { placeOrder } = useOrder()
  const [state, dispatch] = useReducer(orderReducer, initialState)

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
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-emerald-400 p-5 rounnded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />
              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p> 
          )}
        </div>
      </main>
    </>
  )
}

export default App
