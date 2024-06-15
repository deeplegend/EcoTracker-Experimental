import React from 'react'
import { Hero, Navbar, Experience } from '../components'
import { styles } from '../styles'
import { industry, analysis } from '../assets'

function Home() {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div className="relative w-full bg-black">
        <img src={industry} alt='Industry' className='h-[500px] w-full object-bottom object-cover mt-20'/>
        <div className='text-center text-[50px] mt-20'>
          Our easy-to-use carbon footprint <br />calculator helps you understand <br />your carbon emissions
        </div>
        <div className='bg-[#e08616] w-[300px] h-[70px] flex items-center justify-center rounded-[50px] mx-auto mt-10'>
          <a href="" className='text-[20px] text-black font-bold'>Find out more</a>
        </div>
      </div>
      <div className="relative w-full bg-[#e08616]">
        <img src={analysis} alt='Industry' className='h-[600px] w-full object-center object-cover mt-20'/>
        <div className='text-center text-[50px] mt-20'>
          View <span className='text-[#4af41f]'>Analysis</span><br />and get <br /><span className='text-[#4af41f]'>Suggestions</span>
        </div>
        <div className='text-center text-[25px] mt-10'>
          Comprehensive Analysis of your data <br />helps you understand your impact.
        </div><br /><br /><br />
      </div>
      <div className=''>
      <Experience/>
      </div>
      <div className="relative w-full bg-black ">
        <div className='grid grid-cols-2 gap-4'>
            <div className='text-[40px] mt-10 ml-5'>EcoTracker</div>
            <div className='text-center mt-14 text-[25px]'>Every step counts towards a greener future.</div>
        </div>
        <div className='mt-20 ml-5 text-[20px]'>
          CONTACT US <br />ecotracker.ec@gmail.com <br />ABV-IIITM, <br />Gwalior-475014
        </div><br /><br /><br />
      </div>
    </>
  )
}

export default Home

