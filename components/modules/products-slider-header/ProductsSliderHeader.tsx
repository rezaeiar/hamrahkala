import Link from 'next/link'
import React from 'react'

export default function ProductsSliderHeader() {
    return (
        <div className=''>
            <div className="container">
                <div className="bg-general-30 rounded flex items-center justify-between h-14 text-xs text-general-100 px-4">
                    <h3 className='text-sm font-iransans-bold'>
                        جدیدترین گوشی ها
                    </h3>
                    <Link href={'/'} className='flex gap-1 items-center text-general-80'>
                        مشاهده همه
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-80">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
