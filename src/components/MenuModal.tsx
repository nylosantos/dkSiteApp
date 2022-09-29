import { useEffect, useState } from "react";
import { ModalMidScreen } from "./modalScreens/ModalMidScreen";
import { ModalCellphoneScreen } from "./modalScreens/ModalCellphoneScreen";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
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
  if (width > midBreakpoint) {
    return <ModalMidScreen isOpen={isOpen} onClose={onClose} />;
  }
  {
    return <ModalCellphoneScreen isOpen={isOpen} onClose={onClose} />;
  }
}
