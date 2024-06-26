import OrderItems from "./components/orderItems"

const items = [{
  itemName: 'Case Water',
  quantity: 0
},{
  itemName: 'Case seltzer',
  quantity: 0
},{
  itemName: 'Case Grape Juice',
  quantity: 0
},{
  itemName: 'Case Tissues',
  quantity: 0
},{
  itemName: 'Case Towel Paper',
  quantity: 0
}]

function App() {
  return (
    <>
    {items.map((item, index) =>(
      <OrderItems key = {index} itemName = {item.itemName} quantity={item.quantity} />
    ))}
    </>
  )
}

export default App
