import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Home from "./pages/home/Home";
function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<><Home /></>} />
      </Routes>
    </Router>
  );
}

export default App;
