import React from 'react'
import HeroSection from '@/components/landing-page/hero-section'
import CtaButtons from '@/components/landing-page/cta-buttons'
import ComapniesCarousel from '@/components/landing-page/companies-carousel'
import BannerImage from '@/components/landing-page/banner-image'
import AboutCards from '@/components/landing-page/about-cards'
import FaqAccordion from '@/components/landing-page/faqs-accordion'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <HeroSection/>
      <CtaButtons/>
      <ComapniesCarousel/>
      <BannerImage/>
      <AboutCards/>
      <FaqAccordion/>
    </main>
  )
}

export default LandingPage