import React from 'react';
import Iphone12 from "../../assests/iphone12.png";


function CartItem() {
    const upSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
    </svg>
  );

  const downSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
    </svg>
  );
    return (
        <div className="cart-section">
            {/* Cart Main Section */}
        <div className="cart-section__main">
          <div className="cart-section__main__image">
            <img src={Iphone12} alt="Iphone 12" />
          </div>
          <div className="cart-section__main__details">
            <h4 className="cart-section__main__details--title">
              Samsung Galaxy S8
            </h4>
            <h4 className="cart-section__main__details--price">$399.99</h4>
            <p className="cart-section__main__details--removeBtn">remove</p>
          </div>
        </div>

            {/* Cart Icon Section */}
        <div className="cart-section__icon">
          <div className="cart-section__icon--increment"> {upSvg}</div>
          <div className="cart-section__icon--amount"> 3</div>
          <div className="cart-section__icon--decrement"> {downSvg}</div>
        </div>
      </div>
    );
}

export default CartItem
