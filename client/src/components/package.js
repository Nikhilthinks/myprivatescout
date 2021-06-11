import React , { Fragment, useState } from 'react'
import '../css/package.css'
import QR from '../assets/sosoqr.png'
import bucketList from '../assets/checklist.png'
import '../css/bootstrap.min.css'
import Footer from './footer'
import PackageCard from "./storeHome/packageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

export default function Package() {
 SwiperCore.use([Navigation]) 
return (
 <Fragment>
        <div className = "packagePage">
            <div className="packageHeading">
                <div className="vendorLogo">Logo</div>
                <div className = "packageTitle">
                    Title is the title of package

                </div>
                <div className="saveToWishlist">
                    < img src = {bucketList} width ="33px" />
                </div>
                <div className="subHeading">
                <div className="starRating">Ratings |</div>
                <div className="location">Location</div>
                </div>
             </div>
             <div className="packagePhotos">
               
                 <div className="">
<div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  <ol className="carousel-indicators">
    <li data-target="#carousel-thumb" data-slide-to="0" className="active"> <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
        className="img-fluid"/></li>
    <li data-target="#carousel-thumb" data-slide-to="1"><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"
        className="img-fluid"/></li>
    <li data-target="#carousel-thumb" data-slide-to="2"><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
        className="img-fluid"/></li>
  </ol>
</div>

                 </div>
             </div>
             <div className="tripForm">
              
    <div className="boarding-pass">
    <div className="pass-header">
        Scoutout Social
    </div>
    <div className="form-header">
       <div className="fromLocation">
           <div className="state">Delhi</div>
           DEL
       </div>
       <div className="toLocation">
        <div className="state"> Himachal Pradesh</div>
        HP
    </div>
    </div>
    <div className="pass-form-data">
  
        <div className="duration">Duration:<p className="formInput" ></p></div>
        <div className="pickupLocation">Pickup:<p className="formInput" ></p></div>
    
    </div>
    <div className="bookingForm">
        <div className="form-group">
            <label className="selectPassengersLabel" for="selectPassenegers">Select Passengers:</label>
            <select className="form-control" id="selectPassenegers" >
              <option selected>Select Passengers</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <label className="selectDate" for="selectPassenegers">Select Date:</label>
            <select className="form-control" id="selectPassenegers" >
              <option selected>Select a Date</option>
              <option>5 Aug 2020, Wednesday</option>
              <option>6 Aug 2020, Thursday</option>
              <option>7 Aug 2020, Friday</option>
              <option>8 Aug 2020, Saturday</option>
              <option>9 Aug 2020, Sunday</option>
            </select>
          </div>
          <div className="bookNow">
            <p className="bookNowTitle">Book your seat at:</p>  
            <div className="price">
                6999/-
            </div>
        </div>
        <button type="button" className="formbtn btn btn-primary" type="submit">Book Now</button>
    </div>
    <div className="pass-footer">
        <div className="pass-form-footer">
            <div className="passengerName">Passenger:<p className="formInput" ></p></div>
            <div className="countDown">Time Remaining:<p className="formInput" ></p></div> 
        </div>
        <div className="soqr"> <img src= {QR} alt="" width="65px" /> </div>
    </div>
</div>

             </div>
             <div className="packageDetails">
                 <div className="packageOverview">Overview
                     <div className="overviewHeading">Heading</div>
                     <div className="overviewDetails">Package Details</div>
                 </div>
                 <div className="packageDescription">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Inclusive
                                  </button>
                                </h2>
                              </div>
                          
                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Non Inclusive
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Additional Info
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                  <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Cancellation Policy
                                    </button>
                                  </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                  <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header" id="headingFive">
                                  <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        FAQ
                                    </button>
                                  </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                  <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                  </div>
                                </div>
                              </div>
                          </div>
                </div>
             </div>
             </div>
             <div className = "innerCarousel"> 
             <Swiper
        id="innerCarousel"
        spaceBetween={0}
        slidesPerView={3.5}
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
      </div>
            <Footer />
             </Fragment>

)
}