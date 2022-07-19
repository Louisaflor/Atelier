import React, {useState} from 'react';

function AddToCartFunction ({sizeOption, quantityDisabled, quantityPurchased, setItemsInCart, productName, styleName, thumbnailURL, itemsInCart}) {

  const handleClick = (event) => {
    event.preventDefault();
    var newItem = [productName, styleName, sizeOption, quantityPurchased, thumbnailURL];
    itemsInCart.push(newItem);
    setItemsInCart(itemsInCart)

  }

  return (
    <span>
      <button disabled = {quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')} onClick = {handleClick} className = 'drop-down-menu' style = {{backgroundColor : (quantityDisabled || (quantityPurchased === 0 || quantityPurchased === 'Select Quantity')) ? 'default' : '#A6ECE0'}} id = 'add-to-cart-style'>Add To Cart</button>
    </span>
  )
}

export default AddToCartFunction;