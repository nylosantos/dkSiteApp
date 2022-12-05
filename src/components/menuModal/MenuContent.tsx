import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { Link, redirect } from "react-router-dom";
import { ContactFormData } from "../../@types/form";
import { ScreenSizeRouterProps } from "../../Router";
import { ContactModal } from "../contactModal/ContactModal";

interface MenuContentProps extends ScreenSizeRouterProps {
  divider?: boolean;
  handleToggleMenu?: () => void;
  openMenu?: boolean;
}

export function MenuContent({
  divider,
  handleToggleMenu,
  openMenu,
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: MenuContentProps) {
  const [openContactModal, setOpenContactModal] = useState(false);
  const closeInstructionModal = () => setOpenContactModal(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col tablet:flex-row container gap-8 tablet:justify-between">
        <div className="flex flex-col w-full justify-center items-center">
          <ContactModal
            openContactModal={openContactModal}
            onClose={closeInstructionModal}
            menuIsOpen={openMenu}
            handleToggleMenu={handleToggleMenu}
            windowSize={windowSize}
            tabletBreakpoint={tabletBreakpoint}
            desktopBreakpoint={desktopBreakpoint}
          />
          <ol className="flex flex-col gap-10 text-center tablet:text-left tablet:gap-4 desktop:gap-16 text-2xl tablet:text-xl desktop:text-5xl">
            <Fade cascade={true} duration={750}>
              <Link to={"/"} onClick={closeInstructionModal}>
                <li className="hover:text-red-600 transition-all duration-300">
                  Home
                </li>
              </Link>
              <Link to={"/about"} onClick={closeInstructionModal}>
                <li className="hover:text-red-600 transition-all duration-300">
                  About
                </li>
              </Link>
              <Link to={"/team"} onClick={closeInstructionModal}>
                <li className="hover:text-red-600 transition-all duration-300">
                  Our Teamys
                </li>
              </Link>
              <Link to={"/portfolio"} onClick={closeInstructionModal}>
                <li className="hover:text-red-600 transition-all duration-300">
                  Portfolio
                </li>
              </Link>
              <li
                className="hover:text-red-600 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenContactModal(true)}
              >
                Contact
              </li>
            </Fade>
          </ol>
        </div>
        {divider ? <hr className="border-red-500" /> : null}
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="tablet:mb-1 desktop:mb-4 text-gray-600 desktop:text-3xl">
            Say Hello!
          </h1>
          <a href="mailto:danielkosttas@gmail.com" target="_blank">
            <h2 className="text-gray-600 hover:text-red-600 transition-all duration-200 hover:scale-105 tablet:mb-1 desktop:text-3xl desktop:mb-4 font-bold">
              daniel@danielkosttas.com
            </h2>
          </a>
          <a href="https://wa.link/ohpbky" target="_blank">
            <h2 className="text-gray-600 hover:text-red-600 transition-all duration-200 hover:scale-105 tablet:mb-1 desktop:text-3xl desktop:mb-4 font-bold">
              +39 348 696 2186
            </h2>
          </a>
          <p
            className="text-red-600 text-base text-center hover:font-bold transition-all duration-200 cursor-pointer"
            onClick={() => setOpenContactModal(true)}
          >
            Click and contact us now!
          </p>
        </div>
      </div>
    </div>
  );
}
