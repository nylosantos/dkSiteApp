import { useEffect, useState } from "react";
// import HorizontalScroll from "react-scroll-horizontal";
import { FullTeam } from "../fullScreens/FullTeam";
import { MidTeam } from "../midScreens/MidTeam";
import { CellphoneTeam } from "../cellphoneScreens/CellphoneTeam";

export function Team() {
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
    return <FullTeam />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <MidTeam />;
  }
  return <CellphoneTeam />;
}
