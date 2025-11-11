import React from 'react'
import HeroSection from '../home/HeroSection.jsx'
import FeatureSection from '../home/FeatureSection.jsx'
import PromoSection from '../home/PromoSection.jsx'
import StorySection from '../home/StorySection.jsx'
import JournalSection from '../home/JournalSection.jsx'
import ServiceHighlights from '../home/ServiceHighlights.jsx'
import SocialEngagement from '../home/SocialEngagement.jsx'

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PromoSection />
      <StorySection />
      <JournalSection />
      <ServiceHighlights />
      <SocialEngagement />
    </>
  )
}

export default Home
