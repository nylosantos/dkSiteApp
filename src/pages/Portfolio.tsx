import { useState } from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import partners from "../components/PartnersArray";
import { MenuModal } from "../components/menuModal/MenuModal";
import { ScreenSizeRouterProps } from "../Router";

import { Fade, Zoom } from "react-awesome-reveal";
import HorizontalScroll from "react-scroll-horizontal";

function Content({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  return (
    <>
      <div className="flex flex-col w-screen tablet:h-full desktop:justify-center desktop:items-center gap-4 tablet:gap-0 tablet:mt-10 desktop:mt-0">
        {windowSize.innerWidth < desktopBreakpoint ? (
          <>
            <Fade className="flex w-screen h-full justify-center mt-24 tablet:mt-12">
              <img
                src="./assets/logoBlack.png"
                alt="DK Home"
                className="w-48"
              />
            </Fade>
          </>
        ) : null}
        <Fade
          cascade
          damping={0.7}
          delay={300}
          className="tablet:w-4/5 px-6 mt-16 tablet:mt-8 font-poppins font-bold text-left text-xl desktop:text-3xl text-red-600"
        >
          <ul>
            <li>WHO WE ARE</li>
          </ul>
        </Fade>
        <Fade
          cascade
          damping={0.7}
          delay={300}
          className="desktop:w-4/5 px-6 tablet:mt-4 desktop:mt-6 mb-10 tablet:mb-0 font-poppins text-badse desktop:text-lg text-left text-gray-800"
        >
          <ul>
            <li>
              From high-tech solutions to artistic innovative projects, we make
              way for unforgettable live emotions to enchant audiences
              everywhere. With more than 25 years of experience in different
              continents and fields of entertainment, our team can create
              augmented reality projects, cinematography & theatrical
              productions, and even great events in large spaces. More than
              entertainment & innovation, we are a revolutionary creative
              community, and we believe in the LIVE style!
            </li>
          </ul>
        </Fade>
        <Fade
          cascade
          damping={0.7}
          delay={300}
          className="w-4/5 px-6 tablet:my-6 font-poppins font-bold text-left text-xl desktop:text-3xl text-red-600"
        >
          <ul>
            <li>OUR TEAM HAS COLLABORATED WITH </li>
          </ul>
        </Fade>
        <div className="flex flex-wrap w-full desktop:w-4/5 gap-4 tablet:px-32 desktop:px-0 desktop:p-6 m-6 tablet:mb-6 desktop:m-0 justfy-center desktop:justify-start z-20">
          <Zoom className="flex flex-col items-center">
            {partners.map((partner, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col w-[100px] h-[100px] justify-center items-center p-4 tablet:p-1 bg-black rounded-xl"
                >
                  {partner.image}
                </div>
              );
            })}
          </Zoom>
        </div>
      </div>
      {windowSize.innerWidth < desktopBreakpoint ? (
        <Footer
          isContact={false}
          windowSize={windowSize}
          tabletBreakpoint={tabletBreakpoint}
          desktopBreakpoint={desktopBreakpoint}
        />
      ) : (
        <div className="flex w-screen h-screen items-center justify-center z-10">
          <img
            className="flex absolute h-screen"
            src="./assets/portfolioJobs.png"
            alt="DK Team"
          />
        </div>
      )}
    </>
  );
}

export function Portfolio({
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ScreenSizeRouterProps) {
  // OPEN MENU MODAL STATE
  const [openMenu, setOpenMenu] = useState(false);

  // FUNCTION TO CLOSE MENU MODAL
  const handleToggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="flex flex-col desktop:flex-row desktop:w-screen h-full desktop:h-screen tablet:justify-center tablet:items-center bg-gradient-to-b from-white to-gray-200">
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
