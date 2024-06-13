import { motion } from "framer-motion"
import { styles } from '../styles'
import { EarthCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[250px] max-w-7.5xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4af41f]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="w-[3500px] h-[500px] bg-[white]/20 backdrop-blur-[5px] rounded-[20px] ">
          <h1 className={`${styles.heroHeadText} text-white ml-5 items-center mt-20`}>Take the First Step Towards<span className="text-[#4af41f]"> a Greener Future</span></h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100 ml-5`}>
          Calculate Your Carbon Footprint and Understand your impact on
          ​the environment and discover practical ways to reduce it.
          </p>
          <div className="bg-[#4af41f]/70 font-bold h-[50px] w-[200px] ml-5 mt-11 flex items-center justify-center rounded-[20px]  ">
            <a href="" className='  text-black '>Get Started Today</a>
          </div>
        </div>

        <EarthCanvas />

      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y:[0,24,0]
              }}         
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}   
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero