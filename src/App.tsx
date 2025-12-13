import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { ContentUniverse } from "./pages/ContentUniverse";


function App() {
  return (
    <Router>
      <main className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/content" element={<ContentUniverse />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
