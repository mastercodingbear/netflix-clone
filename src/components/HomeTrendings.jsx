import React, { useEffect } from "react";

import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieOnSliderView from "./MovieOnSliderView";
import getTmdbTrendings from "../redux/actions/getTmdbTrendings";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "../styles/home_trendings.sass";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { getTmdbTrendings })(
  function HomeTrendings({ getTmdbTrendings, trendings }) {
    useEffect(() => {
      getTmdbTrendings();
    }, []);
    const renderTrendingsList = () => {
      return trendings.map((trend) => {
        return (
          <SwiperSlide title={trend.title || trend.name} key={trend.id}>
            <MovieOnSliderView trend={trend} />
          </SwiperSlide>
        );
      });
    };

    return (
      <div className="home-trendings-slider-container">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-12 col-lg-10">
              <p className="slider-title">
                <i className="fal fa-poll-h me-2"></i>
                trending now
              </p>
              {trendings.length ? (
                <Swiper
                  className="home-trendings-slider"
                  modules={[Navigation, Autoplay, Scrollbar]}
                  spaceBetween={25}
                  slidesPerView={1}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                  scrollbar={{ draggable: true }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={500}
                >
                  {renderTrendingsList()}
                </Swiper>
              ) : (
                "LOADING ..."
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
