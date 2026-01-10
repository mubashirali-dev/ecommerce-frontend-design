import "./App.css";
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
    </div>
  );
}

export default App;
