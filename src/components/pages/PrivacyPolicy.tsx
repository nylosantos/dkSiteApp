import { useEffect, useState } from "react";
import { CellphonePrivacy } from "../cellphoneScreens/CellphonePrivacy";
import { MidPrivacy } from "../midScreens/MidPrivacy";
import { FullPrivacy } from "../fullScreens/FullPrivacy";

export function PrivacyPolicy() {
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
    return <FullPrivacy />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <MidPrivacy />;
  }
  return <CellphonePrivacy />;
}
