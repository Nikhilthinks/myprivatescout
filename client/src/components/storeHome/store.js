import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import slide1 from "../../assets/mountains.jpg";
import PackageCard from "../storeHome/packageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "../storeHome/storeHome.css";
import SideMenu from "../sideMenu";
import Upcoming from "./upcoming";
import infoAd from "../../assets/infoAd.png";
import Footer from "../footer";
import { colors } from "@material-ui/core";

const Store = (props) => {
  SwiperCore.use([Navigation]);

  return (
    <Fragment>
      <div className="storeHome">
        <div className="sideMenu">
          <SideMenu />
        </div>
        <div className="carouselHome">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img
                  src={slide1}
                  className="d-block w-100 slides"
                  alt="slide"
                  style={{ height: "450px" }}
                />
                <div className="slideInfo">Price and details</div>
              </div>
              <div className="carousel-item" data-interval="2000">
                <img
                  src={slide1}
                  className="d-block w-100 slides"
                  alt="slide"
                  style={{ height: "450px" }}
                />
                <div className="slideInfo">Price and details</div>
              </div>
              <div className="carousel-item">
                <img
                  src={slide1}
                  className="d-block w-100 slides"
                  alt="slide"
                  style={{ height: "450px" }}
                />
                <div className="slideInfo">Price and details</div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleInterval"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleInterval"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="upcomingTours">
          <div className="upcomingTourTitle">Upcoming Tours</div>
          <div className="upcomingList">
            <Upcoming />
            <Upcoming />
            <Upcoming />
            <Upcoming /> <Upcoming />
            <Upcoming /> <Upcoming />
            <Upcoming /> <Upcoming />
            <Upcoming />
          </div>
        </div>
      </div>
      <div className="infoBar">
        <img src={infoAd} width="1330px" height="180px" />
      </div>
      <Swiper
        id="main"
        spaceBetween={0}
        slidesPerView={4.8}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="main"
        spaceBetween={0}
        slidesPerView={4.8}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="main"
        spaceBetween={0}
        slidesPerView={4.8}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="main"
        spaceBetween={0}
        slidesPerView={4.8}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
        <SwiperSlide>
          <PackageCard />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </Fragment>
  );
};

export default Store;
