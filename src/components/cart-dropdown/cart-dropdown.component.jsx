import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>Go to checkout</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
