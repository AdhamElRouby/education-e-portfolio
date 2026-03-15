import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Adham from './pages/Adham';
import Darwish from './pages/Darwish';
import Abdeen from './pages/Abdeen';
import Kareem from './pages/Kareem';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adham" element={<Adham />} />
        <Route path="/darwish" element={<Darwish />} />
        <Route path="/abdeen" element={<Abdeen />} />
        <Route path="/kareem" element={<Kareem />} />
        {/* We will add student routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
