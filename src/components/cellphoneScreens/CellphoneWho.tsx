import { Header } from "../header/Header";
import { Fade, Zoom } from "react-awesome-reveal";
import partners from "../PartnersArray";

export function CellphoneWho() {
  // //set carousel width
  // const [carouselWidth, setCarouselWidth] = useState(0);
  // const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  // useEffect(() => {
  //   setCarouselWidth(
  //     carousel.current.scrollWidth - carousel.current.offsetWidth
  //   );
  // }, []);
  return (
    <div className="flex flex-col w-screen min-h-screen h-full bg-gradient-to-b from-bluePage-up to-bluePage-down">
      <Header bgColor="blackOpacity" shadow="" />
      <div className="flex flex-col">
        <Fade delay={10} direction="left" damping={0.1} cascade={true}>
          <div className="flex fixed top-10 left-0 w-12/12 z-0">
            <img src="./src/assets/leftWatermark.png" alt="DK Left Watermark" />
          </div>
        </Fade>
        <Fade className="flex justify-center w-screen h-full mt-28">
          <img src="./src/assets/logo.png" alt="DK Home" className="w-2/4" />
        </Fade>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex flex-col">
            <Fade
              cascade
              damping={0.7}
              delay={300}
              className="text-left px-6 mt-16 font-poppins font-bold text-xl text-white"
            >
              <ul>
                <li>WHO WE ARE</li>
              </ul>
            </Fade>
            <div className="flex flex-col mb-30 w-screen">
              <Fade
                cascade
                damping={0.7}
                delay={300}
                className="text-left px-6 mb-10 font-poppins text-base text-white"
              >
                <ul>
                  <li>
                    From high-tech solutions to artistic innovative projects, we
                    make way for unforgettable live emotions to enchant
                    audiences everywhere. With more than 25 years of experience
                    in different continents and fields of entertainment, our
                    team can create augmented reality projects, cinematography &
                    theatrical productions, and even great events in large
                    spaces. More than entertainment & innovation, we are a
                    revolutionary creative community, and we believe in the LIVE
                    style!
                  </li>
                </ul>
              </Fade>
              <Fade
                cascade
                damping={0.7}
                delay={300}
                className="text-left px-6 font-poppins font-bold text-xl text-white"
              >
                <ul>
                  <li>OUR TEAM HAS </li>
                  <li>COLLABORATED WITH </li>
                </ul>
              </Fade>
              <div className="flex flex-wrap justify-center gap-4 m-6">
                <Zoom className="flex flex-col items-center">
                  {partners.map((partner, key) => {
                    return (
                      <div
                        key={key}
                        className="flex flex-col justify-center items-center p-4 w-[150px] h-[150px] bg-black rounded-xl"
                      >
                        {partner.image}
                      </div>
                    );
                  })}
                </Zoom>
              </div>
              <Fade className="flex z-10">
                <img
                  src="./src/assets/portfolioJobs.png"
                  alt="DK portfolio"
                  className="w-full h-full flex object-cover"
                />
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
