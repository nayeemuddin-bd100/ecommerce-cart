import React from 'react';

function Footer() {
    return (
      <div className="main-section__bottom">
        <div className="container">
          <div>
            <div className="main-section__bottom--hr">
              <hr />
            </div>
            <div className="main-section__bottom--total">
              <h2> Total </h2>
              <div className="main-section__bottom--totalamount">$9002</div>
            </div>
          </div>
          <div className="clearAllBtn">
            <button>Clear All</button>
          </div>
        </div>
      </div>
    );
}

export default Footer
