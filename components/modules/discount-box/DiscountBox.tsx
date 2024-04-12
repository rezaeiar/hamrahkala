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
                <div className="bg-pattern bg-red-90 rounded-md py-8 px-1">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="h-72"
                    >
                        <SwiperSlide className='!w-44'>
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
                        <SwiperSlide className='!w-auto'>
                            <div className="flex gap-2">
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/65ed88575c489.svg'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-44 bg-white h-full rounded flex flex-col">
                                    <div className="">
                                        <Image
                                            alt="Mountains"
                                            src={'/images/products/99b3c776b994c215b57f140065155a5ebfd823f5_1684756999.webp'}
                                            quality={100}
                                            width={100}
                                            height={500}
                                            sizes="100vw"
                                            className='w-full p-4'
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <p className='text-xs text-general-90 font-iransans-semiBold'>
                                            دستگاه سرخ کن M50 مناسب برای سرخ غذا
                                        </p>
                                        <div className="flex items-start justify-between">
                                            <div className="text-[10px] bg-red-101 text-white flex items-center justify-center rounded h-4 px-0.5 self-start">
                                                18%
                                            </div>
                                            <div className='text-sm font-iransans-semiBold flex justify-start gap-1 text-general-90'>
                                                <div className="flex flex-col">
                                                    <span>
                                                        140,000
                                                    </span>
                                                    <span className='line-through text-general-60 text-xs'>
                                                        176,000
                                                    </span>
                                                </div>
                                                تومان
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
