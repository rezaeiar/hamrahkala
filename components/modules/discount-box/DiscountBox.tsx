"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


export default function DiscountBox() {
    return (
        <div>
            <div className="container">
                <div className="bg-pattern bg-red-90 rounded-md py-4 px-1">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="h-64"
                    >
                        <SwiperSlide>
                            <div className="h-full flex flex-col items-center justify-center">
                                <Image
                                    alt="Mountains"
                                    src={'/images/svg/Amazings.svg'}
                                    quality={100}
                                    width={100}
                                    height={500}
                                    sizes="100vw"
                                    className='w-16'
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                                <Image
                                    alt="Mountains"
                                    src={'/images/utils/box.webp'}
                                    quality={100}
                                    width={100}
                                    height={500}
                                    sizes="100vw"
                                    className=''
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                                <Link href={'/'} className='text-sm text-white'>
                                    مشاهده بیشتر
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white h-full rounded">
                                f
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
