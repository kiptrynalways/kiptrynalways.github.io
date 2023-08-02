import React from "react";
import { Brand, Vision, Navbar } from "./components";
import { Ticket, Header, Partners, Footer, AboutUs } from "./containers";
import "./App.css";




const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutUs />
      <Partners />
      <Vision />
      <Ticket />
      <Footer />
    </div>
  );
};

export default App;
