"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function HeadetSlider() {
    return (
        <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper gap-0"
        >
            <SwiperSlide>
                <div className="h-80">
                    <Image
                        alt="Mountains"
                        src={'/images/banners/65d48c3b4a720.gif'}
                        quality={100}
                        width={100}
                        height={500}
                        sizes="100vw"
                        className='h-full w-full'
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="h-80">
                    <Image
                        alt="Mountains"
                        src={'/images/banners/65b8ad104165c.jpg'}
                        quality={100}
                        width={100}
                        height={500}
                        sizes="100vw"
                        className='h-full w-full'
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
