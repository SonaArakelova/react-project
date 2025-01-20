import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export const Header = (props) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleCheckoutClick = () => {
    navigate("/checkout"); // Navigate to the checkout page
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
