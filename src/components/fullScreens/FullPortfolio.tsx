import { Header } from "../header/Header";
import { Fade, Zoom } from "react-awesome-reveal";
import HorizontalScroll from "react-scroll-horizontal";
import partners from "../PartnersArray";

export function FullPortfolio() {
  return (
    <div className="flex w-screen h-screen bg-gradient-to-b from-gray-100 to-gray-400">
      <Header bgColor="blackOpacity" shadow="shadow" colorScheme="blackAlpha" />
      <HorizontalScroll reverseScroll={true}>
        <div className="flex flex-col w-screen h-full justify-center items-center">
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="w-4/5 text-left px-6 mt-8 font-poppins font-bold text-3xl text-red-600"
          >
            <ul>
              <li>WHO WE ARE</li>
            </ul>
          </Fade>
          <Fade
            cascade
            damping={0.7}
            delay={300}
            className="w-4/5 text-left px-6 font-poppins text-lg mt-6 text-gray-800"
          >
            <ul>
              <li>
                From high-tech solutions to artistic innovative projects, we
                make way for unforgettable live emotions to enchant audiences
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
            className="w-4/5 text-left px-6 font-poppins font-bold text-3xl my-6 text-red-600"
          >
            <ul>
              <li>OUR TEAM HAS COLLABORATED WITH </li>
            </ul>
          </Fade>
          <div className="flex flex-wrap gap-4 w-4/5 p-6 justify-start z-20">
            <Zoom className="flex flex-col items-center">
              {partners.map((partner, key) => {
                return (
                  <div
                    key={key}
                    className="flex flex-col justify-center items-center p-1 w-[100px] h-[100px] bg-black rounded-xl"
                  >
                    {partner.image}
                  </div>
                );
              })}
            </Zoom>
          </div>
        </div>
        <div className="flex w-screen h-screen flex-col items-center justify-center z-10">
          <img
            className="flex absolute"
            src="./assets/portfolioJobs.png"
            alt="DK Team"
          />
        </div>
      </HorizontalScroll>
    </div>
  );
}
