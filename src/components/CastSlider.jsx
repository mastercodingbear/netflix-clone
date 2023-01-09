import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieSerieView from "./MovieSerieView";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CastSlider({ cast, title }) {
  const renderList = () => {
    return cast?.map((person) => {
      return (
        <SwiperSlide className="mb-4" key={person.id}>
          <MovieSerieView work={person}></MovieSerieView>
        </SwiperSlide>
      );
    });
  };
  return (
    <>
      <h5 className="slider-title mb-4">Top billed cast</h5>
      {cast.length ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar]}
          className="hero-slider pb-4 mb-5"
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            520: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          {renderList()}
        </Swiper>
      ) : (
        <span className="d-block pb-4 mb-5">
          We don't have any information for {title} cast.
        </span>
      )}
    </>
  );
}
