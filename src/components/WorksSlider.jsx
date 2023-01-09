import React, { useRef } from "react";
import { connect } from "react-redux";
import MovieSerieView from "./MovieSerieView";
// import Swiper core and required modules
import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  getPopularMovies,
  getPopularTv,
  getPopularPeople,
} from "../redux/actions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "../styles/works_slider.sass";

export default connect(null, {
  getPopularTv,
  getPopularMovies,
  getPopularPeople,
})(function WorksSlider(props) {
  const ref = useRef("");
  const off = useRef("");

  const moveBtnBackground = (e) => {
    const offset = off.current.getBoundingClientRect().left;
    const width = e.target.getBoundingClientRect().width;
    const left = e.target.getBoundingClientRect().left - offset;
    ref.current.style.width = `${width - 1}px`;
    ref.current.style.left = `${left - 1}px`;
    setTimeout(() => {
      ref.current.innerHTML = e.target.innerHTML;
    }, 250);
  };

  const renderResults = () => {
    return props.works.map((el) => {
      return (
        <SwiperSlide key={el.id || el.title}>
          <MovieSerieView work={el} />
        </SwiperSlide>
      );
    });
  };

  const renderBtns = () => {
    return props.btnsGroup.map((el, index) => {
      return (
        <button
          key={index}
          onClick={(e) => {
            props.btnsFunctions[index]();
            moveBtnBackground(e);
          }}
        >
          {el}
        </button>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="slider-actions pt-5">
            <div className="d-flex justify-content-between w-100">
              <span className="slider-title">
                <i className={`fal fa-${props.icon} me-2`}></i>
                {props.title}
              </span>

              <div className={`slider-navigation`}>
                <div
                  className={`${props.navEl} swiper-button-prev-unique me-3`}
                ></div>
                <div
                  className={`${props.navEl} swiper-button-next-unique`}
                ></div>
              </div>
            </div>
            <span ref={off} className="actions-btns-group">
              <span ref={ref} className="background">
                {props.btnsGroup[0]}
              </span>
              <div>{renderBtns()}</div>
            </span>
          </div>
          <div className="works-slider-container">
            <Swiper
              className="works-slider px-1"
              modules={[Navigation, Autoplay, Scrollbar]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                520: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 7,
                },
              }}
              loop={true}
              navigation={{
                nextEl: `.${props.navEl}.swiper-button-next-unique`,
                prevEl: `.${props.navEl}.swiper-button-prev-unique`,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={600}
            >
              {renderResults()}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
});
