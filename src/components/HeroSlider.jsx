/// MODULES
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

/// STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/hero-slider.sass";

/// IMAGES
import netflix_icon from "../assets/images/icon.png";
import la_casa_bg from "../assets/images/hero-slider/la-casa-bg.webp";
import la_casa_banner from "../assets/images/hero-banners/la-casa.webp";
import spider_man_bg from "../assets/images/hero-slider/spider-man.webp";
import squid_game_bg from "../assets/images/hero-slider/squid-game-bg.webp";
import spider_man_banner from "../assets/images/hero-banners/spider-man.webp";
import squid_game_banner from "../assets/images/hero-banners/squid-game-banner.webp";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      className="hero-slider"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      <SwiperSlide className="hero-slide">
        <div className="fluid-overlay"></div>
        <img src={la_casa_bg} alt="slider-bg" className="slide-bg-img" />
        <div className="slide-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="work-category">
                  <img
                    width={25}
                    height={20}
                    src={netflix_icon}
                    alt="netflix"
                  />
                  <span className="ms-2">SERIES</span>
                </div>
                <div className="work-banner">
                  <img
                    className="py-4 la-casa-banner"
                    width={400}
                    src={la_casa_banner}
                    alt="la_casa_banner"
                  />
                </div>
                <div className="work-info">
                  <span className="work-info-tag">2017</span>
                  <span className="work-info-tag age-class">16</span>
                  <span className="work-info-tag">3 seasons</span>
                  <span className="work-info-tag">Crime</span>
                  <span className="work-info-tag">Drama</span>
                  <span className="work-info-tag">1h 10m</span>
                </div>
                <p className="work-description py-2">
                  To carry out the biggest heist in history, a mysterious man
                  called The Professor recruits a band of eight robbers who have
                  a single characteristic: none of them has anything to lose.
                  Five months of seclusion - memorizing every step, every
                  detail, every probability - culminate in eleven days locked up
                  in the National Coinage and Stamp Factory of Spain, surrounded
                  by police forces and with dozens of hostages in their power,
                  to find out whether their suicide wager will lead to
                  everything or nothing.
                </p>
                <div className="work-actions-btns">
                  <Link
                    to="/watch/serie/71446/season/1/episode/1"
                    className="btn me-3"
                  >
                    <i className="fal fa-play me-3"></i>
                    play
                  </Link>
                  <Link to="/serie/71446" className="btn me-3 info-link-btn">
                    more information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="hero-slide">
        <div className="fluid-overlay"></div>
        <img src={squid_game_bg} alt="slider-bg" className="slide-bg-img" />
        <div className="slide-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="work-category">
                  <img
                    width={25}
                    height={20}
                    src={netflix_icon}
                    alt="netflix"
                  />
                  <span className="ms-2">SERIES</span>
                </div>
                <div className="work-banner ">
                  <img
                    className="squid_game_banner"
                    width={270}
                    src={squid_game_banner}
                    alt="squid_game_banner"
                  />
                </div>
                <div className="work-info">
                  <span className="work-info-tag">2021</span>
                  <span className="work-info-tag age-class">+18</span>
                  <span className="work-info-tag ">Action</span>
                  <span className="work-info-tag ">Adventure</span>
                  <span className="work-info-tag">1 season</span>
                  <span className="work-info-tag">54m</span>
                </div>
                <p className="work-description py-2">
                  Hundreds of cash-strapped players accept a strange invitation
                  to compete in children's games—with high stakes. But, a
                  tempting prize awaits the victor.
                </p>
                <div className="work-actions-btns">
                  <Link
                    to="/watch/serie/93405/season/1/episode/1"
                    className="btn me-3"
                  >
                    <i className="fal fa-play me-3"></i>
                    play
                  </Link>
                  <Link to="/serie/93405" className="btn me-3 info-link-btn">
                    more information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="hero-slide">
        <div className="fluid-overlay"></div>
        <img src={spider_man_bg} alt="slider-bg" className="slide-bg-img" />
        <div className="slide-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="work-category">
                  <img
                    width={25}
                    height={20}
                    src={netflix_icon}
                    alt="netflix"
                  />
                  <span className="ms-2">MOVIES</span>
                </div>
                <div className="work-banner">
                  <img
                    className="py-4"
                    width={270}
                    src={spider_man_banner}
                    alt="spider_man_banner"
                  />
                </div>
                <div className="work-info">
                  <span className="work-info-tag">2021</span>
                  <span className="work-info-tag age-class">PG-13</span>
                  <span className="work-info-tag">Action</span>
                  <span className="work-info-tag">Fiction</span>
                  <span className="work-info-tag">2h 28m</span>
                </div>
                <p className="work-description py-2">
                  Peter Parker is unmasked and no longer able to separate his
                  normal life from the high-stakes of being a super-hero. When
                  he asks for help from Doctor Strange the stakes become even
                  more dangerous, forcing him to discover what it truly means to
                  be Spider-Man.
                </p>
                <div className="work-actions-btns">
                  <Link to="/watch/movie/634649" className="btn me-3">
                    <i className="fal fa-play me-3"></i>
                    play
                  </Link>
                  <Link to="/movie/634649" className="btn me-3 info-link-btn">
                    more information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
