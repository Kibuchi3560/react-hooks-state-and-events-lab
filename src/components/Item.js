import React, { useState } from "react";

function Item({ name, category }) {

let [inCart , setInCart] = useState(false);
const listClass = inCart ? 'in-cart' : '';

  function clickButton () {
    setInCart((inCart) = !inCart);
    

  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickButton}>{ inCart ? 'Remove From Cart' : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
