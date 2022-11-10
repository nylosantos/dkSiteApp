import { BsArrowRight } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { ContactModal } from "../contactModal/ContactModal";
import { Link } from "react-router-dom";

export function FooterCellphoneScreen() {
  function handleSocialMedia(link: string) {
    if (link === "linkedin") {
      window.open("https://www.linkedin.com/in/danikosttas", "_blank");
    }
    if (link === "facebook") {
      window.open("https://www.facebook.com/danikosttas/", "_blank");
    }
    if (link === "instagram") {
      window.open("https://www.instagram.com/danikosttas/", "_blank");
    }
    if (link === "twitter") {
      window.open(
        "https://twitter.com/danikosttas?t=DP5iBa9ZMZJp9ejmvLoJiA&s=08",
        "_blank"
      );
    }
    if (link === "tiktok") {
      window.open("https://www.tiktok.com/@danikosttas", "_blank");
    }
    if (link === "youtube") {
      window.open(
        "https://www.youtube.com/channel/UC9dTblefq7RtrsdzycHw-xQ",
        "_blank"
      );
    }
  }
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
      <Fade className="flex justify-center items-center my-10">
        <img
          src="./assets/logoPearl.png"
          alt="DK Logo Footer"
          className="w-2/5 absolute transition-all cursor-pointer"
          onClick={handleGoTop}
        />
      </Fade>
      <div className="flex justify-center items-start gap-6">
        <Fade>
          <FaLinkedinIn
            onClick={() => handleSocialMedia("linkedin")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
          <FaFacebookF
            onClick={() => handleSocialMedia("facebook")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
          <FaInstagram
            onClick={() => handleSocialMedia("instagram")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
          <FaTwitter
            onClick={() => handleSocialMedia("twitter")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
          <FaTiktok
            onClick={() => handleSocialMedia("tiktok")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
          <FaYoutube
            onClick={() => handleSocialMedia("youtube")}
            className="text-base text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
          />
        </Fade>
      </div>
      <div className="flex">
        <Fade direction="right">
          <div
            className={`flex flex-col items-start justify-center p-10 ml-5 gap-6 text-base text-white footerContent bg-blackOpacity-30`}
          >
            <p className="text-sm">
              We are committed to making the impossible, possible! We build
              strategies to achieve your goals and we will use the best tool to
              make it through.
            </p>
            <div
              className="flex gap-6 items-center cursor-pointer hover:text-red-600 hover:transition hover:transform hover:translate-x-2 hover:duration-300"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-3xl font-bold lowercase">Say Hello</p>
              <BsArrowRight className="text-3xl" />
            </div>
            <div className="relative flex flex-col text-base text-gray-400 w-full mt-4 -mb-4 justify-center text-center">
              <p className="w-full text-xxs">
                ©2022. Daniel Kosttás. All rights reserved.
              </p>
              <div className="flex w-full items-center justify-between gap-2">
                <Link to={"/cookie-policy"} className="w-full">
                  <p className="cursor-pointer hover:text-red-600 transition-all duration-200 w-full text-xxs text-right">
                    Cookie Policy
                  </p>
                </Link>
                <p className="text-xxs">|</p>
                <Link to={"/privacy-policy"} className="w-full">
                  <p className="cursor-pointer hover:text-red-600 transition-all duration-200  text-xxs text-left">
                    Privacy Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
