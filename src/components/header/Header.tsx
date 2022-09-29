import { useEffect, useState } from "react";
import { HeaderMidScreen } from "./HeaderMidScreen";
import { HeaderCellphoneScreen } from "./HeaderCellphoneScreen";
import { HeaderFullScreen } from "./HeaderFullScreen";

type Props = {
  bgColor: string;
  shadow: string;
};

export function Header({ bgColor, shadow }: Props) {
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
  const lowOpacity = `flex fixed top-0 left-0 w-screen justify-center items-center ${bgColor}-10 ${shadow} z-20`;
  const highOpacity = `flex fixed top-0 left-0 w-screen justify-center items-center ${bgColor}-50 ${shadow} z-20`;
  const [headerStyle, setHeaderStyle] = useState(lowOpacity);
  const scrollBgChange = () => {
    if (window.scrollY >= 50) {
      setHeaderStyle(highOpacity);
    } else {
      setHeaderStyle(lowOpacity);
    }
  };
  window.addEventListener("scroll", scrollBgChange);
  const midBreakpoint = 652;
  const fullBreackpoint = 1023;
  if (width > fullBreackpoint){
    return (
      <HeaderFullScreen />
    )
  }
  if (width > midBreakpoint && width > heigth ) {
    return <HeaderMidScreen />;
  }
  return <HeaderCellphoneScreen headerStyle={headerStyle} />;
}
