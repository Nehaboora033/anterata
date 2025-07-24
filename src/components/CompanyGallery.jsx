import React, { useRef, useState } from 'react'
import Heading from './common/Heading'
import { Gallery } from '../utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const CompanyGallery = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='max-w-[360px] w-full bg-[#192145] rounded-[10px]  py-4 px-5'>
      <Heading className={'text-xl mb-[15px] '}>Company Gallery</Heading>

      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        className='relative'>
        {Gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`slide-${index}`}
              className='max-w-[320px] max-h-[216px] object-cover w-full rounded-[8px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation (manual) */}
      <div className='flex gap-2 mt-4 justify-center flex-wrap'>
        {Gallery.map((img, i) => (
          <img
            key={i}
            src={img.image}
            alt={`thumb-${i}`}
            onClick={() => swiperRef.current.slideToLoop(i)}
            className={`:h-[51px] min-[390px]:w-[74px] w-[58px] object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 ${i === activeIndex ? 'border-[#62C9CC]' : 'border-transparent'
              }`}
          />
        ))}
      </div>

      {/* Pagination BELOW thumbnails */}
      <div className='custom-swiper-pagination mt-4 flex justify-center' />
    </div>
  )
}

export default CompanyGallery