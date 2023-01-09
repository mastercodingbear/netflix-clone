import React, { useEffect } from "react";

import HomeTrendings from "./HomeTrendings";
import HeroSlider from "./HeroSlider";
import PopularSlider from "./PopularSlider";
import NowPlayingSlider from "./NowPlayingSlider";
import TopRatedSlider from "./TopRatedSlider";
import scrollToTop from "../helpers/scrollToTop";

export default function HomePage() {
  useEffect(() => {
    document.title = `NETFLIX | Watch Movies And TV Shows Online`;
    scrollToTop();
    return () => {
      scrollToTop();
    };
  }, []);

  return (
    <>
      <HeroSlider />
      <HomeTrendings />
      <PopularSlider />
      <NowPlayingSlider />
      <TopRatedSlider />
    </>
  );
}
