import { Zoom } from "react-awesome-reveal";
import partners from "../PartnersArray";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface ClientsProps {
  width: number;
  height: number;
  swiperHeight: string;
  swiperSlideMt: string;
  itemsScale: number;
}

export function Clients({
  width,
  height,
  swiperHeight,
  swiperSlideMt,
  itemsScale,
}: ClientsProps) {
  return (
    <div className="w-full flex justify-center bg-black gap-3 flex-wrap">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={false}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className={`mySwiper ${swiperHeight}`}
      >
        <Zoom className="flex flex-col items-center">
          {partners.map((partner, key) => {
            return (
              <SwiperSlide
                key={key}
                style={{ width: width, height: height }}
                className={`flex justify-center items-center ${swiperSlideMt} hover:scale-${itemsScale} transition-all`}
              >
                {partner.image}
              </SwiperSlide>
            );
          })}
        </Zoom>
      </Swiper>
    </div>
  );
}
