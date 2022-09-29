import { useEffect, useState } from "react";
import { ModalMidScreen } from "./ModalMidScreen";
import { ModalCellphoneScreen } from "./ModalCellphoneScreen";
import { ModalFullScreen } from "./ModalFullScreen";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
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
    return <ModalFullScreen isOpen={isOpen} onClose={onClose} />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <ModalMidScreen isOpen={isOpen} onClose={onClose} />;
  }
  {
    return <ModalCellphoneScreen isOpen={isOpen} onClose={onClose} />;
  }
}
