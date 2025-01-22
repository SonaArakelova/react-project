import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


export const Header = (props) => {
  const navigate = useNavigate(); 

  const handleCheckoutClick = () => {
    navigate("/checkout"); 
  };

  return (
    <div className="header">
      <div className="avatar">
        <img
          alt=""
          className=" avatar.mage"
          src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
        />
        David
      </div>
      <div className="Header-checkout">
        <button className="button" onClick={handleCheckoutClick}>
          <FaShoppingCart />
          Checkout
        </button>
      </div>
      
    </div>
  );
};
