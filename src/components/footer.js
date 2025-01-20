import { Fragment } from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 



const SocialIcons = ()=> {
  return(
    <Fragment>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="#4267B2" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E4405F"  />
      </a>
    </Fragment>

  )
}

export const Footer = (props) =>{
  return <div className="footer">
    <a href = "http://localhost:3000/">Back to Cart</a>
    <span>
      {props.opening}
    </span>
    <div className="social-icons">
      <SocialIcons />

    </div>
  </div>
}