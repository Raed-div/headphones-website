import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-specs" element={<TechSpecs />} />
      </Routes>
    </Router>
  );
}
