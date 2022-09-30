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

export function FooterMidScreen() {
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
    <div className="flex flex-col h-full py-5 bg-gray-900 footer justify-center gap-6">
      <ContactModal isOpen={isOpen} onClose={closeInstructionModal} />
      <Fade className="flex justify-center items-center">
        <img
          src="./src/assets/logoPearl.png"
          alt="DK Logo Footer"
          className="w-2/6"
          onClick={handleGoTop}
        />
      </Fade>
      <div className="flex justify-center items-start gap-6">
        <Fade>
          <FaLinkedinIn className="text-base text-white hover:text-pinkPage transition-all duration-200 cursor-pointer" />
          <FaTwitter className="text-base text-white hover:text-pinkPage transition-all duration-200 cursor-pointer" />
          <FaFacebookF className="text-base text-white hover:text-pinkPage transition-all duration-200 cursor-pointer" />
          <FaInstagram className="text-base text-white hover:text-pinkPage transition-all duration-200 cursor-pointer" />
        </Fade>
      </div>
      <div className="flex right-0">
        <Fade direction="right">
          <div
            className={`flex flex-col items-start justify-center p-10 ml-6 gap-6 text-base text-white footerContent bg-blackOpacity-30`}
          >
            <p className="text-sm">
              We are committed to making the impossible, possible! We build
              strategies to achieve your goals and we will use the best tool to
              make it through.
            </p>
            <div
              className="flex gap-6 items-center cursor-pointer hover:text-pinkPage hover:transition hover:transform hover:translate-x-2 hover:duration-300"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-3xl font-bold lowercase">Say Hello</p>
              <BsArrowRight className="text-3xl" />
            </div>
            <div className="relative mt-10 flex text-xs text-gray-400 w-full gap-10 justify-center divide-x-[1] text-center">
              <p>©2022. DK. All rights reserved.</p>
              <p className="cursor-pointer hover:text-pinkPage transition-all duration-200">
                Terms of Use
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
