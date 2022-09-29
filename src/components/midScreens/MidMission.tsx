import { useEffect, useRef, useState } from "react";
import { Header } from "../header/Header";
import { Fade } from "react-awesome-reveal";
import carrouselImages from "../CellphoneArray";
import HorizontalScroll from "react-scroll-horizontal";
import { motion, useScroll } from "framer-motion";
import { IconButton } from "@chakra-ui/react";

export function MidMission() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div
      ref={ref}
      className="flex w-screen h-screen bg-gradient-to-b from-yellowPage-up to-yellowPage-down"
    >
      <Header bgColor="blackOpacity" shadow="shadow" />
      {/* <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="fixed z-50 bottom-0 right-0"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}
      <HorizontalScroll >
      <div className="flex w-screen h-full justify-between">
        <div className="flex absolute top-0 left-0 z-0">
          <Fade direction="left">
            <img
              className="h-screen"
              src="./src/assets/leftWatermark.png"
              alt="DK Left Watermark"
            />
          </Fade>
        </div>
        <div className="flex h-screen w-full z-10">
          <Fade direction="left">
            <img
              src="./src/assets/imageLeft.png"
              alt="God with Reality Glasses"
              className="h-screen"
            />
          </Fade>
        </div>
        <div className="flex w-full items-center justify-center">
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="text-center font-poppins font-bold text-base text-white"
          >
            <ul>
              <li>entertainment, technology</li>
              <li>and art to connect people</li>
            </ul>
          </Fade>
        </div>
      </div>
      <div className="flex w-screen h-full flex-col items-center justify-center gap-4 mt-4">
        <div className="flex flex-col h-3/4 w-4/5">
          <div className="flex justify-between h-full">
            {carrouselImages.map((image) => {
              return (
                <div className="flex flex-col w-full h-full items-center">
                  <div className="flex w-full h-3/4 items-center justify-center">
                    <img
                      className="h-full pointer-events-none"
                      src={image.image}
                      alt=""
                    />
                  </div>
                  <div className="flex w-full h-1/4 items-center justify-center">
                    <p className="text-xs text-center font-poppins font-light ">
                      {image.phrase}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="flex">
            {carrouselImages.map((image) => {
              return (
                <Fade
                  delay={100}
                  //className="flex flex-col items-center gap-3 mb-10"
                  key={image.image}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex h-full">
                      <img
                        className="bg-red-500 pointer-events-none"
                        src={image.image}
                        alt=""
                      />
                    </div>
                    <p className="text-xs text-center font-poppins font-light bg-slate-500">
                      {image.phrase}
                    </p>
                  </div>
                </Fade>
              );
            })}
          </div> */}
        <div className="w-screen flex justify-center">
              <IconButton aria-label="Our Teamys" className="w-[200px] items-center" colorScheme='whiteAlpha'>
                <p className="text-center text-lg text-black">OUR TEAMYS</p>
              </IconButton>
            </div>

        <Fade delay={800}>
          <div className="flex w-1/12 fixed bottom-0 right-0 z-0 opacity-60">
            <img
              src="./src/assets/rightWatermark.png"
              alt="DK Right Watermark"
            />
          </div>
        </Fade>
      </div>
      </HorizontalScroll>
    </div>
  );
}
