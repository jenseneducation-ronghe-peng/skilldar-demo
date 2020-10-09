import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#2b2d2f" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
