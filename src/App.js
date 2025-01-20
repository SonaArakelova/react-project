import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main.js";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import items from "./items";
import "./App.css";
import CheckoutPage from "./components/checkoutpage.js";


const LoginBanner = () => {
  return (
    <div className={`logmessage`}>
      <div className="logstatus">You are not logged in.</div>
      <p>You may now log-in with the username you have chosen</p>
    </div>
  );
};

function App() {
  const openingHours = "We are not working on Holidays";
  const isUserLoggedin = false;

  return (
    <Router> 
      <div className="container">
        <Header />
        {isUserLoggedin ? null : <LoginBanner />}
        <Main items={items} />
        <Footer opening={openingHours} />
        </div>
        
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
