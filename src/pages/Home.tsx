import { useEffect, useState } from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import data from "../components/CardsHome";
import { Clients } from "../components/clients";
import { ContactModal } from "../components/contactModal/ContactModal";
import { MenuModal } from "../components/menuModal/MenuModal";
import { CardModal } from "../components/CardModal/index";
import { ScreenSizeRouterProps } from "../Router";

import { Fade, Zoom } from "react-awesome-reveal";
import TextTransition, { presets } from "react-text-transition";
import { Parallax } from "react-parallax";

const paralaxImage = "../../assets/homeBg.jpg";
const paralaxCellphoneImage = "./assets/homeCellphoneBg.jpg";

//TEXTS TO SLIDE HOME
const TEXTS = [
  "Stories",
  "Web & Mobile Apps",
  "User Experience & Interface",
  "Virtual Reality",
  "Artificial Intelligence",
  "Art Technology",
  "Games",
  "Immersive Shows",
  "Brand Experiences",
];

interface ButtonComeWithUsProps {
  openInstructionModal: () => void;
}

// BUTTON CALL TO ACTION "COME WITH US"
function ButtonComeWithUs({ openInstructionModal }: ButtonComeWithUsProps) {
  return (
    <button
      className="flex w-full justify-end tablet:justify-start items-center rounded-full transition-all duration-500"
      onClick={openInstructionModal}
    >
      <p className="tablet:text-xl desktop:text-4xl hover:text-red-600 font-bold z-50 hover:scale-150 transition-all duration-500">
        Come with us
      </p>
    </button>
  );
}

