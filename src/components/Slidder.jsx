import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import Background from "../assets/images/Background.png";
import "../assets/css/slidder.css";

import "swiper/swiper-bundle.min.css";

const Slidder = () => {
  return (
    <div className="swiper-main">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="single-slide-main">
            <img src={Background} className="slide-image" alt="" />
            <div className="inner-content-main">
              <div className="client-heading">
                Our Clients Are Our First Priority
              </div>
              <div className="welcome">WELCOME TO BINO</div>
              <div className="lorem-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus nulla voluptatibus nisi cupiditate ab consectetur
                exercitationem quia reprehenderit atque ipsam eaque, recusandae
                est nihil, suscipit accusantium velit fugiat quae magni maxime
                aliquid repudiandae ipsa voluptates amet. Optio sed provident
                deleniti.
              </div>
              <div className="btns-main">
                <button className="get-started-btn m-2">GET STARTED NOW</button>
                <button className="learn-more-btn m-2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-slide-main">
            <img src={Background} className="slide-image" alt="" />
            <div className="inner-content-main">
              <div className="client-heading">
                Our Clients Are Our First Priority
              </div>
              <div className="welcome">WELCOME TO BINO</div>
              <div className="lorem-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus nulla voluptatibus nisi cupiditate ab consectetur
                exercitationem quia reprehenderit atque ipsam eaque, recusandae
                est nihil, suscipit accusantium velit fugiat quae magni maxime
                aliquid repudiandae ipsa voluptates amet. Optio sed provident
                deleniti.
              </div>
              <div className="btns-main">
                <button className="get-started-btn m-2">GET STARTED NOW</button>
                <button className="learn-more-btn m-2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-slide-main">
            <img src={Background} className="slide-image" alt="" />
            <div className="inner-content-main">
              <div className="client-heading">
                Our Clients Are Our First Priority
              </div>
              <div className="welcome">WELCOME TO BINO</div>
              <div className="lorem-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus nulla voluptatibus nisi cupiditate ab consectetur
                exercitationem quia reprehenderit atque ipsam eaque, recusandae
                est nihil, suscipit accusantium velit fugiat quae magni maxime
                aliquid repudiandae ipsa voluptates amet. Optio sed provident
                deleniti.
              </div>
              <div className="btns-main">
                <button className="get-started-btn m-2">GET STARTED NOW</button>
                <button className="learn-more-btn m-2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-slide-main">
            <img src={Background} className="slide-image" alt="" />
            <div className="inner-content-main">
              <div className="client-heading">
                Our Clients Are Our First Priority
              </div>
              <div className="welcome">WELCOME TO BINO</div>
              <div className="lorem-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus nulla voluptatibus nisi cupiditate ab consectetur
                exercitationem quia reprehenderit atque ipsam eaque, recusandae
                est nihil, suscipit accusantium velit fugiat quae magni maxime
                aliquid repudiandae ipsa voluptates amet. Optio sed provident
                deleniti.
              </div>
              <div className="btns-main">
                <button className="get-started-btn m-2">GET STARTED NOW</button>
                <button className="learn-more-btn m-2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slidder;
