import { useEffect, useRef, useState } from "react";
import { Header } from "../header/Header";
import { Fade } from "react-awesome-reveal";
import carrouselImages from "../CellphoneArray";
import HorizontalScroll from "react-scroll-horizontal";
import { motion, useScroll } from "framer-motion";
import { IconButton } from "@chakra-ui/react";

export function FullTeam() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div
      ref={ref}
      className="flex w-screen h-screen bg-gradient-to-b from-yellowPage-up to-yellowPage-down"
    >
      <Header bgColor="" shadow="" />
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
      <HorizontalScroll>
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
          <div className="flex flex-col h-screen w-full justify-center items-center z-10">
            <Fade className="container">
              <img
                className=""
                src="./src/assets/team/teamFullMural.png"
                alt="DK Team"
              />
            </Fade>
          </div>
        </div>
        <div className="flex w-screen h-full flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-col h-3/4 w-4/5 justify-center">
            <Fade
              cascade
              damping={0.7}
              delay={300}
              className="text-right px-6 font-poppins font-bold text-5xl text-black"
            >
              <ul>
                <li>OUR TEAMYS</li>
              </ul>
            </Fade>
            <Fade
              cascade
              damping={0.7}
              delay={300}
              className="text-right px-6 mb-10 font-poppins text-2xl text-white"
            >
              <ul>
                <li>
                  The idea of uniting an international, eclectic and
                  multi-skilled team came from Daniel Kosttás, an enterprising
                  artist, who combines his triple experience as an orchestra
                  conductor, stage director, and marketing manager to serve the
                  entertainment and art sector. We feel motivated to produce
                  high-tech solutions and outstanding services capable to
                  improve the audience's experience with artistic products. Our
                  team is proud to create alive-feeling memories (OOH or digital
                  entertainment), promoting experiences to be felt anytime,
                  anywhere.
                </li>
              </ul>
            </Fade>
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
