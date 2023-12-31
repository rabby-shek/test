import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/cart" element={<><Cart /></>} />
      </Routes>
    </Router>
  );
}

export default App;
