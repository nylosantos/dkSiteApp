import { Header } from "../header/Header";
import { Fade } from "react-awesome-reveal";
import carrouselImages from "../CellphoneArray";
import HorizontalScroll from "react-scroll-horizontal";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function FullAbout() {
  return (
    <div className="flex w-screen h-screen bg-gradient-to-b from-yellowPage-up to-yellowPage-down">
      <Header bgColor="" shadow="" />
      <HorizontalScroll reverseScroll={true}>
        <div className="flex w-screen h-full justify-between">
          <div className="flex absolute top-0 left-0 z-0">
            <Fade direction="left">
              <img
                className="h-screen"
                src="./assets/leftWatermark.png"
                alt="DK Left Watermark"
              />
            </Fade>
          </div>
          <div className="flex h-screen w-2/4 z-10">
            <Fade direction="left">
              <img
                src="./assets/imageLeft.png"
                alt="God with Reality Glasses"
                className="h-screen"
              />
            </Fade>
          </div>
          <div className="flex w-2/4 items-center justify-center">
            <Fade
              cascade
              damping={0.7}
              delay={300}
              className="text-center font-poppins font-bold text-2xl text-white"
            >
              <ul>
                <li>entertainment, technology</li>
                <li>and art to connect people</li>
              </ul>
            </Fade>
          </div>
        </div>
        <div className="flex w-screen h-full flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-col h-3/4 w-full z-50 ">
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
                      <div className="flex w-2/4 h-1/4 items-center justify-center">
                        <p
                          key={image.phrase}
                          className="text-lg text-center font-poppins font-light"
                        >
                          {image.phrase}
                        </p>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
            <div className="w-screen flex justify-center">
              <Link to={"/Team"}>
                <IconButton
                  aria-label="Our Teamys"
                  className="w-[300px] items-center"
                  colorScheme="whiteAlpha"
                >
                  <p className="text-center text-2xl text-black">OUR TEAMYS</p>
                </IconButton>
              </Link>
            </div>
          </div>
          <Fade delay={800}>
            <div className="flex w-1/12 fixed bottom-0 right-0 z-0 opacity-60">
              <img src="./assets/rightWatermark.png" alt="DK Right Watermark" />
            </div>
          </Fade>
        </div>
      </HorizontalScroll>
    </div>
  );
}
