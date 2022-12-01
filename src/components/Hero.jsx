import React from 'react'

const Hero = () => {
  return (
    <div>
       {/* hero-section */}
      <section className='text-gray-700' id='home'>
          <div className='flex container mx-auto py-18 px-5 flex-col md:flex-row items-center justify-center'>
            <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
              <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4
              '>
                Hi! <br />
                I'm Isawa Shun!!<br />
                Web <br />
                Developer
              </h1>
              <button className='text-white bg-green-500 py-2 px-2 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
            </div>
            <div className='md:w-1/2 lg:max-w-lg w-5/6'>
              <img src="/img/hero.jpeg" alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero
