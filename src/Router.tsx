import { Routes, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { CookiePolicy } from "./components/pages/CookiePolicy";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { Team } from "./components/pages/Team";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
  );
}
