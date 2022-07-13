import React from "react"
import { useState } from "react"

    // In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
    
export default function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function handleClick() {
      setIsInCart(!isInCart)
  }

  return (

    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isInCart ? 'remove' : 'add'}>{isInCart ? 'Remove' : 'Add'}</button>
    </li>
  )
}