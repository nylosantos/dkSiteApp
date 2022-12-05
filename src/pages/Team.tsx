import { useState } from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { MenuModal } from "../components/menuModal/MenuModal";

import { Fade } from "react-awesome-reveal";
import HorizontalScroll from "react-scroll-horizontal";

//CELLPHONE SCREEN IMPORTS
import dataTeam from "../components/TeamArray";
import { ScreenSizeRouterProps } from "../Router";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "/src/styles/global.css";

// SECOND SCREEN TO RENDER OR HORIZONTAL SCROOL OR NORMAL SCREEN
function SecondScreen({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  return (
    <div className="flex flex-col tablet:w-screen tablet:h-full items-center justify-center gap-4 mt-4">
      <div className="flex flex-col tablet:w-4/5 tablet:h-3/4 tablet:justify-center">
        <Fade
          cascade
          damping={0.7}
          delay={300}
          className="text-right px-6 mt-16 tablet:mt-0 font-poppins font-bold text-xl desktop:text-5xl text-red-600"
        >
          <ul>
            <li>OUR TEAMYS</li>
          </ul>
        </Fade>
        <div className="flex flex-col w-screen tablet:w-full mb-30 tablet:mb-0">
          {windowSize.innerWidth < tabletBreakpoint ? (
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper mb-10"
              >
                {dataTeam.map((slide, key) => {
                  return (
                    <SwiperSlide
                      key={key}
                      className="mb-32 flex flex-col items-center"
                    >
                      {slide.img}
                      <p className="font-bold">{slide.name}</p>
                      <p className="font-bold">{slide.country}</p>
                      <p className="uppercase text-red-600 text-base">
                        {slide.job}
                      </p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          ) : null}
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="text-right px-6 mb-10 tablet:mt-4 desktop:mt-0 font-poppins text-base desktop:text-2xl text-gray-800 z-10"
          >
            <ul>
              <li>
                The idea of uniting an international, eclectic and multi-skilled
                team came from Daniel Kosttás, an enterprising artist, who
                combines his triple experience as an orchestra conductor, stage
                director, and marketing manager to serve the entertainment and
                art sector. We feel motivated to produce high-tech solutions and
                outstanding services capable to improve the audience's
                experience with artistic products. Our team is proud to create
                alive-feeling memories (OOH or digital entertainment), promoting
                experiences to be felt anytime, anywhere.
              </li>
            </ul>
          </Fade>
        </div>
        {windowSize.innerWidth < tabletBreakpoint ? (
          <Footer
            isContact={false}
            windowSize={windowSize}
            tabletBreakpoint={tabletBreakpoint}
            desktopBreakpoint={desktopBreakpoint}
          />
        ) : (
          <Fade delay={800}>
            <div className="flex fixed w-4/12 tablet:w-1/12 bottom-0 right-0 z-0 opacity-40">
              <img src="./assets/leftWatermark.png" alt="DK Right Watermark" />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

function Content({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex fixed tablet:absolute top-10 tablet:top-0 left-0 z-0">
          <Fade direction="left">
            <img
              className="tablet:h-screen opacity-30"
              src="./assets/leftWatermark.png"
              alt="DK Left Watermark"
            />
          </Fade>
        </div>
        {windowSize.innerWidth < tabletBreakpoint ? null : (
          <div className="flex w-screen h-full justify-between">
            <div className="flex flex-col w-screen h-screen justify-center items-center z-10">
              <Fade className="container">
                <img
                  className=""
                  src="./assets/team/teamFullMural.png"
                  alt="DK Team"
                />
              </Fade>
            </div>
          </div>
        )}
        {windowSize.innerWidth < desktopBreakpoint
          ? SecondScreen({ windowSize, tabletBreakpoint, desktopBreakpoint })
          : null}
      </div>
      {windowSize.innerWidth < desktopBreakpoint
        ? null
        : SecondScreen({ windowSize, tabletBreakpoint, desktopBreakpoint })}
    </>
  );
}

export function Team({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  // OPEN MENU MODAL STATE
  const [openMenu, setOpenMenu] = useState(false);

  // FUNCTION TO CLOSE MENU MODAL
  const handleToggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="flex flex-col desktop:flex-row w-screen h-full desktop:h-screen bg-gradient-to-b from-white to-gray-200">
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
      {windowSize.innerWidth < desktopBreakpoint ? (
        Content({ windowSize, tabletBreakpoint, desktopBreakpoint })
      ) : (
        <HorizontalScroll reverseScroll={true}>
          {Content({ windowSize, tabletBreakpoint, desktopBreakpoint })}
        </HorizontalScroll>
      )}
    </div>
  );
}
