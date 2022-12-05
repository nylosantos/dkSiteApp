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
import { ScreenSizeRouterProps } from "../../Router";

export interface FooterProps extends ScreenSizeRouterProps {
  isContact: boolean;
}

export function Footer({
  isContact,
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: FooterProps) {
  const [openContactModal, setOpenContactModal] = useState(false);
  const closeInstructionModal = () => setOpenContactModal(false);

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

  function handleLinkContactFooter() {
    if (isContact) {
      handleGoTop();
      return;
    } else {
      setOpenContactModal(true);
    }
  }
  return (
    <div className="flex flex-col desktop:flex-row desktop:w-screen h-full desktop:h-96 py-5 bg-black relative justify-center gap-6 desktop:gap-0">
      <ContactModal
        openContactModal={openContactModal}
        onClose={closeInstructionModal}
        windowSize={windowSize}
        tabletBreakpoint={tabletBreakpoint}
        desktopBreakpoint={desktopBreakpoint}
      />
      <div className="flex flex-col desktop:flex-row desktop:container">
        <div className="flex flex-col w-screen desktop:w-full mt-4 items-center desktop:items-start">
          <div className="flex flex-col items-center gap-4">
            <Fade>
              <img
                src="./assets/logoPearl.png"
                alt="DK Logo Footer"
                className="w-40 desktop:w-64 cursor-pointer"
                onClick={handleGoTop}
              />
            </Fade>

            <div className="flex items-start gap-6">
              <Fade>
                <FaLinkedinIn
                  onClick={() => handleSocialMedia("linkedin")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
                <FaFacebookF
                  onClick={() => handleSocialMedia("facebook")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
                <FaInstagram
                  onClick={() => handleSocialMedia("instagram")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
                <FaTwitter
                  onClick={() => handleSocialMedia("twitter")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
                <FaTiktok
                  onClick={() => handleSocialMedia("tiktok")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
                <FaYoutube
                  onClick={() => handleSocialMedia("youtube")}
                  className="text-base desktop:text-2xl text-white hover:text-red-600 transition-all duration-200 cursor-pointer"
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className="flex">
          <Fade direction="right">
            <div className="flex flex-col relative items-start justify-center p-10 desktop:p-0 desktop:py-10 ml-5 tablet:ml-6 desktop:ml-0 desktop:-top-10 gap-6 bg-blackOpacity-30 desktop:bg-blackOpacity-50 text-white">
              <p className="text-sm desktop:text-lg desktop:px-10 desktop:mt-10">
                We are committed to making the impossible, possible! We build
                strategies to achieve your goals and we will use the best tool
                to make it through.
              </p>
              <div
                className="flex gap-6 items-center desktop:px-10 cursor-pointer hover:text-red-600 hover:transition hover:transform hover:translate-x-2 hover:duration-300"
                onClick={handleLinkContactFooter}
              >
                <p className="text-3xl desktop:text-5xl font-bold lowercase">
                  Say Hello
                </p>
                <BsArrowRight className="text-3xl desktop:text-5xl" />
              </div>
              <div className="flex flex-col relative desktop:flex-row desktop:top-28 w-full mt-4 tablet:mt-5 desktop:mt-0 -mb-4 desktop:mb-0 justify-center text-base text-gray-400 text-center">
                <p className="w-full desktop:w-6/12 text-xxs tablet:text-xs desktop:text-sm">
                  ©{new Date().getFullYear()}. Daniel Kosttás. All rights
                  reserved.
                </p>
                <div className="flex w-full desktop:w-6/12 items-center justify-between gap-2">
                  <Link to={"/cookie-policy"} className="w-full">
                    <p className="w-full text-xxs tablet:text-xs desktop:text-sm text-right cursor-pointer hover:text-red-600 transition-all duration-200">
                      Cookie Policy
                    </p>
                  </Link>
                  <p className="text-xxs tablet:text-xs desktop:text-sm">|</p>
                  <Link to={"/privacy-policy"} className="w-full">
                    <p className="w-full text-xxs tablet:text-xs desktop:text-sm text-left cursor-pointer hover:text-red-600 transition-all duration-200">
                      Privacy Policy
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
