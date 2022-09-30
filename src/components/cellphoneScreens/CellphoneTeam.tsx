import { useEffect, useRef, useState } from "react";
import { Header } from "../header/Header";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import dataTeam from "../TeamArray";
import { IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "/src/styles/global.css";
import { EffectCoverflow, Pagination } from "swiper";

export function CellphoneTeam() {
  // //set carousel width
  // const [carouselWidth, setCarouselWidth] = useState(0);
  // const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  // useEffect(() => {
  //   setCarouselWidth(
  //     carousel.current.scrollWidth - carousel.current.offsetWidth
  //   );
  // }, []);
  return (
    <div className="flex flex-col w-screen min-h-screen h-full bg-gradient-to-b from-yellowPage-up to-yellowPage-down">
      <Header bgColor="blackOpacity" shadow="" />
      <div className="flex flex-col">
        <Fade delay={10} direction="left" damping={0.1} cascade={true}>
          <div className="flex fixed top-10 left-0 w-12/12 z-0">
            <img src="./src/assets/leftWatermark.png" alt="DK Left Watermark" />
          </div>
        </Fade>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-col">
            <Fade
              cascade
              damping={0.7}
              delay={300}
              className="text-right px-6 mt-16 font-poppins font-bold text-xl text-black"
            >
              <ul>
                <li>OUR TEAMYS</li>
              </ul>
            </Fade>
            <div className="flex flex-col mb-30 w-screen">
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
                        <p className="uppercase text-white text-base">
                          {slide.job}
                        </p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
              <Fade
                cascade
                damping={0.7}
                delay={300}
                className="text-right px-6 mb-10 font-poppins text-base text-white"
              >
                <ul>
                  <li>
                    The idea of uniting an international, eclectic and
                    multi-skilled team came from Daniel Kosttás, an enterprising
                    artist, who combines his triple experience as an orchestra
                    conductor, stage director, and marketing manager to serve
                    the entertainment and art sector. We feel motivated to
                    produce high-tech solutions and outstanding services capable
                    to improve the audience's experience with artistic products.
                    Our team is proud to create alive-feeling memories (OOH or
                    digital entertainment), promoting experiences to be felt
                    anytime, anywhere.
                  </li>
                </ul>
              </Fade>
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
