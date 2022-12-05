import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Team } from "./pages/Team";
import ReactGA from "react-ga4";
import { Contact } from "./pages/Contact";
import { useEffect, useState } from "react";

ReactGA.initialize("G-K0K30KW2NK");
ReactGA.send("pageview");

// SET TABLET BREAKPOINT
const midBreakpoint = 652;

// SET DESKTOP BREAKPOINT
const fullBreakpoint = 1023;

export interface ScreenSizeRouterProps {
  windowSize: {
    innerWidth: number;
    innerHeight: number;
  };
  tabletBreakpoint: number;
  desktopBreakpoint: number;
}

export function Router() {
  // GET SCREEN SIZE HOOK
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // GETTING WINDOW RESIZE
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/team"
        element={
          <Team
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/portfolio"
        element={
          <Portfolio
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <PrivacyPolicy
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/cookie-policy"
        element={
          <CookiePolicy
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
      <Route
        path="/contact"
        element={
          <Contact
            windowSize={windowSize}
            tabletBreakpoint={midBreakpoint}
            desktopBreakpoint={fullBreakpoint}
          />
        }
      />
    </Routes>
  );
}

// GET SCREEN SIZE FUNCTION
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
