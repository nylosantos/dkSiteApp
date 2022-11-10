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

export function FooterFullScreen() {
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
    <div className="flex h-96 py-5 bg-gray-900 footer justify-center w-screen">
      <ContactModal isOpen={isOpen} onClose={closeInstructionModal} />
      <div className="flex container">
        <div className="text-3xl text-white flex flex-col w-full gap-4">
          <div className="flex items-center h-[50%]">
            <Fade>
              <img
                src="./assets/logoPearl.png"
                alt="DK Logo Footer"
                className="w-2/6 cursor-pointer"
                onClick={handleGoTop}
              />
            </Fade>
          </div>
          <div className="text-lg flex items-start gap-6 h-[50%]">
            <Fade>
              <FaLinkedinIn
                onClick={() => handleSocialMedia("linkedin")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
              <FaFacebookF
                onClick={() => handleSocialMedia("facebook")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
              <FaInstagram
                onClick={() => handleSocialMedia("instagram")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
              <FaTwitter
                onClick={() => handleSocialMedia("twitter")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
              <FaTiktok
                onClick={() => handleSocialMedia("tiktok")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
              <FaYoutube
                onClick={() => handleSocialMedia("youtube")}
                className="text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
              />
            </Fade>
          </div>
        </div>
        <Fade direction="right">
          <div
            className={`flex flex-col items-start justify-center gap-6 py-10 -top-10 text-white text-3xl footerContent bg-blackOpacity-50`}
          >
            <p className="text-lg px-10 mt-10">
              We are committed to making the impossible, possible! We build
              strategies to achieve your goals and we will use the best tool to
              make it through.
            </p>
            <div
              className="flex gap-6 items-center px-10 cursor-pointer hover:text-red-600 hover:transition hover:transform hover:translate-x-2 hover:duration-300"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-5xl font-bold lowercase">Say Hello</p>
              <BsArrowRight className="text-5xl" />
            </div>
            <div className="relative flex top-28 text-base text-gray-400 w-full  justify-center text-center">
              <p className="w-6/12 text-sm">
                ©2022. Daniel Kosttás. All rights reserved.
              </p>
              <div className="flex w-6/12 items-center justify-between gap-2">
                <Link to={"/cookie-policy"} className="w-full">
                  <p className="cursor-pointer hover:text-red-600 transition-all duration-200 w-full text-sm text-right">
                    Cookie Policy
                  </p>
                </Link>
                <p className="text-sm">|</p>
                <Link to={"/privacy-policy"} className="w-full">
                  <p className="cursor-pointer hover:text-red-600 transition-all duration-200 text-sm text-left">
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
