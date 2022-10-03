import { useEffect, useState } from "react";
import { FullCookie } from "../fullScreens/FullCookie";
import { MidCookie } from "../midScreens/MidCookie";
import { CellphoneCookie } from "../cellphoneScreens/CellphoneCookie";

export function CookiePolicy() {
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
    return <FullCookie />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <MidCookie />;
  }
  return <CellphoneCookie />;
}
