import React from 'react'
import Header from '../components/Header'
import LifestyleHero from '../components/LifestyleHero'
import PowerofMindset from '../components/PowerofMindset'

const LifestyleMindset = () => {
  return (
    <>
        <Header />
        <section>
          <LifestyleHero />
        </section>
        <section className='bg-[#fff]'>
          <PowerofMindset />
        </section>
        
    </>
  )
}

export default LifestyleMindset