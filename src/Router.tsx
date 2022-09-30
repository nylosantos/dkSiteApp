import { Routes, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";
import { Team } from "./components/pages/Team";

export function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  );
}
