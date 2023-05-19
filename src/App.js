import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import { Home } from "./pages/Home";
import Empresa from "./pages/Empresa";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
