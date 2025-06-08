import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ContactSection from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
