import { BsArrowRight } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { ContactModal } from "../contactModal/ContactModal";

export function FooterFullScreen() {
  function handleGoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeInstructionModal = () => setIsOpen(false);
  return (
    //more FOOTER CSS in global.css
    <div className="flex h-96 py-5 bg-gray-900 footer justify-center">
      <ContactModal isOpen={isOpen} onClose={closeInstructionModal} />
      <div className="flex container">
        <div className="text-3xl text-white flex flex-col w-full gap-4">
          <div className="flex items-center h-[50%]">
            <Fade>
              <img
                src="./src/assets/logoPearl.png"
                alt="DK Logo Footer"
                className="w-2/6 cursor-pointer"
                onClick={handleGoTop}
              />
            </Fade>
          </div>
          <div className="text-lg flex items-start gap-6 h-[50%]">
            <Fade>
              <FaLinkedinIn className="text-3xl hover:text-pinkPage transition-all duration-200 cursor-pointer" />
              <FaTwitter className="text-3xl hover:text-pinkPage transition-all duration-200 cursor-pointer" />
              <FaFacebookF className="text-3xl hover:text-pinkPage transition-all duration-200 cursor-pointer" />
              <FaInstagram className="text-3xl hover:text-pinkPage transition-all duration-200 cursor-pointer" />
            </Fade>
          </div>
        </div>
        <Fade direction="right">
          <div
            className={`flex flex-col items-start justify-center p-10 gap-6 -top-10 text-white text-3xl footerContent bg-blackOpacity-50`}
          >
            <p className="text-lg mt-10">
              We are committed to making the impossible, possible! We build
              strategies to achieve your goals and we will use the best tool to
              make it through.
            </p>
            <div
              className="flex gap-6 items-center cursor-pointer hover:text-pinkPage hover:transition hover:transform hover:translate-x-2 hover:duration-300"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-5xl font-bold lowercase">Say Hello</p>
              <BsArrowRight className="text-5xl" />
            </div>
            <div className="relative flex top-28 text-base text-gray-400 w-full gap-10 justify-center divide-x-[1] text-center">
              <p className="w-full">©2022. Figaro. All rights reserved.</p>
              <p className="cursor-pointer hover:text-pinkPage transition-all duration-200 w-full">
                Terms of Use
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
