import { useEffect, useState } from "react";
import { FullAbout } from "../fullScreens/FullAbout";
import { MidAbout } from "../midScreens/MidAbout";
import { CellphoneAbout } from "../cellphoneScreens/CellphoneAbout";

export function About() {
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
    return <FullAbout/>;
  }
  if (width > midBreakpoint && width > heigth) {
    return <MidAbout />;
  }
  return <CellphoneAbout />;
}
