import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Home from "./page/Home";
import ProductView from "./page/ProductView";
import ProductDetail from "./page/ProductDetail";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/product") {
        setCurrentPage("product");
      } else if (path === "/product/detail") {
        setCurrentPage("detail");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSearch = () => {
    window.history.pushState({ page: "product" }, "", "/product");
    setCurrentPage("product");
  };

  const handleProductClick = () => {
    window.history.pushState({ page: "detail" }, "", "/product/detail");
    setCurrentPage("detail");
  };

  const handleBack = () => {
    if (currentPage === "detail") {
      window.history.pushState({ page: "product" }, "", "/product");
      setCurrentPage("product");
    } else {
      window.history.pushState({ page: "home" }, "", "/");
      setCurrentPage("home");
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Navbar />
      {currentPage === "home" && <Home />}
      {currentPage === "product" && (
        <ProductView onBack={handleBack} onProductClick={handleProductClick} />
      )}
      {currentPage === "detail" && <ProductDetail onBack={handleBack} />}
      <Footer />
    </div>
  );
}

export default App;
