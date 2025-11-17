import React from 'react'

const HeroSection = () => {
    return (
        <section className='text-center'>
            <h1 className='flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tight py-4'>Find Your Dream Job
                <span className='flex items-center gap-2 sm:gap-6'>and get {" "}
                    <img src="/job-portal-logo.png" alt="logo" className='h-14 sm:h-24 lg:h-32' />
                </span>
            </h1>
            <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousnds of job listings or find the right candidate</p>
        </section>
    )
}

export default HeroSection