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
        <div className='pt-4'>
            <div className="container">
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
                    className="mySwiper gap-0 w-full rounded-md overflow-hidden"
                >
                    <SwiperSlide>
                        <div className="h-96">
                            <Image
                                alt="Mountains"
                                src={'/images/banners/d5d601e88b55950b4df781ca96c5722ad48480c6_1667981033.webp'}
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
                        <div className="h-96">
                            <Image
                                alt="Mountains"
                                src={'/images/banners/ab7a194eb65c3c85854c82a9096c1aeb1d7420d5_1667982004.webp'}
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
            </div>
        </div>
    );
}
