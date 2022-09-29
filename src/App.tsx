import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import HorizontalScroll from "react-scroll-horizontal";
import carrouselImages from "./components/CellphoneArray";
import { Header } from "./components/Header";
import { Fade } from "react-awesome-reveal";
import { CellphoneMission } from "./components/cellphoneScreens/CellphoneMission";

function App() {
  const horizontalPage = { width: `100vw`, height: `100vh` };

  // GET SCREEN SIZE DYNAMICALLY
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const width = screenSize.dynamicWidth;
  const heigth = screenSize.dynamicHeight;

  const midBreakpoint = 600;

  if (width > midBreakpoint) {
    return (
      <div>
        <Header />
        <h3>Component 1</h3>
        <p>Current width is {width} px</p>
      </div>
    );
  }
  return (
    <CellphoneMission />
  );
}

export default App;

{
  /*    <div className="w-5/12 flex justify-center">
          <p className="text-center">
            Scan the
            <br />
            QRCode
            <br />
            to preview
            <br />
            the emotion.
          </p>
        </div>
        <div className="border-4 border-white w-16 h-16"></div> */
}
