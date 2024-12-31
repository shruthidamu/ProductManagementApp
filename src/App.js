import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./app.scss";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <ProductList />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
