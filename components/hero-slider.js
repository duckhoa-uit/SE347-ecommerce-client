// import { Button } from '@mui/material';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
// Swiper import
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

HeroSlider.propTypes = {};

function HeroSlider() {
  const items = [
    {
      type: 'Authentic',
      title: 'Made with love',
      description:
        'Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-orange-50'
    },
    {
      type: 'Timeless',
      title: 'Interior designs',
      description:
        'Konsept was born in Vietnam in 2021, and is today a premium retail lifestyle brand. We design, produce and sell a range of contemporary Danish design furniture , accessories and lighting for the living room, dining room, bedroom, home-office and outdoor spaces.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-sky-50'
    },
    {
      type: 'Tailored',
      title: 'Classic interiors',
      description:
        'Today, the company continues to address new lifestyles with the creation of complete, harmonious interior decor solutions that embody the best contemporary design for all areas of the home.',
      imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
      path: '/',
      backgroundColor: 'bg-amber-50'
    }
  ];

  return (
    <section className="hero-slider font-poppins">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop
        effect={'fade'}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSliderItem
                data={item}
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const HeroSliderItem = ({ data, isActive }) => {
  return (
    <div className={`hero-slider__item  ${data.backgroundColor} ${isActive ? 'active' : ''}`}>
      <div className="hero-slider__item__content konsept-container">
        <div className="hero-slider__item__content__info">
          <h2 className="type font-handwriter">{data.type}</h2>
          <h2 className="title">{data.title}</h2>
          <div className="description">{data.description}</div>
          <div className="read-more">
            <button className="read-more">
              <span
                className="circle"
                aria-hidden="true"
              >
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Read More</span>
            </button>
          </div>
        </div>
        <div className="hero-slider__item__content__image relative w-full h-[185px]">
          <Image
            src={data.imageUrl}
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};
HeroSliderItem.propTypes = {
  data: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default HeroSlider;
