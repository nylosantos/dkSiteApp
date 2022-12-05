import { useState } from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { MenuModal } from "../components/menuModal/MenuModal";
import { ContactForm } from "../components/contactForm";

import { FaPaperPlane } from "react-icons/fa";
import { ScreenSizeRouterProps } from "../Router";

export function Contact({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => setOpenMenu(!openMenu);
  return (
    <div className="bg-white w-screen flex flex-col items-center">
      <Header
        colorScheme="whiteAlpha"
        variant="solid"
        openMenu={openMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <MenuModal
        openMenu={openMenu}
        handleToggleMenu={handleToggleMenu}
        windowSize={windowSize}
        tabletBreakpoint={tabletBreakpoint}
        desktopBreakpoint={desktopBreakpoint}
      />
      <div className="w-5/6 h-full mt-32 mb-12 flex flex-col text-left gap-4">
        <h1 className="text-4xl font-bold font-poppins flex items-center gap-3">
          <FaPaperPlane className="text-red-600" />
          Contact Us
        </h1>
        <p>Fill Out Our Form & We'll be in Touch Shortly</p>
        <p className="text-gray-500 text-sm text-left w-full mb-4">
          "*" indicates required fields
        </p>
        <ContactForm
          onClose={() => null}
          gaEventTrackerCategory="Contact Desktop"
          gaEventTrackerAction="Contact Submit"
          gaEventTrackerLabel="Contact Submit in Desktop"
        />
      </div>
      <Footer
        isContact
        windowSize={windowSize}
        tabletBreakpoint={tabletBreakpoint}
        desktopBreakpoint={desktopBreakpoint}
      />
    </div>
  );
}
