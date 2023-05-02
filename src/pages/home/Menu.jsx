import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import Spinner from "../spinner/Spinner";
const Menu = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://indian-chef-recipe-server.vercel.app/slider")
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
        setLoading(false);
      });
  }, []);
  //console.log(sliderData);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="w-full h-auto relative">
                  <img className="w-full h-96 lg:h-screen" src={slide.img} />
                  <div className="absolute top-10 lg:top-40 lg:w-3/5 bottom-0 px-4 lg:px-32">
                    <h5 className="text-yellow-50 text-xl lg:text-4xl font-sans font-bold">
                      {slide.title}
                    </h5>
                    <p className="text-yellow-50 font-sans font-medium mt-4">
                      {slide.description}
                    </p>
                    <button className="me-3 px-5 py-3 bg-orange-500 rounded text-white mt-8">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="mt-5"></div>
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Menu;
