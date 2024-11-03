import React from 'react'
import { motion } from 'framer-motion'
import { Swiper , SwiperSlide } from 'swiper/react'

const Framer = () => {
    const images = ['img1','img2','img3']
  return (
    <div>
        <Swiper>
            {images.map((i)=>{
                return (
                    <SwiperSlide>
                        <img src = {i} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Framer
