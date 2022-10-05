import { Fade, Zoom } from "react-awesome-reveal";
import { FooterCellphoneScreen } from "../footer/FooterCellphoneScreen";
import { Header } from "../header/Header";
import data from "../CardsHome";
import { Button, IconButton } from "@chakra-ui/react";

export function CellphoneHome() {
  return (
    <div className="bg-pinkPage w-screen flex flex-col items-center">
      <Header bgColor="" shadow="" />
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
        <Fade className="flex justify-center">
          <img src="./assets/home.png" alt="DK Home" className="w-3/4" />
        </Fade>
        <Fade delay={200} cascade={true}>
          <p className="text-poppins text-xl font-normal text-white">
            #CreatingEmotions
          </p>
        </Fade>
      </div>
      <Fade className="flex w-screen justify-end">
        <img
          src="./assets/techHome.png"
          alt="Tech Solutions to Wonder"
          className="w-11/12 -mt-5"
        />
      </Fade>
      <div className="w-11/12 h-full flex flex-col justify-center items-center gap-4 pt-4 pb-12">
        <Fade
          damping={0.1}
          cascade={true}
          className="w-full text-center font-bold text-white"
        >
          TECH SOLUTIONS TO WONDER
        </Fade>
        <Zoom>
          {data.map((data, key) => {
            return (
              <div
                key={key}
                className="flex flex-col justify-center items-center h-[200px] p-4 bg-blackOpacity-30 shadow-lg rounded-xl gap-4"
              >
                <div className="w-[2.5rem] h-[2.5rem]">{data.icon}</div>
                <p className="text-white text-center w-[250px]">{data.text}</p>
              </div>
            );
          })}
        </Zoom>
      </div>
      <div className="flex flex-col gap-10">
        <Fade
          direction="left"
          className="flex justify-center w-screen h-full mt-4"
        >
          <img src="./assets/dkHome.png" alt="DK Home" className="w-full" />
        </Fade>
        <div className="flex">
          <Fade className="flex justify-end w-2/4">
            <img
              src="./assets/phoneHome.png"
              alt="DK Home"
              className="w-full -ml-10"
            />
          </Fade>
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="w-2/4 flex flex-col justify-center -mt-12 pl-10 font-poppins font-bold text-lg text-white"
          >
            <ul>
              <li>eyes to</li>
              <li>a wonderful</li>
              <li>future</li>
            </ul>
          </Fade>
        </div>
        <FooterCellphoneScreen />
      </div>
    </div>
  );
}
