import { useEffect, useState } from "react";
import { ContactMidScreen } from "./ContactMidScreen";
import { ContactCellphoneScreen } from "./ContactCellphoneScreen";
import { ContactFullScreen } from "./ContactFullScreen";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: MenuModalProps) {
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
    return <ContactFullScreen isOpen={isOpen} onClose={onClose} />;
  }
  if (width > midBreakpoint && width > heigth) {
    return <ContactMidScreen isOpen={isOpen} onClose={onClose} />;
  }
  {
    return <ContactCellphoneScreen isOpen={isOpen} onClose={onClose} />;
  }
}
