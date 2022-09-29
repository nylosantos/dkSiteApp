import { Fade, Zoom } from "react-awesome-reveal";
import { FooterFullScreen } from "../footer/FooterFullScreen";
import { Header } from "../header/Header";
import data from "../CardsHome";
import { Button, IconButton } from "@chakra-ui/react";

export function FullHome() {
  return (
    <div className="bg-pinkPage w-screen flex flex-col">
      <Header bgColor="" shadow="" />
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
        <Fade className="flex justify-center">
          <img src="./src/assets/home.png" alt="DK Home" className="w-1/4" />
        </Fade>
        <Fade delay={200} cascade={true}>
          <p className="text-2xl text-poppins font-normal text-white">
            #CreatingEmotions
          </p>
        </Fade>
      </div>
      <Fade className="flex w-screen justify-end">
        <img
          src="./src/assets/techHome.png"
          alt="Tech Solutions to Wonder"
          className="w-7/12 -mt-5"
        />
      </Fade>
      <Fade
        damping={0.1}
        cascade={true}
        className="w-full px-32 -mt-20 mb-20 font-bold text-white text-3xl"
      >
        TECH SOLUTIONS TO WONDER
      </Fade>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 pt-4 pb-12">
        <div className="flex flex-wrap w-9/12 justify-center gap-32">
          <Zoom>
            {data.map((data, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col justify-center h-[200px] p-4 bg-blackOpacity-30 shadow-lg rounded-xl gap-4"
                >
                  <Button
                    as={IconButton}
                    aria-label="Services"
                    icon={data.icon}
                    variant="unstyled"
                    className="text-red-500"
                  />

                  <p className="text-white text-center w-[250px]">
                    {data.text}
                  </p>
                </div>
              );
            })}
          </Zoom>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center">
          <Fade
            direction="left"
            className="flex justify-center w-screen h-full mt-4"
          >
            <img
              src="./src/assets/dkHome.png"
              alt="DK Home"
              className="w-3/4"
            />
          </Fade>
          <Fade className="flex justify-end w-2/4">
            <img
              src="./src/assets/phoneHome.png"
              alt="DK Home"
              className="w-full -ml-10"
            />
          </Fade>
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="w-2/4 flex flex-col justify-center -mt-12 pl-10 font-poppins font-bold text-2xl text-white"
          >
            <ul>
              <li>eyes to</li>
              <li>a wonderful</li>
              <li>future</li>
            </ul>
          </Fade>
        </div>
        <FooterFullScreen />
      </div>
    </div>
  );
}
