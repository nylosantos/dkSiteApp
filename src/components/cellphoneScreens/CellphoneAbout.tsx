import { Header } from "../header/Header";
import { Fade } from "react-awesome-reveal";
import cellphoneData from "../CellphoneScreenArray";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "/src/styles/global.css";

export function CellphoneAbout() {
  return (
    <div className="flex flex-col w-screen h-full bg-gradient-to-b from-yellowPage-up to-yellowPage-down">
      <Header bgColor="blackOpacity" shadow="" />
      <div className="flex flex-col">
        <Fade delay={10} direction="left" damping={0.1} cascade={true}>
          <div className="flex fixed top-10 left-0 w-12/12 z-0">
            <img src="./assets/leftWatermark.png" alt="DK Left Watermark" />
          </div>
          <div className="flex flex-col mt-[5rem] w-10/12 z-10">
            <img src="./assets/imageLeft.png" alt="God with Reality Glasses" />
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
            </Fade>
            <div className="flex flex-col mt-8 w-screen">

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
                        <p className="text-center mt-5 w-3/4">{slide.phrase}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
              <Fade delay={800}>
                <div className="flex fixed bottom-0 right-0 w-4/12 z-0 opacity-60">
                  <img
                    src="./assets/rightWatermark.png"
                    alt="DK Right Watermark"
                  />
                </div>
              </Fade>
            </div>
            <div className="w-screen flex justify-center pb-10">
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
        </div>
      </div>
    </div>
  );
}
