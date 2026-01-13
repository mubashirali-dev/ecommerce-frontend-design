import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Home from "./page/Home";
import ProductView from "./page/ProductView";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Home /> */}
      <ProductView />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
