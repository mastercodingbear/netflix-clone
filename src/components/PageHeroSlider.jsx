// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/hero-slider.sass";
import PageHeroSlide from "./PageHeroSlide";

export default function PageHeroSlider(props) {
  const renderList = () => {
    return props.results.map((el) => {
      return (
        <SwiperSlide key={el.id} className="hero-slide">
          <PageHeroSlide data={el} />
        </SwiperSlide>
      );
    });
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      className="hero-slider"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      // pagination
      autoplay={{
        delay: 50000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {renderList()}
    </Swiper>
  );
}
