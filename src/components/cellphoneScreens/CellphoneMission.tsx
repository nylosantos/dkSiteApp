import { useEffect, useRef, useState } from "react";
import { Header } from "../header/Header";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import carrouselImages from "../CellphoneArray";

export function CellphoneMission() {
  //set carousel width
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);
  return (
    <div className="flex flex-col w-screen h-full bg-gradient-to-b from-yellowPage-up to-yellowPage-down">
      <Header />
      <div className="flex flex-col">
        <Fade delay={10} direction="left" damping={0.1} cascade={true}>
          <div className="flex fixed top-10 left-0 w-12/12 z-0">
            <img src="./src/assets/leftWatermark.png" alt="DK Left Watermark" />
          </div>

          <div className="flex flex-col mt-8 w-10/12 z-10">
            <img
              src="./src/assets/imageLeft.png"
              alt="God with Reality Glasses"
            />
          </div>
        </Fade>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-col">
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
              {/* <br /> */}
            </Fade>
            <div className="flex mt-8 w-screen">
              <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden z-10"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 50, left: -carouselWidth - 50 }}
                  className="flex gap-8"
                >
                  {carrouselImages.map((image) => {
                    return (
                      <Fade
                        delay={100}
                        className="min-h-[10rem] min-w-[60%] flex flex-col items-center gap-3 mb-10"
                        key={image.image}
                      >
                        <motion.div className="min-h-[10rem] min-w-[100%] flex flex-col items-center gap-3 mb-10">
                          <img
                            className="w-full pointer-events-none max-w-[50%]"
                            src={image.image}
                            alt=""
                          />
                          <p className="text-xs text-center font-poppins font-light">
                            {image.phrase}
                          </p>
                        </motion.div>
                      </Fade>
                    );
                  })}
                </motion.div>
              </motion.div>
              <Fade delay={800}>
                <div className="flex fixed bottom-0 right-0 w-4/12 z-0 opacity-60">
                  <img
                    src="./src/assets/rightWatermark.png"
                    alt="DK Right Watermark"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
