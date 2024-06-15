import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import Invest from "./pages/Invest.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/invest" element={<Invest />} />
      </Routes>
    </Router>
  );
}

export default App;
