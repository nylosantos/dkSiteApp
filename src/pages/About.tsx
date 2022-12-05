import { useState } from "react";

import { Header } from "../components/header/Header";
import { Fade } from "react-awesome-reveal";
import carrouselImages from "../components/CellphoneArray";
import { MenuModal } from "../components/menuModal/MenuModal";

import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";

//CELLPHONE SCREEN IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "/src/styles/global.css";

import cellphoneData from "../components/CellphoneScreenArray";
import { ScreenSizeRouterProps } from "../Router";

//CONTENT
function Content({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  return (
    <>
      <div className="flex flex-col tablet:flex-row tablet:w-screen tablet:h-full tablet:justify-between">
        <div className="flex absolute mt-16 tablet:mt-0 tablet:top-0 left-0 z-0">
          <Fade direction="left">
            <img
              className="tablet:h-screen desktop:h-screen opacity-30"
              src="./assets/leftWatermark.png"
              alt="DK Left Watermark"
            />
          </Fade>
        </div>
        <div className="flex mt-16 tablet:mt-0 desktop:h-screen tablet:h-screen w-full desktop:w-2/4 top-10 desktop:top-0 tablet:top-0 z-10">
          <Fade direction="left">
            <img
              src="./assets/imageLeft.png"
              alt="God with Reality Glasses"
              className="desktop:h-screen tablet:h-screen"
            />
          </Fade>
        </div>
        <div className="flex w-full desktop:w-2/4 items-center justify-center">
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="text-center tablet:text-left desktop:text-left font-poppins font-bold"
          >
            <ul className="flex flex-col text-2xl desktop:text-6xl gap-2">
              <li>entertainment,</li>
              <li>technology and art</li>
              <li className="text-red-600">to connect people</li>
            </ul>
          </Fade>
        </div>
      </div>
      <div className="flex w-screen h-full flex-col items-center justify-center gap-4 mt-4">
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
              {cellphoneData.map((slide, key) => {
                return (
                  <SwiperSlide
                    key={key}
                    className="mb-32 flex flex-col items-center"
                  >
                    {slide.image}
                    <p className="text-center mt-5 w-3/4 text-red-600">
                      {slide.phrase}
                    </p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        ) : (
          <div className="flex flex-col h-3/4 w-4/5 desktop:w-full z-50 ">
            <div className="flex justify-between h-full">
              {carrouselImages.map((image, key) => {
                return (
                  <Fade>
                    <div
                      key={key}
                      className="flex flex-col w-full h-full items-center"
                    >
                      <div className="flex w-full h-3/4 items-center justify-center">
                        <img
                          className="h-full pointer-events-none"
                          src={image.image}
                          key={image.image}
                        />
                      </div>
                      <div className="flex w-full desktop:w-2/4 h-1/4 items-center justify-center mt-2">
                        <p
                          key={image.phrase}
                          className="text-xs desktop:text-lg text-center font-poppins font-light text-red-600"
                        >
                          {image.phrase}
                        </p>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        )}
        <div className="w-screen flex justify-center pb-10 desktop:pb-0">
          <Link to={"/Team"}>
            <IconButton
              aria-label="Our Teamys"
              className="w-[300px] items-center shadow-md hover:shadow-lg border hover:border-red-600 hover:border-opacity-30 z-50"
              colorScheme="whiteAlpha"
            >
              <p className="text-center text-2xl tablet:text-lg desktop:text-2xl text-red-600">
                OUR TEAMYS
              </p>
            </IconButton>
          </Link>
        </div>
      </div>
      <Fade delay={800}>
        <div className="flex w-2/12 tablet:w-1/12 fixed bottom-0 right-0 z-0 opacity-40">
          <img src="./assets/leftWatermark.png" alt="DK Right Watermark" />
        </div>
      </Fade>
    </>
  );
}

export function About({
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
      {windowSize.innerWidth > desktopBreakpoint ? (
        <HorizontalScroll reverseScroll={true}>
          {Content({ windowSize, tabletBreakpoint, desktopBreakpoint })}
        </HorizontalScroll>
      ) : (
        Content({ windowSize, tabletBreakpoint, desktopBreakpoint })
      )}
    </div>
  );
}
