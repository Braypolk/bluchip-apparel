// embla carousel: https://www.embla-carousel.com/examples/basic/

import React, { useState, useEffect, useCallback } from 'react'
import { NextButton, PrevButton } from './svg'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// todo: loop isn't working correctly
export default function Carousel () {
  const [activeImageIndex, setActiveImageIndex] = React.useState(1)

const texts = [
    {
      name: 'user1'
    },
    {
      name: 'user2'
    },
    {
      name: 'user3'
    },
  ]
  return (
    <>
      <Swiper
        id="swiper-color"
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=2000' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://static01.nyt.com/images/2021/09/24/fashion/24TODS-missoni/24TODS-missoni-mediumSquareAt3X.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.byrdie.com/thmb/BnrPu3RcF930Fv5gbe3MulOXyqk=/1000x800/filters:fill(auto,1)/fashionbloggersprimary-2210aaad71a0454a899fa4345bef529f.jpg' />
        </SwiperSlide>
      </Swiper>
      {/* <div className='buttons'>
        <PrevButton />
        <NextButton />
      </div> */}
      <div className='scrollTitle'>{texts[activeImageIndex].name}</div>
    </>
  )
}
