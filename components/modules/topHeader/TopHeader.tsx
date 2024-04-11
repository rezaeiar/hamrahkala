import React from 'react'
import Link from 'next/link'

export default function TopHeader() {
    return (
        <div className='bg-general-100'>
            <div className="container h-10 flex items-center justify-between">
                <div className="text-white text-xs flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    Persian
                </div>
                <div className='text-white text-xs gap-2 flex'>
                    <span>
                        جشنواره فروش ویژه را از دست ندهید و با تخفیف خرید کنید
                    </span>
                    <Link href={'/'} className='underline'>
                        خرید کنید
                    </Link>
                </div>
                <span></span>
            </div>
        </div>
    )
}
