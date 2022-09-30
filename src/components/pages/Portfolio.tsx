import { useEffect, useState } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import { CellphonePortfolio } from "../cellphoneScreens/CellphonePortfolio";
import { MidPortfolio } from "../midScreens/MidPortfolio";
import { FullPortfolio } from "../fullScreens/FullPortfolio";

export function Portfolio() {
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

  if (width > fullBreackpoint) {
    return <FullPortfolio />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <MidPortfolio />;
  }
  return <CellphonePortfolio />;
}
