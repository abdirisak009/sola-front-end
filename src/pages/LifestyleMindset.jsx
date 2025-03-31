import React from 'react'
import Header from '../components/Header'
import LifestyleHero from '../components/LifestyleHero'
import PowerofMindset from '../components/PowerofMindset'
import StressManagement from '../components/StressManagement'

const LifestyleMindset = () => {
  return (
    <>
        <Header />
        {/* Hero section*/}
        <section>
          <LifestyleHero />
        </section>
        {/* PowerofMindset section */}
        <section className='bg-[#fff]'>
          <PowerofMindset />
        </section>
        {/* StressManagement section */}
        <section className=' bg-gray-100 min-h-screen'>
          <StressManagement />
        </section>

        
    </>
  )
}

export default LifestyleMindset