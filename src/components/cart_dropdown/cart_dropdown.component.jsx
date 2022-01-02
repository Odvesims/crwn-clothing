import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom_button/custom_button.component';
import CartItem from '../cart_item/cart_item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart_dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