export function Home({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  //SLIDE HOME HOOKS
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // MENU MODAL HOOKS AND FUNCTIONS
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => setOpenMenu(!openMenu);

  // CONTACT MODAL HOOKS AND FUNCTIONS
  const [openContactModal, setOpenContactModal] = useState(false);
  const openInstructionModal = () => setOpenContactModal(true);
  const closeInstructionModal = () => setOpenContactModal(false);

  // CARD MODAL HOOKS AND FUNCTIONS
  const [cardName, setCardName] = useState("");
  const [openCard, setOpenCard] = useState(false);
  const handleToggleCard = () => setOpenCard(!openCard);

  return (
    <div className="flex flex-col w-screen items-center">
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
      <ContactModal
        openContactModal={openContactModal}
        onClose={closeInstructionModal}
        windowSize={windowSize}
        tabletBreakpoint={tabletBreakpoint}
        desktopBreakpoint={desktopBreakpoint}
      />
      <CardModal
        isOpen={openCard}
        handleToggleCard={handleToggleCard}
        cardName={cardName}
      />
      <Parallax
        bgImage={
          windowSize.innerWidth < tabletBreakpoint
            ? paralaxCellphoneImage
            : paralaxImage
        }
        bgImageStyle={
          windowSize.innerWidth < tabletBreakpoint
            ? // ? { maxHeight: "915px", maxWidth: "652px" } // STYLE TO CELLPHONE IMAGE
              { maxHeight: "100%", maxWidth: "100%" } // STYLE TO CELLPHONE IMAGE
            : windowSize.innerWidth < desktopBreakpoint
            ? { maxHeight: "100%", maxWidth: "100%" } // STYLE TO TABLET IMAGE
            : { maxHeight: "1080px", maxWidth: "1920px" } // STYLE TO DESKTOP IMAGE
        }
        strength={500}
      >
        <div className="flex w-screen justify-center">
          <div className="flex w-10/12 tablet:container h-screen mt-28 tablet:mt-0">
            {windowSize.innerWidth < tabletBreakpoint ? null : (
              <div className="w-2/4"></div>
            )}
            <div className="flex flex-col w-2/4 tablet:h-screen tablet:justify-center tablet:align-top tablet:pl-36">
              <p className="text-2xl tablet:text-3xl desktop:text-6xl text-poppins font-bold text-gray-900">
                #Creating
              </p>
              <span className="text-2xl tablet:text-3xl desktop:text-6xl text-poppins font-bold text-red-600 mb-24">
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </span>
              {windowSize.innerWidth < tabletBreakpoint ? null : (
                <ButtonComeWithUs openInstructionModal={openInstructionModal} />
              )}
            </div>
            {windowSize.innerWidth < tabletBreakpoint ? (
              <div className="flex flex-col w-[50%] mt-5">
                <ButtonComeWithUs openInstructionModal={openInstructionModal} />
              </div>
            ) : null}
          </div>
        </div>
      </Parallax>
      <Clients
        width={
          windowSize.innerWidth < tabletBreakpoint
            ? 50 // STYLE TO CELLPHONE
            : windowSize.innerWidth < desktopBreakpoint
            ? 60 // STYLE TO TABLET
            : 100 // STYLE TO DESKTOP
        }
        height={
          windowSize.innerWidth < tabletBreakpoint
            ? 50 // STYLE TO CELLPHONE
            : windowSize.innerWidth < desktopBreakpoint
            ? 60 // STYLE TO TABLET
            : 100 // STYLE TO DESKTOP
        }
        itemsScale={
          windowSize.innerWidth < tabletBreakpoint
            ? 110 // STYLE TO CELLPHONE
            : 125 // STYLE TO TABLET AND DESKTOP
        }
        swiperHeight="h-16 tablet:h-20 desktop:h-28"
        swiperSlideMt="mt-2"
      />
      <div className="flex flex-col items-center bg-slate-100 z-40">
        <div className="flex flex-col tablet:flex-row container tablet:justify-evenly items-center mb-10">
          <div className="mt-5 tablet:mt-2">
            <Fade
              damping={0.1}
              cascade={true}
              className="font-bold text-red-600 text-xl desktop:text-3xl"
            >
              TECH SOLUTIONS TO WONDER
            </Fade>
          </div>
          <div className="mt-5 tablet:mt-2">
            <Fade>
              <img
                src="./assets/techHome.png"
                alt="Tech Solutions to Wonder"
                style={
                  windowSize.innerWidth < desktopBreakpoint
                    ? { width: 186, height: 131 } // STYLE TO CELLPHONE AND TABLET
                    : { width: 371.75, height: 262 } // STYLE TO DESKTOP
                }
              />
            </Fade>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center gap-4 pt-4 pb-12">
          <div className="flex flex-wrap w-9/12 justify-center gap-32">
            <Zoom>
              {data.map((data, key) => {
                return (
                  <div
                    key={key}
                    onPointerEnter={() => setCardName(data.cardName)}
                    onClick={() => setOpenCard(true)}
                    className="flex flex-col justify-center items-center h-[200px] cursor-pointer hover:bg-red-800 hover:scale-125 transition-all duration-300 p-4 bg-black shadow-lg rounded-xl gap-4"
                  >
                    <div className="w-[2.5rem] h-[2.5rem]">{data.icon}</div>
                    <p className="text-white text-center w-[250px]">
                      {data.text}
                    </p>
                  </div>
                );
              })}
            </Zoom>
          </div>
        </div>
      </div>
      <div className="flex flex-col tablet:container tablet:flex-row w-full gap-10 justify-center items-center mt-3 mb-8">
        <Fade direction="left" className="flex justify-center mt-4">
          <img
            src="./assets/dkHome.png"
            alt="DK Home"
            className="w-40 tablet:w-72 desktop:w-full hover:scale-105 transition-all duration-300"
          />
        </Fade>
        <div className="flex">
          <Fade className="flex tablet:w-2/4 tablet:justify-end">
            <img
              src="./assets/phoneHome.png"
              alt="DK Home"
              className="w-40 tablet:w-72 desktop:w-full tablet:-ml-10 hover:scale-105 transition-all duration-300"
            />
          </Fade>
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="flex flex-col justify-center desktop:-mt-12 desktop:pl-10 font-poppins font-bold text-xl desktop:text-3xl text-red-600"
          >
            <ul>
              <li>eyes to</li>
              <li>a wonderful</li>
              <li>future</li>
            </ul>
          </Fade>
        </div>
      </div>
      <Footer
        isContact={false}
        windowSize={windowSize}
        tabletBreakpoint={tabletBreakpoint}
        desktopBreakpoint={desktopBreakpoint}
      />
    </div>
  );
}
