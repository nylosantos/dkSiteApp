import { useEffect, useState } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import { Header } from "./components/header/Header";
import { CellphoneMission } from "./components/cellphoneScreens/CellphoneMission";
import { MidMission } from "./components/midScreens/MidMission";
import { FullMission } from "./components/fullScreens/FullMission";
import { CellphoneHome } from "./components/cellphoneScreens/CellphoneHome";
import { MidHome } from "./components/midScreens/MidHome";
import { FullHome } from "./components/fullScreens/FullHome";

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

  const midBreakpoint = 652;
  const fullBreackpoint = 1023;

  if (width > fullBreackpoint){
    return (
      <FullHome />
    )
  }
  if (width > midBreakpoint && width > heigth ) {
    return (
      <MidHome />
    );
  }
  return (
    <CellphoneHome />
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
