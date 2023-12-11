import React, { useState } from "react";

function Item({ name, category }) {

    const [isInCart, setIsInCart] = useState(false)

    function handleAddToCartClick() {
      setIsInCart((isInCart) => !isInCart);
    }


  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "Add"} onClick= {handleAddToCartClick}>{isInCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
