import { MotionConfig } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreativeLab } from "./pages/CreativeLab";
import { ContentUniverse } from "./pages/ContentUniverse";


function App() {
  return (
    <MotionConfig reducedMotion="user"><Router>
      <main className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creative-lab" element={<CreativeLab />} />
          <Route path="/work" element={<Navigate to="/content" replace />} />
          <Route path="/work/:id" element={<Navigate to="/content" replace />} />
          <Route path="/content" element={<ContentUniverse />} />
        </Routes>
      </main>
    </Router></MotionConfig>
  );
}

export default App;
