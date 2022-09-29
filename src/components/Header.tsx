import { useEffect, useState } from "react";
import { HeaderMidScreen } from "./midScreens/HeaderMidScreen";
import { HeaderCellphoneScreen } from "./midScreens/HeaderCellphoneScreen";

export function Header() {
  const midBreakpoint = 600;
  // GET SCREEN SIZE DYNAMICALLY
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const width = screenSize.dynamicWidth;
  const lowOpacity =
    "flex fixed top-0 left-0 w-screen h-8 justify-center items-center bg-blackOpacity-10 shadow z-20";
  const highOpacity =
    "flex fixed top-0 left-0 w-screen h-8 justify-center items-center bg-blackOpacity-50 shadow z-20";
  const [headerStyle, setHeaderStyle] = useState(lowOpacity);
  const scrollBgChange = () => {
    if (window.scrollY >= 50) {
      setHeaderStyle(highOpacity);
    } else {
      setHeaderStyle(lowOpacity);
    }
  };
  window.addEventListener("scroll", scrollBgChange);
  if (width > midBreakpoint) {
    return <HeaderMidScreen headerStyle={headerStyle} />;
  }
  return <HeaderCellphoneScreen headerStyle={headerStyle} />;
}
