import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import carousel1 from '../../images/carousel-1.png'
import carousel2 from '../../images/carousel-2.png'
import carousel3 from '../../images/carousel-3.png'
import carousel4 from '../../images/carousel-4.png'
import {
  GlassMagnifier,
} from "react-image-magnifiers";

const SliderImg = () => {
  const style = {
    width: '100%',
    height: '',
    marginTop: '10%',
  }
  return (
    <section style={{ backgroundColor: '#111430', paddingTop: '5%' }} className="services-container mt-5">
      <div className="text-center">
        <h1 style={{ color: '#fff', fontWeight: 'bold' }}>Here are some fo our works</h1>
      </div>
      <Swiper
        className="services-container mt-5"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel1}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel2}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel3}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel4}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel1}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel2}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            style={{ height: '350px', marginTop: '10%' }}
            imageSrc={carousel3}
            imageAlt="Example"
          />
        </SwiperSlide>
        <SwiperSlide className="img-fluid mb-3">
          <GlassMagnifier
            style={style}
            imageSrc={carousel4}
            imageAlt="Example"
          />
        </SwiperSlide>
        <div className="text-center">
          <h1 style={{ color: '#fff', fontWeight: 'bold' }}>. . .</h1>
        </div>
      </Swiper>
    </section>

  );
};

export default SliderImg;