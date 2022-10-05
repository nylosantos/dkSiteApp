import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Router } from "./Router";

const TRACKING_ID = "UA-244093439-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}
export default App;
