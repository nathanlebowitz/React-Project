import './orderItems.css'
import { useState } from 'react'

export default function OrderItems(props) {

    let [quantity, setQuantity] = useState(props.quantity)

    let remaineToAdd = 5 - quantity

    let aboveDeliveryQuantity = <p>{props.itemName} is eligible for delivery</p>
    let underDeliveryQuantity = <p>you still need {remaineToAdd} to get this item deliverd</p>

    return <div className='orders'>
        <h3>Item Name: {props.itemName}</h3>

        <span>Quantity : {quantity}</span>
        {
            (quantity >= 5) ? aboveDeliveryQuantity : underDeliveryQuantity
        }
        <button onClick={() => {
            setQuantity(quantity + 1)
        }}>+</button>
        <button onClick={() => {
            if (quantity >= 1) setQuantity(quantity - 1)
        }}>-</button>
    </div>
}