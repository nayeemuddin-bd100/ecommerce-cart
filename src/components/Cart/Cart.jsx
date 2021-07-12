import React from "react";
import Footer from "../Footer/Footer";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="main-section">
      <div className="container">
        <h3 className="main-section__title"> Your Bag</h3>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
