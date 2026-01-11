import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
