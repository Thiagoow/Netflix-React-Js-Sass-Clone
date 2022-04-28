import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

export default function SectionRow({ title, items }) {
  //
  const slides = [];

  slides.push(
    items.results.map((item, key) => (
      <SwiperSlide key={key} className="item">
        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
      </SwiperSlide>
    ))
  );

  //To make custom navigationBtns:
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="sectionRow container">
      <h2 className="sectionTitle">{title}</h2>

      <button className="handle" id="leftBtn" onClick={handlePrev}>
        <p>‹</p>
      </button>

      <button className="handle" id="rightBtn" onClick={handleNext}>
        <p>›</p>
      </button>

      <div className="content notContainer">
        {/*👇🏽 To active loop, define slidesPerGroup as 1 */}
        <Swiper
          className="media"
          ref={sliderRef}
          slidesPerView={"auto"}
          spaceBetween={0}
          slidesPerGroup={2}
          loop={false}
          loopFillGroupWithBlank={false}
          navigation={true}
          modules={[Navigation]}
        >
          {items.results.length > 0 && slides}
          {/* ☝🏽 If there are results (> 0), render: */}
        </Swiper>
      </div>
    </div>
  );
}
