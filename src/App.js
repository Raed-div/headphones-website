import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs";
import Compare from "./pages/Compare";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-specs" element={<TechSpecs />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}
