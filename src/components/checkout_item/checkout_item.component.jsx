import React from 'react';
import { createStructuredSelector } from 'reselect';
import { addItem } from '../../redux/cart/cart.actions';

import './checkout_item.styles.scss';

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-item">&#10005;</div>
  </div>
);
/*
const mapStateToProps = createStructuredSelector({
  addItem
})*/
export default CheckOutItem;
